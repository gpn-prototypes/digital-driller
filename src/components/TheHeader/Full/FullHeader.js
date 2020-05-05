import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Text } from '@gpn-design/uikit/Text';
import { Header } from '@gpn-design/uikit/Header';
import { HeaderButton } from '@gpn-design/uikit/__internal__/cjs-src/components/Header/Button/Header-Button';
import { HeaderLogin } from '@gpn-design/uikit/__internal__/cjs-src/components/Header/Login/Header-Login';
import { HeaderLogo } from '@gpn-design/uikit/__internal__/cjs-src/components/Header/Logo/Header-Logo';
import { HeaderMenu } from '@gpn-design/uikit/__internal__/cjs-src/components/Header/Menu/Header-Menu';
import { HeaderSearchBar } from '@gpn-design/uikit/__internal__/cjs-src/components/Header/SearchBar/Header-SearchBar';
import { HeaderModule } from '@gpn-design/uikit/__internal__/cjs-src/components/Header/Module/Header-Module';
import { IconRing } from '@gpn-design/uikit/IconRing';
import { IconBento } from '@gpn-design/uikit/IconBento';

function FullHeader(props) {
  const { page, user } = props;
  const history = useHistory();
  const [value, setValue] = useState();
  const handleChange = ({ value }) => setValue(value);
  const handleSearch = ({ value }) => console.log(`Поиск...`);

  const menuItems = [
    {
      label: 'Программы',
      onClick: () => history.push('/digital-driller/main:false'),
      active: page === 'Программы' ? true : false
    },
    {
      label: 'Изученные уроки',
      // onClick: () => history.push('/digital-driller/main'),
      active: page === 'Изученные уроки' ? true : false
    },
    {
      label: 'Отчетность',
      // onClick: () => alert('Какой-то пункт'),
      active: page === 'Отчетность' ? true : false
    },
  ];

  return (
    <Header
      className=''
      leftSide={
        <React.Fragment>
          <HeaderModule>
            <HeaderLogo>
              <Text size="l" weight="bold">Программа бурения</Text>
            </HeaderLogo>
          </HeaderModule>
          <HeaderModule indent="l">
            <HeaderSearchBar
              placeholder="Поиск"
              label="поиск"
              value={value}
              onChange={handleChange}
              onSearch={handleSearch}
            />
          </HeaderModule>
          <HeaderModule indent="l">
            <HeaderMenu items={menuItems} />
          </HeaderModule>
        </React.Fragment>
      }
      rightSide={
        <React.Fragment>
          <HeaderModule>
            <HeaderButton iconLeft={IconRing} />
          </HeaderModule>
          <HeaderModule>
            <HeaderButton iconLeft={IconBento} />
          </HeaderModule>
          <HeaderModule indent="m">
            <HeaderLogin
              isLogged={true}
              personName={user.name}
              personInfo={user.role}
              personStatus="available"
              personAvatarUrl={user.avatar}
              onClick={ () => history.push('/digital-driller/') }
            />
          </HeaderModule>
        </React.Fragment>
      }
    />
  );
}

export default FullHeader;
