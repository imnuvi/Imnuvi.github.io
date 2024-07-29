---
title: Getting started with cloud systems
date: 2021-07-14T04:48:00-07:00
draft: false
tags: 
- Computer Science |  
- Cloud Computing
---

Learning system design with #crio.do

I have refrained from understanding how cloud computing works, for fear of being overwhelmed by the AWS beginner guide. But I got a chance to understand it from a different source. Heres what I learnt from the system design miro experience.

SETTING UP The first step in designing is to rent a virtual machine from Amazon Web Services. Create a new AWS account and head to the launch EC2 instance page. While setting up your virtual machine, youll be asked to create a key which will be used to access your machine with a secure shell from your computer. This key needs to be kept secure and this can be done by using

chmod 400 key.pem

command which allows only the admin to access the key file. next connect to the VM with the ssh command on linux or using putty on windows. After gaining access, set up a HTTP server on your machine using Nginx, which allows you to configure and set up a fresh website.

In order to access your website a static IP (Ip that does not change every time you restart your machine) which can be done in the AWS from the elastic IP panel. This enables you to access your server from your web browser by typing the static ip address.

DIVING IN Now that you have your server up and ready, we need a domain name to go with your server ( would you rather type google.com or 8.8.4.4 ?). After visiting a domain hosting site like godaddy.com ( and painstakingly finding a domain name that suits you) The static ip address of your server can now be assigned to your domain name. But everyone cannot access your website because AWS has inbuilt firewall that blocks all ports. So create a new access group and allow all http traffic through it from any ip. Now your website can be accessed with your domain name.

ACTUAL SYSTEM DESIGN Now that we have our website ready to go, there needs to be a way to split up heavy traffic in your servers. To handle this set up a new VM the same way as before and configure it a static ip. Now in your domain name provider settings add this new ip to your domain name. This means when a person accesses your domain name, either of the two ip addresses gets served based on the current traffic (if one server is down, the other will be served).

FINAL CONTENT DELIVERY With everything set up, if your website wants to deliver humongous files or large content, a content delivery netword will reduce the time taken to serve it to a user.So set up an account with some free cdn providers. The basic idea of a cdn is creating cached version of your content in multiple parts of the world so that the content can be accessed by people from various parts without much delay.

THOUGHTS This micro experience was a fun way to explore new territories and the #IBelieveInDoing workshop was a deep and enlightening experience. Glad to have been a part of this wornderful endeavour.