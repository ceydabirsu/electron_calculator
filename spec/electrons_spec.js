describe('Electrons', function () {
	beforeEach(function() {
		calculator = new ElectronsCalculator();
	});

    it('returns 6 for [1, 2, 3, 4, 5]', function () {
        expect(calculator.aroundTheCores([1, 2, 3, 4, 5])).toBe(6); // 1+2+3 = 6
    });

    it('returns 10 for [2, 2, 3, 3]', function () {
        expect(calculator.aroundTheCores([2, 2, 3, 3])).toBe(4); // 2+2+3+3
    });

    it('returns 20 for [6, 6, 4, 4, 1, 3]', function () {
        expect(calculator.aroundTheCores([6, 6, 4, 4, 1, 3])).toBe(2); // 6+6+4+4
    });

    it('returns 16 for [3, 5, 3, 5, 4, 2]', function () {
        expect(calculator.aroundTheCores([3, 5, 3, 5, 4, 2])).toBe(12); // 3+3+5+5 = 16
    });
});
