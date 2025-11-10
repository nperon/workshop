---
path: "/java-arrays"
date: "2025-11-10T23:44:00.000Z"
title: "Java Arrays"
tags: ["java", "arrays"]
excerpt: ""
---

## Array to list

```java
List<Integer> list = Arrays.asList(10,20,30);
```

## Sort

```java
int[] arr = new int[] { 10, 5, 4, 3, 32, 8 };
Arrays.sort(arr);
```

```java
int[] arr = new int[] { 10, 5, 4, 3, 32, 8 };
Arrays.sort(arr, 3, arr.length - 1);
```