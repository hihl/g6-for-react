# g6-for-react

全局命名空间 g6-for-react 包含:

# API

## 1、Component 组件

### Graph

图表顶层组件之一，控制着图表的创建、绘制、销毁等。 详细文档见 [Graph API](../api/graph.md)

### Tree

树型图表，继承Graph，一种特殊的图表，顶层组件之一，控制着图表的创建、绘制、销毁等。 详细文档见 [Tree API](../api/tree.md)

### NodeMapper

节点映射器，用于将输入数据按照一顶规则映射成图上使用的数据

### EdgeMapper

线映射器，用于将输入数据按照一顶规则映射成图上使用的数据

### GroupMapper

分组映射器，用于将输入数据按照一顶规则映射成图上使用的数据

### Layout

布局组件，用于设置图表使用的布局方式

## 2、G6
G6 的命名空间，在有需要的情况下用户可以直接拿到该对象去工作。

## 3、Shape
构成图表具体的形状类。
详细文档见 [Shape api](shape.md)。

## 4、track
该方法用于 G6 情况的打点监控，默认处于关闭状态，可配置为 true。
```js
G6ForReact.track(true);
```

## 5、Util
默认提供的常见的工具类，大部分基于 lodash 封装。
如下：
```js
const Util = {
  each: require('lodash/each'),
  map: require('lodash/map'),
  isObject: require('lodash/isObject'),
  isNumber: require('lodash/isNumber'),
  isString: require('lodash/isString'),
  isFunction: require('lodash/isFunction'),
  ...
};
```