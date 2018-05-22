/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

    var bodyEl = document.body,
        menuA = document.querySelectorAll( '.menu .icon-list a' ),
        content = document.querySelector('.content'),
        openbtn = document.getElementById( 'open-button' ),
        closebtn = document.getElementById( 'close-button' ),
        isOpen = false;

    function init() {
        initEvents();
    }

    function initEvents() {
        openbtn.addEventListener( 'click', toggleMenu );
        if( closebtn ) {
            closebtn.addEventListener( 'click', toggleMenu );
        }

        // close the menu element if the target it´s not the menu element or one of its descendants..
        menuA.forEach(function(el) {
            console.log('el::', el);
            el.addEventListener( 'click', function(ev) {
                var target = ev.target;
                if( isOpen && target !== openbtn ) {
                    toggleMenu();
                }
            } );
        } );

        content.addEventListener('click', function() {
            if (isOpen) {
                toggleMenu();
            }
        });
    }

    function toggleMenu() {
        if( isOpen ) {
            classie.remove( bodyEl, 'show-menu' );
        }
        else {
            classie.add( bodyEl, 'show-menu' );
        }
        isOpen = !isOpen;
    }

    init();

})();
