
const ua = {
    title: 'Досвід роботи',
    items: [
        {
            name: 'ProgForce (FrontEnd)', 
            helper: '2015-2018',
            desc: `Фірма по outsource розробці та підтримці сайтів закордонних клієнтів.
                З офісами в Росії, Ізраїлі, СШA та Укрїні. Перевела мене на якісно новий рівень роботи в команді,
                а також познайомила з java (spring, jsp) та nodejs (jade, mongo, gulp та WebPack2).`,
            result: [
                'SwagBucks.com',
                'LiveRaise.com',
                'jQuery.time.js',
                'Karma project',
            ],
        }, {
            name: 'Go-games.org (Web програміст)', 
            helper: '2013-2014',
            desc: `Маленька фірма по розробці ігор для соціальної мережі facebook. Змусила мене зробити величезний
                крок у використанні linux, а також вивчення python та framework'a django. Ще зрозуміти особливість
                командної роботи, що на практиці не така проста.`,
            result: [
                'Notisend',
                'SexyGame',
                'GameOfTiles',
                'Game&MovieQuiz',
            ],
        }, {
            name: 'КПІ ПБФ (лаборант)',
            helper: '2012',
            desc: `Допомога викладачу проводити заняття, а також обслуговування комп&apos;ютерного класу.<br>
                Був одним з організаторів гуртка "NERV", що займався навчанням студенів у програмуванні.<br>
                Також після занять з колегами було створено кілька проектів за власної ініціативи.`,
            result: [
                'FindIt',
                'PasteTrack',
                'TFN',
                'Weeker',
                'SecurityPass',
            ],
        }, {
            name: 'uWorld (Web програміст)',
            helper: '2011',
            desc: `Невеличка фірма по роботі з клієнтами.<br> Створеня "двигунців" для сайтів, робота з CMS (Joomla, Drupal),
                різного роду завдання з JavaScript та JQuery. А також виконання ТЗ замовників.`,
            result: [
                'Drupal pictures',
                'LightBox',
                'Joomla site',
            ],
        }
    ],
}

export default {
    ua,
    en: Object.assign({}, ua, {
        title: 'Experience',
        items: [
            Object.assign({}, ua.items[0], {
                desc: `This company is outsource development and support of sites for overseas clients.
                    With offices in Russia, Israel, CSA and Ukrine. And transferred me to a qualitatively
                    new level of teamwork, and also introduced java (spring, jsp) and
                    nodejs (jade, mongo, gulp and WebPack2).`,
            }), Object.assign({}, ua.items[1], {
                name: 'Go-games.org (Web programmer)',
                desc: `A small company developing games for the facebook social network.
                    It made me take a huge step in using linux, as well as studying python and framework django.
                    Understand the feature of team work, which in practice is not so simple.`,
            }), Object.assign({}, ua.items[2], {
                name: 'NT University (assistant)',
                desc: `Helping the teacher to do classes as well as computer classroom services.
                    I was one of the organizers of the circle "NERV", and was studed students for programming.
                    Also, after classes with colleagues, we created several projects on their own initiative.`,
            }), Object.assign({}, ua.items[3], {
                name: 'uWorld (Web programmer)',
                desc: `A small company working with clients.
                    Creating "engines" for sites, working on CMS (Joomla, Drupal), a different kind
                    of task with JavaScript and jQuery. And also performance of technical tasks of customers.`,
            }),
        ],
    }),
}
