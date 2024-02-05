import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown } from '@/common/ui-import';
import { Dots } from '../icon';

type ComponentProps = {
  item: React.ReactNode
}

const DropMenu: React.FC<ComponentProps> = ({ item }) => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: item,
    }
  ]
  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Dots size={16} />
    </Dropdown>
  );
}


export default DropMenu;