---
title: Blindfold and Perms
date: 2021-01-02T06:45:00-07:00
draft: false
tags: 
- speedcubing |  
- math
---

Solving the Rubik’s cube sub-one minute is cool, solving it sub five is probably overkill. But solving it blindfolded is a whole another story. It isn’t hard or anything until you reach the world of parity. Let’s get some basics straight

Lets forget orientation for this one and focus on permutation. From the permutation groups field in mathematics, the edges and corners of a rubiks cube can only be shuffled around in odd numbered groups(excluding one, because you can’t switch a single piece, duh).

The problem arises when two edges and two corners are switched. This occours in 50 percent of solves. Speaking plainly the parity inverses itself for single turn of any face of the cube.

But, don’t turn that face too fast because remembering cube positions is hard enough without having to calculate ten different transitions in blindfold solve. Common algorithms can switch only 3 edges or corners. Thats when the T perm comes in. The cool algorithm swaps edges 2-3 and corners 2-3. Its a leap akin to an ant moving into the third dimension (and thereby solving string theory).

This means that any algorithm that swaps even numbered pieces is a permutation parity solver. The other perms like J perm and F perm look more appealing than the T perm but as far as solving the parity goes, only one face rotation is enough, as long as you don’t have that blindfold on.