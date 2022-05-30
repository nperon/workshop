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

## Strings

String slices refered to as ```str``` 
are almost always handled in the shape of borrowed string slices ```&str```.
See also the Rust documentation on [references and borrowing](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html).

A string literal stated
```let msg = "Hello 🌎";```
is a borrowed string slice.

The other string type is String.
Data in a borrowed string slice cannot be modified
while data in a String can be modified.

A String can be obtained by applying the to_string() method on a 
borrowed string slice:

```
let msg = "ab🎉".to_string();
```

or else by passing the borrowed string slice to String::from:

```
let msg = String::from("ab🎉");
```

Internally, a borrowed string slice is made up of a pointer to some byte and 
a length. The length is the number of unicode characters in the string.

Bytes can be extracted from a borrowed string slice with the bytes() method: ```word.bytes();```

An iterator on unicode scalars can be built with ```word.chars();```

Additionally, an iterator on graphemes can be retrieved using a package called unicode-segmentation with:

```graphemes(my_string, true)```

A given item in the graphemes can then be accessed with by appending a statement like```.nth(3)```

## Structs and Traits

```rust
#[derive(Debug)]
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

## Vectors

```rust
let mut v: Vec<i32> = Vec::new();
v.push(2);
v.push(4);
v.push(6);
let x = v.pop();    // x is 6
println("{}", v[1]);// prints "4"
let mut u = vec![2, 4, 6];
```

## Hashmaps

```rust
let mut h: HashMap<u8, bool> = HashMap::new();
h.insert(5, true);
h.insert(6, false);
let have_five = h.remove(&5).unwrap();
```

Other collections: VecDeque, LinkedList, HashSet, BinaryHeap, BTreeMap, BTreeSet

## Enums

```rust
enum Color {
    Red,
    Green,
    Blue,
}
let color = Color::Red;
```

```rust
enum DispenserItem {
    Empty,
    Ammo(u8),
    Things(String, i32),
    Place {x: i32, y: i32},
}

use DispenserItem::*;
let item1 = Ammo(69);
let item2 = Things("hat".to_string(), 7);
```

### The rust predefined Option enum

```rust
enum Option<T> {
    Some(T),
    None,
}

let mut x: Option<i32> =  None;
x = Some(5);
x.is_some(); // true
x.is_none(); false
for i in x {
    println!("{}", i); // prints 5
}
```

### The rust predefined Result enum

```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

Example with Result:

```rust
use std::fs::File;

fn main() {
    let res = File::open("foo");
    let f = res.unwrap();
}

fn main() {
    let res = File::open("foo");
    let f = res.expect("error message");
}

fn main() {
    let res = File::open("foo");
    let f = res.is_ok() {
        let f = res.unwrap();
    }
}

fn main() {
    let res = File::open("foo");
    match res {
        Ok(f) => { /* do stuff */ },
        Err(e) => { /* do stuff */ },
    }
}
```
