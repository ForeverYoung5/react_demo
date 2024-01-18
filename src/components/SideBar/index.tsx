import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    path: key
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('场景题', '/', <MailOutlined />, [
    getItem('行数限制', '/limitLine', null),
  ]),

  getItem('Suspense组件使用', '/suspenseComp', <AppstoreOutlined />),

  { type: 'divider' },

  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),

  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];

const SideBar: React.FC = () => {
  const navigate = useNavigate();

  const goPage: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  return (
    <Menu
      onClick={goPage}
      style={{ width: 256 }}
      defaultSelectedKeys={['/limitLine']}
      defaultOpenKeys={['/']}
      mode="inline"
      items={items}
    />
  );
};

export default SideBar;