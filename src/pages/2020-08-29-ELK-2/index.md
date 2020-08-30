---
path: "/elk"
date: "2020-08-29T22:47:32.235Z"
title: "Searching with Elasticsearch"
tags: ['Elastic Search', 'searching']
excerpt: ""
---

### Query Lite alias URI Search

```bash
curl -XGET "127.0.0.1:9200/movies/_search?q=title:star&pretty"
```

```bash
curl -XGET "127.0.0.1:9200/movies/_search?q=+year>2010+title:trek&pretty"
```

### JSON Search

Some types of filters

Term: filter by exact values
{"term": {"year": 2014}}

Terms: match if any exact values in a list match
{"terms": {"genre": ["Sci-Fi", "Adventure"] } }

Range: find numbers or dates in a given range (gt, gte, lt, lte)
{"range": {"year": {"gte": 2010}}}

Exists: find documents where a field exists
{"exists": {"field": "tags"}}

Missing: find documents where a field is missing
{"missing": {"field": "tags"}}

Bool: combine filters with boolean logic (must, must_not, should)

Some types of Queries

Match_all: returns all documents and is the default. Normally used with a filter.
{"match_all": {}}

Match: searches analyzed results, such as full text search. 
{"match": {"title": "star"}}

Multi-match: run the same query on multiple fields.
{"multi-match": {"query":"star", "fields": ["title", "synopsis"]}}

Bool: works like a bool filter, but results are scored by relevance.

Syntax: 
Queries are wrapped in a "query": { } block.
Filters are wrapped in a "filter": { } block.

You can combine filters inside queries, or queries inside filters too:

```bash
curl -XGET 127.0.0.1:9200/movies/_search?pretty -d'
{
	"query": {
		"bool": {
			"must": {"term": {"title": "trek"}},
			"filter": {"range": {"year": {"gte": 2010}}}
		}
	}
}'
```

Example of a match query: 
```bash
curl -XGET 127.0.0.1:9200/movies/_search?pretty -d'
{
	"query": {
		"match": {
			"title": "star"
		}
	}
}'
```

Example of a bool query: 
```bash
curl -XGET 127.0.0.1:9200/movies/_search?pretty -d'
{
	"query": {
		"bool": {
			"must": {"term": {"title": "trek"}},
			"filter": {"range": {"year": {"gte": 2010}}}
		}
	}
}'
```

Another example:
```bash
curl -XGET 127.0.0.1:9200/movies/_search?pretty -d'
{
	"query": {
		"bool": {
			"must": {"match_phrase": {"title": "Star Wars"}},
			"filter": {"range": {"year": {"gte": 1980}}}
		}
	}
}'
```

### Phrase matching

Must find all terms, in the right order: 
```bash
curl -XGET 127.0.0.1:9200/movies/_search?pretty -d '
{
	"query": {
		"match_phrase": {
			"title": "star wars"
		}
	}
}'
```

Assume order matters, but you're OK with some words being in between the terms. In that case use slop:
```bash
curl -XGET 127.0.0.1:9200/movies/_search?pretty -d '
{
	"query": {
		"match_phrase": {
			"title": {"query": "star beyond", "slop": 1}
		}
	}
}'
```
The slop represents how far you're willing to let a term move to satisfy a phrase (in either direction!).

### Pagination

```bash
curl -XGET 127.0.0.1:9200/movies/_search?pretty -d '
{
	"from": 2,
	"size": 2,
	"query": {"match": {"genre": "Sci-Fi"}}
}'
```

### Sorting


### More with filters

```bash
curl -XGET 127.0.0.1:9200/movies/_search?pretty -d '
{
	"query": {
		"bool": {
			"must": {"match": {"genre": "Sci-Fi"}},
			"must_not": {"match": {"title": "trek"}},
			"filter": {"range": {"year": {"gte": 2010, "lt": 2015}}}
		}
	}
}'
```

### Fuzzy queries

```bash
curl -XGET 127.0.0.1:9200/movies/_search?pretty -d '
{
	"query": {
		"fuzzy": {
			"title": {"value": "intersteller", "fuzziness": 1}
		}
	}
}'
```

### Partial matching

```bash
curl -XGET 127.0.0.1:9200/movies/_search?pretty -d '
{
	"query": {
		"prefix": {
			"year": "201"
		}
	}
}'
```

```bash
curl -XGET 127.0.0.1:9200/movies/_search?pretty -d '
{
	"query": {
		"wildcard": {
			"year": "1*"
		}
	}
}'
```

```bash
curl -XDELETE 127.0.0.1:9200/movies

curl -XPUT 127.0.0.1:9200/movies -d '
{
	"mappings": {
		"properties": {
			"year": {
				"type": "text"
			}
		}
	}
}'

curl -XPUT 127.0.0.1:9200/_bulk --data-binary @movies.json
```

