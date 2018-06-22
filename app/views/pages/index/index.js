'use strict';

import Vue from 'vue';
import $ from 'jquery';

import hello from './components/hello.vue';
// import hello from 'comp/hello.vue';

import 'app/img/bg.jpg';
import 'app/img/logo.png';

import './style.less';

console.log('process.env.NODE_ENV:', process.env.NODE_ENV);

if (isDev) {
    console.log('isDev:', isDev);
    console.log('isProd:', isProd);
}

/* ------- */

let app = new Vue({
    el: '#app',
    data: {
        contentStyle: {},
        menu: {
            current: null,
            top: {
                current: '',
                items: [],
            },
            left: {
                items: [],
                style: {
                    maxHeight: `${window.innerHeight - 142}px`,
                    width: `${document.getElementById('leftMenu').clientWidth}px`,
                    position: 'fixed',
                },
            },
        },
        content: {},
    },
    watch: {
        'menu.top.items'(newV, oldV) {
            let delta = this.menu.top.items.length? 0: 60;
            this.contentStyle = {
                height: `${window.innerHeight - 225 + delta}px`,
            }
        },
        content(content) {
            if (content.ajax && !content.html) {
                fetch(content.ajax)
                    .then(r => r.text())
                    .then(html => {
                        if (content.ajax === '/readme.html') {
                            html = html.replace(/\<a /g, '<a target="_blank" '); 
                        }
                        content.html = html;
                    });
            }
        },
    },
    methods: {
        clearSearch: query => {
            if (query.startsWith('/?')) {
                query = query.substring(2);
            } else if (query.startsWith('/') || query.startsWith('?')) {
                query = query.substring(1);
            }
            return query;
        },
        menuIsLast(index) {
            return index === (this.menu.top.items.length-1);
        },
        menuClick(item, isTop=false, withoutPush=false) {

            let url, _item;

            if (isTop) {
                let current;
                if (typeof isTop === 'string') {
                    current = item;
                    for (let i = 0, l = current.topMenu.length; i < l; i++) {
                        if (this.clearSearch(current.topMenu[i].url) === isTop) {
                            _item = current.topMenu[i];
                            break;
                        }
                    }
                } else {
                    _item = item;
                    current = app.menu.top.current;
                }
                let itemUrl = _item? _item.url || _item.ajax || _item.link: '';
                itemUrl && !itemUrl.startsWith('/') && (itemUrl = `/${itemUrl}`);
                url = `${current.url || current.ajax || current.link}${itemUrl}`;
                this.menu.current = _item;
            }
            if (!isTop || typeof isTop === 'string') {

                this.menu.current = item;

                app.menu.left.items.map(x => {
                    x.active = item === x;
                });
                
                app.menu.top.current = item;
                if (item && item.topMenu) {
                    app.menu.top.items = item.topMenu;
                } else {
                    app.menu.top.items = [];
                    /*app.menu.top.items = [{
                        link: 'd',
                        name: 'D',
                    }, {
                        link: '/data',
                        name: 'Data',
                    }];*/
                }

                url = item !== '/'? url || (url = item.url || item.ajax || item.link): '';
            }

            url = this.clearSearch(url);

            // this.refreshStop = true;
            // console.log('url::', url);
            url = (url? `/?${url}`: '/') + location.hash;
            // console.log('= url:::', url, withoutPush);
            // console.log('- url:::', `/${location.search}${location.hash}`);
            if (withoutPush || `/${location.search}${location.hash}` === url) {
                history.replaceState(null, null, url);
            } else {
                console.log('- .pushState:::', url, `/${location.search}${location.hash}`);
                history.pushState(null, null, url);
            }
            // {html: app.content, pageTitle: ''}

            // location.hash = url;
            // setTimeout(() => {
            //     this.refreshStop = false;
            //     if (!isTop) {
            //         let commentPage = app.clearSearch( this.menu.top.current.url ) || 'root';
            //         $('.disqus-comment-count')
            //             .html('')
            //             .attr('data-disqus-identifier', commentPage);
            //         if (window.DISQUSWIDGETS) {
            //             window.DISQUSWIDGETS.getCount({reset: true});
            //         }
            //     }
            // }, 100);

            if (_item && _item !== item) {
                app.content = _item;
            } else {
                if (item === '/') {
                    this.content = {}
                } else {
                    app.content = item? item: app.menu.top.current;
                }
            }
        },
        loadData() {

            fetch('/data/menu.json')
                .then(r => r.json())
                .then(menu => {
                    this.menu.left.items = menu;
                    
                    this.handlerUrl({withoutPush: true});

                });

            return this;
        },
        handlerUrl({search=location.search, withoutPush=false}) {


            // if (search) {
                let item;

                search = this.clearSearch(search);
                search = search.split('/');

                for (let i = 0, l = this.menu.left.items.length; i < l; i++) {

                    let x = this.menu.left.items[i],
                        h = this.clearSearch(x.url || x.ajax || x.link);

                    if (h === search[0]) {
                        this.menuClick(x, search[1], withoutPush);
                        item = x;
                        break;
                    }
                }
            // }
            return this;
        },
        onChangeUrl() {

            window.onpopstate = e => {
                console.log('e::', e.state);
                // console.log('e.state.html::', e.state.html);
                // app.content = e.state.html || {};
                this.handlerUrl({withoutPush: true});
                return false;
            }

            // window.addEventListener('popstate', e => {
            //     console.log('e:e:', e.state);
            //     /*if (event.state) {
            //         alert('!');
            //     }*/
            // }, false);

            return this;
        },
        onModalComment() {

            $('#commentModal').on('show.bs.modal', () => {
                $('#disqus_thread').html('');
                if (window.DISQUS) {
                    DISQUS.reset({
                        reload: true,
                        config: window.disqus_config,
                    });
                } else {
                    var d = document, s = d.createElement('script');
                    s.src = 'https://slaawwa-github.disqus.com/embed.js';
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                }
            });

            return this;
        },
    },
    mounted() {

        window.h = location.hash;

        this
            .onChangeUrl()
            .onModalComment()
            .loadData();
    },
    components: {
        hello,
    },
});

