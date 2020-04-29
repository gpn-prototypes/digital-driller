import React from 'react';
import { useHistory } from 'react-router-dom';
import { Text } from '@gpn-design/uikit/Text';
import { Button } from '@gpn-design/uikit/Button';
import { IconForward } from '@gpn-design/uikit/IconForward';
import { IconAdd } from '@gpn-design/uikit/IconAdd';
import { IconBackward } from '@gpn-design/uikit/IconBackward';
import Field from '../../components/Field/Field';
import TheHeader from '../../components/TheHeader/TheHeader';
import TheFooter from '../../components/TheFooter/TheFooter';

function CuratorDraftPage2() {
  const history = useHistory();

  return (
    <React.Fragment>
      <TheHeader role='Куратор' />
      <div className='content decorator decorator_space-v_3xl'>
        <div className='content__main'>
          <Text tag='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_s decorator_indent-t_none'>Создание программы</Text>
          <Text tag='p' size='m' view='primary' className='decorator decorator_indent-t_none'>Опишите конструкцию скважины и деление по секциям. Так мы автоматически сможем подготовить специальные разделы в программе</Text>
          
          <Text tag='h3' size='xl' view='primary' weight='regular' className='decorator decorator_indent-t_2xl decorator_indent-b_s'>Конструкция скважины</Text>
        </div>
        
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
                  <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='Комбинированный кондуктор' />
                </td>
                <td>
                  <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='ОТТМ 530/324*9,5 «Д»' />
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='0' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='50' leftSide='до' />
                  </div>
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='0' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='50' leftSide='до' />
                  </div>
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='0' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='50' leftSide='до' />
                  </div>
                </td>
              </tr>
              
              <tr>
                <td>
                  <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='ОТТГ-324*9,5 мм «Д»' />
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='50' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='457' leftSide='до' />
                  </div>
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='50' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='457' leftSide='до' />
                  </div>
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='50' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='460' leftSide='до' />
                  </div>
                </td>
              </tr>

              <tr>
                <td rowspan='2'>
                  <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='Техническая колонна' />
                </td>
                <td rowspan='2'>
                  <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='ОТТГ -244,5*8,9 мм «Д»' />
                </td>
                <td rowspan='2'>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='0' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='1377' leftSide='до' />
                  </div>
                </td>
                <td rowspan='2'>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='0' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='1098' leftSide='до' />
                  </div>
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='0' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='410' leftSide='до' />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='410' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='1380' leftSide='до' />
                  </div>
                </td>
              </tr>

              <tr>
                <td rowspan='2'>
                  <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='Эксплуатационная колонна' />
                </td>
                <td>
                  <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='ОТТГ-178*10,4 «Е»' />
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='0' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='280' leftSide='до' />
                  </div>
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='0' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='280' leftSide='до' />
                  </div>
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='880' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='2526' leftSide='до' />
                  </div>
                </td>
              </tr>
              
              <tr>
                <td>
                  <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='ОТТГ-178*9,2 «Д»' />
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='280' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='3113' leftSide='до' />
                  </div>
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='280' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='1893' leftSide='до' />
                  </div>
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='2526' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='3116' leftSide='до' />
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <Field width='full' size='m' view='clear' type='text' maxRows='1' placeholder='' dValue='Хвостовик' />
                </td>
                <td>
                  <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='ОТТМ-114,3х7,4 / ФС-П114 ОТТМ' />
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='3038' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='4340' leftSide='до' />
                  </div>
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='1888' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='1893' leftSide='до' />
                  </div>
                </td>
                <td>
                  <div className='decorator decorator_distribute_left'>
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='' leftSide='от' />
                    <Field width='full' size='m' view='clear' type='number' placeholder='0' dValue='' leftSide='до' />
                  </div>
                </td>
              </tr>
              
              <tr>
                <td colspan='5'><Button view='clear' size='m' withIcon='left' width='full' label='Новая строка' /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='content__main'>
          <Text tag='h3' size='xl' view='primary' weight='regular' className='decorator decorator_indent-t_3xl decorator_indent-b_s'>Деление по секциям</Text>
          
          <div className='decorator decorator_distribute_left'>
            <Field width='full' size='m' type='number' form='default-clear' placeholder='0' dValue='660' rightSide='м' className='input_width_number' />
            <Field width='full' size='m' type='number' form='brick-clear' placeholder='0' dValue='393' rightSide='м' className='input_width_number' />
            <Field width='full' size='m' type='number' form='brick-clear' placeholder='0' dValue='293' rightSide='м' className='input_width_number' />
            <Field width='full' size='m' type='number' form='brick-clear' placeholder='0' dValue='220' rightSide='м' className='input_width_number' />
            <Field width='full' size='m' type='number' form='brick-clear' placeholder='0' dValue='152' rightSide='м' className='input_width_number' />

            <Button size='m' view='ghost' form='brick-default' iconLeft={IconAdd} label='Добавить секцию' />
          </div>
        
          <div className='decorator decorator_distribute_between decorator_indent-t_3xl'>
            <Button size='m' view='ghost' iconLeft={IconBackward} label='Назад'
              onClick={() => { history.push(`/digital-driller/curator/draft-step-1`) }} />
            <div className='decorator decorator_distribute_between'>
              <Button size='m' view='ghost' label='Удалить'
                onClick={() => { history.push(`/digital-driller/curator/list:false`) }} />
              <div className='decorator decorator_indent-l_m'>
                <Button size='m' view='primary' iconRight={IconForward} label='Дальше'
                  onClick={() => { history.push(`/digital-driller/curator/draft-step-3`) }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TheFooter />
    </React.Fragment>
  );
}

export default CuratorDraftPage2;
