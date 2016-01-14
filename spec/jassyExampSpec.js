describe("toEqual()", function(){
	it("can check equality of numbers", function(){
		expect(retsTheSame(2)).toEqual(2);
	});
	it("can check equality of strings", function(){
		expect(retsTheSame("DUDE")).toEqual("DUDE");
	});
	var obj = {type:"Fiat", model:"500", color:"white"};
	it("can check equality of objects", function(){
		expect(retsTheSame(obj)).toEqual(obj);
	})
	it("can check for type if used with jasmine.any()", function(){
		expect(random()).toEqual(jasmine.any(Number));
	})
});

describe("toBe()", function(){
	var obj1 = {type:"Fiat", model:"500", color:"white"};
	var obj2 = {type:"Fiat", model:"500", color:"white"};
	var obj3 = {type:"Fiat", model:"500", color:"black"};
	
	it("checks object equality", function(){
		expect(retsTheSame(obj1)).toBe(obj1);
	});
	
	it("will be angry if not same values", function(){
		expect(retsTheSame(obj1)).not.toBe(obj3); //notice the .not If left out, this case would fail.
	});

	it("but mostly is angry if not very same object", function(){
		expect(retsTheSame(obj1)).not.toBe(obj2); //notice that obj1 and obj2 have same values 
	});
});

describe("toBeTruthy()",function(){
	it("can check truthiness of true", function(){
		expect(retsTheSame(true)).toBeTruthy();
	});
	it("can check truthiness in a value like 12", function(){
		expect(retsTheSame(12)).toBeTruthy();
	});
	it("can check truthiness of objects", function(){
		expect(retsTheSame({})).toBeTruthy();
	});
});

describe("toBeFalsy()",function(){
	it("can check falsiness of true", function(){
		expect(retsTheSame(false)).toBeFalsy();
	});
	it("can check falsiness in a value like 0", function(){
		expect(retsTheSame(0)).toBeFalsy();
	});
	it("can check falsiness of null", function(){
		expect(retsTheSame(null)).toBeFalsy();
	});
	it("can check falsiness of NaN", function(){
		expect(retsTheSame(NaN)).toBeFalsy();
	});
});

describe("toContain()",function(){
	var numArray = [1, 2, 3, 4];
	var strArray = ["a", "b", "c", "d"];
	var dog = {name: "Buddy"};
	var sentance = "This is a sentance with a needle in it.";
	var dogArray = [{name: "Buddy"},{name: "Lucky"},{name: "Spot"}];

	it("can find a number in an array", function(){
		expect(retsTheSame(numArray)).toContain(3);
	});
	it("can find a string in an array", function(){
		expect(retsTheSame(strArray)).toContain("c");
	});
	it("can find a matching object in and array of objects", function(){
		expect(retsTheSame(dogArray)).toContain(dog);
	});
	it("can find a substring in another string", function(){
		expect(retsTheSame(sentance)).toContain("needle");
	});
});

describe("toBeDefined()",function(){
	var notDefined;
	it("will say NULL is defined", function(){
		expect(retsTheSame(null)).toBeDefined();
	});
	it("will say 'Hey there' is defined", function(){
		expect(retsTheSame("Hey there")).toBeDefined();
	});
	it("will detect undefined variables as undefined", function(){
		expect(retsTheSame(notDefined)).not.toBeDefined();
	});
});

describe("toBeUndefined()",function(){
	var notDefined;
	it("will say notDefined is undefined", function(){
		expect(retsTheSame(notDefined)).toBeUndefined();
	});
});

// toBeNull(), toBeNaN(), toBeGreaterThan(), toBeLessThan() work as you might expect them to

describe("toBeCloseTo()", function(){
	var zero = 12;
	var one = 12.1;
	var two = 12.12;
	it("can check if two numbers round to the same", function () {
		expect(retsTheSame(zero)).toBeCloseTo(12.412345, 0); //second param indicates level of precision
	});
	it("can check if numbers share their 1st decimal in common", function(){
		expect(retsTheSame(one)).toBeCloseTo(12.12345,1);
	});
	it("can check if numbers share their 1st 2 decimals in common", function(){
		expect(retsTheSame(two)).toBeCloseTo(12.12345,2);
	});
	it("can check if numbers are not close", function(){
		expect(retsTheSame(two)).not.toBeCloseTo(12.125,2);
	});
});

describe("toMatch()", function(){
	it("can match strings with regex", function(){
		expect(retsTheSame("positivelearning.pdf")).toMatch(/\w+.(jpg|gif|png|pdf)/i);
	});
});

describe("toThrow()", function(){
	it("can detect if a function throws an error", function()
	{
		expect(throwing).toThrow();
	});
});


// YOU CAN CREATE YOUR OWN CUSTOM MATCHER
// * You must add the matcher to each spec that you want to use it in...

var customMatchers = {
	toBeGoofy: function(util, customEqualityTesters) {
	  return {
	    compare: function(actual, expected) {
	      if (expected === undefined) {
	        expected = '';
	      }
	      var result = {};
	      result.pass = util.equals(actual.hyuk, "gawrsh" + expected, customEqualityTesters);
	      if (result.pass) {
	        result.message = "Expected " + actual + " not to be quite so goofy";
	      } else {
	        result.message = "Expected " + actual + " to be goofy, but it was not very goofy";
	      }
	      return result;
	    }
	  };
	}
};

describe("Custom matcher: 'toBeGoofy'", function() {

  beforeEach(function() {
    jasmine.addMatchers(customMatchers);
  });

  it("is available on an expectation", function() {
    expect({ hyuk: 'gawrsh' }).toBeGoofy();
  });

  it("can take an 'expected' parameter", function() {
    expect({ hyuk: 'gawrsh is fun'}).toBeGoofy(' is fun');
  });

  it("can be negated", function() {
    expect({ hyuk: 'this is fun' }).not.toBeGoofy();
  });
});

var myCustomMatcher = {
	toBeLarge: function() {
		return {
			compare: function(actual) {
				var result = {};
				result.pass = actual > 100;
				if(!result.pass){
					result.message = "Expected \"" + actual + "\" to be greater than 100.";
				}
				return result;
			}
		};
	}
};	

describe("show casing custom matchers and beforeEach()", function(){

	beforeEach(function() { 	
		jasmine.addMatchers(myCustomMatcher); 	
	}); 

	it("to test toBeLarge() with a small number", function(){
		expect(retsTheSame(42)).not.toBeLarge();
	});
	it("to test with 100", function(){
		expect(retsTheSame(100)).not.toBeLarge();
	});
	it ("to test a large number", function(){
		expect(retsTheSame(101)).toBeLarge();
	})
})


describe("Showing different organization for jasmine", function(){
	var num0 = 0;
	var num1 = 1;
	describe("You can nest describes", function(){
		describe("You can nest describes deeply", function(){
			beforeEach(function(){
				num0 = 0;
				num1 = 1;
			});
			it("And here you will see num0 is 0", function(){
				expect(num0).toEqual(0);
			})
			it("Now num0 == 6", function(){
				num0 = 5 + num1;
				expect(num0).toEqual(6);
			})
		});
		it("num0 == 6 persists. beforeEach stopped", function(){
			num0 = 5 + num1;
			expect(num0).toEqual(6);
		})
	});
	describe("You can nest more describes", function(){
	});
})
// SPIES ARE REALLY HANDY






