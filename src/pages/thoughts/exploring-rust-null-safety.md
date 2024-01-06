---
layout: "../../layouts/MarkdownLayout.astro"
title: "Exploring Rust: Null Safety"
date: "January 06, 2024"
---

# Exploring Rust: Null Safety

Okay, I've got to admit something. For the longest time, I've been tuning into [Prime](https://twitter.com/theprimeagen)'s stream and YouTube videos, and, despite all the hype, I somehow managed to resist learning Rust. Now that I've finally taken the bait, I can't help but kick myself for not doing it earlier. As someone who juggles everything from web development to low-level programming in my side projects (just for fun and exploration), I've realized I've been missing out. Rust is this unique blend – it's got the nitty-gritty control of a low-level language but with the kind of user-friendly ergonomic features you'd expect from higher-level languages. Let me walk you through what I've learned and why I'm now firmly on the Rust bandwagon.

### Null Safety: The Crux of Reliable Code

In the realm of programming, null safety isn't just another buzzword; it's a cornerstone of reliable software development. Traditional programming languages often treat null values as an afterthought, leading to infamous runtime errors and debugging nightmares. Rust, however, approaches this differently. In Rust, the very concept of 'null' as known in other languages is absent. Instead, Rust introduces the `Option` type, a paradigm shift that fundamentally changes how we handle the possibility of absence.

### Rust’s Revolutionary Approach

Rust's `Option` type is more than just a safety feature. It's a declaration that every value’s presence or absence must be explicitly handled. Unlike other languages where null values can sneak up and cause runtime errors, Rust forces you to confront this head-on. By doing so, Rust ensures that dealing with 'null' – or rather, the absence of a value – is an integral part of your code's logic, not an oversight.

### Rust vs. JavaScript: Exposing the Pitfalls and Safeguards

To fully grasp the ingenuity of Rust's approach to null safety, let's first examine a common pitfall in JavaScript, a language where null values can easily lead to bugs if not carefully handled:

**JavaScript Code with a Potential Bug:**

```javascript
function printNumber(i) {
	console.log("The number is " + i);
}

const num1 = 5;
const num2 = null;
printNumber(num1);
printNumber(num2); // Null reference error
```

In this JavaScript snippet, the simplicity of the code masks a lurking danger. If `num` is `null`, as it is here, this leads to an unintended output or, in worse scenarios, a runtime error. The bug here is not obvious at first glance and requires the programmer to be vigilant about possible null values.

**JavaScript Code with Null Check:**

```javascript
function printNumber(i) {
	if (i === null) {
		console.log("No number provided");
	} else {
		console.log("The number is " + i);
	}
}

const num1 = 5;
const num2 = null;
printNumber(num1);
printNumber(num2); // Safer, but requires explicit null check
```

In this revised version, we've added a null check. While this resolves the issue, it hinges on the programmer **remembering** to include such checks. It's a manual, error-prone process that depends entirely on the developer's discretion and vigilance.

**Rust Code: A Built-In Safety Net:**

```rust
fn main() {
    let some_number: Option<i32> = Some(5);
    let no_number: Option<i32> = None;

    match some_number {
        Some(number) => println!("Got a number: {}", number),
        None => println!("Oops, no number here!"),
    }
}
```

Contrast this with Rust's approach. Here, the `Option` type encapsulates the possibility of absence (`None`) right alongside normal values (`Some`). This compels you to address both possibilities explicitly. The language's design inherently guides you to consider and handle the case of 'no value,' effectively eliminating the risk of null reference errors that can easily slip through in languages like JavaScript.

### The Impact of Language Design on Code Safety

This comparison starkly illustrates how language design can influence the safety and reliability of the code we write. In JavaScript, avoiding null errors requires constant mindfulness from the programmer. Rust, on the other hand, builds this mindfulness into the language itself. The result is code that is not just less prone to a common class of bugs, but also clearer and more intentional in its handling of values that might or might not be present.

### My Rust Adventure

Embracing Rust's approach to null safety was a journey from initial strictness to appreciation. This strictness, I realized, is Rust's way of enforcing discipline in how we handle uncertainties in our code. It’s not just about learning new syntax; it’s about adopting a mindset that values thoroughness and safety. Rust's handling of null values with the `Option` type is nothing short of revolutionary. It transforms a common source of errors into a structured, predictable aspect of coding. If you're ready to engage with a language that insists on safety and rigor (while still offering an enjoyable coding experience), then Rust awaits.
