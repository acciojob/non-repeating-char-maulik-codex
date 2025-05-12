function firstNonRepeatedChar(str) {
    const charCount = {};

    // First pass: count occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Second pass: find the first character with count 1
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // No non-repeated character found
}
console.log(firstNonRepeatedChar('aabbcdd')); // 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // null
console.log(firstNonRepeatedChar('xxyz'));    // 'y'
console.log(firstNonRepeatedChar(''));        // null

