import BaseProcessor from './BaseProcessor';
import g6Creator from './g6Creator';
import g6Update from './g6Update';
import configMerge from './configMerge';

export default class GraphProcessor extends BaseProcessor {
  createG6Instance() {
    const config = this.config;
    const graph = g6Creator.createGraph(config, this.elementInfos);

    graph.read(config.graph.props.data);

    this.instance = graph;
    this.instanceType = 'graph';
    this.initedG6 = true;
    this.resetStates();
    return graph;
  }

  batchedUpdate() {
    if (!this.instance) {
      return null;
    }
    if (g6Update.needRebuildGraph(this.config)) {
      configMerge.merge(this.config, this.deleteInfos, this.elementInfos, true);
      this.instance.destroy();
      this.instance = 'destroy';
      return this.createG6Instance();
    }

    if (this.added) {
      g6Creator.synchronizeG6Add(this.instance, this.config);
    }

    if (this.updated) {
      g6Update.synchronizeG6GraphUpdate(this.instance, this.config);
    }

    // if (this.added || this.deleted || this.updated) {
    //   this.instance.reRender();
    // }

    configMerge.mergeUpdate(this.config, false);
    this.resetStates();

    return this.instance;
  }
}
