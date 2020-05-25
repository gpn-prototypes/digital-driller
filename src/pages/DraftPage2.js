import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '@gpn-design/uikit/Button';
import { Text } from '@gpn-design/uikit/Text';
import { IconForward } from '@gpn-design/uikit/IconForward';
import { IconBackward } from '@gpn-design/uikit/IconBackward';

import Content from '../components/Content/Content';
import TheHeader from '../components/TheHeader/TheHeader';
import TheFooter from '../components/TheFooter/TheFooter';
import SelectWrap from '../components/SelectWrap/SelectWrap';
import Field from '../components/Field/Field';
import Steps from '../components/Steps/Steps';

function DraftPage2() {
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
				<Steps steps={[{ name: 'Общая информация' }, { name: 'Конструкция скважины', active: true }, { name: 'Команда программы' }]} className='decorator decorator_indent-b_l' />
				
				<Text size='m' view='primary' className='decorator decorator_indent-b_2xl'>Опишите конструкцию скважины и деление по секциям. Так мы автоматически сможем подготовить специальные разделы в программе</Text>
			</Content>

      <Content size='full' centered={true}>
				<div className='content__main content__main_size_full'>
          <table className='table table_editable' style={{ width: '1000px' }}>
            <thead>
              <tr>
                <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Название</Text>
                <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Обсадная колонна</Text>
                <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '150px' }}>Глубина спуска по стволу</Text>
                <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '150px' }}>глубина спуска по вертикали</Text>
                <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '150px' }}>Интервал цементирования</Text>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td rowspan='2'>
                <SelectWrap size='m' view='clear' placeholder='Выберите значение' items={['Комбинированный кондуктор', 'Направляющая колонна', 'Кондукторная колонна', 'Профильный перекрыватель', 'Техническая колонна', 'Эксплуатационная колонна', 'Хвостовик']} />
                </td>
                <td>
                  <SelectWrap size='m' view='clear' placeholder='Выберите значение' items={['ОТТМ 530/324*9,5 «Д»', 'ОТТГ-324*9,5 мм «Д»', 'ОТТГ -244,5*8,9 мм «Д»', 'ОТТГ-178*10,4 «Е»', 'ОТТГ-178*9,2 «Д»', 'ОТТМ-114,3х7,4 / ФС-П 114 ОТТМ']} />
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' leftSide='от' rightSide='м' className='decorator decorator_indent-r_s' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' leftSide='до' rightSide='м' />
                  </div>
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' leftSide='от' rightSide='м' className='decorator decorator_indent-r_s' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' leftSide='до' rightSide='м' />
                  </div>
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' leftSide='от' rightSide='м' className='decorator decorator_indent-r_s' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' leftSide='до' rightSide='м' />
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan='4'><Button view='clear' size='s' withIcon='left' width='full' label='Добавить колонну' /></td>
              </tr>
              <tr>
                <td colspan='5'><Button view='clear' size='m' withIcon='left' width='full' label='Добавить секцию' /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Content>

      <Content size='s' centered={true}>
        <div className='decorator decorator_distribute_between decorator_indent-t_3xl'>
          <Button size='m' view='ghost' iconLeft={IconBackward} label='Назад'
            onClick={() => { history.push(`/digital-driller/draft-step-1`) }} />
          <div className='decorator decorator_distribute_between'>
            <Button size='m' view='ghost' label='Удалить'
              onClick={() => { history.push(`/digital-driller/main:false`) }} />
            <div className='decorator decorator_indent-l_m'>
              <Button size='m' view='primary' iconRight={IconForward} label='Дальше'
                onClick={() => { history.push(`/digital-driller/draft-step-3`) }} />
            </div>
          </div>
        </div>
			</Content>
			
			<TheFooter />
		</React.Fragment>
	);
};

export default DraftPage2;
