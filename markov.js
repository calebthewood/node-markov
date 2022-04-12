"use strict";
const fsP = require("fs/promises");
const FILE_PATH = process.argv[2];

/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null]
   *  }
   *
   * */

  getChains() {
    // TODO: implement this!
    let chains = new Map();
    let length = this.words.length;
    const words = this.words;

    for (let i = 0; i < length; i++) {
      let word = words[i+1] || null;

      if (!chains.has(words[i])) {
        chains.set(words[i], [word])
      } else {
        chains.get(words[i]).push(word)
      }
    }
    return chains
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    let num = Math.floor(Math.random() * (this.chains.length + 1));

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null
  }
}
