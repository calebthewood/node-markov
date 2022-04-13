/** Command-line tool to generate Markov text. */

const { MarkovMachine } = require("./markov");



describe("getChains", function () {
    test("should make the correct Map", function () {
        let text = new MarkovMachine("The cat is a cat. The cat is the hat. The cat is the cat. The cat is a cat.");
        let chains = text.getChains();
        const obj = {
            'The': ['cat', 'cat', 'cat', 'cat'],
            'cat': ['is', 'is', 'is', 'is'],
            'is': ['a', 'the', 'the', 'a'],
            'a': ['cat.', 'cat.'],
            'cat.': ['The', 'The', null],
            'the': ['hat.', 'cat.'],
            'hat.': ['The']
        }
        const map = new Map(Object.entries(obj));
        expect(chains).toEqual(map);
        });   
});  
