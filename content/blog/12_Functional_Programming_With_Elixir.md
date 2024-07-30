---
title: Functional Programming with Elixir
date: 2024-07-15T06:48:00-07:00
draft: false
tags: 
- Computer Science |  
- Biology |
- Evolution
---

During my time as a professional software developer, I have always been working with object oriented languages and all codebases I have interacted with have been written with the object oriented paradigm. So when I came across the functional programming paradigm, I got curious to learn more. Reading about Haskell and Clojure portrayed functional languages as hard to grasp and not very useful. But I found out about elixir and the syntax looked promising. So I set out to learning elixir and found it surprisingly practical. It had a lot of flexibility in terms of language syntax to enable some of the rules functional programming inherently follows. So here is a comprehensive overview of what elixir is all about and some tools and ideologies I learnt.
  

## Ideological shifts
The functional programming language introduces a few ideological shifts.

**Immutable data types** – In Functional languages, all data types are immutable. Once a value is created, It cannot be changed. This is best explained with maps

```
sample_map = %{"key1" => "val1", "key2" => "val2"}
```

Now we have the map named sample map with key1 and key2. 
In an object oriented language, the dictionary will be mutable and we can directly change the key1 to a different value. But in elixir, we will have to update the key, and that will create a fresh dictionary with the updated value

```
Map.put(sample_map, "key1", "update1")
%{"key1" => "update1", "key2" => "val2"}

sample_map
%{"key1" => "val1", "key2" => "val2"}
# This is assuming iex execution. More on later sections
```

Here the original sample_map still retains its original value and the Map.put returned a fresh dictionary with its own memory location.
Object oriented programming languages usually optimise for memory and can directly update values in memory without creating copies.
With improvement in storage and memory of computers each year, we don’t have to worry about memory limitations affecting performance. Immutability enables developers to effectively debug and maintain functions without having to worry about for example a helper function updating a user object’s members.

**Anonymous Functions** – These are functions that can be passed around as variables, without being defined.


```
my_fun = fn x -> x*3 end
my_fun.(1)
# 3
my_fun.(5)
# 15
```

Here my_fun can be passed and will be treated as a variable but can also be called with the dot syntax.

**Pure Functions** – Functions in a functional language are pure. A pure function always returns the same output value for a given input and doesn’t create any side effects. Side effects are basically changes to the program or environment outside the function’s scope.

```
For example in python

test_list = [0, 0, 0]

# impure function in python
def add_to_list(eg_list):
    eg_list.append(5)

add_to_list(test_list)
print(test_list)
# prints [0, 0, 0, 5]

add_to_list(test_list)
print(test_list)
# prints [0, 0, 0, 5, 5]

add_to_list(test_list)
print(test_list)
# prints [0, 0, 0, 5, 5, 5]
```


Here the same function with the same input returns different outputs each time its called. Hence this function is impure

The same on elixir looks like this

```
# pure elixir function
def add_to_list(test_list) do
    test_list ++ [5]
end

# calling this function
test_list = [0,0,0]
add_to_list(test_list)
# [0, 0, 0, 5]

add_to_list(test_list)
# [0, 0, 0, 5]

add_to_list(test_list)
# [0, 0, 0, 5]
```

Calling the same function n times will result in the same output.

**Classy functions** – Functions are treated as values and can be passed around. For example a function can be used as an argument to another function. These can lead to higher order functions.

For example, the Enum.map function which is used to map each element with a particular operation. This operation can be any other function. Here Enum.map is a higher order function as it takes in another function as its argument.

```
my_list = [1, 2, 3, 4, 5]

Enum.map(my_list, fn x -> x**2 end)
# [1, 4, 9, 16, 25]

Enum.map(my_list, fn x -> x/2 end)
# [0.5, 1.0, 1.5, 2.0, 2.5]
```

Here Enum.map takes in the anonymous function which raises an element to the power 2. Hence the Enum.map function is a higher order function. The action that Enum.map performs on the elements depends on the function passed in as the parameter.

# Recursion

## Recursion

### Recursion

In Elixir, everything is handled with recursion. Not even just the functions, even the data types ideologically follow recursion. Some points that might seem weird but are very useful.

A function can be defined multiple times with different signatures, based on the number of arguments, type of arguments
Functions defined multiple times means it is easier to write end cases for recursion and the same function can be called multiple times. For example, a factorial function can be written as

```
def fact(0) do
    1
end

def fact(n) do
    n * fact(n-1)
end

fact(5)
#120
```


And there we go. A factorial program without any if statements!

There isn’t a dedicated for loop like in object oriented programs. In the sense, if you want to loop 100 times, what you essentially do is generate an iterable of length 100, and go through each of them performing an action on each of them. ( In my opinion this is such an interesting idea and this is how programming should be taught to new people )


```
# this runs 10 times multiplying iter by 2

for n <- 1..10, do: n * 2
# [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

Every iterable data type is recursed around to access its values. In elixir, each list only contains two values. a head value and another list. Now the next list will contain its own head value and another list. to understand this take a look at this
[ 1 | [ 2 | [ 3 | [ 4 | [ 5 | [ ] ] ] ] ] ]

Here the description is like this [ head | tail_list ]. ( by the way, above representation is the valid way to describe a list. the normal method of [1,2,3,4,5] is just syntactic sugar )

This means that in order to get all values of a list, you don’t loop through the elements, you recurse through the items.


```
def double_each([]) do
  []
end

def double_each([head | tail]) do
  [head * 2 | double_each(tail)]
end

my_list = [1, 2, 3, 4, 5]
double_each(my_list)
# [2, 4, 6, 8, 10]
```


**Pattern Matching** – Each assignment statement is not really an assignment statement. In most functional languages, it is an eqality. Think of a math equation, here the equals = sign merely states that the left hand side is equal to the right hand side. Functional programming languages take this idea and extend it.

So each equals sign in elixir means that any values on the left are equal to the values on the right. This provides us the ability to match values. The important use of this is to define functions that can match certain criteria based on the arguments and to write guard classes.

```
[a, b, c] = [1, 2, 3]

a
#1

b
#2

c
#3
```

Here We have essentially equated the list on the left to the list on the right. And so, each variable a, b, and c gets pattern matched and the compiler knows that a, b and c should be that specific value.

Whew, that was a lot of new info. But what all of these enable us to do, is our codebase is now very robust and way easier to debug. Functions can be considered as black boxes that work as they are supposed to. Elixir also supports parallel processing since each function can be set to run on different cores, without having to worry about passing in data and state of data within our memory. More than that, it is a fun way of looking at programming and teaches a lot of good practices, which can be incorporated into our development flow.

I have been solving some usual programming problems with elixir for a while now and these are available here https://github.com/imnuvi/Algorithms

## Resources:
Here are a couple of useful resources which helped me understand and learn Elixir

Books on elixir – https://github.com/sger/ElixirBooks?tab=readme-ov-file
Elixir Succinctly book – https://www.syncfusion.com/succinctly-free-ebooks/elixir-succinctly
Official elixir Hexdocs documentation of elixir packages – https://hexdocs.pm/elixir/1.12/Atom.html
I will be publishing a part two of the functional programming series, where I will cover more ideological shifts and elixir quirks and part three where we will go through OTP ( Open Telecom Platform ) and parallel processing for distributed fault tolerant systems.