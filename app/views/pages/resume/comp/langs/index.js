
import profile from './profile'
import education from './education'
import experience from './experience'
import skills from './skills'
import hobby from './hobby'
import _const from './const'

const header = {
    ua: {
        name: 'Кушнір В\'ячеслав',
        title: 'Резюме web-розробника',
    },
    en: {
        name: 'Viacheslav Kushnir',
        title: 'CV Web-craftsman',
    },
}

export {header}
export {_const}

export default {
    const: _const,
    header,
    goal: {
        ua: {
            title: 'Майбутнє за програмами. Я хочу творити майбутнє',
        },
        en: {
            title: 'Future is programs. I want to create this future',
        },
    },
    profile,
    education,
    experience,
    skills,
    hobby,
}
