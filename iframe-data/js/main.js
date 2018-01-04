'use strict';

$(() => {
    let site = {
        el: {
            setIframeBtn    : $('#setIframeBtn'),
            emitBtn         : $('#emitBtn'),
            emitText        : $('#emitText'),
            subscribeBtn    : $('#subscribeBtn'),
            unsubscribeBtn  : $('#unsubscribeBtn'),

            iframeWrap      : $('#iframeWrap'),
            log             : $('#log'),
        },
        subscribeFn: () => {
            console.log('message:::', event)
            console.log('data:::', event.data)
            console.log('source:::', event.source)
            site.log(`- From ifame data: ${event.data}`);
            return site;
        },
        log: mess => {
            site.el.log.prepend(` ${mess} (${new Date().toLocaleString()})${site.el.log.html()? '<br>': ''}`);
            return site;
        },
        set: {
            behaviors: () => {

                site.set.handler
                    .iframeBtn()
                    .emitBtn()
                    .unsubscribeBtn()
                    .postData();

                return site.set;
            },
            handler: {
                postData: () => {

                    site.el.subscribeBtn.click(() => {
                        window.addEventListener("message", site.subscribeFn, false);
                        site.log(' - Subscribe (wait for data)');
                    });

                    site.el.unsubscribeBtn.click(() => {
                        window.removeEventListener("message", site.subscribeFn);
                        site.log(' - Unsubscribe');
                    });

                    return site.set.handler;
                },
                iframeBtn: () => {

                    site.el.setIframeBtn.click(() => {
                        site.el.iframe = site.el.iframeWrap
                            .html(`<iframe src="iframe.html">`)
                            .find('iframe');

                    });

                    return site.set.handler;
                },
                emitBtn: () => {

                    site.el.emitBtn.click(() => {

                        let message = site.el.emitText.val(),
                            targetOrigin= "*";

                        site.log(`- Send emit data: ${message}`);

                        site.el.iframe[0].contentWindow.postMessage(message, targetOrigin/*, [transfer]*/);

                    });

                    return site.set.handler;
                },
                unsubscribeBtn: () => {

                    site.el.unsubscribeBtn.click(() => {
                        console.log('unsubscribeBtn');
                    });

                    return site.set.handler;
                },
            },
        },
        init: () => {
            site.set
                .behaviors();
        },
    };

    site.init();

    window.site = site;

});
