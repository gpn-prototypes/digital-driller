import React from 'react';
import PropTypes from 'prop-types';
import { Header, Logo, SearchBar, Menu, Login, IconButton, IconRing, IconBento } from '@gpn-design/uikit';

import './TheHeader.css';

function TheHeader(props) {
  const { page } = props;

  const menuItems = [
    {
      name: 'Программы',
      link: '/',
      active: page == 'Программы' ? true : false
    },
    {
      name: 'База знаний',
      link: '/base',
      active: page == 'База знаний' ? true : false
    },
    {
      name: 'Отчетность',
      link: '/docs',
      active: page == 'Отчетность' ? true : false
    },
  ];
  
  const leftSide = [
    {
      indent: 'l',
      children: (<Logo><p className='text text_size_l text_weight_bold'>Программа бурения</p></Logo>)
    },
    {
      indent: 'l',
      children: <SearchBar placeholder={'Поиск'} label={'Поиск'} />
    },
    {
      indent: 'l',
      children: <Menu items={menuItems} />
    },
  ];
  
  const rightSide = [
    {
      indent: 's',
      children: (<IconButton><IconRing size={'m'} view={'secondary'} /></IconButton>)
    },
    {
      indent: 's',
      children: (<IconButton><IconBento size={'m'} view={'secondary'} /></IconButton>)
    },
    {
      indent: 's',
      children: (
        <Login
          isLogged
          personName={'Тихон Кувшинов'}
          personInfo={'Куратор программы'}
          personStatus={'active'}
          linkToPhoto={
            'https://pbs.twimg.com/profile_images/1150453787603156992/DoiKLDMY_400x400.png'
          }
        />
      ),
    },
  ];


  return (
    <Header leftSide={leftSide} rightSide={rightSide}></Header>
  );
}

TheHeader.propTypes = {
  page: PropTypes.string
};

export default TheHeader;
