import React from 'react';
import { Text, Input, Button, IconForward, IconAdd, IconBackward } from '@gpn-design/uikit';
import TheHeader from '../components/TheHeader/TheHeader';
import TheFooter from '../components/TheFooter/TheFooter';

function DraftPage2() {
  return (
    <React.Fragment>
      <TheHeader />
      <div className='content decorator decorator_space-v_3xl'>
        <form className='content__main'>
          <Text tag='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_s decorator_indent-t_none'>Создание программы</Text>
          <Text tag='p' size='m' view='primary' className='decorator decorator_indent-t_none'>Опишите конструкцию скважины и деление по секциям. Так мы автоматически сможем подготовить специальные разделы в программе</Text>
          
          <Text tag='h3' size='xl' view='primary' weight='regular' className='decorator decorator_indent-t_2xl decorator_indent-b_s'>Конструкция скважины</Text>
          <table className='table table_editable' style={{width: '1000px'}}>
            <tr>
              <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Название</Text>
              <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Обсадная колонна</Text>
              <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Глубина спуска по стволу</Text>
              <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>глубина спуска по вертикали</Text>
              <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Интервал цементирования</Text>
            </tr>

            <tr>
              <td rowspan='2'><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='Комбинированный кондуктор' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='ОТТМ 530/324*9,5 «Д»' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 0 до 50' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 0 до 50' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 0 до 50' /></td>
            </tr>
            <tr>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='ОТТГ-324*9,5 мм «Д»' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 50 до 457' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 50 до 457' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 50 до 460' /></td>
            </tr>

            <tr>
              <td rowspan='2'><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='Техническая колонна' /></td>
              <td rowspan='2'><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='ОТТГ -244,5*8,9 мм «Д»' /></td>
              <td rowspan='2'><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 0 до 1377' /></td>
              <td rowspan='2'><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 0 до 1098' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 0 до 410' /></td>
            </tr>
            <tr>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 410 до 1380' /></td>
            </tr>

            <tr>
              <td rowspan='2'><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='Эксплуатационная колонна'/></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='ОТТГ-178*10,4 «Е»' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 0 до 280' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 0 до 280' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 880 до 2526' /></td>
            </tr>
            <tr>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='ОТТГ-178*9,2 «Д»' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 280 до 3113' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 280 до 1893' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 2526 до 3116' /></td>
            </tr>

            <tr>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='Хвостовик'/></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='ОТТМ-114,3х7,4 / ФС-П114 ОТТМ' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 3038 до 4340' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='от 1888 до 1893' /></td>
              <td><Input wpSize='m' type='text' view='clear' className='input_width_avaliable' placeholder='' value='' /></td>
            </tr>
            
            <tr>
              <td colspan='5'><Button view='clear' wpSize='m' withIcon='left' form='brick' width='full'><IconAdd size='s' className='button__icon' />Новая строка</Button></td>
            </tr>
          </table>
            
          <Text tag='h3' size='xl' view='primary' weight='regular' className='decorator decorator_indent-t_3xl decorator_indent-b_s'>Деление по секциям</Text>
          <div className='decorator decorator_distribute_left'>
            <Input wpSize='m' type='text' view='default' form='default-clear' className='input_width_avaliable' placeholder='' value='660 мм' />
            <Input wpSize='m' type='text' view='default' form='brick-clear' className='input_width_avaliable' placeholder='' value='393 мм' />
            <Input wpSize='m' type='text' view='default' form='brick-clear' className='input_width_avaliable' placeholder='' value='293 мм' />
            <Input wpSize='m' type='text' view='default' form='brick-clear' className='input_width_avaliable' placeholder='' value='220 мм' />
            <Input wpSize='m' type='text' view='default' form='brick-clear' className='input_width_avaliable' placeholder='' value='152 мм' />
            <Button wpSize='m' view='ghost' form='brick-default' withIcon='left'><IconAdd size='s' className='button__icon'/>Добавить секцию</Button>
          </div>
          
          <div className='decorator decorator_distribute_between decorator_indent-t_3xl'>
            <Button isLink={true} wpSize='m' view='ghost' withIcon='left' href='/draft-step-1'><IconBackward size='m' className='button__icon'/>Назад</Button>
            <div className='decorator decorator_distribute_between'>
              <Button wpSize='m' view='ghost' href='/'>Удалить</Button>
              <div className='decorator decorator_indent-l_m'>
                <Button isLink={true} wpSize='m' view='primary' withIcon='right' href='/draft-step-3'>Дальше <IconForward size='m' className='button__icon'/></Button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <TheFooter />
    </React.Fragment>
  );
}

export default DraftPage2;
