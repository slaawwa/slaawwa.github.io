
<template lang="pug">

    //- - var blocks = ['profile', 'education', 'experience', 'skills', 'hobby'];
    -
        profile = [
            {
                key: 'П.І.П.',
                val: 'Кушнір В&apos;ячеслав Володимирович'
            }, {
                key: 'Вік',
                val: '{{ getOld() }} (29 лютого 1992)'
            }, {
                key: 'Громадянство',
                val: 'України'
            }, {
                key: 'Сімейний стан',
                val: 'Неодружений'
            }, {
                key: 'Адреса',
                val: 'Київ, вул. Академіка Янгеля, 7'
            }, {
                key: 'Телефон',
                val: '<i class="icofont-phone"></i> 093 056 19 63'
            }, {
                key: 'Пошта',
                val: '<i class="icofont-envelope"></i> slaawwa@gmail.com'
            },
        ],

        education = [
            {
                name: 'НТУУ "Київськй політехнічний інститут"',
                helper: '2011 - 2017',
                desc: 'Приладобудівний факультет<br> Кафедра "Наукових аналітичних, екологічних приладів та систем".',
                result: 'Грамота за 1 місце з електротехніки',
            }, {
                name: 'НУХТ "Смілянський технікум харчових технологій"',
                helper: '2007 - 2011',
                desc: 'Відділення "Автоматизованих робототехнічних систем"<br>\
                  Спеціальність "Обслуговування комп&apos;ютеризованих, інтегрованих і робототехнічних систем". Може займати посади: технік комп&apos;ютеризованих систем, технік-електронік, технік-програміст, технік-системотехнік.',
                result: '1. Червоний диплом молодшого спеціаліста<br>\
                  2. Свідоцтво оператора комп&apos;ютерного набору (2 ступеня)',
            }
        ],

        experience = [
            {
                name: 'ProgForce (FrontEnd)', 
                helper: '2015-2018',
                desc: 'Молода фірма по outsource розробці та підтримці сайтів закордонних клієнтів. З офісами в Росії, Ізраїлі, СШA та Укрїні. Перевела мене на якісно новий рівень роботи в команді, а також познайомила з java (spring, jsp) та nodejs (jade, mongo, gulp та WebPack2).',
                result: '1. SwagBucks.com<br>\
                  2. LiveRaise.com<br>\
                  3. jQuery.time.js<br>\
                  4. Karma project'
            }, {
                name: 'Go-games.org (Web програміст)', 
                helper: '2013-2014',
                desc: 'Маленька фірма по розробці ігор для соціальної мережі facebook. Змусила мене зробити величезний крок у використанні linux, а також вивчення python та framework`a django. Ще зрозуміти особливість командної роботи, що на практиці не така проста.',
                result: '1. Notisend<br>\
                  2. SexyGame<br>\
                  3. GameOfTiles<br>\
                  4. Game&MovieQuiz'
            }, {
                name: 'КПІ ПБФ (лаборант)',
                helper: '2012',
                desc: 'Допомога викладачу проводити заняття, а також обслуговування комп&apos;ютерного класу.<br> Був одним з організаторів гуртка "NERV", що займався навчанням студенів у програмуванні.<br>Також після занять з колегами було створено кілька проектів за власної ініціативи.',
                result: '1. FindIt<br>\
                  2. PasteTrack<br>\
                  3. TFN<br>\
                  4. Weeker<br>\
                  5. SecurityPass'
            }, {
                name: 'uWorld (Web програміст)',
                helper: '2011',
                desc: 'Невеличка фірма по роботі з клієнтами.<br> Створеня "двигунців" для сайтів, робота з CMS (Joomla, Drupal), різного роду завдання з JavaScript та JQuery. А також виконання ТЗ замовників.',
                result: '1. Drupal pictures<br>\
                  2. LightBox<br>\
                  3. Joomla site'
            }
        ],
        skills = [
            [
                {
                    name: 'Особисті',
                    lines: [
                        ['Активність', 5],                                                
                        ['Креативність', 5],
                        ['Відповідальність', 6],
                        ['Цілеспрямованість', 6],
                        ['Фізичні дані', 6],
                        ['Комунікативність', 5],
                        ['Освоєння нового', 4],
                        ['Робота в команді', 3.5],
                    ],
                },
                {
                    name: 'Мови',
                    lines: [
                        ['Українська', 6],
                        ['Англійська', 3.5],
                        ['Російська', 5],
                    ],
                },
            ], [
                {
                    name: 'Професійні<small>База</small>',
                    lines: [
                        ['HTML5 & Pug/Jade', 6],
                        ['CSS3 & Less', 6],
                        ['JS & JQuery', 5],
                        ['NodeJS', 5],
                        ['PHP', 4.5],
                        ['Python', 4.5],
                        // ['Java', 2],
                        ['MongoDB', 5],
                        ['MySQL & SQLite', 5],
                    ]
                }, {
                    name: '<small>FE - FrameWork</small>',
                    lines: [
                        ['VueJS', 6],
                        ['AngularJS', 5],
                        ['Angular2', 4],
                        ['React', 4],
                    ],
                }, {
                    name: '<small>CMS & FrameWork</small>',
                    lines: [
                        ['Hapi16/17', 5],
                        ['Yii2', 5],
                        ['Django', 5],
                        ['Joomla', 3],
                        ['WordPress', 2.5],
                        ['Spring', 2],
                    ],
                }, {
                    name: '<small>Графіка</small>', 
                    lines: [
                        ['Paint.Net', 5],
                        ['Figma', 4],
                        ['Avocode', 4],
                        ['CorelDraw', 3],
                        ['PhotoShop', 2],
                    ]
                }, {
                    name: '<small>Плюс</small>', 
                    lines: [
                        ['Webpack', 5],
                        ['Gulp', 5],
                        ['Git', 5],
                        ['Delphi (Lazarus)', 3.5],
                        ['C++ building', 3.5],
                        ['Java (Android)', 2.5],
                        ['SVN', 2.5],
                    ]
                }, {
                    name: '<small>ОС</small>',
                    lines: [
                        ['Windows', 6],
                        ['Unix', 4],
                    ]
                }
            ],
        ],
        hobby = [
            {
                name: 'Біг/Run',
                helper: 'Марафон <strong>42.195</strong> км!',
                desc: 'Київ 8 жовтня 2017 <strong>3:58:20</strong> та Роттердам 8 квітня 2018 <strong>3:23:58</strong>)',
            }, {
                name: 'Батут',
                helper: 'Крутимо сальтухи',
                desc: 'Стрибки на батуті енергійний, цікавий і просто позитивний вид спорту',
            }, {
                name: 'BodyBuilding',
                helper: 'Постійно займаюсь Ф.П. з 7 класу.',
                desc: 'GYM, сноуборд, плавання, теніс, ролики, велосипед, регбі',
            }, {
                name: 'Колекція календариків',
                helper: 'Збирав з 2000 по 2012 роки',
                desc: 'Календарики з автомобілями по одному на кожен рік',
            }, {
                name: 'Малювання',
                helper: 'Рідко але буває',
                desc: 'Коли є вільний час і відповідає настрій простим олівцем або гелевими ручками',
            }, {
                name: 'Танці',
                helper: 'FlashMob',
                desc: 'Якось випадково потрапив до групи, що організовувала flashmob і почалося)',
            }
        ];

    //- .container
    div
        //- Header
        page-header(title='Резюме web-розробника')

        //- Content
        #resume-content

            //- Goal
            .row-fluid.goal
                blockquote.well.text-center
                    i.icofont-quote-left
                    |  Майбутнє за програмами. Я хочу творити майбутнє 
                    i.icofont-quote-right

            //- Profile
            .row.profile
                .col-sm-6
                    h3.title-icon.pull-left
                        i(class='icofont-user')
                    .title
                        h3.border-black Про мене
                    //- .left
                .col-sm-6.col-sm-offset-0.col-xs-11.col-xs-offset-1.rightCol
                    each i in profile
                        - ;
                        .title.display-table
                            p.border-black #{i.key}
                            .pull-right !{i.val}
                    //- .rightCol
                            //- if (i === 'profile')
            
            //- Education
            .education
                h3.title-icon.pull-left
                    i.icofont-book
                .title
                    h3.border-black Освіта
                each i in education
                    - ;
                    .row-fluid
                        .span6
                            .pull-right
                                p.education-name #{i.name}
                                p.education-helper.muted.pull-right #{i.helper}
                        .span6
                            p.description.it_block
                                | !{i.desc}
                            p.description.it_block
                                | Досягнення:
                                br
                                | !{i.result}

            //- Experience
            .experience
                h3.title-icon.pull-left
                    i.icofont-briefcase
                .title
                    h3.border-black Досвід роботи
                each i in experience
                    - ;
                    .row-fluid
                        .span6
                            .pull-right
                                p.experience-name #{i.name}
                                p.experience-helper.muted.pull-right #{i.helper}
                        .span6
                            p.description.it_block
                                | !{i.desc}
                            p.description.it_block
                                | Результати:
                                br
                                | !{i.result}

            //- Skills
            .skills
                h3.title-icon.pull-left
                    i.icofont-bar-chart
                .title
                    h3.border-black Мої навики
                .row-fluid
                    .span12.offset0
                        .row-fluid
                            each skill in skills
                                -;
                                .span6
                                    each i in skill
                                        - ;
                                        .row-fluid.topLine
                                            .span3.offset1
                                                .skill-name !{i.name}
                                            .span8
                                                each s in i.lines
                                                    -;
                                                    .row-fluid.description
                                                        .span5
                                                            p #{s[0]}
                                                        .span7
                                                            - hStar =  s[1] % 1? Math.floor(s[1]): false;
                                                            each i in [0, 1, 2, 3, 4, 5, 6]
                                                                - star = '';
                                                                if (hStar === i)
                                                                    - star = '-half-empty';
                                                                else if (s[1] <= i)
                                                                    - star = '-empty';
                                                                i(class='icofont-star'+star)
                                                                |  

            //- Hobby
            .hobby
                h3.title-icon.pull-left
                    i.icofont-lightbulb
                .title
                    h3.border-black Хоббі
                each i in hobby
                    -;
                    .row
                        .col-xs-5.col-xs-offset-1 
                            div(style='max-width: 230px')
                                p.hobby-name !{i.name}
                                p.hobby-helper.muted.pull-left !{i.helper}
                        .col-sm-6
                            p.description !{i.desc}
