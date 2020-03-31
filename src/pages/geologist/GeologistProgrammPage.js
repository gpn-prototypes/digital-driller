import React from 'react';
import { useParams } from 'react-router-dom';
import { Text, Informer } from '@gpn-design/uikit';
import TheHeader from '../../components/TheHeader/TheHeader';
import Toc from '../../components/Toc/Toc';
import TeamList from '../../components/TeamList/TeamList';
import ArticleSection from '../../components/ArticleSection/ArticleSection';

import { tocList, team } from '../../mocks/newProgramm';
import programmList from '../../mocks/programmList';

import IMGProfileOfTheWellbore from '../../images/Профиль_ствола_скважины.jpg';
import IMGRiskReportTheIntersectionOfTheWellbore from '../../images/Отчет_о_рисках_пересечения_стволов_скважин.jpg';

function GeologistProgrammPage() {
  let { id } = useParams();
  let programmInfo = programmList.filter(item => item.id === id)[0];
  return (
    <React.Fragment>
      <TheHeader page={`Программы`} role='geologist' />
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
          
          <ArticleSection header='Цель'>
            <div className='content__main'>
              <Text size='m' view='primary' className='decorator decorator_indent-b_l'>Строительство эксплуатационной скважины на Новопортовском НГКМ в соответствии с геолого-техническим заданием, в рамках утвержденного бюджета и в установленные временные сроки.</Text>
            </div>
            <div className='content__main'>
              <Informer status='system' view='filled' className='decorator decorator_indent-b_l'>
                <Text size='m' view='primary' weight='bold'>Примечание</Text>
                <Text size='m' view='primary'>Программа бурения составлена в соответствии с проектной документацией на строительство горизонтальных скважин на Новопортовском НГКМ. Данная программа предназначена в качестве руководства, которое необходимо соблюдать в процессе проведения работ, если фактические геолого-технические условия соответствуют проектным. В случае если геолого-технические условия в процессе проведения работ не будут соответствовать проектным, то Подрядчик обязан прекратить дальнейшее проведение работ, принять все меры по недопущению усугубления ситуации и согласовать проведение дальнейших работ с представителем Заказчика.</Text>
              </Informer>
            </div>

            <div className='content__main'>
              <Text tag='h3' weight='regular' size='xl' view='primary' className='decorator decorator_indent-b_s decorator_indent-t_2xl'>Распределение обязанностей и ответственность сторон</Text>
            </div>
            <div className='content__main'>
              <Text size='m' view='primary' className='decorator decorator_indent-b_l'>Распределение обязанностей и ответственность сторон при выполнении любых операций определяется в соответствии с приложениями к договорам на оказание услуг «Распределение обязанностей в процессе строительства скважин между Заказчиком, Буровым и Нефтесервисными подрядчиками, участвующими в строительстве скважин» или данной программой бурения.</Text>
            </div>
            <div className='content__main'>
              <Text tag='h3' weight='regular' size='xl' view='primary' className='decorator decorator_indent-b_s decorator_indent-t_2xl'>Требования в области ОТ, ПБ и ООС</Text>
            </div>
            <div className='content__main'>
              <Text size='m' view='primary' className='decorator decorator_indent-b_l'>Основной целью требований в области ОТ, ПБ и ООС является отсутствие в процессе проведения всего комплекса работ любых инцидентов, связанных с травмированием и потерей трудоспособности персонала, а также причинением ущерба окружающей среде. Все выполняемые работы обязаны соответствовать отраслевым нормативным документам, действующим на территории Российской Федерации, а также стандартам и нормативно — методическим документам ПАО «Газпром нефть».</Text>
            </div>
          </ArticleSection>
          
          <ArticleSection header='Общая информация о буровом оборудовании и бурильном инструменте'>
            <div className='content__main'>
              <Text tag='h3' weight='regular' size='xl' view='primary' className='decorator decorator_indent-b_s'>Буровое оборудование</Text>
            </div>
            <div className='content__main'>
              <table className='table decorator decorator_indent-b_2xl'>
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
            </div>
            
            <div className='content__main'>
              <Text tag='h3' weight='regular' size='xl' view='primary' className='decorator decorator_indent-b_s'>Противовыбросовое оборудование</Text>
            </div>
            <div className='content__main'>
              <table className='table decorator decorator_indent-b_2xl'>
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
            </div>
            
            <div className='content__main'>
              <Text tag='h3' weight='regular' size='xl' view='primary' className='decorator decorator_indent-b_s'>Система очистки бурового раствора</Text>
            </div>
            <div className='content__main'>
              <table className='table decorator decorator_indent-b_2xl'>
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
            </div>
            
            <div className='content__main'>
              <Text tag='h3' weight='regular' size='xl' view='primary' className='decorator decorator_indent-b_s'>Бурильный инструмент</Text>
            </div>
            <div className='content__main content__main_size_full'> 
              <table className='table table_size_l decorator decorator_indent-b_2xl'>
                <thead>
                  <tr>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Наименование</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Общая длина</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Вес погонного метра</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Толщина стенки</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Внутренний диаметр</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Наружный диаметр (тело трубы / замок)</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Крутящий момент свинчивания</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Тип резьбового соединения</Text>
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
            </div>
          </ArticleSection>

          <ArticleSection header='Общая информация о скважине'>
            <div className='content__main'>
              <table className='table decorator decorator_indent-b_2xl'>
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
            </div>
          </ArticleSection>

          <ArticleSection header='Конструкция скважины'>
            <div className='content__main content__main_size_full'>
              <table className='table decorator decorator_indent-b_2xl'>
                <thead>
                  <tr>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Наименование колонн</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Обсадная колонна</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Глубина спуска по стволу</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Глубина спуска по вертикали</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Интервал цементирования</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Плотность ЦР</Text>
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
            </div>
          </ArticleSection>

          <ArticleSection header='Испытание обсадных колонн и цементного камня на герметичность'>
            <div className='content__main'>
              <table className='table decorator decorator_indent-b_2xl'>
                <thead>
                  <tr>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Название колонны</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Плотность жидкости опрессовки</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Давление на устье скважины при опрессовке</Text>
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
            </div>
          </ArticleSection>

          <ArticleSection header='Литолого-стратиграфическая характеристика разреза скважины'>
            <div className='content__main content__main_size_full'>
              <table className='table decorator decorator_indent-b_2xl'>
                <thead>
                  <tr>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Пласт</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Абс. глубина кровли</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Литология</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Характер насыщения</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Среднее пластовое давление</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Температура</Text>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>ПК₁</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>-476.3м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>чередование сероцветных песчаников, алевролитов и глин</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>Вода</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>42.1 атм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>9.2 °C</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>ХМ₁</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>-913.8м</Text></td>
                    <td rowSpan='2'><Text size='m' view='primary' lineHeight='s'>чередование глин, алевролитов, песчаников</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>Вода</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>84.2 атм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>21.7 °C</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>ХМ₃</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>-968.9м</Text></td>

                    <td><Text size='m' view='primary' lineHeight='s'>Вода</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>85 атм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>22 °C</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>ТП₀</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>-988.6м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>чередование песчаника, песчаника карбонатного, алевролита и аргиллита</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>Вода</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>94.2 атм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>24.5 °C</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Сеяхинские глины (кровля)</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>-1659.6м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>пластинчатый аргиллит и алевролит</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>-</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>-</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>-</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>БЯ₂₃ (подошва сеяхинских глин)</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>-1707.5м</Text></td>
                    <td rowSpan='4'><Text size='m' view='primary' lineHeight='s'>чередование песчаника, песчаника карбонатного, алевролита и аргиллита</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>Газ</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>178 атм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>56 °C</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>НП₂₋₃</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>-1756.1м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>газ</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>181.0 атм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>56.0 °C</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>НП₄</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>-1785.8м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>газ</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>182.0 атм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>57.4 °C</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>НП₅</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>-1831.7м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>Нефть+вода</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>183.0 атм</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>57.4 °C</Text></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ArticleSection>

          <ArticleSection header='Профиль ствола скважины'>
            <div className='content__main content__main_size_full'>
              <table className='table decorator decorator_indent-b_2xl'>
                <thead>
                  <tr>
                    <Text tag='th' rowSpan='2' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Комментарии</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Глубина по стволу</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Зенитный угол</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Азимут</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>СЮ</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>ВЗ</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Широта</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Долгота</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>X</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Y</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Глубина по вертикали</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Абс.Отметка</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Простр. инт-ть</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Смещение</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Дирекц. угол</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Отход</Text>
                  </tr>
                  <tr>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>MD</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Inc</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Az</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>N-S</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>E-W</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Latitude</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Longitude</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Northing</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Easting</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>TVD</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>TVD SS</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>DLS</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Closure</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Closure dir.</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>V.Sec</Text>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'></Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 50' 24.529 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 34' 22.819 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7527046.12</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>397862.27</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>49.64 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 °/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>ОК-426</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>50 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 50' 24.529 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 34' 22.819 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7527046.12</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>397862.27</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>50 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-0.36 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 °/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'></Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>350 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 50' 24.529 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 34' 22.819 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7527046.12</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>397862.27</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>350 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-300.36 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>ОК-324</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>460.33 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7.723°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>221.45°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-5.57 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-4.92 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 50' 24.344 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 34' 22.418 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7527040.55</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>397857.35</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>460 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-410.36 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0.7°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7.43 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>221.45°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7.28 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'></Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>480.33 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7.723°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>221.45°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-7.58 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-6.69 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 50' 24.276 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 34' 22.272 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7527038.54</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>397855.58</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>479.82 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-430.18 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>10.11 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>221.45°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>9.92 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>Top_PK1</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>527.19 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>12.408°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.959°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-13.74 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-12.08 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 50' 24.071 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 34' 21.833 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7527032.38</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>397850.19</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>525.94 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-476.3 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>18.3 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>221.31°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>17.95 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'></Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>981.75 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>57.863°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.279°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-207.74 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-177.28 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 50' 17.603 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 34' 8.369 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7526838.38</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>397684.99</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>888 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-838.36 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>273.1 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.48°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>268.63 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>Top_HM1</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1123.47 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>57.863°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.279°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-299.29 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-254.86 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 50' 14.551 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 34' 2.048 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7526746.83</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>397607.41</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>963.39 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-913.75 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>393.1 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.42°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>386.75 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>Top_HM3</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1227.13 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>57.863°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.279°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-366.25 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-311.61 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 50' 12.319 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 33' 57.425 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7526679.87</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>397550.66</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1018.53 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-968.89 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>480.87 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.39°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>473.14 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>Top_TP0</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1264.1 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>57.863°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.279°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-390.14 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-331.85 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 50' 11.522 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 33' 55.776 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7526655.98</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>397530.42</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1038.2 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-988.56 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>512.19 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.38°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>503.96 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>ОК-245</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1380.28 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>57.863°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.279°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-465.19 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-395.45 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 50' 9.020 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 33' 50.595 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7526580.93</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>397466.82</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1100 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1050.36 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>610.56 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.37°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>600.79 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>Seyah_top</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2525.61 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>57.863°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.279°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1205.1 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1022.46 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 49' 44.351 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 32' 59.534 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7525841.02</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>396839.81</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1709.25 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1659.61 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1580.41 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.31°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1555.38 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>Верх интервала ГНО</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2530 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>57.863°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.279°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1207.93 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1024.86 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 49' 44.256 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 32' 59.338 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7525838.19</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>396837.41</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1711.58 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1661.94 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1584.12 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.31°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1559.04 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>BYA23</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2615.6 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>57.863°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.279°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1263.23 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1071.72 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 49' 42.412 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 32' 55.523 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7525782.89</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>396790.55</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1757.12 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1707.48 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1656.61 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.31°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1630.39 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>Низ интервала ГНО</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2630 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>57.863°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.279°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1272.53 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1079.61 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 49' 42.102 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 32' 54.881 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7525773.59</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>396782.66</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1764.78 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1715.14 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1668.8 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.31°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1642.39 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'></Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2655.49 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>57.863°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.279°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1289 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1093.56 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 49' 41.553 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 32' 53.745 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7525757.12</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>396768.71</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1778.34 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1728.7 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1690.38 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.31°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1663.63 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>BYA24</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2668.67 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>58.865°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>219.272°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1297.63 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1100.74 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 49' 41.266 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 32' 53.162 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7525748.49</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>396761.53</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1785.25 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1735.61 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1701.6 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.31°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1674.69 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>NP2_3</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2710.17 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>62.066°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>216.235°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1326.18 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1122.83 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 49' 40.316 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 32' 51.372 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7525719.94</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>396739.44</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1805.71 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1756.07 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1737.67 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.25°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1710.47 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>NP4</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2779.94 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67.583°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>211.514°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1378.59 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1157.95 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 49' 38.581 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 32' 48.550 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7525667.53</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>396704.32</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1835.39 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1785.75 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1800.38 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>220.03°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1773.43 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>NP5</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2954.18 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>81.829°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>201.078°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1528.88 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1231.63 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 49' 33.638 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 32' 42.767 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7525517.24</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>396630.64</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1881.35 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1831.71 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1963.26 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>218.85°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1940.4 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'></Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>3016.41 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>87°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>197.598°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1587.29 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1252.12 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 49' 31.727 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 32' 41.216 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7525458.83</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>396610.15</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1887.41 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1837.77 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2021.7 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>218.27°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2001.21 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>ОК-178 - 5238_T2_V2</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>3116.41 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>87°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>197.598°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1682.48 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1282.31 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 49' 28.618 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 32' 38.960 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7525363.64</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>396579.96</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1892.64 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1843 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2115.43 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>217.31°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2098.71 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'></Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>3136.41 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>87°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>197.598°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1701.52 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1288.35 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 49' 27.996 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 32' 38.509 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7525344.6</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>396573.92</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1893.69 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1844.05 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2134.25 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>217.13°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2118.21 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'></Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>3153.74 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>87.865°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>197.595°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1718.02 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1293.58 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 49' 27.457 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 32' 38.118 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7525328.1</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>396568.69</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1894.46 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1844.82 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0.5°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2150.57 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>216.98°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2135.11 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'></Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>3245.03 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>87.865°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>197.595°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1804.98 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1321.16 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 49' 24.616 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 32' 36.059 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7525241.14</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>396541.11</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1897.86 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1848.22 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2236.83 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>216.2°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2224.17 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>5238_M1_V2</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>3294.26 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>90.328°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>197.599°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1851.9 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1336.04 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 49' 23.083 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 32' 34.947 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7525194.22</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>396526.23</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1898.64 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1849 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0.5°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2283.54 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>215.81°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>2272.23 м</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='s' view='primary' lineHeight='s'>5238_T3_V2</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>4342.67 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>90.328°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>197.599°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-2851.22 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1653.02 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>67° 48' 50.438 N</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>72° 32' 11.282 E</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>7524194.9</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>396209.25</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>1892.64 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>-1843 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>0°/10м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>3295.74 м</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>210.1°</Text></td>
                    <td><Text size='s' view='primary' lineHeight='s'>3295.74 м</Text></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className='content__main'>
              <Informer status='system' view='filled' className='decorator decorator_indent-b_l'>
                <Text size='m' view='primary' weight='bold'>Примечание</Text>
                <Text size='m' view='primary' className='decorator decorator_indent-b_m'>Максимально допустимая пространственная интенсивность в интервале набора параметров кривизны определяется от плановой + 0,50/10м.</Text>
                <Text size='m' view='primary' className='decorator decorator_indent-b_m'>Максимально допустимая пространственная интенсивность в интервале стабилизации не более 10/10м.</Text>
                <Text size='m' view='primary'>Максимально допустимая пространственная интенсивность в зоне ГНО не более 0.30/10м.</Text>
              </Informer>
            </div>
            <div className='content__main'>
              <img src={IMGProfileOfTheWellbore} alt=' ' />
            </div>
          </ArticleSection>

          <ArticleSection header='Отчет о рисках пересечения стволов скважин'>
            <div className='content__main'>
              <img src={IMGRiskReportTheIntersectionOfTheWellbore} alt=' '/>
            </div>
          </ArticleSection>

          <ArticleSection header='Программа геофизических исследований и каротажа в процессе бурения'>
            <div className='content__main'>
              <Text tag='h3' weight='regular' size='xl' view='primary' className='decorator decorator_indent-b_s'>Буровое оборудование</Text>
            </div>
            <div className='content__main content__main_size_full'>
              <table className='table decorator decorator_indent-b_2xl'>
                <thead>
                  <tr>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Наименование</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'></Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Масштаб</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='xs' transform='uppercase' spacing='xs'>Интервал</Text>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Комплекс «Halliburton": инклинометрия</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>В интервале кондуктора</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>Инклинометр: 1 замер на 50м</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 50.0 до 460.3</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Комплекс "Halliburton": инклинометрия</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>В интервале тех. колонны</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>- в инт. стабилизации: 1 замер на 1 "свечу";<br />- в инт. кривизны: 1 замер на 1 "трубу".</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 460.3 до 1380.3</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Комплекс "Halliburton": ГК; ИК; инклинометрия в реальном времени и в записи</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>В интервале транспортного ствола</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>ГИС: 1-2 точки на метр;<br />Инклинометр:<br />- в инт стабилизации: 1 замер на 1 "свечу";<br />- в инт кривизны: 1 замер на 1 "трубу".</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 1380.3 до 3116.4</Text></td>
                  </tr>
                  <tr>
                    <td><Text size='m' view='primary' lineHeight='s'>Комплекс "Halliburton": ГК; ИК; ГГК-П; ННК;<br />кавернометрия; инклинометрия в реальном времени и в записи</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>Горизонтальный ствол</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>ГИС: 3 точки на метр; Инклинометр: 1 замер на 1 "трубу";</Text></td>
                    <td><Text size='m' view='primary' lineHeight='s'>от 3116.4 до 4342.7</Text></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='content__main'>
              <Informer status='system' view='filled' className='decorator decorator_indent-b_l'>
                <Text size='m' view='primary' weight='bold'>Примечание</Text>
                <Text size='m' view='primary'>Перед началом бурения скважины согласовать с геологической службой Заказчика порядок предоставления каротажных данных и список рассылки. Интервал перезаписи каротажных данных после смены КНБК согласовать с геологической службой Заказчика.</Text>
              </Informer>
            </div>
          </ArticleSection>

          <ArticleSection header='Порядок снятия замера при бурении'>
            <div className='content__main'>
              <Text size='m' view='primary' className='decorator decorator_indent-b_l'>Частота взятия замеров на участке стабилизации каждые 24м, снятие замеров после наращивания*. В интервалах набора параметров кривизны (по мере необходимости) и в случае сближения с ранее пробуренными скважинами каждые 12м, снятие замеров до наращивания**.</Text>
            </div>
            <div className='content__main'>
              <Text size='m' view='primary' className='decorator decorator_indent-b_l'>При бурении секции под хвостовик (152,4мм) снятие замеров производить согласно протоколу ПТ-4/038 от 07.10.16г., снятие замера после наращивания.</Text>
            </div>
          </ArticleSection>

          <ArticleSection header='Требования к каротажным данным по отправке'>
            <div className='content__main'>
              <Text size='m' view='primary' className='decorator decorator_indent-b_l'>В транспортном стволе периодичность:</Text>
            </div>
            <div className='content__main'>
              <ul>
                <li><Text size='m' view='primary'>— выше 150 м до Т2 по вертикали — замеры высылаются дважды в сутки на 06:00 и 17:00.</Text></li>
                <li><Text size='m' view='primary'>— за 150 м до Т2 по вертикали — каждую пробуренную «свечу».</Text></li>
                <li><Text size='m' view='primary'>— за 80 м до Т2 по вертикали — каждую пробуренную «трубку» (по согласованию с ЦУБ).</Text></li>
              </ul>
            </div>

            <div className='content__main'>
              <Text size='m' view='primary' className='decorator decorator_indent-b_l'>В горизонтальном стволе периодичность:</Text>
            </div>
            <div className='content__main'>
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
            </div>

            <div className='content__main content__main_size_full'>
              <table className='table decorator decorator_indent-b_2xl'>
                <thead>
                  <tr>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>№</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>D долота</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>КНБК №</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Глубина по стволу</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Интервал</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Прибор</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Условия замера</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Интервал замеров</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Замер до/после наращивания</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Количество замеров</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Время на замер</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Время за секцию</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Нараст. время</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Время на ориентирование отклонителя</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Время на отправку команд РУС</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Код погрешности</Text>
                    <Text tag='th' weight='regular' lineHeight='xs' view='secondary' size='2xs' transform='uppercase' spacing='xs'>Описание погрешности</Text>
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
            </div>
          </ArticleSection>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GeologistProgrammPage;
