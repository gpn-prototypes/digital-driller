import React from 'react';

import { Text, ChoiceGroup } from '@gpn-design/uikit';
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

function GeologistProgrammsPage(props) {
	const { programmList } = props;
	
	let geologistProgramms = [];
	programmList.forEach(item => {
		if (item.curator === 'Тихон Кувшинов' || item.curator === 'Яснов Никита')
		geologistProgramms.push(item)
	});

	return (
		<div className='content-page'>
			<TheHeader page={`Программы`} role='Геолог' />
			<div className='content content_view_centered decorator decorator_space-v_3xl'>
				<Text tag='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_2xl decorator_indent-t_none'>Программы</Text>
				<div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-b_2xl'>
					<ChoiceGroup isMultiple={false} items={filterItems.types} size='s' value={1} />
					<ChoiceGroup isMultiple={false} items={filterItems.view} size='s' value={1} />
				</div>
				<ProgrammList programmList={geologistProgramms} role='geologist'></ProgrammList>
			</div>
			<TheFooter />
		</div>
	);
}

export default GeologistProgrammsPage;
