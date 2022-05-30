---
path: "/linux-utils"
date: "2020-10-11T22:47:32.235Z"
title: "Linux Utils"
tags: ['Linux', 'utils', 'bash', 'vi', 'find', 'grep', 'rename']
excerpt: ""
---

### Miscelaneous bash tips

The following command displays the status code from the last command:

```bash
echo $?
```

In the following command, output of a echo command is directed to 
standard input so that a second command viz more manages it like a file:

```bash
echo 'toto' | more -
```

### tree

```bash
tree --noreport .
```

### vi

Vi command for eliminating all occurences of colon ":" is the following:

```
:1,$s/://g
```

Here is the vi command for replacing all occurences of "old" with "new":

```
:1,$s/old/new/g
```

Vi command for searching string "xyz":

```
/xyz
```

### find

File search:

```bash
find ./fvsa/ -name "pvsve*"
```

### grep

Search string 'yourDir' in dir yourdir:

```bash
grep -nr 'yourString*' yourdir
```

### sed

Sed is a stream editor for filtering and transforming text.

```bash
sed -i 's/word1/word2/g' inputfile
```

The ```-i``` option requests editing in place. 
```s``` stands for substitute. ```g``` stands for global replacement.

### A few tips with watch:

Memory usage:

```bash
watch -n 5 free -m
```

Realtime clock in a term:

```bash
watch -n 1 date
```

### Modify filenames with rename

Delete 4 first characters in all file names in dir:
```bash
rename 's/.{4}(.*)/$1/' *
```

Delete 5 last characters in all file names in dir:
```bash
rename 's/(.*).{5}/$1/' *
```

### wc

Display total number of files in 'folder':

```bash
ls folder | wc -l
```

### Disk usage

```bash
sudo ncdu -rx /
```

```bash
sudo du -shc /*
```

Displaying size occupied by Documents directory:

```bash
cd ~
sudo du -sh Documents
```

### Managing JDKs on Debian

```bash
update-java-alternatives -l
```

```bash
sudo update-java-alternatives -s java-1.8.0-openjdk-amd64
```

Or in a more interactive way:

```bash
update-alternatives --config java
```

### Managing screens 

```bash
xrandr
```

```bash
xrandr --addmode HDMI-1 2560x1080
```

### Serving static content using http-server

The following command starts http-server and serves all of the static 
content (e.g. geojson files) available in the current directory:

```bash
http-server --cors='*' -p 5252
```

### Generating random passwords

Install pwgen package and run the following command to 
get a randow password with 12 characters including one special 
character at least:

```bash
pwgen 12 1 -y
```

### Managing permissions

Command to state that owner and group of directory mydir have full permission 
to access the directory and its content such as read, write and execute whereas 
others will have read and execute permission:

```bash
chmod -R 775 mydir
```

### Probing system on service management tool

The following command can be use to check whether the service 
management tool is ```service``` or ```systemctl```:

```bash
ps --no-headers -o comm 1
```

A ```systemd``` result indicates that systemd (systemctl) is the service management tool, while
```init``` indicates that it is System V Init (service).

### Managing DNS

```bash
sudo apt install bind9-host
```

```bash
host -t NS google.com
```