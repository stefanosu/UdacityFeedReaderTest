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
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* A test to check if URL is defined and not empty 
        by looping through the allFeeds object.*/
        it('url defined', function(){
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });    
         /* A test to check that each name in the allFeeds 
         object is defined and that the name is not empty.*/
         it('name defined', function(){
            for (let feed of allFeeds) {
                expect(feed.name).toBe(0);
                expect(feed.name.length).not.toBeDefined(0);                
            }
         });
        
    });


    /* New test suite named "The menu" */
        describe('The menu', function(){

        
        /* Wrote a test to check that the menu element is hidden by default.*/
         it('is hidden', function(){
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
         });
         
         /*Wrote a test to check that the menu changes visibility when the menu icon is clicked. 
         And does the menu display when clicked and does it hide when clicked again. */
          it('if it toggles on and off', function(){
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);

            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);


          });
     
   });       
        /*Wrote a new test suite named "Initial Entries" */
        describe('Initial Entries', function(){

        /* A test to check when the loadFeed function is called and completes its work,
        using an asynchronous function.*/

        beforeEach(function(done){
          loadFeed(0, done);      
        }); 

        it('completes work', function(){
            const feed = document.querySelector('.feed .entry');
            expect(feed.children.length).toBeGreaterThan(0);    
                });

     });
    /*  Wrote a new test suite named "New Feed Selection" */
        describe('New Feed Selection', function(){
            var testfeed; 
        // when a new feed is loaded by the loadFeed function that the content actually changes

            beforeEach(function(done) {
                loadFeed(0, function() {
                    testfeed = $('.feed').html();
                    loadFeed(1, done);
                });
            });

            // Check the newsfeed  html to be not same as previous.
            it('has been loaded', function(){
                expect($('.feed').html()).not.toEqual(testfeed);
            });
        });
}());

    //Used Mathew Cranford Feed Reader Walkthrough for resource
