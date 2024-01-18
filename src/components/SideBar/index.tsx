import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import routes from '../../routes';

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
const items = routes.filter(e=>!e.hidden).map((route)=>{
  return getItem(route.name,route.path,null);
})

const SideBar: React.FC = () => {

  const goPage: MenuProps['onClick'] = (e) => {
    window.location.hash = e.key
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