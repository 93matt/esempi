if (window.opera) {
var head = document.getElementsByTagName("head")[0];
var css = document.createElement("link");
css.setAttribute("href", "opera.css");
css.setAttribute("rel", "stylesheet");
css.setAttribute("type", "text/css");
css.setAttribute("media", "screen");
head.appendChild(css);
}