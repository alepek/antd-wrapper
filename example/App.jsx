import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import svSE from 'antd/lib/locale-provider/sv_SE';

import { Button, DatePicker, Popover, Popconfirm } from 'antd';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocaleProvider locale={svSE}>
          <div>
            <h1>Welcome to <code>sl-antd</code></h1>
            <h2>Welcome to <code>sl-antd</code></h2>
            <h3>Welcome to <code>sl-antd</code></h3>
            <h4>Welcome to <code>sl-antd</code></h4>
            <div>
              <br />
              <Button type="primary">Here's an antd button</Button>
            </div>
            <div>
              <br/>
              <Button>Here's an antd button</Button>
            </div>
            <div>
              <br/>
              <DatePicker />
            </div>
            <div>
              <br/>
              <Popover content={<p>Beskrivande text</p>} title="Titel" trigger="click">
                <Button>Click me</Button>
              </Popover>
            </div>
            <div>
              <br/>
              <Popconfirm title="Are you sure?" okText="Yes, delete" cancelText="Cancel">
                <a href="#delete">This is a link that deletes things</a>
              </Popconfirm>
            </div>
          </div>
        </LocaleProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
