(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),c=n.n(r),m=(n(16),n(1)),l=n(2),i=n(5),s=n(6),u=n(8),w=n(7),d=n(9),f=(n(17),n(18),function(e){var t=e.item,n=e.showLeftArrow,a=e.showRightArrow,r=e.onPrevious,c=e.onNext;return o.a.createElement("li",null,n&&o.a.createElement("span",{className:"arrow--left",onClick:r},"<"),t,a&&o.a.createElement("span",{className:"arrow--right",onClick:c},">"))}),v=function(e){var t=e.columnName,n=e.addNewItem;return o.a.createElement("button",{className:"add-new-item",onClick:function(){return n(t)}},"Add New Item")},I=function(e){var t=e.addNewItem,n=e.moveItem,a=e.items,r=e.columnName,c=e.prevColumn,m=e.nextColumn,l=function(e,t,a){return function(){return n(e,t,a)}};return o.a.createElement("div",{className:"col-sm kanban--col"},o.a.createElement("h2",null,r),o.a.createElement("ul",null,a.map(function(e){return o.a.createElement(f,{key:e,item:e,onPrevious:l(e,r,c),onNext:l(e,r,m),showLeftArrow:!!c,showRightArrow:!!m})})),o.a.createElement(v,{addNewItem:t,columnName:r}))},h=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(o)))).state={"Person 1":["Item 1","Item 2","Item 3"],"Person 2":["Item 4","Item 5","Item 6"],"Person 3":["Item 7","Item 8","Item 9"],"Person 4":["Item 10","Item 11","Item 12"]},n.addNewItem=function(e){var t=window.prompt("Enter New Item to "+e);if(null!==t&&""!==t){var a=Object(l.a)({},n.state);a[e]=[].concat(Object(m.a)(a[e]),[t]),n.setState(a)}},n.moveItem=function(e,t,a){if(a){var o=Object(l.a)({},n.state);o[a]=[].concat(Object(m.a)(o[a]),[e]),o[t]=o[t].filter(function(t){return t!==e}),n.setState(o)}},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=Object.keys(t);return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"app--title"},"ART.com Kanban Challenge"),o.a.createElement("div",{className:"row"},n.map(function(a,r){return o.a.createElement(I,{key:a,addNewItem:e.addNewItem,moveItem:e.moveItem,columnName:a,items:t[a],prevColumn:n[r-1],nextColumn:n[r+1]})})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.d5a5e7de.chunk.js.map