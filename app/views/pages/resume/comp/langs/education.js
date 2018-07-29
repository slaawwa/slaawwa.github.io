
const ua = {
    title: 'Освіта',
    items: [
        {
            name: 'НТУУ "Київський політехнічний інститут"<br> імені Ігоря Сікорського',
            helper: '2011 - 2017',
            desc: 'Приладобудівний факультет<br> Кафедра "Наукових аналітичних, екологічних приладів та систем".',
            result: [
                'Грамота за 1 місце з електротехніки',
            ],
        }, {
            name: 'НУХТ "Смілянський технікум харчових технологій"',
            helper: '2007 - 2011',
            desc: 'Відділення "Автоматизованих робототехнічних систем"<br>\
              Спеціальність "Обслуговування комп&apos;ютеризованих, інтегрованих і робототехнічних систем". Може займати посади: технік комп&apos;ютеризованих систем, технік-електронік, технік-програміст, технік-системотехнік.',
            result: [
                'Червоний диплом молодшого спеціаліста',
                'Свідоцтво оператора комп\'ютерного набору (2 ступеня)',
            ],
        },
    ],
}

export default {
    ua,
    en: Object.assign({}, ua, {
        title: 'Education',
        items: [
            Object.assign({}, ua.items[0], {
                name: 'National Technical University of Ukraine<br> "Igor Sikorsky Kyiv Polytechnic Institute"',
                desc: 'Instrument-making faculty<br> Department of scientific, analytical and environmental devices and systems.',
                result: [
                    'Diploma for 1st place in Electrical Engineering Olympiad',
                ],
            }), Object.assign({}, ua.items[1], {
                name: 'Smila College of Food Technologies of<br> National University of Food Technologies',
                desc: 'Department of "Automated Robotics Systems"<br>\
                  Specialty "Serving computerized, integrated systems and robotics". May hold positions: computer technician, computerized systems, electronics technician, programmer, technician-system engineer.',
                result: [
                    'Diploma with Honors of junior specialist',
                    'Certificate of the operator of a computer set (2 degrees)',
                ],
            }),
        ],
    }),
}
