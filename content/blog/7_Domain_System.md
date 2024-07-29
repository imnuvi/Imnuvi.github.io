---
title: Domain System
date: 2021-01-11T03:48:00-07:00
draft: false
tags: 
- computer science |  
- DNS |
- routing
---

The domain name system, DNS for short is one of those creative ideas that make human life easier on the internet. The system is for converting human understandable domain names into ip addresses for easy relembrance and searching of a particular ip address.

There are four important parts for a smooth domain retrieval. They are the recursive DNS retriever, the Top Level Domain nameserver, root nameserver and authoritative nameserver.

The recuesive retriever is the first one to recieve the user input ‘theserver.com’ this then queries the DNS root nameserver.

This then sends the query to a TLD nameserver which has the .com level domain.

The TLD replies with the domain nameserver consisiting of theserver.com domain name which then sends the ip address of the domain.

Finally the DNS resolver responds to the user browser by providing the ip address found, and renders the webpage that is to be shown to the user.

The crazy cool thing is how a computer figuratively understands human language does what needs to be done by itself.