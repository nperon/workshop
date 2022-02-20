---
path: "/rust"
date: "2022-02-06T10:17:00.823Z"
title: "Rust"
tags: ["rust"]
excerpt: ""
---

## Cargo commands

Command to create a project:

```bash
cargo new hello
```

You can compile and run the project now with:

```bash
cargo run
```

This builds the project in a directory called ```target/debug```.
To build the project in the ```target/release``` directory intended for prod, just run:

```bash
cargo run --release
```

A good tip to improve the code with idiomatic rust coding hints/warnings is to run:

```bash
cargo clippy
```

## Structs and Traits

```rust
struct RedFox {
    enemy: bool,
    life: u32,
}

trait Noisy {
    fn get_noise(&self) -> &str;
}

impl Noisy for RedFox {
    fn get_noise(&self) -> &str { "Meow?" }
}

fn print_noise<T: Noisy>(item: T) {
    println!("", item.get_noise());
}

impl Noisy for u8 {
    fn get_noise(&self) -> &str { "BYTE!" }
}

fn main() {
    print_noise(5_u8); // prints "BYTE!"
}
```
