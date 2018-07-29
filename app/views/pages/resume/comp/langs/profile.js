
const howOld = ((date='1992/02/29') => {
    // return Math.floor((new Date() - new Date(date)) / (1000*60*60*24*365.25));
    return new Date(Date.now() - new Date(date)).getUTCFullYear() - 1970;
})()


const ua = {
    title: 'Про мене',
    items: [
        {
            key: 'П.І.П.',
            val: 'Кушнір В&apos;ячеслав Володимирович'
        }, {
            key: 'Вік',
            val: `${ howOld } (29 лютого 1992)`
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
}

export default {
    ua,
    en: Object.assign({}, ua, {
        title: 'About me',
        items: [
            {
                key: 'Full Name',
                val: 'Viacheslav Kushnir'
            }, {
                key: 'Age',
                // val: '{{ getOld() }} (February 29, 1992)'
                val: `${ howOld } (February 29, 1992)`
            }, {
                key: 'Nationality',
                val: 'Ukrainian'
            }, {
                key: 'Marital status',
                val: 'Unmarried'
            }, {
                key: 'Address',
                val: 'Kyiv, str. Akademika Yangel, 7th'
            }, {
                key: 'Phone',
                val: ua.items[ ua.items.length - 2 ].val,
            }, {
                key: 'Email',
                val: ua.items[ ua.items.length - 1 ].val,
            },
        ],
    }),
}
