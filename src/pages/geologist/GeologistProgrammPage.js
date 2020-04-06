import React from 'react';
import { useParams } from 'react-router-dom';
import { Text, Informer, Button } from '@gpn-design/uikit';
import Field from '../../components/Field/Field';
import TheHeader from '../../components/TheHeader/TheHeader';
import Toc from '../../components/Toc/Toc';
import TeamList from '../../components/TeamList/TeamList';
import ArticleSection from '../../components/ArticleSection/ArticleSection';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import Snackbar from '../../components/Snackbar/Snackbar';

import programmList from '../../mocks/programmList';

import IMGProfileOfTheWellbore from '../../images/Профиль_ствола_скважины.jpg';
import IMGRiskReportTheIntersectionOfTheWellbore from '../../images/Отчет_о_рисках_пересечения_стволов_скважин.jpg';

function GeologistProgrammPage() {
  let { id } = useParams();
  let programmInfo = programmList.filter(item => item.id === id)[0];
  return (
    <div className='content-page'>
      <TheHeader isMinified={true} programmName={programmInfo.field + ' > ' + programmInfo.bush + ' > ' + programmInfo.well} role='Геолог' />
      <div className='content content_view_split'>
        <div className='content__sidebar'>
          <Text size='m' view='primary' className='decorator decorator_indent-b_l'>Оглавление программы</Text>
          <Toc role='geologist' />
        </div>

        <div className='content__article decorator decorator_space-v_4xl'>
          <div className='content__main'>
            <div className='decorator decorator_indent-b_2xl'>
              <Text tag='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_xs'>Программа бурения эксплуотационной скважины</Text>
              {programmInfo.field} > {programmInfo.bush} > {programmInfo.well}
            </div>

            <TeamList role='geologist' />
          </div>
          
          <ArticleSection header='Цель' role='geologist'>
            <ContentBlock type='text'>
              <Text size='m' view='primary'>Строительство эксплуатационной скважины на Новопортовском НГКМ в соответствии с геолого-техническим заданием, в рамках утвержденного бюджета и в установленные временные сроки.</Text>
            </ContentBlock>

            <ContentBlock type='informer'>
              <Informer status='system' view='filled'>
                <Text size='m' view='primary' weight='bold'>Примечание</Text>
                <Text size='m' view='primary'>Программа бурения составлена в соответствии с проектной документацией на строительство горизонтальных скважин на Новопортовском НГКМ. Данная программа предназначена в качестве руководства, которое необходимо соблюдать в процессе проведения работ, если фактические геолого-технические условия соответствуют проектным. В случае если геолого-технические условия в процессе проведения работ не будут соответствовать проектным, то Подрядчик обязан прекратить дальнейшее проведение работ, принять все меры по недопущению усугубления ситуации и согласовать проведение дальнейших работ с представителем Заказчика.</Text>
              </Informer>
            </ContentBlock>

            <ContentBlock type='h3'>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Распределение обязанностей и ответственность сторон</Text>
            </ContentBlock>
            
            <ContentBlock type='text'>
              <Text size='m' view='primary'>Распределение обязанностей и ответственность сторон при выполнении любых операций определяется в соответствии с приложениями к договорам на оказание услуг «Распределение обязанностей в процессе строительства скважин между Заказчиком, Буровым и Нефтесервисными подрядчиками, участвующими в строительстве скважин» или данной программой бурения.</Text>
            </ContentBlock>
            
            <ContentBlock type='h3'>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Требования в области ОТ, ПБ и ООС</Text>
            </ContentBlock>
            
            <ContentBlock type='text'>
              <Text size='m' view='primary'>Основной целью требований в области ОТ, ПБ и ООС является отсутствие в процессе проведения всего комплекса работ любых инцидентов, связанных с травмированием и потерей трудоспособности персонала, а также причинением ущерба окружающей среде. Все выполняемые работы обязаны соответствовать отраслевым нормативным документам, действующим на территории Российской Федерации, а также стандартам и нормативно — методическим документам ПАО «Газпром нефть».</Text>
            </ContentBlock>
          </ArticleSection>
          
          <ArticleSection header='Общая информация о буровом оборудовании и бурильном инструменте' role='geologist'>
            <ContentBlock type='h3'>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Буровое оборудование</Text>
            </ContentBlock>
            <ContentBlock type='table'>
              <table className='table'>
                <tbody>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Буровая установка</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>БУ 5000-320 ЭК-БМЧ</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Верхний силовой привод</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>VARCO TDC11SB02V12</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Буровые насосы</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>УНБТ-1180</Text></td>
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
                    <td><Text size='m' view='primary' lineHeight='s'>ППГ 350*35 (Волгоград)</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Универсальный превентор</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>ПУГ 350*35 (Волгоград)</Text></td>
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
                    <td><Text size='m' view='primary' lineHeight='s'>Derrick FLC2000</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Ситогидроциклонная установка</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>Derrick FLC-503</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Центрифуги</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>Derrick DE-1000 GBD</Text></td>
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
                    <td><Text size='m' view='primary' lineHeight='s'>УБТ-229</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>19 м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>273 кг</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>74.5 мм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>80 мм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>229 мм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>51 кН×м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>З-171</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>ТБПК 127</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>4148 м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>34,1 кг</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>9,19 мм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>108,6 мм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>127/168,3 мм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>59 кН×м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>NC-50 З-133</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>ТБ 101,6</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>4526 м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>23,6 кг</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>8,38 мм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>84.84 мм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>101.6/133.4 мм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>30,8 кН×м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>UI NC-40 RH З-108</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>ТБТ-101,6</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>474 м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>45,9 кг</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>19,5 мм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>63,5 мм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>101,6/133,4 мм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>29,6 кН×м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>NC-40 З-108</Text></td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Общая информация о скважине' role='geologist'>
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

          <ArticleSection header='Конструкция скважины' role='geologist'>
            <ContentBlock size='full' type='table'>
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
                    <td rowSpan='2'><Text size='m' view='primary'>Комбинированный кондуктор</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>ОТТМ 530/324*9,5 «Д»</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 0м до 50м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 0м до 50м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 0м до 50м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>1,5 г/см²</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>ОТТГ-324*9,5 мм «Д»</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 50м до 457м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 50м до 457м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 50м до 460м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>1,89 г/см²</Text></td>
                  </tr>
                  <tr>
                    <td rowSpan='2'><Text size='m' view='primary'>Техническая колонна</Text></td>
                    <td rowSpan='2'><Text size='m' view='primary'>ОТТГ -244,5*8,9 мм «Д»</Text></td>
                    <td rowSpan='2'><Text size='m' view='primary'>от 0м до 1377м</Text></td>
                    <td rowSpan='2'><Text size='m' view='primary'>от 0м до 1098м </Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 0м до 410м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>1,5 г/см²</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>от 410м до 1380м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>1,89 г/см²</Text></td>
                  </tr>
                  <tr>
                    <td rowSpan='2'><Text size='m' view='primary'>Эксплуатационная колонна</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>ОТТГ-178*10,4 «Е»</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 0м до 280м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 0м до 280м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 880м до 2526м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>1,45 г/см²</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>ОТТГ-178*9,2 «Д»</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 280м до 3113м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 280м до 1893м </Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 2526м до 3116м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>1,91 г/см²</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Хвостовик</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>ОТТМ-114,3х7,4 / ФС-П 114 ОТТМ</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 3038м до 4340м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 1888м до 1893м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>-</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>-</Text></td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Испытание обсадных колонн и цементного камня на герметичность' role='geologist'>
            <ContentBlock type='table'>
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
                    <td><Text size='m' view='primary' lineHeight='s'>Кондуктор</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>1180 кг/м³</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>11,5 МПа</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Цементное кольцо кондуктора</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>1180 кг/м³</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>4,0 МПа</Text></td>
                  </tr> 
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Техническая колонна</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>1180 кг/м³</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>19 МПа</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Цементное кольцо технической колонны</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>1180 кг/м³</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>6,0 МПа</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Эксплуатационная колонна</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>1180 кг/м³</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>19 МПа</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Цементное кольцо эксплуатационной колонны</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>1080 кг/м³</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>Не опрессовывается</Text></td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Литолого-стратиграфическая характеристика разреза скважины' role='geologist'>
            <ContentBlock isEditable={true} type='table'>
              <table className='table table_editable'>
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
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='ПК₁' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='-476.3' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='20' dValue='чередование сероцветных песчаников, алевролитов и глин' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='Вода' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='42.1' rightSide='атм' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='9.2' rightSide='°C' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='ХМ₁' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='-913.8' rightSide='м' />
                    </td>
                    <td rowSpan='2'>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='20' dValue='чередование глин, алевролитов, песчаников' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='Вода' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='84.2' rightSide='атм' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='21.7' rightSide='°C' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='ХМ₃' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='-968.9' rightSide='м' />
                    </td>

                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='Вода' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='85' rightSide='атм' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='22' rightSide='°C' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='ТП₀' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='-988.6' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='20' dValue='чередование песчаника, песчаника карбонатного, алевролита и аргиллита' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='Вода' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='94.2' rightSide='атм' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='24.5' rightSide='°C' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='Сеяхинские глины (кровля)' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='-1659.6' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='20' dValue='Пластинчатый аргиллит и алевролит' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' rightSide='атм' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' rightSide='°C' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='БЯ₂₃ (подошва сеяхинских глин)' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='-1707.5' rightSide='м' />
                    </td>
                    <td rowSpan='4'>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='20' dValue='Чередование песчаника, песчаника карбонатного, алевролита и аргиллита' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='Газ' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='178' rightSide='атм' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='56' rightSide='°C' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='НП₂₋₃' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='-1756.1' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='газ' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='181.0' rightSide='атм' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='56.0' rightSide='°C' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='НП₄' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='-1785.8' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='газ' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='182.0' rightSide='атм' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='57.4' rightSide='°C' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='НП₅' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='-1831.7' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='text' placeholder='' dValue='Нефть+вода' />
                    </td>
                    <td>
                      <Text size='m' view='primary' lineHeight='s'></Text>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='183.0' rightSide='атм' />
                    </td>
                    <td>
                      <Text size='m' view='primary' lineHeight='s'></Text>
                      <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='57.4' rightSide='°C' />
                    </td>
                  </tr>

                  <tr>
                    <td colSpan='6'>
                      <Button view='clear' size='m' view='clear' width='full' label='Новая строка' />
                    </td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Профиль ствола скважины' role='geologist'>
            <ContentBlock isEditable={true} size='full' type='table'>
              <table className='table table_editable' style={{ width: '1680px' }}>
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
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='' dValue='' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='3153.74' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='87.865' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='197.595' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='-1718.02' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='-1293.58' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='00° 00` 00' dValue='67° 49` 27.457' rightSide='N' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='00° 00` 00' dValue='72° 32` 38.118' rightSide='E' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='7525328.1' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='396568.69' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='1894.46' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='-1844.82' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='0.5' rightSide='°/10м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='2150.57' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='216.98' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='2135.11' rightSide='м' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='' dValue='' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='3245.03' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='87.865' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='197.595' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='-1804.98' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='-1321.16' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='00° 00` 00' dValue='67° 49` 24.616' rightSide='N' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='00° 00` 00' dValue='72° 32` 36.059' rightSide='E' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='7525241.14' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='396541.11' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='1897.86' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='-1848.22' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='0' rightSide='°/10м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='2236.83' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='216.2' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='2224.17' rightSide='м' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='' dValue='5238_M1_V2' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='3294.26' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='90.328' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='197.599' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='-1851.9' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='-1336.04' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='00° 00` 00' dValue='67° 49` 23.083' rightSide='N' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='00° 00` 00' dValue='72° 32` 34.947' rightSide='E' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='7525194.22' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='396526.23' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='1898.64' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='-1849' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='0.5' rightSide='°/10м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='2283.54' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='215.81' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='2272.23' rightSide='м' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='' dValue='5238_T3_V2' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='4342.67' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='90.328' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='197.599' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='-2851.22' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='-1653.02' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='00° 00` 00' dValue='67° 48` 50.438' rightSide='N' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='00° 00` 00' dValue='72° 32` 11.282' rightSide='E' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='7524194.9' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='396209.25' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='1892.64' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='-1843' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='0' rightSide='°/10м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='3295.74' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='210.1' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' view='clear' type='text' placeholder='0' dValue='3295.74' rightSide='м' />
                    </td>
                  </tr>

                  <tr>
                    <td colSpan='16'>
                      <Button size='s' view='clear' width='full' label='Новая строка' />
                    </td>
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

          <ArticleSection header='Отчет о рисках пересечения стволов скважин' role='geologist'>
            <ContentBlock isEditable={true} type='image'>
              <img src={IMGRiskReportTheIntersectionOfTheWellbore} alt=' '/>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Программа геофизических исследований и каротажа в процессе бурения' role='geologist'>
            <ContentBlock isEditable={true} type='h3'>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Буровое оборудование</Text>
            </ContentBlock>
            <ContentBlock isEditable={true} size='full' type='table'>
              <table className='table table_editable'>
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
                    <td>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='5' dValue='Комплекс «Halliburton": инклинометрия' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='5' dValue='В интервале кондуктора' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='5' dValue='Инклинометр: 1 замер на 50м' />
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='50.0' leftSide='от' />
                        <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='460.3' leftSide='до' />
                      </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='5' dValue='Комплекс "Halliburton": инклинометрия' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='5' dValue='В интервале тех. колонны' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='5' dValue='- в инт. стабилизации: 1 замер на 1 "свечу"; - в инт. кривизны: 1 замер на 1 "трубу".' />
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='460.3' leftSide='от' />
                        <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='1380.3' leftSide='до' />
                      </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='5' dValue='Комплекс "Halliburton": ГК; ИК; инклинометрия в реальном времени и в записи' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='5' dValue='В интервале транспортного ствола' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='5' dValue='ГИС: 1-2 точки на метр; Инклинометр: - в инт стабилизации: 1 замер на 1 "свечу"; - в инт кривизны: 1 замер на 1 "трубу".' />
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='1380.3' leftSide='от' />
                        <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='3116.4' leftSide='до' />
                      </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='5' dValue='Комплекс "Halliburton": ГК; ИК; ГГК-П; ННК; кавернометрия; инклинометрия в реальном времени и в записи' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='5' dValue='Горизонтальный ствол' />
                    </td>
                    <td>
                      <Field width='full' size='m' view='clear' type='textarea' maxRows='5' dValue='ГИС: 3 точки на метр; Инклинометр: 1 замер на 1 "трубу";' />
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='3116.4' leftSide='от' />
                        <Field width='full' size='m' view='clear' type='text' placeholder='0' dValue='4342.7' leftSide='до' />
                      </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td colSpan='4'>
                      <Button size='m' view='clear' width='full' label='Новая строка' />
                    </td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
            
            <ContentBlock isEditable={true} type='informer'>
              <Informer status='system' view='filled'>
                <Text size='m' view='primary' weight='bold'>Примечание</Text>
                <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='Перед началом бурения скважины согласовать с геологической службой Заказчика порядок предоставления каротажных данных и список рассылки. Интервал перезаписи каротажных данных после смены КНБК согласовать с геологической службой Заказчика.' />
              </Informer>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Порядок снятия замера при бурении' role='geologist'>
            <ContentBlock type='text'>
              <Text size='m' view='primary'>Частота взятия замеров на участке стабилизации каждые 24м, снятие замеров после наращивания*. В интервалах набора параметров кривизны (по мере необходимости) и в случае сближения с ранее пробуренными скважинами каждые 12м, снятие замеров до наращивания**.</Text>
            </ContentBlock>
            
            <ContentBlock type='text'>
              <Text size='m' view='primary'>При бурении секции под хвостовик (152,4мм) снятие замеров производить согласно протоколу ПТ-4/038 от 07.10.16г., снятие замера после наращивания.</Text>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Требования к каротажным данным по отправке' role='geologist'>
            <ContentBlock type='listname'>
              <Text size='m' view='primary'>В транспортном стволе периодичность:</Text>
            </ContentBlock>
            <ul>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>Выше 150 м до Т2 по вертикали — замеры высылаются дважды в сутки на 06:00 и 17:00.</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>За 150 м до Т2 по вертикали — каждую пробуренную «свечу».</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>За 80 м до Т2 по вертикали — каждую пробуренную «трубку» (по согласованию с ЦУБ).</Text></li>
              </ContentBlock>
            </ul>

            <ContentBlock type='listname'>
              <Text size='m' view='primary'>В горизонтальном стволе периодичность:</Text>
            </ContentBlock>
            <ul>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>Интервал перезаписи в эксплуатационной колонне, перед разбуриванием оснастки, согласовывается с геологической службой заказчика.</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>Разбурив оснастку + 12м (трубка) отправить замер в (экселе), далее пробурив еще 12м отправить полный замер (эксель + PDF+ las), далее замеры с полным пакетом каротажных данных каждую трубку.</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>После добуривания свечи, перед отрывом от забоя производить промывку до полной выработки осевой нагрузки на долото, нормализации давления и крутящего момента на ВСП но не менее двух минут.</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>Произвести проработку пробуренного интервала с расхаживанием на длину свечи (при движении вверх 30 об/мин не допуская затяжки до 5т, не допускать увеличения и скачков крутящего момента; движение вниз c вращением 50 об/мин);</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>Остановить вращение, произвести расхаживание на длину свечи, установить долото на расстояние 1-2 м от забоя;</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>Выключить насосы, произвести наращивание;</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>Восстановить циркуляцию, дождаться выхода замера в течение 3 минут после запуска насосов (время выхода замера);</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>Не оставлять движение инструмента более 3 минут, ответственный за отслеживание времени инженер ННБ, после подачи команды на движение бурильщик буровой компании обязан принять меры по исполнению команды, время на принятие команды и исполнение не более 5 секунд. Контроль за исполнением супервайзер ООО «Газпромнефть-Ямал». Отв. Инженер ННБ, Буровой мастер</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>В любом случае (если инженер по ННБ не дал команду), согласно мероприятий по предупреждению аварий, бурильщик должен принять соответствующие меры и не оставлять инструмент без движения более 3 минут. Отв. Буровой мастер</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>Продолжить бурение.</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>После добуривания свечи, перед отрывом от забоя производить промывку до полной выработки осевой нагрузки на долото, нормализации давления и крутящего момента на ВСП но не менее двух минут;</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>Произвести проработку пробуренного интервала с расхаживанием на длину свечи при движении вверх 30 об/мин не допуская затяжки до 5т, не допускать увеличения и скачков крутящего момента; движение вниз c вращением 50 об/мин);</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>Остановить вращение, произвести расхаживание на длину свечи, установить долото на расстояние 1-2 м от забоя;</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>Выключить насосы, на одну минуту для снятия замера оставить инструмент без движения;</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>Восстановить циркуляцию, включить вращение ВСП, дождаться выхода замера (ориентировочно 4 — 5 минут);</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>Произвести наращивание (максимально сократить время оставления инструмента без движения);</Text></li>
              </ContentBlock>
              <ContentBlock type='listitem'>
                <li><Text size='m' view='primary'>Продолжить бурение.</Text></li>
              </ContentBlock>
            </ul>

            <ContentBlock size='full' type='table'>
              <table className='table'>
                <thead>
                  <tr>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>№</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>D долота</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>КНБК №</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Глубина по стволу</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Интервал</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Прибор</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Условия замера</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Интервал замеров</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Замер до/после наращивания</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Количество замеров</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Время на замер</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Время за секцию</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Нараст. время</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Время на ориентирование отклонителя</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Время на отправку команд РУС</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Код погрешности</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Описание погрешности</Text>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>1</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>393.7 мм</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>324 мм</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>от 50 м до 460 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>410</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>PCDC</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>ОС</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>24м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>N/A</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>18</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 мин</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0.0 ч</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0.0 ч</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0.6 ч</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>3 MWD + AX</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>Метод короткой УБТ, с учетом коррекции осевой магнитной</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>2</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>295.3 мм</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>245 мм</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>от 460 м до 1380 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>920</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>PCDC</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>ОС</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>24 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>N/A</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>39</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 мин</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0.0 ч</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0.0 ч</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1.3 ч</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>3 MWD + AX</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>Метод короткой УБТ, с учетом коррекции осевой магнитной</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>3</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.7 мм</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>178 мм</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>от 1380 м до 3116 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1736</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>PCDC</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>ОС</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>24 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>после</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>73</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>5 мин</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>6.1 ч</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>6.1 ч</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2.4 ч</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>3 MWD + AX</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>Метод короткой УБТ, с учетом коррекции осевой магнитной</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>4</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>152.4 мм</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>114 мм</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>от 3116 м до 4342.7 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1226.7</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>PCDC</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>ОС</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>12 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>после</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>103</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>5 мин</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>8.6 ч</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>14.7 ч</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>6.9 ч</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>3 MWD + AX</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>Метод короткой УБТ, с учетом коррекции осевой магнитной</Text></td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
          </ArticleSection>

          <div className='content__main decorator decorator_indent-t_4xl' style={{ marginBottom: '-32px' }}>
            <Text tag='h2' size='3xl' view='primary' lineHeight='s' id='Секция 660 мм / 393,7 мм'>Секция 660 мм / 393,7 мм</Text>
          </div>

            <ArticleSection header='Технологические риски' role='geologist' section='Секция 660 мм / 393,7 мм'>
              <ContentBlock type='table'>
                <table className='table'>
                  <thead>
                    <tr>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Риски</Text>
                      <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Мероприятия по снижению риска</Text>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Сальникообразования</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>Соблюдение режимов промывки, использование противосальниковой добавоки MEX-CLEAN. Расхаживание КНБК на всю длину свечи. До начала бурения секции под кондуктор иметь в наличии на буровой объем бурового раствора с низкими реологическими параметрами для оперативного разбавления после интервала ММП. При бурении секции 393,7 мм начать снижение условной вязкости бурового раствора с глубины 190* метров. При бурении секции 393,7 мм ограничить мех. скорость в интервале 170-280 м* до 90 м/час, (* глубина условная, до полного перехода из песка в глину). С глубины 190 метров производить одно расхаживание КНБК с вращением инструмента, не допускать превышения мгновенной мех. скорости свыше 140 м/час. При бурении интервала 0-190 м поддерживать производительность буровых насосов 50-55 м/ч, 190-460 м не менее 65 л/сек.</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Отсутствие центра скважины относительно центра ротора. Отклонение от вертикали</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>Забуривание под направление после центрирования вышки БУ, ротора с использованием прямолинейного бурильного инструмента.</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Проседание грунта и образование воронок в процессе бурения скважин</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>Оборудование устья скважины металлическим коробом. Сокращение сроков бурения. Поддержание минимальной температуры бурового раствора в емкостях (10-15°С), посредством отключения во время бурения подогрева емкостей.</Text></td>
                    </tr>
                  </tbody>
                </table>
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Общие сведения' role='geologist' section='Секция 660 мм / 393,7 мм'>
              <ContentBlock type='table'>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Забой скважины</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>460 м</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Глубина спуска обсадной колонны</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>457 м</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Интервал цементирования цементным раствором</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>460 м - 280 м</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Интервал цементирования гельцементным раствором</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>280 м - 0 м</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Статическая температура на забое</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>+8,0 °С</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Градиент пластового давления</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>0,0098 МПа/м</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Градиент давления гидроразрыва</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>0,0206 МПа/м</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Номинальный диаметр скважины в инт. 0 – 50 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>660 мм</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Номинальный диаметр скважины в инт. 50 – 460 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>393,7 мм</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Коэффициент кавернозности в инт. 0 – 50 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>1,8</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>Коэффициент кавернозности в инт. 50 – 460 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>1,6</Text></td>
                    </tr>
                  </tbody>
                </table>
              </ContentBlock>
            </ArticleSection>

            <ArticleSection header='Подготовительные работы перед началом бурения секции 660 мм / 393,7 мм' role='geologist' section='Секция 660 мм / 393,7 мм'></ArticleSection>

            <ArticleSection header='Режимно – технологическая карта' role='geologist' section='Секция 660 мм / 393,7 мм'>
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
                      <td><Text size='m' view='primary' lineHeight='s'>393,7 мм</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>PDC</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>S423</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>от 0 м до 460 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>460 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>4,6 ч</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>100 м/час</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>8-14 тн</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>80 / 100-230</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>50-65 л/сек</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>4/11,1 4/10,31</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>2,2</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>0-0-СТ-G,С-Х-IWT, RRTD</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>US619 U39</Text></td>
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

            <ArticleSection header='Параметры бурового раствора' role='geologist' section='Секция 660 мм / 393,7 мм'>
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

            <ArticleSection header='Потребность в буровом растворе' role='geologist' section='Секция 660 мм / 393,7 мм'>
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
            
            <ArticleSection header='Приготовление и обработка бурового раствора' role='geologist' section='Секция 660 мм / 393,7 мм'>
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

            <ArticleSection header='КНБК для бурения секции 393,7 мм' role='geologist' section='Секция 660 мм / 393,7 мм'>
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
            
            <ArticleSection header='Бурение секции 660 мм / 393,7 мм' role='geologist' section='Секция 660 мм / 393,7 мм'>
              <ContentBlock type='text'>
                <Text size='m' view='primary'>Собрать роторную КНБК для бурения тех. кармана L – 30 м: Долото 393,7 мм + УБТ 203 – 9 м + СБТ 127 – остальной. Пробурить тех. карман для сборки КНБК для бурения при бурении секции 393,7 мм необходимо соблюдать следующие режимы бурения: 0-25 м расход – 15 л/с, обороты ВСП 80 – 100 об/мин.</Text>
              </ContentBlock>
              <ContentBlock type='text'>
                <Text size='m' view='primary'>Убедиться, что весь необходимый инструмент и оборудование, необходимые для строительства секции, находятся на буровой, проверены и работоспособны, имеют соответствующие документы (паспорта). Перед началом бурения обеспечить наличие бурового раствора на поверхности в объеме 105 м3. Собрать КНБК для бурения секции 393,7 мм согласно настоящей программы, тестирование оборудования для ННБ не производить (протокол ПТ-10-01/011 от 22.11.17). Поддерживать температуру бурового раствора на минимальном уровне, отключив подогрев всех емкостей. Бурение секции в интервале 0 - 460 м производить без проработки перед наращиванием. «Снятие пружины» перед снятием замеров в статике производить на длину одной трубы (12 метров). В случае наличия признаков зашламованности ствола скважины (скачки давления и крутящего момента на ВСП, несоответствие весов на крюке с расчетными на величину более 10%), произвести промывку ствола скважины и продолжить бурение с проработкой ствола скважины перед наращиванием. Расхаживание производить с вращением бурильного инструмента с частотой при движении «вверх» 40 об/мин, при движении «вниз» 60 об/мин. Фактический забой секции выбрать исходя из фактической длины обсадной колонны (с учетом технологической оснастки) – ЗУМПФ не должен превышать 3 м. После окончания бурения секции произвести прокачку очищающей пачки ВУС по рецептуре подрядчика по буровым растворам в объёме не менее 8 м3 с промывкой ствола скважины с расхаживанием и вращением бурильного инструмента до момента выхода пачки на устье скважины. Режим промывки: расход промывочной жидкости 65 л/сек, частота вращения ВСП 60 об/мин. Произвести подъём КНБК до глубины 50 м со сплошной проработкой. Режим проработки: в интервале 460-170 м расход промывочной жидкости 65 л/сек, частота вращения ВСП 40 об/мин; в интервале 170 – 50 м расход промывочной жидкости 50 л/сек, частота вращения ВСП 40 об/мин, скорость проработки ствола скважины не более 500 м/час. В интервале перехода «пески – глина» (подъем произвести на 50 метров выше зоны перехода), произвести спуск на 50 метров ниже интервала перехода без циркуляции и вращения. В случае получения посадки проработать до свободного хождения «на сухую».</Text>
              </ContentBlock>
              <ContentBlock type='text'>
                <Text size='m' view='primary'>В случае свободного хождения продолжить подъем сплошной проработкой до устья. После подъема произвести сборку роторную КНБК 660,4 мм, для шаблонировки ствола в интервале 0-50 м. Спустить КНБК до глубины исходя из следующего расчета: 1 м + 4 трубы термокейс 530 х 324*9,5 + высота стола ротора. В случае свободного прохождения КНБК в интервале 0-50 м произвести подъем и разборку КНБК. При отрицательном результате (спуск с посадками свыше 5 тн) проработать интервал до свободного хождения «на сухую». Режим проработки: расход промывочной жидкости 20 л/сек, частота вращения ВСП 40 об/мин.</Text>
              </ContentBlock>
              <ContentBlock type='text'>
                <Text size='m' view='primary'>В случае осложнения при подготовке ствола оповестить РН по планированию бурения. Произвести подъем и разборку КНБК, места затяжек проработать до свободного хождения КНБК без циркуляции. С целью недопущения зарезки нового ствола, механическая скорость проработки 75 - 100 м/час.</Text>
              </ContentBlock>
            </ArticleSection>
            
            <ArticleSection header='Спуск обсадной колонны секции 660 мм / 393,7 мм' role='geologist' section='Секция 660 мм / 393,7 мм'></ArticleSection>

            <ArticleSection header='Порядок расстановки центраторов' role='geologist' section='Секция 660 мм / 393,7 мм'>
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
                      <td><Text size='m' view='primary' lineHeight='s'>1</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>60 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>95 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>2</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>155 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>118 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>3</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>273 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>4</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>284 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>5</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>295 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>6</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>306 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>7</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>317 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>8</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>328 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>9</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>328 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>10</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>339 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>11</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>350 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>12</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>361 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>13</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>372 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>14</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>383 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>15</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>394 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>16</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>405 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>17</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>416 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>18</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>427 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>19</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>438 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
                    </tr>
                    <tr>
                      <td><Text size='m' view='primary' lineHeight='s'>20</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>449 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>11 м</Text></td>
                      <td><Text size='m' view='primary' lineHeight='s'>ЦЦ – 324</Text></td>
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
            
            <ArticleSection header='Цементирование обсадной колонны секции 660 мм / 393,7 мм' role='geologist' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='Таблица объемов и режимов закачки' role='geologist' section='Секция 660 мм / 393,7 мм'></ArticleSection>

            <ArticleSection header='Свойства и состав отмывающей буферной жидкости' role='geologist' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='Свойства цементного раствора' role='geologist' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='Свойства гельцементного раствора' role='geologist' section='Секция 660 мм / 393,7 мм'></ArticleSection>

            <ArticleSection header='График зависимости эквивалентной циркуляционной плотности и гидростатического давления в зависимости от откачанного объема' role='geologist' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='График расчетного давления на устье' role='geologist' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='Лабораторный тест цементного раствора (гель): пилотный тест' role='geologist' section='Секция 660 мм / 393,7 мм'></ArticleSection>

            <ArticleSection header='График загустевания (гель)' role='geologist' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='График набора прочности цементным раствором (гель)' role='geologist' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='Лабораторный тест цементного раствора: пилотный тест' role='geologist' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='График загустевания цементного раствора' role='geologist' section='Секция 660 мм / 393,7 мм'></ArticleSection>
            
            <ArticleSection header='График набора прочности цементного раствора' role='geologist' section='Секция 660 мм / 393,7 мм'></ArticleSection>

          <div className='content__main decorator decorator_indent-t_4xl' style={{ marginBottom: '-32px' }}>
            <Text tag='h2' size='3xl' view='primary' lineHeight='s' id='Секция 295,3 мм'>Секция 295,3 мм</Text>
          </div>

            <ArticleSection header='Технологические риски' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Общие сведения' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Подготовительные работы перед началом бурения секции 295,3 мм' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Режимно – технологическая карта' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Буровой раствор' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Параметры бурового раствора' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Типоразмер сеток вибросит' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Потребность в буровом растворе' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='КНБК для бурения секции 295,3 мм' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Режимная карта бурения секции 295,3 мм' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Бурение секции 295,3 мм' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Спуск обсадной колонны секции 295,3 мм' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Порядок расстановки центраторов' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Профиль центрации обсадной колонны' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Цементирование обсадной колонны секции 295,3 мм' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Таблица объемов и режимов закачки' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Свойства и состав отмывающей буферной жидкости' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Свойства и состав реологической буферной жидкости' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Свойства цементного раствора' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Свойства гельцементного раствора' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='График зависимости эквивалентной циркуляционной плотности и гидростатического давления в зависимости от откачанного объема' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='График расчетного давления на устье' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Лабораторный тест цементного раствора (гель): пилотный тест' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='График загустевания (гель)' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='График набора прочности цементным раствором (гель)' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='Лабораторный тест цементного раствора: пилотный тест' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='График загустевания цементного раствора' role='geologist' section='Секция 295,3 мм'></ArticleSection>

            <ArticleSection header='График набора прочности цементного раствора' role='geologist' section='Секция 295,3 мм'></ArticleSection>

          <div className='content__main decorator decorator_indent-t_4xl' style={{ marginBottom: '-32px' }}>
            <Text tag='h2' size='3xl' view='primary' lineHeight='s' id='Секция 220,7 мм (транспортный ствол скважины)'>Секция 220,7 мм (транспортный ствол скважины)</Text>
          </div>

            <ArticleSection header='Технологические риски' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Подготовительные работы перед началом бурения секции 220,7 мм' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Режимно – технологическая карта' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Буровой раствор' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Параметры бурового раствора' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Типоразмер сеток вибросит' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Потребность в буровом растворе' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Применяемые химические реагенты, концентрация и ожидаемая потребность на бурение интервала' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Мероприятия по прокачиванию очищающих пачек при бурении интервала' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Ориентировочная потребность ситовых панелей на бурение интервала' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Гидравлический расчет' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='КНБК для бурения секции 220,7 мм' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Режимная карта бурения секции 220,7 мм' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Бурение секции 220,7 мм' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Спуск обсадной колонны секции 220,7 мм' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Порядок расстановки центраторов' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Профиль центрации обсадной колонны' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Цементирование обсадной колонны секции 220,7 мм' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Таблица объемов и режимов закачки' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Свойства и состав отмывающей буферной жидкости' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Свойства и состав реологической буферной жидкости' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Свойства цементного раствора' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Свойства гельцементного раствора' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='График зависимости эквивалентной циркуляционной плотности и гидростатического давления в зависимости от откачанного объема' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='График расчетного давления на устье' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Лабораторный тест цементного раствора (гель): пилотный тест' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='График консистенции г/цементного раствора' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='График набора прочности г/цементного раствора' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='Лабораторный тест цементного раствора: пилотный тест' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='График загустевания цементного раствора' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

            <ArticleSection header='График набора прочности цементного раствора' role='geologist' section='Секция 220,7 мм (транспортный ствол скважины)'></ArticleSection>

          <div className='content__main decorator decorator_indent-t_4xl' style={{ marginBottom: '-32px' }}>
            <Text tag='h2' size='3xl' view='primary' lineHeight='s' id='Секция 152,4 мм'>Секция 152,4 мм</Text>
          </div>

          <ArticleSection header='Технологические риски' role='geologist' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Подготовительные работы перед началом бурения секции 152,4 мм' role='geologist' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Режимно – технологическая карта' role='geologist' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Буровой раствор' role='geologist' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Параметры бурового раствора' role='geologist' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Типоразмер сеток вибросит' role='geologist' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Потребность в буровом растворе' role='geologist' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Применяемые химические реагенты, концентрация и ожидаемая потребность на бурение интервала' role='geologist' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Тандемные пачки при бурении горизонтального ствола в интервале 2612-3746 м в объеме 15 м3' role='geologist' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Мероприятия по прокачиванию очищающих пачек при бурении интервала' role='geologist' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Ориентировочная потребность ситовых панелей на бурение интервала' role='geologist' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Гидравлический расчет' role='geologist' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='КНБК для бурения секции 152,4 мм' role='geologist' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Режимная карта бурения секции 152,4 мм' role='geologist' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Бурение секции 152,4 мм' role='geologist' section='Секция 152,4 мм'></ArticleSection>

            <ArticleSection header='Спуск обсадной колонны секции 152,4 мм' role='geologist' section='Секция 152,4 мм'></ArticleSection>
        </div>
      </div>

      <Snackbar message='Раздел опубликован' id='savedSectionSnackbar' />
      <Snackbar message='Программа сохранена' id='savedProgrammSnackbar' />
    </div>
  );
}

export default GeologistProgrammPage;