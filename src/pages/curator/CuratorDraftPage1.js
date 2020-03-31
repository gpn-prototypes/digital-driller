import React from 'react';
import { Text, Input, Button, IconForward } from '@gpn-design/uikit';
import TheHeader from '../../components/TheHeader/TheHeader';
import TheFooter from '../../components/TheFooter/TheFooter';

function CuratorDraftPage1() {
  return (
    <React.Fragment>
      <TheHeader role='curator' />
      <div className='content decorator decorator_space-v_3xl'>
        <div className='content__main'>
          <Text tag='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_s decorator_indent-t_none'>Создание программы</Text>
          <Text tag='p' size='m' view='primary' className='decorator decorator_indent-b_2xl decorator_indent-t_none'>Опишите общую информацию о скважине, чтобы мы выбрали необходимые разделы программы и составили структуру</Text>
          <form className='pt-form pt-form_space-v_xs pt-form_vertical-align_center pt-form_structure_40-60'>
            <Text tag='h3' size='xl' view='primary' weight='regular' className='decorator decorator_indent-b_s decorator_indent-t_none'>Общая информация о скважине</Text>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Месторождение</Text>
              <Input wpSize='m' view='default' className='input_width_avaliable' placeholder='Выберите месторождение' value='Оренбургское' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Кустовая площадь</Text>
              <Input wpSize='m' view='default' className='input_width_avaliable' placeholder='Выберите кустовую площадь' value='14' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Куст</Text>
              <Input wpSize='m' view='default' className='input_width_avaliable' placeholder='Выберите куст' value='10' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Номер скважины</Text>
              <Input wpSize='m' view='default' className='input_width_avaliable' placeholder='Выберите скважину' value='5238' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Назначение скважины</Text>
              <Input wpSize='m' view='default' className='input_width_avaliable' placeholder='Выберите назначение скважины' value='Эксплуотационная' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Тип скважины</Text>
              <Input wpSize='m' view='default' className='input_width_avaliable' placeholder='Выберите тип скважины' value='ГС 1000' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Индекс сложности скважины</Text>
              <Input wpSize='m' view='default' className='input_width_avaliable' placeholder='0' value='6.582 DDI' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Передвижка БУ на</Text>
              <Input wpSize='m' view='default' className='input_width_avaliable' placeholder='0' value='9 метров' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Нулевая отметка</Text>
              <Input wpSize='m' view='default' className='input_width_avaliable' placeholder='Опишите нулевую отметку' value='Столб ротора' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Плановая альтитуда стола ротора</Text>
              <Input wpSize='m' view='default' form='default-clear' className='input_width_avaliable' placeholder='От уровня моря 0 м' value='От уровня моря 49.64 м' />
              <Input wpSize='m' view='default' form='brick-default' className='input_width_avaliable' placeholder='От уровня земли 0 м' value='От уровня земли 39.63 м' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Географические координаты устья скважины</Text>
              <Input wpSize='m' view='default' form='default-clear' className='input_width_coordinates' placeholder='67° 50′ 24.529 N' value='67° 50′ 24.529 N' />
              <Input wpSize='m' view='default' form='brick-clear' className='input_width_coordinates' placeholder='72° 34′ 22.819 E' value='72° 34′ 22.819 E' />
              <Input wpSize='m' view='default' form='brick-default' className='input_width_avaliable' placeholder='Z: 49.64 м' value='Z: 49.64 м' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Географические координаты точки Т2</Text>
              <Input wpSize='m' view='default' form='default-clear' className='input_width_coordinates' placeholder='67° 49′ 28.618 N' value='67° 49′ 28.618 N' />
              <Input wpSize='m' view='default' form='brick-clear' className='input_width_coordinates' placeholder='72° 32′ 38.960 E' value='72° 32′ 38.960 E' />
              <Input wpSize='m' view='default' form='brick-default' className='input_width_avaliable' placeholder='Z: 1892.64 м' value='Z: 1892.64 м' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Географические координаты точки Т3</Text>
              <Input wpSize='m' view='default' form='default-clear' className='input_width_coordinates' placeholder='67° 48′ 50.438 N' value='67° 48′ 50.438 N' />
              <Input wpSize='m' view='default' form='brick-clear' className='input_width_coordinates' placeholder='72° 32′ 11.282 E' value='72° 32′ 11.282 E' />
              <Input wpSize='m' view='default' form='brick-default' className='input_width_avaliable' placeholder='Z: 1892.64 м' value='Z: 1892.64 м' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Магнитное склонение</Text>
              <Input wpSize='m' view='default' className='input_width_avaliable' placeholder='0°' value='24.70°' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Схождение меридианов</Text>
              <Input wpSize='m' view='default' className='input_width_avaliable' placeholder='0°' value='-2.25°' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Магнитная поправка</Text>
              <Input wpSize='m' view='default' className='input_width_avaliable' placeholder='0°' value='26.95°' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Проектный пласт</Text>
              <Input wpSize='m' view='default' className='input_width_avaliable' placeholder='Выберите проектный пласт' value='НП 5' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Пластовое давление</Text>
              <Input wpSize='m' view='default' className='input_width_avaliable' placeholder='0 МПа' value='183 МПа' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Пластовая температура</Text>
              <Input wpSize='m' view='default' className='input_width_avaliable' placeholder='0 °С' value='57,4 °С' />
            </div>
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label'>Начало бурения</Text>
              <Input wpSize='m' view='default' className='input_width_date' placeholder='16.06.2020' value='22.09.2020' /> {/* +3месяца */}
              <Text size='s' view='ghost' lineHeight='s' className='decorator decorator_indent-l_s'>Дедлайны для заполнения разделов программы высчитаются автоматически</Text>
            </div>
            <div className='decorator decorator_distribute_right decorator_indent-t_3xl'>
              <Button wpSize='m' view='ghost' isLink={true} href='/curator/list'>Удалить</Button>
              <div className='decorator decorator_indent-l_m'>
                <Button isLink={true} wpSize='m' view='primary' withIcon='right' href='/curator/draft-step-2'>Дальше <IconForward size='m' className='button__icon'/></Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <TheFooter />
    </React.Fragment>
  );
}

export default CuratorDraftPage1;
