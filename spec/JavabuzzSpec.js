describe("Javabuzz", function() {

  var javabuzz;

    beforeEach(function() {
      javabuzz = new Javabuzz();
    });

  describe("knows when a number is", function() {

    it("divisible by 3", function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it("divisble by 5", function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });


    it("divisible by 15", function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe("knows when a number is not", function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it("divisible by 5", function() {
      expect(javabuzz.isDivisibleByFive(7)).toBe(false);
    });

    it("divisible by 15", function() {
      expect(javabuzz.isDivisibleByFifteen(30)).toBe(true);
    });

  });

  describe("when playing, says", function() {

    it ("Fizzes when a number is divisible by 3", function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });

    it ("Buzzes when a number is divisible by 5", function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it ("Javabuzzes when a number is divisible by 15", function() {
      expect(javabuzz.says(30)).toEqual("JavaBuzz");
    });

  });

});
