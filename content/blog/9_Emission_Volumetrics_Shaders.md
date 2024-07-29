---
title: Emission Volumetrics and volume shaders
date: 2021-05-20T04:48:00-07:00
draft: false
tags: 
- blender |  
- shaders |
- Volumetrics
---

These are two closely related shaders that go well with each other. Lets start with the emission. It makes an object glow with a particular colour. This is useful when the lighting used in a scene is shaped a particular way(like those halo lights streamers use). This gives the scene the specific look imagined.

If you’ve seen a rendered image and something made it look ethereal or punchy, its probably the emission shader.

The way this works with volume shaders is crazy. Volume shaders differ from normal shaders. Normal surface shaders give a look only to the surface of the object. It does not affect the size or the density of the object. Here’s where volumes come in. Volume shaders give the entire volume a particular look. It can be used to determine how much light enters the object(imagine light shone on ice).

When the density of the volune is given a small number like 0.05 to .5, this gives the entire object a slight foggy look. The anisotropy value is set to about 0.3. Anisotropy is basically getting a different look from different angles(this is such a deep topic that deserves its own post).

When another object with emission shader is placed inside the volume object, voila you get cool rays from the emission object that give the scene depth instead of just being normal lighting. This is called volumetrics where you can actually view the light direction. There is a world volume shader which shades the entire world with the particular volume.

So, it’s no surprise that most of my renders have crazy colored emissions and volumetrics.