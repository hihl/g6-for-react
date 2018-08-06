import React from 'react';
import { Layout, Menu } from 'td-ui';

const MenuItem = Menu.Item;

export default class Header extends React.PureComponent {
  render() {
    let current = 'home';
    // if (window.location.pathname === '/' || window.location.pathname.startsWith('/demo')) {
    //   current = 'home';
    // } else if (window.location.pathname.startsWith('/api')) {
    //   current = 'api';
    // }
    return (
      <Layout.Header className="main-header">
        <a className="main-header-logo" href="/">G6-for-React</a>
        <div className="main-header-right">
          <Menu
            selectedKeys={[current]}
            mode='horizontal'
          >
            <MenuItem key="home"><a href="/">图表示例</a></MenuItem>
          </Menu>
        </div>
      </Layout.Header>
    );
  }
}