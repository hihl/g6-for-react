import CodeTree from './codeTree';
import TreeCompact from './treeCompact';
import TreeDendrogram from './treeDendrogram';
import TreeIndented from './treeIndented';
import TreeMindMap from './treeMindMap';

export default {
  '画廊': {
    '函数生成树': CodeTree,
    '紧凑树': TreeCompact,
    '系统树': TreeDendrogram,
    '生态树': TreeIndented,
    '脑树': TreeMindMap
  }
}
