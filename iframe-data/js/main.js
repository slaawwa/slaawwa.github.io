'use strict';

$(() => {
    let site = {
        el: {
            setIframeBtn    : $('#setIframeBtn'),
            emitBtn         : $('#emitBtn'),
            subscribeBtn    : $('#subscribeBtn'),
            unsubscribeBtn  : $('#unsubscribeBtn'),

            iframeWrap      : $('#iframeWrap'),
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
                subscribeFn: () => {
                    console.log('message:::', event)
                    console.log('data:::', event.data)
                    console.log('source:::', event.source)
                    return site.set.handler;
                },
                postData: () => {

                    site.el.subscribeBtn.click(() => {
                        window.addEventListener("message", site.set.handler.subscribeFn, false);
                    });

                    site.el.unsubscribeBtn.click(() => {
                        window.removeEventListener("message", site.set.handler.subscribeFn);
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
                        console.log('emitBtn');

                        let message = {
                                data: 123,
                            },
                            targetOrigin= "*";

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
