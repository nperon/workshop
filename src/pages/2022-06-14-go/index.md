---
path: "/go"
date: "2022-06-14T14:24:43.180Z"
title: "Go"
tags: ['go']
excerpt: "Go"
---

## Formatted printing and string formatting with fmt package

Package fmt provides 3 terminal printing functions: 
- Printf &#8212; custom format
- Print &#8212; simple print
- Println &#8212; simple print with a newline

and an F and an S variants of the above functions:
- F prints to a data stream: Fprintf, Fprint, Fprintln
- S prints to a new string: Sprintf, Sprint, Sprintln

*verb*		*description*  
%v			default  
%t			"true" or "false"  
%c			character  
%X			Hex  
%U			Unicode format  
%e			Scientific notation  

*Escape Sequence*	*Description*  
\\					Backslash  
\'					Single quote  
\"					Double quote  
\n					Newline  
\u or \U			Unicode (2byee & 4byte)  
\x					Raw bytes (as hex digits)  


```go
fmt.Printf("%v\n", 8)
fmt.Printf("This is a \"Quote\"\n")
```

```go
func surround(msg string, left, right rune) string {
	return fmt.Sprintf("%c%v%c", left, msg, right)
}

surrounded := surround("this message", '(', ')')
fmt.Println(surrounded)
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

## Idiomatic Go &#8212; variadics

```go
package main

import "fmt"

func sum(nums ...int) int {
	sum := 0
	for _, n := range nums {
		sum += n
	}
	return sum
}

func main() {
	a := []int{1, 2, 3}
	b := []int{4, 5, 6}

	all := append(a, b...)

	answer := sum(all...)
	fmt.Println(answer)

	answer := sum(1, 2, 3, 4, 5, 6)
	fmt.Println(answer)
}
```

## Idiomatic Go &#8212; init function

Each package can have it's own init() function. The init function 
of each will run a single time even when the package is imported 
several times.

For instance an init function can initialize an object in file init.go:

```go
package main

var EmailExpr *regexp.Regexp

func init() {
	compiled, ok := regexp.Compile(`.+@.+\..+`)
	if ok != nil {
		panic("failed to compile regular expression")
	}
	EmailExpr = compiled
	fmt.Println("regular expression compiled successfully")
}
```

The latter object can be used in the main.go like this:

```go
package main

var EmailExpr *regexp.Regexp

func IsValidEmail(addr string) bool {
	return EmailExpr.Match([]byte(addr))
}

func main() {
	fmt.Println(isValidEmail("invalid@example"))
}
```

## Idiomatic Go &#8212; testing

A unit test for the above main function can be coded in a file 
called ```main_test.go```:

```go
package main

import "testing"

func TestIsValidEmail(t *testing.T) {
	data := "email@example.com"
	if !IsValidEmail(data) {
		t.Errorf("IsValidEmail(%v)=false, want true", data)
	}
}
```

Tests can be executed with

```bash
go test
```

To execute tests in a specific file execute for instance: 

```bash
go test -v ./foo/foo_test.go
```

Some functions available in the test package:

- ```Fail()```: mark the test as failed
- ```Errorf(string)```: fail & add a message
- ```FailNow()```: mark the test as failed, abort current test
- ```Fatalf(string)```: fail, abort and add a message
- ```Logf()```: equivalent to Printf, but only when test fails

A [test table](https://yourbasic.org/golang/table-driven-unit-test/) can 
be nicely coded to test a function with more than one set of data.

## Function literals

Function literals also known as anonymous function 
are functions within a function. They can encapsulate data.

```go
func helloWorld() {
	fmt.Printf("Hello, ");
	world := func() {
		fmt.Printf("World!\n")
	}
	world()
	world()
	world()
}
```

A function literal can be passed as a parameter to a function: 

```go
func customMsg(fn func(m string), msg string) {
	msg = strings.ToUpper(msg)
	fn(msg)
}

func surround() func(msg string) {
	return func(msg string) {
		fmt.Printf("%.*s\n", len(msg), "------------"))
		fmt.Println(msg)
		fmt.Printf("%.*s\n", len(msg), "------------"))
	}
}

customMsg(surround(), "hello")
```

Closures are function literals that access variables 
defined outside of their scope.

A type alias can be defined for a literal function so
that is is simple to pass it as a parameter to a function: 

```go
type DiscountFunc func(subTotal float64) float64

func calculatePrice(
		subtotal float64,
		discountFn DiscountFunc
	) float64 {
		return subTotal - (subTotal * discountFn(subTotal))
}
```

## Interfaces

Interfaces allow specifying the behavior of a type.

```go
type MyInterface interface {
	Function1()
	Function2(x int) int
}

type MyType int
func (m MyType) Function1() {}
func (m MyType) Function2(x int) int {
	return x + x
}

func execute(i MyInterface) {
	i.Function1()
}
```

When a type has all receiver functions required by the
interface, then it is considered implemented.

#### Standard Library use case: errors

The Error() string function of the errors interface
from the standard library. The errors.New function returns
an Error.

```go
import "errors"

func divide(lhs, rhs int) (int, error) {
	if rhs == 0 {
		return 0, errors.New("cannot divide by zero")
	} else {
		return rhs / lhs, nil
	}
}
```

Here is the error interface:

```go
type error interface {
	Error() string
}
```

Always implement error as a receiver function:

```go
type DivError struct {
	a, b int
}

func (d *DivError) Error() string {
	return fmt.Sprintf("Cannot divide by zero: %d / %d", d.a, d.b)
}

func div(a, b int) (int, error) {
	if b == 0 {
		return 0, &DivError{a, b}
	} else {
		return a / b, nil
	}
}

answer1, err := div(9, 0)

