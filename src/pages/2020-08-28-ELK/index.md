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


### Updating data

```bash
curl -XPUT 127.0.0.1:9200/movies/_doc/109487/?pretty -d '
{
	"genres": ["IMAX", "Sci-Fi"],
	"title": "interstellar foo",
	"year": 2014
}
'

```

```bash
curl -XGET 127.0.0.1:9200/movies/_doc/109487?pretty

```

```bash
curl -XPOST 127.0.0.1:9200/movies/_doc/109487/_update -d '
{
	"doc": {
		"title": "Interstellar"
	}
}
'

```

```bash
curl -XGET 127.0.0.1:9200/movies/_doc/109487?pretty

```

### Deleting documents

```bash
curl -XGET 127.0.0.1:9200/movies/_search?q=Dark

```

```bash
curl -XDELETE 127.0.0.1:9200/movies/_doc/58559?pretty

```

```bash
curl -XGET 127.0.0.1:9200/movies/_search?q=Dark

```

### Using analyzers and tokenizers for controlling full-text search

Sometimes text fields should be exact-match. In that case use keyword mapping instead of text.

Search on analyzed text fields will return anything remotely relevant. Depending on the analyzer, results will be case-insensitive, stemmed, stopwords removed, synonyms applied, etc. Searches with multiple terms need not match them all.

```bash
curl -XGET 127.0.0.1:9200/movies/_search?pretty -d '
{
	"query": {
		"match": {
			"title": "Star Trek"
		}
	}	
}
'
```

```bash
curl -XGET 127.0.0.1:9200/movies/_search?pretty -d '
{
	"query": {
		"match_phrase": {
			"genre": "sci"
		}
	}	
}
'
```

Blow away the entire index and redefine it. 

```bash
curl -XDELETE 127.0.0.1:9200/movies

```

```bash
curl -XPUT 127.0.0.1:9200/movies -d '
{
	"mappings": {
		"properties": {
			"id": {"type": "integer"},
			"year": {"type": "date"},
			"genre": {"type": "keyword"},
			"title": {"type": "text", "analyzer": "english"}
		}
	}
}'
```

```bash
curl -XGET 127.0.0.1:9200/movies/_mapping
```

```bash
curl -XGET 127.0.0.1:9200/movies/_search?pretty -d '
{
	"query": {
		"match_phrase": {
			"genre": "Sci-Fi"
		}
	}	
}
'
```

### Defining a mapping with a parent/child relationship in Elastic Search

```bash
curl -XPUT 127.0.0.1:9200/series -d '
{
	"mappings": {
		"properties": {
			"film_to_franchise": {
				"type": "join",
				"relations": {"franchise": "film"}
			}		
		}
	}
}'
```

```bash
curl -XPUT 127.0.0.1:9200/_bulk?pretty --data-binary @series.json
```

Here content in a file called series.json like the following is involved:

```json
{ "create" : { "_index" : "series", "_id" : "1", "routing" : 1} }
{ "id": "1", "film_to_franchise": {"name": "franchise"}, "title" : "Star Wars" }
{ "create" : { "_index" : "series", "_id" : "260", "routing" : 1} }
{ "id": "260", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode IV - A New Hope", "year":"1977" , "genre":["Action", "Adventure", "Sci-Fi"] }
{ "create" : { "_index" : "series", "_id" : "1196", "routing" : 1} }
{ "id": "1196", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode V - The Empire Strikes Back", "year":"1980" , "genre":["Action", "Adventure", "Sci-Fi"] }
{ "create" : { "_index" : "series", "_id" : "1210", "routing" : 1} }
{ "id": "1210", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode VI - Return of the Jedi", "year":"1983" , "genre":["Action", "Adventure", "Sci-Fi"] }
{ "create" : { "_index" : "series", "_id" : "2628", "routing" : 1} }
{ "id": "2628", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode I - The Phantom Menace", "year":"1999" , "genre":["Action", "Adventure", "Sci-Fi"] }
{ "create" : { "_index" : "series",  "_id" : "5378", "routing" : 1} }
{ "id": "5378", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode II - Attack of the Clones", "year":"2002" , "genre":["Action", "Adventure", "Sci-Fi", "IMAX"] }
{ "create" : { "_index" : "series", "_id" : "33493", "routing" : 1} }
{ "id": "33493", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode III - Revenge of the Sith", "year":"2005" , "genre":["Action", "Adventure", "Sci-Fi"] }
{ "create" : { "_index" : "series", "_id" : "122886", "routing" : 1} }
{ "id": "122886", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode VII - The Force Awakens", "year":"2015" , "genre":["Action", "Adventure", "Fantasy", "Sci-Fi", "IMAX"] }
```

The following query will search for all films in the Star Wars franchise:

```bash
curl -XGET 127.0.0.1:9200/series/_search?pretty -d '{
	"query": {
		"has_parent": {
			"parent_type": "franchise",
			"query": {
				"match": {
					"title": "Star Wars"
				}
			}
		}
	}
}'

```

Here now is how to get a parent given the child:

```bash
curl -XGET 127.0.0.1:9200/series/_search?pretty -d '{
	"query": {
		"has_child": {
			"type": "film",
			"query": {
				"match": {
					"title": "The Force Awakens"
				}
			}
		}
	}
}'

```

### Flattened Datatype


