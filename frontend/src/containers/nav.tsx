import React, { forwardRef, useState } from 'react';
import Link, { LinkProps } from 'next/link';
import { Menu } from 'antd';
import * as icons from '@ant-design/icons';

import { ShareFilled } from '../components/icons';
import Query from '../components/query';
import { GET_NAV } from '../queries/navbar';

type MenuItem = {
  label: string;
  href: string;
  icon?: string;
}
type NavComponentProps = {
  social: MenuItem[];
  links: MenuItem[];
}

const buildMenuItem = (isExternal: boolean = false) => ({ href, label, icon }: MenuItem) => {
  // @ts-ignore
  const Icon = icon ? icons[`${icon}Filled`] : null;
  const Label = () => Icon && label !== "Home" ? <><Icon /> {label}</> : <>{label}</>;
  const ForwardLink = forwardRef<HTMLAnchorElement>(({}, ref) => isExternal
    ? <a href={href.toString()} target="_blank" rel="noopener noreferrer" ref={ref}><Label /></a>
    : <a href={href.toString()} ref={ref}><Label /></a>
  );
  return (
    <Menu.Item key={href}>
      <Link href={href} passHref><ForwardLink /></Link>
    </Menu.Item>
  );
};

const Nav: React.FC = () => {
  const [current, setCurrent] = useState('');

  return (
    <Query<{navBar: NavComponentProps}> query={GET_NAV}>
    {({ navBar: { social, links }}) => (
      <Menu onClick={e => setCurrent(e.key as string)} selectedKeys={[current]} mode="horizontal">
        {links.map(buildMenuItem())}
        <Menu.SubMenu key="social" icon={<ShareFilled width={50} height={50} fill="#000" />} style={{ float: 'right' }}>
          {social.map(buildMenuItem(true))}
        </Menu.SubMenu>
      </Menu>
    )}
    </Query>
  );
};

export default Nav;
