# 后台 API


## 商品分类部分

对分类进行基本的增删改查的操作

#### 添加商品分类

```
POST /cat
```

接收数据

```js
name `String` 商品名称
```

商品名称不可重复，重复返回403错误

```js
{
  err: err,
  msg: '添加失败请重试'
}
```
添加成功返回

```js
{
  msg: '分类添加成功',
  category: category
}
```
