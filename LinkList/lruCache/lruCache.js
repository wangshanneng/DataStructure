
class LRUCache {
  constructor(capacity) {
    // 1. 确定最大缓冲量
    this.capacity = capacity;
    // 2. Map模拟链表实现缓存
    this.cache = new Map();
  }

  get(key) {
    if (this.cache.has(key)) {
      // 如果缓存中存在键值对，则将其删除并添加 表示最近使用
      let value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);

      return value
    }

    return -1
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // 如果缓存中已存在键值对，则删除旧的键值对
      this.cache.delete(key);
    }else if (this.cache.size >= this.capacity) {
      // 如果缓存已满，则删除最久未使用的键值对（最前面的）
      this.cache.delete(this.cache.keys().next().value);
    }

    // 将新的键值对添加到缓存中
    this.cache.set(key, value);
  }
}

// 案例：
const lruCache = new LRUCache(2); // 创建容量为2的LRU缓存

lruCache.put(1, 1);
lruCache.put(2, 2);

console.log(lruCache.get(1)); // 输出 1

lruCache.put(3, 3); // 缓存已满，移除最久未使用的键值对 2
console.log(lruCache.get(2)); // 输出 -1，因为键值对 2 已被移除

lruCache.put(4, 4); // 缓存已满，移除最久未使用的键值对 1
console.log(lruCache.get(1)); // 输出 -1，因为键值对 1 已被移除
console.log(lruCache.get(3)); // 输出 3
console.log(lruCache.get(4)); // 输出 4