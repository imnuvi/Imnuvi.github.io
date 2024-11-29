---
title : Why Elixir
date : 2024-11-25T10:05:33-05:00
draft : false
tags:
- Programming
- Functional
---

### Elixir

Whenever I tell someone Elixir is my favourite programming language, I am usually met with one of two responses - "That's crazy" or "What is this guy talking about?"

I wanted to explain why I personally like elixir, love the paradigm and why I believe parallelization is the way to go ( unless you are a web developer building a very niche product )
<br>

#### The history

In the 1990's Ericsson needed a fault tolerant and safe system to maintain and run their telephone exchanges. They decided to write their own language called Erlang ( apparently short form for Ericsson Language ) with which they implemented the OTP or Open Telecom Platform. It is a set of tools that implement a sort of pub sub mechanism that can be parallelised without worrying about failure

The basic functioning of the language is as follows. Erlang can start it's own processes ( which are different from system processes ) That have their own scope and can change their behaviour during runtime. The processes are isolated but can communicate with other processes like a pub sub mechanism but between processes.
These processes can also be spawned on different nodes that can have their own listeners offering extremely parallel applications.
<br>


How does elixir come into the picture ?
Elixir is essentially written on top of erlang. So every elixir program is compiled to run on the Erlang VM and is compatible with any erlang module. This means you have access to all modules within erlang while also getting better syntax and QOL that speeds up development process.
This means elixir is the best of both worlds, you get fault tolerant systems with a very modern programming language that is just so good to write.
<br>

##### What I Love about Elixir

- It made me think differently : Having a purely functional programming paradigm meant I had to look at datastructures and algorithms differently.
- Syntactic sugar : Elixir is very modern and has a few inherent mechanisms that make life so much easier. Like the |> syntax, which looks much cleaner and nicer than chaining a hundred different functions.
- Highly parallelizable : The language itself inherently supports parallelisation of code, which I have never written.

<br>

#### Why I fell in love with Elixir

I can go on and on about Elixir, which I have already done [Functional Programming with Elixir](/blog/12_functional_programming_with_elixir/)
But here are the main reasons why I really love programming in elixir
- The language gave me a unique perspective to solving some problems.
- I love recursion
- It feels like I'm playing a fresh game every time I code something up in elixir.
- I love atoms.

<br>

In conclusion, even though some of the history I shared might not be relevant, this is my reasoning for liking the language. I highly recommend you atleast give the language a try and let me know how it goes.