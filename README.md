---
title: Getir Challenge API v1.0.0
language_tabs:
  - node: Node
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="getir-challenge-api">Getir Challenge API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API is built for Getir's challenge. The only request which is a POST request is to retrieve records from the database with given filters.

<h1 id="getir-challenge-api-records">records</h1>

records API

## post__records

> Code samples

`POST /records`

*Find records matching given filters; startDate, endDate, minCount, maxCount*

> Body parameter

```json
{
  "startDate": "2007-10-10",
  "endDate": "2017-10-10",
  "minCount": 500,
  "maxCount": 1500
}
```

<h3 id="post__records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RecordsFilterByDataAndCountParams](#schemarecordsfilterbydataandcountparams)|true|Results will be records that later than "startDate" and earlier than "endDate", at the same time, totalCount should be bigger than minCount and smaller than maxCount|

> Example responses

> 200 Response

<h3 id="post__records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[RecordsFilterByDataAndCountResponse](#schemarecordsfilterbydataandcountresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Records Not Found!|[RecordsFilterByDataAndCountNotFoundError](#schemarecordsfilterbydataandcountnotfounderror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|DB Server Error!|[RecordsFilterByDataAndCountMongoError](#schemarecordsfilterbydataandcountmongoerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_RecordsFilterByDataAndCountParams">RecordsFilterByDataAndCountParams</h2>
<!-- backwards compatibility -->
<a id="schemarecordsfilterbydataandcountparams"></a>
<a id="schema_RecordsFilterByDataAndCountParams"></a>
<a id="tocSrecordsfilterbydataandcountparams"></a>
<a id="tocsrecordsfilterbydataandcountparams"></a>

```json
{
  "startDate": "2007-10-10",
  "endDate": "2017-10-10",
  "minCount": 500,
  "maxCount": 1500
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startDate|string(date)|false|none|none|
|endDate|string(date)|false|none|none|
|minCount|integer|false|none|none|
|maxCount|integer|false|none|none|

<h2 id="tocS_RecordsFilterByDataAndCountResponse">RecordsFilterByDataAndCountResponse</h2>
<!-- backwards compatibility -->
<a id="schemarecordsfilterbydataandcountresponse"></a>
<a id="schema_RecordsFilterByDataAndCountResponse"></a>
<a id="tocSrecordsfilterbydataandcountresponse"></a>
<a id="tocsrecordsfilterbydataandcountresponse"></a>

```json
{
  "code": 0,
  "msg": "Success",
  "records": [
    {
      "key": "string",
      "createdAt": "2019-08-24",
      "totalCount": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|msg|string|false|none|none|
|records|[object]|false|none|none|
|» key|string|false|none|none|
|» createdAt|string(date)|false|none|none|
|» totalCount|integer|false|none|none|

<h2 id="tocS_RecordsFilterByDataAndCountNotFoundError">RecordsFilterByDataAndCountNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemarecordsfilterbydataandcountnotfounderror"></a>
<a id="schema_RecordsFilterByDataAndCountNotFoundError"></a>
<a id="tocSrecordsfilterbydataandcountnotfounderror"></a>
<a id="tocsrecordsfilterbydataandcountnotfounderror"></a>

```json
{
  "code": 1,
  "msg": "Record Not Found!"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|msg|string|false|none|none|

<h2 id="tocS_RecordsFilterByDataAndCountMongoError">RecordsFilterByDataAndCountMongoError</h2>
<!-- backwards compatibility -->
<a id="schemarecordsfilterbydataandcountmongoerror"></a>
<a id="schema_RecordsFilterByDataAndCountMongoError"></a>
<a id="tocSrecordsfilterbydataandcountmongoerror"></a>
<a id="tocsrecordsfilterbydataandcountmongoerror"></a>

```json
{
  "code": 2,
  "msg": "Something wrong with MongoDB server!"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|msg|string|false|none|none|