/* ------- */


if (isDev) {
    window.app = app;
}




/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

const disqus_config = function() {

    this.callbacks.onNewComment = [comment => {
        console.log('comment:', comment);
    }];
    
    let url = location.href.indexOf('#') + 1,
        urlPos = location.href.indexOf('#', url);
    if (url && urlPos !== -1) {
        url = location.href.substring(0, urlPos);
    } else {
        url = location.href;
    }
    this.page.url = url; // Replace PAGE_URL with your page's canonical URL variable
    // this.page.url = location.href.replace('#', '').split('#')[0]; // Replace PAGE_URL with your page's canonical URL variable
    // this.page.url = 'https://slaawwa.github.io/';  // Replace PAGE_URL with your page's canonical URL variable
    // this.page.identifier = app.clearSearch( app.menu.top.current.url ) || 'root'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    this.page.identifier = app.clearSearch( app.menu.top.current.url ) || 'root'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    // this.page.identifier = 'vuejs2'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    if (this.page.identifier === 'test' || this.page.identifier === 'vuejs') {
        this.page.identifier += '-new2';
    }
    
    let title = app.content.name;
    if (title === 'root') {
        title = false;
    }

    this.page.title = title || $('title').html();

    // this.page.category_id = this.page.identifier;
    console.log('this.page:', this.page);
};

window.disqus_config = disqus_config;

// (function() { // DON'T EDIT BELOW THIS LINE
//     var d = document, s = d.createElement('script');
//     s.src = 'https://slaawwa-github.disqus.com/embed.js';
//     s.setAttribute('data-timestamp', +new Date());
//     (d.head || d.body).appendChild(s);
// })();

// history.pushState({html: '', pageTitle: ''}, null, '/');
// window.onpopstate = function(e){
//     if(e.state){
//         document.getElementById("content").innerHTML = e.state.html;
//         document.title = e.state.pageTitle;
//     }
// };
// history.replaceState({}, null, '/?vuejs#vuejs2');
