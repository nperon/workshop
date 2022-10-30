webpackJsonp([98025234576756],{493:function(e,a){e.exports={pathContext:{posts:[{html:'<p>A list of all tasks can be displayed with:</p>\n<pre><code class="language-zsh">gradle tasks\n</code></pre>\n<h3>Gradle init task:</h3>\n<p>This task initiates a project including a gradlew wrapper script:</p>\n<pre><code class="language-zsh">mkdir demo\ncd demo\ngradle init\ntree .\n</code></pre>\n<p>Application can be run with:</p>\n<pre><code class="language-zsh">./gradlew run\n</code></pre>\n<p>and bundled with:</p>\n<pre><code class="language-zsh">./gradlew build\n</code></pre>\n<p>This produces two archives called <code>app.tar</code> and <code>app.zip</code> in `<code></code>app/build/distribution<code></code></p>\n<h3>Gradle jar task: <a href="https://docs.gradle.org/current/samples/sample_building_kotlin_libraries.html#customize_the_library_jar">customizing the library jar</a></h3>\n<p>Properties to set if required in the build.gradle.kts file: version, name and group i.e. maven coordinates:</p>\n<pre><code class="language-kts">version=\nname=\ngroup=\n</code></pre>\n<p>Run the jar task:</p>\n<pre><code class="language-zsh">./gradlew jar\n</code></pre>\n<p>Verifying that an archive is valid:</p>\n<pre><code class="language-zsh">jar tf lib/build/libs/lib.jar\n</code></pre>\n<p>Verifying that archive is signed:</p>\n<pre><code class="language-zsh">jarsigner -verify lib/build/libs/lib.jar\n</code></pre>\n<h3>Displaying the tasks sequence</h3>\n<pre><code class="language-zsh">./gradlew test --console=plain\n</code></pre>\n<h3>The dependencies task</h3>\n<pre><code class="language-zsh">./gradlew :app:dependencies --configuration runtimeClasspath\n</code></pre>\n<p>This shows dependencies of a given classpath, e. g. runtime.</p>\n<h3>Generating sources JAR:</h3>\n<pre><code class="language-kts">java {\n    withSourcesJar()\n}\n</code></pre>\n<h3>Publishing</h3>\n<ul>\n<li><a href="https://docs.gradle.org/current/userguide/publishing_setup.html#sec:basic_publishing">Basic Publishing</a></li>\n<li><a href="https://docs.gradle.org/current/userguide/publishing_signing.html#publishing_maven:signing">Signing Artifacts</a></li>\n</ul>',id:"/Users/nicolas/repos/github.com/nperon/workshop/src/pages/2022-09-09-gradle/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2022-09-09T14:02:00.438Z",path:"/gradle",title:"Gradle",excerpt:"",tags:["gradle","devops","continuous integration","build","java","kotlin"]}}],tagName:"gradle"}}}});
//# sourceMappingURL=path---tags-gradle-e7a272ed60b6911b7b11.js.map