/**
 * Converts a given string into kebab-case.
 * @param {string} str - The string to convert.
 * @returns {string} - The kebab-case version of the input string.
 * @throws {TypeError} - If the input is not a string.
 */
function toKebabCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Replace underscores and spaces with hyphens, and handle CamelCase
    const kebab = str
        .replace(/[_\s]+/g, '-') // Replace underscores and spaces with hyphens
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Handle CamelCase
        .toLowerCase() // Convert to lowercase
        .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
        .trim(); // Trim leading and trailing hyphens

    return kebab;
}

// Example usage
console.log(toKebabCase('Hello World')); // Output: hello-world
console.log(toKebabCase('user_score Update')); // Output: user-score-update
console.log(toKebabCase('Internal-Data')); // Output: internal-data