import './App.css';
// import AddBook from "./components/AddBook";
// import BooksList from "./components/BooksList";
import { Routes, Route, Link } from "react-router-dom";
import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { AddNewItem } from './components/AddNewItem';
import { useAppState } from './state/AppStateContext';
import { addList } from './state/actions';
import { CustomDragLayer } from './components/CustomDragLayer';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const App: React.FC = () => {
  const { lists, dispatch } = useAppState();

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div>
              <AppContainer>
                <CustomDragLayer />
                {lists.map((list) => (
                  <Column text={list.text} key={list.id} id={list.id} />
                ))}
                <AddNewItem toggleButtonText="+ Add another list" onAdd={(text) => dispatch(addList(text))} />
              </AppContainer>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
