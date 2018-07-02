import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import components from '../component/index';

class App extends React.Component {

  renderList() {
    const items = Object.keys(components).map(key => {
      const group = components[key];
      const list = Object.keys(group).map(c => {
        const entry = group[c];

        return (
          <li key={`component-${c}`}>
            <Link to={{ pathname: '/', query: { page: c, group: key } }}>{c}</Link>
          </li>
        );
      });

      return (
        <div key={`group-${key}`} className="component-list-container">
          <p className="group-name">{key}</p>
          <ul className="component-list">
            {list}
          </ul>
        </div>
      );
    });

    return (
      <div className="component-list-wrapper">
        <p className="title">components</p>
        {items}
      </div>
    );
  }

  renderPageDetail() {
    const { location, match } = this.props;
    const { query } = location;
    const { group, page } = query;
    const { params } = match;

    return (
      <div className="component-wrapper">
        <p className="back"><Link to={{ pathname: '/' }}>Back to homepage</Link></p>
        <p className="title">{page}</p>
        {components[group] && components[group][page] ? React.createElement(components[group][page]) : null}
      </div>
    );
  }

  render() {
    const { location } = this.props;

    if (!location.query || !location.query.page) {
      return this.renderList();
    }

    return this.renderPageDetail();
  }
}

export default withRouter(App);