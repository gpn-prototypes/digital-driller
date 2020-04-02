import React from 'react';
import { useParams } from 'react-router-dom';
import { Text, Informer, Button, IconAdd, IconComment, IconAlignLeft, IconAlert, IconTable, IconLink, IconPhoto } from '@gpn-design/uikit';
import TheHeader from '../../components/TheHeader/TheHeader';
import Toc from '../../components/Toc/Toc';
import TeamList from '../../components/TeamList/TeamList';
import ArticleSection from '../../components/ArticleSection/ArticleSection';
import Field from '../../components/Field/Field';
import ContentBlock from '../../components/ContentBlock/ContentBlock';

import { tocList, team } from '../../mocks/oldProgramm';
import programmList from '../../mocks/programmList';

function GeologistProgrammPage() {
  let { id } = useParams();
  let programmInfo = programmList.filter(item => item.id === id)[0];
  return (
    <div className='content-page'>
      <TheHeader isMinified={true} programmName={programmInfo.field + ' > ' + programmInfo.bush + ' > ' + programmInfo.well} role='Куратор' />
      <div className='content content_view_split'>
        <div className='content__sidebar'>
          <Text size='m' view='primary' className='decorator decorator_indent-b_l'>Оглавление программы</Text>
          <Toc list={tocList} />
        </div>

        <div className='content__article decorator decorator_space-v_4xl'>
          <div className='content__main'>
            <div className='decorator decorator_indent-b_2xl'>
              <Text tag='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_xs'>Программа бурения</Text>
              {programmInfo.field} > {programmInfo.bush} > {programmInfo.well}
            </div>

            <TeamList team={team} tocList={tocList} />
          </div>
          
          <ArticleSection header='Цель' tocList={tocList} team={team}>
            <ContentBlock isEditable={true}>
              <Field width='full' size='m' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='Строительство эксплуатационной скважины на Новопортовском НГКМ в соответствии с геолого-техническим заданием, в рамках утвержденного бюджета и в установленные временные сроки.' />
            </ContentBlock>

            <ContentBlock isEditable={true}>
              <Informer status='system' view='filled'>
                <Text size='m' view='primary' weight='bold'>Примечание</Text>
                <Field width='full' size='m' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='Программа бурения составлена в соответствии с проектной документацией на строительство горизонтальных скважин на Новопортовском НГКМ. Данная программа предназначена в качестве руководства, которое необходимо соблюдать в процессе проведения работ, если фактические геолого-технические условия соответствуют проектным. В случае если геолого-технические условия в процессе проведения работ не будут соответствовать проектным, то Подрядчик обязан прекратить дальнейшее проведение работ, принять все меры по недопущению усугубления ситуации и согласовать проведение дальнейших работ с представителем Заказчика.' />
              </Informer>
            </ContentBlock>

            <ContentBlock isEditable={true}>
              <Field width='full' size='l' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='Распределение обязанностей и ответственность сторон' />
            </ContentBlock>
            
            <ContentBlock isEditable={true}>
              <Field width='full' size='m' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='Распределение обязанностей и ответственность сторон при выполнении любых операций определяется в соответствии с приложениями к договорам на оказание услуг «Распределение обязанностей в процессе строительства скважин между Заказчиком, Буровым и Нефтесервисными подрядчиками, участвующими в строительстве скважин» или данной программой бурения.' />
            </ContentBlock>
            
            <ContentBlock isEditable={true}>
              <Field width='full' size='l' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='Требования в области ОТ, ПБ и ООС' />
            </ContentBlock>
            
            <ContentBlock isEditable={true}>
              <Field width='full' size='m' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='Основной целью требований в области ОТ, ПБ и ООС является отсутствие в процессе проведения всего комплекса работ любых инцидентов, связанных с травмированием и потерей трудоспособности персонала, а также причинением ущерба окружающей среде. Все выполняемые работы обязаны соответствовать отраслевым нормативным документам, действующим на территории Российской Федерации, а также стандартам и нормативно — методическим документам ПАО «Газпром нефть».' />
            </ContentBlock>
          </ArticleSection>
          
          <ArticleSection header='Общая информация о буровом оборудовании и бурильном инструменте' tocList={tocList} team={team}>
            <ContentBlock isEditable={true}>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Буровое оборудование</Text>
            </ContentBlock>
            <ContentBlock isEditable={true}>
              <table className='table table_editable'>
                <tbody>
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Буровая установка' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='БУ 5000-320 ЭК-БМЧ' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Верхний силовой привод' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='VARCO TDC11SB02V12' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Буровые насосы' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='УНБТ-1180' />
                    </td>
                  </tr>

                  <tr>
                    <td colSpan='2'>
                      <Button size='m' view='clear' width='full' label='Новая строка' />
                    </td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
            
            <ContentBlock isEditable={true}>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Противовыбросовое оборудование</Text>
            </ContentBlock>
            <ContentBlock isEditable={true}>
              <table className='table table_editable'>
                <tbody>
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Плашечные превенторы' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='ППГ 350*35 (Волгоград)' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Универсальный превентор' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='ПУГ 350*35 (Волгоград)' />
                    </td>
                  </tr>

                  <tr>
                    <td colSpan='2'>
                      <Button size='m' view='clear' width='full' label='Новая строка' />
                    </td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
            
            <ContentBlock isEditable={true}>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Система очистки бурового раствора</Text>
            </ContentBlock>
            <ContentBlock isEditable={true}>
              <table className='table table_editable'>
                <tbody>
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Вибросита' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Derrick FLC2000' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Ситогидроциклонная установка' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Derrick FLC-503' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Центрифуги' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Derrick DE-1000 GBD' />
                    </td>
                  </tr>

                  <tr>
                    <td colSpan='2'>
                      <Button size='m' view='clear' width='full' label='Новая строка' />
                    </td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
            
            <ContentBlock isEditable={true}>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Бурильный инструмент</Text>
            </ContentBlock>
            <ContentBlock isEditable={true} width='full'>
              <table className='table table_editable table_size_l'>
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
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='УБТ-229' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='19' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='273' rightSide='кг' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='74.5' rightSide='мм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='80' rightSide='мм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='229' rightSide='мм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='51' rightSide='кН×м' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='З-171' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='ТБПК 127' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='4148' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='34,1' rightSide='кг' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='9,19' rightSide='мм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='108,6' rightSide='мм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='127/168,3' rightSide='мм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='59' rightSide='кН×м' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='NC-50 З-133' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='ТБ 101,6' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='4526' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='23,6' rightSide='кг' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='8,38' rightSide='мм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='84.84' rightSide='мм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='101.6/133.4' rightSide='мм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='30,8' rightSide='кН×м' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='UI NC-40 RH З-108' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='ТБТ-101,6' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='474' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='45,9' rightSide='кг' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='19,5' rightSide='мм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='63,5' rightSide='мм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='101,6/133,4' rightSide='мм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='29,6' rightSide='кН×м' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='NC-40 З-108' />
                    </td>
                  </tr>
                
                  <tr>
                    <td colSpan='8'>
                      <Button size='m' view='clear' width='full' label='Новая строка' />
                    </td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Общая информация о скважине' tocList={tocList} team={team}>
            <ContentBlock>
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
                    <td><Text size='m' view='primary' lineHeight='s'>9м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Нулевая отметка</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>Стол ротора, Балтийская система</Text></td>
                  </tr>
                  <tr>
                    <td rowSpan='2'><Text size='m' view='primary'>Альтитуда стола ротора (плановая)</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>От уровня моря: 49.64 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>От уровня земли: 39.63 м</Text></td>
                  </tr>
                  <tr>
                    <td rowSpan='3'><Text size='m' view='primary'>Географические координаты устья скважины</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>67° 50' 24.529 N</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>72° 34' 22.819 E</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Z: 49.64 м</Text></td>
                  </tr>
                  <tr>
                    <td rowSpan='3'><Text size='m' view='primary'>Географические координаты точки Т2</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>67° 49' 28.618 N</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>72° 32' 38.960 E</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Z: 1892.64 м</Text></td>
                  </tr>
                  <tr>
                    <td rowSpan='3'><Text size='m' view='primary'>Географические координаты точки Т3</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>67° 48' 50.438 N</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>72° 32' 11.282 E</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Z: 1892.64 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Магнитное склонение</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>24.70 °</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Схождение меридианов</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>-2.25 °</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Магнитная поправка</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>26.95 °</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Проектный пласт</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>НП 5</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Пластовое давление</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>183 МПа</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Пластовая температура</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>57,4 °С</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Индекс сложности скважины DDI</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>6.582</Text></td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Конструкция скважины' tocList={tocList} team={team}>
            <ContentBlock size='full'>
              <table className='table table_editable' style={{ width: '1200px' }}>
                <thead>
                  <tr>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Наименование колонн</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Обсадная колонна</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '200px' }}>Глубина спуска по стволу</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '200px' }}>Глубина спуска по вертикали</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '200px' }}>Интервал цементирования</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '80px' }}>Плотность ЦР</Text>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan='2'>
                      <Field width='full' size='m' type='textarea' maxRows='3' dValue='Комбинированный кондуктор' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='ОТТМ 530/324*9,5 «Д»' />
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='0' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='50' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='0' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='50' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='0' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='50' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='1,5' rightSide='г/см²' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='ОТТГ-324*9,5 мм «Д»' />
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='50' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='457' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='50' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='457' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='50' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='460' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='1,89' rightSide='г/см²' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td rowSpan='2'>
                      <Field width='full' size='m' type='textarea' maxRows='3' dValue='Техническая колонна' />
                    </td>
                    <td rowSpan='2'>
                      <Field width='full' size='m' type='text' placeholder='' dValue='ОТТГ -244,5*8,9 мм «Д»' />
                    </td>
                    <td rowSpan='2'>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='0' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='1377' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td rowSpan='2'>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='0' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='1098' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='0' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='410' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='1,5' rightSide='г/см²' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='410' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='1380' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='1,89' rightSide='г/см²' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td rowSpan='2'>
                      <Field width='full' size='m' type='textarea' maxRows='3' dValue='Эксплуатационная колонна' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='ОТТГ-178*10,4 «Е»' />
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='0' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='280' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='0' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='280' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='880' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='2526' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='1,45' rightSide='г/см²' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='ОТТГ-178*9,2 «Д»' />
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='280' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='3113' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='280' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='1893' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='2526' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='3116' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='1,91' rightSide='г/см²' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='3' dValue='Хвостовик' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='ОТТМ-114,3х7,4 / ФС-П 114 ОТТМ' />
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='3038' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='4340' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='1888' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='1893' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='' leftSide='от' rightSide='м' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='' leftSide='до' rightSide='м' />
                      </div>
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='' rightSide='г/см²' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td colSpan='6'>
                      <Button size='m' view='clear' width='full' label='Новая строка' />
                    </td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Испытание обсадных колонн и цементного камня на герметичность' tocList={tocList} team={team}>
            <ContentBlock isEditable={true}>
              <table className='table table_editable'>
                <thead>
                  <tr>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Название колонны</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '150px' }}>Плотность жидкости опрессовки</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '150px' }}>Давление на устье скважины при опрессовке</Text>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='3' dValue='Кондуктор' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='1180' rightSide='кг/м³' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='11,5' rightSide='МПа' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='3' dValue='Цементное кольцо кондуктора' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='1180' rightSide='кг/м³' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='4,0' rightSide='МПа' />
                    </td>
                  </tr> 
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='3' dValue='Техническая колонна' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='1180' rightSide='кг/м³' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='19' rightSide='МПа' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='3' dValue='Цементное кольцо технической колонны' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='1180' rightSide='кг/м³' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='6,0' rightSide='МПа' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='3' dValue='Эксплуатационная колонна' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='1180' rightSide='кг/м³' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='19' rightSide='МПа' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='3' dValue='Цементное кольцо эксплуатационной колонны' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='1080' rightSide='кг/м³' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='' rightSide='м' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td colSpan='3'>
                      <Button size='m' view='clear' width='full' label='Новая строка' />
                    </td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Литолого-стратиграфическая характеристика разреза скважины' tocList={tocList} team={team}></ArticleSection>

          <ArticleSection header='Профиль ствола скважины' tocList={tocList} team={team}></ArticleSection>

          <ArticleSection header='Отчет о рисках пересечения стволов скважин' tocList={tocList} team={team}></ArticleSection>

          <ArticleSection header='Программа геофизических исследований и каротажа в процессе бурения' tocList={tocList} team={team}></ArticleSection>

          <ArticleSection header='Порядок снятия замера при бурении' tocList={tocList} team={team}></ArticleSection>

          <ArticleSection header='Требования к каротажным данным по отправке' tocList={tocList} team={team}></ArticleSection>
        </div>
      </div>
    </div>
  );
}

export default GeologistProgrammPage;
