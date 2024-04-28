webpackJsonp([0x74d9fe4390b3],{520:function(e,n){e.exports={pathContext:{posts:[{html:'<h2>Links</h2>\n<ul>\n<li><a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/">installing and starting mongodb locally</a></li>\n<li><a href="https://linuxize.com/post/how-to-install-mongodb-on-ubuntu-18-04/">some tips on configuration</a></li>\n</ul>\n<h2>Starting server and shell</h2>\n<p>Start mongodb server with:</p>\n<pre><code class="language-bash">sudo service mongod start\n</code></pre>\n<pre><code class="language-bash">sudo service mongod status\n</code></pre>\n<p>To verify whether the installation has completed successfully, connect to the MongoDB database server using the mongo tool and print the connection status with:</p>\n<pre><code class="language-bash">mongo --eval \'db.runCommand({ connectionStatus: 1 })\'\n</code></pre>\n<p>Shell can now be started with:</p>\n<pre><code class="language-bash">mongo\n</code></pre>\n<h2>Example</h2>\n<pre><code class="language-node">db.createCollection(\'employes\');\n</code></pre>\n<ul>\n<li>display all of the collections in the database:</li>\n</ul>\n<pre><code class="language-node">show collections;\n</code></pre>\n<ul>\n<li>insert data:</li>\n</ul>\n<pre><code class="language-node">db.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7d9"), "nom" : "King", "prenom" : "David", "anciennete" : 27, "adresse" : { "numero" : 78, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7da"), "nom" : "Ossola", "prenom" : "Christophe", "anciennete" : 7, "adresse" : { "numero" : 75, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7db"), "nom" : "Monnin", "prenom" : "Gilles", "anciennete" : 2, "adresse" : { "numero" : 80, "rue" : "General Leclerc", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7dc"), "nom" : "Priou", "prenom" : "Franck", "anciennete" : 5, "adresse" : { "numero" : 79, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 547608352 });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7dd"), "nom" : "Leberre", "prenom" : "Stephanie", "anciennete" : 1, "adresse" : { "numero" : 79, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 559608352, "prime" : 1500 });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7de"), "nom" : "Rupont", "prenom" : "Jean", "anciennete" : 11, "adresse" : { "numero" : 15, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7df"), "nom" : "Ving", "prenom" : "David", "anciennete" : 17, "adresse" : { "numero" : 28, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7e0"), "nom" : "Bass", "prenom" : "Vincent", "anciennete" : 12, "adresse" : { "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e1"), "nom" : "Motin", "prenom" : "Roger", "anciennete" : 2, "adresse" : { "numero" : 67, "rue" : "Jean Moulin", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e2"), "nom" : "Prito", "prenom" : "Arnaud", "anciennete" : 6, "adresse" : { "numero" : 62, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 565608352 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e3"), "nom" : "Fererre", "prenom" : "Julien", "anciennete" : 8, "adresse" : { "numero" : 24, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 577608352, "prime" : 4500 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e4"), "nom" : "Cuponi", "prenom" : "Eric", "anciennete" : 10, "adresse" : { "numero" : 28, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e5"), "nom" : "Kingaba", "prenom" : "David", "anciennete" : 23, "adresse" : { "numero" : 38, "codepostal" : 33000, "ville"); db.employes.save(: "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e6"), "nom" : "Sola", "prenom" : "Nicolas", "anciennete" : 3, "adresse" : { "numero" : 45, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e7"), "nom" : "Mani", "prenom" : "Dominique", "anciennete" : 2, "adresse" : { "numero" : 47, "rue" : "Lavoisier", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e8"), "nom" : "Briu", "prenom" : "Rene", "anciennete" : 5, "adresse" : { "numero" : 107, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 575608352 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e9"), "nom" : "Leterre", "prenom" : "Stephane", "anciennete" : 1, "adresse" : { "numero" : 9, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 528608352, "prime" : 3500 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ec"), "nom" : "Laouani", "prenom" : "Bassil", "anciennete" : 7, "adresse" : { "numero" : 38, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ed"), "nom" : "Autran", "prenom" : "Vincent", "anciennete" : 2, "adresse" : { "numero" : 41, "rue" : "General DeBase", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ee"), "nom" : "Menard", "prenom" : "Eric", "anciennete" : 5, "adresse" : { "numero" : 42, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 561908352 });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7d9"), "nom" : "King", "prenom" : "David", "anciennete" : 27, "adresse" : { "numero" : 78, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7da"), "nom" : "Ossola", "prenom" : "Christophe", "anciennete" : 7, "adresse" : { "numero" : 75, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7db"), "nom" : "Monnin", "prenom" : "Gilles", "anciennete" : 2, "adresse" : { "numero" : 80, "rue" : "General Leclerc", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7dc"), "nom" : "Priou", "prenom" : "Franck", "anciennete" : 5, "adresse" : { "numero" : 79, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 547608352 });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7dd"), "nom" : "Leberre", "prenom" : "Stephanie", "anciennete" : 1, "adresse" : { "numero" : 79, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 559608352, "prime" : 1500 });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7de"), "nom" : "Rupont", "prenom" : "Jean", "anciennete" : 11, "adresse" : { "numero" : 15, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7df"), "nom" : "Ving", "prenom" : "David", "anciennete" : 17, "adresse" : { "numero" : 28, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7e0"), "nom" : "Bass", "prenom" : "Vincent", "anciennete" : 12, "adresse" : { "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e1"), "nom" : "Motin", "prenom" : "Roger", "anciennete" : 2, "adresse" : { "numero" : 67, "rue" : "Jean Moulin", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e2"), "nom" : "Prito", "prenom" : "Arnaud", "anciennete" : 6, "adresse" : { "numero" : 62, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 565608352 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e3"), "nom" : "Fererre", "prenom" : "Julien", "anciennete" : 8, "adresse" : { "numero" : 24, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 577608352, "prime" : 4500 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e4"), "nom" : "Cuponi", "prenom" : "Eric", "anciennete" : 10, "adresse" : { "numero" : 28, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e5"), "nom" : "Kingaba", "prenom" : "David", "anciennete" : 23, "adresse" : { "numero" : 38, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e6"), "nom" : "Sola", "prenom" : "Nicolas", "anciennete" : 3, "adresse" : { "numero" : 45, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e7"), "nom" : "Mani", "prenom" : "Dominique", "anciennete" : 2, "adresse" : { "numero" : 47, "rue" : "Lavoisier", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e8"), "nom" : "Briu", "prenom" : "Rene", "anciennete" : 5, "adresse" : { "numero" : 107, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 575608352 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e9"), "nom" : "Leterre", "prenom" : "Stephane", "anciennete" : 1, "adresse" : { "numero" : 9, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 528608352, "prime" : 3500 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ec"), "nom" : "Laouani", "prenom" : "Bassil", "anciennete" : 7, "adresse" : { "numero" : 38, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ed"), "nom" : "Autran", "prenom" : "Vincent", "anciennete" : 2, "adresse" : { "numero" : 41, "rue" : "General DeBase", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ee"), "nom" : "Menard", "prenom" : "Eric", "anciennete" : 5, "adresse" : { "numero" : 42, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 561908352 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ef"), "nom" : "Landry", "prenom" : "Brunel", "anciennete" : 1, "adresse" : { "numero" : 79, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 561008352, "prime" : 7500 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f0"), "nom" : "Rigal", "prenom" : "Cyril", "anciennete" : 14, "adresse" : { "numero" : 108, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f1"), "nom" : "Dupre", "prenom" : "Bertrand", "anciennete" : 4, "adresse" : { "numero" : 92, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f2"), "nom" : "Roy", "prenom" : "Christophe", "anciennete" : 7, "adresse" : { "numero" : 5, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f3"), "nom" : "Potin", "prenom" : "Stephanie", "anciennete" : 3, "adresse" : { "numero" : 15, "rue" : "Jean Sens", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f4"), "nom" : "Hollande", "prenom" : "Sylvie", "anciennete" : 5, "adresse" : { "numero" : 16, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 96930282 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f5"), "nom" : "Chirac", "prenom" : "Melanie", "anciennete" : 1, "adresse" : { "numero" : 17, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 561607852, "prime" : 1500 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f6"), "nom" : "Aumont", "prenom" : "Audrey", "anciennete" : 10, "adresse" : { "numero" : 18, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f7"), "nom" : "Julien", "prenom" : "Marie", "anciennete" : 11, "adresse" : { "numero" : 19, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f8"), "nom" : "Guttierrez", "prenom" : "Garard", "anciennete" : 7, "adresse" : { "numero" : 75, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f9"), "nom" : "David", "prenom" : "Christophe", "anciennete" : 12, "adresse" : { "numero" : 80, "rue" : "Les tuiles", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7fa"), "nom" : "Allemand", "prenom" : "Edouard", "anciennete" : 5, "adresse" : { "numero" : 17, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 561608552 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7fb"), "nom" : "Has", "prenom" : "Stephen", "anciennete" : 13, "adresse" : { "numero" : 7, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 96930154, "prime" : 5000 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7fc"), "nom" : "Voneschen", "prenom" : "Henri", "anciennete" : 10, "adresse" : { "numero" : 25, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7fd"), "nom" : "Buyot", "prenom" : "David", "anciennete" : 14, "adresse" : { "numero" : 8, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7fe"), "nom" : "Manola", "prenom" : "Christophe", "anciennete" : 7, "adresse" : { "numero" : 7, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ff"), "nom" : "Perrez", "prenom" : "Gilles", "anciennete" : 15, "adresse" : { "numero" : 2, "rue" : "Les sabliers", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f800"), "nom" : "Pinto", "prenom" : "Franck", "anciennete" : 5, "adresse" : { "numero" : 11, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 96928426 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f801"), "nom" : "Baron", "prenom" : "Elodie", "anciennete" : 16, "adresse" : { "numero" : 9, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 96934634, "prime" : 1500 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f802"), "nom" : "Pasqua", "prenom" : "Jean", "anciennete" : 5, "adresse" : { "numero" : 32, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f803"), "nom" : "Moore", "prenom" : "Roland", "anciennete" : 17, "adresse" : { "numero" : 37, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f804"), "nom" : "Copola", "prenom" : "Marc", "anciennete" : 7, "adresse" : { "numero" : 47, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f805"), "nom" : "Batin", "prenom" : "Orlando", "anciennete" : 2, "adresse" : { "numero" : 27, "rue" : "Les huissiers", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f806"), "nom" : "Buis", "prenom" : "James", "anciennete" : 5, "adresse" : { "numero" : 10, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 96935146 });\ndb.employes.save({ "_id" : ObjectId("511d0aa2181b16509ae5f807"), "nom" : "Balen", "prenom" : "Ortens", "anciennete" : 1, "adresse" : { "numero" : 11, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 567708352, "prime" : 200 });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7d8"), "nom" : "Dupond", "prenom" : "Jean", "anciennete" : 10, "adresse" : { "numero" : 77, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ea"), "nom" : "Caponi", "prenom" : "Jean", "anciennete" : 12, "adresse" : { "numero" : 77, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7eb"), "nom" : "Bouras", "prenom" : "Gerardo", "anciennete" : 27, "adresse" : { "numero" : 34, "codepostal" : 33000, "ville" : "Bordeaux" } });\n</code></pre>\n<ul>\n<li>display all documents in the collection and their number:</li>\n</ul>\n<pre><code class="language-node">db.employes.find();\n</code></pre>\n<pre><code class="language-node">db.employes.find().count();\n</code></pre>\n<ul>\n<li>insert data in two different ways:</li>\n</ul>\n<pre><code class="language-node">db.employes.insert({nom:\'Alan\',prenom:\'Joe\',anciennete:10});\ndb.employes.save({nom:\'Wick\',prenom:\'John\',prime:150});\n</code></pre>\n<ul>\n<li>display employees whose firstnames are David:</li>\n</ul>\n<pre><code class="language-node">db.employes.find({prenom:\'David\'});\n</code></pre>\n<ul>\n<li>display employees whose firstnames either start with a D or end with a d:</li>\n</ul>\n<pre><code class="language-node">db.employes.find({prenom:/D.*|.*d$/});\n</code></pre>\n<ul>\n<li>employees whose firstnames both start and end with a vowel:</li>\n</ul>\n<pre><code class="language-node">db.employes.find({prenom:/^[AEIOUY].*[aeiouy]$/});\n</code></pre>\n<ul>\n<li>employees with firstnames starting and ending with the same letter:</li>\n</ul>\n<pre><code class="language-node">db.employes.find().forEach(function(p){let pre = p.prenom.toLowerCase();if(pre.substr(0,1)==pre.substr(pre.length-1,1)){print(pre);}});\n</code></pre>\n<ul>\n<li>\n<p>display employees whose anciennete is larger than 10 years:</p>\n<pre><code class="language-node">db.employes.find({anciennete:{$gt:10}},{_id:0,nom:1,prenom:1});\n</code></pre>\n</li>\n<li>\n<p>display name and address of employees whose street is known:</p>\n<pre><code class="language-node">db.employes.find({\'adresse.rue\':{$exists:true}},{nom:1,adresse:1});\ndb.employes.find({\'adresse.rue\':{$exists:true}},{nom:1,adresse:1}).limit(2).pretty();\ndb.employes.find({\'adresse.rue\':{$exists:true}},{nom:1,adresse:1,_id:0}).limit(2).pretty();\n</code></pre>\n</li>\n<li>\n<p>increase of 200 the prime of employees already having a prime</p>\n<pre><code class="language-node">db.employes.updateMany({prime:{$exists:true}},{$inc:{prime:200}});\n</code></pre>\n</li>\n<li>\n<p>list the first three among employees sorted in a decreasing way by seniority:</p>\n<pre><code class="language-node">db.employes.find({anciennete:{$exists:true}},{_id:0}).sort({anciennete:-1}).limit(3).pretty();\n</code></pre>\n</li>\n<li>\n<p>display empoyees from Toulouse with their seniority:</p>\n<pre><code class="language-node">db.employes.find({\'adresse.ville\':\'Toulouse\'},{nom:1,prenom:1,anciennete:1,_id:0}).pretty();\n</code></pre>\n</li>\n<li>\n<p>More <code>find</code> queries:</p>\n<pre><code class="language-node">db.employes.find({$and:[{prenom:/^M/},{$or:[{\'adresse.ville\':\'Foix\'},{\'adresse.ville\':\'Bordeaux\'}]}]});\ndb.employes.find({$and:[{prenom:/^M/},{$or:[{\'adresse.ville\':\'Foix\'},{\'adresse.ville\':\'Bordeaux\'}]}]}).pretty();\n</code></pre>\n</li>\n<li>\n<p>Update operation on an employee\'s address:</p>\n<pre><code class="language-node">db.employes.update({prenom: \'Dominique\', nom:\'Mani\'},{$set:{\'adresse.numero\':20,\'adresse.ville\':\'Marseille\',\'adresse.codepostal\':\'13015\'},$unset:{\'adresse.rue\':1}});\n</code></pre>\n</li>\n<li>\n<p>Add prime to employees from Toulouse and Bordeaux without primes:</p>\n<pre><code class="language-node">db.employes.updateMany({$and:[{"adresse.ville":{$nin:["Paris","Toulouse","Bordeaux"]}},{prime:{$exists:false}}]},{$set:{prime:1500}});\n</code></pre>\n</li>\n<li>\n<p>miscelaneous:</p>\n<pre><code class="language-node">db.employes.find({tel:{$exists:true}},{}).forEach(function(t){db.employes.updateMany({_id:t._id},{$push:{telephone:t.tel},$unset:{tel:1}});});\ndb.employes.find({prime:{$exists:0}}).count();\ndb.employes.find({prime:{$exists:0}}).forEach(function(doc){var length = doc.adresse.ville.length; var newPrime = 100*length; db.employes.update({_id: doc._id},{$inc:{prime: newPrime}});});\ndb.employes.find({prime:{$exists:0}}).count();\ndb.employes.find().forEach(function(p){var email=p.nom+\'.\'+p.prenom+\'@formation.fr\';if(p.telephone){var email=p.prenom+\'.\'+p.nom+\'@formation.fr\';db.employes.updateMany({_id:p._id},{$set:{mail:email}})}});\ndb.employes.aggregate({$group:{_id:\'$prenom\',ancienneteCum:{$sum:\'$anciennete\'}}},{$sort:{_id:1}});\nObjectId("511d0aa0181b16509ae5f7f7");\n</code></pre>\n</li>\n</ul>',id:"/home/nicolas/projects/workshop/src/pages/2021-10-20-mongo/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-10-20T10:14:00.823Z",path:"/mongo",title:"Mongo",excerpt:"",tags:["NoSQL","mongo"]}}],tagName:"mongo"}}}});
//# sourceMappingURL=path---tags-mongo-a32885694f0dff9f4945.js.map