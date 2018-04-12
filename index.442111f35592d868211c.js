!function(e){function a(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}var o={};a.m=e,a.c=o,a.d=function(e,o,t){a.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:t})},a.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="/",a(a.s=3)}([function(e,a,o){"use strict";function t(e,a){if(1===arguments.length){for(var o=e[0],r=1;r<e.length;r++)o=t(o,e[r]);return o}for(var i in a)if("class"===i){var s=e[i]||[];e[i]=(Array.isArray(s)?s:[s]).concat(a[i]||[])}else if("style"===i){var s=n(e[i]);s=s&&";"!==s[s.length-1]?s+";":s;var l=n(a[i]);l=l&&";"!==l[l.length-1]?l+";":l,e[i]=s+l}else e[i]=a[i];return e}function r(e,a){for(var o,t="",r="",i=Array.isArray(a),n=0;n<e.length;n++)(o=s(e[n]))&&(i&&a[n]&&(o=c(o)),t=t+r+o,r=" ");return t}function i(e){var a="",o="";for(var t in e)t&&e[t]&&d.call(e,t)&&(a=a+o+t,o=" ");return a}function s(e,a){return Array.isArray(e)?r(e,a):e&&"object"==typeof e?i(e):e||""}function n(e){if(!e)return"";if("object"==typeof e){var a="";for(var o in e)d.call(e,o)&&(a=a+o+":"+e[o]+";");return a}return e+""}function l(e,a,o,t){return!1!==a&&null!=a&&(a||"class"!==e&&"style"!==e)?!0===a?" "+(t?e:e+'="'+e+'"'):("function"==typeof a.toJSON&&(a=a.toJSON()),"string"==typeof a||(a=JSON.stringify(a),o||-1===a.indexOf('"'))?(o&&(a=c(a))," "+e+'="'+a+'"'):" "+e+"='"+a.replace(/'/g,"&#39;")+"'"):""}function p(e,a){var o="";for(var t in e)if(d.call(e,t)){var r=e[t];if("class"===t){r=s(r),o=l(t,r,!1,a)+o;continue}"style"===t&&(r=n(r)),o+=l(t,r,!1,a)}return o}function c(e){var a=""+e,o=m.exec(a);if(!o)return e;var t,r,i,s="";for(t=o.index,r=0;t<a.length;t++){switch(a.charCodeAt(t)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}r!==t&&(s+=a.substring(r,t)),r=t+1,s+=i}return r!==t?s+a.substring(r,t):s}function f(e,a,t,r){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&a||r))throw e.message+=" on line "+t,e;try{r=r||o(1).readFileSync(a,"utf8")}catch(a){f(e,null,t)}var i=3,s=r.split("\n"),n=Math.max(t-i,0),l=Math.min(s.length,t+i),i=s.slice(n,l).map(function(e,a){var o=a+n+1;return(o==t?"  > ":"    ")+o+"| "+e}).join("\n");throw e.path=a,e.message=(a||"Pug")+":"+t+"\n"+i+"\n\n"+e.message,e}var d=Object.prototype.hasOwnProperty;a.merge=t,a.classes=s,a.style=n,a.attr=l,a.attrs=p;var m=/["&<>]/;a.escape=c,a.rethrow=f},function(e,a){},,function(e,a,o){function t(e){var a,t="";return t=t+'<!DOCTYPE html><html lang="en" dir="ltr"><head>'+(null==(a=o(4).call(this,e))?"":a)+'</head><body><div class="parallax-1" id="home"></div><main><header><div class="logo"><p>raknjarasoa</p></div><nav class="menu"><a class="menu__item" href="#home">Home</a><a class="menu__item" href="#about">About</a><a class="menu__item" href="#portfolio">Portfolio</a><a class="menu__item" href="#contact">Contact</a><span class="menu__slider"></span></nav><div class="hamburger js-hamburger"><div class="hamburger__wrapper"><div class="hamburger__inner"></div></div></div></header><section id="home"><div class="lifestyle">I<span><i class="fa fa-heart pulse"></i></span><div class="flip"><div class="lifestyle__item"><p class="lifestyle__text">Freecodecamp</p></div><div class="lifestyle__item"><p class="lifestyle__text">Front-End</p></div><div class="lifestyle__item"><p class="lifestyle__text">Javascript\t</p></div></div></div></section><section id="about"><div class="about"><strong>I\'m</strong><p class="about__me">Telecom engineering && Full stack developer</p><p class="about__info">from Madagascar living in Mauritius, where I work as a Experimented Front End Developer. With a background in back-end development, my strength lies in webapp and website.</p></div></section><section id="portfolio"><div class="parallax-2"><h2>Portfolio</h2><p>Tell me more about your project</p></div><div class="portfolio__grid"><a class="portfolio__item" href="https://codepen.io/raknjarasoa/pen/BmMddZ" target="_blank" rel="noopener noreferrer"><div class="portfolio__info"><h3>Weather</h3><p>Es6 | pug | foundation 6 | scss</p></div><div class="portfolio__thumbnail">\x3c!-- images/postit.jpg--\x3e<img src="https://firebasestorage.googleapis.com/v0/b/ocr-webapp.appspot.com/o/images%2Fweather.PNG?alt=media&amp;token=5d018a8f-984c-4ebc-ac9b-4bc5118855e4" alt="Weather"></div></a><a class="portfolio__item" href="https://codepen.io/raknjarasoa/pen/gXqwqG" target="_blank" rel="noopener noreferrer"><div class="portfolio__info"><h3>Quote machine</h3><p>Es6 | pug | scss</p></div><div class="portfolio__thumbnail"><img src="https://firebasestorage.googleapis.com/v0/b/ocr-webapp.appspot.com/o/images%2Fquot.PNG?alt=media&amp;token=221181f5-39d5-43f3-99b5-e2b2e7d27ed5" alt="Quot"></div></a><a class="portfolio__item" href="https://codepen.io/raknjarasoa/pen/NwQEQE" target="_blank" rel="noopener noreferrer"><div class="portfolio__info"><h3>Calculator</h3><p>ExtJs 6 | scss</p></div><div class="portfolio__thumbnail"><img src="https://firebasestorage.googleapis.com/v0/b/ocr-webapp.appspot.com/o/images%2Fcalc.PNG?alt=media&amp;token=80a0e4f1-52fd-4afb-828b-7ebb124ac56b" alt="Calculator"></div></a><a class="portfolio__item" href="https://codepen.io/raknjarasoa/pen/gXyRzq" target="_blank" rel="noopener noreferrer"><div class="portfolio__info"><h3>Twitchtv JSON API</h3><p>AngularJs | scss | html 5</p></div><div class="portfolio__thumbnail"><img src="https://firebasestorage.googleapis.com/v0/b/ocr-webapp.appspot.com/o/images%2Ftwitch.PNG?alt=media&amp;token=95e2cc23-42cb-4589-a5c7-cef68c6b2e2f" alt="Twhitch"></div></a><a class="portfolio__item" href="https://codepen.io/raknjarasoa/pen/NXrjPb" target="_blank" rel="noopener noreferrer"><div class="portfolio__info"><h3>Tic Tac Toe Game</h3><p>Es6 | pug | scss</p></div><div class="portfolio__thumbnail"><img src="https://firebasestorage.googleapis.com/v0/b/ocr-webapp.appspot.com/o/images%2Ftoe.PNG?alt=media&amp;token=d1b31d6e-5ca8-41e5-8c16-b198634f485d" alt="Tic tac toe"></div></a><a class="portfolio__item" href="https://codepen.io/raknjarasoa/pen/BYadXK" target="_blank" rel="noopener noreferrer"><div class="portfolio__info"><h3>Simon Game</h3><p>Es6 | pug | scss</p></div><div class="portfolio__thumbnail"><img src="https://firebasestorage.googleapis.com/v0/b/ocr-webapp.appspot.com/o/images%2Fsimon.PNG?alt=media&amp;token=c4cc39fc-96c1-41d4-828e-358069632670" alt="Simon game"></div></a><a class="portfolio__item" href="https://codepen.io/raknjarasoa/pen/mqNomR" target="_blank" rel="noopener noreferrer"><div class="portfolio__info"><h3>Pomodoro</h3><p>Es6 | pug | scss</p></div><div class="portfolio__thumbnail"><img src="https://firebasestorage.googleapis.com/v0/b/ocr-webapp.appspot.com/o/images%2Fpomodoro.PNG?alt=media&amp;token=0566e079-6089-420c-a1ca-f19aef9d45a8" alt="Pomodoro"></div></a><a class="portfolio__item" href="https://codepen.io/raknjarasoa/pen/OOdBmE" target="_blank" rel="noopener noreferrer"><div class="portfolio__info"><h3>Wikipédia viewer</h3><p>React | Es6 | scss</p></div><div class="portfolio__thumbnail"><img src="https://firebasestorage.googleapis.com/v0/b/ocr-webapp.appspot.com/o/images%2Fwiki.PNG?alt=media&amp;token=c81798f0-094a-4c29-8030-4c721de07eff" alt="Wiki"></div></a><a class="portfolio__item" href="https://codepen.io/raknjarasoa/pen/pRrQWd" target="_blank" rel="noopener noreferrer"><div class="portfolio__info"><h3>Tribute page</h3><p>Pug | scss</p></div><div class="portfolio__thumbnail"><img src="https://firebasestorage.googleapis.com/v0/b/ocr-webapp.appspot.com/o/images%2Fjjr.PNG?alt=media&amp;token=89c534a4-d9ea-484d-9447-a3556db019bf" alt="JJ Rabearivelo"></div></a></div></section><section id="contact"><div class="parallax-3"> <h2>Let’s Work Together</h2><p>Tell me more about your project</p></div><div class="contact__wrapper"><form action="/" method="post"><p><input type="text" name="name" placeholder="NAME"></p><p><input type="email" name="email" placeholder="EMAIL"></p><p><input type="tel" name="tel" placeholder="PHONE"></p><p><input type="submit" value="Let\'s talk"></p></form></div></section><footer><div class="footer__logo"><div class="logo"><p>raknjarasoa\t</p></div></div><p class="copyright">'+(null==(a="© 2018 Made with love ")?"":a)+'<i class="fa fa-heart pulse"></i><span>'+(null==(a=" by ")?"":a)+'</span><a href="https://www.freecodecamp.org/raknjarasoa"><strong>raknjarasoa</strong></a><span>'+(null==(a=" | All Rights Reserved ")?"":a)+'</span></p><div class="social-icon"><a href="https://www.facebook.com/raknjarasoa" target="_blank" rel="noopener noreferrer"><i class="fa fa-4x fa-facebook-square" aria-hidden="true"></i></a><a href="https://www.linkedin.com/in/raknjarasoa/" target="_blank" rel="noopener noreferrer"><i class="fa fa-4x fa-linkedin-square" aria-hidden="true"></i></a><a href="https://github.com/raknjarasoa" target="_blank" rel="noopener noreferrer"><i class="fa fa-4x fa-github-square" aria-hidden="true"></i></a><a href="https://www.freecodecamp.org/raknjarasoa" target="_blank" rel="noopener noreferrer"><i class="fa fa-4x fa-free-code-camp" aria-hidden="true"></i></a></div></footer></main>'+(null==(a=o(5).call(this,e))?"":a)+(null==(a=o(6).call(this,e))?"":a)+"</body></html>"}o(0);e.exports=t},function(e,a,o){function t(e){var a,o="",t=e||{};return function(e){o=o+'<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><title>'+r.escape(null==(a=e)?"":a)+' Njarasoa Rakotozafy\'s portfolio.</title><meta name="description" content=""><meta property="og:site_name" content=""><meta property="og:url" content=""><meta property="og:title" content=""><meta property="og:description" content=""><meta property="og:image" content=""><meta property="og:type" content="website"><link rel="icon" type="image/ico" href="../../images/favicon.ico">\x3c!-- link(rel=\'stylesheet\', href=\'/styles/global.min.css\')--\x3e'}.call(this,"title"in t?t.title:"undefined"!=typeof title?title:void 0),o}var r=o(0);e.exports=t},function(e,a,o){function t(e){return""}o(0);e.exports=t},function(e,a,o){function t(e){return""}o(0);e.exports=t}]);
//# sourceMappingURL=index.442111f35592d868211c.js.map