---
title: The Blind Watchmaker
date: 2023-12-14T06:48:00-07:00
draft: false
tags: 
- Computer Science |  
- Biology |
- Evolution
---

Genome Dynamics Visualization App:
Description:
During my Undergraduate years, I got introduced to the concept of The Blind Watchmaker by Richard Dawkins. The concept intrigued me a lot, and I got the chance to recreate and visualize the concept with the help of programming. The Program lets the user interact with a set of organisms and select the winning organism each generation, and the subsequent organisms will evolve the desired organ with superior functionality.

Significance of the work:

The application is an educational and interactive tool, offering users a visually engaging platform to comprehend the principles of evolution. The app contributes to scientific literacy by making natural selection and adaptation accessible to a broad audience. Whether used for educational purposes, scientific exploration, or as an entertaining means of learning, the app's ability to demonstrate evolutionary mechanisms in a user-friendly manner enhances conceptual understanding and promotes appreciation for the intricate processes shaping biological diversity.
The Program uses fractals that are found everywhere in nature as the building organisms. Building the application provided invaluable experience in problem-solving, debugging, and building efficient systems.

Concept:

The concept posits that the intricate design observed in living organisms arises from incremental mutations over extended periods. Despite the unforeseeable nature of natural selection, complex and seemingly designed structures can emerge. This underscores how the appearance of design in nature can be explained through the purely mechanistic and unguided processes of evolution.

Approach:

Research: Research for this project involved a foundational exploration of the underlying principles and delivery mechanisms of the concept. Interviews with both students and professionals revealed a pervasive misunderstanding of, or misinformation about, the concept of evolution. To ensure broad accessibility, the project is designed for deployment on both web and Android platforms, targeting a diverse user base.

Layout: The layout will feature a grid populated with diverse organisms, each composed of fractals with varied parameters. These parameters encompass the size of each fractal branch, the angle between branches, and the color of each branch. This implementation diverges from the original by incorporating fractals to more accurately depict real-life structures, where fractals are inherent in structures such as lungs, blood vessels, and the arrangement of leaves in plants.

User flow:
Initialization: The user begins with a random grid populated by fractal organisms, each possessing unique, randomly assigned starting parameters.
Define Evolution Criteria and Selection: The user mentally defines a vague set of success criteria for evolution, such as a specific color and shape for the organisms. The user selects organisms from within the grid based on the defined evolution criteria.
Selection and Offspring Generation: The chosen organism becomes the parent for the subsequent generation of offspring. With each click on a selected organism, a new generation of offspring is generated to replace the current grid. The offspring inherit parameters from the parent but undergo random mutations. The degree of mutation is determined by a mutation rate, introducing slight variations in parameters.
Iterative Evolution: The process of selection, mutation, and generation of offspring is iteratively repeated for several generations.
Convergence to Successful Evolution: Over successive generations, organisms that meet the defined success criteria evolve and persist, while those that do not gradually diminish. The grid transforms, retaining only organisms that have evolved into structures best suited for the given environment.
Final Outcome: After a number of generations, the grid primarily consists of organisms that have successfully adapted to the defined criteria, representing the best structures capable of thriving in their environment.


Technical execution
Fractal generator: This basically generates the organism given a set of parameters. Makes use of Trigonometric functions to calculate the position of the next branch.
Mutation logic: This defines how much the next generation varies in relation to the parent of the previous generation. Uses a handwritten randomness logic to mutate and defines how inheritance happens.

The fractals are rendered by having a struct that defines each parameter and these define the various aspects of the fractals, which are calculated recursively at each branch after applying the mutation value.

The Website: Website is written with JS canvas for easy accessibility and deployed here https://ramprakash.blog/projects/1/
Mobile Application: The mobile application is written in Kotlin for android phones and can be downloaded here : https://play.google.com/store/apps/details?id=blog.ramprakash.mutation_map&pcampaignid=web_share

Results achieved:
Helped users gain a Visual representation of the theory of evolution
Got a deeper understanding of Evolution, how it can be better explained visually and other places where it can be used.

Lessons learnt:
Understanding a concept in depth makes it easier to apply it in different contexts.
Understood more about Javascript and Kotlin languages for developing an interactive UI
Creating a framework for the interfaces before starting to program makes it easier to ideate and code better software

Links:
Explanation video by me: https://youtu.be/Q3AoHzQ2dB4
The entire codebase: https://github.com/cosmoglint/the_blind_watchmaker
Or here: https://cosmoglint.github.io/the_blind_watchmaker/

Future projects I would like to work on:
Standardize storage and access of human genetic information such that its easier for researchers and doctors to access and make use of.