import fibonacci from "../index";

//input    0  1  2  3  4  5  6 
//output   0  0  1  1  2  3  5 
describe("Cases before 1: ", () => {

    //Just to be aware of that the numbers 1, 1... don't start till index =2

    it("fibonacci(-1) returns 0 ", () => {
        expect(fibonacci(-1)).toBe(0);
    });

    it("fibonacci(0) returns 0 ", () => {
        expect(fibonacci(0)).toBe(0);
    });

    it("fibonacci(1) returns 0 ", () => {
        expect(fibonacci(1)).toBe(0);
    });
})



describe("Valid input cases: ", () => {

    it("fibonacci(2) returns  1 ", () => {
        expect(fibonacci(2)).toBe(1);
    });

    it("fibonacci(3) returns  1 ", () => {
        expect(fibonacci(3)).toBe(1);
    });

    it("fibonacci(4) returns  2 ", () => {
        expect(fibonacci(4)).toBe(2);
    });

    it("fibonacci(5) returns  3 ", () => {
        expect(fibonacci(5)).toBe(3);
    });

    it("fibonacci(6) returns  5 ", () => {
        expect(fibonacci(6)).toBe(5);
    });
});