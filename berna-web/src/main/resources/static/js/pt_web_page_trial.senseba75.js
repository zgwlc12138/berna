I$(32,function(e,t,a){var n=function(){var e={drag:"07e2387ab53a4d6f930b8d9a9be71bdf",click:"240cdca2036c430d814e06fc88835e53",sms:"7bbf97568cd744a780e529715cede53f",sense:"507ffa2bee344d2b9e969caa873c1a5e"};var t=310;var n=a.query(".j-captcha",!0);for(var i=0,r=n.length;i<r;i++){var s=n[i].getAttribute("data-type").split("_");var o=s[0];var l=s[1];var c={element:n[i],captchaId:e[o],mode:l,width:t+"px"};if("wap"!==l)initNECaptcha(c)}};var i=function(){var e=a.query("[data-captcha]",!0),t=a.query(".j-capt_ele",!0);var n=0;var i=function(i){return function(){if(n!==i){e[n].captchaIns&&e[n].captchaIns.refresh();a.delClass(e[n],"z-act");a.addClass(e[i],"z-act");a.delClass(t[n],"z-act");a.addClass(t[i],"z-act");n=i}}};for(var r=0,s=e.length;r<s;r++)a.addEvent(e[r],"click",i(r))};var r=function(){e.init();new t;n()};r()},1,8,17);