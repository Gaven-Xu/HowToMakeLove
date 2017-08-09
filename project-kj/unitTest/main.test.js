(function() {
    describe('main.js test', function() {

        it('fun1 should return 1', function() {
            expect(gaven.karma.fun1()).toBe(1);
        });

        it('fun2 should return 1', function() {
            expect(gaven.karma.fun2()).toBe(2);
        });

        it('fun3(a): when a > 100 return false,else return true',function() {
            expect(gaven.karma.fun3(45)).toBe(true);
            expect(gaven.karma.fun3(145)).toBe(false);
        });

    })
})();
