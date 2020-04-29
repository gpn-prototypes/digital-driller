import React from 'react';
import { useHistory } from 'react-router-dom';
import { Text } from '@gpn-design/uikit/Text';
import { Button } from '@gpn-design/uikit/Button';
import { IconBackward } from '@gpn-design/uikit/IconBackward';
import { Badge } from '@gpn-design/uikit/Badge';
import { IconAttach } from '@gpn-design/uikit/IconAttach';
import Field from '../../components/Field/Field';
import SelectWrap from '../../components/SelectWrap/SelectWrap';
import TheHeader from '../../components/TheHeader/TheHeader';
import TheFooter from '../../components/TheFooter/TheFooter';

function CuratorDraftPage3() {
  const history = useHistory();

  return (
    <React.Fragment>
      <TheHeader role='Куратор' />
      <div className='content decorator decorator_space-v_3xl'>
        <div className='content__main'>
          <Text tag='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_s decorator_indent-t_none'>Создание программы</Text>
          <Text tag='p' size='m' view='primary' className='decorator decorator_indent-t_none'>Укажите ответственных за каждый раздел программы и прикрепите необходимые документы. Также вы можете написать комментарий в свободной форме</Text>
          
          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>Геологический раздел</Text>
            <Badge status='system' size='m' view='filled' label='подготовить до 10.08.2020'></Badge>
          </div>
          <div className='decorator decorator_distribute_left'>
            <Field width='full' size='m' form='default-clear' type='text' dValue='ПАО «Газпром нефть»' disabled={true} />
            <SelectWrap size='m' form='brick-default' items={['Анастасия Алёшина', ,'Дина Наумова', 'Валентина Спивак', 'Татьяна Сусаренко', 'Софья Миклашевска', 'Лилия Коновалова', 'Геннадий Воронов', 'Фёдор Батейко', 'Егор Киселёв', 'Харитон Гаврилов', 'Богдан Ершов', 'Марк Зимин', 'Тимур Алчевский']} />
          </div>

          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>Бурение</Text>
            <Badge status='system' size='m' view='filled' label='подготовить до 10.08.2020'></Badge>
          </div>
          <div className='decorator decorator_distribute_left'>
            <SelectWrap size='m' form='default-clear' items={['ООО «БКЕ»', 'ООО "ПетроТул"', 'ООО "ЭНГС"', 'ООО "СПС"', 'Халлибуртон Интернэшнл ГмбХ', 'ООО "НьюТек Сервисез"', 'ООО "Везерфорд"']} />
            <SelectWrap size='m' form='brick-default' items={['Дмитрий Ореховский', 'Инга Козлова', 'Захар Кравченко', 'Тимур Калашников', 'Нина Константинова', 'Марат Исаев', 'Юлий Дмитриев']} />
          </div>

          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>ННБ</Text>
            <Badge status='system' size='m' view='filled' label='подготовить до 10.08.2020'></Badge>
          </div>
          <div className='decorator decorator_distribute_left'>
            <SelectWrap size='m' form='default-clear' items={['ООО «БКЕ»', 'ООО "ПетроТул"', 'ООО "ЭНГС"', 'ООО "СПС"', 'Халлибуртон Интернэшнл ГмбХ', 'ООО "НьюТек Сервисез"', 'ООО "Везерфорд"']} />
            <SelectWrap size='m' form='brick-default' items={['Оксана Романова', 'Пётр Савенко', 'Полина Зиновьева', 'Регина Пономарёва', 'Олег Кобзарь', 'Ева Кириленко', 'Адам Моисеев']} />
          </div>

          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>Буровые растворы</Text>
            <Badge status='system' size='m' view='filled' label='подготовить до 10.08.2020'></Badge>
          </div>
          <div className='decorator decorator_distribute_left'>
            <SelectWrap size='m' form='default-clear' items={['ООО «БКЕ»', 'ООО "ПетроТул"', 'ООО "ЭНГС"', 'ООО "СПС"', 'Халлибуртон Интернэшнл ГмбХ', 'ООО "НьюТек Сервисез"', 'ООО "Везерфорд"']} />
            <SelectWrap size='m' form='brick-default' items={['Никита Соболев', 'Валерия Кириллова', 'Георгий Степанов', 'Осип Афанасьев', 'Алёна Фролова', 'Осип Кравченко', 'Регина Голубева']} />
          </div>

          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>Долота</Text>
            <Badge status='system' size='m' view='filled' label='подготовить до 10.08.2020'></Badge>
          </div>
          <div className='decorator decorator_distribute_left'>
            <SelectWrap size='m' form='default-clear' items={['ООО «БКЕ»', 'ООО "ПетроТул"', 'ООО "ЭНГС"', 'ООО "СПС"', 'Халлибуртон Интернэшнл ГмбХ', 'ООО "НьюТек Сервисез"', 'ООО "Везерфорд"']} />
            <SelectWrap size='m' form='brick-default' items={['Тимофей Гайчук', 'Екатерина Кудрявцева', 'Леон Савельев', 'Ярослав Соболев', 'Мария Егорова', 'Варвара Трублаевска', 'Филипп Корнейчук']} />
          </div>

          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>Цементирование</Text>
            <Badge status='system' size='m' view='filled' label='подготовить до 10.08.2020'></Badge>
          </div>
          <div className='decorator decorator_distribute_left decorator_indent-b_s'>
            <SelectWrap size='m' form='default-clear' items={['ООО «БКЕ»', 'ООО "ПетроТул"', 'ООО "ЭНГС"', 'ООО "СПС"', 'Халлибуртон Интернэшнл ГмбХ', 'ООО "НьюТек Сервисез"', 'ООО "Везерфорд"']} />
            <SelectWrap size='m' form='brick-clear' items={['Фёдор Савенко', 'Абрам Дьячков', 'Ирина Уварова', 'Элла Чикольба', 'Егор Корнейчук', 'Лилия Лебедева', 'Денис Беляков']} />
            <Field width='full' size='m' form='brick-default' type='text' dValue='Секция 0 - 152 мм' />
          </div>
          <div className='decorator decorator_distribute_left'>
            <SelectWrap size='m' form='default-clear' items={['ООО «БКЕ»', 'ООО "ПетроТул"', 'ООО "ЭНГС"', 'ООО "СПС"', 'Халлибуртон Интернэшнл ГмбХ', 'ООО "НьюТек Сервисез"', 'ООО "Везерфорд"']} />
            <SelectWrap size='m' form='brick-clear' items={['Глеб Алейнов', 'Гавриил Селезнёв', 'Александра Батейко', 'Кир Веселов', 'Лилия Гущина', 'Глеб Григорьев', 'Марк Шилов']} />
            <Field width='full' size='m' form='brick-default' type='text' dValue='Секция 0 - 152 мм' />
          </div>
          
          <Text size='xl' view='primary' weight='regular' className='decorator decorator_indent-t_3xl decorator_indent-b_m'>Дополнительные файлы</Text>
          <Button size='s' view='ghost' iconLeft={IconAttach} label='Загрузить файл' />
          
          <Text size='xl' view='primary' weight='regular' className='decorator decorator_indent-t_3xl decorator_indent-b_m'>Комментарий</Text>
          <Field width='full' size='m' type='textarea' maxRows='5' dValue='Чтобы человек захотел это прочитать, у него должна быть очень веская причина. Может быть, его заставили. Может быть, где-то здесь в тексте решение его насущной проблемы.' />



          <div className='decorator decorator_distribute_between decorator_indent-t_3xl'>
            <Button size='m' view='ghost' iconLeft={IconBackward} label='Назад'
              onClick={() => { history.push(`/digital-driller/curator/draft-step-2`) }} />
            <div className='decorator decorator_distribute_between'>
              <Button size='m' view='ghost' label='Удалить'
                onClick={() => { history.push(`/digital-driller/curator/list:false`) }} />
              <div className='decorator decorator_indent-l_m'>
                <Button size='m' view='primary' label='Создать программу'
                  onClick={() => { history.push(`/digital-driller/curator/list:true`) }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TheFooter />
    </React.Fragment>
  );
}

export default CuratorDraftPage3;
