import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import AdminHome from './adminHome/AdminHome';
import AdminProductList from './adminProductList/AdminProductList';

export const menu_data = [
  {
    title: 'Home',
    path: '/AdminHome',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Games',
    path: '/AdminProductList',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Add New Game',
    path: '/newproduct',
    icon: <AiIcons.AiFillPlusCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Users',
    path: '/users',
    icon: <FaIcons.FaUsers />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <AiIcons.AiFillControl />,
    cName: 'nav-text'
  }
];
