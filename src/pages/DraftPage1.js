import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '@gpn-design/uikit/Button';
import { Text } from '@gpn-design/uikit/Text';
import { IconCalendar } from '@gpn-design/uikit/IconCalendar';
import { IconForward } from '@gpn-design/uikit/IconForward';

import Content from '../components/Content/Content';
import TheHeader from '../components/TheHeader/TheHeader';
import TheFooter from '../components/TheFooter/TheFooter';
import SelectWrap from '../components/SelectWrap/SelectWrap';
import Field from '../components/Field/Field';
import Steps from '../components/Steps/Steps';

function DraftPage1() {
	const history = useHistory();

	return (
		<React.Fragment>
			<TheHeader page={`Программы`} />
			
			<Content size='s' centered={true}>
				{/* Заголовок страницы */}
				<Text as='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_2xl decorator_indent-t_none'>
					Новая программа
				</Text>
				
				{/* Форма */}
				<Steps steps={[{ name: 'Общая информация', active: true }, { name: 'Конструкция скважины' }, { name: 'Команда программы' }]} className='decorator decorator_indent-b_l' />
				
				<Text size='m' view='primary' className='decorator decorator_indent-b_2xl'>Опишите общую информацию о скважине, чтобы мы выбрали необходимые разделы программы и составили структуру</Text>
				
				<form className='FpbForm'>	
					<Text as='h3' size='xl' view='primary' weight='regular' className='decorator decorator_indent-t_2xl decorator_indent-b_l'>О скважине</Text>
					
					<div className='FpbForm__row'>
						<div className='FpbForm__item FpbForm__item_width_half'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Назначение скважины</Text>
							<SelectWrap size='m' placeholder='Выберите значение' items={['Структурно-поисковая', 'Разведочная', 'Эксплуатационная', 'Опережающая добывающая', 'Нагнетательная', 'Оценочная', 'Утилизационная']} />
						</div>

						<div className='FpbForm__item FpbForm__item_width_quarter'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Тип скважины</Text>
							<SelectWrap size='m' placeholder='Выберите значение' items={['ГС 1000', 'ГС 1290']} />
						</div>

						<div className='FpbForm__item FpbForm__item_width_quarter'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Индекс сложности</Text>
							<Field size='m' type='number' placeholder='0' rightSide='DDI' width='full' />
						</div>
					</div>

					<Text as='h3' size='xl' view='primary' weight='regular' className='decorator decorator_indent-t_2xl decorator_indent-b_l'>Расположение</Text>
					
					<div className='FpbForm__row'>
						<div className='FpbForm__item FpbForm__item_width_half'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Месторождение</Text>
							<SelectWrap size='m' disabled={true} items={['Новопортовское', 'Оренбургское', 'Царичанское', 'Арчинское', 'Ореховское', 'Пальяновская', 'Приобское', 'Валынтойское', 'В-Пякутинское', 'Вынгапуровское', 'З-Чатылькинская', 'В-Мессояхское', 'Тазовское']} />
						</div>

						<div className='FpbForm__item FpbForm__item_width_quarter'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Куст</Text>
							<SelectWrap size='m' items={['10', '12', '18', '30']} />
						</div>

						<div className='FpbForm__item FpbForm__item_width_quarter'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Скважина</Text>
							<SelectWrap size='m' placeholder='Выберите значение' items={['5238', '482', '12/56', '38/49']} />
						</div>
					</div>
					<div className='FpbForm__row'>
						<div className='FpbForm__item FpbForm__item_width_three-quarter'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Нулевая отметка</Text>
							<Field size='m' type='text' width='full' />
						</div>

						<div className='FpbForm__item FpbForm__item_width_quarter'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Передвижка БУ на</Text>
							<Field size='m' type='number' placeholder='0' rightSide='м' width='full' />
						</div>
					</div>
					<div className='FpbForm__row'>
						<div className='FpbForm__item FpbForm__item_width_full'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Плановая альтитуда нулевой отметки</Text>
							<div className='decorator decorator_distribute_left'>
								<Field size='m' type='text' form='defaultClear' placeholder='0' leftSide='От уровня моря' rightSide='м' width='full' />
								<Field size='m' type='text' form='brickDefault' placeholder='0' leftSide='От уровня земли' rightSide='м' width='full' />
							</div>
						</div>
					</div>
					<div className='FpbForm__row'>
						<div className='FpbForm__item FpbForm__item_width_full'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Географические координаты устья скважины</Text>
							<div className='decorator decorator_distribute_left'>
								<Field size='m' form='defaultClear' type='text' placeholder='00° 00′ 00' rightSide='N' className='FpbForm__control' />
								<Field size='m' form='brickClear' type='text' placeholder='00° 00′ 00' rightSide='E' className='FpbForm__control' />
								<Field width='full' size='m' form='brickDefault' type='text' placeholder='0' leftSide='Z:' rightSide='м' className='FpbForm__control' />
							</div>
						</div>
					</div>
					<div className='FpbForm__row'>
						<div className='FpbForm__item FpbForm__item_width_full'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Географические координаты точки Т2</Text>
							<div className='decorator decorator_distribute_left'>
								<Field size='m' form='defaultClear' type='text' placeholder='00° 00′ 00' rightSide='N' className='FpbForm__control' />
								<Field size='m' form='brickClear' type='text' placeholder='00° 00′ 00' rightSide='E' className='FpbForm__control' />
								<Field width='full' size='m' form='brickDefault' type='text' placeholder='0' leftSide='Z:' rightSide='м' className='FpbForm__control' />
							</div>
						</div>
					</div>
					<div className='FpbForm__row'>
						<div className='FpbForm__item FpbForm__item_width_full'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Географические координаты точки Т3</Text>
							<div className='decorator decorator_distribute_left'>
								<Field size='m' form='defaultClear' type='text' placeholder='00° 00′ 00' rightSide='N' className='FpbForm__control' />
								<Field size='m' form='brickClear' type='text' placeholder='00° 00′ 00' rightSide='E' className='FpbForm__control' />
								<Field width='full' size='m' form='brickDefault' type='text' placeholder='0' leftSide='Z:' rightSide='м' className='FpbForm__control' />
							</div>
						</div>
					</div>
					
					<Text as='h3' size='xl' view='primary' weight='regular' className='decorator decorator_indent-t_2xl decorator_indent-b_l'>Характеристики пласта</Text>

					<div className='FpbForm__row'>
						<div className='FpbForm__item FpbForm__item_width_third'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Проектный пласт</Text>
							<SelectWrap size='m' placeholder='Выберите значение' items={['НП 5', 'НП 6', 'НП 7', 'НП 8', 'НП 9']} />
						</div>

						<div className='FpbForm__item FpbForm__item_width_third'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Давление</Text>
							<Field size='m' type='number' placeholder='0' rightSide='МПа' width='full' />
						</div>

						<div className='FpbForm__item FpbForm__item_width_third'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Температура</Text>
							<Field size='m' type='number' placeholder='0' rightSide='°С' width='full' />
						</div>
					</div>
					<div className='FpbForm__row'>
						<div className='FpbForm__item FpbForm__item_width_third'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Магнитное склонение</Text>
							<Field size='m' type='number' placeholder='0' rightSide='°' width='full' />
						</div>

						<div className='FpbForm__item FpbForm__item_width_third'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Схождение меридианов</Text>
							<Field size='m' type='number' placeholder='0' rightSide='°' width='full' />
						</div>

						<div className='FpbForm__item FpbForm__item_width_third'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Магнитная поправка</Text>
							<Field size='m' type='number' placeholder='0' rightSide='°' width='full' />
						</div>
					</div>
					
					<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Начало бурения</Text>
					<div className='decorator decorator_distribute_left decorator_indent-b_2xl'>
						<Field size='m' placeholder='10.05.2020' rightSide={IconCalendar} width='date' />
						<Text size='s' view='ghost' lineHeight='s' className='decorator decorator_indent-l_s' style={{ width: '50ch' }}>Дедлайны для заполнения разделов программы высчитаются автоматически</Text>
					</div>

					<div className='decorator decorator_distribute_right decorator_indent-t_5xl'>
						<Button size='m' view='ghost' label='Удалить'
							onClick={() => { history.push(`/digital-driller/main:false`) }} />
						<div className='decorator decorator_indent-l_m'>
							<Button size='m' view='primary' iconRight={IconForward} label='Дальше'
								onClick={() => { history.push(`/digital-driller/draft-step-2`) }} />
						</div>
					</div>
				</form>
			</Content>
			
			<TheFooter />
		</React.Fragment>
	);
};

export default DraftPage1;
