const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./index')

describe('capitalize', () => {

    test('capitalize the first letter', () => {
        expect(capitalize('washington')).toBe('Washington');
    })
    test('capitalize a single letter', () => {
        expect(capitalize('w')).toBe('W'); 
    })
    test('works with empty string', () => {
        expect(capitalize('')).toBe('');
    })
    test('does not modify already capitalized letter', () => {
        expect(capitalize('Washington')).toBe('Washington');
    })
});

describe('reverseString', () => {

    test('reverse a string', () => {
        expect(reverseString('washington')).toBe('notgnihsaw');
        })
    test('capitalize a single letter', () => {
        expect(reverseString('w')).toBe('w'); 
        })
    test('works with empty string', () => {
        expect(reverseString('')).toBe('');
        })
    test('reverse a string with punctuation', () => {
        expect(reverseString('Washington?')).toBe('?notgnihsaW');
        })
});

describe('calculator', () => {

    test('add numbers', () => {
        expect(calculator.add(1,1)).toBe(2);
        })
    test('subtract numbers', () => {
        expect(calculator.subtract(5,2)).toBe(3); 
        })
    test('divide numbers', () => {
        expect(calculator.divide(6,2)).toBe(3);
        })
    test('multiply numbers', () => {
        expect(calculator.multiply(5,6)).toBe(30);
        })
});

describe('caesarCipher', () => {

    test('shifts each character by the shift factor', () => {
        expect(caesarCipher('hello world', 3)).toBe('khoor zruog');
        })
    test('wraps from z to a', () => {
        expect(caesarCipher('z', 1)).toBe('a'); 
        })
    test('keeps the same case', () => {
        expect(caesarCipher('Hello world', 3)).toBe('Khoor zruog');
        })
    test('punctuations remain the same', () => {
        expect(caesarCipher('Hello world?', 3)).toBe('Khoor zruog?');
        })
});

describe('analyzeArray', () => {

    test('correct analysis of an array of numbers should be returned', () => {
        const input = [1, 8, 3, 4, 2, 6];
        const expectedResult = {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }; 
        const result = analyzeArray(input);
        expect(result).toEqual(expectedResult);
    });

    test('throw an error if array is empty', () => {
        expect(() => analyzeArray([])).toThrow('Array can not be empty');
    });

    test('throw error for non-array input', () => {
        expect(() => analyzeArray('not an array')).toThrow('Input must be a non-empty array');
        expect(() => analyzeArray(123)).toThrow('Input must be a non-empty array'); 
        expect(() => analyzeArray(null)).toThrow('Input must be a non-empty array'); 
        expect(() => analyzeArray(undefined)).toThrow('Input must be a non-empty array'); 
    });
});