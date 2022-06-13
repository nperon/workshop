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

### Coding modules

```bash
cargo new todo --lib
```

Cargo modules is a useful tool to manage modules. It can be installed with:

```bash
cargo install cargo-modules
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

All of the helper methods to manipulate String objects are documented 
[here](https://doc.rust-lang.org/std/string/struct.String.html#method.bytes).

## String literals

```rust
let rust = "\x52\x75\x73\x74";
println!("{}", rust);
```

## Struct with impl


```rust
struct Square {
    width: u32,
    height: u32,
}

impl Square {
    fn area(&self) -> u32 {
        self.width * self.height
    }

    fn whats_my_width(&self) -> u32 {
        self.width
    }

    fn change_width(&mut self, new_width: u32){
        self.width = new_width;
    }
}
```

## Struct with Trait

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

There are two other types of Struct. One is the tuple like Struct:

```rust
struct Coordinates(i32, i32, i32);
```

The other is the unit like Struct which is useful when combined with Traits:

```rust
struct UnitStruct;
```

## Utility Traits

- The Drop Trait:

```rust
struct Course {
    headline: String,
    author: String,
}

impl Drop for Course {
    fn drop(&mut self) {
        println!("Dropping: {}", self.author);
    }
}

fn main() {
    let course1 = Course{ headline: String::from("Headline!"), author: String::from("Tyler"), };

    drop(course1);
}
```

- The Clone Trait which is for types that can make copies of themselves :

```rust
trait Clone: Sized {
    fn clone(&self) -> Self;
    fn clone_from(&mut self, source: &Self) {
        *self = source.clone()
    }
}
```

- Copy is a shallow Clone

- From and Into, plus: TryFrom and TryInto

```fn into(self) -> T```: take self and returns a value of type T.

```fn from(T) -> Self```: take a value of type T and returns self.

- Arithmetics: the Add Trait

```bash
use std::ops::Add;

#[derive(Debug)]
struct Point<T> {
    x: T,
    y: T
}

fn main() {
    let coord = Point{ x: 5.0, y: 5.0 };
    let coord2 = Point{ x: 1.0, y: 2.0 };
    let sum = coord + coord2;
    println!("{:?}", sum);
}

impl<T> Add for Point<T>
    where
    T: Add<Output = T> {
        type Output = Self;        
        fn add(self, rhs: Self) -> Self {
            Point {
                x: self.x + rhs.x,
                y: self.y + rhs.y,
            }
        }
    }
```

- Fn is a family of closures and functions that you can call multiple times without restrictions. It borrows values from the environment immutably. It includes all fn functions.

- FnMut is a family of closures and functions that you can call multiple times if the closure itself is declared mut. It immutably borrows values.

- FnOnce is a family of closures that can be called once if the caller owns the closure. The closure cannot take ownership of the same variables more than once.

Therefore, every Fn meets the requirements for FnMut and every FnMut meets the requirements for FnOnce. It means that Fn is the most exclusive and the most powerful in this set of three Traits.

Examples: 
- || drop(v) FnOnce  ---> FnOnce
- |args| v.contains(arg) ---> Fn
- |args| v.push(arg)  ---> FnMut

- Iterator

## Lifetimes

Every reference has a Lifetime. Most of the time, Lifetimes are implicit and inferred.

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
```

Syntax for lifetime in a struct is as follows:

```rust
struct MyString<'a> {
    text: &'a str
}
```

Here is an example of a variable defined with a static lifetime:

```rust
let s: &'static str = "I have static lifetime";
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

Other ways to instanciate vectors: 
```rust
let vect= Vec::<i32>::with_capacity(2);
println!("{}", vect.capacity());

let v: Vec<i32> = (0..5).collect();
println!("{:?}", v);
```

Vector API examples:

```rust
    let mut nums: Vec<i32> = vec![];
    nums.push(1);
    nums.push(2);
    nums.push(3);

    let pop = nums.pop(); // returns Option<T>: None or Some(T)
    println!("{:?}", pop);
    let number = pop.unwrap();
    println!("{}", number);

    let two = nums[1]; // copy
    // &nums[1], creates a reference if copy is not available 
    // (here we get a copy since i32 is a primitive type)
    println!("{}", two);

    let one = nums.first(); // return an Option<T> 
                            // so None if nums is empty, else Some<T>
    println!("{:?}", one);

    // .last
    // .first_mut and .last_mut will borrow mutable references

    println!("{}", nums.len()); // return a value of length
    println!("{}", nums.is_empty()); // bool

    nums.insert(0, 10);
    nums.insert(3, 12);
    nums.insert(2, 25);

    nums.remove(3);

    nums.sort();
    println!("{:?}", nums);

    nums.reverse();
    println!("{:?}", nums);

    nums.shuffle(&mut thread_rng());
    println!("{:?}", nums);
```

## Iterators

Vec is an example of a standard object that implements the Iterator Trait.

Example 1:

```rust
let vec2 = vec![1, 2, 3];
let mut iter = (&vec2).into_iter();
while let Some(v) = iter.next() {
    println!("{}", v);
}
```

Example 2:

```rust
#[derive(Debug)]
struct Range {
    start: u32,
    end: u32,
}

impl Iterator for Range {
    type Item = u32;
    fn next(&mut self) -> Option<Self::Item> {
        if self.start >= self.end {
            return None;
        }
        let result = Some(self.start);
        self.start += 1;
        result
    }
}

fn main() {
    let mut range = Range {start: 0, end: 10};
    // for r in range {
    //     println!("{}", r);
    // }

    let vec: Vec<u32> = range.filter(|x| x % 2 == 0).collect();
    println!("{:?}",vec);
}
```

Example 3:

```rust
#[derive(Debug)]
struct Item {
    name: String,
}

