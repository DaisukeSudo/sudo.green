webpackJsonp([0x83323ebd9d39],{306:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),c=n(36),f=r(c),s=n(37),p=r(s),d=n(42),m=r(d),b=n(13),y=r(b);n(602);var h=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){return i.default.createElement("div",{className:"about-component md-grid mobile-fix"},i.default.createElement(f.default,{className:"md-grid md-cell--8"},i.default.createElement("div",{className:"about-wrapper"},i.default.createElement("img",{src:y.default.userAvatar,className:"about-img",alt:y.default.userName}),i.default.createElement(p.default,null,i.default.createElement("p",{className:"about-text md-body-1"},i.default.createElement("span",{dangerouslySetInnerHTML:{__html:y.default.userDescription}}))),i.default.createElement(m.default,{labeled:!0,config:y.default}))))},t}(l.Component);t.default=h,e.exports=t.default},602:function(e,t){},42:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),c=n(35),f=r(c);n(72);var s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return i.default.createElement(f.default,{icon:!t,flat:t,secondary:!0,key:e.label,iconClassName:e.iconClassName,href:e.url},t?e.label:"")})},t.prototype.render=function(){var e=this.props.config.userLinks;return e?i.default.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(l.Component);t.default=s,e.exports=t.default},72:function(e,t){},318:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),c=n(24),f=r(c),s=n(306),p=r(s),d=n(13),m=r(d),b=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){return i.default.createElement("div",{className:"about-container"},i.default.createElement(f.default,null,i.default.createElement("title",null,"About | "+m.default.siteTitle),i.default.createElement("link",{rel:"canonical",href:m.default.siteUrl+"/about/"})),i.default.createElement(p.default,null))},t}(l.Component);t.default=b,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-about-jsx-48ed2dc1085077b57ae8.js.map