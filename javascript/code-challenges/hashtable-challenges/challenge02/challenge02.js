// Write here the code challenge solution
class HashTable {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  set(key, value) {
    if (!this.storage[key]) {
      this.storage[key] = { value: value };
      this.size++;
    }
  }

  firstRepeatedWord(string) {
    if (!string.includes(' ')) return 'no repetition';
    let arr = string.split(' ');
    for (let i = 0; i < arr.length; i++) {
      if (this.storage[arr[i]]) {
        return arr[i];
      } else {
        this.set(arr[i], arr[i]);
      }
    }
    return 'no repetition';
  }
}

module.exports = { HashTable };