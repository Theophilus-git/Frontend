// Regular Expressions

// A regular expression is a sequence of characters that defines a search pattern. It can be used for string matching, searching, and replacing text in strings. In JavaScript, regular expressions are represented by the RegExp object
//  var regex = /pattern/;

// modifers: g, i, m, s, u, y

regex = /hello/i; // case-insensitive search for "hello"
regex = /world/g; // global search for "world"
regex = /test/m; // multiline search for "test"
regex = /example/s; // dot matches newline characters
regex = /unicode/u; // unicode search for "unicode"
regex = /sticky/y; // sticky search for "sticky"

regex = /^hello/; // matches "hello" at the beginning of a string
regex = /world$/; // matches "world" at the end of a string

regex = /[a-z]/; // matches any lowercase letter
regex = /[A-Z]/; // matches any uppercase letter
regex = /[0-9]/; // matches any digit
regex = /[aeiou]/; // matches any vowel

regex = /[^aeiou]/; // matches any character that is not a vowel

regex = /\d/; // matches any digit (equivalent to [0-9])
regex = /\D/; // matches any non-digit character
regex = /\w/; // matches any word character (alphanumeric + underscore)
regex = /\W/; // matches any non-word character
regex = /\s/; // matches any whitespace character
regex = /\S/; // matches any non-whitespace character

regex = /hello|world/;

//  Operators and Control Structures

//  Operators
//  Arithmetic operators: +, -, *, /, %, ++, --
//  Assignment operators: =, +=, -=, *=, /=, %=
//  Comparison operators: ==, ===, !=, !==, >, <, >=, <=
//  Logical operators: &&, ||, !
//  Bitwise operators: &, |, ^, ~, <<, >>, >>>