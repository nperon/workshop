---
path: "/gradle"
date: "2022-09-09T14:02:00.438Z"
title: "Gradle"
tags: ["gradle", "devops", "continuous integration", "build", "java", "kotlin"]
excerpt: ""
---

A list of all tasks can be displayed with:

```zsh
gradle tasks
```

### Gradle init task: 

This task initiates a project including a gradlew wrapper script:

```zsh
mkdir demo
cd demo
gradle init
tree .
```

Application can be run with:

```zsh
./gradlew run
```

and bundled with:

```zsh
./gradlew build
```

This produces two archives called ```app.tar``` and ```app.zip``` in ```app/build/distribution````

### Gradle jar task: [customizing the library jar](https://docs.gradle.org/current/samples/sample_building_kotlin_libraries.html#customize_the_library_jar)

Properties to set if required in the build.gradle.kts file: version, name and group i.e. maven coordinates:

```kts
version=
name=
group=
```

Run the jar task:

```zsh
./gradlew jar
```

Verifying that an archive is valid:

```zsh
jar tf lib/build/libs/lib.jar
```

Verifying that archive is signed:

```zsh
jarsigner -verify lib/build/libs/lib.jar
```

### Generating sources JAR:

```kts
java {
    withSourcesJar()
}
```

### Publishing

- [Basic Publishing](https://docs.gradle.org/current/userguide/publishing_setup.html#sec:basic_publishing)
- [Signing Artifacts](https://docs.gradle.org/current/userguide/publishing_signing.html#publishing_maven:signing)
