---
title: Bellman, Markov and the Q
date: 2021-01-12T03:48:00-07:00
draft: false
tags: 
- computer science |  
- Machine Learning |
- Markov
---

Surfing through some hackerrank profiles, I found a guy, who made an AI chess addon that can view any chess board in a browsre page and provide a continuation for it. Which got me really interested in AI and spending money on udemy.

The concept that was the base of all the AI magic was the bellman’s equation.

It describes that the value of any state of an environment as the maximum sum of reward for performing an action and the value of the next state.

The bellman’s equation goes like so

V(s) = max(R(s,a) + ∆V(s’))

But this equation is for static environments with no probability.

For environments with a probability factor, markov equation gives an equation with consideration of randomness

V(s) = max(R(s,a) + ∆*sum(p(s,a,s’)V(s’)))

But even better is the concept of q learning. The base concept of q learning is that, instead of giving values to a state and action, we definitely the quality of an action. This has the effect of separating each state based on the actions it can take and prescribing the best action to take also considering random probability.

Q(s,a) = R(s.a) + ∆*sum (p(s,a,s’)*max (Q(s’,a’)))

This recursively gives the action based on previous action quality, thereby providing more accurate Intel and paths to traverse the environment.

The temporal difference is yhe difference between previous q value and newly calculated q value based on new information. This temporal difference is dynamic and chooses best action based on previous and current data

TD(a,s) = R(s, a) + ∆max (Q(s’, a’) – Qt-1(s, a))

And

Qt(s,a) = Qt-1(s,a) + ∆TDt(a,s)

=> Qt(s,a) = Qt-1(s,a) + @(R(s, a) + ∆max (Q(s’, a’) – Qt-1(s, a)))

Which may look complicated but simple enough and means that current Q value depends on previous Q values and the current reward thereby changing any value dynamically based on rewards acquired. If the new value is low the old value is kept as such. Rewards can be given at any state of the environment, gaining accurate control and precision over the agent

R – reward

V – value

Q – quality

P – probability of an action (or randomness in environment)

TD – temporal difference

You can always teach a new dog new tricks, if it’s willing to learn.