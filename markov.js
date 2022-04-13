"use strict";
// const fsP = require("fs/promises");
// const FILE_PATH = process.argv[2];

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
   *  this.chain.0 = ["cat"]
   *  {
   *  0 "The": ["cat"],
   *  1 "cat": ["in"],
   *  2 "in": ["the"],
   *  3 "the": ["hat."],
   *  4 "hat.": [null]
   *  }
   *
   * */

  getChains() {
    // TODO: implement this!
    let chains = new Map();
    let length = this.words.length;
    const words = this.words;

    for (let i = 0; i < length; i++) {
      let nextWord = words[i + 1] || null;
      if (!chains.has(words[i])) {
        chains.set(words[i], [nextWord])
      } else {
        chains.get(words[i]).push(nextWord)
      }
    }
    return chains
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    let randomText = this.words[0]
    let randomWord;
    while (randomWord !== null) {
      let keys = Array.from(this.chains.keys()); //[this, cat, in, the , hat]
      let randomKey = Math.floor(Math.random() * (keys.length));
      //3 get(3)
      let words = this.chains.get(keys[randomKey]) //this.chains.get("randomWord") valuesArray = [words, words]
      randomWord = words[Math.floor(Math.random() * words.length)];
      randomText += ` ${keys[randomKey]} ${randomWord || ""}`;
    }
    return randomText.substring(0, randomText.length - 1) + "."
  }

}

module.exports = { MarkovMachine }

