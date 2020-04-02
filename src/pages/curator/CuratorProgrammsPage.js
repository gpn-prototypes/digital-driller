import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { Text, Button, ChoiceGroup, IconAdd } from '@gpn-design/uikit';
import TheHeader from '../../components/TheHeader/TheHeader';
import ProgrammList from '../../components/ProgrammList/ProgrammList';
import TheFooter from '../../components/TheFooter/TheFooter';

const filterItems = {
	types: [
		{
			value: 1,
			label: 'Все'
		},
		{
			value: 2,
			label: 'Черновики',
		},
		{
			value: 3,
			label: 'Завершенные',
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

function CuratorProgrammsPage(props) {
	const { programmList } = props;
	let { isNew } = useParams();
	console.log(isNew);

	return (
		<div className='content-page'>
			<TheHeader page={`Программы`} role='Куратор' />
			<div className='content content_view_centered decorator decorator_space-v_3xl'>
				<Text tag='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_2xl decorator_indent-t_none'>Программы</Text>
				<div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-b_2xl'>
					<div className='decorator decorator_distribute_left decorator_vertical-align_center'>
						<ChoiceGroup isMultiple={false} items={filterItems.types} size='s' value={1} />
						<div className='decorator decorator_indent-l_l'>
							<Button as='a' size='m' view='ghost' href='/curator/draft-step-1' iconLeft={IconAdd} label='Новая программа' />
						</div>
					</div>
					<ChoiceGroup isMultiple={false} items={filterItems.view} size='s' value={1} />
				</div>
				<ProgrammList programmList={programmList} role='curator'></ProgrammList>
			</div>
			<TheFooter />
		</div>
	);
}

ProgrammList.propTypes = {
  programmList: PropTypes.array.isRequired
};

export default CuratorProgrammsPage;
