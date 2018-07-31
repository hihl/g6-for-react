# Graph

图组件，内部生成一个g6 graph实例，同时控制着组件的加载和更新、销毁

## 子组件
- [`<NodeMapper/>`](node-mapper.md) 节点映射器
- [`<EdgeMapper/>`](edge-mapper.md) 线映射器
- [`<GroupMapper/>`](group-mapper.md) 分组映射器
- [`<Layout/>`](layout.md) 布局

```jsx
// 布局生成器
const layoutCreator = col => nodes => {
  const hgap = 76;
  const vgap = 50;

  nodes.forEach(function(node, index) {
    if (parseInt(index / col) % 2 === 0) {
      node.x = (col - index % col) * hgap;
    } else {
      node.x = index % col * hgap + hgap;
    }
    node.y = parseInt(index / col) * vgap + vgap / 2;
  });
};

<Graph 
  fitView="cc" 
  height={window.innerHeight} 
  data={data}
  onGetG6Instance={graph => this.graph = graph}
>
  <NodeMapper label={node => node.id}/>
  <GroupMapper label={group => group.id}/>
  <EdgeMapper style={() => ({ endArrow: true })}/>
  <Layout processer={layoutCreator(setCol)}/>
</Graph>
```

## API

### 1、width
画布宽，单位像素 {number}
`不设置则自适应父容器宽`

### 2、height
画布高，单位像素 {number}
`不设置则自适应父容器高`

### 3、fitView
初始化视口区域 {string}，候选值为： 'tl', 'lc', 'bl', 'cc', 'tc', 'tr', 'rc', 'br', 'bc', 'autoZoom'

### 4、fitViewPadding
视口适应画布边距 {number || array}

### 5、animate
是否开启动画 {boolean}

### 6、minZoom
最小缩放倍率 {number}

### 7、maxZoom
最大缩放倍率 {number}

### 8、modes
模式集 {object}

### 9、mode
当前模式 {string}

### 10、plugins
插件集 {array}

### 11、layout
布局参数 {object|function|object}

<font color="#bd4147" size=2>type</font> {object}

```js
{
  auto: {boolean}, // 是否在画布数据变更后自动布局 默认 是true
  processer: {object|function}, // 布局处理器
}
```

<font color="#bd4147" size=2>type</font> {function}

```js
(nodes, edges)=>{
  // nodes 节点集
  // edges 边集
  // 在此处进行布局
}
```

<font color="#bd4147" size=2>type</font> {object}

```js
{
  excute() {
    this.nodes; // 节点集
    this.edges; // 边集
    this.graph; // 当前图类
  }
}
```

### 12、style
设置图表最外层div的样式
``` jsx
const style={fontSize: '12'}
<Graph style={style} />
```

## 事件属性
`<Graph/>`组件提供了各种事件，方便用户扩展交互。基本的事件用法如下：
```jsx
<Graph
  onClick={e => {
    //do something
  }}
/>
```

更新属性时，如果某事件不指定监听函数，表示删除该事件。

下面列出了 `<Graph/> `支持的所有事件属性。

### 1、onGetG6Instance
获取Graph实例 {function}
```jsx
<Graph onGetG6Instance={graph => this.graph = graph}></Graph>
```

### 2、鼠标事件
这类事件可以与前缀 ''（ <font color="#bd4147" size=2>空即任意</font> ）, 'Node', 'Edge', 'Group', 'Canvas'，自由组合使用:
```jsx
<Graph onClick={ev => {}} />          // 鼠标左键点击事件
<Graph onDblclick={ev => {}} />       // 鼠标左键双击事件
<Graph onMouseenter={ev => {}} />     // 鼠标移入事件
<Graph onMouseleave={ev => {}} />     // 鼠标移出事件
<Graph onMousedown={ev => {}} />      // 鼠标按下事件
<Graph onMouseup={ev => {}} />        // 鼠标抬起事件
<Graph onMousemove={ev => {}} />      // 鼠标移动事件
<Graph onDragstart={ev => {}} />      // 鼠标开始拖拽事件
<Graph onDrag={ev => {}} />           // 鼠标拖拽事件
<Graph onDragend={ev => {}} />        // 鼠标拖拽结束事件
<Graph onDragenter={ev => {}} />      // 鼠标拖拽进入事件
<Graph onDragleave={ev => {}} />      // 鼠标拖拽移出事件
<Graph onDrop={ev => {}} />           // 鼠标拖拽放置事件
<Graph onContextmenu={ev => {}} />    // 右键菜单事件
```

### 其它事件
```jsx
<Graph onKeydown={ev => {}} />              // 键盘按键按下事件
<Graph onKeyup={ev => {}} />                // 键盘按键抬起事件
<Graph onMousewheel={ev => {}} />           // 鼠标滚轮事件
<Graph onBeforechangesize={ev => {}} />     // 画布尺寸变化前
<Graph onAfterchangesize={ev => {}} />      // 画布尺寸变化后
<Graph onBeforeviewportchange={ev => {}} /> // 视口变化前
<Graph onAfterviewportchange={ev => {}} />  // 视口变化后
<Graph onBeforechange={ev => {}} />         // 子项数据变化前
<Graph onAfterchange={ev => {}} />          // 子项数据变化后
```

### 事件对象

```js
{
  currentItem,  // drag 拖动子项
  currentShape, // drag 拖动图形
  shape,        // 图形对象
  item,         // 子项
  domEvent,     // 原生的 dom 事件
  x,            // 图横坐标
  y,            // 图纵坐标
  domX,         // dom横坐标
  domY,         // dom纵坐标
  action,       // 数据变更动作 add、update、remove、changeData
  toShape,      // mouseleave、dragleave 到达的图形
  toItem,       // mouseleave、dragleave 到达的子项
}
```

### 3、元素事件
图形元素事件属性名 = on + 图形元素名称 + 鼠标事件名。

- 图形元素名称有：
```
Node、Edge、Group、Canvas
```

代码示例：
```jsx
<Graph onNodeClick={ev => {}} onNodeDblclick={ev => {}} />
```