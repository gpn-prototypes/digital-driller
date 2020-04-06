import React from 'react';
import { TextField, Button, IconSearch, IconRing, User, Text } from '@gpn-design/uikit';
import SavingStatus from '../../components/SavingStatus/SavingStatus';

import './TheHeader.css';

import { team } from '../../mocks/team';

function TheHeader(props) {
  const { page, role, isMinified, programmName } = props;
  const user = team.filter(member => member.role === role)[0];
  
  const showShackbar = () => {
    let snackbar = document.querySelector('.snackbar#savedProgrammSnackbar');
    snackbar.classList.add('snackbar_visible');

    setTimeout(() => {
      snackbar.classList.remove('snackbar_visible');
    }, 6000);
  };

  if (isMinified)
    return (
      <header className='header'>
        <div className='header__left-side'>
          <div className='header__module header__module_indent_l decorator decorator_distribute_left decorator_vertical-align_center'>
            <a className='logo' href={role === 'Куратор' ? '/curator/list:false' : '/geologist/list'}>
              <p className='text text_size_l text_weight_bold'>Программа бурения</p>
            </a>
            <Text size='s' view='ghost' display='inline-block' className='decorator decorator_indent-h_s'>/</Text>
            <Text size='s' view='primary' display='inline'>{programmName}</Text>
          </div>
        </div>
        
        <div className='header__right-side'>
          <div className='header__module header__module_indent_m'>
            <SavingStatus />
          </div>

          <div className='header__module header__module_indent_m'>
            <Button size='s' view='primary' label='Сохранить черновик' onClick={showShackbar} />
          </div>

          <div className='header__module header__module_indent_s'>
            <Button size='m' view='clear' form='round' iconOnly={true} iconLeft={IconRing} />
          </div>
          
          <div className='header__module header__module_indent_s'>
            <User as='a' href='/' view='clear' size='m' status='available' avatarUrl={user.avatar} name={user.name} info={user.role} />
          </div>
        </div>
      </header>
    );
  else
    return (
      <header className='header'>
        <div className='header__left-side'>
          <div className='header__module header__module_indent_l'>
            <a className='logo' href={role === 'Куратор' ? '/curator/list:false' : '/geologist/list'}>
              <p className='text text_size_l text_weight_bold'>Программа бурения</p>
            </a>
          </div>
          
          <div className='header__module header__module_indent_l'>
            <form className='search-bar'>
              <TextField width='full' size='m' type='text' placeholder='Я ищу' className='search-bar__input' name='main-search' />
              <Button size='s' view='clear' iconOnly={true} iconLeft={IconSearch} className='search-bar__button' />
            </form>
          </div>
          
          <div className='header__module header__module_indent_l'>
            <nav className='menu'>
              <ul className='menu__list'>
                <li className='menu__item'>
                  <a className={page === 'Программы' ? 'menu__link menu__link_active' : 'menu__link'} href={role=== 'Куратор' ? '/curator/list:false' : '/geologist/list:false'}>Программы</a>
                </li>
                <li className='menu__item'>
                  <a className={page === 'База знаний' ? 'menu__link menu__link_active' : 'menu__link'}>База знаний</a>
                </li>
                <li className='menu__item'>
                  <a className={page === 'Отчетность' ? 'menu__link menu__link_active' : 'menu__link'}>Отчетность</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className='header__right-side'>
          <div className='header__module header__module_indent_s'>
            <Button size='m' view='clear' form='round' iconOnly={true} iconLeft={IconRing} />
          </div>
          
          <div className='header__module header__module_indent_s'>
            <User as='a' href='/' view='clear' size='m' status='available' avatarUrl={user.avatar} name={user.name} info={user.role} />
          </div>
        </div>
      </header>
    );
}

export default TheHeader;
