webpackJsonp([0x9c4986dd0e7e],{475:function(e,n){e.exports={pathContext:{posts:[{html:'<h2>Goals</h2>\n<pre><code class="language-zsh">mvn clean\n</code></pre>\n<pre><code class="language-zsh">mvn package\n</code></pre>\n<p>To display a POM that includes all of the inherited properties, execute:</p>\n<pre><code class="language-zsh">mvn help:effective-pom\n</code></pre>\n<h2>Dependency Scope</h2>\n<ul>\n<li>Compile: Default. Available on all classpaths of project. Also, propagated to downstream projects.</li>\n<li>Provided: Like Compile, but expected to be provided by JDK or container at runtime.</li>\n<li>Runtime: Not required for compile, but needed for runtime. On runtime and test classpaths, not compile.</li>\n<li>Test: Only available on test classpath, not transitive.</li>\n<li>System: similar to provided, but jar is added to system explicitly (via file path)</li>\n<li>Import: imports dependency of POM</li>\n</ul>\n<h4>Dependency plugin goals</h4>\n<ul>\n<li>dependency:tree</li>\n<li>dependency:go-offline</li>\n<li>dependency:purge-local-repository</li>\n<li>dependency:sources</li>\n</ul>\n<h2>Maven Build Lifecycles</h2>\n<p>Maven is based on the concept of build lifecycles.\nA licecycle is a pre-defined group of build steps called <strong>phases</strong>.\nEach phase can be bound to one or more plugin <strong>goals</strong>.\nAll work done in Maven is done by plugins.\nLifecycles and phases provide the framework to call plugin goals in a sequence.</p>\n<p>There are three pre-defined lifecycles:</p>\n<ul>\n<li>clean</li>\n<li>default: does the build and deployment of the project. It is defined without plugin bindings, bindings are defined for each packaging. The default lifecycle include the phases but a number of them are not mentioned: validate, compile, test, package, verify, install and deploy.</li>\n<li>site: least used in practice</li>\n</ul>\n<p>For instance phases of the default lifecycle involved in the case of a jar\npackaging are the following:</p>\n<ul>\n<li>process-resources (maven-resources-plugin: resources)</li>\n<li>compile (maven-compiler-plugin: compile)</li>\n<li>process-test-resources (maven-compiler-plugin: testResources)</li>\n<li>test-compile (maven-compiler-plugin: testCompile)</li>\n<li>test (maven-surefire-plugin: jar)</li>\n<li>package (maven-jar-plugin: jar)</li>\n<li>install (maven-install-plugin: install)</li>\n<li>deploy (maven-deploy-plugin: deploy)</li>\n</ul>\n<h2>Maven configuration — <code>settings.xml</code></h2>',id:"/Users/nicolas/repos/github.com/nperon/workshop/src/pages/2022-08-27-maven/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2022-08-27T00:47:00.342Z",path:"/maven",title:"Maven",excerpt:"",tags:["maven","devops","continuous integration","build","java","kotlin"]}},{html:'<p>A list of all tasks can be displayed with:</p>\n<pre><code class="language-zsh">gradle tasks\n</code></pre>\n<h3>Gradle init task:</h3>\n<p>This task initiates a project including a gradlew wrapper script:</p>\n<pre><code class="language-zsh">mkdir demo\ncd demo\ngradle init\ntree .\n</code></pre>\n<p>Application can be run with:</p>\n<pre><code class="language-zsh">./gradlew run\n</code></pre>\n<p>and bundled with:</p>\n<pre><code class="language-zsh">./gradlew build\n</code></pre>\n<p>This produces two archives called <code>app.tar</code> and <code>app.zip</code> in `<code></code>app/build/distribution<code></code></p>\n<h3>Gradle jar task: <a href="https://docs.gradle.org/current/samples/sample_building_kotlin_libraries.html#customize_the_library_jar">customizing the library jar</a></h3>\n<p>Properties to set if required in the build.gradle.kts file: version, name and group i.e. maven coordinates:</p>\n<pre><code class="language-kts">version=\nname=\ngroup=\n</code></pre>\n<p>Run the jar task:</p>\n<pre><code class="language-zsh">./gradlew jar\n</code></pre>\n<p>Verifying that an archive is valid:</p>\n<pre><code class="language-zsh">jar tf lib/build/libs/lib.jar\n</code></pre>\n<p>Verifying that archive is signed:</p>\n<pre><code class="language-zsh">jarsigner -verify lib/build/libs/lib.jar\n</code></pre>\n<h3>Displaying the tasks sequence</h3>\n<pre><code class="language-zsh">./gradlew test --console=plain\n</code></pre>\n<h3>The dependencies task</h3>\n<pre><code class="language-zsh">./gradlew :app:dependencies --configuration runtimeClasspath\n</code></pre>\n<p>This shows dependencies of a given classpath, e. g. runtime.</p>\n<h3>Generating sources JAR:</h3>\n<pre><code class="language-kts">java {\n    withSourcesJar()\n}\n</code></pre>\n<h3>Publishing</h3>\n<ul>\n<li><a href="https://docs.gradle.org/current/userguide/publishing_setup.html#sec:basic_publishing">Basic Publishing</a></li>\n<li><a href="https://docs.gradle.org/current/userguide/publishing_signing.html#publishing_maven:signing">Signing Artifacts</a></li>\n</ul>',id:"/Users/nicolas/repos/github.com/nperon/workshop/src/pages/2022-09-09-gradle/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2022-09-09T14:02:00.438Z",path:"/gradle",title:"Gradle",excerpt:"",tags:["gradle","devops","continuous integration","build","java","kotlin"]}}],tagName:"build"}}}});
//# sourceMappingURL=path---tags-build-0ff1db1917adf2a3ce75.js.map