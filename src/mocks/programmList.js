const programmList = [
  {
    id: 5893,
    type: 'Оценочная',
    bush: '3 куст',
    well: '38/6 скважина',
    stage: 'Заполнение',
    deadline: '20 мая 2020',
    curator: 'Тихон Кувшинов',
    geologist: 'Анастасия Алёшин',
    status: ['done', 'done', false, false, false, false, false]
  },
  {
    id: 5894,
    type: 'Нагнетательная',
    bush: '8 куст',
    well: '103/5 скважина',
    stage: 'Заполнение',
    deadline: '20 мая 2020',
    curator: 'Тихон Кувшинов',
    status: ['done', 'done', 'done', 'warning', false, false, false]
  },
  {
    id: 5895,
    type: 'Оценочная',
    bush: '5 куст',
    well: '198/4 скважина',
    stage: 'Заполнение',
    deadline: '20 мая 2020',
    curator: 'Тихон Кувшинов',
    geologist: 'Анастасия Алёшин',
    status: ['done', 'done', 'warning', 'warning', 'warning', false, false]
  },
  {
    id: 5896,
    type: 'Разведочная',
    bush: '8 куст',
    well: '59/1 скважина',
    stage: 'Заполнение',
    deadline: '20 мая 2020',
    curator: 'Тихон Кувшинов',
    status: ['done', 'done', false, false, false, false, false]
  },
  {
    id: 5897,
    type: 'Опережающая добывающая',
    bush: '7 куст',
    well: '103/6 скважина',
    stage: 'Заполнение',
    deadline: '20 мая 2020',
    curator: 'Яснов Никита',
    geologist: 'Анастасия Алёшина',
    status: ['done', 'done', false, false, false, false, false]
  },
  {
    id: 5898,
    type: 'Разведочная',
    bush: '3 куст',
    well: '49/2 скважина',
    stage: 'Заполнение',
    deadline: '20 мая 2020',
    curator: 'Гуськов Владимир',
    status: ['done', 'done', false, false, false, false, false]
  },
  {
    id: 5899,
    type: 'Разведочная',
    bush: '1 куст',
    well: '28/3 скважина',
    stage: 'Заполнение',
    deadline: '20 мая 2020',
    curator: 'Стеблева Анастасия',
    status: ['done', 'done', false, false, false, false, false]
  },
  {
    id: 5900,
    type: 'Структурно-поисковая',
    bush: '6 куст',
    well: '48/2 скважина',
    stage: 'Заполнение',
    deadline: '20 мая 2020',
    curator: 'Клименко Ольга',
    geologist: 'Анастасия Алёшина',
    status: ['done', 'done', false, false, false, false, false]
  },
  {
    id: 5901,
    type: 'Оценочная',
    bush: '10 куст',
    well: '18/3 скважина',
    stage: 'Согласование',
    deadline: '20 мая 2020',
    curator: 'Тихон Кувшинов',
    status: [false, false, false, false, false, false, false, false, false, false, false]
  },
  {
    id: 5902,
    type: 'Структурно-поисковая',
    bush: '9 куст',
    well: '182/5 скважина',
    stage: 'Согласование',
    deadline: '20 мая 2020',
    curator: 'Тихон Кувшинов',
    geologist: 'Анастасия Алёшина',
    status: [false, false, false, false, false, false, false, false, false, false, false]
  },
  {
    id: 5903,
    type: 'Эксплуатационная',
    bush: '7 куст',
    well: '38/16 скважина',
    stage: 'Согласование',
    deadline: '20 мая 2020',
    curator: 'Тихон Кувшинов',
    status: ['done', 'done', false, false, false, false, false, false, false, false, false]
  },
  {
    id: 5904,
    type: 'Оценочная',
    bush: '10 куст',
    well: '59/2 скважина',
    stage: 'Согласование',
    deadline: '20 мая 2020',
    curator: 'Кудашов Эдуард',
    status: [false, false, false, false, false, false, false, false, false, false, false]
  },
  {
    id: 5905,
    type: 'Опережающая добывающая',
    bush: '4 куст',
    well: '37/2 скважина',
    stage: 'Согласование',
    deadline: '20 мая 2020',
    curator: 'Фомина Римма',
    geologist: 'Анастасия Алёшина',
    status: ['done', 'done', 'done', 'done', 'done', false, false, false, false, false, false]
  },
  {
    id: 5906,
    type: 'Разведочная',
    bush: '7 куст',
    well: '94/13 скважина',
    stage: 'Согласование',
    deadline: '20 мая 2020',
    curator: 'Бондарчук Ян',
    status: ['done', 'done', 'done', 'done', 'done', 'done', false, false, false, false, false]
  },
  {
    id: 5907,
    type: 'Разведочная',
    bush: '5 куст',
    well: '38/6 скважина',
    stage: 'Согласование',
    deadline: '20 мая 2020',
    curator: 'Гуськов Владимир',
    geologist: 'Анастасия Алёшина',
    status: ['done', 'done', 'done', 'done', 'done', 'done', false, false, false, false, false]
  },
  {
    id: 5908,
    type: 'Разведочная',
    bush: '9 куст',
    well: '103/5 скважина',
    stage: 'Согласование',
    deadline: '20 мая 2020',
    curator: 'Клименко Ольга',
    status: ['done', 'done', 'done', 'done', 'done', 'done', false, false, false, false, false]
  },
  {
    id: 5909,
    type: 'Оценочная',
    bush: '10 куст',
    well: '198/4 скважина',
    stage: 'Согласование',
    deadline: '20 мая 2020',
    curator: 'Стеблева Анастасия',
    status: ['done', 'done', 'done', 'done', 'done', false, false, false, false, false, false]
  },
  {
    id: 5910,
    type: 'Разведочная',
    bush: '9 куст',
    well: '59/1 скважина',
    stage: 'Сформирована',
    deadline: '20 мая 2020',
    curator: 'Тихон Кувшинов',
    status: ['done', 'done', 'done', 'done', 'done', 'done', 'done', 'done', 'done', 'done', 'done']
  },
  {
    id: 5911,
    type: 'Структурно-поисковая',
    bush: '2 куст',
    well: '103/6 скважина',
    stage: 'Сформирована',
    deadline: '20 мая 2020',
    curator: 'Фомина Римма',
    status: ['done', 'done', 'done', 'done', 'done', 'done', 'done', 'done', 'done', 'done', 'done']
  },
  {
    id: 5912,
    type: 'Эксплуатационная',
    bush: '4 куст',
    well: '49/2 скважина',
    stage: 'Завершено',
    deadline: '20 мая 2020',
    curator: 'Тихон Кувшинов'
  },
  {
    id: 5913,
    type: 'Утилизационная',
    bush: '6 куст',
    well: '28/3 скважина',
    stage: 'Завершено',
    deadline: '20 мая 2020',
    curator: 'Тихон Кувшинов'
  },
  {
    id: 5914,
    type: 'Эксплуатационная',
    bush: '8 куст',
    well: '48/2 скважина',
    stage: 'Завершено',
    deadline: '20 мая 2020',
    curator: 'Тихон Кувшинов',
    geologist: 'Анастасия Алёшина'
  },
  {
    id: 5915,
    type: 'Опережающая добывающая',
    bush: '2 куст',
    well: '38/6 скважина',
    stage: 'Завершено',
    deadline: '20 мая 2020',
    curator: 'Тихон Кувшинов'
  },
  {
    id: 5916,
    type: 'Оценочная',
    bush: '2 куст',
    well: '103/5 скважина',
    stage: 'Завершено',
    deadline: '20 мая 2020',
    curator: 'Тихон Кувшинов'
  },
  {
    id: 5917,
    type: 'Утилизационная',
    bush: '6 куст',
    well: '198/4 скважина',
    stage: 'Завершено',
    deadline: '20 мая 2020',
    curator: 'Тихон Кувшинов'
  },
  {
    id: 5918,
    type: 'Эксплуатационная',
    bush: '1 куст',
    well: '38/6 скважина',
    stage: 'Завершено',
    deadline: '20 мая 2020',
    curator: 'Гуськов Владимир',
    geologist: 'Анастасия Алёшина'
  },
  {
    id: 5919,
    type: 'Оценочная',
    bush: '4 куст',
    well: '103/5 скважина',
    stage: 'Завершено',
    deadline: '20 мая 2020',
    curator: 'Клименко Ольга'
  },
  {
    id: 5920,
    type: 'Эксплуатационная',
    bush: '5 куст',
    well: '198/4 скважина',
    stage: 'Завершено',
    deadline: '20 мая 2020',
    curator: 'Кудашов Эдуард'
  },
  {
    id: 5921,
    type: 'Оценочная',
    bush: '1 куст',
    well: '59/1 скважина',
    stage: 'Завершено',
    deadline: '20 мая 2020',
    curator: 'Гуськов Владимир'
  },
  {
    id: 5922,
    type: 'Структурно-поисковая',
    bush: '3 куст',
    well: '103/6 скважина',
    stage: 'Завершено',
    deadline: '20 мая 2020',
    curator: 'Бондарчук Ян',
    geologist: 'Анастасия Алёшина'
  },
];

export default programmList;