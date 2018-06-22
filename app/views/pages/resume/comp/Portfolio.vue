
<template lang="pug">
    div
        //- Header
        page-header(:title='title')

        //- Content
        #resume-content
            - 
                def_img = '_default/thumb_4.png';

                pList = [
                    // SB admin 
                    {
                        name: 'Admin SwagBugcks',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'sb_admin/thumb_0.jpg',
                            ],
                            full: [
                                'sb_admin/0.jpg',
                                'sb_admin/1.jpg',
                                'sb_admin/2.jpg',
                                'sb_admin/3.jpg',
                                'sb_admin/4.jpg',
                            ],
                        },
                        des: 'Найбільший, найважчий і наймерційніший проект. В той же час цей проект найдовший і найповніший в моєму портфоліо над його роботою пройшло більше року. Замовник "туманно" знав, що хоче і обмежував технології, оскільки проекту +/-10 років. Тому <b>Webpack</b> + <b>handlebars</b> + <b>jQuery</b> + <b>Bootstrap3</b> інтегрувалися з існуючію системою на <b>java</b>/<b>jsp</b>. Також потужна рообота в команді + <b>jira</b>',
                        status: 'В процесі',
                        date: '2018-06-21',
                    },
                    // CryptoSpace
                    {
                        name: 'CryptoSpace + telegram Bot',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'crypto_space/thumb_0.jpg',
                            ],
                            full: [
                                'crypto_space/0.jpg',
                                'crypto_space/1.jpg',
                                'crypto_space/2.jpg',
                            ],
                        },
                        des: 'CryptoSpace це система управління для <b>бот</b>ів, що можуть управляти telegram каналами. <b>Webpack</b> + <b>VueJS</b> + <b>Bootstrap3</b>, а також <b>NodeJS</b> + <b>herroku</b> + <b>MongoDB</b>. Освіжив досвід використання сокетів)',
                        status: 'В замовника',
                        date: '2018-04-15',
                    },
                    // BW Testing
                    {
                        name: 'BW Testing',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'bw/thumb_0.jpg',
                            ],
                            full: [
                                'bw/0.jpg',
                                'bw/1.jpg',
                                'bw/2.jpg',
                                'bw/3.jpg',
                                'bw/4.jpg',
                            ],
                        },
                        des: 'Одній військовій організації знадобився софт, для тестування військових: <b>Webpack</b> + <b>Pug</b> + <b>VueJS</b> + <b>Vuetify</b>, а також <b>PHP</b> + <b>MySQLite</b> реалізували їх вимоги!',
                        status: 'В замовника',
                        date: '2018-03-15',
                    },
                    // Login Robot
                    {
                        name: 'Login Robot',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'login_robot/thumb_0.jpg',
                            ],
                            full: [
                                'login_robot/0.jpg',
                                'login_robot/1.jpg',
                                'login_robot/2.jpg',
                            ],
                        },
                        des: 'Login Robot - на хвилі кріпто хайпу зіткнувся з не зручністю використання двухфактурної аутентифікації і прийшла ідея зробити захищений <b>Chrome Extension</b> + telegram <b>Bot</b>. Колись допілю його для мультиюзерності і викладу в стор) <b>VueJS</b> + <b>Bootstrap3</b>',
                        status: 'Працює в особистому софті',
                        date: '2018-02-12',
                    },
                    // NotiBot
                    {
                        name: 'NotiBot',
                        link: 'https://t.me/k2dNoti_bot',
                        show: true,
                        img: {
                            thumb: [
                                'noti_bot/thumb_0.jpg',
                            ],
                            full: [
                                'noti_bot/0.jpg',
                                'noti_bot/1.jpg',
                                'noti_bot/2.jpg',
                            ],
                        },
                        des: 'Після першого успішного написання <a href="https://github.com/slaawwa/notification-booking.uz.gov.ua" target="_blank">скріпта</a>, що перевіряв наявність квитків на booking.uz.gov.ua та інформує на емейл. З\'явилися бажаючі, щоб ця система працювала через телеграм. От і озброївшись api telegram за допомгою <b>nodeJS</b> та <b>herroku</b> сервера реалізував <b>бот</b>а + <b>mongodb</b>',
                        status: 'Працює',
                        date: '2017-11-17',
                    },
                    // 42.kpi.wtf
                    {
                        name: '42.kpi.wtf',
                        link: 'http://42.kpi.wtf/#=ProgForce',
                        show: true,
                        img: {
                            thumb: ['42_kpi_wtf/thumb_0.jpg'],
                            full: [
                                '42_kpi_wtf/0.jpg',
                                '42_kpi_wtf/1.jpg',
                            ],
                        },
                        des: 'Після першого марафону організатори скинули pdf файл з результатмии! Звісно, я був в шоці. І зробив цю сторінку. <b>Webpack</b> + <b>Pug</b> + <b>jQuery</b> + <b>DataTable</b> + <b>Less</b>',
                        status: 'Працює',
                        date: '2017-10-08',
                    },
                    // GGS - gulp-git-sftp
                    {
                        name: 'Gulp-git-sftp',
                        link: 'https://www.npmjs.com/package/gulp-git-sftp',
                        show: true,
                        img: {thumb: ['ggs/thumb_0.jpg'], full: []},
                        des: 'Мій перший пакет на <b>npm</b> це круто. Цей пакет з\'явився в наслідок моїх специфічних дій з файлами і необхідністю їх деплоїти на сервер до якого є доступ по ftp/sftp',
                        status: 'Beta',
                        date: '2017-06-18',
                    },
                    // ES
                    {
                        name: 'Expansync / QBAttacher / Attacher',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'attacher/thumb_0.jpg',
                            ],
                            full: [
                                'attacher/0.jpg',
                                'attacher/1.jpg',
                            ],
                        },
                        des: 'Сайт, що допомагає та розширює функціонал одного відомого закордонного сервісу QuickBook. Замовник змінював назву проекту декілька разів. Технології: <b>python</b>/<b>django</b>, <b>AngularJS</b>, <b>gulp</b>. Був задіяний не тільки в UI, але і у бек-розробці',
                        status: 'В замовника',
                        date: '2017-05-01',
                    },
                    // DIY
                    {
                        name: 'Prodege Ondemand',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'diy/thumb_0.jpg',
                            ],
                            full: [
                                'diy/0.jpg',
                                'diy/1.jpg',
                                'diy/2.jpg',
                                'diy/3.jpg',
                                'diy/4.jpg',
                                'diy/5.jpg',
                                'diy/6.jpg',
                            ],
                        },
                        des: 'Сайт Адмінка для внутрішнього використання. Клієнти можуть управляти проектами власними клієнтами оплатами тощо. Вивчив та побудував гнучку структуру на шаблонізаторі <b>handlebars</b> за допомогою <b>gulp</b>.',
                        status: 'В замовника',
                        date: '2016-11-08',
                    },
                    // Karma.bio
                    {
                        name: 'Karma project',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'karma/thumb_0.jpg',
                            ],
                            full: [
                                'karma/0.jpg',
                            ],
                        },
                        des: 'Перший проект на node.js (<b>hapi</b>, <b>mongodb</b>, <b>jade</b>). Проект-стартап, що одобрений інвестором з Каліфорнії. В команді я, Android, iOS розробники та дизанер. To be continue...',
                        status: 'В процесі',
                        date: '2016-07-01',
                    }, 
                    // JQuery.time.js
                    {
                        name: 'JQuery.time.js',
                        link: 'https://github.com/slaawwa/jquery.time',
                        show: true,
                        img: {
                            thumb: [
                                'jquery_time/thumb_0.jpg',
                            ],
                            full: [
                                'jquery_time/0.jpg',
                            ],
                        },
                        des: 'Мій перший plugin під JQuery. Плагін був створений в рамках проекту LiveRaise.',
                        status: 'Aрхів',
                        date: '2016-06-22',
                    }, 
                    // LiveRaise
                    {
                        name: 'LiveRaise',
                        link: 'https://www.liveraise.com',
                        show: true,
                        img: {
                            thumb: [
                                'liveraise/thumb_0.jpg',
                            ],
                            full: [
                                'liveraise/0.jpg',
                                'liveraise/1.jpg',
                                'liveraise/2.jpg',
                                'liveraise/3.jpg',
                            ],
                        },
                        des: 'Проект front якого писався мною з самого початку (JSP, JQuery, gulp, flowplayer, jwplayer, wePay, stripe). Проект дуже великий і складний - онлайн стрім з мобільних пристроїв.',
                        status: 'Працює',
                        date: '2016-02-15',
                    }, 
                    // TrueFun
                    {
                        name: 'TrueFun',
                        link: 'http://truefun.com.ua/',
                        show: true,
                        img: {
                            thumb: [
                                'truefun/thumb_0.jpg',
                            ],
                            full: [
                                'truefun/0.jpg',
                                'truefun/1.jpg',
                                'truefun/2.jpg',
                                'truefun/3.jpg',
                            ],
                        },
                        des: 'Проект Микити Самардака, мого хорошого друга ідеї якого підкорюють світ. А я писав front під його .Net систему. Це онлайн гра-колн agar-а.',
                        status: 'Працює',
                        date: '2016-03-01',
                    }, 
                    // SwagBucks
                    {
                        name: 'SwagBucks',
                        link: 'http://swagbucks.com',
                        show: true,
                        img: {
                            thumb: [
                                'swagbucks/thumb_0.jpg',
                            ],
                            full: [
                                'swagbucks/0.jpg',
                                'swagbucks/1.jpg',
                                'swagbucks/2.jpg',
                            ],
                        },
                        des: 'Перший проект на роботі в Progforce. Про цей проект можна говорити вічно. Йому вже близько 10 років, написаний на Java, працює лише для америки і щоб зайти потрібен tor браузер, база даних MySQL (тестова 10Гб). Моя робта полігала в модернізації Front-а.',
                        status: 'Працює',
                        date: '2015-10-25',
                    }, 
                    // Kpi2Day.com
                    {
                        name: 'Kpi2Day.com',
                        link: 'http://kpi2day.com',
                        show: true,
                        img: {
                            thumb: [
                                'kpi2day/thumb_0.jpg',
                            ],
                            full: [
                                'kpi2day/0.jpg',
                                'kpi2day/1.jpg',
                                'kpi2day/2.jpg',
                                'kpi2day/3.jpg',
                                'kpi2day/4.jpg',
                                'kpi2day/5.jpg',
                            ],
                        },
                        des: 'Спочатку цей проект було задумано, як сайт для відображення стану ключів у гуртожитку, але згодом він обріс функціоналом і змінив своє основне призначення. Написано на Yii2, SQLite, JQuery та збирачем проектів gulp-ом. Також до сайту було написано chrome-розширення kpi2day+.',
                        status: 'Працює',
                        date: '2015-10-01',
                    }, 
                    // GreenOX.biz
                    {
                        name: 'GreenOX.biz',
                        link: 'http://greenox.biz',
                        show: true,
                        img: {
                            thumb: [
                                'greenox/thumb_0.jpg',
                            ],
                            full: [
                                'greenox/0.jpg',
                                'greenox/1.jpg',
                                'greenox/2.jpg',
                                'greenox/3.jpg',
                            ],
                        },
                        des: 'Сайт візитка, що був успішно задезайнений/спроектований та запущений. Додатково створено адмінку з CKEditor-ом та можливістю редагувати мультимовний контент.',
                        status: 'Сайт в розпорядженні власника',
                        date: '2015-09-15',
                    }, 
                    // Eko-best
                    {
                        name: 'Eko-best',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'eko_best/thumb_0.jpg',
                            ],
                            full: [
                                'eko_best/0.jpg',
                                'eko_best/1.jpg',
                                'eko_best/2.jpg',
                                'eko_best/3.jpg',
                                'eko_best/4.jpg',
                                'eko_best/5.jpg',
                            ],
                        },
                        des: 'Прийшов час писати диплом бакалавра і я написав мобільного додаток на Android. Перший досвід роботи з Java (Android Studio). Додаток завантажує інформацію з інтернету та random-но видає 16 питань для тесту і підвищеє, або понижує рейтинг користувача. Диплом захищено на відмінно.',
                        status: 'Наразі проекти заморожено',
                        date: '2015-04-01',
                    }, 
                    // Go2Url.TK
                    {
                        name: 'Go2Url.TK',
                        link: 'http://go2url.tk',
                        show: true,
                        img: {
                            thumb: [
                                'go2url/thumb_0.jpg',
                            ],
                            full: [
                                'go2url/0.jpg',
                                'go2url/1.jpg',
                            ],
                        },
                        des: 'Користуючись сервісами tr.im та sn.im мені не сподобалося, що ні один з них не може вдовольнити мої потреби, тому я написав свій сервіс посилань.',
                        status: 'Працює в особистому SOFTi',
                        date: '2015-03-01',
                    }, 
                    // On-duty.xyz & nails
                    {
                        name: 'On-duty.xyz & nails',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'on_duty/thumb_0.jpg',
                            ],
                            full: [
                                'on_duty/0.jpg',
                                'on_duty/1.jpg',
                                'on_duty/2.jpg',
                                'on_duty/3.jpg',
                                'on_duty/4.jpg',
                            ],
                        },
                        des: 'Два різні сайти для знайомих, але з схожим функціоналом, що базувався на календарі. Проекти були написані на чистому PHP, в наслідок чого було спроектовано невеличкий bakcend-framework, а також покрщило мої вміння по роботі з fullCalendar.js.',
                        status: 'Наразі проекти заморожено',
                        date: '2015-02-01',
                    }, 
                    // Drumpark
                    {
                        name: 'Drumpark',
                        link: 'http://drumpark.by',
                        show: true,
                        img: {
                            thumb: [
                                'drumpark/thumb_0.jpg',
                            ],
                            full: [
                                'drumpark/0.jpg',
                                'drumpark/1.jpg',
                                'drumpark/2.jpg',
                                'drumpark/3.jpg',
                            ],
                        },
                        des: 'Наступна спроба інтернет магазину для білоруського барабанного музиканта. У проекті брали участь дуже багато людей, але я займався інтеграцією Front-а з Jooml-ою.',
                        status: 'Сайт в розпорядженні власника',
                        date: '2015-01-01',
                    }, 
                    // VK-Face.com
                    {
                        name: 'VK-Face.com',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'vk_face/thumb_0.png',
                                'vk_face/thumb_0.jpg',
                            ],
                            full: [
                                'vk_face/0.jpg',
                                'vk_face/1.jpg',
                            ],
                        },
                        des: 'Моя ідея створити сайт, що буде надавати об`єкивну інформацію про людей. Проект був презентований на Sikorsky Challenge і отримав сертифікат від КПІ.',
                        status: 'Наразі проект заморожено',
                        date: '2014-12-01',
                    }, 
                    // QuotesKpi
                    {
                        name: 'QuotesKpi',
                        link: 'https://vk.com/quoteskpi',
                        show: true,
                        img: {
                            thumb: [
                                'quotes/thumb_0.jpg',
                            ],
                            full: [
                                'quotes/0.jpg',
                                'quotes/1.jpg',
                                'quotes/2.jpg',
                                'quotes/3.jpg',
                            ],
                        },
                        des: 'Моя ідея створити сайт, що буде публікувати цитати. І він вилився у групу вконтакті.',
                        status: 'Працює в особистому SOFTi',
                        date: '2014-11-01',
                    }, 
                    // 7Progress
                    {
                        name: '7Progress',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                '7progress/thumb_0.jpg',
                            ],
                            full: [
                                '7progress/0.jpg',
                                '7progress/1.jpg',
                                '7progress/2.jpg',
                                '7progress/3.jpg',
                            ],
                        },
                        des: 'Моя ідея організувати групу активних 7-ми людей, що будуть вдосконалювати свої ораторські здібності. А відповідно потрібен був сайт, що зможе все це організувати та об`єднати в одному місці. Написано на Yii2 з БД MySQL повністю мною.',
                        status: 'Наразі проект заморожено',
                        date: '2014-09-01',
                    }, 
                    // GameOfTiles
                    {
                        name: 'GameOfTiles',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'game_of_tiles/thumb_0.jpg',
                            ],
                            full: [
                                'game_of_tiles/0.jpg',
                            ],
                        },
                        des: 'Сайт "адмінка" на Django. Ще один крутий та важливий skill - це робота з модулем адмінки в Django.',
                        status: 'Наразі проект заморожено',
                        date: '2014-06-01',
                    }, 
                    // Game&MovieQuiz
                    {
                        name: 'Game&MovieQuiz',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'quiz/thumb_0.jpg',
                            ],
                            full: [
                                'quiz/0.jpg',
                                'quiz/1.jpg',
                                'quiz/2.jpg',
                                'quiz/3.jpg',
                                'quiz/4.jpg',
                                'quiz/5.jpg',
                            ],
                        },
                        des: 'Сайти-тести для користувачів facebook, щоб набрати базу користувачів для NotiSend.',
                        status: 'Наразі проект заморожено',
                        date: '2014-04-01',
                    }, 
                    // SexyGame
                    {
                        name: 'SexyGame',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'sexy_game/thumb_0.jpg',
                            ],
                            full: [
                                'sexy_game/0.jpg',
                                'sexy_game/1.jpg',
                            ],
                        },
                        des: 'Сайт на Django. Черговий проект-гра на роботі в go-games.org, що створювався для користувачів facebook та мав приховані "брудні" цілі)',
                        status: 'Наразі проект заморожено',
                        date: '2014-01-01',
                    }, 
                    // NotiSend
                    {
                        name: 'NotiSend',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'notisend/thumb_0.jpg',
                            ],
                            full: [
                                'notisend/0.jpg',
                                'notisend/1.jpg',
                                'notisend/2.jpg',
                                'notisend/3.jpg',
                                'notisend/4.jpg',
                            ],
                        },
                        des: 'Сайт на Django. Перший проект на роботі в go-games.org, що створювався для закордонних клієнтів які мають ігри у facebook і хочуть зручно та ефективно керувати нотифікаціями для користувачів facebook.',
                        status: 'Наразі проект заморожено',
                        date: '2013-11-01',
                    }, 
                    // Alex-kot
                    {
                        name: 'Alex-kot',
                        link: 'http://l-kot.com',
                        show: true,
                        img: {
                            thumb: [
                                'alex_kot/thumb_0.jpg',
                            ],
                            full: [
                                'alex_kot/0.jpg',
                                'alex_kot/1.jpg',
                            ],
                        },
                        des: 'Мій перший інтернет магазин на Yii2. Де всі модулі були написані власноруч.',
                        status: 'Сайт в розпорядженні власника',
                        date: '2013-08-01',
                    }, 
                    // WebCraftsman
                    {
                        name: 'WebCraftsman',
                        link: 'http://go2url.tk/web',
                        show: true,
                        img: {
                            thumb: [
                                'webcraftsman/thumb_0.png',
                            ],
                            full: [
                                'webcraftsman/0.jpg',
                                'webcraftsman/1.jpg',
                                'webcraftsman/2.jpg',
                                'webcraftsman/3.jpg',
                            ],
                        },
                        des: 'Сайт візитка з покращеним дизайном можливо перенесу туди резюме та портфоліо)',
                        status: 'Працює, але застарів',
                        date: '2013-06-01',
                    }, 
                    // FindIt
                    {
                        name: 'FindIt.in.ua',
                        link: 'http://findit.in.ua/home',
                        show: true,
                        img: {
                            thumb: [
                                'findit/thumb_0.png',
                            ],
                            full: [
                                'findit/0.png',
                            ],
                        },
                        des: 'Кльовний проект, ідея Проценка Тараса Леонідовича. Реалізація HTML, CSS, PHP, а також робота скріпта з MySQL була на 95% зроблена мною.',
                        status: 'Проект заморожено',
                        date: '2013-03-01',
                    }, 
                    // IrinaDrugakova
                    {
                        name: 'IrinaDrugakova.tk',
                        link: 'http://irinadrugakova.tk',
                        show: true,
                        img: {
                            thumb: [
                                'irinadrugakova/thumb_0.png',
                                'irinadrugakova/thumb_1.png',
                                'irinadrugakova/thumb_2.png',
                                'irinadrugakova/thumb_3.png',
                            ],
                            full: [
                                'irinadrugakova/0.png',
                                'irinadrugakova/1.png',
                                'irinadrugakova/2.png',
                                'irinadrugakova/3.png',
                            ],
                        },
                        des: 'Шикарний сайт, ідея мого знайомого Мишка Другакова. Сайт подарунок до дня народження його матусі Ірини Другакової, що має косметичний салон. Робота над HTML, CSS, PHP, JQuery була повністю моєю.',
                        status: 'До сайту готується контент',
                        date: '2013-02-25',
                    }, 
                    // TFN
                    {
                        name: 'TFN', // ToeFuck.net
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'tfn/thumb_0.png',
                                'tfn/thumb_1.png',
                                'tfn/thumb_2.png',
                                'tfn/thumb_3.png',
                            ],
                            full: [
                                'tfn/0.png',
                                'tfn/1.png',
                                'tfn/2.png',
                                'tfn/3.png',
                        ],
                        },
                        des: 'Крутий сайт, моя ідея. Реалізований локально для роботи над одним предметом в університеті (1000 варіантів). HTML, CSS, PHP, а також робота скріпта з MySQL була зроблена мною.',
                        status: 'Наразі проект в стані допрацювання',
                        date: '2012-12-15',
                    }, 
                    // PasteTrack
                    {
                        name: 'PasteTrack',
                        link: 'http://pastetrack.com',
                        show: true,
                        img: {
                            thumb: [
                                // 'pastetrack/thumb_0.png',
                            ],
                            full: [
                                // 'pastetrack/0.png',
                            ],
                        },
                        des: 'Ідея Порєва Генадія Володимировича, полягала в тому, щоб сайт завантажував файл з GPS і видава маршрут накладений на карту Google, а також Yandex. Восновному я розбирався з Google API та SVN, а також відстанями, широти, довготи тощо.',
                        status: 'Сайт в розпорядженні власника',
                        date: '2012-10-03',
                    }, 
                    // SecurityPass
                    {
                        name: 'SecurityPass',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'securitypass/thumb_0.png',
                                'securitypass/thumb_1.png',
                                'securitypass/thumb_2.png',
                                'securitypass/thumb_3.png',
                            ],
                            full: [
                                'securitypass/0.png',
                                'securitypass/1.png',
                                'securitypass/2.png',
                                'securitypass/3.png',
                            ],
                        },
                        des: 'Дуже компактна програма, що завжди висить у мене в фоновому режимі. Програма працює з паролями версія 2 (Перша була на delphi). Оскільки в мене маса різних складних паролів, я зробив програму, що кодує і зберігає їх. Програма написана на С++.',
                        status: 'Працює в особистому SOFTi',
                        date: '2012-06-07',
                    }, 
                    // Weeker
                    {
                        name: 'Weeker',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'weeker/thumb_0.png',
                                'weeker/thumb_1.png',
                                'weeker/thumb_2.png',
                                'weeker/thumb_3.png',
                            ],
                            full: [
                                'weeker/0.png',
                                'weeker/1.png',
                                'weeker/2.png',
                                'weeker/3.png',
                            ],
                        },
                        des: 'Програма, що була створена мною по тій причині, що я думав вона потрібна, як повітря. Написана на delphi (3 000 рядків коду ±). До сих пір допомагає мені під час навчання.',
                        status: 'Працює в особистому SOFTi',
                        date: '2011-11-27',
                    }, 
                    // Ecodomes.info
                    {
                        name: 'Ecodomes.info',
                        link: 'http://www.ecodomes.info/',
                        show: true,
                        img: {
                            thumb: [
                                'ecodomes/thumb_0.png',
                                'ecodomes/thumb_1.png',
                                'ecodomes/thumb_2.png',
                                'ecodomes/thumb_3.png',
                                'ecodomes/thumb_4.png',
                            ],
                            full: [
                                'ecodomes/0.png',
                                'ecodomes/1.png',
                                'ecodomes/2.png',
                                'ecodomes/3.png',
                                'ecodomes/4.png',
                            ],
                      },
                      des: 'Ще одна робота на Joomla. Робота в uWorld. Установка шаблонів, модулів, а також наповнення контенту. Компания «Ecodomes.info» займається естетичним оформленням автомобілів, зокрема наклейками та емблемами.',
                      status: 'Наразі сайт в замовників',
                      date: '2011-08-20',
                    }, 
                    // Torgdom.com.ua
                    {
                        name: 'ТОВ «Цибко»',
                        link: 'http://torgdom.com.ua/',
                        show: true,
                        img: {
                            thumb: [
                                'torgdom/thumb_0.png',
                                'torgdom/thumb_1.png',
                                'torgdom/thumb_2.png',
                                'torgdom/thumb_3.png',
                            ],
                            full: [
                                'torgdom/0.png',
                                'torgdom/1.png',
                                'torgdom/2.png',
                                'torgdom/3.png',
                            ],
                        },
                        des: 'Перша робота пов&apos;язана з Joomla. Робота в uWorld. Установка шаблонів, модулів, lightbox тощо. Роботу виконано в команді.',
                        status: 'Наразі сайт в замовників',
                        date: '2011-08-11',
                    }, 
                    // Forum_Glory
                    {
                        name: 'Форум Слави',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'forum_glory/thumb_0.png',
                                'forum_glory/thumb_1.png',
                                'forum_glory/thumb_2.png',
                                'forum_glory/thumb_3.png',
                                'forum_glory/thumb_4.png',
                            ],
                            full: [
                                'forum_glory/0.png',
                                'forum_glory/1.png',
                                'forum_glory/2.png',
                                'forum_glory/3.png',
                                'forum_glory/4.png',
                            ],
                        },
                        des: 'Перша робота пов&apos;язана з MySQL, PHP та JavaScript (JQuery). Завдання доручено в якості перевірки моїх вмінь, при вступі на роботу в uWorld. Дизайн, HTML, PHP, MySQL, JavaScript зроблено мною.',
                        status: 'Наразі проект в архіві',
                        date: '2011-06-29',
                    }, 
                    // DB_stht
                    {
                        name: 'DB СТХТ',
                        link: '',
                        show: true,
                        img: {
                            thumb: [
                                'bdstht/thumb_0.png',
                                'bdstht/thumb_1.png',
                                'bdstht/thumb_2.png',
                                'bdstht/thumb_3.png',
                                'bdstht/thumb_4.png',
                                'bdstht/thumb_5.png',
                            ],
                            full: [
                                'bdstht/0.png',
                                'bdstht/1.png',
                                'bdstht/2.png',
                                'bdstht/3.png',
                                'bdstht/4.png',
                                'bdstht/5.png',
                            ],
                        },
                        des: 'Перша робота пов&apos;язана з MySQL та PHP. Завдання було доручено Заїченком Миколою Григоровичем, на практиці 3 курсу. Зробити Базу Даних всіх студентів, батьків, класних керівників разом з прив&apos;язками один до одного відповідно. Дизайн, HTML, PHP, MySQL маже вся робота була на мені.',
                        status: 'Наразі проект працює в мережі СТХТ НУХТ',
                        date: '2011-05-05',
                    },
                ];
            //- TODO: Modify this logic and delete this shit!
            textarea.hide !{JSON.stringify(pList)}
            each i, index in pList
                -;
                .gal-item
                    a.image(href=i.link, @click.prevent="workClick("+index+")", :class="{active_site: "+index+" === index}")
                        - img = i.show && i.img.thumb.length? i.img.thumb[0]: def_img;
                        //- p img: #{img}
                        img(src="../img/portfolio/"+img, alt=i.name)
                    .text #{i.name}
        #it_content(data-empty='Оберіть роботу для перегляду')
            //- h2 
            div(v-if="selectWork !== -1")

                h2.text-center
                    | {{selectWork.name}}
                    button.close(
                            type='button'
                            data-dismiss='alert'
                            aria-label='Close'
                            @click='clearWork'
                        )
                        span &times;

                .imgWrap.text-center(:class="{manyImg: selectWork.img.full.length > 1}")
                    button#btnImg.btn.btn-default.btn-sm(
                            type='button'
                            @click="nextImg(-1)"
                        ) &#8672;
                        //- ) &larr;
                    img(
                        :src="'/img/portfolio/'+(selectWork.img.full.length? selectWork.img.full[imgIndex]: '_default/4.png')"
                        @click="nextImg()"
                    )
                    button#btnImg.btn.btn-default.btn-sm(
                            type='button'
                            @click="nextImg()"
                        ) &#8674;
                        //- ) &rarr;

                h3
                    | {{selectWork.date}}
                    span.status_site {{selectWork.status}}

                p.des(v-html="selectWork.des")


                a(v-if='selectWork.link', :href='selectWork.link', target="_blank", :title="selectWork.name")
                    | Відвідати сайт →

