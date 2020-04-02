import React from 'react';
import { Text, Button, IconForward, TextField, IconCalendar } from '@gpn-design/uikit';
import TheHeader from '../../components/TheHeader/TheHeader';
import TheFooter from '../../components/TheFooter/TheFooter';

function CuratorDraftPage1() {
  return (
    <div className='content-page'>
      <TheHeader role='Куратор' />
      <div className='content decorator decorator_space-v_3xl'>
        <div className='content__main'>
          <Text tag='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_s decorator_indent-t_none'>Создание программы</Text>
          <Text tag='p' size='m' view='primary' className='decorator decorator_indent-b_2xl decorator_indent-t_none'>Опишите общую информацию о скважине, чтобы мы выбрали необходимые разделы программы и составили структуру</Text>
          <form className='pt-form pt-form_space-v_xs pt-form_vertical-align_top pt-form_structure_40-60'>
            <Text tag='h3' size='xl' view='primary' weight='regular' className='decorator decorator_indent-b_s decorator_indent-t_none'>Общая информация о скважине</Text>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Месторождение</Text>
              <TextField width='full' size='m' type='text' placeholder='Выберите месторождение' value='Оренбургское' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Кустовая площадь</Text>
              <TextField width='full' size='m' type='text' placeholder='Выберите кустовую площадь' value='14' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Куст</Text>
              <TextField width='full' size='m' type='text' placeholder='Выберите куст' value='10' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Номер скважины</Text>
              <TextField width='full' size='m' type='text'  placeholder='Выберите скважину' value='5238' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Назначение скважины</Text>
              <TextField width='full' size='m' type='text' placeholder='Выберите назначение скважины' value='Эксплуотационная' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Тип скважины</Text>
              <TextField width='full' size='m' type='text' placeholder='Выберите тип скважины' value='ГС 1000' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Индекс сложности скважины</Text>
              <TextField size='m' type='text' placeholder='0' value='6.582' rightSide='DDI' className='input_width_number' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Передвижка БУ на</Text>
              <TextField size='m' type='text' placeholder='0' value='9' rightSide='м' className='input_width_number' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Нулевая отметка</Text>
              <TextField width='full' size='m' type='text' placeholder='Опишите нулевую отметку' value='Столб ротора' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Плановая альтитуда стола ротора</Text>
              <div className='pt-form__control'>
                <TextField width='full' size='m' type='text' placeholder='0' value='49.64' leftSide='От уровня моря' rightSide='м' className='decorator decorator_indent-b_xs' />
                <TextField width='full' size='m' type='text' placeholder='0' value='39.63' leftSide='От уровня земли' rightSide='м' />
              </div>
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Географические координаты устья скважины</Text>
              <TextField size='m' form='default-clear' type='text' placeholder='00° 00′ 00' value='67° 50′ 24.529' rightSide='N' className='input_width_coordinates' />
              <TextField size='m' form='brick-clear' type='text' placeholder='00° 00′ 00' value='72° 34′ 22.819' rightSide='E' className='input_width_coordinates' />
              <TextField width='full' size='m' form='brick-default' type='text' placeholder='0' value='49.64' leftSide='Z:' rightSide='м' />
            </div>

            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Географические координаты точки Т2</Text>
              <TextField size='m' form='default-clear' type='text' placeholder='00° 00′ 00' value='67° 49′ 28.618' rightSide='N' className='input_width_coordinates' />
              <TextField size='m' form='brick-clear' type='text' placeholder='00° 00′ 00' value='72° 32′ 38.960' rightSide='E' className='input_width_coordinates' />
              <TextField width='full' size='m' form='brick-default' type='text' placeholder='0' value='1892.64' leftSide='Z:' rightSide='м' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Географические координаты точки Т3</Text>
              <TextField size='m' form='default-clear' type='text' placeholder='00° 00′ 00' value='67° 48′ 50.438' rightSide='N' className='input_width_coordinates' />
              <TextField size='m' form='brick-clear' type='text' placeholder='00° 00′ 00' value='72° 32′ 11.282' rightSide='E' className='input_width_coordinates' />
              <TextField width='full' size='m' form='brick-default' type='text' placeholder='0' value='1892.64' leftSide='Z:' rightSide='м' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Проектный пласт</Text>
              <TextField width='full' size='m' type='text' placeholder='Выберите проектный пласт' value='НП 5' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Пластовое давление</Text>
              <TextField size='m' type='text' placeholder='0' value='183' rightSide='МПа' className='input_width_number' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Пластовая температура</Text>
              <TextField size='m' type='text' placeholder='0' value='57,4' rightSide='°С' className='input_width_degree' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Магнитное склонение</Text>
              <TextField size='m' type='text' placeholder='0' value='24.70' rightSide='°' className='input_width_degree' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Схождение меридианов</Text>
              <TextField size='m' type='text' placeholder='0' value='-2.25' rightSide='°' className='input_width_degree' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Магнитная поправка</Text>
              <TextField size='m' type='text' placeholder='0' value='26.95' rightSide='°' className='input_width_degree' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Начало бурения</Text>
              <TextField size='m' type='text' placeholder='16.06.2020' value='22.09.2020' className='input_width_date' rightSide={IconCalendar} />
              <Text size='s' view='ghost' lineHeight='s' className='decorator decorator_indent-l_s'>Дедлайны для заполнения разделов программы высчитаются автоматически</Text>
            </div>

            <div className='decorator decorator_distribute_right decorator_indent-t_3xl'>
              <Button size='m' view='ghost' as='a' href='/curator/list:false' label='Удалить' />
              <div className='decorator decorator_indent-l_m'>
                <Button as='a' size='m' view='primary' iconRight={IconForward} label='Дальше' href='/curator/draft-step-2' />
              </div>
            </div>
          </form>
        </div>
      </div>
      <TheFooter />
    </div>
  );
}

export default CuratorDraftPage1;
