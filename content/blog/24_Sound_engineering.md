---
title : The Alignment Problem
date : 2025-04-3T22:19:32-05:00
draft : false
tags:
- Music
- Audio Studio
- Production
---


### Imitation

The author introduces the idea of imitation and how humans are naturally more imitative than our ancestors - the apes. Children as young as 4 hours can learn how to put out their tongue if you teach them. This level of imitation could be the basis of how we think about society, values and empathy. Children also won't imitate inanimate objects programmed to do so or if performed by a robotic arm for instance. This has interesting implications for robotic nannies. 

Overimitation is when to seek approval, someone imitates seemingly irrelevent actions that have no impact on a task at hand. This overimitation was more common in humans than in chimpanzees, which does not make sense. How can humans do a poorer job of what is relevant and irrelevant [https://web.archive.org/web/20250221210256/https://www.nytimes.com/2005/12/13/science/children-learn-by-monkey-see-monkey-do-chimps-dont.html] The behaviour became surprisingly worse in older kids! The surprising part was the children knew certain actions did nothing and still did it. It seems like the mind leaned towards mindless blank copying rather than having to think.

Seemingly this is a surprising outcome. Why would humans imitate useless steps? is it just to imitate? No, the answer is that the human brain is much more sophisticated than that. Humans are aware that the person that is doing the useless action, is also equally smart. And they would have optimized their actions to only be the best. So even though it seems like there is no utility to some actions, the young humans still imitiate and do the same action. This enables us humans to learn from other's experiences much much faster! It's an efficency mechanism built into our brains as a species.

This was a epiphanic moment for me in the book. This idea led to the idea of training agents to act based on role models.

But there is a fundamental problem with this. Training a model to learn how to steer a wheel in mario kart while it captures images about the road sounds like a good plan. There is a fundamental flaw in this idea. The amateur model, is learning from a professional driver. Whenever it makes even the slightest of mistake, the error cascades on itself, making it go and fall off the course.

There are two solutions to this:

- One is to have the joystick in hand, when the model is playing and tweaking it as if you would play.
- The other idea is to let the model and the player have a hand on the joystick at the same time. Once the model feels like it's in a strange situation, it hands over control to the player, and the player controls the cart away from the dangerous situation. ( an interesting quote from the author here "The network keeps improving at doing what you would have done. There are periods where you're not sure whether you're driving or not." )

The next part of the book takes a very interesting turn.

#### Possibilism vs Actualism

'''
What would you do if you were me? she said.
If I were you-you, or if I were you-me?
If you were me-me.

If I were you-you, he said, I'd do exactly what you're doing.

- Robert Hass
'''

Sometimes, if you are an amateur, imitating the moves of a master is a grave idea. This is such a paradoxical idea. But you can think of it as, you have'nt explored more of the actual space to know how or why an action is good and is taken by an expert. Unless you can do exactly what the expert did ( and every single possibility in the universe that the expert would have done ), there is no way to do everything the expert does and get good results.

This comes down to a philosophical talk on, which option to choose? Given a chance to choose the lower vs the higher virtue action, one should always choose the lower virtuous action if it results in a better outcome than the worst outcome with the higher valued outcome. For example, there is no point in even presenting an act that puts the agent ina position to do great things if the same act also puts the agent in a position to do something disastrous, and the agent would choose the latter rather than the former". This touches more about the emotional aspect of all of these agents. As humans, we sometimes don't do the cutthroat logical evaluation of a situation. Instead of taking the pragmatic yet rude action, that will result in a better outcome for both parties, for example when asked to review a resume, when you have a biological review article - If you say yes to the resume, you might just procrastinate and not do it, while if you say no, the person might get it revied from a different person who is not as qualified as you are, but still there is atleast a review. So saying no is better for the both of you. Same with saying yes to parties and everything else in life.

This translates to the discussion on "Effective Altruism". You basically donate all your money to the maximal benefit of others. Interesting. The direct application of this in machine learning is in agentic Q-learning methods. These methods can be split into on-policy and off-policy methods. On-policy methods work on the would be outcomes. But the off-policy agent, tries to take the action that always maximizes the reward, the could be outcomes. But this can quickly lead to trouble as the model would take a move that it cannot handle.
