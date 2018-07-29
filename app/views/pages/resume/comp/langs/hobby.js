
const ua = {
    title: 'Хобі',
    items: [
        {
            name: 'Біг',
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
        }, /*{
            name: 'Колекція календариків',
            helper: 'Збирав з 2000 по 2012 роки',
            desc: 'Календарики з автомобілями по одному на кожен рік',
        },*/ {
            name: 'Малювання',
            helper: 'Рідко але буває',
            desc: 'Коли є вільний час і відповідає настрій простим олівцем або гелевими ручками',
        }, {
            name: 'Танці',
            helper: 'FlashMob',
            desc: 'One by one accidentally got into the group that organized the flash mob and started)',
        }
    ],
}

export default {
    ua,
    en: Object.assign({}, ua, {
        title: 'Hobby',
        items: [
            Object.assign({}, ua.items[0], {
                name: 'Runing',
                helper: ua.items[0].helper
                    .replace('Марафон', 'Marathone')
                    .replace('км', 'km'),
                desc: 'Kyiv 8-th October 2017 <strong>3:58:20</strong> and Rotterdam 8-th April 2018 <strong>3:23:58</strong>)',
            }),
            Object.assign({}, ua.items[1], {
                name: 'Jumping on a trampoline',
                helper: 'Set flips',
                desc: 'Jumping on a trampoline is energetic, interesting and just a positive sport)',
            }),
            Object.assign({}, ua.items[2], {
                helper: 'I\'m constantly engaged in Physical Training since the 7th grade.',
                desc: 'GYM, snowboard, swimming, tennis, roller skates, bicycle, rugby',
            }),
            Object.assign({}, ua.items[3], {
                name: 'Drawing',
                helper: 'Rarely but it happens',
                desc: 'When there is free time and appropriate mood, then draw a simple pencil or gel pens',
            }),
            Object.assign({}, ua.items[4], {
                name: 'Dancing',
                desc: 'Якось випадково потрапив до групи, що організовувала flashmob і почалося)',
            }),
        ],
    }),
}
