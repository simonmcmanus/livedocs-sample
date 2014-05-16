#LiveDocs Sample

This repository provides an example of how to use LiveDocs, LiveDocs Route loader and LiveDocs middleware together.



##Background

When building or consuming APIs I often find myself putting together lots of small HTML forms that allow me to GET/PUT/POST data to my api in order to test it.
On  a recent project one of the requirements was to build an simple API interface in Node. There was already an API in place but the client wanted to make it easier to use by providing better error responses and better documentation. I decided a test harness with inline documentation was a good idea.

There are a number of tools which help to generate API documentation, the one that I found that was nearest to my needs was  Masherys IODocs. I started off playing with mashery and making some small changes.

I managed to write a small wrapper which allowed me to write all my IODocs inline with my code, I could then run a script that would generate the IODocs spec so that I could keep my doc spec up to date with my code.

This worked but I started coming up against the constraints of IODocs and after seeing a pull request that had been ignored for 2 years I decided it would actually be easier to write my own.

LiveDocs was born.

LiveDocs consists of three main components, each component has it’s own read me.md file which should explain how to use the component, this repository will try to explain how to tie them all together.


The three components are:


#Components

## 1.. Test Harness Generator

https://github.com/simonmcmanus/livedocs

Given a Live Docs spec file, generate a standalone html file that documents the API and allows users to make requests to it from their browser.

A simple command like:

  livedocs ./specs/sample.json ./out
Will result in a html file.

You can read all about the spec format here:

https://github.com/simonmcmanus/livedocs

And here is an example of the markup it produces:

https://a5.adstream.com/api/v1



## 2.. LiveDocs Route Loader:

https://github.com/simonmcmanus/livedocs-routeLoader

The route loader can be used to both automatically generate the spec, and load your routes into your Restify or Express server when your API starts up.  Using the same code for both will reduce errors.


When using the route loader the URLs are modified slightly before being added to the livedocs spec. You should read these docs:




## 3.. LiveDocs Middleware:

https://github.com/simonmcmanus/livedocs-middleware

At the moment the middleware just takes care of validation.


 Unfortunately IODocs still didn’t do quite what I wanted - This readme outlines the problems with IODocs from my point of view:




