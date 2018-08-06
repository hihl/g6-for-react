import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { Layout, Row, Col } from 'td-ui';
import 'whatwg-fetch';
import './home.less';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: window.location.hash
    };
  }

  render() {
    const groups = window.groups;
    return (
      <Layout>
        <Header/>
        <Layout.Content className="home-content">
          <Row>
            <Col span={2} />
            <Col span={20}>
              {
                groups.map(group => (
                  <Fragment key={group.key}>
                    <div className="home-content-container">
                      <h5 id={group.key}>{group.display}</h5>
                      <Row gutter={15}>
                        {
                          group.demos.map(demo => (
                            <Col key={demo.display} md={8} sm={12} xs={24} style={{ marginBottom: 40 }}>
                              <div className="home-card">
                                <a className="home-card-preview" href={`/demo/${group.key}/${demo.key}`}>
                                  <img src={`/images/${demo.img}`} alt={demo.display}/>
                                </a>
                                <div className="home-card-body">
                                  <a href={`/demo/${group.key}/${demo.key}`}>
                                  {demo.display}
                                  </a>
                                </div>
                              </div>
                            </Col>
                          ))
                        }
                      </Row>
                    </div>
                  </Fragment>
                ))
              }
            </Col>
            <Col span={2} style={{ height: '100vh' }}>
              <div className="home-anchor">
                <ul>
                  {
                    groups.map(item => <li key={item.key}><a className={
                      (!this.state.active || this.state.active === `#${item.key}`) ? 'active' : ''
                    } href={`#${item.key}`} onClick={() => this.setState({ active : `#${item.key}` })}>{item.display}</a></li>)
                  }
                </ul>
              </div>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    );
  }
}

ReactDOM.render(<Home/>, document.getElementById('app'));