</template>

<script>

    // import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                title: 'Портфоліо',

                selectWork: -1,
                index: -1,

                imgIndex: 0,

                pList: [],

                // TODO: Modify this logic!!!!
                user: {},
                total: 0,
                users: [],
                registrations: [],
            }
        },
        methods: {
            nextImg(inc=1) {
                const lastIndex = this.selectWork.img.full.length - 1;
                if (lastIndex > 0) {

                    let nextImg = this.imgIndex + inc;
                    if (nextImg < 0) nextImg = lastIndex;
                    nextImg = this.selectWork.img.full[nextImg]? nextImg: 0;

                    this.imgIndex = nextImg;
                }
            },
            clearWork() {
                this.selectWork = -1;
                this.index = -1;
            },
            workClick(index) {
                this.imgIndex = 0;
                this.index = index;
                this.selectWork = this.pList[index]
            },
        },
        mounted() {
            const elPList = document.querySelector('textarea.hide');
            if (elPList) {
                this.pList = JSON.parse(elPList.value);
                elPList.remove();
            }
            const itContent = document.querySelector('#it_content');
            const startTop = itContent.offsetTop;//parseInt($('#it_content').css('top'));
            // $(window).scroll(function () {
            window.onscroll = function () {
                if (itContent) {
                    let maxTop = parseInt((window.innerHeight - itContent.clientHeight)*0.3),
                        top = startTop - window.scrollY < maxTop? maxTop: startTop - window.scrollY;
                    if (top < 50) {
                        top = 50
                    } 
                    itContent.style.top = top+'px';
                }
            };
        },
        created() {
            console.log('portfolio:');
        },
    }

    // TODO: Change this shit!!!!
    import '../img/portfolio/karma/0.jpg';
    import '../img/portfolio/jquery_time/0.jpg';
    import '../img/portfolio/liveraise/0.jpg';
    import '../img/portfolio/liveraise/1.jpg';
    import '../img/portfolio/liveraise/2.jpg';
    import '../img/portfolio/liveraise/3.jpg';
    import '../img/portfolio/truefun/0.jpg';
    import '../img/portfolio/truefun/1.jpg';
    import '../img/portfolio/truefun/2.jpg';
    import '../img/portfolio/truefun/3.jpg';
    import '../img/portfolio/swagbucks/0.jpg';
    import '../img/portfolio/swagbucks/1.jpg';
    import '../img/portfolio/swagbucks/2.jpg';
    import '../img/portfolio/kpi2day/0.jpg';
    import '../img/portfolio/kpi2day/1.jpg';
    import '../img/portfolio/kpi2day/2.jpg';
    import '../img/portfolio/kpi2day/3.jpg';
    import '../img/portfolio/kpi2day/4.jpg';
    import '../img/portfolio/kpi2day/5.jpg';
    import '../img/portfolio/greenox/0.jpg';
    import '../img/portfolio/greenox/1.jpg';
    import '../img/portfolio/greenox/2.jpg';
    import '../img/portfolio/greenox/3.jpg';
    import '../img/portfolio/eko_best/0.jpg';
    import '../img/portfolio/eko_best/1.jpg';
    import '../img/portfolio/eko_best/2.jpg';
    import '../img/portfolio/eko_best/3.jpg';
    import '../img/portfolio/eko_best/4.jpg';
    import '../img/portfolio/eko_best/5.jpg';
    import '../img/portfolio/go2url/0.jpg';
    import '../img/portfolio/go2url/1.jpg';
    import '../img/portfolio/on_duty/0.jpg';
    import '../img/portfolio/on_duty/1.jpg';
    import '../img/portfolio/on_duty/2.jpg';
    import '../img/portfolio/on_duty/3.jpg';
    import '../img/portfolio/on_duty/4.jpg';
    import '../img/portfolio/drumpark/0.jpg';
    import '../img/portfolio/drumpark/1.jpg';
    import '../img/portfolio/drumpark/2.jpg';
    import '../img/portfolio/drumpark/3.jpg';
    import '../img/portfolio/vk_face/0.jpg';
    import '../img/portfolio/vk_face/1.jpg';
    import '../img/portfolio/quotes/0.jpg';
    import '../img/portfolio/quotes/1.jpg';
    import '../img/portfolio/quotes/2.jpg';
    import '../img/portfolio/quotes/3.jpg';
    import '../img/portfolio/7progress/0.jpg';
    import '../img/portfolio/7progress/1.jpg';
    import '../img/portfolio/7progress/2.jpg';
    import '../img/portfolio/7progress/3.jpg';
    import '../img/portfolio/game_of_tiles/0.jpg';
    import '../img/portfolio/quiz/0.jpg';
    import '../img/portfolio/quiz/1.jpg';
    import '../img/portfolio/quiz/2.jpg';
    import '../img/portfolio/quiz/3.jpg';
    import '../img/portfolio/quiz/4.jpg';
    import '../img/portfolio/quiz/5.jpg';
    import '../img/portfolio/sexy_game/0.jpg';
    import '../img/portfolio/sexy_game/1.jpg';
    import '../img/portfolio/notisend/0.jpg';
    import '../img/portfolio/notisend/1.jpg';
    import '../img/portfolio/notisend/2.jpg';
    import '../img/portfolio/notisend/3.jpg';
    import '../img/portfolio/notisend/4.jpg';
    import '../img/portfolio/alex_kot/0.jpg';
    import '../img/portfolio/alex_kot/1.jpg';
    import '../img/portfolio/webcraftsman/0.jpg';
    import '../img/portfolio/webcraftsman/1.jpg';
    import '../img/portfolio/webcraftsman/2.jpg';
    import '../img/portfolio/webcraftsman/3.jpg';
    import '../img/portfolio/findit/0.png';
    import '../img/portfolio/irinadrugakova/0.png';
    import '../img/portfolio/irinadrugakova/1.png';
    import '../img/portfolio/irinadrugakova/2.png';
    import '../img/portfolio/irinadrugakova/3.png';
    import '../img/portfolio/tfn/0.png';
    import '../img/portfolio/tfn/1.png';
    import '../img/portfolio/tfn/2.png';
    import '../img/portfolio/tfn/3.png';
    // import '../img/portfolio/pastetrack/0.png';
    import '../img/portfolio/securitypass/0.png';
    import '../img/portfolio/securitypass/1.png';
    import '../img/portfolio/securitypass/2.png';
    import '../img/portfolio/securitypass/3.png';
    import '../img/portfolio/weeker/0.png';
    import '../img/portfolio/weeker/1.png';
    import '../img/portfolio/weeker/2.png';
    import '../img/portfolio/weeker/3.png';
    import '../img/portfolio/ecodomes/0.png';
    import '../img/portfolio/ecodomes/1.png';
    import '../img/portfolio/ecodomes/2.png';
    import '../img/portfolio/ecodomes/3.png';
    import '../img/portfolio/ecodomes/4.png';
    import '../img/portfolio/torgdom/0.png';
    import '../img/portfolio/torgdom/1.png';
    import '../img/portfolio/torgdom/2.png';
    import '../img/portfolio/torgdom/3.png';
    import '../img/portfolio/forum_glory/0.png';
    import '../img/portfolio/forum_glory/1.png';
    import '../img/portfolio/forum_glory/2.png';
    import '../img/portfolio/forum_glory/3.png';
    import '../img/portfolio/forum_glory/4.png';
    import '../img/portfolio/bdstht/0.png';
    import '../img/portfolio/bdstht/1.png';
    import '../img/portfolio/bdstht/2.png';
    import '../img/portfolio/bdstht/3.png';
    import '../img/portfolio/bdstht/4.png';
    import '../img/portfolio/bdstht/5.png';
    import '../img/portfolio/_default/4.png';
    import '../img/portfolio/_default/thumb_4.png';

    import '../img/portfolio/diy/thumb_0.jpg';
    import '../img/portfolio/diy/0.jpg';
    import '../img/portfolio/diy/1.jpg';
    import '../img/portfolio/diy/2.jpg';
    import '../img/portfolio/diy/3.jpg';
    import '../img/portfolio/diy/4.jpg';
    import '../img/portfolio/diy/5.jpg';
    import '../img/portfolio/diy/6.jpg';

    import '../img/portfolio/attacher/thumb_0.jpg';
    import '../img/portfolio/attacher/0.jpg';
    import '../img/portfolio/attacher/1.jpg';

    import '../img/portfolio/noti_bot/thumb_0.jpg';
    import '../img/portfolio/noti_bot/0.jpg';
    import '../img/portfolio/noti_bot/1.jpg';
    import '../img/portfolio/noti_bot/2.jpg';

    import '../img/portfolio/login_robot/thumb_0.jpg';
    import '../img/portfolio/login_robot/0.jpg';
    import '../img/portfolio/login_robot/1.jpg';
    import '../img/portfolio/login_robot/2.jpg';

    import '../img/portfolio/bw/thumb_0.jpg';
    import '../img/portfolio/bw/0.jpg';
    import '../img/portfolio/bw/1.jpg';
    import '../img/portfolio/bw/2.jpg';
    import '../img/portfolio/bw/3.jpg';
    import '../img/portfolio/bw/4.jpg';

    import '../img/portfolio/crypto_space/thumb_0.jpg';
    import '../img/portfolio/crypto_space/0.jpg';
    import '../img/portfolio/crypto_space/1.jpg';
    import '../img/portfolio/crypto_space/2.jpg';

    import '../img/portfolio/sb_admin/thumb_0.jpg';
    import '../img/portfolio/sb_admin/0.jpg';
    import '../img/portfolio/sb_admin/1.jpg';
    import '../img/portfolio/sb_admin/2.jpg';
    import '../img/portfolio/sb_admin/3.jpg';
    import '../img/portfolio/sb_admin/4.jpg';

    import '../img/portfolio/42_kpi_wtf/thumb_0.jpg';
    import '../img/portfolio/42_kpi_wtf/0.jpg';
    import '../img/portfolio/42_kpi_wtf/1.jpg';