</template>

<script>

    export default {
        data() {
            return {
                title: 'Резюме web-розробника',
                // TODO: modify + delete
                user: {},
                total: 0,
                hobby: 0,
                users: [],
                registrations: [],
            }
        },
        methods: {
            getOld(date='1992/02/29') {
                // return Math.floor((new Date() - new Date(date)) / (1000*60*60*24*365.25));
                return new Date(Date.now() - new Date(date)).getUTCFullYear() - 1970;
            },
        },
        created() {
            console.log(' - resume:');
        },
    }
</script>

<style lang="less" scoped>

    .profile {
        blockquote.well {
            font-size: 24px;
        }
        .rightCol {
            margin-top: 30px;
        }
        // .icofont-envelope {
        //     padding-left: 15px;
        // }
    }
    .description .span7 {
        width: 115px !important;
        float: right !important;
        display: inline-block !important;
    }
    #resume-content{
        padding: 40px;
        font-size: .9em;
        color: #3C3C3C;
        border: 1px solid #CDCDCD;
        border-bottom: none;
        background: #f1f1f1;
        background: -moz-linear-gradient(left,  #f1f1f1 0%, #ffffff 49%, #ffffff 51%, #f1f1f1 100%);
        background: -webkit-linear-gradient(left,  #f1f1f1 0%,#ffffff 49%,#ffffff 51%,#f1f1f1 100%);
        background: -o-linear-gradient(left,  #f1f1f1 0%,#ffffff 49%,#ffffff 51%,#f1f1f1 100%);
        background: -ms-linear-gradient(left,  #f1f1f1 0%,#ffffff 49%,#ffffff 51%,#f1f1f1 100%);
        background: linear-gradient(to right,  #f1f1f1 0%,#ffffff 49%,#ffffff 51%,#f1f1f1 100%);
    }

    .title {
        border-bottom-color:#CDCDCD;
        border-bottom-style:double;
        border-bottom-width:3px;
        margin-bottom:10px;        

        h1, h2, h3, h4, h5, h6,  p {
            border-bottom-style:solid !important;
            border-bottom-width:5px !important;
            display:inline-block !important;
            margin-bottom:-4px !important;
            margin-left:0 !important;
            margin-right:15px !important;
            padding:0 10px 10px 0 !important;
        }
        .display-table {
            p {
                width: 100px;
            }
            span {
                margin-left: 0px;
            }
        }
    }

    .title-icon {
        margin-right: 10px;
    }

    .education-name, 
    .experience-name, 
    .hobby-name, 
    .skill-name {
        margin: 0px;
        font-size: 1.2em;
        color: black;
    }

    .education-helper, 
    .experience-helper, 
    .hobby-helper, 
    .skill-helper {
        margin: 0px;
    }

    .description{
        font-size: .9em;
    }

    .grd-black{
        background: #444444;
        background: -moz-linear-gradient(top,  #444444 0%, #222222 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#444444), color-stop(100%,#222222));
        background: -webkit-linear-gradient(top,  #444444 0%,#222222 100%);
        background: -o-linear-gradient(top,  #444444 0%,#222222 100%);
        background: -ms-linear-gradient(top,  #444444 0%,#222222 100%);
        background: linear-gradient(to bottom,  #444444 0%,#222222 100%);
        border: 1px solid #444444;
    }

    .border-black{
        border:#3C3C3C !important;
    }

    .display-table{
        display: table;
    }
      
    .skills .span6 .topLine:not(:first-child) {
        border-top: 1px solid silver;
    }
      
    .it_block {
        float: left;
        width: 70%;
    }
      
    .it_block:last-child {
        width: 30%;
        padding-left: 5px;
        text-indent: 3%;
        border-left: 3px double #cdcdcd;
    }
    .skills small {
        font-size: 11px;
        text-indent: 10px;
        display: block;
    }
    .muted {
        color: #999999;
    }
</style>
