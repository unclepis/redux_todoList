# redux_todoList
用redux跑一下官网的todolist demo

## state数据结构

1.最近看了很多redux的文档，对redux的一些概念朱健有了自己的一些理解，在使用redux进行组件开发的时候，首先需要根绝业务，对唯一的state的结构进行构建
例如本例中，add添加todo待办项，toggle切换todo待办项的状态，delete对todo待办项进行删除，filter对todo待办项进行筛选，所以可能的state的结构为

```
  {
    todos:[ // todos数组存储了所有待办项,其中的每一个对象是具体的待办项的状态，包括id（进行删除和切换），completed（完成状态），text（待办项内容）
      {    
        id:1,
        text:'todo 1',
        completed:false
      },
      {
        id:2,
        text:'todo 2',
        completed:true
      },
        ...
    ],
    filter: 'all' // 对todos待办项列表的过滤条件
  }
```
## 文档目录
### 使用create-react-app脚手架，基本的工程结构就是：

```
  -actions
  -index.js 所有的actions
-reducers
  -todo.js
  -filter.js
  -index.js
-containers
  -TodoFilter.jsx
  -TodoInput.jsx
  -TodoList.jsx
-components
  -App.jsx
  -Todo.jsx
  -TodoFilter.jsx
  -TodoInput.jsx
  -TodoList.jsx
-index.js 
```

1.actions
  里面是所有的action creator,包含了视图层所有的用户action行为
2.reducers
  里面就是针对每个actions对应的响应，reducers里面根据用户的action行为可能对store中的state进行的修改，进行了业务分隔
  1）index.js中使用了redux提供的combineReducers对各个reducer进行了整合
  2）todo.js是针对state中对todos数组的修改
  3）filter.js是针对state中对filter字段的修改
3.containers
  使用react-redux提供的connect高阶函数对components中的视图组件进行封装
4.components
  负责视图显示的纯组件
5.index.js 
  整个工程的入口文件，也就是使用ReactDOM.render方法把组件渲染到dom中。它使用react-redux提供的Provider提供了一个父容器，将生成的store放入context
  上下文，于是整个工程的子组件都可以共享context中的store，也就可以使用store提供的getState，dispatch和subscribe方法
### redux 和 react-redux

```
  import {conncet} from 'react-redux' // 高阶函数对纯组件进行封装的conncet方法
  import {Provider} from 'react-redux' // 提供context的父容器共享store
  import {createStore} from 'redux' // 接收reducer创建store
```
