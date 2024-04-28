webpackJsonp([0xf499ee85dc41],{544:function(e,a){e.exports={pathContext:{posts:[{html:'<p>Keytool is a tool used to manage java keystores. It allows to do the following:</p>\n<ul>\n<li>listing keystore contens</li>\n<li>changing (add/remove) keys and certificates</li>\n<li>generating keys and key pairs</li>\n</ul>\n<p>Links:</p>\n<ul>\n<li><a href="https://blogs.oracle.com/java-platform-group/self-signed-certificates-for-a-known-community">Self signed certificates for a known community</a></li>\n</ul>\n<p>Help command is just:</p>\n<pre><code class="language-bash">keytool -h\n</code></pre>\n<p>Command to generate a key pair:</p>\n<pre><code class="language-bash">keytool -genkeypair -alias myalias -keyalg RSA -keysize 2048 -validity 730 -keystore ownjavakeystore.jks\n</code></pre>\n<p>Now to display the updated keystore content:</p>\n<pre><code class="language-bash">keytool -list -keystore ownjavakeystore.jks\n</code></pre>\n<p>Here is the command to export the myalias key pair into a certificate file called myalias.cer:</p>\n<pre><code class="language-bash">keytool -exportcert -keystore ownjavakeystore.jks -alias myalias -file myalias.cer\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2024-04-28-keytool/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2024-04-28T14:02:00.438Z",path:"/keytool",title:"Keytool",excerpt:"",tags:["java","security","tls","ssl","keytool"]}}],tagName:"tls"}}}});
//# sourceMappingURL=path---tags-tls-feca13ea87fa8fea68b8.js.map