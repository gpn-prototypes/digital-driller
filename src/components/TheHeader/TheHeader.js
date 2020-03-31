import React from 'react';
import { Header, Logo, SearchBar, Menu, Login, IconButton, IconRing } from '@gpn-design/uikit';

import './TheHeader.css';

function TheHeader(props) {
  const { page, role } = props;
  let user = {};

  if (role === 'curator') {
    user = {
      name: 'Тихон Кувшинов',
      role: 'Куратор программы',
      avatar: 'https://www.fotoprizer.ru/img_inf/st_139.jpg'
    }
  } else if (role === 'geologist') {
    user = {
      name: 'Анастасия Алёшина',
      role: 'Геолог',
      avatar: 'https://i.pinimg.com/originals/c2/be/d9/c2bed994a78321780b1d8d82d48b929d.jpg'
    }
  }

  const menuItems = [
    {
      name: 'Программы',
      link: '/',
      active: page === 'Программы' ? true : false
    },
    {
      name: 'База знаний',
      link: '/base',
      active: page === 'База знаний' ? true : false
    },
    {
      name: 'Отчетность',
      link: '/docs',
      active: page === 'Отчетность' ? true : false
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
      children: (
        <Login
          isLogged
          personName={user.name}
          personInfo={user.role}
          personStatus={'active'}
          linkToPhoto={user.avatar}
        />
      ),
    },
  ];


  return (
    <Header leftSide={leftSide} rightSide={rightSide}></Header>
  );
}

export default TheHeader;
