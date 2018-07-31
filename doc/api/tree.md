# Tree

树组件，一种特殊的图组件，继承Graph，仅个别配置不同，其他详见[Graph API](graph.md)

## 1、data

导入的数据模型，以下键名在 G6 中有特定含义，是保留字段，用户在设置自有数据时应 `避免使用` 。

### 数据模型

```js
{
  roots: [
    {
      id: 'root',                    // 根节点 id 
      color: '#333',                 // 颜色 
      size: 10 || [10, 10],          // 尺寸 || [宽, 高]
      shape: 'circle',               // 根节点 id
      style: {                       // 样式 (优先级高于 color) 
        fill: 'red',
    	stroke: 'blue'
      },
      label: '文本标签' || {           // 文本标签 || 文本图形配置
        text: '文本标签',
    	fill: 'green'
      },
      parent: 'parentId',            // 父节点 id
      collapsed: false,              // 是否折叠
      index: 1,                      // 渲染层级
      children: [{                   // 子元素集 （自元素数据模型和根节点同构）
	    id: 'leaf',
      }],
    }
  ]
}
```

## 2、layout

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
(roots, tree)=>{
  // roots 根节点数据集
  // tree 当前图类实例
  // 在此处进行布局
}
```

<font color="#bd4147" size=2>type</font> {object}

```js
{
  excute() {
    this.roots  // 根节点数据集
    this.tree; // 当前图类
  }
}
```