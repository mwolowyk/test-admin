import React from 'react';
import { MenuItemLink } from 'admin-on-rest';

export const Menu = ({ resources, onMenuTap, logout }) => (
    <div>
        <MenuItemLink to="/posts" primaryText="Posts" onClick={onMenuTap} />
        <MenuItemLink to="/comments" primaryText="Comments" onClick={onMenuTap} />
        <MenuItemLink to="/custom-route" primaryText="Miscellaneous" onClick={onMenuTap} />
        <MenuItemLink to="/products" primaryText="Products" onClick={onMenuTap} />
        {logout}
    </div>
);