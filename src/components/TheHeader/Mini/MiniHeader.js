import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Text } from '@gpn-design/uikit/Text';
import { Header } from '@gpn-design/uikit/Header';
import { HeaderButton } from '@gpn-design/uikit/__internal__/cjs-src/components/Header/Button/Header-Button';
import { HeaderLogin } from '@gpn-design/uikit/__internal__/cjs-src/components/Header/Login/Header-Login';
import { HeaderLogo } from '@gpn-design/uikit/__internal__/cjs-src/components/Header/Logo/Header-Logo';
import { HeaderModule } from '@gpn-design/uikit/__internal__/cjs-src/components/Header/Module/Header-Module';
import { IconRing } from '@gpn-design/uikit/IconRing';
import { IconBento } from '@gpn-design/uikit/IconBento';
import { Button } from '@gpn-design/uikit/Button';
import SavingStatus from '../../SavingStatus/SavingStatus';
import Snackbar from '../../Snackbar/Snackbar';

function MiniHeader(props) {
  const { user, programmName } = props;
  const history = useHistory();
  const [snackbar, setSnackbar] = useState(false);
  
  const showShackbar = () => {
    setSnackbar(true);
    setTimeout(() => {
      setSnackbar(false);
    }, 6000);
  }

  return (
    <React.Fragment>
      <Header
        className=''
        leftSide={
          <React.Fragment>
            <HeaderModule className='decorator decorator_distribute_left'>
              <HeaderLogo>
                <Text size="l" weight="bold">Программа бурения</Text>
              </HeaderLogo>
              <Text size='m' view='ghost' className='decorator decorator_indent-h_m'>/</Text>
              <Text size='m' view='primary'>{programmName}</Text>
            </HeaderModule>
          </React.Fragment>
        }
        rightSide={
          <React.Fragment>
            <HeaderModule>
              <SavingStatus />
            </HeaderModule>
            <HeaderModule indent="m">
              <Button size='s' view='ghost' label='Сохранить' onClick={ showShackbar } />
            </HeaderModule>
            <HeaderModule indent="m">
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
      <Snackbar message='Программа сохранена' visible={ snackbar ? true : false }  />
    </React.Fragment>
  );
}

export default MiniHeader;
