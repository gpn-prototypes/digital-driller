import React from 'react';
import { useParams } from 'react-router-dom';
import { Text, Informer, Button, IconAdd, IconComment, IconAlignLeft, IconAlert, IconTable, IconLink, IconPhoto } from '@gpn-design/uikit';
import Field from '../../components/Field/Field';
import TheHeader from '../../components/TheHeader/TheHeader';
import Toc from '../../components/Toc/Toc';
import TeamList from '../../components/TeamList/TeamList';
import ArticleSection from '../../components/ArticleSection/ArticleSection';
import ContentBlock from '../../components/ContentBlock/ContentBlock';

import { tocList, team } from '../../mocks/newProgramm';
import programmList from '../../mocks/programmList';

import IMGTemplate from '../../images/Профиль_ствола_скважины.jpg';
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
            <ContentBlock>
              <Text size='m' view='primary'>Строительство эксплуатационной скважины на Новопортовском НГКМ в соответствии с геолого-техническим заданием, в рамках утвержденного бюджета и в установленные временные сроки.</Text>
            </ContentBlock>

            <ContentBlock>
              <Informer status='system' view='filled'>
                <Text size='m' view='primary' weight='bold'>Примечание</Text>
                <Text size='m' view='primary'>Программа бурения составлена в соответствии с проектной документацией на строительство горизонтальных скважин на Новопортовском НГКМ. Данная программа предназначена в качестве руководства, которое необходимо соблюдать в процессе проведения работ, если фактические геолого-технические условия соответствуют проектным. В случае если геолого-технические условия в процессе проведения работ не будут соответствовать проектным, то Подрядчик обязан прекратить дальнейшее проведение работ, принять все меры по недопущению усугубления ситуации и согласовать проведение дальнейших работ с представителем Заказчика.</Text>
              </Informer>
            </ContentBlock>

            <ContentBlock>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Распределение обязанностей и ответственность сторон</Text>
            </ContentBlock>
            
            <ContentBlock>
              <Text size='m' view='primary'>Распределение обязанностей и ответственность сторон при выполнении любых операций определяется в соответствии с приложениями к договорам на оказание услуг «Распределение обязанностей в процессе строительства скважин между Заказчиком, Буровым и Нефтесервисными подрядчиками, участвующими в строительстве скважин» или данной программой бурения.</Text>
            </ContentBlock>
            
            <ContentBlock>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Требования в области ОТ, ПБ и ООС</Text>
            </ContentBlock>
            
            <ContentBlock>
              <Text size='m' view='primary'>Основной целью требований в области ОТ, ПБ и ООС является отсутствие в процессе проведения всего комплекса работ любых инцидентов, связанных с травмированием и потерей трудоспособности персонала, а также причинением ущерба окружающей среде. Все выполняемые работы обязаны соответствовать отраслевым нормативным документам, действующим на территории Российской Федерации, а также стандартам и нормативно — методическим документам ПАО «Газпром нефть».</Text>
            </ContentBlock>
          </ArticleSection>
          
          <ArticleSection header='Общая информация о буровом оборудовании и бурильном инструменте' tocList={tocList} team={team}>
            <ContentBlock>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Буровое оборудование</Text>
            </ContentBlock>
            <ContentBlock>
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
            
            <ContentBlock>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Противовыбросовое оборудование</Text>
            </ContentBlock>
            <ContentBlock>
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
            
            <ContentBlock>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Система очистки бурового раствора</Text>
            </ContentBlock>
            <ContentBlock>
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
            
            <ContentBlock>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Бурильный инструмент</Text>
            </ContentBlock>
            <ContentBlock size='full'>
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

          <ArticleSection header='Испытание обсадных колонн и цементного камня на герметичность' tocList={tocList} team={team}>
            <ContentBlock>
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

          <ArticleSection header='Литолого-стратиграфическая характеристика разреза скважины' tocList={tocList} team={team}>
            <ContentBlock isEditable={true}>
              <table className='table table_editable'>
                <thead>
                  <tr>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Пласт</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '100px' }}>Абс. глубина кровли</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Литология</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Характер насыщения</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '100px' }}>Среднее пластовое давление</Text>
                    <Text as='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs' style={{ width: '100px' }}>Температура</Text>
                  </tr>
                </thead>
                
                <tbody>
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='ПК₁' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='-476.3' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='чередование сероцветных песчаников, алевролитов и глин' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Вода' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='42.1' rightSide='атм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='9.2' rightSide='°C' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='ХМ₁' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='-913.8' rightSide='м' />
                    </td>
                    <td rowSpan='2'>
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='чередование глин, алевролитов, песчаников' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Вода' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='84.2' rightSide='атм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='21.7' rightSide='°C' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='ХМ₃' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='-968.9' rightSide='м' />
                    </td>

                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Вода' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='85' rightSide='атм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='22' rightSide='°C' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='ТП₀' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='-988.6' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='чередование песчаника, песчаника карбонатного, алевролита и аргиллита' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Вода' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='94.2' rightSide='атм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='24.5' rightSide='°C' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Сеяхинские глины (кровля)' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='-1659.6' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='Пластинчатый аргиллит и алевролит' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' rightSide='атм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' rightSide='°C' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='БЯ₂₃ (подошва сеяхинских глин)' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='-1707.5' rightSide='м' />
                    </td>
                    <td rowSpan='4'>
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='Чередование песчаника, песчаника карбонатного, алевролита и аргиллита' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Газ' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='178' rightSide='атм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='56' rightSide='°C' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='НП₂₋₃' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='-1756.1' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='газ' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='181.0' rightSide='атм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='56.0' rightSide='°C' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='НП₄' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='-1785.8' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='газ' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='182.0' rightSide='атм' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='57.4' rightSide='°C' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='НП₅' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='-1831.7' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='text' placeholder='' dValue='Нефть+вода' />
                    </td>
                    <td>
                      <Text size='m' view='primary' lineHeight='s'></Text>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='183.0' rightSide='атм' />
                    </td>
                    <td>
                      <Text size='m' view='primary' lineHeight='s'></Text>
                      <Field width='full' size='m' type='text' placeholder='0' dValue='57.4' rightSide='°C' />
                    </td>
                  </tr>

                  <tr>
                    <td colSpan='6'>
                      <Button view='clear' size='m' width='full' label='Новая строка' />
                    </td>
                  </tr>
                </tbody>
              </table>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Профиль ствола скважины' tocList={tocList} team={team}>
            <ContentBlock isEditable={true} size='full'>
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
                      <Field width='full' size='s' type='text' placeholder='' dValue='' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='3153.74' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='87.865' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='197.595' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='-1718.02' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='-1293.58' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='00° 00` 00' dValue='67° 49` 27.457' rightSide='N' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='00° 00` 00' dValue='72° 32` 38.118' rightSide='E' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='7525328.1' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='396568.69' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='1894.46' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='-1844.82' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='0.5' rightSide='°/10м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='2150.57' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='216.98' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='2135.11' rightSide='м' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='' dValue='' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='3245.03' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='87.865' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='197.595' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='-1804.98' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='-1321.16' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='00° 00` 00' dValue='67° 49` 24.616' rightSide='N' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='00° 00` 00' dValue='72° 32` 36.059' rightSide='E' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='7525241.14' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='396541.11' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='1897.86' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='-1848.22' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='0' rightSide='°/10м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='2236.83' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='216.2' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='2224.17' rightSide='м' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='' dValue='5238_M1_V2' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='3294.26' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='90.328' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='197.599' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='-1851.9' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='-1336.04' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='00° 00` 00' dValue='67° 49` 23.083' rightSide='N' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='00° 00` 00' dValue='72° 32` 34.947' rightSide='E' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='7525194.22' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='396526.23' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='1898.64' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='-1849' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='0.5' rightSide='°/10м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='2283.54' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='215.81' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='2272.23' rightSide='м' />
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='' dValue='5238_T3_V2' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='4342.67' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='90.328' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='197.599' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='-2851.22' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='-1653.02' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='00° 00` 00' dValue='67° 48` 50.438' rightSide='N' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='00° 00` 00' dValue='72° 32` 11.282' rightSide='E' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='7524194.9' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='396209.25' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='1892.64' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='-1843' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='0' rightSide='°/10м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='3295.74' rightSide='м' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='210.1' rightSide='°' />
                    </td>
                    <td>
                      <Field width='full' size='s' type='text' placeholder='0' dValue='3295.74' rightSide='м' />
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
            
            <ContentBlock isEditable={true}>
              <Informer status='system' view='filled'>
                <Text size='m' view='primary' weight='bold'>Примечание</Text>                  
                <Field width='full' size='m' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='Максимально допустимая пространственная интенсивность в интервале набора параметров кривизны определяется от плановой + 0,50/10м. Максимально допустимая пространственная интенсивность в интервале стабилизации не более 10/10м. Максимально допустимая пространственная интенсивность в зоне ГНО не более 0.30/10м.' />
              </Informer>
            </ContentBlock>
            <ContentBlock isEditable={true}>
              <img src={IMGProfileOfTheWellbore} alt=' ' />
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Отчет о рисках пересечения стволов скважин' tocList={tocList} team={team}>
            <ContentBlock>
              <img src={IMGRiskReportTheIntersectionOfTheWellbore} alt=' '/>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Программа геофизических исследований и каротажа в процессе бурения' tocList={tocList} team={team}>
            <ContentBlock isEditable={true}>
              <Text tag='h3' weight='regular' size='xl' view='primary'>Буровое оборудование</Text>
            </ContentBlock>
            <ContentBlock isEditable={true} size='full'>
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
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='Комплекс «Halliburton": инклинометрия' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='В интервале кондуктора' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='Инклинометр: 1 замер на 50м' />
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='50.0' leftSide='от' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='460.3' leftSide='до' />
                      </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='Комплекс "Halliburton": инклинометрия' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='В интервале тех. колонны' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='- в инт. стабилизации: 1 замер на 1 "свечу"; - в инт. кривизны: 1 замер на 1 "трубу".' />
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='460.3' leftSide='от' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='1380.3' leftSide='до' />
                      </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='Комплекс "Halliburton": ГК; ИК; инклинометрия в реальном времени и в записи' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='В интервале транспортного ствола' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='ГИС: 1-2 точки на метр; Инклинометр: - в инт стабилизации: 1 замер на 1 "свечу"; - в инт кривизны: 1 замер на 1 "трубу".' />
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='1380.3' leftSide='от' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='3116.4' leftSide='до' />
                      </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='Комплекс "Halliburton": ГК; ИК; ГГК-П; ННК; кавернометрия; инклинометрия в реальном времени и в записи' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='Горизонтальный ствол' />
                    </td>
                    <td>
                      <Field width='full' size='m' type='textarea' maxRows='5' dValue='ГИС: 3 точки на метр; Инклинометр: 1 замер на 1 "трубу";' />
                    </td>
                    <td>
                      <div className='decorator decorator_distribute_left'>
                        <Field width='full' size='m' type='text' placeholder='0' dValue='3116.4' leftSide='от' />
                        <Field width='full' size='m' type='text' placeholder='0' dValue='4342.7' leftSide='до' />
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
            
            <ContentBlock isEditable={true}>
              <Informer status='system' view='filled'>
                <Text size='m' view='primary' weight='bold'>Примечание</Text>
                <Field width='full' size='m' type='textarea' maxRows='10000' placeholder='Начните писать' dValue='Перед началом бурения скважины согласовать с геологической службой Заказчика порядок предоставления каротажных данных и список рассылки. Интервал перезаписи каротажных данных после смены КНБК согласовать с геологической службой Заказчика.' />
              </Informer>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Порядок снятия замера при бурении' tocList={tocList} team={team}>
            <ContentBlock>
              <Text size='m' view='primary'>Частота взятия замеров на участке стабилизации каждые 24м, снятие замеров после наращивания*. В интервалах набора параметров кривизны (по мере необходимости) и в случае сближения с ранее пробуренными скважинами каждые 12м, снятие замеров до наращивания**.</Text>
            </ContentBlock>
            
            <ContentBlock>
              <Text size='m' view='primary'>При бурении секции под хвостовик (152,4мм) снятие замеров производить согласно протоколу ПТ-4/038 от 07.10.16г., снятие замера после наращивания.</Text>
            </ContentBlock>
          </ArticleSection>

          <ArticleSection header='Требования к каротажным данным по отправке' tocList={tocList} team={team}>
            <ContentBlock>
              <Text size='m' view='primary'>В транспортном стволе периодичность:</Text>
            </ContentBlock>
            <ContentBlock>
              <ul>
                <li><Text size='m' view='primary'>— выше 150 м до Т2 по вертикали — замеры высылаются дважды в сутки на 06:00 и 17:00.</Text></li>
                <li><Text size='m' view='primary'>— за 150 м до Т2 по вертикали — каждую пробуренную «свечу».</Text></li>
                <li><Text size='m' view='primary'>— за 80 м до Т2 по вертикали — каждую пробуренную «трубку» (по согласованию с ЦУБ).</Text></li>
              </ul>
            </ContentBlock>

            <ContentBlock>
              <Text size='m' view='primary'>В горизонтальном стволе периодичность:</Text>
            </ContentBlock>
            <ContentBlock>
              <ul>
                <li><Text size='m' view='primary'>— Интервал перезаписи в эксплуатационной колонне, перед разбуриванием оснастки, согласовывается с геологической службой заказчика.</Text></li>
                <li><Text size='m' view='primary'>— Разбурив оснастку + 12м (трубка) отправить замер в (экселе), далее пробурив еще 12м отправить полный замер (эксель + PDF+ las), далее замеры с полным пакетом каротажных данных каждую трубку.</Text></li>
                <li><Text size='m' view='primary'>*- После добуривания свечи, перед отрывом от забоя производить промывку до полной выработки осевой нагрузки на долото, нормализации давления и крутящего момента на ВСП но не менее двух минут.</Text></li>
                <li><Text size='m' view='primary'>— произвести проработку пробуренного интервала с расхаживанием на длину свечи (при движении вверх 30 об/мин не допуская затяжки до 5т, не допускать увеличения и скачков крутящего момента; движение вниз c вращением 50 об/мин);</Text></li>
                <li><Text size='m' view='primary'>— остановить вращение, произвести расхаживание на длину свечи, установить долото на расстояние 1-2 м от забоя;</Text></li>
                <li><Text size='m' view='primary'>— выключить насосы, произвести наращивание;</Text></li>
                <li><Text size='m' view='primary'>— восстановить циркуляцию, дождаться выхода замера в течение 3 минут после запуска насосов (время выхода замера);</Text></li>
                <li><Text size='m' view='primary'>— не оставлять движение инструмента более 3 минут, ответственный за отслеживание времени инженер ННБ, после подачи команды на движение бурильщик буровой компании обязан принять меры по исполнению команды, время на принятие команды и исполнение не более 5 секунд. Контроль за исполнением супервайзер ООО «Газпромнефть-Ямал». Отв. Инженер ННБ, Буровой мастер</Text></li>
                <li><Text size='m' view='primary'>— в любом случае (если инженер по ННБ не дал команду), согласно мероприятий по предупреждению аварий, бурильщик должен принять соответствующие меры и не оставлять инструмент без движения более 3 минут. Отв. Буровой мастер</Text></li>
                <li><Text size='m' view='primary'>— продолжить бурение.</Text></li>
                <li><Text size='m' view='primary'>** После добуривания свечи, перед отрывом от забоя производить промывку до полной выработки осевой нагрузки на долото, нормализации давления и крутящего момента на ВСП но не менее двух минут;</Text></li>
                <li><Text size='m' view='primary'>— произвести проработку пробуренного интервала с расхаживанием на длину свечи при движении вверх 30 об/мин не допуская затяжки до 5т, не допускать увеличения и скачков крутящего момента; движение вниз c вращением 50 об/мин);</Text></li>
                <li><Text size='m' view='primary'>— остановить вращение, произвести расхаживание на длину свечи, установить долото на расстояние 1-2 м от забоя;</Text></li>
                <li><Text size='m' view='primary'>— выключить насосы, на одну минуту для снятия замера оставить инструмент без движения;</Text></li>
                <li><Text size='m' view='primary'>— восстановить циркуляцию, включить вращение ВСП, дождаться выхода замера (ориентировочно 4 — 5 минут);</Text></li>
                <li><Text size='m' view='primary'>— произвести наращивание (максимально сократить время оставления инструмента без движения);</Text></li>
                <li><Text size='m' view='primary'>— продолжить бурение.</Text></li>
              </ul>
            </ContentBlock>

            <ContentBlock size='full'>
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
        </div>
      </div>
    </div>
  );
}

export default GeologistProgrammPage;
