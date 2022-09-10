webpackJsonp([0x9559a714062d],{454:function(e,n){e.exports={data:{markdownRemark:{html:'<h2>Links</h2>\n<ul>\n<li><a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/">installing and starting mongodb locally</a></li>\n<li><a href="https://linuxize.com/post/how-to-install-mongodb-on-ubuntu-18-04/">some tips on configuration</a></li>\n</ul>\n<h2>Starting server and shell</h2>\n<p>Start mongodb server with:</p>\n<pre><code class="language-bash">sudo service mongod start\n</code></pre>\n<pre><code class="language-bash">sudo service mongod status\n</code></pre>\n<p>To verify whether the installation has completed successfully, connect to the MongoDB database server using the mongo tool and print the connection status with:</p>\n<pre><code class="language-bash">mongo --eval \'db.runCommand({ connectionStatus: 1 })\'\n</code></pre>\n<p>Shell can now be started with:</p>\n<pre><code class="language-bash">mongo\n</code></pre>\n<h2>Example</h2>\n<pre><code class="language-node">db.createCollection(\'employes\');\n</code></pre>\n<ul>\n<li>display all of the collections in the database:</li>\n</ul>\n<pre><code class="language-node">show collections;\n</code></pre>\n<ul>\n<li>insert data:</li>\n</ul>\n<pre><code class="language-node">db.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7d9"), "nom" : "King", "prenom" : "David", "anciennete" : 27, "adresse" : { "numero" : 78, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7da"), "nom" : "Ossola", "prenom" : "Christophe", "anciennete" : 7, "adresse" : { "numero" : 75, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7db"), "nom" : "Monnin", "prenom" : "Gilles", "anciennete" : 2, "adresse" : { "numero" : 80, "rue" : "General Leclerc", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7dc"), "nom" : "Priou", "prenom" : "Franck", "anciennete" : 5, "adresse" : { "numero" : 79, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 547608352 });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7dd"), "nom" : "Leberre", "prenom" : "Stephanie", "anciennete" : 1, "adresse" : { "numero" : 79, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 559608352, "prime" : 1500 });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7de"), "nom" : "Rupont", "prenom" : "Jean", "anciennete" : 11, "adresse" : { "numero" : 15, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7df"), "nom" : "Ving", "prenom" : "David", "anciennete" : 17, "adresse" : { "numero" : 28, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7e0"), "nom" : "Bass", "prenom" : "Vincent", "anciennete" : 12, "adresse" : { "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e1"), "nom" : "Motin", "prenom" : "Roger", "anciennete" : 2, "adresse" : { "numero" : 67, "rue" : "Jean Moulin", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e2"), "nom" : "Prito", "prenom" : "Arnaud", "anciennete" : 6, "adresse" : { "numero" : 62, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 565608352 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e3"), "nom" : "Fererre", "prenom" : "Julien", "anciennete" : 8, "adresse" : { "numero" : 24, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 577608352, "prime" : 4500 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e4"), "nom" : "Cuponi", "prenom" : "Eric", "anciennete" : 10, "adresse" : { "numero" : 28, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e5"), "nom" : "Kingaba", "prenom" : "David", "anciennete" : 23, "adresse" : { "numero" : 38, "codepostal" : 33000, "ville"); db.employes.save(: "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e6"), "nom" : "Sola", "prenom" : "Nicolas", "anciennete" : 3, "adresse" : { "numero" : 45, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e7"), "nom" : "Mani", "prenom" : "Dominique", "anciennete" : 2, "adresse" : { "numero" : 47, "rue" : "Lavoisier", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e8"), "nom" : "Briu", "prenom" : "Rene", "anciennete" : 5, "adresse" : { "numero" : 107, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 575608352 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e9"), "nom" : "Leterre", "prenom" : "Stephane", "anciennete" : 1, "adresse" : { "numero" : 9, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 528608352, "prime" : 3500 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ec"), "nom" : "Laouani", "prenom" : "Bassil", "anciennete" : 7, "adresse" : { "numero" : 38, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ed"), "nom" : "Autran", "prenom" : "Vincent", "anciennete" : 2, "adresse" : { "numero" : 41, "rue" : "General DeBase", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ee"), "nom" : "Menard", "prenom" : "Eric", "anciennete" : 5, "adresse" : { "numero" : 42, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 561908352 });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7d9"), "nom" : "King", "prenom" : "David", "anciennete" : 27, "adresse" : { "numero" : 78, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7da"), "nom" : "Ossola", "prenom" : "Christophe", "anciennete" : 7, "adresse" : { "numero" : 75, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7db"), "nom" : "Monnin", "prenom" : "Gilles", "anciennete" : 2, "adresse" : { "numero" : 80, "rue" : "General Leclerc", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7dc"), "nom" : "Priou", "prenom" : "Franck", "anciennete" : 5, "adresse" : { "numero" : 79, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 547608352 });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7dd"), "nom" : "Leberre", "prenom" : "Stephanie", "anciennete" : 1, "adresse" : { "numero" : 79, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 559608352, "prime" : 1500 });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7de"), "nom" : "Rupont", "prenom" : "Jean", "anciennete" : 11, "adresse" : { "numero" : 15, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7df"), "nom" : "Ving", "prenom" : "David", "anciennete" : 17, "adresse" : { "numero" : 28, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7e0"), "nom" : "Bass", "prenom" : "Vincent", "anciennete" : 12, "adresse" : { "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e1"), "nom" : "Motin", "prenom" : "Roger", "anciennete" : 2, "adresse" : { "numero" : 67, "rue" : "Jean Moulin", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e2"), "nom" : "Prito", "prenom" : "Arnaud", "anciennete" : 6, "adresse" : { "numero" : 62, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 565608352 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e3"), "nom" : "Fererre", "prenom" : "Julien", "anciennete" : 8, "adresse" : { "numero" : 24, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 577608352, "prime" : 4500 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e4"), "nom" : "Cuponi", "prenom" : "Eric", "anciennete" : 10, "adresse" : { "numero" : 28, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e5"), "nom" : "Kingaba", "prenom" : "David", "anciennete" : 23, "adresse" : { "numero" : 38, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e6"), "nom" : "Sola", "prenom" : "Nicolas", "anciennete" : 3, "adresse" : { "numero" : 45, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e7"), "nom" : "Mani", "prenom" : "Dominique", "anciennete" : 2, "adresse" : { "numero" : 47, "rue" : "Lavoisier", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e8"), "nom" : "Briu", "prenom" : "Rene", "anciennete" : 5, "adresse" : { "numero" : 107, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 575608352 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7e9"), "nom" : "Leterre", "prenom" : "Stephane", "anciennete" : 1, "adresse" : { "numero" : 9, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 528608352, "prime" : 3500 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ec"), "nom" : "Laouani", "prenom" : "Bassil", "anciennete" : 7, "adresse" : { "numero" : 38, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ed"), "nom" : "Autran", "prenom" : "Vincent", "anciennete" : 2, "adresse" : { "numero" : 41, "rue" : "General DeBase", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ee"), "nom" : "Menard", "prenom" : "Eric", "anciennete" : 5, "adresse" : { "numero" : 42, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 561908352 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ef"), "nom" : "Landry", "prenom" : "Brunel", "anciennete" : 1, "adresse" : { "numero" : 79, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 561008352, "prime" : 7500 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f0"), "nom" : "Rigal", "prenom" : "Cyril", "anciennete" : 14, "adresse" : { "numero" : 108, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f1"), "nom" : "Dupre", "prenom" : "Bertrand", "anciennete" : 4, "adresse" : { "numero" : 92, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f2"), "nom" : "Roy", "prenom" : "Christophe", "anciennete" : 7, "adresse" : { "numero" : 5, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f3"), "nom" : "Potin", "prenom" : "Stephanie", "anciennete" : 3, "adresse" : { "numero" : 15, "rue" : "Jean Sens", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f4"), "nom" : "Hollande", "prenom" : "Sylvie", "anciennete" : 5, "adresse" : { "numero" : 16, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 96930282 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f5"), "nom" : "Chirac", "prenom" : "Melanie", "anciennete" : 1, "adresse" : { "numero" : 17, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 561607852, "prime" : 1500 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f6"), "nom" : "Aumont", "prenom" : "Audrey", "anciennete" : 10, "adresse" : { "numero" : 18, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f7"), "nom" : "Julien", "prenom" : "Marie", "anciennete" : 11, "adresse" : { "numero" : 19, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f8"), "nom" : "Guttierrez", "prenom" : "Garard", "anciennete" : 7, "adresse" : { "numero" : 75, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7f9"), "nom" : "David", "prenom" : "Christophe", "anciennete" : 12, "adresse" : { "numero" : 80, "rue" : "Les tuiles", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7fa"), "nom" : "Allemand", "prenom" : "Edouard", "anciennete" : 5, "adresse" : { "numero" : 17, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 561608552 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7fb"), "nom" : "Has", "prenom" : "Stephen", "anciennete" : 13, "adresse" : { "numero" : 7, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 96930154, "prime" : 5000 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7fc"), "nom" : "Voneschen", "prenom" : "Henri", "anciennete" : 10, "adresse" : { "numero" : 25, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7fd"), "nom" : "Buyot", "prenom" : "David", "anciennete" : 14, "adresse" : { "numero" : 8, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7fe"), "nom" : "Manola", "prenom" : "Christophe", "anciennete" : 7, "adresse" : { "numero" : 7, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ff"), "nom" : "Perrez", "prenom" : "Gilles", "anciennete" : 15, "adresse" : { "numero" : 2, "rue" : "Les sabliers", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f800"), "nom" : "Pinto", "prenom" : "Franck", "anciennete" : 5, "adresse" : { "numero" : 11, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 96928426 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f801"), "nom" : "Baron", "prenom" : "Elodie", "anciennete" : 16, "adresse" : { "numero" : 9, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 96934634, "prime" : 1500 });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f802"), "nom" : "Pasqua", "prenom" : "Jean", "anciennete" : 5, "adresse" : { "numero" : 32, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f803"), "nom" : "Moore", "prenom" : "Roland", "anciennete" : 17, "adresse" : { "numero" : 37, "codepostal" : 33000, "ville" : "Bordeaux" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f804"), "nom" : "Copola", "prenom" : "Marc", "anciennete" : 7, "adresse" : { "numero" : 47, "codepostal" : 75000, "ville" : "Paris" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f805"), "nom" : "Batin", "prenom" : "Orlando", "anciennete" : 2, "adresse" : { "numero" : 27, "rue" : "Les huissiers", "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f806"), "nom" : "Buis", "prenom" : "James", "anciennete" : 5, "adresse" : { "numero" : 10, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 96935146 });\ndb.employes.save({ "_id" : ObjectId("511d0aa2181b16509ae5f807"), "nom" : "Balen", "prenom" : "Ortens", "anciennete" : 1, "adresse" : { "numero" : 11, "codepostal" : 9500, "ville" : "Foix" }, "tel" : 567708352, "prime" : 200 });\ndb.employes.save({ "_id" : ObjectId("511d0a9f181b16509ae5f7d8"), "nom" : "Dupond", "prenom" : "Jean", "anciennete" : 10, "adresse" : { "numero" : 77, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7ea"), "nom" : "Caponi", "prenom" : "Jean", "anciennete" : 12, "adresse" : { "numero" : 77, "codepostal" : 31000, "ville" : "Toulouse" } });\ndb.employes.save({ "_id" : ObjectId("511d0aa0181b16509ae5f7eb"), "nom" : "Bouras", "prenom" : "Gerardo", "anciennete" : 27, "adresse" : { "numero" : 34, "codepostal" : 33000, "ville" : "Bordeaux" } });\n</code></pre>\n<ul>\n<li>display all documents in the collection and their number:</li>\n</ul>\n<pre><code class="language-node">db.employes.find();\n</code></pre>\n<pre><code class="language-node">db.employes.find().count();\n</code></pre>\n<ul>\n<li>insert data in two different ways:</li>\n</ul>\n<pre><code class="language-node">db.employes.insert({nom:\'Alan\',prenom:\'Joe\',anciennete:10});\ndb.employes.save({nom:\'Wick\',prenom:\'John\',prime:150});\n</code></pre>\n<ul>\n<li>display employees whose firstnames are David:</li>\n</ul>\n<pre><code class="language-node">db.employes.find({prenom:\'David\'});\n</code></pre>\n<ul>\n<li>display employees whose firstnames either start with a D or end with a d:</li>\n</ul>\n<pre><code class="language-node">db.employes.find({prenom:/D.*|.*d$/});\n</code></pre>\n<ul>\n<li>employees whose firstnames both start and end with a vowel:</li>\n</ul>\n<pre><code class="language-node">db.employes.find({prenom:/^[AEIOUY].*[aeiouy]$/});\n</code></pre>\n<ul>\n<li>employees with firstnames starting and ending with the same letter:</li>\n</ul>\n<pre><code class="language-node">db.employes.find().forEach(function(p){let pre = p.prenom.toLowerCase();if(pre.substr(0,1)==pre.substr(pre.length-1,1)){print(pre);}});\n</code></pre>\n<ul>\n<li>\n<p>display employees whose anciennete is larger than 10 years:</p>\n<pre><code class="language-node">db.employes.find({anciennete:{$gt:10}},{_id:0,nom:1,prenom:1});\n</code></pre>\n</li>\n<li>\n<p>display name and address of employees whose street is known:</p>\n<pre><code class="language-node">db.employes.find({\'adresse.rue\':{$exists:true}},{nom:1,adresse:1});\ndb.employes.find({\'adresse.rue\':{$exists:true}},{nom:1,adresse:1}).limit(2).pretty();\ndb.employes.find({\'adresse.rue\':{$exists:true}},{nom:1,adresse:1,_id:0}).limit(2).pretty();\n</code></pre>\n</li>\n<li>\n<p>increase of 200 the prime of employees already having a prime</p>\n<pre><code class="language-node">db.employes.updateMany({prime:{$exists:true}},{$inc:{prime:200}});\n</code></pre>\n</li>\n<li>\n<p>list the first three among employees sorted in a decreasing way by seniority:</p>\n<pre><code class="language-node">db.employes.find({anciennete:{$exists:true}},{_id:0}).sort({anciennete:-1}).limit(3).pretty();\n</code></pre>\n</li>\n<li>\n<p>display empoyees from Toulouse with their seniority:</p>\n<pre><code class="language-node">db.employes.find({\'adresse.ville\':\'Toulouse\'},{nom:1,prenom:1,anciennete:1,_id:0}).pretty();\n</code></pre>\n</li>\n<li>\n<p>More <code>find</code> queries:</p>\n<pre><code class="language-node">db.employes.find({$and:[{prenom:/^M/},{$or:[{\'adresse.ville\':\'Foix\'},{\'adresse.ville\':\'Bordeaux\'}]}]});\ndb.employes.find({$and:[{prenom:/^M/},{$or:[{\'adresse.ville\':\'Foix\'},{\'adresse.ville\':\'Bordeaux\'}]}]}).pretty();\n</code></pre>\n</li>\n<li>\n<p>Update operation on an employee\'s address:</p>\n<pre><code class="language-node">db.employes.update({prenom: \'Dominique\', nom:\'Mani\'},{$set:{\'adresse.numero\':20,\'adresse.ville\':\'Marseille\',\'adresse.codepostal\':\'13015\'},$unset:{\'adresse.rue\':1}});\n</code></pre>\n</li>\n<li>\n<p>Add prime to employees from Toulouse and Bordeaux without primes:</p>\n<pre><code class="language-node">db.employes.updateMany({$and:[{"adresse.ville":{$nin:["Paris","Toulouse","Bordeaux"]}},{prime:{$exists:false}}]},{$set:{prime:1500}});\n</code></pre>\n</li>\n<li>\n<p>miscelaneous:</p>\n<pre><code class="language-node">db.employes.find({tel:{$exists:true}},{}).forEach(function(t){db.employes.updateMany({_id:t._id},{$push:{telephone:t.tel},$unset:{tel:1}});});\ndb.employes.find({prime:{$exists:0}}).count();\ndb.employes.find({prime:{$exists:0}}).forEach(function(doc){var length = doc.adresse.ville.length; var newPrime = 100*length; db.employes.update({_id: doc._id},{$inc:{prime: newPrime}});});\ndb.employes.find({prime:{$exists:0}}).count();\ndb.employes.find().forEach(function(p){var email=p.nom+\'.\'+p.prenom+\'@formation.fr\';if(p.telephone){var email=p.prenom+\'.\'+p.nom+\'@formation.fr\';db.employes.updateMany({_id:p._id},{$set:{mail:email}})}});\ndb.employes.aggregate({$group:{_id:\'$prenom\',ancienneteCum:{$sum:\'$anciennete\'}}},{$sort:{_id:1}});\nObjectId("511d0aa0181b16509ae5f7f7");\n</code></pre>\n</li>\n</ul>',frontmatter:{title:"Mongo",date:"October 20, 2021",path:"/mongo",tags:["NoSQL","mongo"],excerpt:""}}},pathContext:{prev:{html:'<h2>Links</h2>\n<ul>\n<li><a href="https://traefik.io/">Traefik labs website</a></li>\n<li><a href="https://github.com/56kcloud/traefik-training">Brian Christner 56 k Cloud github link</a></li>\n<li><a href="https://docs.traefik.io/providers/docker/#docker-api-access">Docker API Access documentation</a></li>\n<li><a href="https://docs.traefik.io/routing/routers/">General Router documentation</a></li>\n<li><a href="https://docs.traefik.io/routing/providers/docker/#routers">Docker Provider Router configurations</a></li>\n</ul>\n<h2>Traefik concepts</h2>\n<ul>\n<li>Providers: discover the services that live on the infrastructure (IP, health, ...)</li>\n<li>Entrypoints: listen for incoming traffic (ports, ...)</li>\n<li>Routers: analyse the requests (host, path, headers, SSL,...).</li>\n<li>Services: forward the request to services (load balancing, ...)</li>\n<li>Middlewares: may update the request or make decisions based on the request (authentication, rate limiting, headers, ...)</li>\n</ul>\n<h2>Routers: Connect Requests to Services</h2>\n<p>A traefik label like <code>traefik.http.routers.&#x3C;router_name>.rule</code>\ncomplies with a structure of<br>\n<code>[Docker Service].[Protocol].[Traefik Configuration].[User Defined Name for Config].[Option]</code>  </p>\n<p>A option of rule just means we are tying a rule to the router, e.g.:  </p>\n<p><code>traefik.http.routers.whoami.rule=Host(`whoami.localhost`)</code>  </p>\n<p>or in an equivalent way:  </p>\n<p><code>traefik.http.routers.whoami.rule=Host(\\"whoami.localhost\\")</code>  </p>\n<p>Traefik creates, for each container, a corresponding service and router.\nThe service automatically gets a server per instance of the container,\nand the router automatically gets a rule defined by defaultRule (if\nno rule for it was defined in labels).</p>\n<p>More examples of router configuration with labels:</p>\n<ul>\n<li><code>traefik.http.routers.&#x3C;router_name>.rule</code>:<br>\n<code>traefik.http.routers.myrouter.rule=Host(`example.com`)</code>  </li>\n<li><code>traefik.http.routers.&#x3C;router_name>.entrypoints</code>:<br>\n<code>traefik.http.routers.myrouter.entrypoints=ep1,ep2</code>  </li>\n<li><code>traefik.http.routers.&#x3C;router_name>.service</code>:<br>\n<code>traefik.http.routers.myrouter.service=myservice</code>  </li>\n<li><code>traefik.http.routers.&#x3C;router_name>.tls</code>:<br>\n<code>traefik.http.routers.myrouter.tls=true</code>  </li>\n</ul>\n<h1>Services: Configure how to reach the Application</h1>\n<ul>\n<li>Each service has its own Load Balancer. </li>\n<li>Load Balancers can load balance requests between multiple instances of your application</li>\n<li>The target of the Load Balancer is an instance of an application and is called a Server.  </li>\n<li>A Service can be assigned to one of more Routers.</li>\n</ul>\n<p>Examples of Service configuration with labels:</p>\n<ul>\n<li><code>traefik.http.services.&#x3C;service_name>.loadbalancer.server.port</code>:<br>\n<code>traefik.http.services.myservice.loadbalancer.server.port=8080</code></li>\n<li><code>traefik.http.services.&#x3C;service_name>.loadbalancer.passhostheader</code>:<br>\n<code>traefik.http.services.myservice.loadbalancer.server.passhostheader=true</code></li>\n<li><code>traefik.http.services.&#x3C;service_name>.loadbalancer.healthcheck.path</code>:<br>\n<code>traefik.http.services.myservice.loadbalancer.server.healthcheck.path=/foo</code></li>\n<li><code>traefik.http.services.&#x3C;service_name>.loadbalancer.healthcheck.port</code>:<br>\n<code>traefik.http.services.myservice.loadbalancer.healthcheck.port=42</code></li>\n</ul>\n<p>Docker specific options:</p>\n<ul>\n<li><code>traefik.enable</code><br>\ntells Traefik to override the exposedbyDefault setting for this particular container</li>\n<li><code>traefik.docker.network</code>\noverrides the default network used by Traefik</li>\n</ul>\n<h1>HTTPS / TLS / Let\'s Encrypt</h1>\n<p><a href="https://docs.traefik.io/v2.3/https/acme/#providers">DNS providers which traefik can handle</a></p>\n<p>Three ways for traefik to proceed with certificates:  </p>\n<ul>\n<li>default certificate  </li>\n<li>user defined  </li>\n<li>automated: Traefik uses Let\'s Encrypt  </li>\n</ul>\n<p>Three ways for Let\'s Encrypt to validate you control the domain name with challenges:  </p>\n<ul>\n<li>HTTP challenge</li>\n<li>DNS challenge</li>\n<li>TLS challenge</li>\n</ul>',id:"/Users/nicolas/repos/github.com/nperon/workshop/src/pages/2021-10-03-traefik/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-10-03T10:17:00.823Z",path:"/traefik",title:"Traefik",excerpt:"",tags:["Traefik"]}},next:{html:'<h2>Terminology</h2>\n<ul>\n<li>kubernetes / k8s / kube: the whole orchestration system</li>\n<li>kubeclt aka cube control: cli to configure kubernetes and manage apps</li>\n<li>node: single server in the k8s cluster</li>\n<li>kubelet: k8s agent running on nodes</li>\n<li>each kubelet can have a kube-proxy controlling its networking</li>\n<li>control plane aka the "master": set of containers that manage the cluster. Includes api server, scheduler, controller manager, etcd, core DNS and more</li>\n</ul>\n<p>A possible local Kubernetes environment could be composed of the following applications: </p>\n<ul>\n<li>minikube: a local cluster which can be installed and run on your machine. </li>\n<li>kubectl: the interface to interact with the cluster</li>\n<li>k9s: a CLI to monitor and manage your local kubernetes clusters</li>\n</ul>\n<!-- ## Links\n\nKubernetes in a browser:  \n\ntry [http://play-with-k8s.com](http://play-with-k8s.com)\nor [katacoda.com](katacoda.com) in browser -->\n<h1>Local install</h1>\n<p>Follow documentation on <a href="https://minikube.sigs.k8s.io/docs/start/">this page</a> to install minikube locally.</p>\n<p>You can then check your minikube status with: </p>\n<pre><code class="language-bash">minikube status\n</code></pre>\n<p>It can be started if necessary with</p>\n<pre><code class="language-bash">minikube start\n</code></pre>\n<p>Install now kubectl following documentation on <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/">this page</a>. </p>\n<p>The <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/#optional-kubectl-configurations-and-plugins">Optional kubectl configurations and plugins</a> can be skipped in a first stage.</p>\n<p>Configuration can be verified with:</p>\n<pre><code class="language-bash">kubectl cluster-info\n</code></pre>\n<p>You can find out the location of your kubectl executable with:</p>\n<pre><code class="language-bash">which kubectl\n</code></pre>\n<p>Download the <code>k9s_Linux_x86_64.tar.gz</code> archive available on\n<a href="https://github.com/derailed/k9s/releases">this page</a> from the k9s github.\nOnce it is extracted, just execute k9s with:</p>\n<pre><code class="language-bash">./k9s\n</code></pre>\n<h2>Pod commands together with a proper example to apply them:</h2>\n<p><code>kubectl get pod</code><br>\nget information about all running pods  </p>\n<p><code>kubectl describe pod &#x3C;pod></code><br>\ndescribe one pod  </p>\n<p><code>kubectl expose pod &#x3C;pod> --port=444 --name=frontend</code><br>\nexpose the port of a pod (creates a new service)  </p>\n<p><code>kubectl port-forward &#x3C;pod> 8080</code><br>\nport forward the exposed pod port to your local machine  </p>\n<p><code>kubectl attach &#x3C;podname> -i</code><br>\nattach to the pod  </p>\n<p><code>kubectl exec &#x3C;pod> -- command</code><br>\nexecute a command on the pod  </p>\n<p><code>kubectl label pods &#x3C;pod> mylabel=awesome</code><br>\nadd a new label to a pod  </p>\n<p><code>kubectl run -i --tty busybox --image=busybox --restart=Never -- sh</code><br>\nrun a shell in a pod  </p>\n<p>With the following example of a pod description\nin a file called <code>helloworld.yml</code>,</p>\n<pre><code class="language-yaml">apiVersion: v1\nkind: Pod\nmetadata:\n  name: nodehelloworld.example.com\n  labels:\n    app: helloworld\nspec:\n  containers:\n  - name: k8s-demo\n    image: wardviaene/k8s-demo\n    ports:\n    - name: nodejs-port\n      containerPort: 3000\n</code></pre>\n<p>The pod can be created with:</p>\n<pre><code class="language-bash">kubectl create -f helloworld.yml\n</code></pre>\n<p>Then, local port 8081 can be forwarded to port 3000 of the pod with:</p>\n<pre><code class="language-bash">kubectl port-forward nodehelloworld.example.com 8081:3000\n</code></pre>\n<p>Or else we can create a service of type NodePort to expose the pod with:</p>\n<pre><code class="language-bash">kubectl expose pod nodehelloworld.example.com --type=NodePort --name nodehelloworld-service\n</code></pre>\n<p>The end point to that service from the local machine can be displayed with:</p>\n<pre><code class="language-bash">minikube service nodehelloworld-service --url\n</code></pre>\n<p>IP addresses of services within the cluster are different. They can be accessed with:</p>\n<pre><code class="language-bash">kubectl get service\n</code></pre>\n<p>It is possible to attach to the pod and watch the possible logs with:</p>\n<pre><code class="language-bash">kubectl attach nodehelloworld.example.com\n</code></pre>\n<p>To execute a command like <code>ls /app</code> run the following line:</p>\n<pre><code class="language-bash">kubectl exec nodehelloworld.example.com -- ls /app\n</code></pre>\n<p>It is instructive to run the two following commands now:</p>\n<pre><code class="language-bash">kubectl exec nodehelloworld.example.com -- touch /app/test.txt\nkubectl exec nodehelloworld.example.com -- ls /app\n</code></pre>\n<p>To operate with a bash prompt in a pod use the following command: </p>\n<pre><code class="language-bash">kubectl exec nodehelloworld.example.com -i -t -- /bin/bash\n</code></pre>\n<p>A description of the pod can be displayed with:</p>\n<pre><code class="language-bash">kubectl describe service nodehelloworld-service\n</code></pre>\n<p>Launch another pod based on the busybox image with:</p>\n<pre><code class="language-bash">kubectl run -i --tty busybox --image=busybox --restart=Never -- sh\n</code></pre>\n<p>Let us assume that the endpoint of our nodehelloworld-service displayed in its description was 172.17.0.2:3000. Then, commands can be executed in the shell of our busybox like:</p>\n<pre><code class="language-bash">ls\ntelnet 172.17.0.2 3000\n</code></pre>\n<p>Pods can finally be deleted with:</p>\n<pre><code class="language-bash">kubectl delete pod busybox\nkubectl delete pod nodehelloworld.example.com\n</code></pre>\n<p>You can also delete the service nodehelloworld-service with:</p>\n<pre><code class="language-bash">kubectl delete service nodehelloworld-service\n</code></pre>\n<h2>Starting a cluster with an nginx container</h2>\n<p>Create a file called <code>deployment.yaml</code> with the following content:</p>\n<pre><code class="language-yaml">apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.21.4\n        ports:\n        - containerPort: 80\n</code></pre>\n<p>Create another file called <code>service.yaml</code> with the following content:</p>\n<pre><code class="language-yaml">apiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\n  labels:\n    app: nginx\nspec:\n  selector:\n    app: nginx\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 80\n  type: LoadBalancer\n</code></pre>\n<p>Cluster can now be started with:</p>\n<pre><code class="language-bash">kubectl apply -f deployment.yaml\n</code></pre>\n<p>followed with:</p>\n<pre><code class="language-bash">kubectl apply -f service.yaml\n</code></pre>\n<p>To display services execute:</p>\n<pre><code class="language-bash">kubectl get services\n</code></pre>\n<p>The following command is an interesting one to run now:</p>\n<pre><code class="language-bash">minikube service nginx-service\n</code></pre>\n<p>since it displays the url of the nginx-service and opens the latter\nservice in your default browser.</p>\n<p>To display namespaces execute:</p>\n<pre><code class="language-bash">kubectl get namespaces\n</code></pre>\n<p>To find out the namespace where pods have been created you can run this command:</p>\n<pre><code class="language-bash">kubectl get pods --all-namespaces\n</code></pre>\n<p>To stop one of the pods displayed whose name is for instance <code>hello-minikube-6ddfcc9757-h4ctx</code>\nexecute the following command:</p>\n<pre><code class="language-bash">kubectl delete -n default pod hello-minikube-6ddfcc9757-h4ctx\n</code></pre>\n<p>To display deployments currently running execute:</p>\n<pre><code class="language-bash">kubectl get deployments\n</code></pre>\n<p>To delete a service first display all of your services with:</p>\n<pre><code class="language-bash">kubectl get service -o wide\n</code></pre>\n<p>You can now pick the one you wish to delete from the displayed list\n--- for instance nginx-service --- and then delete it with:</p>\n<pre><code class="language-bash">kubectl delete service nginx-service\n</code></pre>\n<p>Delete deployment nginx-deployment with:</p>\n<pre><code class="language-bash">delete deployment nginx-deployment\n</code></pre>\n<h2>Minikube example</h2>\n<pre><code class="language-bash">kubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.4\n</code></pre>\n<pre><code class="language-bash">kubectl expose deployment hello-minikube --type=NodePort --port=8080\n</code></pre>\n<pre><code class="language-bash">minikube service hello-minikube\n</code></pre>\n<pre><code class="language-bash">kubectl delete deployment hello-minikube\n</code></pre>\n<pre><code class="language-bash">minikube stop\n</code></pre>\n<p>The minikube vm can optionally be completely reset with:</p>\n<pre><code class="language-bash">minikube delete\n</code></pre>\n<p>After this, Minikube will start from scratch the next time it is started.</p>\n<h2>Advanced topics</h2>\n<h4>Service discovery</h4>\n<pre><code class="language-zsh">kubectl run -i --tty busybox --image=busybox --restart=Never -- sh\n</code></pre>\n<pre><code class="language-sh">cat /etc/resolv.conf\n</code></pre>\n<pre><code class="language-zsh">kubectl exec database -i -t -- mysql -u root -p\n</code></pre>\n<h4>ConfigMap</h4>\n<pre><code class="language-sh">kubectl create configmap app-config --fromfile=app.properties\n</code></pre>\n<h4>Ingress Controller</h4>\n<h4>External DNS</h4>\n<h4>Volumes</h4>',
id:"/Users/nicolas/repos/github.com/nperon/workshop/src/pages/2021-11-25-kubernetes/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2021-11-25T10:17:00.823Z",path:"/kubernetes",title:"Kubernetes",excerpt:"",tags:["kubernetes","cloud","devops"]}}}}}});
//# sourceMappingURL=path---mongo-dbd6d250d58391f4e324.js.map