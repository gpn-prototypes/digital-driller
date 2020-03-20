import React from 'react';
import { Text, Input, Button, IconBackward, Badge, IconAttach, Textarea } from '@gpn-design/uikit';
import TheHeader from '../components/TheHeader/TheHeader';
import TheFooter from '../components/TheFooter/TheFooter';

function DraftPage3() {
  return (
    <React.Fragment>
      <TheHeader />
      <div className='content decorator decorator_space-v_3xl'>
        <div className='content__main'>
          <Text tag='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_s decorator_indent-t_none'>Создание программы</Text>
          <Text tag='p' size='m' view='primary' className='decorator decorator_indent-t_none'>Укажите ответственных за каждый раздел программы и прикрепите необходимые документы. Также вы можете написать комментарий в свободной форме</Text>
          
          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>Геологический раздел</Text>
            <Badge status='system' wpSize='m' view='filled'>подготовить до 10.08.2020</Badge>
          </div>
          <div className='decorator decorator_distribute_left'>
            <Input wpSize='m' view='default' form='default-clear' className='input_width_avaliable' placeholder='' value='ПАО «Газпром нефть»' />
            <Input wpSize='m' view='default' form='brick-default' className='input_width_avaliable' placeholder='' value='Анастасия Алёшина' />
          </div>

          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>Бурение</Text>
            <Badge status='system' wpSize='m' view='filled'>подготовить до 10.08.2020</Badge>
          </div>
          <div className='decorator decorator_distribute_left'>
            <Input wpSize='m' view='default' form='default-clear' className='input_width_avaliable' placeholder='' value='ООО «БКЕ»' />
            <Input wpSize='m' view='default' form='brick-default' className='input_width_avaliable' placeholder='' value='Дмитрий Ореховский ' />
          </div>

          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>ННБ</Text>
            <Badge status='system' wpSize='m' view='filled'>подготовить до 10.08.2020</Badge>
          </div>
          <div className='decorator decorator_distribute_left'>
            <Input wpSize='m' view='default' form='default-clear' className='input_width_avaliable' placeholder='' value='ООО «БКЕ»' />
            <Input wpSize='m' view='default' form='brick-default' className='input_width_avaliable' placeholder='' value='Оксана Романова ' />
          </div>

          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>Буровые растворы</Text>
            <Badge status='system' wpSize='m' view='filled'>подготовить до 10.08.2020</Badge>
          </div>
          <div className='decorator decorator_distribute_left'>
            <Input wpSize='m' view='default' form='default-clear' className='input_width_avaliable' placeholder='' value='ООО «БКЕ»' />
            <Input wpSize='m' view='default' form='brick-default' className='input_width_avaliable' placeholder='' value='Никита Соболев ' />
          </div>

          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>Долота</Text>
            <Badge status='system' wpSize='m' view='filled'>подготовить до 10.08.2020</Badge>
          </div>
          <div className='decorator decorator_distribute_left'>
            <Input wpSize='m' view='default' form='default-clear' className='input_width_avaliable' placeholder='' value='ООО «БКЕ»' />
            <Input wpSize='m' view='default' form='brick-default' className='input_width_avaliable' placeholder='' value='Тимофей Гайчук ' />
          </div>

          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>Цементирование</Text>
            <Badge status='system' wpSize='m' view='filled'>подготовить до 10.08.2020</Badge>
          </div>
          <div className='decorator decorator_distribute_left decorator_indent-b_s'>
            <Input wpSize='m' view='default' form='default-clear' className='input_width_avaliable' placeholder='' value='ООО «БКЕ»' />
            <Input wpSize='m' view='default' form='brick-clear' className='input_width_avaliable' placeholder='' value='Фёдор Савенко ' />
            <Input wpSize='m' view='default' form='brick-default' className='input_width_avaliable' placeholder='' value='Секция 0 - 152 мм ' />
          </div>
          <div className='decorator decorator_distribute_left'>
            <Input wpSize='m' view='default' form='default-clear' className='input_width_avaliable' placeholder='' value='ООО «БКЕ»' />
            <Input wpSize='m' view='default' form='brick-clear' className='input_width_avaliable' placeholder='' value='Глеб Алейнов ' />
            <Input wpSize='m' view='default' form='brick-default' className='input_width_avaliable' placeholder='' value='Секция 0 - 152 мм ' />
          </div>
          
          <Text size='xl' view='primary' weight='regular' className='decorator decorator_indent-t_3xl decorator_indent-b_m'>Дополнительные файлы</Text>
          <Button wpSize='s' view='ghost' withIcon='left' ><IconAttach size='s' className='button__icon'/>Загрузить файл</Button>
          
          <Text size='xl' view='primary' weight='regular' className='decorator decorator_indent-t_3xl decorator_indent-b_m'>Комментарий</Text>
          <Textarea wpSize='m' view='default' width='full'>Чтобы человек захотел это прочитать, у него должна быть очень веская причина. Может быть, его заставили. Может быть, где-то здесь в тексте решение его насущной проблемы.</Textarea>



          <div className='decorator decorator_distribute_between decorator_indent-t_3xl'>
            <Button isLink={true} wpSize='m' view='ghost' withIcon='left' href='/draft-step-2'><IconBackward size='m' className='button__icon'/>Назад</Button>
            <div className='decorator decorator_distribute_between'>
              <Button wpSize='m' view='ghost' href='/'>Удалить</Button>
              <div className='decorator decorator_indent-l_m'>
                <Button isLink={true} wpSize='m' view='primary' withIcon='right' href='/'>Создать программу</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TheFooter />
    </React.Fragment>
  );
}

export default DraftPage3;
