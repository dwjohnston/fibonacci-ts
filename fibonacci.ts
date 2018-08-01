//input    0  1  2  3  4  5  6 
//output   0  0  1  1  2  3  5 

/**
 * 
 * @param n The index for numbers in the fibonacci sequence `0, 1, 1, 2, 3, 5...` where `0` is at index 1. 
 * @returns The fibonacci value at index n. 
 */
export default function fibonacci (n: number) : number {


    if (n < 0 || !Number.isInteger(n)) {
        throw "Invalid index"; 
    } 

    if (n <= 1) return 0; 

    function recursiveFibonacci(n1 : number, n2: number, countsLeft: number) : number {
        if (countsLeft > 0 ) {
            return recursiveFibonacci(n2, n1+n2, --countsLeft); 
        }
        else return n2; 
    } 

    return recursiveFibonacci(0,1, n-2); //First two counts are 0, 1


}
