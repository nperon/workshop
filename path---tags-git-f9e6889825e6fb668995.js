webpackJsonp([0xcca08df713f4],{489:function(e,t){e.exports={pathContext:{posts:[{html:'<h2>Deleting a commit</h2>\n<p>The --soft flag ensures changes from the deleted commit remain staged:</p>\n<pre><code class="language-zsh">git reset --soft HEAD~1\n</code></pre>\n<h2>Rebasing to the tip of local main branch</h2>\n<pre><code class="language-zsh">git rebase main\ngit push --force-with-lease\n</code></pre>\n<p>In case there are conflict execute commands like <code>git add ...</code> and <code>git rebase --continue</code></p>\n<p>When relevant, priority can be given to feature branch changes with:</p>\n<pre><code class="language-zsh">git rebase --main -Xtheirs\n</code></pre>\n<p>followed with:</p>\n<pre><code class="language-zsh">git push --force\n</code></pre>\n<h2>Updating the local branch with respect to remote</h2>\n<pre><code class="language-zsh">git pull --rebase\n</code></pre>\n<h2>Interactive rebase</h2>\n<pre><code class="language-zsh">git log --oneline --decorate --all --graph\n</code></pre>\n<pre><code class="language-zsh">git rebase --interactive HEAD~3\n</code></pre>\n<pre><code class="language-zsh">git push --force origin feat/add-my-feature\n</code></pre>\n<h2>Get back to older commit after several commits pushed to the remote</h2>\n<p>Use <code>git log</code> and <code>git reflog</code> to identify the\ncommit to target and get its sha1, say COMMIT_HASH</p>\n<p>Get back to that commit with:</p>\n<pre><code class="language-zsh">git reset --hard COMMIT_HASH\n</code></pre>\n<p>Finally, push with:</p>\n<pre><code class="language-zsh">git push origin feat/opensearch_operator --force-with-lease\n</code></pre>',id:"/Users/nicolas/repos/github.com/nperon/workshop/src/pages/2022-08-20-git/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2022-08-20T23:16:22.342Z",path:"/git",title:"Git",excerpt:"",tags:["git","devops"]}}],tagName:"git"}}}});
//# sourceMappingURL=path---tags-git-f9e6889825e6fb668995.js.map