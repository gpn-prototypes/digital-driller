import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Badge } from '@gpn-design/uikit/Badge';
import { Button } from '@gpn-design/uikit/Button';
import { Text } from '@gpn-design/uikit/Text';
import { IconAdd } from '@gpn-design/uikit/IconAdd';
import { IconBackward } from '@gpn-design/uikit/IconBackward';
import { IconTrash } from '@gpn-design/uikit/IconTrash';

import Content from '../components/Content/Content';
import TheHeader from '../components/TheHeader/TheHeader';
import TheFooter from '../components/TheFooter/TheFooter';
import SelectWrap from '../components/SelectWrap/SelectWrap';
import Steps from '../components/Steps/Steps';

function DraftPage3() {
  const history = useHistory();
	const [newUserList, setNewUserList] = useState([{ value: '' }]);
	
  const controlUser = (e, index) => {
		let userList = newUserList;

		if(index >= 0) {
			userList.splice(index, 1);
			userList = [...userList]
		} else
			userList = [{ }, ...newUserList];
			
		setNewUserList(userList);
		e.preventDefault();
		e.stopPropagation();
  }
  
  const getNewUser = (index) => {
    return (
			<div className='FpbForm__row FpbForm__row_with-buttons' key={index}>
				<div className='FpbForm__buttons'>
					<Button onlyIcon={true} view='ghost' iconLeft={IconAdd} onClick={ (e) => { controlUser(e) } } />
					
					{ newUserList.length > 1 ?
						<Button onlyIcon={true} view='ghost' iconLeft={IconTrash} onClick={ (e) => { controlUser(e, index) } } />
					: ''}
				</div>

        <div className='FpbForm__item FpbForm__item_width_half'>
          <Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Компания</Text>
          <SelectWrap size='m' items={['ООО «БКЕ»', 'ООО "ПетроТул"', 'ООО "ЭНГС"', 'ООО "СПС"', 'Халлибуртон Интернэшнл ГмбХ', 'ООО "НьюТек Сервисез"', 'ООО "Везерфорд"']} />
        </div>
        
        <div className='FpbForm__item FpbForm__item_width_half'>
          <Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Ответственный</Text>
          <SelectWrap size='m' items={['Фёдор Савенко', 'Абрам Дьячков', 'Ирина Уварова', 'Элла Чикольба', 'Егор Корнейчук', 'Лилия Лебедева', 'Денис Беляков']} />
        </div>
        
        { newUserList.length > 1 ?
          <div className='FpbForm__item FpbForm__item_width_half'>
            <Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Секция</Text>
            <SelectWrap size='m' items={['Комбинированный кондуктор', 'Техническая колонна', 'Эксплуатационная колонна', 'Хвостовик']} />
          </div> : ''
        }
      </div>);
	}

	return (
		<React.Fragment>
			<TheHeader page={`Программы`} />
			
			<Content size='s' centered={true}>
				{/* Заголовок страницы */}
				<Text as='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_2xl decorator_indent-t_none'>
					Новая программа
				</Text>
				
				{/* Форма */}
				<Steps steps={[{ name: 'Общая информация' }, { name: 'Конструкция скважины' }, { name: 'Команда программы', active: true }]} className='decorator decorator_indent-b_l' />
				
				<Text size='m' view='primary' className='decorator decorator_indent-b_2xl'>Укажите ответственных за каждый раздел программы. Мы будем оповещать этих людей об изменениях в программе и напоминать о заполнении или согласовании</Text>
				
				<form className='FpbForm'>
          <div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-t_2xl decorator_indent-b_l'>
					  <Text as='h3' size='xl' view='primary' weight='regular'>Геологический раздел</Text>
            <Badge size='s' view='stroked' status='system' label='подготовить до 10.08.2020' />
          </div>
					<div className='FpbForm__row'>
						<div className='FpbForm__item FpbForm__item_width_half'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Компания</Text>
							<SelectWrap size='m' disabled={true} items={['ПАО «Газпром нефть', 'ООО «БКЕ»', 'ООО "ПетроТул"', 'ООО "ЭНГС"', 'ООО "СПС"', 'Халлибуртон Интернэшнл ГмбХ', 'ООО "НьюТек Сервисез"', 'ООО "Везерфорд"']} />
						</div>
						
            <div className='FpbForm__item FpbForm__item_width_half'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Ответственный</Text>
							<SelectWrap size='m' items={['Анастасия Алёшина', 'Дина Наумова', 'Валентина Спивак', 'Татьяна Сусаренко', 'Софья Миклашевска', 'Лилия Коновалова', 'Геннадий Воронов', 'Фёдор Батейко', 'Егор Киселёв', 'Харитон Гаврилов', 'Богдан Ершов', 'Марк Зимин', 'Тимур Алчевский']} />
						</div>
					</div>
          
          <div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-t_2xl decorator_indent-b_l'>
					  <Text as='h3' size='xl' view='primary' weight='regular'>Бурение</Text>
            <Badge size='s' view='stroked' status='system' label='подготовить до 10.08.2020' />
          </div>
					<div className='FpbForm__row'>
						<div className='FpbForm__item FpbForm__item_width_half'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Компания</Text>
							<SelectWrap size='m' items={['ООО «БКЕ»', 'ООО "ПетроТул"', 'ООО "ЭНГС"', 'ООО "СПС"', 'Халлибуртон Интернэшнл ГмбХ', 'ООО "НьюТек Сервисез"', 'ООО "Везерфорд"']} />
						</div>
						
            <div className='FpbForm__item FpbForm__item_width_half'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Ответственный</Text>
							<SelectWrap size='m' items={['Дмитрий Ореховский', 'Инга Козлова', 'Захар Кравченко', 'Тимур Калашников', 'Нина Константинова', 'Марат Исаев', 'Юлий Дмитриев']} />
						</div>
					</div>
          
          <div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-t_2xl decorator_indent-b_l'>
					  <Text as='h3' size='xl' view='primary' weight='regular'>ННБ</Text>
            <Badge size='s' view='stroked' status='system' label='подготовить до 10.08.2020' />
          </div>
					<div className='FpbForm__row'>
						<div className='FpbForm__item FpbForm__item_width_half'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Компания</Text>
							<SelectWrap size='m' items={['ООО «БКЕ»', 'ООО "ПетроТул"', 'ООО "ЭНГС"', 'ООО "СПС"', 'Халлибуртон Интернэшнл ГмбХ', 'ООО "НьюТек Сервисез"', 'ООО "Везерфорд"']} />
						</div>
						
            <div className='FpbForm__item FpbForm__item_width_half'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Ответственный</Text>
							<SelectWrap size='m' items={['Оксана Романова', 'Пётр Савенко', 'Полина Зиновьева', 'Регина Пономарёва', 'Олег Кобзарь', 'Ева Кириленко', 'Адам Моисеев']} />
						</div>
					</div>
          
          <div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-t_2xl decorator_indent-b_l'>
					  <Text as='h3' size='xl' view='primary' weight='regular'>Буровые растворы</Text>
            <Badge size='s' view='stroked' status='system' label='подготовить до 10.08.2020' />
          </div>
					<div className='FpbForm__row'>
						<div className='FpbForm__item FpbForm__item_width_half'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Компания</Text>
							<SelectWrap size='m' items={['ООО «БКЕ»', 'ООО "ПетроТул"', 'ООО "ЭНГС"', 'ООО "СПС"', 'Халлибуртон Интернэшнл ГмбХ', 'ООО "НьюТек Сервисез"', 'ООО "Везерфорд"']} />
						</div>
						
            <div className='FpbForm__item FpbForm__item_width_half'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Ответственный</Text>
							<SelectWrap size='m' items={['Никита Соболев', 'Валерия Кириллова', 'Георгий Степанов', 'Осип Афанасьев', 'Алёна Фролова', 'Осип Кравченко', 'Регина Голубева']} />
						</div>
					</div>
          
          <div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-t_2xl decorator_indent-b_l'>
					  <Text as='h3' size='xl' view='primary' weight='regular'>Долота</Text>
            <Badge size='s' view='stroked' status='system' label='подготовить до 10.08.2020' />
          </div>
					<div className='FpbForm__row'>
						<div className='FpbForm__item FpbForm__item_width_half'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Компания</Text>
							<SelectWrap size='m' items={['ООО «БКЕ»', 'ООО "ПетроТул"', 'ООО "ЭНГС"', 'ООО "СПС"', 'Халлибуртон Интернэшнл ГмбХ', 'ООО "НьюТек Сервисез"', 'ООО "Везерфорд"']} />
						</div>
						
            <div className='FpbForm__item FpbForm__item_width_half'>
							<Text tag='label' size='m' view='secondary' display='block' className='FpbForm__label'>Ответственный</Text>
							<SelectWrap size='m' items={['Тимофей Гайчук', 'Екатерина Кудрявцева', 'Леон Савельев', 'Ярослав Соболев', 'Мария Егорова', 'Варвара Трублаевска', 'Филипп Корнейчук']} />
						</div>
					</div>
          
          <div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-t_2xl decorator_indent-b_l'>
					  <Text as='h3' size='xl' view='primary' weight='regular'>Цементирование</Text>
            <Badge size='s' view='stroked' status='system' label='подготовить до 10.08.2020' />
          </div>
          {/* TODO: добавление еще одного ответственного */}
          { newUserList.map((item, index) => getNewUser(index)) }

					<div className='decorator decorator_distribute_between decorator_indent-t_3xl'>
            <Button size='m' view='ghost' iconLeft={IconBackward} label='Назад'
              onClick={() => { history.push(`/digital-driller/draft-step-2`) }} />
            <div className='decorator decorator_distribute_between'>
              <Button size='m' view='ghost' label='Удалить'
                onClick={() => { history.push(`/digital-driller/main`) }} />
              <div className='decorator decorator_indent-l_m'>
                <Button size='m' view='primary' label='Создать программу'
                  onClick={() => { history.push(`/digital-driller/main`) }} />
              </div>
            </div>
          </div>
				</form>
			</Content>
			
			<TheFooter />
		</React.Fragment>
	);
};

export default DraftPage3;