if err != nil {
	fmt.Println(err)
	return
}

fmt.Println("The answer is: ", answer1)
```

Additional features from errors:
- use errors.As() to retrieve and error
- use errors.Is() to check the error type

#### Standard Library use case: Reader & Writer

Reader & Writer are interfaces that allow reading from and
writing to I/O sources like: network sockets, files, arbitrary arrays.

```go
type Reader interface {
	Read(p []byte) (n int, err error)
}

type Writer interface {
	Write(p []byte) (n int, err error)
}
```

Each call to Read() will fill the provided p buffer.
The number of bytes read will be returned as n.
When all bytes have been read, err will be io.EOF.

Using Reader directly requires manually populating a buffer.
The bufio stdlib package provides auto-buffered reads. In practice
it is more usual to work with the bufio package instead of the 
low level Reader directly as shown comparing the two following approaches:


```go
reader := strings.NewReader("SAMPLE")

var newString strings.Builder
buffer := make([]byte, 4)
for {
	numBytes, err := reader.Read(buffer)
	chunk := buffer[:numBytes]
	newString.Write(chunk)
	fmt.Printf("Read %v bytes: %c\n", numBytes, chunk)
	if err == io.EOF {
		break
	}
}
fmt.Printf("%v\n", newString.String())
```

```go
source := strings.NewReader("SAMPLE")
buffered := bufio.NewReader(source)
// can also user buffered.ReadBytes here:
newString, err := buffered.ReadString('\n')
if err == io.EOF {
	fmt.Println(newString)
} else {
	fmt.Println("something went wrong...")
}
```

The bufio.Scanner provides more features. 
It can automatically read and delimit inputs.

```go
// read lines from standard input
scanner := bufio.NewScanner(os.Stdin)
lines := make([]string, 0, 5)
for scanner.Scan() {
	lines = append(lines, scanner.Text())
}
if scanner.Err() != nil {
	fmt.Println(scanner.Err())
}
fmt.Printf("Line count: %v\n", len(lines))
for _, line := range lines {
	fmt.Printf("Line: %v\n", line)
}
```

```bash
printf "these\nare\nsome\nwords" | go run ./scannercode.go
```

Writer is symmetrical with Reader:

```go
buffer := bytes.NewBufferString("")
numBytes, err := buffer.WriteString("SAMPLE")
if err != nil {
	fmt.Println(err)
} else {
	fmt.Printf("Wrote %v bytes: %c\n", numBytes, buffer)
}
```

## Using defer

```go
func one() {
	fmt.Println("1")
}

func two() {
	fmt.Println("2")
}

func sample() {
	fmt.Println("Begin")
	defer one()
	defer two()
	fmt.Println("End")
}
```

## Concurrency &#8212; goroutines

```go
func count(amount int) {
	for i := 1; i <= amount; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(i)
	}
}

func main() {
	go count(5)
	fmt.Println("wait for goroutine")
	time.Sleep(1000 * time.Millisescond)
	fmt.Println("end program")
}
```

Goroutines allow functions and closures to un concurrently.
Use the go keyword to create a new goroutine.  

The function that starts a goroutine will not wait for it to finish.
Both the the calling function and goroutine will run to completion.  

Closure captures are shared among all goroutines, making it easy
to parallelize code.

## Concurrency &#8212; channels

Channels are one-way communication pipes. They have
a send/write end and a receive/read end.
The ends can be duplicated across goroutines.
Bidirectional communication can be accomplished by using 
more channels.  

Buffered channels are non-blocking, unbuffered channels
will block.

```go
channel := make(chan int)

// Send to channel
go func() { channel <- 1 }()
go func() { channel <- 2 }()
go func() { channel <- 3 }()

// Receive from channel
first := <-channel
second := <-channel
third := <-channel

fmt.Println(first, second, third)
```

The time package can be combined with select
to create timeouts:

```go
one := make(chan int)
two := make(chan int)

for {
	select {
		case o := <-one:
			fmt.Println("one:", o)
		case t := <-two:
			fmt.Println("two:", t)
		case o := <-time.After(300 * time.Millisecond):
			fmt.Println("timed out")
			return
	}
}
```

## Concurrency &#8212; synchronization

Managing data accross multiple goroutines 
can become problematic and hard to debug because:  
- multiple goroutines can change the same data leading 
to unpredictable results  
- using channels to communicate is not always ideal  

Synchronization solves this issue:  
- enables waiting for goroutines to finish  
- prevents multiple goroutines from modifying data 
simultaneously  

A mutex provides a way to lock and unlock data. It 
allows to work with multiple goroutines.

```go
import "sync"

type SyncedData struct {
	inner map[string] int
	mutex sync.Mutex
}

func (d *SyncedData) Insert(k string, v int) {
	d.mutex.Lock()
	defer d.mutex.Unlock()
	d.inner[k] = v
}

func (d *SyncedData) Get(k string) int {
	d.mutex.Lock()
	defer d.mutex.Unlock()
	return d.inner[k]
}

func main() {
	data := SyncedData{ inner: make(map[string]int) }
	data.Insert("sample", 5)
	data.Insert("test", 2)
	fmt.Println(data.Get("sample"))
	fmt.Println(data.Get("test"))
}
```

Wait groups enable an application to wait for goroutines 
to finish. They operate by incrementing a counter whenever
a goroutine is added, and decrementing when it finishes.
Waiting on the group will block execution until the
counter is 0.

```go
var wg sync.WaitGroup
sum := 0
for i := 0; i < 20; i++ {
	wg.Add(1)
	value := i
	go func() {
		defer wg.Done()
		sum += value
	}()
}
wg.Wait()
fmt.Println("sum = ", sum)
```
