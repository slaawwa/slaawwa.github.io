
const ua = {
    title: 'Мої навики',
    items: [
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
}

const softLines = ua.items[0][0].lines
const langLines = ua.items[0][1].lines
const profSkills = ua.items[1]

export default {
    ua,
    en: Object.assign({}, ua, {
        title: 'Skills',
        items: [
            [
                Object.assign({}, ua.items[0][0], {
                    name: 'Soft',
                    lines: [
                        ['Activities', softLines[0][1]],
                        ['Creativity', softLines[1][1]],
                        ['Responsibility', softLines[2][1]],
                        ['Purposefulness', softLines[3][1]],
                        ['Physique', softLines[4][1]],
                        ['Sociable', softLines[5][1]],
                        ['Study', softLines[6][1]],
                        ['Team member', softLines[7][1]],
                    ],
                }),
                Object.assign({}, ua.items[0][1], {
                    name: 'Language',
                    lines: [
                        ['Ukrainian', langLines[0][1]],
                        ['English', langLines[1][1]],
                        ['Russian', langLines[2][1]],
                    ],
                }),
            ],
            [
                Object.assign({}, profSkills[0], {
                    name: 'Professionals<small>Base</small>',
                }),
                profSkills[1],
                profSkills[2],
                Object.assign({}, profSkills[3], {
                    name: 'Graphics',
                }),
                Object.assign({}, profSkills[4], {
                    name: 'Extra',
                }),
                Object.assign({}, profSkills[5], {
                    name: 'OS',
                }),
            ],
        ],
    }),
}
