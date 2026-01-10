/**
 * Converts any delimited string into camelCase format.
 * 
 * Handles multiple delimiter types (spaces, underscores, hyphens) and consecutive delimiters.
 * Normalizes SCREAMING_SNAKE_CASE and strips leading/trailing delimiters.
 * 
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The camelCase version of the input string
 * @throws {TypeError} If input is not a string
 * 
 * @example
 * toCamelCase('hello-world') // Returns 'helloWorld'
 * toCamelCase('__MASTER_RECORDS_list') // Returns 'masterRecordsList'
 * toCamelCase(' ') // Returns ''
 * toCamelCase('data---value') // Returns 'dataValue'
 */

/**
 * Converts any delimited string into dot.case format.
 * 
 * Handles multiple delimiter types (spaces, underscores, hyphens) and consecutive delimiters.
 * Normalizes SCREAMING_SNAKE_CASE and strips leading/trailing delimiters.
 * 
 * @param {string} input - The string to convert to dot.case
 * @returns {string} The dot.case version of the input string
 * @throws {TypeError} If input is not a string
 * 
 * @example
 * toDotCase('hello-world') // Returns 'hello.world'
 * toDotCase('__MASTER_RECORDS_list') // Returns 'master.records.list'
 * toDotCase(' ') // Returns ''
 * toDotCase('data---value') // Returns 'data.value'
 */
