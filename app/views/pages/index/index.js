'use strict';

import Vue from 'vue';

import hello from './components/hello.vue';

// import jsyaml from 'js-yaml';

import '../../../img/bg.jpg';
import '../../../img/logo.png';

import './style.less';

// window.jsyaml = jsyaml;

// console.log('htmlWebpackPlugin.options:', readmeContent);
console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
if (isDev) {
    console.log('isDev:', isDev);
    console.log('isProd:', isProd);
}

let app = new Vue({
    el: '#app',
    data: {
        m: 'readmeContent',
        refreshStop: false,
        contentStyle: {},
        menu: {
            top: {
                current: '',
                items: [],
            },
            left: {
                style: {
                    maxHeight: `${window.innerHeight - 142}px`,
                    width: `${document.getElementById('leftMenu').clientWidth}px`,
                    position: 'fixed',
                },
                items: [],
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
        clearHash: hash => {
            if (hash.startsWith('#')) {
                hash = hash.substring(1);
            } else if (hash.startsWith('/#')) {
                hash = hash.substring(2);
            }
            return hash;
        },
        menuIsLast(index) {
            // console.log('index::', index === (this.menu.top.items.length-1))
            return index === (this.menu.top.items.length-1);
            // return false;
        },
        menuClick(item, isTop=false) {

            let url, _item;

            if (isTop) {
                let current;
                if (typeof isTop === 'string') {
                    current = item;
                    for (let i = 0, l = current.topMenu.length; i < l; i++) {
                        if (this.clearHash(current.topMenu[i].url) === isTop) {
                            _item = current.topMenu[i];
                            break;
                        }
                    }
                } else {
                    _item = item;
                    current = app.menu.top.current;
                }
                let itemUrl = _item? _item.url || _item.ajax || _item.link: '';
                itemUrl && !itemUrl.startsWith('#') && (itemUrl = `#${itemUrl}`);
                url = `${current.url || current.ajax || current.link}${itemUrl}`;
            }
            if (!isTop || typeof isTop === 'string') {
                app.menu.left.items.map(x => {
                    x.active = item === x;
                });
                
                if (item && item.topMenu) {
                    app.menu.top.items = item.topMenu;
                    app.menu.top.current = item;
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

            url = this.clearHash(url);

            this.refreshStop = true;
            location.hash = url;
            setTimeout(() => {this.refreshStop = false}, 100);

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
                    
                    /*if (isDev) {
                        // NOTE: Need for testing
                        menu[0].ajax = menu[0].link;
                        delete menu[0].link;
                        menu[0].html = '';
                        menu[0].topMenu = [{
                            name: 'Резюме',
                            url: '#about-me#resume',
                            link: '/app/resume.html',
                        }, {
                            name: 'Портфоліо',
                            url: '#about-me#portfolio',
                            link: '/app/portfolio.html',
                        }];

                        // console.log('menu:', menu);
                    }*/

                    this.menu.left.items = menu;
                    
                    this.handlerHash();

                });

            return this;
        },
        handlerHash(hash=location.hash) {

            // if (hash) {
                let item;

                hash = this.clearHash(hash);
                hash = hash.split('#');

                for (let i = 0, l = this.menu.left.items.length; i < l; i++) {

                    let x = this.menu.left.items[i],
                        h = this.clearHash(x.url || x.ajax || x.link);

                    if (h === hash[0]) {
                        this.menuClick(x, hash[1]);
                        item = x;
                        break;
                    }
                }
            // }
            return this;
        },
        onChangeHash() {

            window.onhashchange = e => {
                // let {newURL, oldURL} = e;
                // console.log(' - location.hash:', location.hash);
                // console.log(' - newURL:', newURL);
                // console.log(' - oldURL:', oldURL);
                // console.log(' - e:', e);
                // e.cancelable = true;
                // e.preventDefault();
                if (this.refreshStop) {
                    this.refreshStop = false;
                } else {
                    this.handlerHash();
                }
            }

            return this;
        },
    },
    mounted() {
        this
            .onChangeHash()
            .loadData();
    },
    components: {
        hello,
    },
});

if (isDev) {
    window.app = app;
}




/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

var disqus_config = function() {

    this.callbacks.onNewComment = [function(comment) {
        console.log('comment:', comment);
    }];
    
    // this.page.url = window.location.href; // Replace PAGE_URL with your page's canonical URL variable
    this.page.url = 'https://slaawwa.github.io/';  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = 'home'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    this.page.title = 'Tools for FrontEnd (my best feature)';
};

window.disqus_config = disqus_config;

(function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    // s.src = 'https://slaawwa-github.disqus.com/embed.js';
    s.src = '//slaawwa-github.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();
