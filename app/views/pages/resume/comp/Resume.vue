
<template lang="pug">

    //- - var blocks = ['profile', 'education', 'experience', 'skills', 'hobby'];

    //- .container
    div
        //- Header
        page-header(:name="curLang.header.name", :title="curLang.header.title")

        //- Content
        #resume-content

            //- Goal
            page-goal(:title="curLang.goal.title")

            //- Profile
            page-profile(:lang="curLang.profile", icon="user")
            //- include ResumeProfile

            //- Education
            page-list(:lang="curLang.education", icon='book')
            //- include ResumeEducation

            //- Experience
            page-list(:lang="curLang.experience", icon='briefcase')
            //- include ResumeExperience
            
            //- Skills
            page-skills(:lang="curLang.skills", icon='bar-chart')
            //- include ResumeSkills

            //- Hobby
            page-hobby(:lang="curLang.hobby", icon='lightbulb')
            //- include ResumeHobby
</template>

<script>

    import langs from './langs'

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
                curLang: {},
            }
        },
        methods: {
            getOld(date='1992/02/29') {
                // return Math.floor((new Date() - new Date(date)) / (1000*60*60*24*365.25));
                return new Date(Date.now() - new Date(date)).getUTCFullYear() - 1970;
            },
        },
        watch: {
            '$root.lang': {
                immediate: true,
                handler(to) {
                    let curLang = {}
                    const constLang = Object.assign({}, langs.const[to])
                    for (let i in langs) {
                        curLang[i] = Object.assign({}, constLang, langs[i][to])
                        curLang[i].const = constLang
                    }
                    this.curLang = curLang
                },
            },
        },
        created() {
            console.log(' - resume:');
        },
    }
</script>

<style lang="less" scoped0>

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

    .hobby-name, 
    .skill-name {
        margin: 0px;
        font-size: 1.2em;
        color: black;
    }

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
