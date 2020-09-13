---
path: "/elk-searching"
date: "2020-08-29T22:47:32.235Z"
title: "Aggregations"
tags: ['Elastic Search', 'aggregations']
excerpt: ""
---

### Aggregations, buckets and metrics

Bucket by rating value:

```bash
curl -XGET '127.0.0.1:9200/ratings/_search?size=0&pretty' -d '
{
	"aggs": {
		"ratings": {
			"terms": {
				"field": "rating"
			}
		}
	}
}'
```

Count only 5-start ratings:

```bash
curl -XGET '127.0.0.1:9200/ratings/_search?size=0&pretty' -d '
{
    "query": {
        "match": {
            "rating": 5.0
        }
    },
	"aggs": {
		"ratings": {
			"terms": {
				"field": "rating"
			}
		}
	}
}'
```

Average rating for Star Wars:

```bash
curl -XGET '127.0.0.1:9200/ratings/_search?size=0&pretty' -d '
{
    "query": {
        "match_phrase": {
            "title": "Star Wars Episode IV"
        }
    },
	"aggs": {
		"avg_rating": {
			"avg": {
				"field": "rating"
			}
		}
	}
}'
```

### Histograms

Display ratings by 1.0-rating intervals

```bash
curl -XGET '127.0.0.1:9200/ratings/_search?size=0&pretty' -d '
{
	"aggs": {
		"whole_rating": {
			"histogram": {
				"field": "rating",
                "interval": 1.0
			}
		}
	}
}'
```
