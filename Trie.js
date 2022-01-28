const TrieNode = require('./TrieNode');

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let currentNode = this.root;

        [...word].map(_char => {
            if (!currentNode.children[_char]) {
                currentNode.children = {
                    ...currentNode.children,
                    ...{ [_char]: new TrieNode(_char) }
                }
            }
            currentNode = currentNode.children[_char];
        });

        currentNode.isWord = true;
    }

    contains(word) {
        let currentNode = this.root;
        let concatKeys = '';
        let results = false;

        [...word].map(_char => {
            Object.keys(currentNode.children).map(_key => {
                if (_char === _key) {
                    concatKeys += _char;
                    currentNode = currentNode.children[_char];
                }
                if (word === concatKeys && currentNode.isWord) {
                    results = true;
                }
            })
        });

        return results;
    }
}

module.exports = Trie;