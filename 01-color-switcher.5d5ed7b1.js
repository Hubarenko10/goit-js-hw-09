!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t();var e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");n.disabled=!0;var a=null,d=document.querySelector("body");e.addEventListener("click",(function(){e.disabled=!0,n.disabled=!1,a=setInterval((function(){var e=t();d.style.background=e}),5e3)})),n.addEventListener("click",(function(){clearInterval(a),e.disabled=!1,n.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.5d5ed7b1.js.map