/*
 * A digital root is the recursive sum of all the digits in a number. 
 * Given n, take the sum of the digits of n. 
 * If that value has more than one digit, continue reducing in this way 
 * until a single-digit number is produced. 
 * This is only applicable to the natural numbers.
 * 
 * eg.
 * inp = 51; return 6
 * inp = 556; return 7
 */

function digital_root(input) {
    const sum = input.toString().split('').reduce((acc, curr) => +acc + +curr);

    return sum < 10 ? +sum : digital_root(sum);
}