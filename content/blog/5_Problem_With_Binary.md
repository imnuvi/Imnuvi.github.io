---
title: Problem with Binary
date: 2021-01-04T06:47:00-07:00
draft: false
tags: 
- computer science |  
- binary
---

Confusion arose when the lights turned on when they were supposed to be off and lit the room blue.

The LED was connected to pin 18 of the gpio and given an on pulse. But nothing interesting happened. When the off signal was given, the LED started off.

Upon investigating the problem in the strange waters of the internet, there were a lot of confusing answers and I realized the fact that a basic understanding of how LEDs and gpio works was essential.

GPIO input/output pin works by sending a 1 for on pulse and a 0 for off pulse. 1 represents sourcing and 0 represents sinking current. So 1 doesn’t necessarily mean turning the connected device on. It just means a current is sourced.

If the anode of the LED is connected to the I/O port the port can provide only a 12mA current source. This means th LED doesn’t have enough current.

But if the cathode was connected to I/O instead, and the anode to the 3V supply, (more than 20 mA) full brightness can be reached but the configuration is inverted and LED turns on, when the 0 pulse is given and off when the 1 pulse is given.

The best way to adress this boggling issue is to change the configuration in the code from 1 for on, to 0 for on. Although this sounds like a workaraound, truth is, no one cares how it works and just wants to see that light glow