"use strict";(self.webpackChunkcrm_web_application=self.webpackChunkcrm_web_application||[]).push([[163],{4753:(t,e,n)=>{function r(t,e){const n=function(t){if(!o[t]){const e=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n="06/25/2014, 00:00:00"===e||"\u200e06\u200e/\u200e25\u200e/\u200e2014\u200e \u200e00\u200e:\u200e00\u200e:\u200e00"===e;o[t]=n?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return o[t]}(e);return"formatToParts"in n?function(t,e){try{const n=t.formatToParts(e),r=[];for(let t=0;t<n.length;t++){const e=a[n[t].type];void 0!==e&&(r[e]=parseInt(n[t].value,10))}return r}catch(n){if(n instanceof RangeError)return[NaN];throw n}}(n,t):function(t,e){const n=t.format(e),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[parseInt(r[3],10),parseInt(r[1],10),parseInt(r[2],10),parseInt(r[4],10),parseInt(r[5],10),parseInt(r[6],10)]}(n,t)}n.d(e,{zW:()=>S});const a={year:0,month:1,day:2,hour:3,minute:4,second:5};const o={};function i(t,e,n,r,a,o,i){const u=new Date(0);return u.setUTCFullYear(t,e,n),u.setUTCHours(r,a,o,i),u}const u=36e5,s=6e4,c={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function l(t,e,n){if(!t)return 0;let r,a,o=c.timezoneZ.exec(t);if(o)return 0;if(o=c.timezoneHH.exec(t),o)return r=parseInt(o[1],10),h(r)?-r*u:NaN;if(o=c.timezoneHHMM.exec(t),o){r=parseInt(o[2],10);const t=parseInt(o[3],10);return h(r,t)?(a=Math.abs(r)*u+t*s,"+"===o[1]?-a:a):NaN}if(function(t){if(f[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),f[t]=!0,!0}catch(e){return!1}}(t)){e=new Date(e||Date.now());const r=n?e:function(t){return i(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}(e),a=d(r,t),o=n?a:function(t,e,n){const r=t.getTime();let a=r-e;const o=d(new Date(a),n);if(e===o)return e;a-=o-e;const i=d(new Date(a),n);if(o===i)return o;return Math.max(o,i)}(e,a,t);return-o}return NaN}function d(t,e){const n=r(t,e),a=i(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime();let o=t.getTime();const u=o%1e3;return o-=u>=0?u:1e3+u,a-o}function h(t,e){return-23<=t&&t<=23&&(null==e||0<=e&&e<=59)}const f={};function m(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+t-+e}const g=36e5,w=6e4,b=2,v={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,plainTime:/:/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/};function y(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(null===t)return new Date(NaN);const n=null==e.additionalDigits?b:Number(e.additionalDigits);if(2!==n&&1!==n&&0!==n)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||"object"===typeof t&&"[object Date]"===Object.prototype.toString.call(t))return new Date(t.getTime());if("number"===typeof t||"[object Number]"===Object.prototype.toString.call(t))return new Date(t);if("[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);const r=function(t){const e={};let n,r=v.dateTimePattern.exec(t);r?(e.date=r[1],n=r[3]):(r=v.datePattern.exec(t),r?(e.date=r[1],n=r[2]):(e.date=null,n=t));if(n){const t=v.timeZone.exec(n);t?(e.time=n.replace(t[1],""),e.timeZone=t[1].trim()):e.time=n}return e}(t),{year:a,restDateString:o}=function(t,e){if(t){const n=v.YYY[e],r=v.YYYYY[e];let a=v.YYYY.exec(t)||r.exec(t);if(a){const e=a[1];return{year:parseInt(e,10),restDateString:t.slice(e.length)}}if(a=v.YY.exec(t)||n.exec(t),a){const e=a[1];return{year:100*parseInt(e,10),restDateString:t.slice(e.length)}}}return{year:null}}(r.date,n),i=function(t,e){if(null===e)return null;let n,r,a;if(!t||!t.length)return n=new Date(0),n.setUTCFullYear(e),n;let o=v.MM.exec(t);if(o)return n=new Date(0),r=parseInt(o[1],10)-1,x(e,r)?(n.setUTCFullYear(e,r),n):new Date(NaN);if(o=v.DDD.exec(t),o){n=new Date(0);const t=parseInt(o[1],10);return function(t,e){if(e<1)return!1;const n=T(t);if(n&&e>366)return!1;if(!n&&e>365)return!1;return!0}(e,t)?(n.setUTCFullYear(e,0,t),n):new Date(NaN)}if(o=v.MMDD.exec(t),o){n=new Date(0),r=parseInt(o[1],10)-1;const t=parseInt(o[2],10);return x(e,r,t)?(n.setUTCFullYear(e,r,t),n):new Date(NaN)}if(o=v.Www.exec(t),o)return a=parseInt(o[1],10)-1,Y(a)?p(e,a):new Date(NaN);if(o=v.WwwD.exec(t),o){a=parseInt(o[1],10)-1;const t=parseInt(o[2],10)-1;return Y(a,t)?p(e,a,t):new Date(NaN)}return null}(o,a);if(null===i||isNaN(i.getTime()))return new Date(NaN);if(i){const t=i.getTime();let n,a=0;if(r.time&&(a=function(t){let e,n,r=v.HH.exec(t);if(r)return e=parseFloat(r[1].replace(",",".")),N(e)?e%24*g:NaN;if(r=v.HHMM.exec(t),r)return e=parseInt(r[1],10),n=parseFloat(r[2].replace(",",".")),N(e,n)?e%24*g+n*w:NaN;if(r=v.HHMMSS.exec(t),r){e=parseInt(r[1],10),n=parseInt(r[2],10);const t=parseFloat(r[3].replace(",","."));return N(e,n,t)?e%24*g+n*w+1e3*t:NaN}return null}(r.time),null===a||isNaN(a)))return new Date(NaN);if(r.timeZone||e.timeZone){if(n=l(r.timeZone||e.timeZone,new Date(t+a)),isNaN(n))return new Date(NaN)}else n=m(new Date(t+a)),n=m(new Date(t+a+n));return new Date(t+a+n)}return new Date(NaN)}function p(t,e,n){e=e||0,n=n||0;const r=new Date(0);r.setUTCFullYear(t,0,4);const a=7*e+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}const M=[31,28,31,30,31,30,31,31,30,31,30,31],D=[31,29,31,30,31,30,31,31,30,31,30,31];function T(t){return t%400===0||t%4===0&&t%100!==0}function x(t,e,n){if(e<0||e>11)return!1;if(null!=n){if(n<1)return!1;const r=T(t);if(r&&n>D[e])return!1;if(!r&&n>M[e])return!1}return!0}function Y(t,e){return!(t<0||t>52)&&(null==e||!(e<0||e>6))}function N(t,e,n){return!(t<0||t>=25)&&((null==e||!(e<0||e>=60))&&(null==n||!(n<0||n>=60)))}function S(t,e,n){const r=l(e,t=y(t,n),!0),a=new Date(t.getTime()-r),o=new Date(0);return o.setFullYear(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),o.setHours(a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds()),o}},4461:(t,e,n)=>{n.d(e,{WU:()=>et});const r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function a(t){return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const o={date:a({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},i={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(t){return(e,n)=>{let r;if("formatting"===(null!==n&&void 0!==n&&n.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=null!==n&&void 0!==n&&n.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=null!==n&&void 0!==n&&n.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function s(t){return function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(u)?function(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n;return}(u,(t=>t.test(i))):function(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n;return}(u,(t=>t.test(i)));let c;c=t.valueCallback?t.valueCallback(s):s,c=n.valueCallback?n.valueCallback(c):c;return{value:c,rest:e.slice(i.length)}}}var c;const l={code:"en-US",formatDistance:(t,e,n)=>{let a;const o=r[t];return a="string"===typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:o,formatRelative:(t,e,n,r)=>i[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(c={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=t.match(c.matchPattern);if(!n)return null;const r=n[0],a=t.match(c.parsePattern);if(!a)return null;let o=c.valueCallback?c.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:s({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:s({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:s({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:s({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let d={};function h(){return d}Math.pow(10,8);const f=6048e5,m=864e5;function g(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new t.constructor(+t):"number"===typeof t||"[object Number]"===e||"string"===typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function w(t){const e=g(t);return e.setHours(0,0,0,0),e}function b(t){const e=g(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function v(t,e){const n=w(t),r=w(e),a=+n-b(n),o=+r-b(r);return Math.round((a-o)/m)}function y(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function p(t){const e=g(t),n=y(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}function M(t){const e=g(t);return v(e,p(e))+1}function D(t,e){var n,r,a,o,i,u;const s=h(),c=null!==(n=null!==(r=null!==(a=null!==(o=null===e||void 0===e?void 0:e.weekStartsOn)&&void 0!==o?o:null===e||void 0===e||null===(i=e.locale)||void 0===i||null===(i=i.options)||void 0===i?void 0:i.weekStartsOn)&&void 0!==a?a:s.weekStartsOn)&&void 0!==r?r:null===(u=s.locale)||void 0===u||null===(u=u.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==n?n:0,l=g(t),d=l.getDay(),f=(d<c?7:0)+d-c;return l.setDate(l.getDate()-f),l.setHours(0,0,0,0),l}function T(t){return D(t,{weekStartsOn:1})}function x(t){const e=g(t),n=e.getFullYear(),r=y(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=T(r),o=y(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=T(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function Y(t){const e=x(t),n=y(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),T(n)}function N(t){const e=g(t),n=+T(e)-+Y(e);return Math.round(n/f)+1}function S(t,e){var n,r,a,o,i,u;const s=g(t),c=s.getFullYear(),l=h(),d=null!==(n=null!==(r=null!==(a=null!==(o=null===e||void 0===e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null===e||void 0===e||null===(i=e.locale)||void 0===i||null===(i=i.options)||void 0===i?void 0:i.firstWeekContainsDate)&&void 0!==a?a:l.firstWeekContainsDate)&&void 0!==r?r:null===(u=l.locale)||void 0===u||null===(u=u.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==n?n:1,f=y(t,0);f.setFullYear(c+1,0,d),f.setHours(0,0,0,0);const m=D(f,e),w=y(t,0);w.setFullYear(c,0,d),w.setHours(0,0,0,0);const b=D(w,e);return s.getTime()>=m.getTime()?c+1:s.getTime()>=b.getTime()?c:c-1}function k(t,e){var n,r,a,o,i,u;const s=h(),c=null!==(n=null!==(r=null!==(a=null!==(o=null===e||void 0===e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null===e||void 0===e||null===(i=e.locale)||void 0===i||null===(i=i.options)||void 0===i?void 0:i.firstWeekContainsDate)&&void 0!==a?a:s.firstWeekContainsDate)&&void 0!==r?r:null===(u=s.locale)||void 0===u||null===(u=u.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==n?n:1,l=S(t,e),d=y(t,0);d.setFullYear(l,0,c),d.setHours(0,0,0,0);return D(d,e)}function P(t,e){const n=g(t),r=+D(n,e)-+k(n,e);return Math.round(r/f)+1}function W(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const C={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return W("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):W(n+1,2)},d:(t,e)=>W(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>W(t.getHours()%12||12,e.length),H:(t,e)=>W(t.getHours(),e.length),m:(t,e)=>W(t.getMinutes(),e.length),s:(t,e)=>W(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return W(Math.trunc(r*Math.pow(10,n-3)),e.length)}},H="midnight",F="noon",O="morning",z="afternoon",j="evening",q="night",I={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return C.y(t,e)},Y:function(t,e,n,r){const a=S(t,r),o=a>0?a:1-a;if("YY"===e){return W(o%100,2)}return"Yo"===e?n.ordinalNumber(o,{unit:"year"}):W(o,e.length)},R:function(t,e){return W(x(t),e.length)},u:function(t,e){return W(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return W(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return W(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return C.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return W(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=P(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):W(a,e.length)},I:function(t,e,n){const r=N(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):W(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):C.d(t,e)},D:function(t,e,n){const r=M(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):W(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return W(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return W(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return W(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?F:0===r?H:r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?j:r>=12?z:r>=4?O:q,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return C.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):C.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):W(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):W(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):C.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):C.s(t,e)},S:function(t,e){return C.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return E(r);case"XXXX":case"XX":return Z(r);default:return Z(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return E(r);case"xxxx":case"xx":return Z(r);default:return Z(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+U(r,":");default:return"GMT"+Z(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+U(r,":");default:return"GMT"+Z(r,":")}},t:function(t,e,n){return W(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return W(t.getTime(),e.length)}};function U(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+W(o,2)}function E(t,e){if(t%60===0){return(t>0?"-":"+")+W(Math.abs(t)/60,2)}return Z(t,e)}function Z(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=t>0?"-":"+",r=Math.abs(t);return n+W(Math.trunc(r/60),2)+e+W(r%60,2)}const $=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},A=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},L={p:A,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return $(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",$(r,e)).replace("{{time}}",A(a,e))}},Q=/^D+$/,G=/^Y+$/,X=["D","DD","YY","YYYY"];function B(t){return t instanceof Date||"object"===typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function J(t){if(!B(t)&&"number"!==typeof t)return!1;const e=g(t);return!isNaN(Number(e))}const R=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,V=/^'([^]*?)'?$/,K=/''/g,tt=/[a-zA-Z]/;function et(t,e,n){var r,a,o,i,u,s,c,d,f,m,w,b,v,y;const p=h(),M=null!==(r=null!==(a=null===n||void 0===n?void 0:n.locale)&&void 0!==a?a:p.locale)&&void 0!==r?r:l,D=null!==(o=null!==(i=null!==(u=null!==(s=null===n||void 0===n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null===n||void 0===n||null===(c=n.locale)||void 0===c||null===(c=c.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==u?u:p.firstWeekContainsDate)&&void 0!==i?i:null===(d=p.locale)||void 0===d||null===(d=d.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==o?o:1,T=null!==(f=null!==(m=null!==(w=null!==(b=null===n||void 0===n?void 0:n.weekStartsOn)&&void 0!==b?b:null===n||void 0===n||null===(v=n.locale)||void 0===v||null===(v=v.options)||void 0===v?void 0:v.weekStartsOn)&&void 0!==w?w:p.weekStartsOn)&&void 0!==m?m:null===(y=p.locale)||void 0===y||null===(y=y.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==f?f:0,x=g(t);if(!J(x))throw new RangeError("Invalid time value");let Y=e.match(_).map((t=>{const e=t[0];if("p"===e||"P"===e){return(0,L[e])(t,M.formatLong)}return t})).join("").match(R).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:nt(t)};if(I[e])return{isToken:!0,value:t};if(e.match(tt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));M.localize.preprocessor&&(Y=M.localize.preprocessor(x,Y));const N={firstWeekContainsDate:D,weekStartsOn:T,locale:M};return Y.map((r=>{if(!r.isToken)return r.value;const a=r.value;(null!==n&&void 0!==n&&n.useAdditionalWeekYearTokens||!function(t){return G.test(t)}(a))&&(null!==n&&void 0!==n&&n.useAdditionalDayOfYearTokens||!function(t){return Q.test(t)}(a))||function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return"Use `".concat(t.toLowerCase(),"` instead of `").concat(t,"` (in `").concat(e,"`) for formatting ").concat(r," to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md")}(t,e,n);if(console.warn(r),X.includes(t))throw new RangeError(r)}(a,e,String(t));return(0,I[a[0]])(x,a,M.localize,N)})).join("")}function nt(t){const e=t.match(V);return e?e[1].replace(K,"'"):t}}}]);
//# sourceMappingURL=163.742ea6dc.chunk.js.map