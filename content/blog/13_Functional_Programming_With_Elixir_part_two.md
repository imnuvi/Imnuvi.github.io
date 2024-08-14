---
title: Scaling Elixir Applications
date: 2024-08-12T18:20:59-04:00
draft: false
tags: 
- Computer Science |  
- concurrency |
- functional language
---

# Fault Tolerance

Continuing with the Functional programming with elixir series, we will be diving into fault tolerance and how elixir as a language has the tools to create fault tolerant systems.


The way Elixir approaches fault tolerance is similar to how Kubernetes approaches fault tolerance. In a kubernetes cluster ( group of virtual machines ) whenever any child pod ( singular virtual machine of the group ) crashes or goes down, could be due to a multitude of reasons for eg. Due to a database connection failing, or a web api failing due to mismatched response. Kubernetes has a control plane that usually decides what to do with the node, and usually the strategy is to restart the pod and check if it works.

Similarly in elixir, there is a master process that takes care of any dead and errored processes. This master will get a :Exit signal whenever a process dies and based on the strategy the process gets recreated. This is done at the language level itself and BEAM ( the erlang VM ) itself takes care of this. This is possible as the elixir processes are isolated and don't have any interdependence. In essence any singular part of the program that is on the process that crashes can be restarted separately without having to worry about the other parts of our code.

For example - Assume we have a process that connects to the database, reads some stuff and send out the data as an email. Here if the process fails at the database connection, the master looks at the process and will automatically spawn another process that does the same thing. This can happen multiple times without us having to worry about manually handling the error and figure out a fallback option or have a separte retry queue that does all of this.
This is possible because the processes handle immutable data and don't update a common memory.


Now the question arises, how is this different from a kubernetes cluster that essentially does this.
The main difference is how the software itself is designed and thought about. Lets say we have a python program that runs on a kubernetes cluster, that faces the exact same scenario where the database is unreachable, we usually catch the exception and notify it, but the program will still continue. In elixir this scenario will stop the process and that sends a message to the master, and the master decides the best course of action
In essence elixir is made for vertical scaling a system right from the program, and kubernetes is supposed to horizontally scale our system.
elixir coupled with it's distribution system can be used to scale any system



## How to write fault tolerant mechanisms

Our code should not handle errors and should fail. The handling is done by the supervisor. The following code is a mock implementation of a database connection that performs some action.


```
defmodule DbConnector do
  use GenServer

  @impl true
  def init(initializer) do
    {:ok, initializer}
  end

  def start_link(state) do
    GenServer.start_link(__MODULE__, state, name: :dbconnector)
  end

  @impl true
  def handle_cast({:connect, connection_string}, _state) do
    # assume the connection and the database actions happen here
    {:noreply, connection_string}
  end

end
```

Here, we are defining a process that connects to a database and can run whatever it needs to on it. Usually with any other declarative language, we will have to check if the database connects, if the output is returned and if any other error occurs.
But here we have just defined the success criteria, which means for any sort of failure, we will automatically let the supervisor handle it.


In the terminal we start a new iex session with the DbConnector module imported. Now we start a 
```
iex(1)> children = [  %{ id: DbConnector, start: {DbConnector, :start_link, [[:hello]]} } ]
[%{id: DbConnector, start: {DbConnector, :start_link, [[:hello]]}}]
# We are starting the supervisor to spawn new process for the DBConnector
# the strategy is one for one, which mean the supervisor will start a new process if one fails.
iex(2)> {:ok, pid} = Supervisor.start_link(children, strategy: :one_for_one)
{:ok, #PID<0.149.0>}
# we can check the process location with Process.whereis/1
iex(3)> db_pid = Process.whereis(:dbconnector)
#PID<0.150.0>
# we are manually killing the process here to simulate failure
iex(4)> Process.exit(db_pid, :kill)
true
# Here we can see that the process was automatically started by the supervisor and has a different pid
iex(5)> Process.whereis(:dbconnector)
#PID<0.151.0>
```


What all of this essentially means is that our code does'nt have to worry about handling lots of edge cases. Even in case of failure the process will automatically start and none of our other processes have to stop.


# Distribution

Elixir code compiles and runs on the BEAM VM, which means it already has access to erlangs powerful distribution library.
The Erlang Distribution library enables us to have different "nodes"

Each node is a separate process that runs with its own name and can communicate with other nodes by passing messages. You can also execute functions on the called node based on the configuration.

The Node.spawn_link/2 function takes in two arguments, the remote node and the name of the function


Below is an example of starting different nodes and communicating between each of them.



## How to distribute your code

We start a node with user1 as the name

```
iex --sname user1@localhost
```

here we define a module as User1 which just prints its name out
```
iex(user1@localhost)1> defmodule Run do
...(user1@localhost)1>   def say_name do
...(user1@localhost)1>     IO.puts "Hi, my name is User1"
...(user1@localhost)1>   end
...(user1@localhost)1> end
```


we start another node as user2 
```
iex --sname user1@localhost
```


We are calling the defined function using Node.spawn_link function and using the node name and the say_name function, which prints the called node's name

```
iex(user2@localhost)1> Node.spawn_link(:User1@localhost, fn -> Run.say_name end)
Hi, my name is User1
#PID<13823.123.0>
```

By effectively using the fault tolerant paradigm and distributing our code, we have full scalability and secure code running in the servers.