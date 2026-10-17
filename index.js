import { get_encoding } from "tiktoken";

// token ID -> token
// e.g 904 -> "Hello"
const encoding = get_encoding("cl100k_base");
const tokens = encoding.encode("Hello World! This is a test string to demonstrate tokenization.");
console.log(tokens);