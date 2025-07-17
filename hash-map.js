import { LinkedList } from "./linked-list.js";

export class HashMap {
  constructor() {
    this.capacity = 8;
    this.loadLimitFactor = 0.75;

    // this.buckets = Array(this.capacity).fill(()=>new LinkedList());
    // this.buckets.forEach((_,i) => this.buckets[i] = new LinkedList());
    // this.buckets = Array(this.capacity).map(() => new LinkedList());
    this.buckets = [];
    for (let i = 0; i < this.capacity; i++) {
      this.buckets.push(new LinkedList());
    }
  }

  hash(key, modulo = this.capacity) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % modulo;
    }
    return hashCode;
  }

  occupancy() {
    return this.buckets.filter((b) => b.size() > 0).length;
  }

  loadFactor() {
    return (this.occupancy() / this.capacity);
  }

  checkLoad() {
    if (this.loadFactor() >= this.loadLimitFactor) {
      console.log("load factor threshold breached");
      console.log(
        `${this.occupancy} out of ${
          this.capacity
        } occupied with ${this.length()} elements`
      );
      this.growBuckets();
    }
  }

  growBuckets() {
    const newCapacity = 2 * this.capacity;
    const newBuckets = [];
    for (let i = 0; i < newCapacity; i++) {
      newBuckets.push(new LinkedList());
    }
    for (const entry of this.entries()) {
      const [key, value] = entry;
      const newHash = this.hash(key, newCapacity);
      const newBucket = newBuckets[newHash];
      newBucket.append(key, value);
    }
    this.buckets = newBuckets;
    this.capacity = newCapacity;

    return;
  }

  set(key, value) {
    const bucket = this.buckets[this.hash(key)];
    if (!bucket.overwriteValue(key, value)) {
      bucket.append(key, value);
      if (bucket.size() === 1) {
        this.checkLoad();
      }
    }
  }

  get(key) {
    const bucket = this.buckets[this.hash(key)];
    return bucket.getValue(key);
  }

  has(key) {
    const bucket = this.buckets[this.hash(key)];
    return bucket.hasKey(key);
  }

  remove(key) {
    const bucket = this.buckets[this.hash(key)];
    return bucket.removeKey(key);
  }

  length() {
    return this.buckets.reduce((acc, curr) => acc + curr.size(), 0);
  }

  clear() {
    this.buckets = [];
    for (let i = 0; i < this.capacity; i++) {
      this.buckets.push(new LinkedList());
    }
    this.numOccupiedBuckets = 0;
  }

  keys() {
    const k = [];
    for (const bucket of this.buckets) {
      bucket.toArray().forEach((o) => k.push(o.key));
    }
    return k;
  }

  values() {
    const v = [];
    for (const bucket of this.buckets) {
      bucket.toArray().forEach((o) => v.push(o.value));
    }
    return v;
  }

  entries() {
    const e = [];
    for (const bucket of this.buckets) {
      bucket.toArray().forEach((o) => e.push([o.key, o.value]));
    }
    return e;
  }

  show() {
    console.log("Current hashmap:");
    this.buckets.forEach((b, i) => console.log(i, b.toString()));
  }
}
