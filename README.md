Introducing This README
====================
This is not a comprehensive guide.  Existing Jasmine documentation is rarely comprehensive.   This document’s goal is to be a complete source of Jasmine capabilities and how to do the basics quickly. If you’re looking for more specific instruction, there are resources at the end of this file. 

1. Jasmine Basic Setup
------------------
Download the zip and unpack it.  In the Jasmine folder there are src and spec folders.  Your code to test goes in the src while your Jasmine tests go in the spec folder.  There is a SpecRunner.html in the Jasmine folder.  New spec.js and src.js files need to be included in this html.  Now, run the SpecRunner.html in a browser and you’re testing code with Jasmine.

2. Describe Suites and Spec It
------------------
Jasmine tests are organized into suites and specs.  Suites are meant to contain a collection of tests.  Specs are those grouped tests.  In the code, “suites” are “describes” and “specs” are “its”. An example of a Jasmine test looks like this:
```
describe(“English describing the suite”, function(){
    it(“English describing the spec”, function(){
        expect(5).toEqual(5);
    };
});
```

3. Descriptions
------------------
In the example above, my english descriptions of the suite and spec are not showing off Jasmine’s awesomeness like they should.  Jasmine code is supposed to read like English like this:
```
describe(“The function awesomeCalculator()”, function(){
    it(“can tell that 42 is awesome”, function(){
        expect(awesomeCalculator(42)).toBeTruthy();
    };
});
```

4. Expectations
------------------
The function `expect()` takes a parameter which will become the “actual” value.  Later this will be compared to an “expected” value.  

5. Matchers
------------------
* `toEqual()` -- checks for equality, not if they are the same object
* `toBe()` -- checks if two objects are the same
* `toBeTruthy()` -- checks for truthiness
* `toBeFalsy()` -- checks for falsiness
* `toContain()` -- checks if something is inside another thing (e.g. a substring in a string or object in an array)
* `toBeDefined()` -- checks if a value is defined
* `toBeUndefined()` -- checks if not defined
* `toBeNull()` -- checks if is null
* `toBeNaN()` -- check if NaN
* `toBeCloseTo()` -- checks if value is within certain range
* `toBeGreaterThan()` and `toBeLessThan()` -- compares numbers and strings sizes 
* `toMatch()` -- checks if value follows a regular expression pattern
* `toThrow()` -- checks if function throws an error
* `.not()` -- inverts meaning of matcher and are chained in the middle. (e.g. `expect(3).not.toEqual(42);`)

6. Before and After Each
------------------
In a suite, you might want to reset variables before or after each spec.  Instead of duplicating code, use a `beforeEach()` or an `afterEach()`.

7. Custom Matchers
------------------
Happily you can create your own matcher if the above presets aren’t enough.   Inbetween specs, Jasmine tears down custom matchers.  Because of this, custom matchers nicely combine with `beforeEach()`. Inside your `beforeEach()`, you will need to type `jasmine.addMatchers();`. Inside the parenthesis, pass your custom matcher.  

Each custom matcher will have either a `compare` or a `negativeCompare` function.  These functions take one to two arguments. The first is the value passed to your `expect()` function in the spec.  This is your “actual” value, while the second parameter is the “expected.”  The second parameter is optional depending on your matcher logic.  In either case, `compare` or `negativeCompare` must return an object with at least a `.pass` property.  If you want to write your own failed spec error message, a `.message` property can also be added.  Your `.pass` property should hold the finished boolean result of your custom matcher logic. Once your `.pass` property is either true or false you can return. 

8. Spies
------------------

9. Cool Jasmine Odds and Ends
------------------
Sometimes you want to write a test that checks the data type not just specific values.  Using `jasmine.any()` is useful in this case.  Pass the words `Number`, `String`, `Object`, or `yourOwnObject` into `jasmine.any()` and your test will compare the “actual” type with the type you specify.  

Asynchronous tests in Jasmine are pretty easy.  Just add `done();` to the end of you function.  The `done()` function tells Jasmine that this function shouldn’t finish until a default five seconds.  When the time runs out the function times out.  The default timeout can be edited with `jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;`.  (e.g. Each thousand equals one second.  8000 = 8 seconds) 

10. Debugging Jasmine
------------------
* Jasmine responds to code errors with nothingness.  She will report that “no specs found” and not much else. 
* Also Jasmine reports “no specs found” if the spec.js files aren’t being included correctly. Go figure...
* If you notice that most of your specs are not working, check to make sure the src files are included correctly.

11. Other Resources
------------------
**Reads**
* https://github.com/jasmine
* http://jasmine.github.io/2.0/introduction.html
* JavaScript Testing with Jasmine by Evan Hahn.
* The example files included with this README file.

**Videos**
* JavaScript Testing with Jasmine by Java Tutorials https://www.youtube.com/watch?v=MEQqgy_UaTw&list=PLLIDEoLBMMnuSyCmiGUiSwbERkVlCTmhX 