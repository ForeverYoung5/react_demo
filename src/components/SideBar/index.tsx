import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import type { TRouteItem } from '../../routes/index';
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


interface IProps {
  auth: TRouteItem[] | undefined
}

const SideBar: React.FC<IProps> = (props: IProps) => {
  const navigate = useNavigate();

  const goPage: MenuProps['onClick'] = (e) => {
    // window.location.hash = e.key
    navigate(e.key)
  };

  const items = props.auth?.filter(e => !e.hidden).map((route) => {
    return getItem(route.name, route.path, null);
  });

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