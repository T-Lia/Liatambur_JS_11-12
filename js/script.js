// Carousel

$(function () {
    $('.carousel').xcarousel();
});


//Template

$(function () {
    var dogs = $('#dogs').html();
    var BreedInformation = [
        {
            breed: 'Шпиц',
            origin: 'Страна происхождение: Германия',
            lifeExpectancy: 'Продолжительность жизни: 12-15 лет',
            description: 'Информация: Немецкие шпицы являются потомками торфяной собаки каменного века «canis familiaris palustris Ruthimeyer» и более позднего «Свайного шпица», они — старейшая порода собак Средней Европы. От них произошло множество других пород.'
        },

        {
            breed: 'Джек Рассел Терьер',
            origin: 'Страна происхождение: Англия',
            lifeExpectancy: 'Продолжительность жизни: 13-16 лет',
            description: 'Информация: Джек-рассел-терьер (англ. Jack Russell Terrier) — охотничья порода собак. Часто этот терьер «работает» с другими охотничьими собаками — залезая в норы, он выгоняет лисиц.'
        },

        {
            breed: 'Чихуахуа',
            origin: 'Страна происхождение: Мексика',
            lifeExpectancy: 'Продолжительность жизни: 12-15 лет',
            description: 'Информация: Чихуа́хуа (исп. Chihuahua [tʃiˈwawa]) — самая маленькая порода собак, названная в честь мексиканского штата Чиуауа, где она была обнаружена примерно в 1850 году.'
        },

        {
            breed: 'Той терьер',
            origin: 'Страна происхождение: Великобритания',
            lifeExpectancy: 'Продолжительность жизни: 10-15 лет',
            description: 'Информация: Английский той-терьер (черно-подпалый) — порода собак, мелкий гладкошёрстный терьер. Выведен в Великобритании, признан Английским кеннел-клубом. Американский клуб собаководства не признаёт английских той-терьеров отдельной породой и классифицирует их как мелкую разновидность манчестер-терьера. Считается редкой породой.'
        },

        {
            breed: 'Йоркширский терьер',
            origin: 'Страна происхождение: Великобритания',
            lifeExpectancy: 'Продолжительность жизни: 12-15 лет',
            description: 'Информация: Йоркширский терьер (англ. Yorkshire terrier), или йорк — декоративная порода собак, выведенная в Англии, графстве Йоркшир в конце XIX в. История породы ещё очень коротка. Предками этих терьеров были манчестерский терьер, скай терьер, мальтезе и др. Сейчас йорк — одна из самых популярных комнатно-декоративных пород собак.'
        },
    ];
    var content = tmpl(dogs, {
        data: BreedInformation
    });

    $('.wrapper').append(content);
});