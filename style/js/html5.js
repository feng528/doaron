(function(e,i){function o(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function l(e){var t=d[e[u]];t||(t={},h++,e[u]=h,d[h]=t);return t}function r(e,t,n){t||(t=i);if(f)return t.createElement(e);n||(n=l(t));t=n.cache[e]?n.cache[e].cloneNode():m.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e);return t.canHaveChildren&&!c.test(e)?n.frag.appendChild(t):t}function a(t,n){if(!n.cache)n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag();t.createElement=function(e){return!g.shivMethods?n.createElem(e):r(e,t,n)};t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/\w+/g,function(e){n.createElem(e);n.frag.createElement(e);return'c("'+e+'")'})+");return n}")(g,n.frag)}function t(e){e||(e=i);var t=l(e);if(g.shivCSS&&!s&&!t.hasCSS){var n,r=e;n=r.createElement("p");r=r.getElementsByTagName("head")[0]||r.documentElement;n.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";n=r.insertBefore(n.lastChild,r.firstChild);t.hasCSS=!!n}f||a(e,t);return e}var n=e.html5||{},c=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,s,u="_html5shiv",h=0,d={},f;(function(){try{var e=i.createElement("a");e.innerHTML="<xyz></xyz>";s="hidden"in e;var t;if(!(t=1==e.childNodes.length)){i.createElement("a");var n=i.createDocumentFragment();t="undefined"==typeof n.cloneNode||"undefined"==typeof n.createDocumentFragment||"undefined"==typeof n.createElement}f=t}catch(r){f=s=!0}})();var g={elements:n.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2pre",shivCSS:!1!==n.shivCSS,supportsUnknownElements:f,shivMethods:!1!==n.shivMethods,type:"default",shivDocument:t,createElement:r,createDocumentFragment:function(e,t){e||(e=i);if(f)return e.createDocumentFragment();for(var t=t||l(e),n=t.frag.cloneNode(),r=0,a=o(),c=a.length;r<c;r++)n.createElement(a[r]);return n}};e.html5=g;t(i)})(this,document);