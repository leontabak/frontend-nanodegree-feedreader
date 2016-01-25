
Project 6
=========
Feed Reader Tester
==================
Leon Tabak
----------
22 January 2016
---------------

# How to run the tests

## To use the application:

The application provides a reader easy access to
articles about computing technologies and education.

Open index.html (in the top level folder of this project)
in a browser window. 

Click on the "hamburger" menu icon (a stack of 3 short 
horizontal lines) in the upper-left corner of the window.
A menu will slide into the window from the left.

Select one of the themes. Click on the selected theme. Then
click again on the hamburger icon to make the menu of themes
disappear again.

Click on one the title of one of the articles that the
application displays immediately below "Udacity Blog."

## To test the application:

Tests are built into the application. The tests will be
run every time the application is opened.

Open index.html (in the top level folder of this project)
in a browser window. Scroll to the bottom of the window.
Look for the Jasmine name and logo. Look for a statement
that "7 specs, 0 failures" followed by brief descriptions
of the specifications.

# Project Overview

In this project I was given a web-based application that reads RSS feeds.
The original developer of this application clearly saw the value in testing,
they've already included [Jasmine](http://jasmine.github.io/) and even started
writing their first test suite! Unfortunately, they decided to move on to start
their own company and we're now left with an application with an incomplete test
suite. That's where I came in.


## Why this Project?

Testing is an important part of the development process and many organizations 
practice a standard of development known as "test-driven development".
This is when developers write tests first, before they ever start developing
their application. All the tests initially fail and then they start writing
application code to make these tests pass.

Whether you work in an organization that uses test-driven development or
in an organization that uses tests to make sure future feature development
doesn't break existing features, it's an important skill to have!


## What will I learn?

I will learned how to use Jasmine to write a number of tests against a 
pre-existing application.
These will test the underlying business logic of the application as well
as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an
application including the HTML, CSS and JavaScript - an extremely important
skill when changing teams or joining a new company.
* Good tests give me and other students the ability to quickly analyze whether new code breaks
an existing feature within our codebases, without having to manually test
all of the functionality.


# How did I complete this project?

1. I downloaded the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. I reviewed the functionality of the application within your browser.
3. I explored the application's HTML (*./index.html*), CSS (*./css/style.css*) and
JavaScript (*./js/app.js*) to gain an understanding of how it works.
4. I explored the Jasmine spec file in *./jasmine/spec/feedreader.js*
5. I edited the allFeeds variable in *./js/app.js* to make the provided test fail
and see how Jasmine visualizes this failure in your application.
6. I returned the allFeeds variable to a passing state.
7. I wrote a test that loops through each feed in the allFeeds object and ensures
it has a URL defined and that the URL is not empty.
8. I wrote a test that loops through each feed in the allFeeds object and ensures
it has a name defined and that the name is not empty.
9. I wrote a new test suite named "The menu".
10. I wrote a test that ensures the menu element is hidden by default.
I had to analyze the HTML and the CSS to determine how the code
hides/shows of the menu element.
11. I wrote a test that ensures the menu changes visibility when the menu
icon is clicked. 
This test has two expectations: does the menu display when clicked
and does it hide when clicked again.
12. I wrote a test that ensures when the loadFeed function is called
and completes its work, there is at least a single .entry element within
the .feed container. The big challenge here follows from that
loadFeed() is asynchronous so this test
required the use of Jasmine's beforeEach and asynchronous done() function.
13. I wrote a test that ensures that when a new feed is loaded by the loadFeed function
that the content actually changes. The big challenge here follows from the fact
that loadFeed() is asynchronous.
14. It is complete - all of my tests pass.
