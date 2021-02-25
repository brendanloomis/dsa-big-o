// counting sheep O(n)
function countSheep(num) {
    for (let i = 0; i <= num; i++) {
        if (i === num) {
            console.log('All sheep jumped over the fence');
        } else {
            console.log(`${num - i}: Another sheep jumps over the fence`);
        }
    }
}

countSheep(3);

// power calculator O(n)
function powerCalculator(base, exponent) {
    let result = base;
    if (exponent < 0) {
        return 'exponent should be >= 0'
    } else if (exponent === 0) {
        return 1;
    } else if (exponent === 1) {
        return base;
    } else {
        for (let i = 1; i < exponent; i++) {
            result *= base;
        }
    }
    return result;
}

console.log(powerCalculator(10, 3));

// reverse string O(n)
function reverseString(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

console.log(reverseString('hello'));

// nth triangle number O(n)
function nthTriangleNum(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}

console.log(nthTriangleNum(4));
