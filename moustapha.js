// codePointAt()
// The codePointAt() method returns a non-negative integer that is the Unicode code point value.
// Syntax
// str.codePointAt(index)
// Parameters
// index    An integer between 0 and the length of the string.
// Return value
// A Number representing the code point value of the character at the given index.
// Description
// This method returns undefined if the given index cannot be converted to a number.
// If the index is not a number, it is coerced to a number. If the index is a negative number, it is treated as if it were the length of the string plus the index. If the index is greater than or equal to the length of the string, codePointAt() returns undefined.
// Examples 
// Using codePointAt()
// The following example returns 97, the Unicode value for "a".
let str = 'a';
console.log(str.codePointAt(0)); // expected output: 97