</script>

<style lang="less" scoped>
    #resume-content{
        padding: 40px;
        padding-top: 0px;
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
    
    .gal-item {
        width:300px; 
        margin:30px 20px 0 0; 
        /*float:left;*/
        color: black;
        a.image {
            width:298px; 
            height:198px; 
            border:1px solid #333; 
            background:#222; 
            display:inline-block; 
            transition:border 0.2s, 
            box-shadow 0.2s, 
            border-radius 0.2s; 
            -webkit-transition:border 0.2s, 
            -webkit-box-shadow 0.2s, 
            -webkit-border-radius 0.2s; 
            -moz-transition:border 0.2s, 
            -moz-box-shadow 0.2s, 
            -moz-border-radius 0.2s; 
            -o-transition:border 0.2s, 
            box-shadow 0.2s, 
            border-radius 0.2s;
        }
        a.image:hover {
            border:1px dotted #0095EB; 
            border-radius:3px; 
            -moz-border-radius:3px; 
            -webkit-border-radius:3px; 
            box-shadow:0 0 20px #0095EB; 
            -moz-box-shadow:0 0 20px #0095EB; 
            -webkit-box-shadow:0 0 20px #0095EB;
        }
        img {
            width:280px; 
            height:180px; 
            margin:9px 0 0 9px; 
            box-shadow:0 0 5px #000;
        }
        .text {
            line-height:30px;
            color:#000;
            height:40px;
        }
    }
    .gal-item-even {
        margin-right:0;
    }
    .gal-prev-image {
        margin:-245px 0 0;
    }
    .gal-prev .block-third {
        margin-top:112px;
    }
    #it_content {
        position: fixed;
        // top: 210px;
        top: 195px;
        width: 500px;
        height: 500px;
        left: 45%;
        .close {
            display: none;
        }
        .imgWrap {
            &:not(.manyImg) {
                #btnImg {
                    display: none;
                }
            }
            &.manyImg {
                img {
                    cursor: pointer;
                }
                #btnImg {
                    border-radius: 50%;
                    height: 40px;
                    font-size: 21px;
                    position: absolute;
                    margin-top: 115px;
                    margin-left: -20px;
                    outline: none;
                }
            }
            img {
                max-height: 270px;
                max-width: 100%;
            }
        }
        &:empty:before {
            display: block;
            content: ~"attr(data-empty)";
            // border-bottom: 1px solid #444444;
            // border-top: 1px solid #444444;
            font-size: 30px;
            
            margin-top: 40%;
            text-align: center;
            color: #797a8a;

            // position: fixed;
            // top: 210px;
            // width: 500px;
            // height: 500px;
            // left: 45%;
        }
    }
    @media (max-width: 992px) {
        #it_content {
            &:empty {
                width: 350px;
                left: 50%;
                /* &:before {
                    margin-top: 20px;
                } */
            }
            &:not(:empty) {
                background-color: #f3f3f3;
                left: ~"calc((100% - 675px) / 2)";
                width: 675px;
                min-height: ~"calc(100% - 74px)";
                .close {
                    display: block;
                    padding-right: 10px;
                    padding-top: 5px;
                }
            }
        }
        @media (max-width: 768px) {
            #it_content {
                &:empty {
                    display: none;
                }
                &:not(:empty) {
                    top: 50px !important;
                    padding: 0 25px;
                    left: 0px;
                    width: 100%;
                    min-height: ~"calc(100% - 74px)";
                }
            }
            #resume-content {
                padding: 0;
                .gal-item {
                    margin: auto;
                    width: 100%;
                    max-width: 500px;
                    &:first-child {
                        margin-top: 15px;
                    }
                    a.image {
                        height: initial;
                        width: 100%;
                        img {
                            margin: 9px;
                            width: ~"calc(100% - 18px)";
                            height: initial;
                        }
                    }
                }
            }
        }
    }
    .active_site {
        border:1px dotted #0095EB; 
        border-radius:3px; 
        -moz-border-radius:3px; 
        -webkit-border-radius:3px; 
        box-shadow:0 0 20px red; 
        -moz-box-shadow:0 0 20px red; 
        -webkit-box-shadow:0 0 20px red;
    }
  
    h2, h3 {
        border-bottom: 1px solid #444444;
        border-top: 1px solid #444444;
    }
    .status_site {
        min-width: 50px;
        min-height: 10px;
        font-size: 12px;
        float: right;
    }
    /* #technology {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 144px;
        height: 53px;
        background: url(../img/turbo.png);
    } */
    p.des {
        text-align: justify;
    }
</style>
