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
	Name         string
	TicketNumber int
	Boarded      bool
}

type Bus struct {
	FrontSeat Passenger
}

func main() {
	var (
		bill = Passenger{Name: "Bill", TicketNumber: 2}
		ella = Passenger{Name: "Ella", TicketNumber: 3}
	)
	fmt.Println(bill, ella)
	var heidi Passenger
	heidi.Name = "Heidi"
	heidi.TicketNumber = 4
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

```go
```

## Maps

```go
```

## Pointers

```go
```
