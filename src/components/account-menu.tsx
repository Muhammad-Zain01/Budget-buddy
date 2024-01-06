import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown } from '@/ui/imports/ui-import';
import { Dots } from './icon';


const AccountMenu: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: "Active",
    }
  ];

  return (

    <Dropdown menu={{ items }} trigger={['click']}>
      <Dots size={16} />
    </Dropdown>
  );
}


export default AccountMenu;