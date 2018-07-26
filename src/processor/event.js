import _ from 'lodash';
import { Util } from '../shared';

const baseEventNames = [
  'click',
  'dblclick',
  'mouseenter',
  'mouseleave',
  'mousedown',
  'mouseup',
  'mousemove',
  'dragstart',
  'drag',
  'dragend',
  'dragenter',
  'dragleave',
  'drop',
  'contextmenu'
];

const baseEventsPostfix = baseEventNames.map(_.capitalize);

const graphEventNames = [
  'keydown',
  'keyup',
  'mousewheel',
  'beforechangesize',
  'afterchangesize',
  'beforeviewportchange',
  'afterviewportchange',
  'beforechange',
  'afterchange'
];

const items = ['node', 'edge', 'group', 'guide', 'canvas'];
const itemsEvtNamePrefix = ['onNode', 'onEdge', 'onGroup', 'onGuide', 'onCanvas'];

const itemEvents = [];

itemsEvtNamePrefix.forEach((prefix, i) => {
  baseEventsPostfix.forEach((postfix, j) => {
    itemEvents.push({
      prop: `${prefix}${postfix}`,
      event: `${items[i]}:${baseEventNames[j]}`
    });
  });
});

const baseEvents = baseEventNames.map(eventName => ({
  prop: `on${_.capitalize(eventName)}`,
  event: eventName
}));

const graphEvents = graphEventNames.map(eventName => ({
  prop: `on${_.capitalize(eventName)}`,
  event: eventName
})).concat(baseEvents).concat(itemEvents);

function bindEvents(graph, EVENTS = {}, props) {
  _.each(EVENTS, (key) => {
    const { prop, event } = key;
    const fns = props[prop];

    if (Util.isFunction(fns)) {
      graph.on(event, (...args) => fns(...args.concat([graph])));
    } else if (Util.isObject(fns)) {
      for (const name in fns) {
        if (fns[name] !== undefined) {
          graph.on(`${name}:${event}`, fns[name]);
        }
      }
    }
  });
}

function unbindEvents(graph, EVENTS = {}, props) {
  _.each(EVENTS, (key) => {
    const { prop, event } = key;
    const fns = props[prop];

    if (Util.isFunction(fns)) {
      graph.off(event, fns);
    } else if (Util.isObject(fns)) {
      for (const name in fns) {
        if (Object.prototype.hasOwnProperty.call(fns, name)) {
          graph.off(`${name}:${event}`, fns[name]);
        }
      }
    }
  });
}

function updateEvents(graph, EVENTS = {}, props, nextProps) {
  _.each(EVENTS, (key) => {
    const { prop, event } = key;
    const fns = props[prop];
    const nextFns = nextProps[prop];
    let name;

    if (!Util.shallowEqual(fns, nextFns)) {
      if (Util.isFunction(fns) && Util.isFunction(nextFns)) {
        graph.off(event, fns);
        graph.on(event, nextFns);
      } else if (Util.isObject(fns) && Util.isObject(nextFns)) {
        for (name in fns) {
          if (Object.prototype.hasOwnProperty.call(fns, name)) {
            graph.off(`${name}:${event}`, fns[name]);
          }
        }
        for (name in nextFns) {
          if (Object.prototype.hasOwnProperty.call(nextFns, name)) {
            graph.on(`${name}:${event}`, nextFns[name]);
          }
        }
      }
    }
  });
}

export default {
  baseEvents,
  graphEvents,
  treeEvents: graphEvents.slice(0),
  bindEvents,
  unbindEvents,
  updateEvents
}
