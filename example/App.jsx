import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import svSE from 'antd/lib/locale-provider/sv_SE';

import { Alert, Button, DatePicker, Popover, Popconfirm, Row, Col, Pagination } from 'antd';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocaleProvider locale={svSE}>
          <Row>
            <Col sm={{ span: 18, offset: 3 }} md={{ span: 16, offset: 4 }}>
              <Row>
                <h1>Welcome to <i>Slant</i></h1>
              </Row>
              <Row>
                <h2>Colors</h2>
              </Row>
              <Row>
                <h2>Typography</h2>
              </Row>
              <Row>
                <h2>Alerts</h2>
              </Row>
              <Row>
                <h2>Buttons</h2>
                <Button type="primary">Here's an antd button</Button>
                <Button size="large"><i>Here's a large antd button</i></Button>
                <Button type="danger" size="small">A small antd button</Button>
              </Row>
              <Row>
                <h2>Input</h2>
                <DatePicker />
              </Row>
              <Row>
                <h2>Pagination</h2>
                <Pagination defaultCurrent={1} total={50} />
                <br/>
                <Pagination size="small" total={50} />
              </Row>
              <Row>
                <h2>Other components</h2>
                <Popover content={<p>Beskrivande text</p>} title="Titel" trigger="click">
                  <Button>Click me</Button>
                </Popover>

                <Popconfirm title="Are you sure?" okText="Yes, delete" cancelText="Cancel">
                  <a href="#delete">This is a link that deletes things</a>
                </Popconfirm>
              </Row>
            </Col>
          </Row>
        </LocaleProvider>
      </div>
    );
  }
}

export default App;
