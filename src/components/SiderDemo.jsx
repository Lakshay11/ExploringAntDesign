import React from 'react';
import {Layout, Menu, Row, Col, Tabs} from 'antd';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
const {Header, Content, Footer, Sider} = Layout;
const {TabPane} = Tabs;

function callback(key) {
  console.log(key);
}

class SiderDemo extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({collapsed});
  };

  render() {
    return (<Layout style={{
        minHeight: '100vh'
      }}>
      <Sider breakpoint="lg" collapsedWidth="0" onBreakpoint={broken => {
          console.log(broken);
        }} onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <div className="logo"/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{
            padding: 0
          }}/>
        <Content style={{
            margin: '0 16px'
          }}>
          <Row>
            <Col sm={24} md={8}>
              <h1>Column 1</h1>
            </Col>
            <Col sm={24} md={8}>
              <h1>Column 2</h1>
            </Col>
            <Col sm={24} md={8}>
              <h1>Column 3</h1>
            </Col>
          </Row>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">
              <h1>Content of Tab Pane 1</h1>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Event</Th>
                    <Th>Date</Th>
                    <Th>Location</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Tablescon</Td>
                    <Td>9 April 2019</Td>
                    <Td>East Annex</Td>
                  </Tr>
                  <Tr>
                    <Td>Capstone Data</Td>
                    <Td>19 May 2019</Td>
                    <Td>205 Gorgas</Td>
                  </Tr>
                  <Tr>
                    <Td>Tuscaloosa D3</Td>
                    <Td>29 June 2019</Td>
                    <Td>Github</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Content>
        <Footer style={{
            textAlign: 'center'
          }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>);
  }
}

export default SiderDemo;
