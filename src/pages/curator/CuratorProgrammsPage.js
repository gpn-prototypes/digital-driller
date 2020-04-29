import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Text } from '@gpn-design/uikit/Text';
import { Button } from '@gpn-design/uikit/Button';
import { ChoiceGroup } from '@gpn-design/uikit/ChoiceGroup';
import { IconAdd } from '@gpn-design/uikit/IconAdd';
import { IconBento } from '@gpn-design/uikit/IconBento';
import { IconHamburger } from '@gpn-design/uikit/IconHamburger';
import TheHeader from '../../components/TheHeader/TheHeader';
import ProgrammList from '../../components/ProgrammList/ProgrammList';
import TheFooter from '../../components/TheFooter/TheFooter';
import Snackbar from '../../components/Snackbar/Snackbar';

function CuratorProgrammsPage(props) {
	const { programmList } = props;
	const history = useHistory();
	let { isNew } = useParams();
	
	const programmFilterLabels = [{ name: 'Только мои' }, { name: 'Всего отдела' }, { name: 'Завершенные' }];
	const [programmFilter, setProgrammFilter] = useState([programmFilterLabels[0]]);
	
	const programmViewLabels = [{ icon: IconBento, name: 'Карточки' }, { icon: IconHamburger, name: 'Список' }];
	const [programmView, setProgrammView] = useState([programmViewLabels[0]]);

	return (
		<React.Fragment>
			<TheHeader page={`Программы`} role='Куратор' />
			<div className='content content_view_centered decorator decorator_space-v_3xl'>
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
							onChange={({ value }) => setProgrammFilter(value)}
							name="ProgrammFilter"
						/>
						
						<div className='decorator decorator_indent-l_l'>
							<Button size='s' view='ghost' iconLeft={IconAdd} label='Новая программа'
								onClick={() => { history.push(`/digital-driller/curator/draft-step-1`) }} />
						</div>
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
						onChange={({ value }) => setProgrammView(value)}
						name="ProgrammView"
					/>
				</div>
				
				{/* Программы */}
				<ProgrammList programmList={programmList} role='curator'></ProgrammList>
			</div>
			<TheFooter />

			<Snackbar message='Программа создана. Уведомления ответственным уже отправлены' id='newProgrammSnackbar' className={isNew === ':true' ? 'snackbar_visible' : ''} />
		</React.Fragment>
	);
};

export default CuratorProgrammsPage;
