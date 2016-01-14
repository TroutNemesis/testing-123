describe("Hello world", function() {
	it("says hello", function(){
		expect(helloWorld()).toEqual("Hello world!");
	});

	it("adds", function(){
		expect(addition(1,1)).toEqual(2);
	});

	it("knows that sentance contains a needle", function(){
		expect(testContain()).toContain("needles");
	})
});
