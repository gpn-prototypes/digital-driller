import React, { useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { RoleContext } from '../context/ProjectContext';

import { Button } from '@gpn-design/uikit/Button';
import { ChoiceGroup } from '@gpn-design/uikit/ChoiceGroup';
import { Text } from '@gpn-design/uikit/Text';
import { IconAdd } from '@gpn-design/uikit/IconAdd';
import { IconBento } from '@gpn-design/uikit/IconBento';
import { IconHamburger } from '@gpn-design/uikit/IconHamburger';

import Content from '../components/Content/Content';
import TheHeader from '../components/TheHeader/TheHeader';
import TheFooter from '../components/TheFooter/TheFooter';
import ProgrammList from '../components/ProgrammList/ProgrammList';
import ProgrammCards from '../components/ProgrammCards/ProgrammCards';
import Snackbar from '../components/Snackbar/Snackbar';

import programmList from '../mocks/programmList.js';

function MainPage() {
	const history = useHistory();
	const { newprogramm } = useParams();
	const { role } = useContext(RoleContext);
	const allProgrammList = programmList.filter(item => item.stage !== 'Завершено');
	const doneProgrammList = programmList.filter(item => item.stage === 'Завершено');
	let myProgrammList;

	if(role === 'Куратор')
		myProgrammList = programmList.filter(item => item.curator === 'Тихон Кувшинов');
	else
		myProgrammList = programmList.filter(item => item.geologist === 'Анастасия Алёшина');
	myProgrammList = myProgrammList.filter(item => item.stage !== 'Завершено');

	const [filteredProgrammList, setFilteredProgrammList] = useState(myProgrammList);
	const [choosedProgrammView, setChoosedProgrammView] = useState('Карточки');
	
	const programmFilterLabels = role === 'Куратор' ? [{ name: 'Только мои' }, { name: 'Всего отдела' }, { name: 'Завершенные' }] : [{ name: 'Активные' }, { name: 'Завершенные' }];
	const [programmFilter, setProgrammFilter] = useState([programmFilterLabels[0]]);
	
	const changeProgrammFilter = (value) => {
		setProgrammFilter(value);
		
		if(value[0].name === 'Только мои' || value[0].name === 'Активные')
			setFilteredProgrammList(myProgrammList);
		else if(value[0].name === 'Всего отдела')
			setFilteredProgrammList(allProgrammList);
		else if(value[0].name === 'Завершенные')
			setFilteredProgrammList(doneProgrammList);
	}
	
	const programmViewLabels = [{ icon: IconBento, name: 'Карточки' }, { icon: IconHamburger, name: 'Список' }];
	const [programmView, setProgrammView] = useState([programmViewLabels[0]]);

	const changeProgrammView = (value) => {
		setProgrammView(value);
		setChoosedProgrammView(value[0].name);
	}

	return (
		<React.Fragment>
			<TheHeader page={`Программы`} />
			
			<Content size={ choosedProgrammView === 'Список' ? 'm' : 'l' } centered={true}>
				{/* Заголовок страницы */}
				<Text as='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_2xl decorator_indent-t_none'>
					Программы
					<Text as='span' size='3xl' weight='regular' view='ghost'> / Новопортовское</Text>
				</Text>
				
				{/* Фильтры */}
				<div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-b_2xl'>
					<div className='decorator decorator_distribute_left decorator_vertical-align_center'>
						<ChoiceGroup
							view="ghost"
							size="s"
							items={programmFilterLabels}
							value={programmFilter}
							getItemKey={(item) => item.name}
							getItemLabel={(item) => item.name}
							onChange={({ value }) => changeProgrammFilter(value)}
							name="ProgrammFilter"
						/>
						
						{ role === 'Куратор' ?
							<div className='decorator decorator_indent-l_l'>
								<Button size='s' view='ghost' iconLeft={IconAdd} label='Новая программа'
									onClick={() => { history.push(`/digital-driller/draft-step-1`) }} />
							</div> : ''
						}
					</div>
					<ChoiceGroup
						view="ghost"
						size="s"
						onlyIcon={true}
						items={programmViewLabels}
						value={programmView}
						getItemKey={(item) => item.name}
						getItemLabel={(item) => item.name}
						getItemIcon={(item) => item.icon}
						onChange={({ value }) => changeProgrammView(value)}
						name="ProgrammView"
					/>
				</div>
				
				{/* Программы */}
				{ choosedProgrammView === 'Список' ? <ProgrammList programmList={filteredProgrammList}></ProgrammList> : '' }
				{ choosedProgrammView === 'Карточки' ? <ProgrammCards programmList={filteredProgrammList}></ProgrammCards> : '' }
			</Content>
			<TheFooter />
			
			{ newprogramm === ':true' ?
				<Snackbar message='Программа бурения создана. Уведомления ответственным уже отправлены' visible={true} />
			: ''}
		</React.Fragment>
	);
};

export default MainPage;
