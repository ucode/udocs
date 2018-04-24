---
id: animation_property
title: CSS Animation Property
sidebar_label: Animation Property
---

## Setting up Animations
CSS animations are made up of two basic components.

1. Keyframes - set up the stages and styles of the animation.
2. Animation Properties - assign the animation to a specific CSS element and define _how_ it runs.

### Part #1: Keyframes 

Keyframes define what the animation looks like at each stage of the animation timeline. Each `@keyframes` is composed of:

- Name of the animation| A name that describes the animation, for example, bounceIn.
- Stages of the animation| Each stage of the animation is represented as a percentage. 
  - 0%represents the beginning state of the animation. 
  - 100% represents the ending state of the animation. Multiple intermediate states can be added in between.
- CSS Properties| The CSS properties defined for each stage of the animation timeline.

A simple `@keyframes`
```css
@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
```

#### (If you’re unfamiliar with CSS Transforms, you’ll want to [brush up.](https://udocs.com/docs/css_transforms.html) Combining CSS transforms in the animations is really where the magic happens.)

### Part #2: Animation Properties

Once the `@keyframes` are defined, you need the animation properties for your animation to function.

The animation properties are added to the CSS selectors (or elements) that you want to animate. 
###### Must have:

- animation-name: The name of the animation, defined in the `@keyframes`.
- animation-duration: The duration of the animation, in seconds (e.g., 5s) or milliseconds (e.g., 200ms).

Continuing with the above bounceIn example, we’ll add `animation-name` and `animation-duration` to the div that we want to animate.

```css
div {
  animation-duration: 2s;
  animation-name: bounceIn;
}
```
or shorthand:
```css
div {
  animation: bounceIn 2s;
}
```

###### Optional

In addition to the required animation-name and animation-duration properties, you can further customize and create complex animations using the following properties:
| property | description | Values|
| -------- | --- | ---|
|`animation-timing-function`| establishes preset acceleration curves (how fast it goes during the transition.| `ease`, `ease-out`, `ease-in`, `ease-in-out`, `linear`, `cubic-bezier(x1, y1, x2, y2)` (e.g. cubic-bezier(0.5, 0.2, 0.3, 1.0))|
|`animation-delay`| the time between the element being loaded and the start of the animation sequence.| Use seconds(s) or milliseconds(ms). Ex: 5s or 5000ms|
|`animation-direction`| sets the direction of the animation after the cycle. Its default resets on each cycle.| `normal`, `alternate`, `reverse`, `alternate-reverse`
|`animation-iteration-count`| the number of times the animation should be performed.| Set with a number or the keyword `infinite`|
|`animation-fill-mode`| sets which values are applied before or after the animation. For example, you can set the last state of the animation to remain on screen, or you can set it to switch back to before when the animation began.| `forwards`(keeps it like it is at the end), `backwards`(when animation is done, this keeps the styles where they are at 0%), `both`, `none`|
|`animation-play-state`| pause or play the animation.| `paused` or `running` default is `running` (usually used on a `:hover` or another psuedo-class.)|

[Animation Property Shorthand](https://robots.thoughtbot.com/css-animation-for-beginners#animation-property-shorthand)
----------------------------------------------------------------------------------------------------------------------

Each animation property can be set individually, but for cleaner and faster code, it's recommended that you use the animation shorthand. All the animation properties are added to the same `animation:` property in the following order:

```css
animation: [animation-name] [animation-duration] [animation-timing-function]
[animation-delay] [animation-iteration-count] [animation-direction]
[animation-fill-mode] [animation-play-state];
```

