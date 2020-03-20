import React from 'react';
import PropTypes from 'prop-types';

import { Text, Button, ChoiceGroup, IconAdd } from '@gpn-design/uikit';
import TheHeader from '../components/TheHeader/TheHeader';
import ProgrammList from '../components/ProgrammList/ProgrammList';
import TheFooter from '../components/TheFooter/TheFooter';

const filterItems = {
	types: [
		{
			value: 1,
			label: 'Все',
			checked: true,
		},
		{
			value: 2,
			label: 'Черновики',
		},
		{
			value: 3,
			label: 'Архивные',
		},
	],
	view: [
		{
			value: 1,
			label: 'Список',
			checked: true,
		},
		{
			value: 2,
			label: 'Карточки',
		},
	]
};

function AllProgrammsPage(props) {
	const {programmList} = props;

  return (
    <React.Fragment>
      <TheHeader page={`Программы`} />
      <div className='content content_view_centered decorator decorator_space-v_3xl'>
        <Text tag='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_2xl decorator_indent-t_none'>Программы</Text>
				<div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-b_2xl'>
					<div className='decorator decorator_distribute_left decorator_vertical-align_center'>
						<ChoiceGroup isMultiple={false} items={filterItems.types} wpSize='s' value={1} />
						<div className='decorator decorator_indent-l_l'>
							<Button isLink={true} wpSize='s' view='ghost' href='/draft-step-1' withIcon='left'>
								<IconAdd size={'s'} className={'button__icon'} />
								Новая программа
							</Button>
						</div>
					</div>
					<ChoiceGroup isMultiple={false} items={filterItems.view} wpSize='s' value={1} />
				</div>
        <ProgrammList programmList={programmList}></ProgrammList>
      </div>
			<TheFooter />
		</React.Fragment>
  );
}

ProgrammList.propTypes = {
  programmList: PropTypes.array.isRequired
};

export default AllProgrammsPage;