fn check_inventory(items: Vec<Item>, product: String) -> Vec<Item> {
    items.into_iter().filter(|i| i.name == product).collect()
}

fn main() {
    let mut vec: Vec<Item> = Vec::new();
    vec.push(Item { name: String::from("coat") });
    vec.push(Item { name: String::from("shirt") });
    vec.push(Item { name: String::from("shorts") });
    vec.push(Item { name: String::from("shoes") });

    let checked = check_inventory(vec, String::from("shirt"));
    println!("{:?}", checked);
}
```

## Slices

```rust
let v: Vec<i32> = (0..5).collect();
println!("{:?}", v);

let sv: &[i32] = &v[2..4];
println!("{:?}", sv);
```

A slice is a fat pointer i.e. a non owning reference to a **range** of consecutive values.

## Hashmaps

```rust
let mut h: HashMap<u8, bool> = HashMap::new();
h.insert(5, true);
h.insert(6, false);
let have_five = h.remove(&5).unwrap();
```

Hashmap API examples:

```rust
    let mut hm = HashMap::new();
    hm.insert(1, 1);
    hm.insert(5, 2);
    hm.insert(30, 3);
    let old = hm.insert(30, 4);
    println!("{:?}", hm);
    println!("{:?}", old);

    println!("{:?}", hm.contains_key(&8));
    println!("{:?}", hm.get(&5));

    let one = hm.remove(&1);
    println!("{:?}", one);

    let removed = hm.remove_entry(&5);
    println!("{:?}", removed);

    hm.clear();
    println!("{}", hm.is_empty());
```

Other collections: VecDeque, LinkedList, HashSet, BinaryHeap, BTreeMap, BTreeSet

## HashSets

```rust
    let mut hs = HashSet::new();
    hs.insert(1);
    hs.insert(2);
    hs.insert(3);
    hs.insert(4);
    hs.remove(&2);
    for x in hs.iter() {
        println!("inter: {}", x);
    }

    let mut hs2 = HashSet::new();
    hs2.insert(1);
    hs2.insert(3);
    hs2.insert(5);
    hs2.insert(7);
    for x in hs.intersection(&hs2) {
        println!("intersection: {}", x);
    }

    let intersection = &hs & &hs2;
    for x in intersection {
        println!("short hand way: {}", x);
    }

    let union = &hs | &hs2;
    for x in union {
        println!("union: {}", x);
    }
```

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

```rust
enum Pet {dog, cat, fish}

impl Pet {
    fn what_am_i(self) -> &'static str {
        match self {
            Pet::dog => "I am a dog",
            Pet::cat => "I am a cat",
            Pet::fish => "I am a fish",
        }
    }
}
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

The match expression handles the case when we can have Some<T> or Node:

```rust
enum Pet {dog, cat, fish}

fn main () {
    let dog = Pet::dog;
    println!("{}", dog.what_am_i());

    let some_number = Some(5);
    let some_string = Some("a string");
    let nothing: Option<i32> = None;

    let x: i32 = 5;
    let y: Option<i32> = Some(5);

    let sum = x + y;

    let five = Some(5);
    let six = plus_one(five);
    let none = plus_one(None);

    println!("{:?}", six);

    let noneUnw = None.unwrap_or(7);
    println!("unw: {:?}", noneUnw);

    what_pet("dog");
    what_pet("cat");
    what_pet("cow");
}

fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

fn plus_one_unw(x: Option<i32>) -> i32 {
    match x {
        None => 0,
        Some(i) => i + 1,
    }
}

fn what_pet(input: &str) {
    match input {
        "dog" => println!("I have a dog!"),
        "fish" => println!("I have a fish!"),
        "cat" => println!("I have a cat!"),
        _ => println!("I have no clue what pet I have"),
    }
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

### Ownership, references  & borrowing

There are 3 rules to ownership:
1) Each value has an owner
2) There is only one owner of a value
3) Value gets dropped if its owner goes out of scope

```rust
x: &mut i32
*x // a mutable i32
```

```rust
x: &i32
*x: // an immutable i32
```

At any time, it is possible to have one mutable reference
or any number of immutable references to a given value.

A borrowed variable passed to a function can be dereferenced in two ways.
The first way is automated deferencing:

```rust
fn do_stuff(s: &mut String) {
    s.insert_str(0, "Hi, ");
}
```

And the second way is manual:

```rust
fn do_stuff(s: &mut String) {
    *s = String::from("Replacement")
}
```

## Error handling

Errors split into two categories: 
- recoverable errors which rely on the result type
- unrecoverable errors where the panic macro is used. It terminates the current thread.

Example on how to catch an error at opening a file:

```rust
    let file = File::open("error.txt");
    let file = match file {
        Ok(file) => file,
        Err(error) => match error.kind() {
            ErrorKind::NotFound => match File::create("error.txt") {
                Ok(file_created) => file_created,
                Err(err) => panic!("Cannot create the file: {:?}", err),
            },
            _ => panic!("It was some other error kind"),
        },
    };
```

Here is a simple way to panic and get information on error with logs:

```rust
let file = File::open("error.txt").expect("Error opening the file!");
```

Finally, an error that occurs in a function can be propagated upwards to the calling
context by adding a question mark to the calling statement like here:

```rust
fn open_file() -> Result<File, Error> {
    let file = File::open("error.txt")?;
    Ok(file)
}
```

## Unit test

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_ne!(result, 5);
    }

    #[test]
    #[should_panic]
    fn it_fails(){
        panic!("Test failed!");
    }

    #[test]
    fn call_simple_add(){
        assert!(simple_add());
    }

}

fn simple_add() -> bool {
    if 2+2 == 4 {
        true
    } else {
        false
    }
}
```

## Iterators

