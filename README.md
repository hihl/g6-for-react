![](https://img.shields.io/badge/language-react-red.svg)  ![](https://img.shields.io/badge/license-MIT-000000.svg)  [![NPM Package](https://img.shields.io/npm/v/g6-for-react.svg)](https://www.npmjs.com/package/g6-for-react)[![NPM Downloads](https://img.shields.io/npm/dm/g6-for-react.svg)](https://npmjs.org/package/g6-for-react)

# g6-for-react
基于蚂蚁金服关系数据可视化引擎g6的react版封装

## 安装

```bash
npm install g6-for-react // or
yarn add g6-for-react
```

## dev build

```bash
$ git clone https://github.com/hihl/g6-for-react.git
$ cd g6-for-react
$ npm install
$ npm run build
```

## dev demo

```bash
$ sudo vi /etc/hosts
// 加入 127.0.0.1 localhost
$ npm run demo
// 浏览器打开 http://localhost:3510/
```

## 快速开始

```jsx
import { Graph } from 'g6-for-react';

const data = {
  nodes: [{
    id: 'node1',
    x: 100,
    y: 200,
    label: '节点1'
  }, {
    id: 'node2',
    x: 300,
    y: 200,
    label: '节点2'
  }],
  edges: [{
    target: 'node2',
    source: 'node1'
  }]
};

<Graph fitView="cc" animate={true} height={window.innerHeight} data={data}></Graph>
```

## 文档