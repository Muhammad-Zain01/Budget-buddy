import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown } from '@/ui/imports/ui-import';
import { Dots } from './icon';

type ComponentProps = {
  items: MenuProps['items']
}

const DropMenu: React.FC<ComponentProps> = ({ items }) => {
  return (

    <Dropdown menu={{ items }} trigger={['click']}>
      <Dots size={16} />
    </Dropdown>
  );
}


export default DropMenu;