---
path: "/elk"
date: "2020-08-28T00:39:17.235Z"
title: "Mapping and Indexing Data into Elastic Search"
tags: ['Elastic Search', 'Logstash', 'mapping', 'indexing']
excerpt: ""
---

### Starting 

```bash
curl -XGET 127.0.0.1:9200/_cat/indices
```

```bash
curl -XDELETE 127.0.0.1:9200/movies
```

### Create an index called movies with a mapping

```bash
curl -XPUT 127.0.0.1:9200/movies -d '
{
	"mappings": {
		"properties": {
			"year": {
				"type": "date"
			}
		}
	}
}'
```

### Import a document into our movies index

```bash
curl -XGET 127.0.0.1:9200/movies/_mapping
```

### Post a new document into our movies index

```bash
curl -XPOST 127.0.0.1:9200/movies/_doc/109487 -d '
{
	"genre" : ["IMAX", "Sci-Fi"],
	"title": "Interstellar",
	"year": 2014
}'
```
### Perform search

```bash
curl -XGET 127.0.0.1:9200/movies/_search?pretty
```

### Insert a bunch of movies

```bash
curl -XPUT 127.0.0.1:9200/_bulk -d '
{ "create" : { "_index" : "movies", "_id" : "135569" } }
{ "id": "135569", "title" : "Star Trek Beyond", "year":2016 , "genre":["Action", "Adventure", "Sci-Fi"] }
{ "create" : { "_index" : "movies", "_id" : "122886" } }
{ "id": "122886", "title" : "Star Wars: Episode VII - The Force Awakens", "year":2015 , "genre":["Action", "Adventure", "Fantasy", "Sci-Fi", "IMAX"] }
{ "create" : { "_index" : "movies", "_id" : "109487" } }
{ "id": "109487", "title" : "Interstellar", "year":2014 , "genre":["Sci-Fi", "IMAX"] }
{ "create" : { "_index" : "movies", "_id" : "58559" } }
{ "id": "58559", "title" : "Dark Knight, The", "year":2008 , "genre":["Action", "Crime", "Drama", "IMAX"] }
{ "create" : { "_index" : "movies", "_id" : "1924" } }
{ "id": "1924", "title" : "Plan 9 from Outer Space", "year":1959 , "genre":["Horror", "Sci-Fi"] }
'

```


