import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { Layout, Menu, Button, message } from 'td-ui';
import { Controlled as CodeMirror } from 'react-codemirror2';
import Resizable from 're-resizable';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'whatwg-fetch';
import './demo.less';
require('codemirror/mode/htmlmixed/htmlmixed');

const { Sider, Content } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 800,
      value: window.previewCode || ''
    };
  }

  handleSelect = (selectedKeys) => {
    const page = selectedKeys[0];
    const group = window.groups.find(item => !!item.demos.find(demo => demo.key === page));
    window.location.replace(`/demo/${group.key}/${page}`);
  };

  onCodeChange = (editor, data, value) => {
    this.setState({ value });
  };

  syncCode = () => {
    const { value } = this.state;
    this._pre.innerHTML = '<iframe></iframe>';
    const iframe = this._pre.querySelector('iframe');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(value);
    iframeDoc.close();
  };

  render() {
    const groups = window.groups;
    const uris = window.location.pathname.split('/');
    const current = uris[uris.length - 1];
    const openKeys = [uris[uris.length - 2]];
    const curGroup = groups.find(item => item.key === openKeys[0]);
    const curDemo = curGroup.demos.find(item => item.key === current);
    return (
      <Layout>
        <Header/>
        <Layout>
          <Sider className="demo-sider" width={220}>
            <Menu
              openKeys={openKeys}
              selectedKeys={[current]}
              onSelect={this.handleSelect}
            >
            {
              groups.map(group => (
                <SubMenu key={group.key} title={group.display}>
                {
                  group.demos.map(demo => (
                    <MenuItem key={demo.key}>{demo.display}</MenuItem>
                  ))
                }
                </SubMenu>
              ))
            }
            </Menu>
          </Sider>
          <Content className="demo-content">
            <Resizable
              size={{ height: '100%', width: this.state.width }}
              enable={{
                bottom: false,
                bottomLeft: false,
                bottomRight: false,
                left: false,
                right: true,
                top: false,
                topLeft: false,
                topRight: false
              }}
              onResizeStop={(e, direction, ref, d, position) => {
                e.stopPropagation();
                this.setState({ width: this.state.width + d.width });
              }}
            >
              <div className="demo-preview-title">{!!curDemo ? curDemo.display : ''}</div>
              <div className="demo-preview" id="preview" ref={_pre => this._pre = _pre}></div>
            </Resizable>
          </Content>
          <Sider className="demo-sider-right" width={window.innerWidth - 220 - this.state.width}>
            <div className="demo-toolbar">
              源码
              <span>
                <CopyToClipboard text={this.state.value} onCopy={() => message.success('复制成功')}><Button icon="copy-paste" type="noborder">复制</Button></CopyToClipboard>
                <Button icon="triangle-right" type="noborder" onClick={this.syncCode}>运行</Button>
              </span>
            </div>
            <CodeMirror
              value={this.state.value}
              options={{
                mode: 'htmlmixed',
                tabSize: 2,
                lineNumbers: true
              }}
              onBeforeChange={this.onCodeChange}
            />
          </Sider>
        </Layout>
      </Layout>
    );
  }

  componentDidMount() {
    this.syncCode();
  }
}

ReactDOM.render(<Demo/>, document.getElementById('app'));