#LiveDocs Sample

This repository provides an example of how to use LiveDocs, LiveDocs Route loader and LiveDocs middleware.

You can see an example of the html file generated from this repository at: 

https://cdn.rawgit.com/simonmcmanus/livedocs-sample/master/docs/v0/index.html


##Background

When building or consuming APIs I often find myself putting together lots of small HTML forms that allow me to GET/PUT/POST data to my API in order to test it.
On  a recent project one of the requirements was to build an simple API interface in Node. There was already an API in place but the client wanted to make it easier for consumers by providing better error responses and documentation. I decided to create a test harness with inline documentation.

There are a number of tools which help to generate API documentation, the one that I found that was nearest to my needs was [Masherys IODocs](http://www.mashery.com/product/io-docs). I started playing with IODocs and making some small changes.


This worked but I started coming up against the constraints of IODocs and after seeing a pull request that had been ignored for 2 years I decided it would actually be easier to write my own.

LiveDocs was born.

LiveDocs consists of three main components, each component has its own README.md file which explains how to use the component. This repository will try to demonstrate/explain how to tie them all together.

The three components are:

#Components

## 1.. Test Harness Generator

https://github.com/simonmcmanus/livedocs

Given a Live Docs spec file, generate a standalone HTML file that documents the API and allows users to make requests to the API from their browser.

The command:

  livedocs ./specs/sample.json ./out

Will result in a html file.

You can read all about the spec format here:

https://github.com/simonmcmanus/livedocs

And here is an example of the markup it produces:

https://a5.adstream.com/api/v1



## 2.. LiveDocs Route Loader:

https://github.com/simonmcmanus/livedocs-routeLoader

The route loader can be used to generate the spec but also to load the routes into your Restify or Express server when your API starts up.


When using the route loader the URLs are modified slightly before being added to the livedocs spec. You should read the docs to understand how.



## 3.. LiveDocs Middleware:

https://github.com/simonmcmanus/livedocs-middleware

At the moment the middleware just takes care of validation.

So for example if in your spec you specify that a param should be a number in the body, the request will be rejected by the middleware unless the param is present and is a number.

The livedocs middleware is currently loaded onto every request by the route loader.


#Verb Mapping

In this example the /routes/food folder uses verb mapping, but the /routes/animals folder does not.




#Generate the Docs/spec

In this repository we generate the spec using the ./bin/generate-spec file.

```bash
  node ./bin/generate-spec
```
In this script you may also wish to set the server name, title and fill out any other fields.

Once the spec has been generated in can be turned into LiveDocs HTML file using the command:

```bash
livedocs ./livedocs-spec.json ./docs
```


