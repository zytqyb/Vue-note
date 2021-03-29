# Vuex-数据的响应式原理

# Mutations响应式规则

- Vuex的store中的state是响应式的, 当state中的数据发生改变时, Vue组件会自动更新.
- 这就要求我们必须遵守一些Vuex对应的规则:
  - 提前在store中初始化好所需的属性.
  - 当给state中的对象添加新属性时, 使用下面的方式:
    - 方式一: 使用Vue.set(obj, 'newProp', 123)
    - 方式二: 用心对象给旧对象重新赋值
- 我们来看一个例子:
  - 当我们点击更新信息时, 界面并没有发生对应改变.
- 如何才能让它改变呢?
  - 查看下面代码的方式一和方式二
  - 都可以让state中的属性是响应式的.

![image-20210329140710358](C:\Users\14351\AppData\Roaming\Typora\typora-user-images\image-20210329140710358.png)

![image-20210329140716313](C:\Users\14351\AppData\Roaming\Typora\typora-user-images\image-20210329140716313.png)

```javascript
updataInfo(state) {
      // state.info.name = 'zytqyb' // 被监听的
      // state.info['address'] = '洛杉矶' // 不被监听的
      // Vue.set(state.info, 'address', '洛杉矶')
      // delete state.info.age // 该删除方式做不到响应式
      Vue.delete(state.info, 'age') // 该删除方式可以做到响应式
}
```



# Mutations常量类型– 概念

# Action

## Action的基本定义

- 我们强调, 不要再Mutation中进行异步操作.
  - 但是某些情况, 我们确实希望在Vuex中进行一些异步操作, 比如网络请求, 必然是异步的. 这个时候怎么处理呢?
- Action类似于Mutation, 但是是用来代替Mutation进行异步操作的.
- Action的基本使用代码如下:
- context是什么?
  - context是和store对象具有相同方法和属性的对象.
  - 也就是说, 我们可以通过context去进行commit相关的操作, 也可以获取context.state等.
  - 但是注意, 这里它们并不是同一个对象, 为什么呢? 我们后面学习Modules的时候, 再具体说.
- 这样的代码是否多此一举呢?
  - 我们定义了actions, 然后又在actions中去进行commit, 这不是脱裤放屁吗?
  - 事实上并不是这样, 如果在Vuex中有异步操作, 那么我们就可以在actions中完成了.

![image-20210329152747506](C:\Users\14351\AppData\Roaming\Typora\typora-user-images\image-20210329152747506.png)

# modules



