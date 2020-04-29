import React from 'react';
import { useParams } from 'react-router-dom';
import { Text } from '@gpn-design/uikit/Text';
import { Informer } from '@gpn-design/uikit/Informer';
import { Button } from '@gpn-design/uikit/Button';
import Field from '../../components/Field/Field';
import SelectWrap from '../../components/SelectWrap/SelectWrap';
import TheHeader from '../../components/TheHeader/TheHeader';
import Toc from '../../components/Toc/Toc';
import TeamList from '../../components/TeamList/TeamList';
import ArticleSection from '../../components/ArticleSection/ArticleSection';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import Snackbar from '../../components/Snackbar/Snackbar';

import programmList from '../../mocks/programmList';

import IMGProfileOfTheWellbore from '../../images/Профиль_ствола_скважины.jpg';

function GeologistProgrammPage() {
  let { id } = useParams();
  let programmInfo = programmList.filter(item => item.id === id)[0];
  return (
    <React.Fragment>
      <TheHeader isMinified={true} programmName={programmInfo.field + ' > ' + programmInfo.bush + ' > ' + programmInfo.well} role='Куратор' />
      <div className='content content_view_split'>
        <div className='content__sidebar'>
          <Text size='m' view='primary' className='decorator decorator_indent-b_l'>Оглавление программы</Text>
          <Toc role='curator' />
        </div>

        <div className='content__article decorator decorator_space-v_4xl'>
          <div className='content__main'>
            <div className='decorator decorator_indent-b_2xl'>
              <Text tag='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_xs'>Программа бурения эксплуотационной скважины</Text>
              {programmInfo.field} > {programmInfo.bush} > {programmInfo.well}
            </div>

            <TeamList role='curator' />
          </div>
          
          <ArticleSection header='Цель' role='curator'>
            <ContentBlock isEditable={true} type='text'>
              <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='Строительство эксплуатационной скважины на Новопортовском НГКМ в соответствии с геолого-техническим заданием, в рамках утвержденного бюджета и в установленные временные сроки.' />
            </ContentBlock>

            <ContentBlock isEditable={true} type='informer'>
              <Informer status='system' view='filled'>
                <Text size='m' view='primary' weight='bold'>Примечание</Text>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='Программа бурения составлена в соответствии с проектной документацией на строительство горизонтальных скважин на Новопортовском НГКМ. Данная программа предназначена в качестве руководства, которое необходимо соблюдать в процессе проведения работ, если фактические геолого-технические условия соответствуют проектным. В случае если геолого-технические условия в процессе проведения работ не будут соответствовать проектным, то Подрядчик обязан прекратить дальнейшее проведение работ, принять все меры по недопущению усугубления ситуации и согласовать проведение дальнейших работ с представителем Заказчика.' />
              </Informer>
            </ContentBlock>

            <ContentBlock isEditable={true} type='h3'>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Распределение обязанностей и ответственность сторон</Text>
            </ContentBlock>
            
            <ContentBlock isEditable={true} type='text'>
              <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='Распределение обязанностей и ответственность сторон при выполнении любых операций определяется в соответствии с приложениями к договорам на оказание услуг «Распределение обязанностей в процессе строительства скважин между Заказчиком, Буровым и Нефтесервисными подрядчиками, участвующими в строительстве скважин» или данной программой бурения.' />
            </ContentBlock>
            
            <ContentBlock isEditable={true} type='h3'>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Требования в области ОТ, ПБ и ООС</Text>
            </ContentBlock>
            
            <ContentBlock isEditable={true} type='text'>
              <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='Основной целью требований в области ОТ, ПБ и ООС является отсутствие в процессе проведения всего комплекса работ любых инцидентов, связанных с травмированием и потерей трудоспособности персонала, а также причинением ущерба окружающей среде. Все выполняемые работы обязаны соответствовать отраслевым нормативным документам, действующим на территории Российской Федерации, а также стандартам и нормативно — методическим документам ПАО «Газпром нефть».' />
            </ContentBlock>
          </ArticleSection>
          
          <ArticleSection header='Общая информация о буровом оборудовании и бурильном инструменте' role='curator'>
            <ContentBlock type='h3'>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Буровое оборудование</Text>
            </ContentBlock>
            <ContentBlock type='table'>
              <table className='table'>
                <tbody>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Буровая установка</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Верхний силовой привод</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Буровые насосы</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
            
            <ContentBlock type='h3'>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Противовыбросовое оборудование</Text>
            </ContentBlock>
            <ContentBlock type='table'>
              <table className='table'>
                <tbody>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Плашечные превенторы</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Универсальный превентор</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
            
            <ContentBlock type='h3'>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Система очистки бурового раствора</Text>
            </ContentBlock>
            <ContentBlock type='table'>
              <table className='table'>
                <tbody>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Вибросита</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Ситогидроциклонная установка</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Центрифуги</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
            
            <ContentBlock type='h3'>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Бурильный инструмент</Text>
            </ContentBlock>
            <ContentBlock size='full' type='table'>
              <table className='table table_size_l'>
                <thead>
                  <tr>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Наименование</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Общая длина</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Вес погонного метра</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Толщина стенки</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Внутренний диаметр</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Наружный диаметр (тело трубы / замок)</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Крутящий момент свинчивания</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Тип резьбового соединения</Text>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Общая информация о скважине' role='curator'>
            <ContentBlock type='table'>
              <table className='table'>
                <tbody>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Месторождение</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>Новопортовское</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Номер кустовой площадки</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>14</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Номер скважины</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>5238</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Назначение скважины</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>Эксплуатационная</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Тип скважины</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>ГС 1000</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Позиция скважины на кустовой площадке</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>22</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Передвижка БУ с предыдущей позиции</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Нулевая отметка</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td rowSpan='2'><Text size='m' view='primary'>Альтитуда стола ротора (плановая)</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td rowSpan='3'><Text size='m' view='primary'>Географические координаты устья скважины</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td rowSpan='3'><Text size='m' view='primary'>Географические координаты точки Т2</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td rowSpan='3'><Text size='m' view='primary'>Географические координаты точки Т3</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Магнитное склонение</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Схождение меридианов</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Магнитная поправка</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Проектный пласт</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Пластовое давление</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Пластовая температура</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Индекс сложности скважины DDI</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Конструкция скважины' role='curator'>
            <ContentBlock size='full' type='table' isEditable={true}>
              <table className='table'>
                <thead>
                  <tr>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Наименование колонн</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Обсадная колонна</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Глубина спуска по стволу</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Глубина спуска по вертикали</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Интервал цементирования</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Плотность ЦР</Text>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan='2'>
                      <SelectWrap size='m' view='clear' items={['Комбинированный кондуктор', 'Техническая колонна', 'Эксплуатационная колонна', 'Хвостовик']} />
                    </td>
                    <td><Field width='full' size='m' view='clear' type='textarea' maxRows='10000' dValue='ОТТМ 530/324*9,5 «Д»' /></td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' view='clear' type='text' dValue='0' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' view='clear' type='text' dValue='50' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' view='clear' type='text' dValue='0' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' view='clear' type='text' dValue='50' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' view='clear' type='text' dValue='0' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' view='clear' type='text' dValue='50' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td><Field width='full' size='m' view='clear' type='text' dValue='1,5' rightSide='г/см²' /></td>
                  </tr>

                  <tr>
                    <td><Field width='full' size='m' view='clear' type='textarea' maxRows='10000' dValue='ОТТГ-324*9,5 мм «Д»' /></td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' view='clear' type='text' dValue='50' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' view='clear' type='text' dValue='457' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' view='clear' type='text' dValue='50' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' view='clear' type='text' dValue='457' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' view='clear' type='text' dValue='50' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' view='clear' type='text' dValue='460' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td><Field width='full' size='m' view='clear' type='text' dValue='1,89' rightSide='г/см²' /></td>
                  </tr>

                  <tr>
                    <td colSpan='6'><Button size='s' view='clear' width='full' label='Новая строка' /></td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Испытание обсадных колонн и цементного камня на герметичность' role='curator'>
            <ContentBlock type='table' isEditable={true}>
              <table className='table'>
                <thead>
                  <tr>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Название колонны</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Плотность жидкости опрессовки</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Давление на устье скважины при опрессовке</Text>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><SelectWrap size='m' view='clear' items={['Кондуктор', 'Цементное кольцо кондуктора', 'Техническая колонна', 'Цементное кольцо технической колонны', 'Эксплуатационная колонна', 'Цементное кольцо эксплуатационной колонны']} /></td>
                    <td><Field width='full' size='m' view='clear' type='text' dValue='1180 кг' rightSide='кг/м³' /></td>
                    <td><Field width='full' size='m' view='clear' type='text' dValue='11,5' rightSide='5 МПа' /></td>
                  </tr>
                  <tr>
                    <td><SelectWrap size='m' view='clear' items={['Цементное кольцо кондуктора', 'Кондуктор', 'Техническая колонна', 'Цементное кольцо технической колонны', 'Эксплуатационная колонна', 'Цементное кольцо эксплуатационной колонны']} /></td>
                    <td><Field width='full' size='m' view='clear' type='text' dValue='1180' rightSide='кг/м³' /></td>
                    <td><Field width='full' size='m' view='clear' type='text' dValue='4,0' rightSide='5 МПа' /></td>
                  </tr> 
                  <tr>
                    <td><SelectWrap size='m' view='clear' items={['Техническая колонна', 'Кондуктор', 'Цементное кольцо кондуктора', 'Цементное кольцо технической колонны', 'Эксплуатационная колонна', 'Цементное кольцо эксплуатационной колонны']} /></td>
                    <td><Field width='full' size='m' view='clear' type='text' dValue='1180' rightSide='кг/м³' /></td>
                    <td><Field width='full' size='m' view='clear' type='text' dValue='19' rightSide='5 МПа' /></td>
                  </tr>
                  <tr>
                    <td><SelectWrap size='m' view='clear' items={['Цементное кольцо технической колонны', 'Кондуктор', 'Цементное кольцо кондуктора', 'Техническая колонна', 'Эксплуатационная колонна', 'Цементное кольцо эксплуатационной колонны']} /></td>
                    <td><Field width='full' size='m' view='clear' type='text' dValue='1180' rightSide='кг/м³' /></td>
                    <td><Field width='full' size='m' view='clear' type='text' dValue='6,0' rightSide='5 МПа' /></td>
                  </tr>
                  <tr>
                    <td><SelectWrap size='m' view='clear' items={['Эксплуатационная колонна', 'Кондуктор', 'Цементное кольцо кондуктора', 'Техническая колонна', 'Цементное кольцо технической колонны', 'Цементное кольцо эксплуатационной колонны']} /></td>
                    <td><Field width='full' size='m' view='clear' type='text' dValue='1180' rightSide='кг/м³' /></td>
                    <td><Field width='full' size='m' view='clear' type='text' dValue='19' rightSide='5 МПа' /></td>
                  </tr>
                  <tr>
                    <td><SelectWrap size='m' view='clear' items={['Цементное кольцо эксплуатационной колонны', 'Кондуктор', 'Цементное кольцо кондуктора', 'Техническая колонна', 'Цементное кольцо технической колонны', 'Эксплуатационная колонна']} /></td>
                    <td><Field width='full' size='m' view='clear' type='text' dValue='1080' rightSide='кг/м³' /></td>
                    <td><Field width='full' size='m' view='clear' type='text' dValue='' rightSide='5 МПа' /></td>
                  </tr>
                  <tr>
                    <td colSpan='3'><Button size='s' view='clear' width='full' label='Новая строка' /></td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Литолого-стратиграфическая характеристика разреза скважины' role='curator'>
            <ContentBlock type='table'>
              <table className='table'>
                <thead>
                  <tr>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Пласт</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '70px' }}>Абс. глубина кровли</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '150px' }}>Литология</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Характер насыщения</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '70px' }}>Среднее пластовое давление</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '70px' }}>Температура</Text>
                  </tr>
                </thead>
                
                <tbody>
                  <tr>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Профиль ствола скважины' role='curator'>
            <ContentBlock size='full' type='table'>
              <table className='table' style={{ width: '1680px' }}>
                <thead>
                  <tr>
                    <Text as='th' rowSpan='2' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs' style={{ width: '150px' }}>Комментарии</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs' style={{ width: '100px' }}>Глубина по стволу</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs' style={{ width: '100px' }}>Зенитный угол</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs' style={{ width: '90px' }}>Азимут</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs' style={{ width: '100px' }}>СЮ</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs' style={{ width: '100px' }}>ВЗ</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs' style={{ width: '130px' }}>Широта</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs' style={{ width: '130px' }}>Долгота</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs' style={{ width: '100px' }}>X</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs' style={{ width: '100px' }}>Y</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs' style={{ width: '110px' }}>Глубина по вертикали</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs' style={{ width: '100px' }}>Абс.Отметка</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs' style={{ width: '90px' }}>Простр. инт-ть</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs' style={{ width: '100px' }}>Смещение</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs' style={{ width: '90px' }}>Дирекц. угол</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs' style={{ width: '90px' }}>Отход</Text>
                  </tr>
                  <tr>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>MD</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Inc</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Az</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>N-S</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>E-W</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Latitude</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Longitude</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Northing</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Easting</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>TVD</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>TVD SS</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>DLS</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Closure</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Closure dir.</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>V.Sec</Text>
                  </tr>
                </thead>
                
                <tbody>
                  <tr>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
            
            <ContentBlock isEditable={true} type='informer'>
              <Informer status='system' view='filled'>
                <Text size='m' view='primary' weight='bold'>Примечание</Text>                  
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='Максимально допустимая пространственная интенсивность в интервале набора параметров кривизны определяется от плановой + 0,50/10м. Максимально допустимая пространственная интенсивность в интервале стабилизации не более 10/10м. Максимально допустимая пространственная интенсивность в зоне ГНО не более 0.30/10м.' />
              </Informer>
            </ContentBlock>
            <ContentBlock isEditable={true} type='image'>
              <img src={IMGProfileOfTheWellbore} alt=' ' />
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Отчет о рисках пересечения стволов скважин' role='curator'></ArticleSection>

          <ArticleSection header='Программа геофизических исследований и каротажа в процессе бурения' role='curator'>
            <ContentBlock type='h3'>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Буровое оборудование</Text>
            </ContentBlock>
            <ContentBlock size='full' type='table'>
              <table className='table'>
                <thead>
                  <tr>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '250px' }}>Наименование</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '' }}></Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '300px' }}>Масштаб</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '200px' }}>Интервал</Text>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Порядок снятия замера при бурении' role='curator'></ArticleSection>

          <ArticleSection header='Требования к каротажным данным по отправке' role='curator'></ArticleSection>

          <div className='content__main decorator decorator_indent-t_4xl' style={{ marginBottom: '-32px' }}>
            <Text tag='h2' size='3xl' view='primary' lineHeight='s' id='Секция 660 мм / 393,7 мм'>Секция 660 мм / 393,7 мм</Text>
          </div>

            <ArticleSection header='Технологические риски' role='curator' section='Секция 660 мм / 393,7 мм'>
              <ContentBlock type='table' isEditable={true}>
                <table className='table'>
                  <thead>
                    <tr>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Риски</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Мероприятия по снижению риска</Text>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' dValue='Сальникообразования' />
                      </td>
                      <td>
                        <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' dValue='Соблюдение режимов промывки, использование противосальниковой добавоки MEX-CLEAN. Расхаживание КНБК на всю длину свечи. До начала бурения секции под кондуктор иметь в наличии на буровой объем бурового раствора с низкими реологическими параметрами для оперативного разбавления после интервала ММП. При бурении секции 393,7 мм начать снижение условной вязкости бурового раствора с глубины 190* метров. При бурении секции 393,7 мм ограничить мех. скорость в интервале 170-280 м* до 90 м/час, (* глубина условная, до полного перехода из песка в глину). С глубины 190 метров производить одно расхаживание КНБК с вращением инструмента, не допускать превышения мгновенной мех. скорости свыше 140 м/час. При бурении интервала 0-190 м поддерживать производительность буровых насосов 50-55 м/ч, 190-460 м не менее 65 л/сек.' />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' dValue='Отсутствие центра скважины относительно центра ротора. Отклонение от вертикали' />
                      </td>
                      <td>
                        <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' dValue='Забуривание под направление после центрирования вышки БУ, ротора с использованием прямолинейного бурильного инструмента.' />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' dValue='Проседание грунта и образование воронок в процессе бурения скважин' />
                      </td>
                      <td>
                        <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' dValue='Оборудование устья скважины металлическим коробом. Сокращение сроков бурения. Поддержание минимальной температуры бурового раствора в емкостях (10-15°С), посредством отключения во время бурения подогрева емкостей.' />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan='2'>
                        <Button size='s' view='clear' width='full' label='Новая строка' />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Общие сведения' role='curator' section='Секция 660 мм / 393,7 мм'>
              <ContentBlock type='table' isEditable={true}>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td><Field width='full' size='m' view='clear' type='textarea' maxRows='10000' dValue='Забой скважины' /></td>
                      <td><Field width='full' size='n' view='clear' type='text' placeholder='0' dValue='460' rightSide='м' /></td>
                    </tr>
                    
                    <tr>
                      <td><Field width='full' size='m' view='clear' type='textarea' maxRows='10000' dValue='Глубина спуска обсадной колонны' /></td>
                      <td><Field width='full' size='n' view='clear' type='text' placeholder='0' dValue='457' rightSide='м' /></td>
                    </tr>
                    
                    <tr>
                      <td><Field width='full' size='m' view='clear' type='textarea' maxRows='10000' dValue='Интервал цементирования цементным раствором' /></td>
                      <td>
                        <div className='decorator decorator_distribute_left'>
                          <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='460' leftSide='от' rightSide='м' />
                          <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='280' leftSide='до' rightSide='м' />
                        </div>
                      </td>
                    </tr>
                    
                    <tr>
                      <td><Field width='full' size='m' view='clear' type='textarea' maxRows='10000' dValue='Интервал цементирования гельцементным раствором' /></td>
                      <td>
                        <div className='decorator decorator_distribute_left'>
                          <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='280' leftSide='от' rightSide='м' />
                          <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='0' leftSide='до' rightSide='м' />
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td><Field width='full' size='m' view='clear' type='textarea' maxRows='10000' dValue='Статическая температура на забое' /></td>
                      <td><Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='+8,0' rightSide='°С' /></td>
                    </tr>

                    <tr>
                      <td><Field width='full' size='m' view='clear' type='textarea' maxRows='10000' dValue='Градиент пластового давления' /></td>
                      <td><Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='0,0098' rightSide='МПа/м' /></td>
                    </tr>
                    
                    <tr>
                      <td><Field width='full' size='m' view='clear' type='textarea' maxRows='10000' dValue='Градиент давления гидроразрыва' /></td>
                      <td><Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='0,0206' rightSide='МПа/м' /></td>
                    </tr>
                  </tbody>
                </table>
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Подготовительные работы перед началом бурения секции 660 мм / 393,7 мм' role='curator' section='Секция 660 мм / 393,7 мм'>
              <ContentBlock isEditable={true} type='text'>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='' />
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Режимно – технологическая карта' role='curator' section='Секция 660 мм / 393,7 мм'>
              <ContentBlock type='table' size='full'>
                <table className='table'>
                  <thead>
                    <tr>
                      <Text as='th' colSpan='3' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Долото</Text>
                      <Text as='th' rowSpan='2' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Интервал бурения</Text>
                      <Text as='th' rowSpan='2' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Проходка</Text>
                      <Text as='th' rowSpan='2' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Время бурения</Text>
                      <Text as='th' rowSpan='2' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Мех. скорость (план)</Text>
                      <Text as='th' rowSpan='2' colSpan='2' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Режим бурения</Text>
                      <Text as='th' colSpan='3' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Гидравлика</Text>
                      <Text as='th' colSpan='2' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Примечание</Text>
                    </tr>
                    <tr>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Диаметр долота</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Тип долота</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Код IADC</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Расход</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Насадки</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>HSI</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Код износа до СПО</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Маркировка</Text>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                  </tbody>
                </table>
              </ContentBlock>
            </ArticleSection>
            
            <ArticleSection header='Буровой раствор' role='geologist' section='Секция 660 мм / 393,7 мм'>
              <ContentBlock type='text'>
                <Text size='m' view='primary'>С целью предотвращения размыва слабосцементированного песчаника в интервале залегания зоны ММП и предотвращения интенсивной гидратации глин для бурения данной секции применяется глинистый буровой раствор на основе бентонита. Данная система за счет высокой вязкости позволяет предотвратить осыпи и обвалообразования, а также обеспечить удовлетворительное качество очистки ствола скважины большого диаметра.</Text>
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Параметры бурового раствора' role='curator' section='Секция 660 мм / 393,7 мм'>
              <ContentBlock type='table' size='full'>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Плотность</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Интервал по инструменту</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Условная вязкость</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Водоотдача</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Толщина корки</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Пластическая вязкость</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>СНС</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>ДНС</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>рН</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Содержание песка</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Общая жесткость</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>МБТ</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                  </tbody>
                </table>
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Потребность в буровом растворе' role='curator' section='Секция 660 мм / 393,7 мм'>
              <ContentBlock type='table' size='full'>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Интервал</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Тип раствора</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Интервал по инструменту</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Диаметр долота</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Диаметр колонны</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Внутренний диаметр предыдущей колонны</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Длина участка по инструменту</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Ожидаемый коэффициент кавернозности</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Переведено с предыдущего интервала/скважины</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Объем раствора на поверхности</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Объем раствора в колонне</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Объем раствора в открытом стволе</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Коэффициент эффективности оборудования очистки</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Объем выбуренной породы с учетом коэф.разуплотнения</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Максимальное содержание выбуренной породы</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Влажность шлама</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Потери раствора со шламом</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Потери в скважине</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Объем раствора на поверхности по окончанию бурения интервала</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Расчетный объем свежеприготовленного раствора к обработке на бурение интервала</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Переведено на следующий интервал/скважину</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                  </tbody>
                </table>
              </ContentBlock>
            </ArticleSection>
            
            <ArticleSection header='Приготовление и обработка бурового раствора' role='curator' section='Секция 660 мм / 393,7 мм'>
              <ContentBlock type='table'>
                <table className='table'>
                  <thead>
                    <tr>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Наименование реагента</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Назначение</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Концентрация</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Потребность</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Количество</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Вес единицы</Text>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                  </tbody>
                </table>
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='КНБК для бурения секции 393,7 мм' role='curator' section='Секция 660 мм / 393,7 мм'>
              <ContentBlock type='table' size='full'>
                <table className='table'>
                  <thead>
                    <tr>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Наименование элемента</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Подрядная организация</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Плановая длина</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Наружный диаметр</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Минимальный внутренний диаметр</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Резьба снизу</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Резьба сверху</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Крутящий момент свинчивания</Text>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Долото типа PDC</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>Долотный сервис</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>0.51 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>393.7 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>-</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>-</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>НЗ-177</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>46 кН*м</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Наддолотный переводник</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>Буровой подрядчик</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>0.39 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>224 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>89 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>МЗ-177</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>НЗ-152</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>42 кН*м</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>9-5/8 SperryDrill 3/4-6.0, ABH=1.5</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>Подрядчик по ННБ</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>9.72 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>245 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>158 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>MЗ-152</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>МЗ-152</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>48 кН*м</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Обратный клапан</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>Подрядчик по ННБ</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>0.63 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>204 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>73 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>НЗ-152</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>МЗ-152</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>48 кН*м</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Немагнитная УБТ</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>Подрядчик по ННБ</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>9.21 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>202 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>84 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>НЗ-152</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>МЗ-152</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>48 кН*м</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Переводник Индекс ЕМ</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>Подрядчик по ННБ</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>0.92 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>201 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>84 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>НЗ-152</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>МЗ-152</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>48 кН*м</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Переводник Антенна EM</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>Подрядчик по ННБ</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>0.91 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>208 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>89 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>НЗ-152</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>МЗ-152</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>48 кН*м</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Переходный переводник</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>Подрядчик по ННБ</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>0.5 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>209 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>76 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>НЗ-152</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>МЗ-133</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>30 кН*м</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>ТБТ-127</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>Буровой подрядчик</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>28.27 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>127 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>76 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>НЗ-133</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>МЗ-133</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>30.8 кН*м</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>СБТ-127х9,19 S-135</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>Буровой подрядчик</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ост.</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>165.1 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>108.6 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>НЗ-133</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>МЗ-133</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>30.8 кН*м</Text></td>
                    </tr>
                  </tbody>
                </table>
              </ContentBlock>
            </ArticleSection>
            
            <ArticleSection header='Бурение секции 660 мм / 393,7 мм' role='curator' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='Спуск обсадной колонны секции 660 мм / 393,7 мм' role='curator' section='Секция 660 мм / 393,7 мм'></ArticleSection>

            <ArticleSection header='Порядок расстановки центраторов' role='curator' section='Секция 660 мм / 393,7 мм'>
              <ContentBlock type='table'>
                <table className='table'>
                  <thead>
                    <tr>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>№</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Глубина установки центратора</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Расстояние между центраторами</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Тип центратора</Text>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                      <td><Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text></td>
                    </tr>
                  </tbody>
                </table>
              </ContentBlock>

              <ContentBlock type='informer'>
                <Informer status='system' view='filled'>
                  <Text size='m' view='primary' weight='bold'>Примечание</Text>
                  <Text size='m' view='primary'>На трубу с башмаком установку центратора не производить.</Text>
                </Informer>
              </ContentBlock>

            </ArticleSection>
            
            <ArticleSection header='Цементирование обсадной колонны секции 660 мм / 393,7 мм' role='curator' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='Таблица объемов и режимов закачки' role='curator' section='Секция 660 мм / 393,7 мм'></ArticleSection>

            <ArticleSection header='Свойства и состав отмывающей буферной жидкости' role='curator' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='Свойства цементного раствора' role='curator' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='Свойства гельцементного раствора' role='curator' section='Секция 660 мм / 393,7 мм'></ArticleSection>

            <ArticleSection header='График зависимости эквивалентной циркуляционной плотности и гидростатического давления в зависимости от откачанного объема' role='curator' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='График расчетного давления на устье' role='curator' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='Лабораторный тест цементного раствора (гель): пилотный тест' role='curator' section='Секция 660 мм / 393,7 мм'></ArticleSection>

            <ArticleSection header='График загустевания (гель)' role='curator' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='График набора прочности цементным раствором (гель)' role='curator' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='Лабораторный тест цементного раствора: пилотный тест' role='curator' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='График загустевания цементного раствора' role='curator' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='График набора прочности цементного раствора' role='curator' section='Секция 660 мм / 393,7 мм'></ArticleSection>

          <div className='content__main decorator decorator_indent-t_4xl' style={{ marginBottom: '-32px' }}>
            <Text tag='h2' size='3xl' view='primary' lineHeight='s' id='Секция 295,3 мм'>Секция 295,3 мм</Text>
          </div>

            <ArticleSection header='Технологические риски' role='curator' section='Секция 295,3 мм'>
              <ContentBlock isEditable={true} type='text'>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='' />
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Общие сведения' role='curator' section='Секция 295,3 мм'>
              <ContentBlock isEditable={true} type='text'>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='' />
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Подготовительные работы перед началом бурения секции 295,3 мм' role='curator' section='Секция 295,3 мм'>
              <ContentBlock isEditable={true} type='text'>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='' />
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Режимно – технологическая карта' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Буровой раствор' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Параметры бурового раствора' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Типоразмер сеток вибросит' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Потребность в буровом растворе' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='КНБК для бурения секции 295,3 мм' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Режимная карта бурения секции 295,3 мм' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Бурение секции 295,3 мм' role='curator' section='Секция 295,3 мм'>
              <ContentBlock isEditable={true} type='text'>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='' />
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Спуск обсадной колонны секции 295,3 мм' role='curator' section='Секция 295,3 мм'>
              <ContentBlock isEditable={true} type='text'>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='' />
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Порядок расстановки центраторов' role='curator' section='Секция 295,3 мм'>
              <ContentBlock isEditable={true} type='text'>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='' />
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Профиль центрации обсадной колонны' role='curator' section='Секция 295,3 мм'>
              <ContentBlock isEditable={true} type='text'>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='' />
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Цементирование обсадной колонны секции 295,3 мм' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Таблица объемов и режимов закачки' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Свойства и состав отмывающей буферной жидкости' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Свойства и состав реологической буферной жидкости' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Свойства цементного раствора' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Свойства гельцементного раствора' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='График зависимости эквивалентной циркуляционной плотности и гидростатического давления в зависимости от откачанного объема' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='График расчетного давления на устье' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Лабораторный тест цементного раствора (гель): пилотный тест' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='График загустевания (гель)' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='График набора прочности цементным раствором (гель)' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Лабораторный тест цементного раствора: пилотный тест' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='График загустевания цементного раствора' role='curator' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='График набора прочности цементного раствора' role='curator' section='Секция 295,3 мм'></ArticleSection>

          <div className='content__main decorator decorator_indent-t_4xl' style={{ marginBottom: '-32px' }}>
            <Text tag='h2' size='3xl' view='primary' lineHeight='s' id='Секция 220,7 мм (транспортный ствол скважины)'>Секция 220,7 мм (транспортный ствол скважины)</Text>
          </div>

            <ArticleSection header='Технологические риски' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'>
              <ContentBlock isEditable={true} type='text'>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='' />
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Подготовительные работы перед началом бурения секции 220,7 мм' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Режимно – технологическая карта' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Буровой раствор' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Параметры бурового раствора' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Типоразмер сеток вибросит' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Потребность в буровом растворе' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Применяемые химические реагенты, концентрация и ожидаемая потребность на бурение интервала' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Мероприятия по прокачиванию очищающих пачек при бурении интервала' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Ориентировочная потребность ситовых панелей на бурение интервала' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Гидравлический расчет' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='КНБК для бурения секции 220,7 мм' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Режимная карта бурения секции 220,7 мм' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Бурение секции 220,7 мм' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'>
              <ContentBlock isEditable={true} type='text'>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='' />
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Спуск обсадной колонны секции 220,7 мм' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'>
              <ContentBlock isEditable={true} type='text'>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='' />
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Порядок расстановки центраторов' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'>
              <ContentBlock isEditable={true} type='text'>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='' />
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Профиль центрации обсадной колонны' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'>
              <ContentBlock isEditable={true} type='text'>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='' />
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Цементирование обсадной колонны секции 220,7 мм' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Таблица объемов и режимов закачки' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Свойства и состав отмывающей буферной жидкости' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Свойства и состав реологической буферной жидкости' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Свойства цементного раствора' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Свойства гельцементного раствора' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='График зависимости эквивалентной циркуляционной плотности и гидростатического давления в зависимости от откачанного объема' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='График расчетного давления на устье' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Лабораторный тест цементного раствора (гель): пилотный тест' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='График консистенции г/цементного раствора' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='График набора прочности г/цементного раствора' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Лабораторный тест цементного раствора: пилотный тест' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='График загустевания цементного раствора' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='График набора прочности цементного раствора' role='curator' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

          <div className='content__main decorator decorator_indent-t_4xl' style={{ marginBottom: '-32px' }}>
            <Text tag='h2' size='3xl' view='primary' lineHeight='s' id='Секция 152,4 мм'>Секция 152,4 мм</Text>
          </div>

            <ArticleSection header='Технологические риски' role='curator' section='Секция 152,4 мм'>
              <ContentBlock isEditable={true} type='text'>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='' />
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Общие сведения' role='curator' section='Секция 152,4 мм'>
              <ContentBlock isEditable={true} type='text'>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='' />
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Подготовительные работы перед началом бурения секции 152,4 мм' role='curator' section='Секция 152,4 мм'>
              <ContentBlock isEditable={true} type='text'>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='' />
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Режимно – технологическая карта' role='curator' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Буровой раствор' role='curator' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Параметры бурового раствора' role='curator' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Типоразмер сеток вибросит' role='curator' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Потребность в буровом растворе' role='curator' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Применяемые химические реагенты, концентрация и ожидаемая потребность на бурение интервала' role='curator' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Тандемные пачки при бурении горизонтального ствола в интервале 2612-3746 м в объеме 15 м3' role='curator' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Мероприятия по прокачиванию очищающих пачек при бурении интервала' role='curator' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Ориентировочная потребность ситовых панелей на бурение интервала' role='curator' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Гидравлический расчет' role='curator' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='КНБК для бурения секции 152,4 мм' role='curator' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Режимная карта бурения секции 152,4 мм' role='curator' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Бурение секции 152,4 мм' role='curator' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Спуск обсадной колонны секции 152,4 мм' role='curator' section='Секция 152,4 мм'></ArticleSection>
        </div>
      </div>

      <Snackbar message='Раздел опубликован' id='savedSectionSnackbar' />
    </React.Fragment>
  );
}

export default GeologistProgrammPage;