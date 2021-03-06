
// Practice with unit testing.
// Practice with a unit testing framework for JavaScript.
// Leon Tabak
// 24 January 2016

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    // Jasmine gives us the describe() function as a means
    // of defining a suite of tests.
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        // A suite of tests contain specs.
        // A spec (specification) is a test.
        it('are defined', function() {
            // Jasmine gives us the expect() function as a
            // means of comparing an actual value with an
            // expected value.
            // Jasmine gives us matchers to make these
            // comparisions.
            // Here, toBeDefined() and toBe() are our
            // matcher functions.
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('each feed has a URL defined and URL is not empty', function() {
            allFeeds.forEach( function(oneFeed) {
                expect( oneFeed.url ).toBeDefined();
                expect( oneFeed.url ).not.toBe( null );
                expect( typeof oneFeed.url ).toBe( 'string' );
                expect( oneFeed.url.length ).toBeGreaterThan( 0 );
            });
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('each feed has a name defined and name is not empty', function() {
            allFeeds.forEach( function( oneFeed ) {
                expect( oneFeed.name ).toBeDefined();
                expect( oneFeed.name ).not.toBe( null );
                expect( typeof oneFeed.name ).toBe( 'string' );
                expect( oneFeed.name.length ).toBeGreaterThan( 0 );
            });
        });
    });

    describe('The menu', function() {
        /* This test ensures that the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('menu element is hidden by default', function() {
             expect($('body').hasClass('menu-hidden')).toBe( true );
         });

         /* This test ensures that the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('clicks on menu toggle display/hiding of menu', function() {
             $('.menu-icon-link').click();
             expect($('body').hasClass('menu-hidden')).toBe( false );
             $('.menu-icon-link').click();
             expect($('body').hasClass('menu-hidden')).toBe( true );
         });
    });

    describe('Initial Entries', function() {
        var feed0;

        beforeEach( function(done) {
            loadFeed(0, done);
        });

        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * The loadFeed() function is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         it('loadFeed delivers at least a single .entry element', function(done) {
             var numberOfEntries = $('.entry');
             expect(numberOfEntries.length).toBeGreaterThan(0);
             done();
         }); // loadFeed delivers at least a single .entry element

    }); // Initial Entries


    // This was the hard one to write.
    // I tried many variations and spent a lot of time
    // reading on the Udacity forum before I got a test
    // that passes.
    // I relied upon the comments of my last reviewer
    // when I wrote this version. I hope that I understood
    // the reviewer correctly!
    describe('New Feed Selection', function() {
        var feedA;

        beforeEach( function(done) {
            loadFeed(1, function() {
                feedA = $('.feed').text();
                done();
            });
        });


        /* This test ensures that when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * The loadFeed() function is asynchronous.
        */
        it('loadFeed changes content', function(done) {
            loadFeed(0, function() {
                expect($('.feed').text()).not.toEqual(feedA);
                done();
            });
        }); // loadFeed changes content
    }); // New Feed Selection

}());
