---
path: "/java-arrays"
date: "2025-11-10T23:44:00.000Z"
title: "Java Arrays"
tags: ["java", "arrays"]
excerpt: ""
---

#### Array to list

```java
List<Integer> list = Arrays.asList(10,20,30);
```

#### Sort

```java
int[] arr = new int[] { 10, 5, 4, 3, 32, 8 };
Arrays.sort(arr);
```

```java
int[] arr = new int[] { 10, 5, 4, 3, 32, 8 };
Arrays.sort(arr, 3, arr.length - 1);
```

#### Binary search

```java
int[] arr = new int[] { 50, 40, 10, 90, 3, 89 };
Arrays.sort(arr);

int key = 10;
int index = Arrays.binarySearch(arr, key); // O(log N)
System.out.println(key + " found at index " + index);

int index2 = Arrays.binarySearch(arr, 3, 6, key);

```

#### Initialization to given value instead or zeros

```java
int[] arr = new int[10]:
System.out.println(Arrays.toString(Arr));
Arrays.fill(arr, 5);
System.out.println(Arrays.toString(Arr));
```

#### Sorting using the Comparable interface

```java
class Tuple implements Comparable<Tuple> {
    public int a, b;
    public Tuple(int a, int b) {
        this.a = a;
        this.b = b;
    }

    @Override
    public String toString() {
        return "a=" + a + ", b=" + b;
    }

    @Override
    public int compareTo(Tuple that) {
        if (this.b != that.b) {
            return this.b - that.b;
        } else {
            return this.a - that.a;
        }
    }
}

public class Application {
    public static void main(String[] args) {
        Tuple[] arr = new Tuple[4];
        arr[0] = new Tuple(10, 11);
        arr[1] = new Tuple(20, 11);
        arr[2] = new Tuple(100, 5);
        arr[3] = new Tuple(5, 100);
        Arrays.sort(arr);
        for (int i = 0 ; i < 4 ; i++) {
            System.out.println(arr[i].toString());
        }
    }
}
```

#### Sorting using the Comparator class

```java
Comparator<Tuple> comparator = new Comparator<Tuple>() {
    @Override
    public int compare(Tuple o1, Tuple o2) {
        if (o1.b != o2.b) {
            return o1.b - o2.b;
        } else {
            return o1.a - o2.a;
        }
    }
}

Arrays.sort(arr, comparator);
```
