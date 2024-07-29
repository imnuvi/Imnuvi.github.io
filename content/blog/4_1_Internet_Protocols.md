---
title: Problem with Binary
date: 2021-01-03T06:47:00-07:00
draft: false
tags: 
- computer science |  
- internet
---

Therw are two protocols for internet traffic.

TCP(transmission control protocol) is the safe and secure protocol. It engages a three way handshake with the recipient. The first phase is the SYN(chronous) where it establishes and verifies connection with the neighbour. The second phase is the SYN ack(synchronous acknowledgement) where the recipient computer ensures connection. The third phase is acknowledgement when the sender computer acknowledges the SYN ack and starts sending data. This method is slow and takes a lot of bandwidth but is extremely secure. If there is a loss of data packet, TCP asks the sender to resend that particular packet

But, UDP is all about dat speed. It doesn’t even verify SYN, but keeps on sending packets without any concern for the recieving computer. The advantage is it’s high speed and bandwidth.

Personally, I prefer UDP, because loss or frame has a very low probability of occouring and ofc everyone prefers fast over secure