describe("Disemvoweler", function(){
	it("should remove all lowercase vowels", function(){
		expect(disemvoweler("hello world")).toEqual("hll wrld");
	});
	it("should remove all uppercase vowels", function(){
		expect(disemvoweler("Artistic Eagle")).toEqual("rtstc gl");
	});
	it("should handle empty strings", function(){
		expect(disemvoweler("")).toEqual("");
	});
	it("shouldn't change things with no vowels", function(){
		expect(disemvoweler("Mhmm")).toEqual("Mhmm");
	});
});