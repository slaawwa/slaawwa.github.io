
<template lang="pug">
    //- Header
    #resume-head.grd-black
        .row
            .col-sm-5.col-md-4
                h1(v-html="name")
            .col-sm-5.col-md-6
                p {{title}}
            .col-sm-2
                .resume-photo
                    img(src='../img/me25.jpg')
        //- .row-fluid.hide
            .span4
                h1.text-right Кушнір В'ячеслав
            .span6
                p {{title}}
            .span2
                .resume-photo
                    img(src='../img/me25.jpg')
</template>

<script>

    export default {
        props: {
            title: String,
            name: String,
        },
    }

</script>

<style lang="less" scoped>
    #resume-head {
        color: #FFFFFF;
        padding: 5px 50px;
        .resume-photo img {
            height: auto;
            max-width: 250px;
            width: 100%;
            min-width: 78px;
            vertical-align: middle;
            border: 0;
        }
        .span6 p {
            height: 70px;
        }
        h1 {
            font-weight: normal;
            text-align: center;
        }
        p {
            text-align: center;
            font-size: 1em;
        }
        @media (min-width: 768px) {
            .resume-photo img {
                max-width: 100%;
                min-width: 115px;
            }
            h1 {
                font-size: 29px;
                padding-top: 40px;
                text-align: right;
            }
            p {
                text-align: left;
                border-left-color:#CDCDCD;
                border-left-style:double;
                border-left-width:2px;
                height: 4em;
                margin-top: 40px;
                padding-top: 2em;
                padding-left: 10px;
            }
        }
        .resume-photo{
            text-align: center;
        }
    }
    @media print {
        .col-sm-5 {
            min-width: 41.66666667% !important;
            max-width: 41.66666667% !important;
        }
        .col-sm-2 {
            min-width: 16.66666667% !important;
            max-width: 16.66666667% !important;
        }
        .col-sm-2, .col-sm-5 {
            float: left;
        }
    }
</style>
