---
path: "/elk-useful-queries"
date: "2020-12-03T22:01:12.451Z"
title: "Useful Queries"
tags: ['Elastic Search', 'queries', 'environment variables', 'system']
excerpt: ""
---

### System parameters

Elasticsearch version and more basic parameters:

```bash
curl -XGET https://localhost:9200 -u admin:admin --insecure
```

Information on nodes:

```bash
curl -XGET https://localhost:9200/_cat/nodes?v -u admin:admin --insecure
```

Integrated plugins:

```bash
curl -XGET https://localhost:9200/_cat/plugins?v -u admin:admin --insecure
```

Information on authentication:

```bash
curl -XGET https://localhost:9200/_opendistro/_security/authinfo -u admin:admin --insecure
```

Information on cluster:
```http
http://localhost:9200/_cluster/settings?include_defaults=true
```

Indices:

```bash
curl -XGET https://localhost:9200/_cat/indices -u admin:admin --insecure
```

### Cloning an index from dev tools console:

```
POST _reindex
{
  "source": {
    "index": "portefeuille"
  },
  "dest": {
    "index": "portefeuille_test_1"
  }
}
```

### Creating a sample index from dev tools console:

```
DELETE /bankdata
```

```
PUT /bankdata
POST /bankdata/1
{ "age": 42, "balance": 12000 }
POST /bankdata/2
{ "age": 28, "balance": 7000 }
POST /bankdata/3
{ "age": 51, "balance": 2300 }
POST /bankdata/4
{ "age": 15, "balance": 450 }
POST /bankdata/5
{ "age": 33 }
POST /bankdata/6
{ "age": 32 }
POST /bankdata/7
{ "age": 27 }
POST /bankdata/8
{ "age": 79 }
POST /bankdata/9
{ "age": 43, balance: null }
```

```
GET /bankdata
```

```
GET /bankdata/_search
{
	"query": {
		"match_all": {}
	}
}
```

### Painless language scripts

```
(((ctx?._source["SURF_PARC"]?:0)?:0)/((ctx?._source["Bovin"]?:1)?:1)?:1)
```