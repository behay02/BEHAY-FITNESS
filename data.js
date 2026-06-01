var SITE_DATA = {
  clubs: [
    {
      title: "Авиапарк",
      address: "Ходынский бульвар, д. 4",
      metro: "ЦСКА",
      hours: "пн-пт 07:00-00:00, сб-вс 08:00-00:00",
      image: "images/clubs/c1.jpg"
    },
    {
      title: "Европейский",
      address: "пл. Киевского Вокзала, д. 2",
      metro: "Киевская",
      hours: "24/7",
      image: "images/clubs/c2.jpg"
    },
    {
      title: "Метрополис",
      address: "Ленинградское шоссе, д. 16А",
      metro: "Войковская",
      hours: "24/7",
      image: "images/clubs/c3.jpg"
    },
    {
      title: "Афимолл Сити",
      address: "Пресненская наб., д. 2",
      metro: "Деловой центр",
      hours: "24/7",
      image: "images/clubs/c4.jpg"
    },
    {
      title: "Европолис",
      address: "проспект Мира, д. 211",
      metro: "ВДНХ",
      hours: "24/7",
      image: "images/clubs/c5.jpg"
    },
    {
      title: "Columbus",
      address: "Кировоградская ул., д. 13А",
      metro: "Пражская",
      hours: "24/7",
      image: "images/clubs/c6.jpg"
    },
    {
      title: "Vegas Крокус Сити",
      address: "ул. Международная, д. 12",
      metro: "Мякинино",
      hours: "24/7",
      image: "images/clubs/c7.jpg"
    },
    {
      title: "Охотный ряд",
      address: "Манежная площадь",
      metro: "Охотный ряд",
      hours: "24/7",
      image: "images/clubs/c8.jpg"
    },
    {
      title: "Ривьера",
      address: "ул. Автозаводская, д. 18",
      metro: "Автозаводская",
      hours: "24/7",
      image: "images/clubs/c9.jpg"
    },
    {
      title: "Атриум",
      address: "ул. Земляной Вал, д. 33",
      metro: "Курская",
      hours: "24/7",
      image: "images/clubs/c11.jpg"
    }
  ],
  
  tariffs: [
    {
      title: "Базовый",
      price: "1990",
      period: "в месяц",
      features: "Тренажерный зал;Доступ во все клубы;Время 07:00-00:00;Без заморозки",
      popular: false
    },
    {
      title: "Стандарт",
      price: "3990",
      period: "в месяц",
      features: "Тренажерный зал;Доступ во все клубы;Круглосуточно 24/7;Групповые программы;Заморозка до 7 дней",
      popular: true
    },
    {
      title: "Премиум",
      price: "7990",
      period: "в месяц",
      features: "Тренажерный зал;Доступ во все клубы;Круглосуточно 24/7;Все групповые;Персональные тренировки;Заморозка до 15 дней;Спа-зона",
      popular: false
    }
  ],
  
  trainers: [
    { name: "Алексей Смирнов", speciality: "Силовые тренировки, Бодибилдинг", clubs: "aviapark metropolis evropeyskiy", exp: "10 лет", about: "Мастер спорта по пауэрлифтингу. Автор методики набора массы за 12 недель.", image: "trainers/m1.jpg" },
    { name: "Марина Волкова", speciality: "Йога, Пилатес, Стретчинг", clubs: "aviapark afimall ohotny", exp: "8 лет", about: "Сертифицированный инструктор International Yoga Federation.", image: "trainers/t1.jpg" },
    { name: "Дмитрий Орлов", speciality: "Единоборства, Бокс, MMA", clubs: "aviapark metropolis ohotny", exp: "12 лет", about: "КМС по боксу. Чемпион ЦФО по кикбоксингу 2022.", image: "trainers/m10.jpg" },
    { name: "Ольга Петрова", speciality: "Сайклинг, Кардио, HIIT", clubs: "aviapark metropolis evropeyskiy", exp: "6 лет", about: "Сертифицированный инструктор Spinning.", image: "trainers/t2.jpg" },
    { name: "Михаил Егоров", speciality: "MMA, Бокс, Кроссфит", clubs: "afimall ohotny evropeyskiy", exp: "11 лет", about: "Действующий боец MMA. Чемпион Fight Nights 2023.", image: "trainers/m11.jpg" },
    { name: "София Андреева", speciality: "Йога, Медитация, Аэройога", clubs: "ohotny afimall metropolis", exp: "9 лет", about: "Выпускница Гималайского института йоги.", image: "trainers/t3.jpg" },
    { name: "Константин Белов", speciality: "Бодибилдинг, Силовые тренировки", clubs: "ohotny evropeyskiy afimall", exp: "15 лет", about: "Чемпион России по бодибилдингу 2021.", image: "trainers/m12.jpg" },
    { name: "Игорь Васильев", speciality: "Функциональный тренинг, Кроссфит", clubs: "aviapark metropolis evropeyskiy", exp: "7 лет", about: "Тренер CrossFit Level 2.", image: "trainers/m2.jpg" },
    { name: "Георгий Власов", speciality: "Пауэрлифтинг, Силовые тренировки", clubs: "afimall ohotny metropolis", exp: "13 лет", about: "Мастер спорта международного класса.", image: "trainers/m3.jpg" },
    { name: "Дарья Лебедева", speciality: "Пилатес, MFR, Здоровая спина", clubs: "metropolis aviapark afimall", exp: "6 лет", about: "Инструктор Polestar Pilates.", image: "trainers/t4.jpg" },
    { name: "Руслан Ахметов", speciality: "Единоборства, Кикбоксинг, MMA", clubs: "evropolis atrium columbus", exp: "9 лет", about: "Чемпион Москвы по кикбоксингу 2022.", image: "trainers/m4.jpg" },
    { name: "Инна Васильева", speciality: "Пилатес, Body Ballet, Осанка", clubs: "evropolis atrium vegas", exp: "7 лет", about: "Балерина Мариинского театра.", image: "trainers/t5.jpg" },
    { name: "Даниил Чернов", speciality: "Тайский бокс, Бокс", clubs: "columbus riviera atrium", exp: "10 лет", about: "Мастер спорта по тайскому боксу.", image: "trainers/m5.jpg" },
    { name: "Александра Фомина", speciality: "Йога, Аэройога, Hatha Yoga", clubs: "columbus riviera vegas", exp: "6 лет", about: "Сертифицированный инструктор по аэройоге.", image: "trainers/t6.jpg" },
    { name: "Кирилл Захаров", speciality: "Силовые тренировки, Бодибилдинг", clubs: "columbus riviera evropolis", exp: "12 лет", about: "Чемпион Московской области по бодибилдингу 2022.", image: "trainers/m6.jpg" },
    { name: "Эдуард Галимов", speciality: "Кроссфит, HIIT, Функциональный тренинг", clubs: "vegas atrium riviera", exp: "8 лет", about: "Финалист CrossFit Open 2023.", image: "trainers/m7.jpg" },
    { name: "Лилия Гареева", speciality: "Йога, Пилатес, Здоровая спина", clubs: "vegas columbus evropolis", exp: "7 лет", about: "Инструктор по йоге Айенгара.", image: "trainers/t7.jpg" },
    { name: "Марат Ибрагимов", speciality: "Бокс, MMA, Грэпплинг", clubs: "vegas atrium columbus", exp: "11 лет", about: "Мастер спорта по боксу.", image: "trainers/m8.jpg" },
    { name: "Полина Крылова", speciality: "Сайклинг, Кардио, Табата", clubs: "columbus riviera evropolis", exp: "4 года", about: "Инструктор групповых программ.", image: "trainers/t8.jpg" },
    { name: "Станислав Рогов", speciality: "Персональный тренер, Похудение", clubs: "vegas riviera atrium", exp: "10 лет", about: "Автор курса «Трансформация тела».", image: "trainers/m9.jpg" }
  ]
};