---
path: "/go"
date: "2022-06-14T14:24:43.180Z"
title: "Go"
tags: ['go']
excerpt: "Go"
---

## Formatted printing

```go
fmt.Printf("%v\n", 8)
```

## Structures

```go
package main

import "fmt"

type Passenger struct {
	name         string
	ticketNumber int
	boarded      bool
}

type Bus struct {
	FrontSeat passenger
}

func main() {
	var (
		bill = Passenger{name: "Bill", ticketNumber: 2}
		ella = Passenger{name: "Ella", ticketNumber: 3}
	)
	fmt.Println(bill, ella)
	var heidi Passenger
	heidi.name = "Heidi"
	heidi.ticketNumber = 4
	fmt.Println(heidi)
	var vehicle = Bus{FrontSeat: ella}
	fmt.Println(vehicle)
}
```

## Arrays

```go
Go arrays have fixed size. 
```

## Slices

Slices are companion types that work with arrays. 
They enable a "view" into an array.
Views are dynamic and not fixed in size.
Functions can accept a clice as a function parameter.
Any array can be operated upon via slice.

```go
mySlice := []int{1, 2, 3}
item1 := mySlice[0]
```

```go
numbers := [...]int{1, 2, 3, 4}
slice1 := numbers[:]
slice2 := numbers[1:]
slice3 := numbers[:1]
slice4 := numbers[:2]
slice5 := numbers[1:3]
```

The ```append()``` function can add additional elements:

```go
numbers := [...]int{1, 2, 3, 4}
numbers = append(numbers, 4, 5, 6)
```

3 dots can be used to extend a slice with another slice:

```go
part1 := []int{1, 2, 3}
part2 := []int{4, 5, 6}
combined := append(part1, part2...)
```

Slices can be preallocated with specific capacities using the make function:

```go
slice := make([]int, 10)
```

This saves computation time.

The len() function returns the length of any slice;

```go
for i:=0; i < len(slice); i++ {
	// ...
}
```

Slices can be multidimensional:

```go
board := [][] string {
	[]string{"_", "_", "_"},
	{"_", "_", "_"},
	{"_", "_", "_"},
}
board[0][0] = "X"
board[0][0] = "O"
```

## Ranges

The range keyword creates an iterator.

```go
slice := []string{"Hello", "world", "!"}
for i, element := range slice {
	fmt.Println(i, element, ":")
	for _, ch := range element {
		fmt.Printf("  %q\n", ch)
	}
}
```

## Maps

```go
myMap1 := make(map[string]int)

myMap2 := map[string]int{
	"item 1": 1,
	"item 2": 2,
	"item 3": 3,
}

myMap1["favorite number"] = 5
missing := myMap1["age"] // default value

delete (myMap1, "favorite number")

price, found := myMap1["price"]
if !found {
	fmt.Println("price not found")
	return
}
```

Just like slices, maps can be iterated through using the range keyword:
```go
for key, value := range myMap2 {
	// ...
}
```


## Pointers

An asterisk (*) used with a type indicates the value is a pointer.
An ampersand (&) creates a pointer from a variable.

```go
value := 10
var valuePtr *int // this declaration is often skipped
valuePtr = &value // value address
```

An asterisk (*) when used with a pointer will dereference the pointer

```go
func increment(x *int) {
	*x += 1
}

i := 1
increment(&i)
```

Example: 

```go
package main

import "fmt"

type SecurityTag struct {
	state bool
}

func activate(tag *SecurityTag) {
	tag.state = true
}

func deactivate(tag *SecurityTag) {
	tag.state = false
}

func checkout(slice []*SecurityTag) {
	for _, tag := range slice {
		deactivate(tag)
	}
}

func printSlice(slice []*SecurityTag) {
	fmt.Printf("%t\n %t\n %t\n %t\n", slice[0].state, slice[1].state, slice[2].state, slice[3].state)
}

func main() {
	item1 := SecurityTag{state: true}
	item2 := SecurityTag{state: true}
	item3 := SecurityTag{state: true}
	item4 := SecurityTag{state: true}

	items := []*SecurityTag{&item1, &item2, &item3, &item4}
	printSlice(items)

	deactivate(&item1)
	printSlice(items)

	checkout(items)
	printSlice(items)

}
```

## Idiomatic Go &#8212; receiver functions

Receiver functions privide the dot notation for structs. This allows to 
create more convenient APIs.

```go
type Coordinate struct {
	X, Y int
}

func (coord *Coordinate) shiftBy(x, y int) {
	coord.X += x
	coord.Y += y
}

coord := Coordinate{5, 5}
coord.shiftBy(1, 1) // (6, 6)
```

## Idiomatic Go &#8212; iota

The iota keyword can be used to assign integers to constants.
The two following snippets define and initialize constant
Online to 0, Offline to 1, Maintenance to 2 and Retired to 3.

```go 
// Short form
const (
	Online = iota
	Offline
	Maintenance
	Retired
)
```

```go
// Long form:
const (
	Online = iota
	Offline = iota
	Maintenance = iota
	Retired = iota
)
```

Go allows to skip values as follows:
```go
const (
	s0 = iota 	// 0
	-			// 1
	-			// 2
	s3			// 3
	s4			// 4
)
```

It is possible to start at a different value:
```go
const (
	i3 = iota + 3	// 3
	i4				// 4
	i5				// 5
)
```


