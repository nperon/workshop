---
path: "/java-performance-and-memory"
date: "2026-03-21T14:10:00.000Z"
title: "Java Performance and Memory"
tags: ["java", "performance", "memory"]
excerpt: ""
---

## Compiler Flags

With the ```+PrintCompilation``` flag, information about compilation of each method is print in the console:

```bash
java -XX:+PrintCompilation main.Main 10
```

Compilation information can otherwise be directed to a file with:

```bash
java -XX:+UnlockDiagnosticVMOptions -XX:+LogCompilation main.Main 5000
```

Available and used code cache sizes can be print with:

```bash
java -XX:+PrintCodeCache main.Main 10
```

Parameters for dynamic code cache allocation can be set with 3 flags : InitialCodeCacheSize, ReservedCodeCacheSize and CodeCacheExpansionSize. 

```bash
java -XX:InitialCodeCacheSize=28m -XX:+PrintCodeCache main.Main 10
```

Flags ```-client```, ```-server``` and ```-d64``` can be used to specify whether to use the 32 bit or the 64 bit compiler. However this is not always relevant, depending on the OS and on the hardware.

Note that tiered compilation can be turned off with a ```-TieredCompilation``` flag. Execution it then a hundred percent interpreted. This is not usually of benefit in a production. 

Here is how to display all of the jvm flags by default:

```bash
java -XX:+PrintFlagsFinal
```

Among the information that is obtained, the value of CICompilerCount is the number of threads
available for compilation. 

The following command 

```bash
jps
```

outputs PIDs of processes running the jvm. Assuming one of those PIDs is stored as PID,
here is another way to get the value of CICompilerCount:

```bash
jinfo -flag CICompilerCount $PID
```

Note that the minimum number of threads is 2 : one for the client compiler and another
one for the server compiler.

The ```CompileThreshold``` flag sets the number of times a method is run before
it is compiled with the C2 compiler. 

## Memory

The ```+PrintStringTableStatistics``` flag prints information about the String pool.

The following command turns the above flag on and also
increases the number of keys of the String pool map to 120121:

```bash
java -XX:+PrintStringTableStatistics -XX:StringTableSize=120121 main.Main
```

Here is how to get information on the default VM parameters:

```bash
java -XX:+UnlockDiagnosticVMOptions -XX:+PrintFlagsFinal
```

Of relevance in the output are InitialHeapSize and  MaxHeapSize. Options with them, e.g. ```-XX:InitialHeapSize=1g``` can be relevant in 
improving the performance of an application.

```-XX:MaxHeapSize=256m``` can be shortened into ```-Xmx256m```
```-XX:InitialHeapSize=1g``` can be shortened into ```-Xms1g```

Application can be set to generate a heap dump when 
it crashes with a given error, for instance an OutOfMemoryError, using the following flags:

```-XX:+HeapDumpOnOutOfMemoryError``` and ```-XX:HeapDumpPath=someFilePath```.

### Garbage Collection

The ```-verbose:gc``` option activates the logging of garbage collection information.

How large the old generation is compared with the young generation can be set with ```-XX:NewRatio=n```

The ratio bewteen the total size of new generation space and the survivor spaces s0 and s1 can be set with ```-XX:SurvivorRatio=n``` 

How many generations an object survives before being moved to the old generation space can be set with ```-XX:MaxTenuringThreshold=n```

Types of garbage collectors:
- serial: can be selected with ```-XX:+UseSerialGC```
- parallel: default in version up to 8 or else can be selected with ```-XX:+UseParallelGC```
- mostly concurrent. Two possible options : ```-XX:+UseConcMarkSweepGC``` or ```-XX:+UseG1GC``` (the default from java 10).

Here are two possible flags for tuning the G1 GC: ```-XX:ConcGCThreads=n``` and ```-XX:InitiatingHeapOccupancyPercent=n```.

The following option available only with G1 can be useful if many Strings duplicates occur which are not in the String pool: ```-XX:+UseStringDeDuplication```.

