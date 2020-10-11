---
path: "/linux-utils"
date: "2020-10-11T22:47:32.235Z"
title: "Linux Utils"
tags: ['Linux', 'utils', 'bash', 'vi', 'find', 'grep', 'rename']
excerpt: ""
---

### vi

Vi command for eliminating all occurences of colon ":" is the following:

```
:1,$s/://g
```

Here is the vi command for replacing all occurences of "alod" with "new":

```
:1,$s/old/new/g
```

Vi command for searching string "xyz":

```
/xyz
```

### find

File search:

```
find ./fvsa/ -name "pvsve*"
```

### Memory usage with watch

```
watch -n 5 free -m
```

### Modify filenames with rename

Delete 4 first characters in all file names in dir:
```
rename 's/.{4}(.*)/$1/' *
```

Delete 5 last characters in all file names in dir:
```
rename 's/(.*).{5}/$1/' *
```

### wc

Display total number of files in 'folder':

```
ls folder | wc -l
```

### Disk usage

```
sudo ncdu -rx /
```

```
sudo du -shc /*
```

### Managing JDKs on Debian

```
update-java-alternatives -l
```

```
sudo update-java-alternatives -s java-1.8.0-openjdk-amd64
```

Or in a more interactive way:

```
update-alternatives --config java
```

### Managing screens 

```
xrandr
```

```
xrandr --addmode HDMI-1 2560x1080
```

