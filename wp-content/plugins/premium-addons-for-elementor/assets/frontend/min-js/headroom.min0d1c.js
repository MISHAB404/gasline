!function(t,s){"object"==typeof exports&&"undefined"!=typeof module?module.exports=s():"function"==typeof define&&define.amd?define(s):(t=t||self).Headroom=s()}(this,function(){"use strict";function t(){return"undefined"!=typeof window}function s(t,e,n){var s,o,i,l,a,r,h,c=function(){var t=!1;try{var s={get passive(){t=!0}};window.addEventListener("test",s,s),window.removeEventListener("test",s,s)}catch(s){t=!1}return t}(),d=!1,u=(o=t)&&o.document&&9===o.document.nodeType?(a=(l=o).document,r=a.body,h=a.documentElement,{scrollHeight:function(){return Math.max(r.scrollHeight,h.scrollHeight,r.offsetHeight,h.offsetHeight,r.clientHeight,h.clientHeight)},height:function(){return l.innerHeight||h.clientHeight||r.clientHeight},scrollY:function(){return void 0!==l.pageYOffset?l.pageYOffset:(h||r.parentNode||r).scrollTop}}):(i=o,{scrollHeight:function(){return Math.max(i.scrollHeight,i.offsetHeight,i.clientHeight)},height:function(){return Math.max(i.offsetHeight,i.clientHeight)},scrollY:function(){return i.scrollTop}}),f=u.scrollY(),p={};function m(){var t=Math.round(u.scrollY()),s=u.height(),o=u.scrollHeight();p.scrollY=t,p.lastScrollY=f,p.direction=f<t?"down":"up",p.distance=Math.abs(t-f),p.isOutOfBounds=t<0||o<t+s,p.top=t<=e.offset[p.direction],p.bottom=o<=t+s,p.toleranceExceeded=p.distance>e.tolerance[p.direction],n(p),f=t,d=!1}function g(){d||(d=!0,s=requestAnimationFrame(m))}var C=!!c&&{passive:!0,capture:!1};return t.addEventListener("scroll",g,C),m(),{destroy:function(){cancelAnimationFrame(s),t.removeEventListener("scroll",g,C)}}}function o(t){return t===Object(t)?t:{down:t,up:t}}function e(t,s){s=s||{},Object.assign(this,e.options,s),this.classes=Object.assign({},e.options.classes,s.classes),this.elem=t,this.tolerance=o(this.tolerance),this.offset=o(this.offset),this.initialised=!1,this.frozen=!1}return e.prototype={constructor:e,init:function(){return e.cutsTheMustard&&!this.initialised&&(this.addClass("initial"),this.initialised=!0,setTimeout(function(t){t.scrollTracker=s(t.scroller,{offset:t.offset,tolerance:t.tolerance},t.update.bind(t))},100,this)),this},destroy:function(){this.initialised=!1,Object.keys(this.classes).forEach(this.removeClass,this),this.scrollTracker.destroy()},unpin:function(){!this.hasClass("pinned")&&this.hasClass("unpinned")||(this.addClass("unpinned"),this.removeClass("pinned"),this.onUnpin&&this.onUnpin.call(this))},pin:function(){this.hasClass("unpinned")&&(this.addClass("pinned"),this.removeClass("unpinned"),this.onPin&&this.onPin.call(this))},freeze:function(){this.frozen=!0,this.addClass("frozen")},unfreeze:function(){this.frozen=!1,this.removeClass("frozen")},top:function(){this.hasClass("top")||(this.addClass("top"),this.removeClass("notTop"),this.onTop&&this.onTop.call(this))},notTop:function(){this.hasClass("notTop")||(this.addClass("notTop"),this.removeClass("top"),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){this.hasClass("bottom")||(this.addClass("bottom"),this.removeClass("notBottom"),this.onBottom&&this.onBottom.call(this))},notBottom:function(){this.hasClass("notBottom")||(this.addClass("notBottom"),this.removeClass("bottom"),this.onNotBottom&&this.onNotBottom.call(this))},shouldUnpin:function(t){return"down"===t.direction&&!t.top&&t.toleranceExceeded},shouldPin:function(t){return"up"===t.direction&&t.toleranceExceeded||t.top},addClass:function(t){this.elem.classList.add.apply(this.elem.classList,this.classes[t].split(" "))},removeClass:function(t){this.elem.classList.remove.apply(this.elem.classList,this.classes[t].split(" "))},hasClass:function(t){return this.classes[t].split(" ").every(function(t){return this.classList.contains(t)},this.elem)},update:function(t){t.isOutOfBounds||!0!==this.frozen&&(t.top?this.top():this.notTop(),t.bottom?this.bottom():this.notBottom(),this.shouldUnpin(t)?this.unpin():this.shouldPin(t)&&this.pin())}},e.options={tolerance:{up:0,down:0},offset:0,scroller:t()?window:null,classes:{frozen:"headroom--frozen",pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},e.cutsTheMustard=!!(t()&&function(){}.bind&&"classList"in document.documentElement&&Object.assign&&Object.keys&&requestAnimationFrame),e});