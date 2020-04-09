import React from 'react';
import { useHistory } from 'react-router-dom';
import { Text, Button, IconForward, IconCalendar } from '@gpn-design/uikit';
import Field from '../../components/Field/Field';
import SelectWrap from '../../components/SelectWrap/SelectWrap';
import TheHeader from '../../components/TheHeader/TheHeader';
import TheFooter from '../../components/TheFooter/TheFooter';

function CuratorDraftPage1() {
  const history = useHistory();

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
              <SelectWrap size='m' items={['Оренбургское', 'Царичанское', 'Арчинское', 'Ореховское', 'Пальяновская', 'Приобское', 'Валынтойское', 'В-Пякутинское', 'Вынгапуровское', 'З-Чатылькинская', 'В-Мессояхское', 'Тазовское']} />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Кустовая площадь</Text>
              <SelectWrap size='m' items={['14', '3', '6', '7', '10']} />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Куст</Text>
              <SelectWrap size='m' items={['10', '3', '6', '7', '12']} />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Номер скважины</Text>
              <SelectWrap size='m' items={['5238', '3149', '5219', '4912', '3892']} />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Назначение скважины</Text>
              <SelectWrap size='m' items={['Эксплуотационная', 'Исследовательская']} />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Тип скважины</Text>
              <SelectWrap size='m' items={['ГС 1000', 'ГС 1290']} />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Индекс сложности скважины</Text>
              <div style={{ width: '130px' }}>
                <Field size='m' type='number' placeholder='0' dValue='6.582' rightSide='DDI' width='full' />
              </div>
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Передвижка БУ на</Text>
              <div style={{ width: '130px' }}>
                <Field size='m' type='number' placeholder='0' dValue='9' rightSide='м' width='full' />
              </div>
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Нулевая отметка</Text>
              <Field width='full' size='m' type='text' placeholder='Опишите нулевую отметку' dValue='Столб ротора' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Плановая альтитуда стола ротора</Text>
              <div className='pt-form__control'>
                <Field width='full' size='m' type='text' placeholder='0' dValue='49.64' leftSide='От уровня моря' rightSide='м' className='decorator decorator_indent-b_xs' />
                <Field width='full' size='m' type='text' placeholder='0' dValue='39.63' leftSide='От уровня земли' rightSide='м' />
              </div>
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Географические координаты устья скважины</Text>
              <Field size='m' form='default-clear' type='text' placeholder='00° 00′ 00' dValue='67° 50′ 24.529' rightSide='N' className='input_width_coordinates' />
              <Field size='m' form='brick-clear' type='text' placeholder='00° 00′ 00' dValue='72° 34′ 22.819' rightSide='E' className='input_width_coordinates' />
              <Field width='full' size='m' form='brick-default' type='text' placeholder='0' dValue='49.64' leftSide='Z:' rightSide='м' />
            </div>

            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Географические координаты точки Т2</Text>
              <Field size='m' form='default-clear' type='text' placeholder='00° 00′ 00' dValue='67° 49′ 28.618' rightSide='N' className='input_width_coordinates' />
              <Field size='m' form='brick-clear' type='text' placeholder='00° 00′ 00' dValue='72° 32′ 38.960' rightSide='E' className='input_width_coordinates' />
              <Field width='full' size='m' form='brick-default' type='text' placeholder='0' dValue='1892.64' leftSide='Z:' rightSide='м' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Географические координаты точки Т3</Text>
              <Field size='m' form='default-clear' type='text' placeholder='00° 00′ 00' dValue='67° 48′ 50.438' rightSide='N' className='input_width_coordinates' />
              <Field size='m' form='brick-clear' type='text' placeholder='00° 00′ 00' dValue='72° 32′ 11.282' rightSide='E' className='input_width_coordinates' />
              <Field width='full' size='m' form='brick-default' type='text' placeholder='0' dValue='1892.64' leftSide='Z:' rightSide='м' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Проектный пласт</Text>
              <Field width='full' size='m' type='text' placeholder='Выберите проектный пласт' dValue='НП 5' />
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Пластовое давление</Text>
              <div style={{ width: '130px' }}>
                <Field size='m' type='number' placeholder='0' dValue='183' rightSide='МПа' width='full' />
              </div>
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Пластовая температура</Text>
              <div style={{ width: '130px' }}>
                <Field size='m' type='number' placeholder='0' dValue='57.4' rightSide='°С' width='full' />
              </div>
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Магнитное склонение</Text>
              <div style={{ width: '130px' }}>
                <Field size='m' type='number' placeholder='0' dValue='24.70' rightSide='°' width='full' />
              </div>
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Схождение меридианов</Text>
              <div style={{ width: '130px' }}>
                <Field size='m' type='number' placeholder='0' dValue='-2.25' rightSide='°' width='full' />
              </div>
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Магнитная поправка</Text>
              <div style={{ width: '130px' }}>
                <Field size='m' type='number' placeholder='0' dValue='26.95' rightSide='°' width='full' />
              </div>
            </div>
            
            <div className='pt-form__item'>
              <Text tag='label' size='m' view='secondary' display='block' className='pt-form__label decorator decorator_space-t_xs'>Начало бурения</Text>
              <div style={{ width: '130px', flexShrink: '0' }}>
                <Field size='m' type='text' placeholder='16.06.2020' dValue='22.09.2020' rightSide={IconCalendar} width='full' />
              </div>
              <Text size='s' view='ghost' lineHeight='s' className='decorator decorator_indent-l_s'>Дедлайны для заполнения разделов программы высчитаются автоматически</Text>
            </div>

            <div className='decorator decorator_distribute_right decorator_indent-t_3xl'>
              <Button size='m' view='ghost' label='Удалить'
                onClick={() => { history.push(`/digital-driller/curator/list:false`) }} />
              <div className='decorator decorator_indent-l_m'>
                <Button size='m' view='primary' iconRight={IconForward} label='Дальше'
                  onClick={() => { history.push(`/digital-driller/curator/draft-step-2`) }} />
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
