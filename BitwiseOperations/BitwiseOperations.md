# 位运算

> 位运算是计算机中一种基于二进制位的运算方式，常见的位运算符包括 <<、>>、&、| 和 ^。
> << >> & | 位运算，二进制位置上的运算
> << 左移一位 乘以 2
> \>> 右移一位 除以 2
> `&` 两个同时是 1 的时候，结果是 1 否则是 0
> `|` 两个同时是 0 的时候，结果是 0 否则是 1
> `^` 按位异或，对应位不同则结果为 1，相同则结果为 0。

### 按位或运算符 `|`

- **含义：** 对两个二进制数的每一位执行或运算。
- **规则：** 如果两个对应的比特位中至少有一个为 1，结果就为 1；如果两个都是 0，结果就为 0。

#### 示例

```js
假设有两个 8 位二进制数 A 和 B：

A: 11011011
B: 10101101
A|B: 11111111
```

在这个例子中，只要 A 或 B 中的对应位有一个为 1，A|B 的结果就为 1。

### 按位与运算符 `&`

- **含义：** 对两个二进制数的每一位执行与运算。
- **规则：** 只有在两个对应的比特位都为 1 时，结果才为 1；否则，结果为 0。

#### 示例

```js
A: 11011011
B: 10101101
A&B: 10001001
```

在这个例子中，只有在 A 和 B 的对应位都为 1 时，A&B 的结果才为 1。

### 按位异或运算符 `^`

- **含义：** 对两个二进制数的每一位执行异或运算。
- **规则：** 如果两个对应的比特位相异，结果为 1；如果两个比特位相同，结果为 0。

#### 示例

```js
A: 11011011
B: 10101101
A^B: 01110110
```

### 实际案例

应用逻辑如下：

```js
// 思路： 总体就是在二进制位上标记某个属性是 1
const TEXT = 1; // 001
const ELEMENT = 2; // 010
const COMPONENT = 4; // 100

// | 进行授权  & 进行校验
// 假设：同时拥有文本和HTML两个属性
let test = TEXT | ELEMENT; // 结果: 011

// 校验是否具有文本权限
let hasTextPermission = (test & TEXT) !== 0; // 结果: true

// 校验是否具有元素权限
let hasElementPermission = (test & ELEMENT) !== 0; // 结果: true

// 校验是否具有组件权限
let hasComponentPermission = (test & COMPONENT) !== 0; // 结果: false
```

```js
// 假设有如下权限标志
const PERMISSIONS = {
  TEXT: 1, // 001
  ELEMENT: 2, // 010
  COMPONENT: 4, // 100
};

// 用户1权限
let user1Permissions = PERMISSIONS.TEXT | PERMISSIONS.ELEMENT; // 结果: 011

// 用户2权限
let user2Permissions = PERMISSIONS.ELEMENT | PERMISSIONS.COMPONENT; // 结果: 110

// 使用按位异或运算符获取两个用户权限的不同之处
let differentPermissions = user1Permissions ^ user2Permissions; // 结果: 101

// 检查用户1是否有用户2没有的权限
let user1HasExtraPermission = (differentPermissions & user1Permissions) !== 0; // 结果: true

// 检查用户2是否有用户1没有的权限
let user2HasExtraPermission = (differentPermissions & user2Permissions) !== 0; // 结果: true
```
