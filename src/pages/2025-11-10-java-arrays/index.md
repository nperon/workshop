---
path: "/java-arrays"
date: "2025-11-10T23:44:00.000Z"
title: "Java Arrays"
tags: ["java", "arrays"]
excerpt: ""
---

### Array to list

```java
List<Integer> list = Arrays.asList(10,20,30);
```

### Sort

```java
int[] arr = new int[] { 10, 5, 4, 3, 32, 8 };
Arrays.sort(arr);
```

```java
int[] arr = new int[] { 10, 5, 4, 3, 32, 8 };
Arrays.sort(arr, 3, arr.length - 1);
```

### Binary search

```java
int[] arr = new int[] { 50, 40, 10, 90, 3, 89 };
Arrays.sort(arr);

int key = 10;
int index = Arrays.binarySearch(arr, key); // O(log N)
System.out.println(key + " found at index " + index);

int index2 = Arrays.binarySearch(arr, 3, 6, key);

```
