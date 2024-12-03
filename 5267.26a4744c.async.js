"use strict";(self.webpackChunk_bifrostui_monorepo=self.webpackChunk_bifrostui_monorepo||[]).push([[5267],{94604:function(c,e,M){M.r(e),M.d(e,{default:function(){return F.default}});var F=M(32468)},40129:function(c,e,M){M.r(e),M.d(e,{default:function(){return f1}});var F=60,P=F*60,W=P*24,X=W*7,O=1e3,E=F*O,Y=P*O,q=W*O,e1=X*O,N="millisecond",C="second",w="minute",H="hour",S="day",D="week",g="month",j="quarter",z="year",A="date",c1="YYYY-MM-DDTHH:mm:ssZ",Q="Invalid Date",n1=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,t1=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o1={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(n){var t=["th","st","nd","rd"],l=n%100;return"["+n+(t[(l-20)%10]||t[l]||t[0])+"]"}},G=function(n,t,l){var o=String(n);return!o||o.length>=t?n:""+Array(t+1-o.length).join(l)+n},l1=function(n){var t=-n.utcOffset(),l=Math.abs(t),o=Math.floor(l/60),a=l%60;return(t<=0?"+":"-")+G(o,2,"0")+":"+G(a,2,"0")},a1=function d(n,t){if(n.date()<t.date())return-d(t,n);var l=(t.year()-n.year())*12+(t.month()-n.month()),o=n.clone().add(l,g),a=t-o<0,i=n.clone().add(l+(a?-1:1),g);return+(-(l+(t-o)/(a?o-i:i-o))||0)},i1=function(n){return n<0?Math.ceil(n)||0:Math.floor(n)},r1=function(n){var t={M:g,y:z,w:D,d:S,D:A,h:H,m:w,s:C,ms:N,Q:j};return t[n]||String(n||"").toLowerCase().replace(/s$/,"")},d1=function(n){return n===void 0},u1={s:G,z:l1,m:a1,a:i1,p:r1,u:d1},L="en",x={};x[L]=o1;var J="$isDayjsObject",U=function(n){return n instanceof T||!!(n&&n[J])},R=function d(n,t,l){var o;if(!n)return L;if(typeof n=="string"){var a=n.toLowerCase();x[a]&&(o=a),t&&(x[a]=t,o=a);var i=n.split("-");if(!o&&i.length>1)return d(i[0])}else{var u=n.name;x[u]=n,o=u}return!l&&o&&(L=o),o||!l&&L},p=function(n,t){if(U(n))return n.clone();var l=typeof t=="object"?t:{};return l.date=n,l.args=arguments,new T(l)},s1=function(n,t){return p(n,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},r=u1;r.l=R,r.i=U,r.w=s1;var m1=function(n){var t=n.date,l=n.utc;if(t===null)return new Date(NaN);if(r.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var o=t.match(n1);if(o){var a=o[2]-1||0,i=(o[7]||"0").substring(0,3);return l?new Date(Date.UTC(o[1],a,o[3]||1,o[4]||0,o[5]||0,o[6]||0,i)):new Date(o[1],a,o[3]||1,o[4]||0,o[5]||0,o[6]||0,i)}}return new Date(t)},T=function(){function d(t){this.$L=R(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[J]=!0}var n=d.prototype;return n.parse=function(l){this.$d=m1(l),this.init()},n.init=function(){var l=this.$d;this.$y=l.getFullYear(),this.$M=l.getMonth(),this.$D=l.getDate(),this.$W=l.getDay(),this.$H=l.getHours(),this.$m=l.getMinutes(),this.$s=l.getSeconds(),this.$ms=l.getMilliseconds()},n.$utils=function(){return r},n.isValid=function(){return this.$d.toString()!==Q},n.isSame=function(l,o){var a=p(l);return this.startOf(o)<=a&&a<=this.endOf(o)},n.isAfter=function(l,o){return p(l)<this.startOf(o)},n.isBefore=function(l,o){return this.endOf(o)<p(l)},n.$g=function(l,o,a){return r.u(l)?this[o]:this.set(a,l)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(l,o){var a=this,i=r.u(o)?!0:o,u=r.p(l),s=function(V,y){var h=r.w(a.$u?Date.UTC(a.$y,y,V):new Date(a.$y,y,V),a);return i?h:h.endOf(S)},v=function(V,y){var h=[0,0,0,0],k=[23,59,59,999];return r.w(a.toDate()[V].apply(a.toDate("s"),(i?h:k).slice(y)),a)},m=this.$W,I=this.$M,f=this.$D,_="set"+(this.$u?"UTC":"");switch(u){case z:return i?s(1,0):s(31,11);case g:return i?s(1,I):s(0,I+1);case D:{var b=this.$locale().weekStart||0,Z=(m<b?m+7:m)-b;return s(i?f-Z:f+(6-Z),I)}case S:case A:return v(_+"Hours",0);case H:return v(_+"Minutes",1);case w:return v(_+"Seconds",2);case C:return v(_+"Milliseconds",3);default:return this.clone()}},n.endOf=function(l){return this.startOf(l,!1)},n.$set=function(l,o){var a,i=r.p(l),u="set"+(this.$u?"UTC":""),s=(a={},a[S]=u+"Date",a[A]=u+"Date",a[g]=u+"Month",a[z]=u+"FullYear",a[H]=u+"Hours",a[w]=u+"Minutes",a[C]=u+"Seconds",a[N]=u+"Milliseconds",a)[i],v=i===S?this.$D+(o-this.$W):o;if(i===g||i===z){var m=this.clone().set(A,1);m.$d[s](v),m.init(),this.$d=m.set(A,Math.min(this.$D,m.daysInMonth())).$d}else s&&this.$d[s](v);return this.init(),this},n.set=function(l,o){return this.clone().$set(l,o)},n.get=function(l){return this[r.p(l)]()},n.add=function(l,o){var a=this,i;l=Number(l);var u=r.p(o),s=function(f){var _=p(a);return r.w(_.date(_.date()+Math.round(f*l)),a)};if(u===g)return this.set(g,this.$M+l);if(u===z)return this.set(z,this.$y+l);if(u===S)return s(1);if(u===D)return s(7);var v=(i={},i[w]=E,i[H]=Y,i[C]=O,i)[u]||1,m=this.$d.getTime()+l*v;return r.w(m,this)},n.subtract=function(l,o){return this.add(l*-1,o)},n.format=function(l){var o=this,a=this.$locale();if(!this.isValid())return a.invalidDate||Q;var i=l||c1,u=r.z(this),s=this.$H,v=this.$m,m=this.$M,I=a.weekdays,f=a.months,_=a.meridiem,b=function(h,k,B,p1){return h&&(h[k]||h(o,i))||B[k].slice(0,p1)},Z=function(h){return r.s(s%12||12,h,"0")},$=_||function(y,h,k){var B=y<12?"AM":"PM";return k?B.toLowerCase():B},V=function(h){switch(h){case"YY":return String(o.$y).slice(-2);case"YYYY":return r.s(o.$y,4,"0");case"M":return m+1;case"MM":return r.s(m+1,2,"0");case"MMM":return b(a.monthsShort,m,f,3);case"MMMM":return b(f,m);case"D":return o.$D;case"DD":return r.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return b(a.weekdaysMin,o.$W,I,2);case"ddd":return b(a.weekdaysShort,o.$W,I,3);case"dddd":return I[o.$W];case"H":return String(s);case"HH":return r.s(s,2,"0");case"h":return Z(1);case"hh":return Z(2);case"a":return $(s,v,!0);case"A":return $(s,v,!1);case"m":return String(v);case"mm":return r.s(v,2,"0");case"s":return String(o.$s);case"ss":return r.s(o.$s,2,"0");case"SSS":return r.s(o.$ms,3,"0");case"Z":return u;default:break}return null};return i.replace(t1,function(y,h){return h||V(y)||u.replace(":","")})},n.utcOffset=function(){return-Math.round(this.$d.getTimezoneOffset()/15)*15},n.diff=function(l,o,a){var i=this,u=r.p(o),s=p(l),v=(s.utcOffset()-this.utcOffset())*E,m=this-s,I=function(){return r.m(i,s)},f;switch(u){case z:f=I()/12;break;case g:f=I();break;case j:f=I()/3;break;case D:f=(m-v)/e1;break;case S:f=(m-v)/q;break;case H:f=m/Y;break;case w:f=m/E;break;case C:f=m/O;break;default:f=m;break}return a?f:r.a(f)},n.daysInMonth=function(){return this.endOf(g).$D},n.$locale=function(){return x[this.$L]},n.locale=function(l,o){if(!l)return this.$L;var a=this.clone(),i=R(l,o,!0);return i&&(a.$L=i),a},n.clone=function(){return r.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},d}(),K=T.prototype;p.prototype=K,[["$ms",N],["$s",C],["$m",w],["$H",H],["$W",S],["$M",g],["$y",z],["$D",A]].forEach(function(d){K[d[1]]=function(n){return this.$g(n,d[0],d[1])}}),p.extend=function(d,n){return d.$i||(d(n,T,p),d.$i=!0),p},p.locale=R,p.isDayjs=U,p.unix=function(d){return p(d*1e3)},p.en=x[L],p.Ls=x,p.p={};var f1=p},37794:function(c,e){e.Z=`import React, { useState } from 'react';
import { Button, Radio, RadioGroup, Stack } from '@bifrostui/react';
import './index.less';

const StackDemo = () => {
  const [stackState, setStackState] = useState({
    direction: '',
    alignItems: '',
    justifyContent: '',
    spacing: '',
    wrap: '',
  } as any);

  return (
    <Stack>
      <Stack
        style={{
          width: '150px',
          height: '150px',
        }}
        {...stackState}
      >
        <Button>\u6309\u94AE1</Button>
        <Button>\u6309\u94AE2</Button>
        <Button>\u6309\u94AE3</Button>
      </Stack>
      <div className="bui-stack-demo-options">
        <RadioGroup
          value={stackState.direction}
          onChange={(e, data) => {
            setStackState({
              ...stackState,
              direction: data.value,
            });
          }}
        >
          <div className="bui-stack-demo-options-title">direction</div>
          <Radio value="row"> row</Radio>
          <Radio value="row-reverse"> row-reverse</Radio>
          <Radio value="column">column</Radio>
          <Radio value="column-reverse">column-reverse</Radio>
        </RadioGroup>
        <RadioGroup
          value={stackState.justifyContent}
          onChange={(e, data) => {
            setStackState({
              ...stackState,
              justifyContent: data.value,
            });
          }}
        >
          <div className="bui-stack-demo-options-title"> justifyContent</div>
          <Radio value="flex-start"> flex-start</Radio>
          <Radio value="flex-end"> flex-end</Radio>
          <Radio value="center">center</Radio>
          <Radio value="space-between">space-between</Radio>
          <Radio value="space-around">space-around</Radio>
          <Radio value="space-evenly">space-evenly</Radio>
        </RadioGroup>
        <RadioGroup
          value={stackState.alignItems}
          onChange={(e, data) => {
            setStackState({
              ...stackState,
              alignItems: data.value,
            });
          }}
        >
          <div className="bui-stack-demo-options-title"> alignItems</div>
          <Radio value="flex-start"> flex-start</Radio>
          <Radio value="flex-end"> flex-end</Radio>
          <Radio value="center">center</Radio>
          <Radio value="stretch">stretch</Radio>
          <Radio value="baseline"> baseline</Radio>
        </RadioGroup>
        <RadioGroup
          value={stackState.flexWrap}
          onChange={(e, data) => {
            setStackState({
              ...stackState,
              flexWrap: data.value,
            });
          }}
        >
          <div className="bui-stack-demo-options-title"> flexWrap</div>
          <Radio value="wrap"> wrap</Radio>
          <Radio value="no-wrap"> no-wrap</Radio>
          <Radio value="wrap-reverse">wrap-reverse</Radio>
        </RadioGroup>
        <RadioGroup
          value={stackState.spacing}
          onChange={(e, data) => {
            setStackState({
              ...stackState,
              spacing: data.value,
            });
          }}
        >
          <div className="bui-stack-demo-options-title"> spacing</div>
          <Radio value="10px">10px</Radio>
          <Radio value="20px"> 20px</Radio>
          <Radio value="30px">30px</Radio>
          <Radio value="40px">40px</Radio>
          <Radio value="50px"> 50px</Radio>
        </RadioGroup>
      </div>
    </Stack>
  );
};

export default StackDemo;
`},72483:function(c,e){e.Z=`.bui-stack-demo-options {
  display: flex;
  column-gap: 30px;

  &-title {
    font-weight: 500;
  }
}

@media all and (max-width: 570px) {
  .bui-stack-demo-options {
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    &-title {
      width: 100%;
      font-size: 16px;
    }

    .bui-radio-group {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
  }
}
`},59725:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88c22.1 0 40-17.9 40-40S70.1 8 48 8 8 25.9 8 48s17.9 40 40 40zM30.9 60.9 45 46.8V30c0-1.7 1.3-3 3-3s3 1.3 3 3v18c0 .8-.3 1.6-.9 2.1l-15 15c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3 0-4.2z"/>',
  'AccessTimeCircleFilledIcon',
);
`},19306:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88c22.1 0 40-17.9 40-40S70.1 8 48 8 8 25.9 8 48s17.9 40 40 40zm0-65c2.8 0 5 2.2 5 5v20c0 1-.3 1.8-.7 2.6-.2.7-.6 1.3-1.2 1.9L35.5 68c-2 2-5.1 2-7.1 0s-2-5.1 0-7.1L43 46.4V28c0-2.8 2.2-5 5-5z"/>',
  'AccessTimeCircleFilledBoldIcon',
);
`},92821:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm16.1 46.9L50 46.8V30c0-1.7-1.3-3-3-3s-3 1.3-3 3v18c0 .8.3 1.6.9 2.1l15 15c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3 0-4.2z"/>',
  'AccessTimeCircleOutlinedIcon',
);
`},70873:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 20c2.2 0 4 1.8 4 4v20h20c2.2 0 4 1.8 4 4s-1.8 4-4 4H52v20c0 2.2-1.8 4-4 4s-4-1.8-4-4V52H24c-2.2 0-4-1.8-4-4s1.8-4 4-4h20V24c0-2.2 1.8-4 4-4z"/>',
  'AddIcon',
);
`},48326:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 22c-1.7 0-3 1.3-3 3v12H33c-1.7 0-3 1.3-3 3s1.3 3 3 3h12v12c0 1.7 1.3 3 3 3s3-1.3 3-3V51h12c1.7 0 3-1.3 3-3s-1.3-3-3-3H51V33c0-1.7-1.3-3-3-3z"/>',
  'AddCircleFilledIcon',
);
`},82755:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88c22.1 0 40-17.9 40-40S70.1 8 48 8 8 25.9 8 48s17.9 40 40 40zm3.3-43.3h13.3c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3H51.3v13.3c0 1.8-1.5 3.3-3.3 3.3s-3.3-1.5-3.3-3.3V51.3H31.3c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h13.3V31.3c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v13.4z"/>',
  'AddCircleFilledBoldIcon',
);
`},71498:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88C25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40-17.9 40-40 40zm0-6c18.8 0 34-15.2 34-34S66.8 14 48 14 14 29.2 14 48s15.2 34 34 34zm3-37h12c1.7 0 3 1.3 3 3s-1.3 3-3 3H51v12c0 1.7-1.3 3-3 3s-3-1.3-3-3V51H33c-1.7 0-3-1.3-3-3s1.3-3 3-3h12V33c0-1.7 1.3-3 3-3s3 1.3 3 3v12z"/>',
  'AddCircleOutlinedIcon',
);
`},1452:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 13c6.1 0 11 4.9 11 11v14c0 1.7-1.3 3-3 3-3.9 0-7 3.1-7 7s3.1 7 7 7c1.7 0 3 1.3 3 3v14c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V58c0-1.7 1.3-3 3-3 3.9 0 7-3.1 7-7s-3.1-7-7-7c-1.7 0-3-1.3-3-3V24c0-6.1 4.9-11 11-11h58zm0 6H19c-2.8 0-5 2.2-5 5v11.3c5.7 1.4 10 6.5 10 12.7s-4.3 11.3-10 12.7V72c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V60.7c-5.7-1.4-10-6.5-10-12.7s4.3-11.3 10-12.7V24c0-2.8-2.2-5-5-5zM48 35.5c1.7 0 3 1.3 3 3v7h7c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3h-7v7c0 1.6-1.2 2.9-2.8 3H48c-1.7 0-3-1.3-3-3v-7h-7c-1.6 0-2.9-1.2-3-2.8v-.2c0-1.7 1.3-3 3-3h7v-7c0-1.6 1.2-2.9 2.8-3h.2z"/>',
  'AddCouponOutlinedIcon',
);
`},13020:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 10c2.2 0 4 1.8 4 4v30h30c2.2 0 4 1.8 4 4s-1.8 4-4 4H52v30c0 2.2-1.8 4-4 4s-4-1.8-4-4V52H14c-2.2 0-4-1.8-4-4s1.8-4 4-4h30V14c0-2.2 1.8-4 4-4z"/>',
  'AddLargeIcon',
);
`},33619:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M18 59.2V37.9C18 21.4 31.4 8 48 8s30 13.4 30 29.9v21.3l5.7 11.3c1 2-.5 4.3-2.7 4.3H15c-2.2 0-3.7-2.3-2.7-4.3L18 59.2zm58.1 9.7-3.8-7.6c-.2-.4-.3-.9-.3-1.3V38c0-13.2-10.7-24-24-24S24 24.7 24 38v22c0 .5-.1.9-.3 1.3l-3.8 7.6h56.2zM34.6 83.2c-1.3-1.1-1.4-2.9-.4-4.2 1.1-1.3 3-1.4 4.2-.4 2.7 2.2 6 3.5 9.6 3.5 3.6 0 6.9-1.2 9.6-3.5 1.3-1.1 3.2-.9 4.2.4 1.1 1.3.9 3.2-.4 4.2C57.7 86.3 53 88 48 88s-9.7-1.7-13.4-4.8z"/>',
  'AlarmOutlinedIcon',
);
`},26982:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 51c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0-34c-2.2 0-4 1.8-4 4v22c0 2.2 1.8 4 4 4s4-1.8 4-4V29c0-2.2-1.8-4-4-4z"/>',
  'AlertCircleFilledIcon',
);
`},36945:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path class="st0" d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 50c-2.7 0-4.9 2.1-5 4.8V65c0 2.8 2.2 5 5 5 2.7 0 4.9-2.1 5-4.8V63c0-2.8-2.2-5-5-5zm0-33c-2.7 0-4.9 2.1-5 4.8V50c0 2.8 2.2 5 5 5 2.7 0 4.9-2.1 5-4.8V30c0-2.8-2.2-5-5-5z"/>',
  'AlertCircleFilledBoldIcon',
);
`},19093:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm0 47c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0-34c2.2 0 4 1.8 4 4v22c0 2.2-1.8 4-4 4s-4-1.8-4-4V31c0-2.2 1.8-4 4-4z"/>',
  'AlertCircleOutlinedIcon',
);
`},90407:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M31.9 19c11.7 0 23.6 8.1 36 23.9 4-5.2 8.3-7.9 12.9-7.9C87.6 35 93 40.9 93 48s-5.4 13-12.2 13c-4.6 0-8.9-2.7-12.9-7.9C55.5 68.9 43.6 77 31.9 77 15.9 77 3 64 3 48s12.9-29 28.9-29zm0 6C19.3 25 9 35.3 9 48s10.3 23 22.9 23c9.7 0 20.6-7.6 32.3-23-11.7-15.4-22.5-23-32.3-23zm4.2 24.7c1.3-1.1 3.2-.9 4.2.4 1.1 1.3.9 3.2-.4 4.2L36.7 57l3.2 2.7c1.3 1.1 1.4 3 .4 4.2-1.1 1.3-3 1.4-4.2.4l-6-5c-1.4-1.2-1.4-3.4 0-4.6l6-5zm-13-9c1.3-1.1 3.2-.9 4.2.4 1.1 1.3.9 3.2-.4 4.2L23.7 48l3.2 2.7c1.3 1.1 1.4 3 .4 4.2-1.1 1.3-3 1.4-4.2.4l-6-5c-1.4-1.2-1.4-3.4 0-4.6l6-5zm57.7.3c-2.8 0-5.9 2.2-9.1 6.9l.1.1-.1.1c3.3 4.7 6.4 6.9 9.1 6.9 3.4 0 6.2-3.1 6.2-7s-2.8-7-6.2-7zm-44.7-9.3c1.3-1.1 3.2-.9 4.2.4 1.1 1.3.9 3.2-.4 4.2L36.7 39l3.2 2.7c1.3 1.1 1.4 3 .4 4.2-1.1 1.3-3 1.4-4.2.4l-6-5c-1.4-1.2-1.4-3.4 0-4.6l6-5z"/>',
  'AliFishOutlinedIcon',
);
`},59186:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 81c-18.2 0-33-14.8-33-33s14.8-33 33-33 33 14.8 33 33-14.8 33-33 33zm0-6c14.9 0 27-12.1 27-27S62.9 21 48 21 21 33.1 21 48s12.1 27 27 27zM34.6 64.2c-1.3-1.1-1.4-3-.4-4.2 1.1-1.3 3-1.4 4.2-.4 2.7 2.2 6 3.5 9.6 3.5 3.6 0 6.9-1.2 9.6-3.5 1.3-1.1 3.2-.9 4.2.4 1.1 1.3.9 3.2-.4 4.2C57.7 67.3 53 69 48 69s-9.7-1.7-13.4-4.8zM7.1 36c.6-1.6 2.3-2.4 3.8-1.8s2.4 2.3 1.8 3.8c-1.1 3.2-1.7 6.6-1.7 10 0 3.4.6 6.8 1.7 10 .6 1.6-.3 3.3-1.8 3.8s-3.3-.2-3.8-1.8C5.7 56.1 5 52.1 5 48s.7-8.1 2.1-12zm81.8 0c1.4 3.9 2.1 7.9 2.1 12s-.7 8.1-2.1 12c-.6 1.6-2.3 2.4-3.8 1.8s-2.4-2.3-1.8-3.8c1.2-3.2 1.7-6.6 1.7-10 0-3.4-.6-6.8-1.7-10-.6-1.6.3-3.3 1.8-3.8s3.3.2 3.8 1.8zM59 34c1.7 0 3 1.3 3 3v4c0 1.7-1.3 3-3 3s-3-1.3-3-3v-4c0-1.7 1.4-3 3-3zm-22 0c1.7 0 3 1.3 3 3v4c0 1.7-1.3 3-3 3s-3-1.3-3-3v-4c0-1.7 1.3-3 3-3z"/>',
  'AliSweetOutlinedIcon',
);
`},24420:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 7.8c6.5 0 12.8 1.6 18.4 4.5C71.5 10.1 77 9 83 9c2.2 0 3.7 2.3 2.7 4.3-2 4-3.8 7.6-5.3 10.9 4.9 6.8 7.6 15 7.6 23.6 0 22.1-17.9 40-40 40S8 69.9 8 47.8s17.9-40 40-40zM31 34c-2.2 0-4 1.8-4 4v6c0 2.2 1.8 4 4 4s4-1.8 4-4v-6c0-2.2-1.8-4-4-4zm16 0c-2.2 0-4 1.8-4 4v6c0 2.2 1.8 4 4 4s4-1.8 4-4v-6c0-2.2-1.8-4-4-4z"/>',
  'AliWangWangFilledIcon',
);
`},85778:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M83 9c2.2 0 3.7 2.3 2.7 4.3-2 4-3.8 7.6-5.3 10.9 4.9 6.8 7.6 15 7.6 23.6 0 22.1-17.9 40-40 40S8 69.9 8 47.8s17.9-40 40-40c6.5 0 12.8 1.6 18.4 4.5C71.5 10.1 77 9 83 9zm-15.4 9.3c-.9.4-1.9.4-2.8-.1-5.1-2.9-10.8-4.4-16.8-4.4-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34c0-7.9-2.7-15.3-7.5-21.3-.7-.9-.9-2.1-.4-3.2 1.2-2.4 2.4-5.1 3.9-8-3.7.5-7.2 1.5-10.4 3zM31 34c2.2 0 4 1.8 4 4v6c0 2.2-1.8 4-4 4s-4-1.8-4-4v-6c0-2.2 1.8-4 4-4zm16 0c2.2 0 4 1.8 4 4v6c0 2.2-1.8 4-4 4s-4-1.8-4-4v-6c0-2.2 1.8-4 4-4z"/>',
  'AliWangWangOutlinedIcon',
);
`},81560:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M79 37c3.9 0 7 3.1 7 7v8c0 3.9-3.1 7-7 7H17c-3.9 0-7-3.1-7-7v-8c0-3.9 3.1-7 7-7h62zm0 6H17c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h62c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zM48 14c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3s-3-1.3-3-3V17c0-1.7 1.3-3 3-3zm0 49c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3s-3-1.3-3-3V66c0-1.7 1.3-3 3-3z"/>',
  'AlignCenterFilledIcon',
);
`},34278:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M79 51c3.9 0 7 3.1 7 7v8c0 3.9-3.1 7-7 7H31c-3.9 0-7-3.1-7-7v-8c0-3.9 3.1-7 7-7h48zm0 6H31c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h48c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zM62 23c3.9 0 7 3.1 7 7v8c0 3.9-3.1 7-7 7H31c-3.9 0-7-3.1-7-7v-8c0-3.9 3.1-7 7-7h31zm0 6H31c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h31c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zM13 14c1.7 0 3 1.3 3 3v62c0 1.7-1.3 3-3 3s-3-1.3-3-3V17c0-1.7 1.3-3 3-3z"/>',
  'AlignLeftFilledIcon',
);
`},81781:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M65 51c3.9 0 7 3.1 7 7v8c0 3.9-3.1 7-7 7H17c-3.9 0-7-3.1-7-7v-8c0-3.9 3.1-7 7-7h48zm0 6H17c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h48c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm0-34c3.9 0 7 3.1 7 7v8c0 3.9-3.1 7-7 7H34c-3.9 0-7-3.1-7-7v-8c0-3.9 3.1-7 7-7h31zm0 6H34c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h31c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm18-15c1.7 0 3 1.3 3 3v62c0 1.7-1.3 3-3 3s-3-1.3-3-3V17c0-1.7 1.3-3 3-3z"/>',
  'AlignRightFilledIcon',
);
`},96210:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m40.9 48 22.8-21.1c1.6-1.5 1.7-4 .2-5.7-1.5-1.6-4-1.7-5.7-.2l-26 24a4.05 4.05 0 0 0 0 5.9l26 24c1.6 1.5 4.2 1.4 5.7-.2 1.5-1.6 1.4-4.2-.2-5.7L40.9 48z"/>',
  'ArrowBackwardIcon',
);
`},28987:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M16.4 48 50 17.2c1.2-1.1 1.3-3 .2-4.2-1.1-1.2-3-1.3-4.2-.2l-36 33a2.97 2.97 0 0 0 0 4.4l36 33c1.2 1.1 3.1 1 4.2-.2s1-3.1-.2-4.2L16.4 48z"/>',
  'ArrowBackwardLargeIcon',
);
`},52006:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m48 55.1 21.1-22.8c1.5-1.6 4-1.7 5.7-.2 1.6 1.5 1.7 4 .2 5.7l-24 26a4.05 4.05 0 0 1-5.9 0l-24-26c-1.5-1.6-1.4-4.2.2-5.7 1.6-1.5 4.2-1.4 5.7.2l21 22.8z"/>',
  'ArrowDownwardIcon',
);
`},92319:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 61.6 78.8 28c1.1-1.2 3-1.3 4.2-.2 1.2 1.1 1.3 3 .2 4.2l-33 36a2.97 2.97 0 0 1-4.4 0l-33-36c-1.1-1.2-1-3.1.2-4.2s3.1-1 4.2.2L48 61.6z"/>',
  'ArrowDownwardLargeIcon',
);
`},84491:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M55.1 48 32.3 26.9c-1.6-1.5-1.7-4-.2-5.7 1.5-1.6 4-1.7 5.7-.2l26 24c1.7 1.6 1.7 4.3 0 5.9l-26 24c-1.6 1.5-4.2 1.4-5.7-.2-1.5-1.6-1.4-4.2.2-5.7l22.8-21z"/>',
  'ArrowForwardIcon',
);
`},57:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M76.6 48 43 17.2c-1.2-1.1-1.3-3-.2-4.2s3-1.3 4.2-.2l36 33c1.3 1.2 1.3 3.2 0 4.4l-36 33c-1.2 1.1-3.1 1-4.2-.2s-1-3.1.2-4.2L76.6 48z"/>',
  'ArrowForwardLargeIcon',
);
`},15581:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm2.3 15.1 11.1 11.1c1.1 1.1 1.1 3-.1 4.2-1.2 1.2-3.1 1.2-4.2.1l-6.2-6.2v26.8c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9V38.6l-6.3 6.3c-1.1 1.1-2.9 1.2-4.1.2l-.1-.1c-1.1-1.1-1.1-3 .1-4.2l11.5-11.5c1.1-1.3 3-1.4 4.1-.2z"/>',
  'ArrowUpCircleOutlinedIcon',
);
`},74668:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m48 40.9 21.1 22.8c1.5 1.6 4 1.7 5.7.2 1.6-1.5 1.7-4 .2-5.7l-24-26a4.05 4.05 0 0 0-5.9 0l-24 26c-1.5 1.6-1.4 4.2.2 5.7 1.6 1.5 4.2 1.4 5.7-.2l21-22.8z"/>',
  'ArrowUpwardIcon',
);
`},7107:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 34.4 17.2 68c-1.1 1.2-3 1.3-4.2.2-1.2-1.1-1.3-3-.2-4.2l33-36c1.2-1.3 3.2-1.3 4.4 0l33 36c1.1 1.2 1 3.1-.2 4.2s-3.1 1-4.2-.2L48 34.4z"/>',
  'ArrowUpwardLargeIcon',
);
`},2906:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M51 62c0 1.7-1.3 3-3 3s-3-1.3-3-3V34c0-1.7 1.3-3 3-3s3 1.3 3 3v28zm15 0c0 1.7-1.3 3-3 3s-3-1.3-3-3V46c0-1.7 1.3-3 3-3s3 1.3 3 3v16zm-30 0c0 1.7-1.3 3-3 3s-3-1.3-3-3V42c0-1.7 1.3-3 3-3s3 1.3 3 3v20zM19 13h58c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V24c0-6.1 4.9-11 11-11zm0 6c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V24c0-2.8-2.2-5-5-5H19z"/>',
  'AssessmentOutlinedIcon',
);
`},90655:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M58 8c3.5 0 6.4 2.6 6.9 6H72c6.1 0 11 4.9 11 11v52c0 6.1-4.9 11-11 11H24c-6.1 0-11-4.9-11-11V25c0-6.1 4.9-11 11-11h7.1c.5-3.4 3.4-6 6.9-6h20zm14 12h-7.1c-.5 3.4-3.4 6-6.9 6H38c-3.5 0-6.4-2.6-6.9-6H24c-2.8 0-5 2.2-5 5v52c0 2.8 2.2 5 5 5h48c2.8 0 5-2.2 5-5V25c0-2.8-2.2-5-5-5zM44 65c1.7 0 3 1.3 3 3s-1.3 3-3 3H32c-1.7 0-3-1.3-3-3s1.3-3 3-3h12zm10-14c1.7 0 3 1.3 3 3s-1.3 3-3 3H32c-1.7 0-3-1.3-3-3s1.3-3 3-3h22zm10-14c1.7 0 3 1.3 3 3s-1.3 3-3 3H32c-1.7 0-3-1.3-3-3s1.3-3 3-3h32zm-6-23H38c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h20c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1z"/>',
  'AssignmentOutlinedIcon',
);
`},3121:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 12c15.3 0 28.6 9.6 33.8 23.6C87.2 37.2 91 42.2 91 48s-3.8 10.8-9.2 12.4C76.6 74.4 63.3 84 48 84s-28.6-9.6-33.8-23.6C8.8 58.8 5 53.8 5 48s3.8-10.8 9.2-12.4C19.4 21.6 32.7 12 48 12zm0 6c-13.2 0-24.7 8.6-28.6 21-.3 1.1-1.3 1.9-2.4 2.1-3.4.5-6 3.4-6 6.9s2.6 6.4 6 6.9c1.1.2 2.1 1 2.4 2.1C23.3 69.4 34.8 78 48 78s24.7-8.6 28.6-21c.3-1.1 1.3-1.9 2.4-2.1 3.4-.5 6-3.4 6-6.9s-2.6-6.4-6-6.9c-1.1-.2-2.1-1-2.4-2.1-2.1-6.7-6.4-12.3-12.1-16-1.6 6.5-7.3 9.3-16 8-1.6-.3-2.8-1.8-2.5-3.4.3-1.6 1.8-2.8 3.4-2.5 6.5 1 9.2-.5 9.5-5C55.5 18.7 51.8 18 48 18zM34.2 59.9c1.1-1.3 3-1.4 4.2-.4 2.7 2.2 6 3.5 9.6 3.5 3.6 0 6.9-1.2 9.6-3.5 1.3-1.1 3.2-.9 4.2.4 1.1 1.3.9 3.2-.4 4.2C57.7 67.3 53 69 48 69s-9.7-1.7-13.4-4.8c-1.3-1.1-1.5-3-.4-4.3zM36 38c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4s-4-1.8-4-4v-4c0-2.2 1.8-4 4-4zm24 0c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4s-4-1.8-4-4v-4c0-2.2 1.8-4 4-4z"/>',
  'BabyOutlinedIcon',
);
`},257:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M88 31H8v-7c0-6.1 4.9-11 11-11h58c6.1 0 11 4.9 11 11v7zm0 6v35c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V37h80zM71 63H61c-1.7 0-3 1.3-3 3s1.3 3 3 3h10c1.7 0 3-1.3 3-3s-1.3-3-3-3z"/>',
  'BankCardFilledIcon',
);
`},86759:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M82 37H14v35c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V37zm-68-6h68v-7c0-2.8-2.2-5-5-5H19c-2.8 0-5 2.2-5 5v7zm57 32c1.7 0 3 1.3 3 3s-1.3 3-3 3H61c-1.7 0-3-1.3-3-3s1.3-3 3-3h10zM19 13h58c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V24c0-6.1 4.9-11 11-11z"/>',
  'BankCardOutlinedIcon',
);
`},83049:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88c22.1 0 40-17.9 40-40S70.1 8 48 8 8 25.9 8 48s17.9 40 40 40zM33 45h30c1.7 0 3 1.3 3 3s-1.3 3-3 3H33c-1.7 0-3-1.3-3-3s1.3-3 3-3z"/>',
  'BlockCircleFilledIcon',
);
`},41139:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88C25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40-17.9 40-40 40zm0-6c18.8 0 34-15.2 34-34S66.8 14 48 14 14 29.2 14 48s15.2 34 34 34zM33 45h30c1.7 0 3 1.3 3 3s-1.3 3-3 3H33c-1.7 0-3-1.3-3-3s1.3-3 3-3z"/>',
  'BlockCircleOutlinedIcon',
);
`},93997:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 3.3c-20.3 0-36.7 16.4-36.7 36.7S27.7 84.7 48 84.7 84.7 68.3 84.7 48 68.3 11.3 48 11.3zm16.7 33.4c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3H31.3c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h33.4z"/>',
  'BlockCircleOutlinedThinIcon',
);
`},26386:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M20.7 18.2c2.1-5.9 9.3-8.3 15.8-6L74.1 26H77c6.1 0 11 4.9 11 11v11c0 1.7-1.3 3-3 3-3.3 0-6 2.7-6 6s2.7 6 6 6c1.7 0 3 1.3 3 3v11c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V66c0-1.7 1.3-3 3-3 3.3 0 6-2.7 6-6s-2.7-6-6-6c-1.7 0-3-1.3-3-3V37c0-5.7 4.3-10.4 9.8-10.9l2.9-7.9zM77 32H19c-2.8 0-5 2.2-5 5v8.4c5.2 1.3 9 6 9 11.6s-3.8 10.3-9 11.6V77c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5v-8.4c-5.2-1.3-9-6-9-11.6s3.8-10.3 9-11.6V37c0-2.8-2.2-5-5-5zM60 60.6c1.7 0 3 1.3 3 3s-1.3 3-3 3H36c-1.7 0-3-1.3-3-3s1.3-3 3-3h24zm0-14c1.7 0 3 1.3 3 3s-1.3 3-3 3H36c-1.7 0-3-1.3-3-3s1.3-3 3-3h24zM34.4 17.9c-3.7-1.3-7.2-.1-8.1 2.4L24.2 26h32.4l-22.2-8.1z"/>',
  'BogoOutlinedIcon',
);
`},96718:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M37.1 55H21c-2.1 0-3.6-2.1-2.8-4.1l16-42C34.6 7.8 35.8 7 37 7h27c2.1 0 3.6 2.2 2.8 4.1L57.5 34H75c2.6 0 4 3 2.3 5l-43 49c-2.1 2.4-6 .3-5.2-2.7l8-30.3z"/>',
  'BoltFilledIcon',
);
`},28942:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M37.1 55H21c-2.1 0-3.6-2.1-2.8-4.1l16-42C34.6 7.8 35.8 7 37 7h27c2.1 0 3.6 2.2 2.8 4.1L57.5 34H75c2.6 0 4 3 2.3 5l-43 49c-2.1 2.4-6 .3-5.2-2.7l8-30.3zm2-42L25.4 49H41c2 0 3.4 1.9 2.9 3.8l-5.7 21.7L68.4 40H53c-2.1 0-3.6-2.2-2.8-4.1L59.5 13H39.1z"/>',
  'BoltOutlinedIcon',
);
`},21590:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M14 82V19c0-6.1 4.9-11 11-11h26c6.1 0 11 4.9 11 11v6.2l14.1 7.3c3.6 1.9 5.9 5.7 5.9 9.8V82h3c1.7 0 3 1.3 3 3s-1.3 3-3 3H11c-1.7 0-3-1.3-3-3s1.3-3 3-3h3zm48 0h14V42.2c0-1.9-1-3.6-2.7-4.4L62 31.9V82zm-42 0h36V19c0-2.8-2.2-5-5-5H25c-2.8 0-5 2.2-5 5v63z"/>',
  'BuildingOutlinedIcon',
);
`},69839:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M65 10c1.7 0 3 1.3 3 3v3h7c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H21c-6.1 0-11-4.9-11-11V27c0-6.1 4.9-11 11-11h7v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3h28v-3c0-1.7 1.3-3 3-3zM28 22h-7c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V27c0-2.8-2.2-5-5-5h-7v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3H34v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3zm39.1 11.9c1.1 1.1 1.2 2.9.1 4.1l-.1.1-3.2 3.2c4 3 7.1 7 9 11.7-4 10-13.7 17-25.1 17-3.7 0-7.2-.7-10.5-2.1l-4.2 4.2c-1.2 1.2-3.1 1.2-4.2 0-1.1-1.1-1.2-2.9-.1-4.1l.1-.1 3-3c-4.1-3-7.3-7.1-9.2-11.8 4-10 13.7-17 25.1-17 3.8 0 7.4.8 10.7 2.2l4.3-4.3c1.3-1.3 3.1-1.3 4.3-.1zm-7.5 11.7L42 63.2c1.7.5 3.5.8 5.4.8h.4c7.7 0 14.7-4.2 18.3-10.8l.1-.2-.1-.2c-1.6-2.9-3.8-5.4-6.5-7.2zM47.8 42c-7.7 0-14.7 4.2-18.3 10.8l-.2.2.1.2c1.7 3 4 5.5 6.8 7.3l17.6-17.6c-1.8-.5-3.7-.9-5.7-.9h-.3z"/>',
  'CalendarInvisibleOutlinedIcon',
);
`},17330:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M68 16h7c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H21c-6.1 0-11-4.9-11-11V27c0-6.1 4.9-11 11-11h7v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3h28v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3zm0 6v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3H34v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3h-7c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V27c0-2.8-2.2-5-5-5h-7zm-1 21c1.7 0 3 1.3 3 3s-1.3 3-3 3H29c-1.7 0-3-1.3-3-3s1.3-3 3-3h38zM55 58c1.7 0 3 1.3 3 3s-1.3 3-3 3H29c-1.7 0-3-1.3-3-3s1.3-3 3-3h26z"/>',
  'CalendarOutlinedIcon',
);
`},24676:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M65 10c1.7 0 3 1.3 3 3v3h7c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H21c-6.1 0-11-4.9-11-11V27c0-6.1 4.9-11 11-11h7v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3h28v-3c0-1.7 1.3-3 3-3zM28 22h-7c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V27c0-2.8-2.2-5-5-5h-7v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3H34v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3zm19.8 14c11.4 0 21.1 7 25.1 17-4 10-13.7 17-25.1 17s-21.1-7-25.1-17c4-10 13.7-17 25.1-17zm0 6c-7.7 0-14.7 4.2-18.3 10.8l-.2.2.1.2C33 59.6 39.8 63.8 47.3 64h.4c7.7 0 14.7-4.2 18.3-10.8l.1-.2-.1-.2C62.6 46.3 55.8 42.1 48.2 42h-.4zm.2 5c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z"/>',
  'CalendarVisibleOutlinedIcon',
);
`},55512:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M61.9 12c3.1 0 5.8 2 6.7 4.9l2.2 7.1H77c6.1 0 11 4.9 11 11v40c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V35c0-6.1 4.9-11 11-11h6.3l2.2-7.1c.9-2.9 3.6-4.9 6.7-4.9h27.7zM48 38c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 24c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z"/>',
  'CameraFilledIcon',
);
`},94121:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m25.3 24 2.2-7.1c.9-2.9 3.6-4.9 6.7-4.9h27.7c3.1 0 5.8 2 6.7 4.9l2.2 7.1H77c6.1 0 11 4.9 11 11v40c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V35c0-6.1 4.9-11 11-11h6.3zm2.2 6H19c-2.8 0-5 2.2-5 5v40c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V35c0-2.8-2.2-5-5-5h-8.5c-1.3 0-2.5-.9-2.9-2.1l-2.8-9.2c-.1-.4-.5-.7-1-.7H34.1c-.4 0-.8.3-1 .7l-2.8 9.2c-.3 1.2-1.5 2.1-2.8 2.1zM48 68c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15zm0-6c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z"/>',
  'CameraOutlinedIcon',
);
`},13191:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M78 37H18v15h20c1.7 0 3 1.3 3 3 0 3.9 3.1 7 7 7s7-3.1 7-7c0-1.7 1.3-3 3-3h20V37zm0-6V21c0-2.8-2.2-5-5-5H23c-2.8 0-5 2.2-5 5v10h60zm0 27H60.7c-1.4 5.7-6.5 10-12.7 10s-11.3-4.3-12.7-10H18v17c0 2.8 2.2 5 5 5h50c2.8 0 5-2.2 5-5V58zM23 10h50c6.1 0 11 4.9 11 11v54c0 6.1-4.9 11-11 11H23c-6.1 0-11-4.9-11-11V21c0-6.1 4.9-11 11-11z"/>',
  'CardPackageOutlinedIcon',
);
`},69292:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M50 58.1c-.1.2-.3.3-.5.5-1.1.8-2.6.6-3.4-.5L32.5 40.8c-.3-.4-.5-.9-.5-1.4 0-1.3 1.1-2.4 2.5-2.4h27.1c.5 0 1.1.2 1.5.5 1.1.8 1.3 2.3.5 3.3L50 58.1z"/>',
  'CaretDownIcon',
);
`},56678:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M37.9 46c-.2.1-.3.3-.5.5-.8 1.1-.6 2.6.5 3.4l17.3 13.5c.4.3.9.5 1.4.5 1.3 0 2.4-1.1 2.4-2.5V34.5c0-.5-.2-1.1-.5-1.5-.8-1.1-2.3-1.3-3.3-.5L37.9 46z"/>',
  'CaretLeftIcon',
);
`},43363:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M58.1 46c.2.1.3.3.5.5.8 1.1.6 2.6-.5 3.4L40.8 63.5c-.4.3-.9.5-1.4.5-1.3 0-2.4-1.1-2.4-2.5v-27c0-.5.2-1.1.5-1.5.8-1.1 2.3-1.3 3.3-.5L58.1 46z"/>',
  'CaretRightIcon',
);
`},10283:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M50 37.9c-.1-.2-.3-.3-.5-.5-1.1-.8-2.6-.6-3.4.5L32.5 55.2c-.3.4-.5.9-.5 1.4 0 1.3 1.1 2.4 2.5 2.4h27.1c.5 0 1.1-.2 1.5-.5 1.1-.8 1.3-2.3.5-3.3L50 37.9z"/>',
  'CaretUpIcon',
);
`},8402:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8C25.9 8 8 25.9 8 48s17.9 40 40 40c7.3 0 14.4-2 20.5-5.7.2-.1.9-.5 1.9-1.1l9.8 2.7c2.2.6 4.3-1.4 3.7-3.7l-2.7-9.8c1-1.8 1.7-2.9 2-3.6C86.4 61.1 88 54.7 88 48 88 25.9 70.1 8 48 8zm9.6 51.5c1.3-1.1 3.2-.9 4.2.4 1.1 1.3.9 3.2-.4 4.2C57.7 67.3 53 69 48 69s-9.7-1.7-13.4-4.8c-1.3-1.1-1.4-3-.4-4.2 1.1-1.3 3-1.4 4.2-.4 2.7 2.2 6 3.5 9.6 3.5 3.6-.1 6.9-1.3 9.6-3.6z"/>',
  'ChatFilledIcon',
);
`},1786:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M81.2 70.4c1-1.8 1.7-2.9 2-3.6C86.4 61.1 88 54.7 88 48 88 25.9 70.1 8 48 8S8 25.9 8 48s17.9 40 40 40c7.3 0 14.4-2 20.5-5.7.2-.1.9-.5 1.9-1.1l9.8 2.7c2.2.6 4.3-1.4 3.7-3.7l-2.7-9.8zm-6.1.4 1.6 5.9-5.9-1.6c-.8-.2-1.6-.1-2.3.3-1.7 1-2.7 1.6-3 1.8C60.2 80.3 54.2 82 48 82c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34c0 5.7-1.4 11.2-4 16-.3.6-1.2 2.1-2.6 4.4-.4.8-.5 1.6-.3 2.4z"/>',
  'ChatOutlinedIcon',
);
`},75820:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m30.2 43.1 22.6 22.6c1.5 1.5 1 4-.9 4.9l-39.6 17c-2.5 1.1-5-1.5-3.9-3.9l17-39.6c.8-2 3.3-2.5 4.8-1zm-8.2 24-5.1 12 5.1-2.2v-9.8zm7.1-16.6L28 53.1v21.2l5-2.1V54.4l-3.9-3.9zm9.9 9.9v9.3l6.5-2.8-6.5-6.5zm50.2-7.3c.1.3.1.5 0 .8l-1.3 2.9c-.1.3-.1.5 0 .8l1.3 2.9c.2.5 0 1.1-.5 1.3-.3.1-.5.1-.8 0L85 60.6c-.3-.1-.5-.1-.8 0l-2.9 1.3c-.5.2-1.1 0-1.3-.5-.1-.3-.1-.5 0-.8l1.3-2.9c.1-.3.1-.5 0-.8L80 54c-.2-.5 0-1.1.5-1.3.3-.1.5-.1.8 0l2.9 1.3c.3.1.5.1.8 0l2.9-1.3c.5-.4 1.1-.1 1.3.4zm-14.6 0c1.5.7 2.1 2.5 1.3 4-.7 1.5-2.5 2.1-4 1.3-2.8-1.4-5.8-2-9.1-1.7-3 .3-5.2 1.5-6.9 3.7-1 1.3-2.9 1.6-4.2.6-1.3-1-1.6-2.9-.6-4.2 2.7-3.6 6.5-5.6 11.1-6.1 4.4-.3 8.6.5 12.4 2.4zm-9.8-21.4c1.1 1.1 1.2 2.9.1 4.1l-.1.2-17 17c-1.2 1.2-3.1 1.2-4.2 0-1.1-1.1-1.2-2.9-.1-4.1l.1-.1 17-17c1.1-1.2 3-1.2 4.2-.1zm-21.4-9.8c1.9 3.8 2.7 8 2.3 12.3-.4 4.6-2.5 8.4-6.1 11.1-1.3 1-3.2.7-4.2-.6-1-1.3-.7-3.2.6-4.2 2.2-1.7 3.4-3.9 3.7-6.9.3-3.2-.2-6.2-1.7-9.1-.7-1.5-.2-3.3 1.3-4 1.6-.7 3.4-.1 4.1 1.4zm32.5 18.7c.4 1.5-.5 3.1-2 3.6l-.2.1-3.9 1c-1.6.4-3.2-.5-3.7-2.1-.4-1.5.5-3.1 2-3.6l.2-.1 3.9-1c1.6-.4 3.2.5 3.7 2.1zm7.7-2.1c.4 1.5-.5 3.1-2 3.6l-.2.1-.4.1c-1.6.4-3.2-.5-3.7-2.1-.4-1.5.5-3.1 2-3.6l.2-.1.5-.1c1.5-.4 3.2.5 3.6 2.1zM55.9 20.6c1.5.4 2.5 2 2.2 3.5v.2l-1 3.9-.1.2c-.5 1.5-2.1 2.4-3.6 2-1.5-.4-2.5-2-2.2-3.5v-.2l1-3.9.1-.2c.5-1.5 2.1-2.4 3.6-2zm20.6-.1c.1.3.1.5 0 .8l-1.3 2.9c-.1.3-.1.5 0 .8l1.3 2.9c.2.5 0 1.1-.5 1.3-.3.1-.5.1-.8 0l-3-1.2c-.3-.1-.5-.1-.8 0l-2.9 1.3c-.5.2-1.1 0-1.3-.5-.1-.3-.1-.5 0-.8l1.3-2.9c.1-.3.1-.5 0-.8l-1.3-2.9c-.2-.5 0-1.1.5-1.3.3-.1.5-.1.8 0l2.9 1.3c.3.1.5.1.8 0l2.9-1.3c.6-.3 1.2-.1 1.4.4zM58 12.9c1.5.4 2.5 2 2.2 3.5v.2l-.2.5-.1.2c-.5 1.5-2.1 2.4-3.6 2-1.5-.4-2.5-2-2.2-3.5v-.2l.1-.5.1-.2c.5-1.5 2.1-2.4 3.7-2zM36 7.3l2.9 1.3c.3.1.5.1.8 0l2.9-1.3c.5-.2 1.1 0 1.3.5.1.3.1.5 0 .8l-1.3 2.9c-.1.3-.1.5 0 .8l1.3 2.9c.2.5 0 1.1-.5 1.3-.3.1-.5.1-.8 0l-2.9-1.3c-.3-.1-.5-.1-.8 0L36 16.6c-.5.2-1.1 0-1.3-.5-.1-.3-.1-.5 0-.8l1.3-2.9c.1-.3.1-.5 0-.8l-1.3-2.9c-.2-.5 0-1.1.5-1.3.2-.2.5-.2.8-.1z"/>',
  'CheerOutlinedIcon',
);
`},24991:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M19 13h58c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V24c0-6.1 4.9-11 11-11zm0 6c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V24c0-2.8-2.2-5-5-5H19zm15 26.9 2.1-6.8a3.037 3.037 0 0 1 5.8 1.8l-5 16c-.9 2.8-4.8 2.8-5.7 0l-5-16a3.037 3.037 0 0 1 5.8-1.8l2 6.8zM45 40c0-1.7 1.3-3 3-3s3 1.3 3 3v16c0 1.7-1.3 3-3 3s-3-1.3-3-3V40zm15 11v5c0 1.7-1.3 3-3 3s-3-1.3-3-3V40c0-1.7 1.3-3 3-3h6c3.9 0 7 3.1 7 7s-3.1 7-7 7h-3zm0-6h3c.6 0 1-.4 1-1s-.4-1-1-1h-3v2z"/>',
  'CinemaCardOutlinedIcon',
);
`},1331:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M81 80c1.7 0 3 1.3 3 3s-1.3 3-3 3H15c-1.7 0-3-1.3-3-3s1.3-3 3-3h66zm-4-70c6.1 0 11 4.9 11 11v50.7c0 2.2-1.8 4-4 4-1.3 0-2.6-.7-3.3-1.8L63 47c-4.1 2-9.1 3-15 3s-10.9-1-15-3L15.3 73.8c-1.2 1.8-3.7 2.4-5.5 1.1C8.7 74.3 8 73 8 71.7V21c0-6.1 4.9-11 11-11h58z"/>',
  'CinemaFilledIcon',
);
`},61290:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M81 80c1.7 0 3 1.3 3 3s-1.3 3-3 3H15c-1.7 0-3-1.3-3-3s1.3-3 3-3h66zm-4-70c6.1 0 11 4.9 11 11v50.7c0 2.2-1.8 4-4 4-1.3 0-2.6-.7-3.3-1.8L63 47c-4.1 2-9.1 3-15 3s-10.9-1-15-3L15.3 73.8c-1.2 1.8-3.7 2.4-5.5 1.1C8.7 74.3 8 73 8 71.7V21c0-6.1 4.9-11 11-11h58zm0 6H19c-2.8 0-5 2.2-5 5v44l15.5-23.6c.9-1.4 2.8-1.8 4.2-.9C37.1 42.8 41.9 44 48 44s10.9-1.2 14.3-3.5c1.4-.9 3.3-.5 4.2.9L82 65V21c0-2.8-2.2-5-5-5z"/>',
  'CinemaOutlinedIcon',
);
`},93998:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88C25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40-17.9 40-40 40zm0-6c18.8 0 34-15.2 34-34S66.8 14 48 14 14 29.2 14 48s15.2 34 34 34z"/>',
  'CircleOutlinedIcon',
);
`},17875:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<g fill-rule="nonzero"><path d="M48.28 21.078c-11.934 0-22.961 6.248-28.93 16.389a32.247 32.247 0 0 0 0 32.78c5.966 10.14 16.996 16.388 28.93 16.388 18.445 0 33.4-14.677 33.4-32.78 0-18.1-14.955-32.777-33.4-32.777ZM5.331 53.855c0-15.052 8.187-28.966 21.472-36.497a43.657 43.657 0 0 1 42.948 0C83.04 24.888 91.224 38.8 91.224 53.855 91.227 77.135 72 96 48.28 96 24.56 96 5.332 77.132 5.332 53.855ZM68.544 1.607a4.83 4.83 0 0 1 6.739-.445l19.085 16.39a4.623 4.623 0 0 1 .454 6.609c-1.736 1.946-4.752 2.146-6.736.442L68.997 8.217a4.621 4.621 0 0 1-.453-6.607v-.003Z"/><path d="M27.396 1.578a4.827 4.827 0 0 0-3.27-1.563 4.868 4.868 0 0 0-3.453 1.128L1.625 17.23a4.49 4.49 0 0 0-.448 6.488 4.88 4.88 0 0 0 6.72.435l19.046-16.09a4.488 4.488 0 0 0 .453-6.488v.003Zm20.222 28.31c2.63 0 4.763 2.059 4.763 4.597v15.93l12.165 7.83c2.187 1.41 2.78 4.266 1.32 6.375-1.46 2.115-4.418 2.683-6.605 1.275L44.975 56.7a4.557 4.557 0 0 1-2.117-3.826V34.485c0-2.538 2.133-4.597 4.76-4.597Z"/></g>',
  'ClockOutlinedIcon',
);
`},30254:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m53.6 48 21.2 21.2c1.6 1.6 1.6 4.1 0 5.6-1.6 1.6-4.1 1.6-5.6 0L48 53.6 26.8 74.8c-1.6 1.6-4.1 1.6-5.6 0-1.6-1.6-1.6-4.1 0-5.6L42.4 48 21.2 26.8c-1.6-1.6-1.6-4.1 0-5.6s4.1-1.6 5.6 0L48 42.4l21.2-21.2c1.6-1.6 4.1-1.6 5.6 0 1.6 1.6 1.6 4.1 0 5.6L53.6 48z"/>',
  'CloseIcon',
);
`},62175:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m48 43.7 25.8-25.8c1.2-1.2 3.1-1.2 4.3 0 1.2 1.2 1.2 3.1 0 4.3L52.3 48l25.8 25.8c1.2 1.2 1.2 3.1 0 4.3s-3.1 1.2-4.3 0L48 52.3 22.2 78.1c-1.2 1.2-3.1 1.2-4.3 0-1.2-1.2-1.2-3.1 0-4.3L43.7 48 17.9 22.2c-1.2-1.2-1.2-3.1 0-4.3 1.2-1.2 3.1-1.2 4.3 0L48 43.7z"/>',
  'CloseLargeIcon',
);
`},48901:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M78.5 69c4.1 0 7.5 3.4 7.5 7.5v4c1.4.2 2.5 1.5 2.5 3 0 1.6-1.2 2.9-2.8 3H11.5c-1.7 0-3-1.3-3-3 0-1.5 1.1-2.7 2.5-3v-4c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5v4h5v-4c0-4.1 3.2-7.4 7.3-7.5h.2c4.1 0 7.5 3.4 7.5 7.5v4h5v-4c0-4.1 3.2-7.4 7.3-7.5h.2c4.1 0 7.5 3.4 7.5 7.5v4h5v-4c0-4.1 3.2-7.4 7.3-7.5h.2zm-40 6c-.8 0-1.5.7-1.5 1.5V80h3v-3.5c0-.8-.6-1.4-1.4-1.5h-.1zm-20 0c-.8 0-1.5.7-1.5 1.5V80h3v-3.5c0-.8-.6-1.4-1.4-1.5h-.1zm40 0c-.8 0-1.5.7-1.5 1.5V80h3v-3.5c0-.8-.6-1.4-1.4-1.5h-.1zm20 0c-.8 0-1.5.7-1.5 1.5V80h3v-3.5c0-.8-.6-1.4-1.4-1.5h-.1zm.5-64c4.9 0 8.9 3.9 9 8.7V62c0 1.7-1.3 3-3 3-1.6 0-2.9-1.2-3-2.8V20c0-1.6-1.2-2.9-2.8-3H17c-1.6 0-2.9 1.2-3 2.8V62c0 1.7-1.3 3-3 3-1.6 0-2.9-1.2-3-2.8V20c0-4.9 3.9-8.9 8.7-9H79zM42.8 28.5c.7 0 1.5.2 2.1.6l16.5 10.3c1.9 1.2 2.4 3.6 1.3 5.5-.3.5-.8 1-1.3 1.3L44.9 56.4c-1.9 1.2-4.3.6-5.5-1.3-.4-.6-.6-1.4-.6-2.1V32.5c0-2.2 1.8-4 4-4zm2 7.6v13.4l10.7-6.7-10.7-6.7z"/>',
  'CloudBBOutlinedIcon',
);
`},11868:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m53 73.1 4.8-5.1c1.1-1.2 3-1.3 4.2-.1s1.3 3.1.1 4.3L53 81.9c-1.3 1.4-3.6 1.5-5 .1l-10.2-9.8c-1.2-1.2-1.2-3.1-.1-4.3 1.1-1.2 3-1.3 4.2-.1l4.9 4.7V48c0-1.7 1.3-3 3-3s3 1.4 3 3v25.1h.2zM48 13c11.5 0 21.4 8.1 24.3 19.4C81 32.5 88 39.9 88 49c0 9.1-7.1 16.6-15.9 16.6-1.7 0-3-1.4-3-3 0-1.7 1.3-3 3-3 5.5 0 9.9-4.7 9.9-10.5s-4.5-10.5-9.9-10.5c-.5 0-1.1 0-1.6.1-1.7.3-3.2-.9-3.5-2.5-1.5-9.8-9.5-17-19-17-6.9 0-13.2 3.9-16.6 10.1-.6 1-1.7 1.6-2.8 1.6h-.9c-7.5 0-13.6 6.4-13.6 14.4s6.1 14.4 13.7 14.4c1.7 0 3 1.4 3 3 0 1.7-1.3 3-3 3C16.8 65.6 8 56.4 8 45.1 8 34 16.5 25 27.1 24.6 31.7 17.5 39.5 13 48 13z"/>',
  'CloudDownloadOutlinedIcon',
);
`},15994:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M47.5 48.3c.3-.4.7-.7 1.1-1 1.4-.8 3.2-.6 4.4.6l9.1 9.6c1.1 1.2 1.1 3.1-.1 4.2s-3.1 1.1-4.2-.1l-4.8-5V80c0 1.7-1.3 3-3 3s-3-1.3-3-3V57.1l-4.9 4.7c-1.2 1.1-3.1 1.1-4.2-.1s-1.1-3.1.1-4.2l9.5-9.2zM48 13c11.5 0 21.4 8 24.3 19.2C81 32.3 88 39.6 88 48.6c0 9-7.1 16.4-15.9 16.4-1.7 0-3-1.3-3-3s1.3-3 3-3c5.5 0 9.9-4.6 9.9-10.4s-4.5-10.4-9.9-10.4c-.5 0-1.1 0-1.6.1-1.7.3-3.2-.8-3.5-2.5C65.5 26.2 57.4 19 48 19c-6.9 0-13.2 3.8-16.6 10-.6 1-1.7 1.6-2.8 1.5h-.9c-7.5 0-13.6 6.4-13.6 14.2S20.1 59 27.7 59c1.7 0 3 1.3 3 3s-1.3 3-3 3C16.8 65 8 55.9 8 44.8c0-11 8.5-19.9 19.1-20.2C31.7 17.4 39.5 13 48 13z"/>',
  'CloudUploadOutlinedIcon',
);
`},59337:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 12c6.1 0 11 4.9 11 11v50c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V23c0-6.1 4.9-11 11-11h58zm5 26H14v35c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V38zm-47.9 9c1.3-1.1 3.2-.9 4.2.4l.1.2c.9 1.3.7 3.1-.5 4.1l-8.1 6.7 8.1 6.7c1.3 1.1 1.5 2.9.4 4.2-1.1 1.3-2.9 1.5-4.2.4L24.7 62c-2.3-1.9-2.3-5.3 0-7.2l9.4-7.8zm27.8 0 9.4 7.7c2.3 1.9 2.3 5.3 0 7.2l-9.4 7.7c-1.3 1.1-3.2.9-4.2-.4-1.1-1.3-.9-3.2.4-4.2l8.1-6.7-8.1-6.7c-1.2-1-1.4-2.8-.5-4.1l.1-.2c1-1.1 2.9-1.3 4.2-.3zm-12.6-1c1.6.2 2.8 1.7 2.7 3.3l-2 18c-.2 1.6-1.7 2.8-3.3 2.7s-2.8-1.7-2.7-3.3l2-18c.2-1.7 1.7-2.9 3.3-2.7zM77 18H19c-2.8 0-5 2.2-5 5v9h68v-9c0-2.8-2.2-5-5-5z"/>',
  'CodeOutlinedIcon',
);
`},85490:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M37 10h42c3.9 0 7 3.1 7 7v42c0 3.9-3.1 7-7 7H37c-3.9 0-7-3.1-7-7V17c0-3.9 3.1-7 7-7zm0 6c-.6 0-1 .4-1 1v42c0 .6.4 1 1 1h42c.6 0 1-.4 1-1V17c0-.6-.4-1-1-1H37zm23 56c0-1.7 1.3-3 3-3s3 1.3 3 3v7c0 3.9-3.1 7-7 7H17c-3.9 0-7-3.1-7-7V37c0-3.9 3.1-7 7-7h7c1.7 0 3 1.3 3 3s-1.3 3-3 3h-7c-.6 0-1 .4-1 1v42c0 .6.4 1 1 1h42c.6 0 1-.4 1-1v-7z"/>',
  'CopyOutlinedIcon',
);
`},95503:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 13c6.1 0 11 4.9 11 11v14c0 1.7-1.3 3-3 3-3.9 0-7 3.1-7 7s3.1 7 7 7c1.7 0 3 1.3 3 3v14c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V58c0-1.7 1.3-3 3-3 3.9 0 7-3.1 7-7s-3.1-7-7-7c-1.7 0-3-1.3-3-3V24c0-6.1 4.9-11 11-11h58zM40.2 30.9c-1.1-1.1-2.9-1.3-4.1-.2l-.1.1c-1.1 1.1-1.3 2.9-.2 4.1l6.7 8.1h-4.7c-1.6.1-2.8 1.4-2.8 3v.2c.1 1.6 1.4 2.8 3 2.8h7.5v4h-7.7c-1.6.1-2.8 1.4-2.8 3v.2c.1 1.6 1.4 2.8 3 2.8h7.5v4.2c.1 1.6 1.4 2.8 3 2.8h.2c1.6-.1 2.8-1.4 2.8-3v-4h6.7c1.6-.1 2.8-1.4 2.8-3v-.2c-.1-1.6-1.4-2.8-3-2.8h-6.5v-4h6.7c1.6-.1 2.8-1.4 2.8-3v-.2c-.1-1.6-1.4-2.8-3-2.8h-4.4l6.7-8.1.1-.1c.9-1.3.7-3.1-.5-4.1-1.3-1.1-3.2-.9-4.2.4L48 40.3l-7.7-9.2-.1-.2z"/>',
  'CouponFilledIcon',
);
`},31961:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 13c6.1 0 11 4.9 11 11v14c0 1.7-1.3 3-3 3-3.9 0-7 3.1-7 7s3.1 7 7 7c1.7 0 3 1.3 3 3v14c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V58c0-1.7 1.3-3 3-3 3.9 0 7-3.1 7-7s-3.1-7-7-7c-1.7 0-3-1.3-3-3V24c0-6.1 4.9-11 11-11h58zm0 6H19c-2.8 0-5 2.2-5 5v11.3c5.7 1.4 10 6.5 10 12.7s-4.3 11.3-10 12.7V72c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V60.7c-5.7-1.4-10-6.5-10-12.7s4.3-11.3 10-12.7V24c0-2.8-2.2-5-5-5zM36.1 30.7c1.3-1.1 3.2-.9 4.2.4l7.7 9.2 7.7-9.2c1.1-1.3 3-1.4 4.2-.4 1.3 1.1 1.4 3 .4 4.2L53.6 43H58c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3h-6.5v4H58c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3h-6.5v4c0 1.6-1.2 2.9-2.8 3h-.2c-1.7 0-3-1.3-3-3v-4H38c-1.6 0-2.9-1.2-3-2.8V56c0-1.7 1.3-3 3-3h7.5v-4H38c-1.6 0-2.9-1.2-3-2.8V46c0-1.7 1.3-3 3-3h4.4l-6.7-8.1c-1-1.2-.9-3 .2-4.1l.2-.1z"/>',
  'CouponOutlinedIcon',
);
`},60237:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M72.707 5.75A13.533 13.533 0 0 1 86.25 19.304v53.404A13.514 13.514 0 0 1 72.71 86.25h-53.4A13.535 13.535 0 0 1 5.75 72.708V19.304A13.556 13.556 0 0 1 19.31 5.753h.02l3.697.025a2.873 2.873 0 0 1-.02 5.746h-.02l-3.686-.027a7.814 7.814 0 0 0-7.805 7.807v9.454l.01.003 68.999.002v-9.46a7.774 7.774 0 0 0-2.278-5.524 7.743 7.743 0 0 0-5.515-2.289h-3.605a2.869 2.869 0 1 1-.003-5.737ZM11.506 34.507h-.01v38.2c0 2.086.815 4.041 2.29 5.516a7.76 7.76 0 0 0 5.525 2.281h53.4a7.737 7.737 0 0 0 5.513-2.281 7.74 7.74 0 0 0 2.28-5.515V34.509l-68.998-.002Zm46.955 6.205c1.094 0 2.092.613 2.576 1.58a2.805 2.805 0 0 1-.296 2.98c-.014.016-.715.927-1.755 2.477l-.256.384a72.424 72.424 0 0 0-3.528 5.927c-1.583 2.98-2.84 5.884-3.736 8.633-1.09 3.341-1.642 6.444-1.642 9.222 0 1.566-1.286 2.835-2.872 2.835-1.586 0-2.871-1.27-2.871-2.835 0-3.386.652-7.093 1.937-11.019 1.005-3.068 2.4-6.286 4.148-9.564a77.957 77.957 0 0 1 2.88-4.95h-17.59c-1.587 0-2.873-1.27-2.873-2.835 0-1.566 1.286-2.835 2.872-2.835ZM38.327 3.833c1.586 0 2.872 1.27 2.872 2.835v5.675c0 .752-.303 1.473-.842 2.004a2.89 2.89 0 0 1-2.03.83c-1.586 0-2.872-1.269-2.872-2.834V6.668c0-1.565 1.286-2.835 2.872-2.835Zm17.263 0c1.586 0 2.871 1.27 2.871 2.835v5.675c0 .752-.302 1.473-.84 2.004a2.89 2.89 0 0 1-2.031.83c-1.586 0-2.872-1.269-2.872-2.834V6.668c0-1.565 1.286-2.835 2.872-2.835Z"/>',
  'DateOutlinedIcon',
);
`},79402:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M19 24h-4c-1.7 0-3-1.3-3-3s1.3-3 3-3h66c1.7 0 3 1.3 3 3s-1.3 3-3 3H25v53c0 2.8 2.2 5 5 5h36c2.8 0 5-2.2 5-5V22.8c0-1.7 1.3-3 3-3s3 1.3 3 3V77c0 6.1-4.9 11-11 11H30c-6.1 0-11-4.9-11-11V24zm21-10c-1.7 0-3-1.3-3-3s1.3-3 3-3h16c1.7 0 3 1.3 3 3s-1.3 3-3 3H40zm-3 27c0-1.7 1.3-3 3-3s3 1.3 3 3v24c0 1.7-1.3 3-3 3s-3-1.3-3-3V41zm16 0c0-1.7 1.3-3 3-3s3 1.3 3 3v24c0 1.7-1.3 3-3 3s-3-1.3-3-3V41z"/>',
  'DeleteOutlinedIcon',
);
`},43879:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48.7 79.5c-2 .4-4.1.5-6.2.5-6.3 0-12.4-1.7-17.7-4.9-.2-.1-.7-.4-1.4-.8l-8.2 2.2c-2.2.6-4.3-1.4-3.7-3.7l2.2-8.1c-.8-1.4-1.4-2.4-1.7-2.9-2.6-5-4-10.5-4-16.3C8 26.4 23.4 11 42.5 11c17.4 0 31.8 12.9 34.2 29.6 7 4.3 11.3 12 11.3 20.4 0 4-1 7.9-2.8 11.3-.2.3-.5.8-.9 1.6l1.4 5c.6 2.2-1.4 4.3-3.7 3.7l-5-1.4c-.3.2-.5.3-.6.3-3.8 2.3-8 3.5-12.4 3.5-5.7 0-11.1-2-15.3-5.5zm7.4-2.3c2.4 1.2 5.1 1.8 7.9 1.8 3.3 0 6.5-.9 9.2-2.5.2-.1.8-.5 1.7-1 .7-.4 1.5-.5 2.3-.3l1.2.3-.3-1.2c-.2-.8-.1-1.6.3-2.3.8-1.3 1.2-2.1 1.4-2.5C81.3 66.9 82 64 82 61c0-4.8-1.9-9.3-5.1-12.6-1.1 13-9.3 23.9-20.8 28.8zM19.9 65l-1.2 4.3 4.3-1.2c.8-.2 1.6-.1 2.3.3 1.4.8 2.3 1.3 2.6 1.5 4.4 2.6 9.4 4 14.6 4C58.2 74 71 61.2 71 45.5S58.2 17 42.5 17 14 29.8 14 45.5c0 4.8 1.2 9.3 3.4 13.4.3.5 1 1.8 2.2 3.8.4.7.5 1.5.3 2.3zM55 35c1.7 0 3 1.3 3 3s-1.3 3-3 3H30c-1.7 0-3-1.3-3-3s1.3-3 3-3h25zM43 50c1.7 0 3 1.3 3 3s-1.3 3-3 3H30c-1.7 0-3-1.3-3-3s1.3-3 3-3h13z"/>',
  'DiscussOutlinedIcon',
);
`},96015:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m48 70.1 21.1-22.8c1.5-1.6 4-1.7 5.7-.2 1.6 1.5 1.7 4 .2 5.7l-24 26a4.05 4.05 0 0 1-5.9 0l-24-26c-1.5-1.6-1.4-4.2.2-5.7 1.6-1.5 4.2-1.4 5.7.2l21 22.8z"/><path d="m48 40.1 21.1-22.8c1.5-1.6 4-1.7 5.7-.2s1.7 4 .2 5.7l-24 26a4.05 4.05 0 0 1-5.9 0l-24-26c-1.5-1.6-1.4-4.2.2-5.7s4.2-1.4 5.7.2l21 22.8z" opacity=".6"/>',
  'DoubleArrowDownTwoToneIcon',
);
`},33678:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m26 48 22.8 21.1c1.6 1.5 1.7 4 .2 5.7-1.5 1.6-4 1.7-5.7.2l-26-24a4.05 4.05 0 0 1 0-5.9l26-24c1.6-1.5 4.2-1.4 5.7.2 1.5 1.6 1.4 4.2-.2 5.7L26 48z"/><path d="m56 48 22.8 21.1c1.6 1.5 1.7 4 .2 5.7-1.5 1.7-4 1.7-5.7.2l-26-24a4.05 4.05 0 0 1 0-5.9l26-24c1.6-1.5 4.2-1.4 5.7.2 1.5 1.6 1.4 4.2-.2 5.7L56 48z" opacity=".6"/>',
  'DoubleArrowLeftTwoToneIcon',
);
`},29327:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M70.1 48.1 47.3 27c-1.6-1.5-1.7-4-.2-5.7 1.5-1.6 4-1.7 5.7-.2l26 24c1.7 1.6 1.7 4.3 0 5.9l-26 24c-1.6 1.5-4.2 1.4-5.7-.2s-1.4-4.2.2-5.7l22.8-21z"/><path d="M40.1 48.1 17.3 27c-1.6-1.5-1.7-4-.2-5.7s4-1.7 5.7-.2l26 24c1.7 1.6 1.7 4.3 0 5.9l-26 24c-1.6 1.5-4.2 1.4-5.7-.2s-1.4-4.2.2-5.7l22.8-21z" opacity=".6"/>',
  'DoubleArrowRightTwoToneIcon',
);
`},38100:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48.1 26 27 48.8c-1.5 1.6-4 1.7-5.7.2-1.6-1.5-1.7-4-.2-5.7l24-26c1.6-1.7 4.3-1.7 5.9 0l24 26c1.5 1.6 1.4 4.2-.2 5.7s-4.2 1.4-5.7-.2L48.1 26z"/><path d="M48.1 56 27 78.8c-1.5 1.6-4 1.7-5.7.2s-1.7-4-.2-5.7l24-26c1.6-1.7 4.3-1.7 5.9 0l24 26c1.5 1.6 1.4 4.2-.2 5.7s-4.2 1.4-5.7-.2L48.1 56z" opacity=".6"/>',
  'DoubleArrowUpTwoToneIcon',
);
`},98455:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm11 19c5.5 0 10 4.5 10 10 0 2.8-1.3 5.5-3.5 7.2l-6 4.8H67c1.7 0 3 1.3 3 3s-1.3 3-3 3H51c-2.8 0-4.1-3.6-1.9-5.3l12.7-10.1c.8-.7 1.2-1.6 1.2-2.6 0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-5.5 4.5-10 10-10zM26.9 43.9c1.2-1.2 3.1-1.2 4.2 0l3.9 3.9 3.9-3.9c1.1-1.1 2.9-1.2 4.1-.1l.1.1c1.2 1.2 1.2 3.1 0 4.2L39.2 52l3.9 3.9c1.1 1.1 1.2 2.9.1 4.1l-.1.1c-1.2 1.2-3.1 1.2-4.2 0L35 56.2l-3.9 3.9c-1.1 1.1-2.9 1.2-4.1.1l-.1-.1c-1.2-1.2-1.2-3.1 0-4.2l3.9-3.9-3.9-3.9c-1.1-1.1-1.2-2.9-.1-4.1l.1-.1z"/>',
  'DoubleCircleOutlinedIcon',
);
`},91354:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m27.3 49.2 19.1 26.6c.6.9 1.9 1.1 2.8.5.2-.1.3-.3.5-.5l19.1-26.6c.6-.9.4-2.1-.5-2.8-.3-.2-.7-.4-1.2-.4H54V20c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v26H28.9c-1.1 0-2 .9-2 2 0 .4.1.8.4 1.2z"/>',
  'DownIcon',
);
`},26132:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M69.3 8c2.8 0 5.1 2.2 5.1 5 0 1.7 1.3 3 3 3h.4c2.8 0 5.1 2.2 5.1 5v8c0 2.8-2.3 5-5.1 5h-1.1l-3.2 43.8c-.4 5.7-5.2 10.2-11 10.2H33.4c-5.8 0-10.5-4.4-11-10.2L19.2 34h-1.1c-2.8 0-5.1-2.2-5.1-5v-8c0-2.8 2.3-5 5.1-5h.4c1.7 0 3-1.3 3-3 0-2.8 2.3-5 5.1-5h42.7zM48 43c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z"/>',
  'DrinkFilledIcon',
);
`},31508:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M69 8c2.7 0 4.9 2.1 5 4.8v.4c.1 1.6 1.4 2.8 3 2.8h1c2.8 0 5 2.2 5 5v8c0 2.8-2.2 5-5 5h-1.2l-3.2 43.8c-.4 5.6-5 10-10.7 10.2H33.4c-5.8 0-10.5-4.4-11-10.2L19.2 34H18c-2.7 0-4.9-2.1-5-4.8V21c0-2.8 2.2-5 5-5h1c1.6 0 2.9-1.3 3-2.8v-.4c.1-2.7 2.3-4.8 5-4.8h42zm1.8 26H25.2l3.2 43.4c.2 2.5 2.2 4.5 4.8 4.6h29.3c2.6 0 4.8-2 5-4.6L70.8 34zM77 22c-4.5 0-8.3-3.3-8.9-7.7V14H27.9v.1c-.5 4.4-4.2 7.8-8.7 7.9H19v6h58v-6z"/>',
  'DrinkOutlinedIcon',
);
`},61760:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M84 82c1.7 0 3 1.4 3 3 0 1.7-1.3 3-3 3H12c-1.7 0-3-1.4-3-3 0-1.7 1.3-3 3-3h72zM56.1 22.3l14.2 14.3c.8.8.8 2 0 2.8L39.8 70.1c-2 2-4.5 3.4-7.3 4.1l-14.3 3.2c-2.2.5-4.2-1.6-3.5-3.8l4.1-13.9c.7-2.4 2-4.6 3.8-6.4l30.7-30.9c.7-.8 2-.8 2.8-.1zm22.7-10.1 1.4 1.4c4.3 4.3 4.3 11.3 0 15.7l-3 3c-.8.8-2 .8-2.8 0L60.3 18.1c-.8-.8-.8-2 0-2.8l3-3c4.3-4.4 11.2-4.4 15.5-.1z"/>',
  'EditFilledIcon',
);
`},86382:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M84 81c1.7 0 3 1.3 3 3s-1.3 3-3 3H12c-1.7 0-3-1.3-3-3s1.3-3 3-3h72zm-5.6-68.8 1.4 1.4c4.3 4.3 4.3 11.3 0 15.6L39.3 69.7c-2 2-4.6 3.4-7.3 4l-14.3 3.2c-2.2.5-4.2-1.6-3.5-3.8l4.1-13.8c.7-2.4 2-4.6 3.8-6.4l40.8-40.8c4.2-4.2 11.2-4.2 15.5.1zM59.7 23.8 26.2 57.3c-1.1 1.1-1.8 2.4-2.3 3.8L21.3 70l9.3-2.1c1.7-.4 3.2-1.2 4.4-2.4l33.1-33.1-8.4-8.6zm7.3-7.3-3.1 3.1 8.5 8.5 3.1-3.1c2-2 2-5.1 0-7.1l-1.4-1.4c-1.9-2-5.1-2-7.1 0z"/>',
  'EditOutlinedIcon',
);
`},50968:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c6.7 0 15 5.4 21.5 13.8C76.7 31 81 42.7 81 55c0 19.9-13.9 33-33 33S15 74.9 15 55c0-12.3 4.3-24 11.5-33.2C33 13.4 41.3 8 48 8zm0 6c-4.5 0-11.3 4.4-16.8 11.5C24.9 33.7 21 44.1 21 55c0 16.5 11.2 27 27 27s27-10.5 27-27c0-10.9-3.9-21.3-10.2-29.5C59.3 18.4 52.5 14 48 14zm-7 49c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm-9-12c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z"/>',
  'EggOutlinedIcon',
);
`},87629:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm-8.1 27.8c-1.1-1.1-2.9-1.1-4.1 0s-1.1 2.9 0 4.1l8.1 8.1-8.1 8.1c-1.1 1.1-1.1 2.9 0 4.1s2.9 1.1 4.1 0l8.1-8.1 8.1 8.1c1.1 1.1 2.9 1.1 4.1 0s1.1-2.9 0-4.1L52.1 48l8.1-8.1c1.1-1.1 1.1-2.9 0-4.1s-2.9-1.1-4.1 0L48 43.9l-8.1-8.1z"/>',
  'ErrorCircleFilledIcon',
);
`},24620:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88c22.1 0 40-17.9 40-40S70.1 8 48 8 8 25.9 8 48s17.9 40 40 40zm16.3-56.3c2 2 2 5.1 0 7.1L55.1 48l9.2 9.2c2 2 2 5.1 0 7.1s-5.1 2-7.1 0L48 55.1l-9.2 9.2c-2 2-5.1 2-7.1 0s-2-5.1 0-7.1l9.2-9.2-9.2-9.2c-2-2-2-5.1 0-7.1s5.1-2 7.1 0l9.2 9.2 9.2-9.2c1.9-1.9 5.1-1.9 7.1 0z"/>',
  'ErrorCircleFilledBoldIcon',
);
`},79833:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm4.1 34 8.1 8.1c1.1 1.1 1.1 2.9 0 4.1s-2.9 1.1-4.1 0L48 52.1l-8.1 8.1c-1.1 1.1-2.9 1.1-4.1 0s-1.1-2.9 0-4.1l8.1-8.1-8.1-8.1c-1.1-1.1-1.1-2.9 0-4.1s2.9-1.1 4.1 0l8.1 8.1 8.1-8.1c1.1-1.1 2.9-1.1 4.1 0s1.1 2.9 0 4.1L52.1 48z"/>',
  'ErrorCircleOutlinedIcon',
);
`},99958:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M66 12c1.7 0 3 1.3 3 3s-1.3 3-3 3h-2v15.1c0 .2 0 .3.1.4l17 34.7c2.7 5.5.4 12-5 14.7-1.5.7-3.2 1.1-4.8 1.1H24.8c-6.1 0-11-4.9-11-11 0-1.7.4-3.3 1.1-4.8l17-34.7c.1-.1.1-.3.1-.4V18h-2c-1.6 0-2.9-1.2-3-2.8V15c0-1.7 1.3-3 3-3h36zm4.9 49H25.1l-4.8 9.8c-.3.7-.5 1.4-.5 2.2 0 2.8 2.2 5 5 5h46.4c.8 0 1.5-.2 2.2-.5 2.5-1.2 3.5-4.2 2.3-6.7L70.9 61zM58 18H38v15.1c0 1.1-.2 2.1-.7 3.1L28.1 55H68l-9.2-18.8c-.5-1-.7-2-.7-3.1V18z"/>',
  'ExperimentOutlinedIcon',
);
`},58793:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm14 20.9-20.3 7.3c-2.5.9-4.5 2.9-5.4 5.4L28.9 62c-.7 2.1.3 4.4 2.4 5.1.9.3 1.8.3 2.7 0l20.3-7.3c2.5-.9 4.5-2.9 5.4-5.4L67.1 34c.7-2.1-.3-4.4-2.4-5.1-.9-.3-1.8-.3-2.7 0zM48 53c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z"/>',
  'ExploreCircleFilledIcon',
);
`},95196:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm14 14.9c.9-.3 1.8-.3 2.7 0 2.1.7 3.2 3 2.4 5.1l-7.3 20.3c-.9 2.5-2.9 4.5-5.4 5.4L34 67.1c-.9.3-1.8.3-2.7 0-2.1-.7-3.2-3-2.4-5.1l7.3-20.3c.9-2.5 2.9-4.5 5.4-5.4L62 28.9zM60 36l-16.3 5.9c-.8.3-1.5 1-1.8 1.8L36 60l16.3-5.9c.8-.3 1.5-1 1.8-1.8L60 36z"/>',
  'ExploreCircleOutlinedIcon',
);
`},79655:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m21.8 17.6 56.6 56.6-4.2 4.2-56.6-56.6 4.2-4.2zm-1.3 12.8 10.8 10.8c-.8 2.1-1.3 4.4-1.3 6.8 0 9.9 8.1 18 18 18 2.4 0 4.7-.5 6.8-1.3l9.3 9.3C59 76.7 53.6 78 48 78c-14.7 0-27.8-9.3-39.2-27.3-1-1.6-1-3.7 0-5.3 3.7-6 7.7-10.9 11.7-15zM48 18c14.7 0 27.8 9.3 39.2 27.3 1 1.6 1 3.7 0 5.3-3.8 5.9-7.7 10.9-11.8 14.9L64.7 54.8c.9-2.1 1.3-4.4 1.3-6.8 0-9.9-8.1-18-18-18-2.4 0-4.7.5-6.8 1.3L31.9 22c5.1-2.7 10.5-4 16.1-4zM38 47.9 48.1 58H48c-5.4 0-9.8-4.3-10-9.7v-.4zM48 38c5.5 0 10 4.5 10 10v.1L48 38z"/>',
  'EyeClosedFilledIcon',
);
`},23491:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 18c14.7 0 27.8 9.3 39.2 27.3 1 1.6 1 3.7 0 5.3C75.8 68.7 62.7 78 48 78S20.2 68.7 8.8 50.7c-1-1.6-1-3.7 0-5.3C20.2 27.3 33.3 18 48 18zm0 12c-9.9 0-18 8.1-18 18s8.1 18 18 18 18-8.1 18-18-8.1-18-18-18zm0 28c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10z"/>',
  'EyeFilledIcon',
);
`},99870:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 78c-14.7 0-27.8-9.3-39.2-27.3-1-1.6-1-3.7 0-5.3C20.2 27.3 33.3 18 48 18s27.8 9.3 39.2 27.3c1 1.6 1 3.7 0 5.3C75.8 68.7 62.7 78 48 78zm0-54c-12.1 0-23.4 7.9-33.8 24C24.6 64.1 35.9 72 48 72c12.1 0 23.4-7.9 33.8-24C71.4 31.9 60.1 24 48 24zm0 38c-7.8 0-14.1-6.3-14.1-14S40.2 34 48 34s14.1 6.3 14.1 14S55.8 62 48 62zm0-6c4.5 0 8.1-3.6 8.1-8s-3.6-8-8.1-8-8.1 3.6-8.1 8 3.6 8 8.1 8z"/>',
  'EyeOutlinedIcon',
);
`},97007:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M45.5 72v-4.1C30.1 66.6 18 53.7 18 38 18 21.4 31.4 8 48 8s30 13.4 30 30c0 15.4-11.6 28.1-26.5 29.8V72H60c1.7 0 3 1.3 3 3s-1.3 3-3 3h-8.5v7.2c0 1.7-1.3 3-3 3s-3-1.3-3-3V78H36c-1.7 0-3-1.3-3-3s1.3-3 3-3h9.5zM48 62c13.3 0 24-10.7 24-24S61.3 14 48 14 24 24.7 24 38s10.7 24 24 24z"/>',
  'FemaleOutlinedIcon',
);
`},6221:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m60.6 48 21.1-28.8c2.3-3.1 1.6-7.5-1.5-9.8C78.9 8.5 77.5 8 76 8H20c-3.9 0-7 3.1-7 7 0 1.5.5 2.9 1.4 4.1l21 28.9v37c0 1.7 1.3 3 3 3s3-1.3 3-3V47c0-.6-.2-1.3-.6-1.8L19.2 15.6c-.1-.2-.2-.4-.2-.6 0-.6.4-1 1-1h56c.2 0 .4.1.6.2.4.3.5 1 .2 1.4L55.2 45.2c-.4.5-.6 1.1-.6 1.8v29.6c0 1.7 1.3 3 3 3s3-1.3 3-3V48z"/>',
  'FilterOutlinedIcon',
);
`},98228:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M70.2 73.2c0 1.7-1.3 3-3 3s-3-1.3-3-3V60.6c0-9.3-7.5-16.8-16.8-16.8s-16.8 7.5-16.8 16.8v10.8c0 1.7-1.3 3-3 3s-3-1.3-3-3V60.6c0-12.6 10.2-22.8 22.8-22.8S70.2 48 70.2 60.6v12.6zm14.1-47c1.1 1.3.9 3.2-.4 4.2-1.3 1.1-3.2.9-4.2-.4-7.9-9.4-19.6-15-32.3-15-12.1 0-23.3 5.1-31.2 13.9-1.1 1.2-3 1.3-4.2.2s-1.3-3-.2-4.2C20.8 14.8 33.7 9 47.4 9c14.5 0 27.8 6.4 36.9 17.2zm-1.4 32.6c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-12.2-7.5-23-18.7-27.4-1.5-.6-2.3-2.3-1.7-3.9s2.3-2.3 3.9-1.7c13.4 5.3 22.5 18.3 22.5 33zM47.4 23.4c1.7 0 3 1.3 3 3s-1.3 3-3 3C31.2 29.4 18 42.6 18 58.8c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-19.6 15.9-35.4 35.4-35.4zm0 34.8c-1.3 0-2.4 1-2.4 2.4v1.9c0 1.5.1 3 .1 4.3 0 1.9 0 3.4-.1 4.6-.3 3.9-1.4 7.4-3 10.3-.7 1.3-1.4 2.4-2.2 3.3-.5.6-.9 1-1.2 1.2-1.2 1.1-3.1 1-4.2-.2s-1-3.1.2-4.2l.1-.1.5-.5c.5-.6 1.1-1.4 1.6-2.3 1.2-2.2 2-4.8 2.3-7.9.1-1 .1-2.4.1-4.1 0-1.3 0-2.8-.1-4.2v-2c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4v16c0 1.7-1.3 3-3 3s-3-1.3-3-3v-16c-.1-1.4-1.1-2.5-2.5-2.5z"/>',
  'FingerprintOutlinedIcon',
);
`},42578:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M39.7 88S4.2 80.2 20.1 41.5c0 0 3.6 4.3 3.1 6.4 0 0 2.8-9.8 8.9-15.6 5.2-5 10.5-19.1 5.6-24.2 0 0 24.3 5.1 27 30.6 0 0 3.1-8.1 9.5-8.9 0 0-2 4.5 0 11.2 0 0 20.1 34.4-14.5 46.1 0 0 10.4-11.8-11.6-32 0 0-5.2 10.8-8.3 14.7-.1-.3-8.8 9.4-.1 18.2z"/>',
  'FireFilledIcon',
);
`},93114:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m33 59.4-11.6-9.9c-1.6-1.3-2.4-3.3-2.4-5.3V30c0-3.9 3.1-7 7-7h44c3.9 0 7 3.1 7 7v14.2c0 2-.9 4-2.4 5.3L63 59.4V84c0 3.9-3.1 7-7 7H40c-3.9 0-7-3.1-7-7V59.4zM26 29c-.6 0-1 .4-1 1v14.2c0 .3.1.6.3.8l11.9 10.2c1.1.9 1.7 2.3 1.7 3.8v25c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V58.9c0-1.5.6-2.8 1.7-3.8l11.9-10.2c.2-.2.3-.5.3-.8V30c0-.6-.4-1-1-1H26zm19 30c0-1.7 1.3-3 3-3s3 1.3 3 3v8c0 1.7-1.3 3-3 3s-3-1.3-3-3v-8zm0-51c0-1.7 1.3-3 3-3s3 1.3 3 3v8c0 1.7-1.3 3-3 3s-3-1.3-3-3V8zm24.4 1c.8-1.4 2.7-1.9 4.1-1.1s1.9 2.7 1.1 4.1l-4 6.9c-.8 1.4-2.7 1.9-4.1 1.1-1.4-.8-1.9-2.7-1.1-4.1l4-6.9zM26.6 9l4 6.9c.8 1.4.3 3.3-1.1 4.1-1.4.8-3.3.3-4.1-1.1l-4-6.9c-.8-1.4-.3-3.3 1.1-4.1s3.3-.3 4.1 1.1z"/>',
  'FlashlightOnOutlinedIcon',
);
`},33110:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m33 59.4-11.6-9.9c-1.6-1.3-2.4-3.3-2.4-5.3V30c0-3.9 3.1-7 7-7h44c3.9 0 7 3.1 7 7v14.2c0 2-.9 4-2.4 5.3L63 59.4V84c0 3.9-3.1 7-7 7H40c-3.9 0-7-3.1-7-7V59.4zM26 29c-.6 0-1 .4-1 1v14.2c0 .3.1.6.3.8l11.9 10.2c1.1.9 1.7 2.3 1.7 3.8v25c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V58.9c0-1.5.6-2.8 1.7-3.8l11.9-10.2c.2-.2.3-.5.3-.8V30c0-.6-.4-1-1-1H26zm19 30c0-1.7 1.3-3 3-3s3 1.3 3 3v8c0 1.7-1.3 3-3 3s-3-1.3-3-3v-8z"/>',
  'FlashlightOutlinedIcon',
);
`},47354:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M85.3 35.6c1.8 3.4 2.7 7.1 2.7 11 0 13.6-11.5 24.5-25.6 24.7H33.5l5.8 6.7c1 1.2.9 3-.2 4.1l-.1.2c-1.2 1-3 .9-4.1-.2l-.1-.1-10-11.7c-1.6-1.9-.3-4.8 2.1-5h35.2c11.1 0 20-8.4 20-18.7 0-2.9-.7-5.6-2-8.2-.8-1.5-.2-3.3 1.3-4 1.4-.8 3.2-.3 3.9 1.2zM61 10.8l.1.1 10 11c1.7 1.9.5 4.9-2 5l-.1.1H34c-11.1 0-20 8.6-20 19.2 0 3 .7 5.8 2 8.4.8 1.5.2 3.3-1.3 4-1.5.8-3.3.2-4-1.3C8.9 53.9 8 50.1 8 46.2c0-13.8 11.4-25 25.6-25.2h28.6l-5.5-6c-1.1-1.2-1-3 .1-4.1l.1-.1c1.1-1 2.8-1 4-.1l.1.1z"/>',
  'FlipOutlinedIcon',
);
`},3929:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M74.2 17.9c1.2-1.2 3.1-1.2 4.2 0 8 8 12.6 18.9 12.6 30.4 0 11.6-4.6 22.4-12.6 30.4-1.2 1.2-3.1 1.2-4.2 0s-1.2-3.1 0-4.2C81.1 67.6 85 58.2 85 48.3c0-10-3.9-19.3-10.8-26.2-1.2-1.1-1.2-3 0-4.2zm-56.6 0c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2C14.9 29 11 38.3 11 48.3c0 9.9 3.9 19.3 10.8 26.2 1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0C9.6 70.7 5 59.8 5 48.3c0-11.6 4.6-22.4 12.6-30.4zM31 26.8c1.2 1.2 1.2 3.1 0 4.2-4.5 4.5-7 10.5-7 17s2.6 12.5 7 17c1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0C21.2 63.6 18 56.1 18 48s3.2-15.6 8.8-21.2c1.1-1.2 3-1.2 4.2 0zm38.2 0C74.8 32.4 78 39.9 78 48s-3.2 15.6-8.8 21.2c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2 4.5-4.5 7-10.5 7-17s-2.6-12.5-7-17c-1.2-1.2-1.2-3.1 0-4.2 1.1-1.2 3-1.2 4.2 0zM53.1 36C59.8 36 64 41.4 64 48.3c0 5.4-4.5 10.9-13.1 17-1.7 1.2-4 1.2-5.7 0-8.6-6-13.1-11.6-13.1-17C32 41.4 36.2 36 42.9 36c2 0 3.5.6 5.1 1.7 1.6-1.1 3.1-1.7 5.1-1.7zm0 6c-.8 0-1.4.3-2.6 1.4-.1.1-.5.4-.6.5-1.1 1-2.8 1-3.9 0-.1-.1-.5-.5-.6-.5-1.2-1.1-1.8-1.4-2.6-1.4-3 0-4.9 2.4-4.9 6.3 0 2.8 3.2 6.8 10 11.7 6.8-4.8 10-8.9 10-11.7.1-3.9-1.8-6.3-4.8-6.3z"/>',
  'FollowOutlinedIcon',
);
`},22348:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M76 13c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H22c-6.1 0-11-4.9-11-11V24c0-6.1 4.9-11 11-11h54zm0 6H22c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V24c0-2.8-2.2-5-5-5zM58.6 50.3 69 60.8v-2.5c0-1.6 1.2-2.9 2.8-3h.2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H62c-1.7 0-3-1.3-3-3s1.3-3 3-3h3L54.3 54.6c-1.2-1.2-1.2-3.1 0-4.2s3.1-1.2 4.3-.1zM36.4 24.4c1.7 0 3 1.3 3 3s-1.3 3-3 3h-3l10.7 10.7c1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0L29.4 34.9v2.5c0 1.6-1.2 2.9-2.8 3h-.2c-1.7 0-3-1.3-3-3v-10c0-1.7 1.3-3 3-3h10z"/>',
  'FullScreenOutlinedIcon',
);
`},234:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M67 22c4.4 0 8 3.6 8 8v55c0 2.5-2.8 3.9-4.8 2.4L64 82.8 58.4 87c-1.4 1-3.4 1-4.8-.1L48 82.8 42.4 87c-1.4 1-3.4 1-4.8-.1L32 82.8l-6.2 4.7c-2 1.5-4.8.1-4.8-2.4V30c0-4.4 3.6-8 8-8h38zM51 55.2H39c-1.7 0-3 1.3-3 3s1.3 3 3 3h12c1.7 0 3-1.3 3-3 0-1.6-1.3-3-3-3zm6-13H39c-1.7 0-3 1.3-3 3s1.3 3 3 3h18c1.7 0 3-1.3 3-3 0-1.6-1.3-3-3-3zM78 8c5.5 0 10 4.5 10 10v20c0 3.3-2.7 6-6 6h-3V28c0-5.4-4.3-9.8-9.7-10H27c-5.4 0-9.8 4.3-10 9.7V44h-3c-3.3 0-6-2.7-6-6V18c0-5.5 4.5-10 10-10h60z"/>',
  'GetTicketsFilledIcon',
);
`},52335:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 8c6.1 0 11 4.9 11 11v14c0 6.1-4.9 11-11 11h-2v41c0 2.5-2.8 3.9-4.8 2.4L64 82.8 58.4 87c-1.4 1-3.4 1-4.8-.1L48 82.8 42.4 87c-1.4 1-3.4 1-4.8-.1L32 82.8l-6.2 4.7c-2 1.5-4.8.1-4.8-2.4V44h-2c-6 0-10.8-4.8-11-10.7V19c0-6.1 4.9-11 11-11h58zm-9 20H28c-.6 0-1 .4-1 1v50l2.6-1.9c1.4-1.1 3.4-1.1 4.8 0l5.6 4.2 5.6-4.2c1.4-1.1 3.4-1.1 4.8 0l5.6 4.2 5.6-4.2c1.4-1.1 3.4-1.1 4.8 0L69 79V29c0-.6-.4-1-1-1zM51 55.2c1.7 0 3 1.3 3 3s-1.3 3-3 3H39c-1.7 0-3-1.3-3-3s1.3-3 3-3h12zm6-13c1.7 0 3 1.3 3 3s-1.3 3-3 3H39c-1.7 0-3-1.3-3-3s1.3-3 3-3h18zM77 14H19c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h2v-9c0-3.9 3.1-7 7-7h40c3.9 0 7 3.1 7 7v9h2c2.7 0 4.9-2.1 5-4.8V19c0-2.8-2.2-5-5-5z"/>',
  'GetTicketsOutlinedIcon',
);
`},2868:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M36 55.5c-1.4 1.5-3.5 3.2-6 5-1.4.9-3.2.6-4.2-.8s-.6-3.2.8-4.2c2.2-1.6 3.9-2.9 4.9-4-2.1-.4-4-1.1-5.4-1.9-5.4-3.3-5.3-10.5-.4-13.5 3.2-2 6.8-1.4 10.4 1.4V19H19c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h17V55.5zm6-1.2V77h35c2.8 0 5-2.2 5-5V24c0-2.8-2.2-5-5-5H42v17.6c3.7-2.2 7.8-1.7 10.7 1.2l.2.2.1.2c2.2 3.1 2.1 6.5-.3 9.1-1.3 1.5-3.3 2.6-5.8 3.4 1.9 1.4 4.3 2.7 7.1 3.8 1.5.6 2.3 2.4 1.7 3.9-.6 1.5-2.4 2.3-3.9 1.7-3.9-1.7-7.2-3.6-9.8-5.8zm0-9.4c.1.2.3.5.4.7.3-.1.7-.1 1-.2 2.4-.6 4.2-1.4 4.9-2.2.4-.4.4-.6 0-1.3-1.6-1.4-3.9-.6-6.3 2.7v.3zM19 13h58c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V24c0-6.1 4.9-11 11-11zm10.2 31.5c1.2.7 3.1 1.2 5.2 1.4.2-.3.3-.7.5-1-2.7-3.6-4.9-4.5-6.1-3.7-1.1.7-1.1 2.4.4 3.3z"/>',
  'GiftCardOutlinedIcon',
);
`},38117:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M52.4 14.8c2.6-4.5 8.4-6.1 13-3.5s6.1 8.4 3.5 13l-1.8 3.1H81c3.8 0 6.9 3 7 6.8v8.2c0 3.9-3.1 7-7 7h-1v27c0 6.1-4.9 11-11 11H29c-6.1 0-11-4.9-11-11v-27h-1c-3.8 0-6.9-3-7-6.8v-8.2c0-3.9 3.1-7 7-7h13.3l-1.8-3.1c-2.6-4.5-1.1-10.4 3.5-13s10.4-1.1 13 3.5l3.7 6.4 3.7-6.4zM74 49.3H24v27c0 2.8 2.2 5 5 5h40c2.8 0 5-2.2 5-5v-27zm7-16H17c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h64c.6 0 1-.4 1-1v-8c0-.5-.4-1-1-1zM35 16.5c-1.7 1-2.2 3.1-1.3 4.8l3.5 6.1h7.9l.1-.2-5.4-9.4c-1-1.7-3.1-2.3-4.8-1.3zm27.4 0c-1.7-1-3.8-.4-4.8 1.3l-5.4 9.4.1.2h7.9l3.5-6.1c.9-1.6.4-3.7-1.1-4.7l-.2-.1z"/>',
  'GiftOutlinedIcon',
);
`},52463:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m66.2 16.2 7 3c.7.3 1.2.8 1.5 1.5l15 31c0 .1.1.1.1.2.5.9.7 2 .7 3.1v.8l-2.1 18c-.4 3.5-3.4 6.2-7 6.2H58.6c-3.6 0-6.5-2.7-7-6.2l-.7-5.8H45l-.7 5.8C44 77.3 41 80 37.4 80H14.6c-3.6 0-6.5-2.7-7-6.2l-2.1-18c-.2-1.4.1-2.7.7-3.9v-.1l.1-.2 15-31c.3-.6.7-1.1 1.3-1.4l.2-.1 7-3c1.5-.7 3.3.1 3.9 1.6.6 1.5 0 3.2-1.4 3.9l-.2.1-6 2.6L14.8 48h24.8c3.9 0 7 3.1 7 7v.8l-.8 6.2h4.5l-.7-6.2c-.4-3.8 2.3-7.3 6.2-7.8h25.6L69.8 24.3l-6-2.6c-1.5-.7-2.2-2.4-1.6-3.9.7-1.5 2.5-2.2 4-1.6zM39.5 54H12.4c-.5.1-.9.6-.9 1.1l2.1 18c.1.5.5.9 1 .9h22.9c.5 0 .9-.4 1-.9l2.1-18V55c-.1-.6-.5-1-1.1-1zm44 0H56.4c-.5.1-.9.6-.9 1.1l2.1 18c.1.5.5.9 1 .9h22.9c.5 0 .9-.4 1-.9l2.1-18V55c-.1-.6-.5-1-1.1-1z"/>',
  'GlassesOutlinedIcon',
);
`},45106:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c6.8 0 13.1.8 18.8 2.1 2 .5 3.8 1 5.3 1.5.9.3 1.5.5 1.9.7 4 1.4 7 5.8 7 10.2v36.1c0 4.1-2.4 9-5.5 11.4L54.1 86c-3.5 2.6-8.8 2.6-12.3 0L20.5 69.8c-3.1-2.4-5.5-7.3-5.5-11.4v-36c0-4.4 3-8.8 7-10.2.4-.2 1-.4 1.9-.7 1.5-.5 3.3-1 5.3-1.5 5.7-1.2 12-2 18.8-2zm12.9 23.9L43 49.8l-7.9-7.9c-1.2-1.2-3.1-1.2-4.2 0s-1.2 3.1 0 4.2l10 10c1.2 1.2 3.1 1.2 4.2 0l20-20c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0z"/>',
  'GppGoodFilledIcon',
);
`},50343:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c6.8 0 13.1.8 18.8 2.1 2 .5 3.8 1 5.3 1.5.9.3 1.5.5 1.9.7 4 1.4 7 5.8 7 10.2v36.1c0 4.1-2.4 9-5.5 11.4L54.1 86c-3.5 2.6-8.8 2.6-12.3 0L20.5 69.8c-3.1-2.4-5.5-7.3-5.5-11.4v-36c0-4.4 3-8.8 7-10.2.4-.2 1-.4 1.9-.7 1.5-.5 3.3-1 5.3-1.5 5.7-1.2 12-2 18.8-2zm0 6c-6.3 0-12.2.7-17.4 1.9-1.8.4-3.4.9-4.8 1.3-.5.2-.9.3-1.2.4-.2.1-.3.1-.4.1-.1 0-.2.1-.2.1-1.5.5-3 2.6-3 4.5v36.1c0 2.2 1.5 5.3 3.1 6.6l21.3 16.2c1.3 1 3.7 1 5 0L71.9 65c1.6-1.2 3.1-4.4 3.1-6.6v-36c0-1.9-1.5-4-3-4.5l-.2-.1s-.2-.1-.4-.1c-.3-.1-.8-.3-1.2-.4-1.4-.4-3-.9-4.8-1.3-5.2-1.3-11.1-2-17.4-2zm12.9 17.9c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-20 20c-1.2 1.2-3.1 1.2-4.2 0l-10-10c-1.2-1.2-1.2-3.1 0-4.2s3.1-1.2 4.2 0l7.9 7.9 17.9-17.9z"/>',
  'GppGoodOutlinedIcon',
);
`},54260:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M36 13H22c-5 0-9 4-9 9v14c0 5 4 9 9 9h14c5 0 9-4 9-9V22c0-5-4-9-9-9zm-14 6h14c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3H22c-1.7 0-3-1.3-3-3V22c0-1.7 1.3-3 3-3zm14 32H22c-5 0-9 4-9 9v14c0 5 4 9 9 9h14c5 0 9-4 9-9V60c0-5-4-9-9-9zm-14 6h14c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3H22c-1.7 0-3-1.3-3-3V60c0-1.7 1.3-3 3-3zm52-44H60c-5 0-9 4-9 9v14c0 5 4 9 9 9h14c5 0 9-4 9-9V22c0-5-4-9-9-9zm-14 6h14c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3H60c-1.7 0-3-1.3-3-3V22c0-1.7 1.3-3 3-3zm14 32H60c-5 0-9 4-9 9v14c0 5 4 9 9 9h14c5 0 9-4 9-9V60c0-5-4-9-9-9zm-14 6h14c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3H60c-1.7 0-3-1.3-3-3V60c0-1.7 1.3-3 3-3z"/>',
  'GridViewOutlinedIcon',
);
`},34926:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M32.4 36h32c1.2 0 2-.8 2-2s-.8-2-2-2h-32c-1.2 0-2 .8-2 2s.8 2 2 2zm32 10h-32c-1.2 0-2 .8-2 2s.8 2 2 2h32c1.2 0 2-.8 2-2s-.8-2-2-2zm0 14h-32c-1.2 0-2 .8-2 2s.8 2 2 2h32c1.2 0 2-.8 2-2s-.8-2-2-2z"/>',
  'GripperBarHorizontalIcon',
);
`},93237:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M34.4 30c1.2 0 2 .8 2 2v32c0 1.2-.8 2-2 2s-2-.8-2-2V32c0-1.2.8-2 2-2zm28 0c1.2 0 2 .8 2 2v32c0 1.2-.8 2-2 2s-2-.8-2-2V32c0-1.2.8-2 2-2zm-14 0c1.2 0 2 .8 2 2v32c0 1.2-.8 2-2 2s-2-.8-2-2V32c0-1.2.8-2 2-2z"/>',
  'GripperBarVerticalIcon',
);
`},18884:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M61.1 20.3c.4-1.6 2-2.6 3.6-2.3 1.6.4 2.6 2 2.3 3.6L64 35h11c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3H62.6l-3.1 14H75c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3H58.2l-3.3 14.7c-.3 1.6-1.8 2.6-3.4 2.3h-.2c-1.6-.4-2.6-2-2.3-3.6L52 61H38.2l-3.3 14.7c-.3 1.6-1.8 2.6-3.4 2.3h-.2c-1.6-.4-2.6-2-2.3-3.6L32 61H21c-1.6 0-2.9-1.2-3-2.8V58c0-1.7 1.3-3 3-3h12.4l3.1-14H21c-1.6 0-2.9-1.2-3-2.8V38c0-1.7 1.3-3 3-3h16.8l3.3-14.7c.3-1.6 1.8-2.6 3.4-2.3h.2c1.6.4 2.6 2 2.3 3.6L44 35h13.9l3.2-14.7zM56.5 41H42.6l-3.1 14h13.9l3.1-14z"/>',
  'HashOutlinedIcon',
);
`},23374:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 17.4C53.2 13 57 11 62.6 11c11.8 0 19.9 7.2 23.3 19 .5 1.6-.5 3.3-2.1 3.7-1.6.5-3.3-.5-3.7-2.1C77.5 22.2 71.5 17 62.6 17c-3.9 0-6.6 1.4-11 5.2-.2.2-1.4 1.2-1.7 1.4-1.1 1-2.8 1-3.9 0-.3-.3-1.5-1.3-1.7-1.4-4.4-3.7-7.1-5.2-11-5.2C21.6 17 14 26.5 14 40.1c0 10.4 10.6 23.3 32.2 38.3 1 .7 2.4.7 3.5 0 4.4-3.1 7.4-5.3 8.8-6.4 1.3-1 3.2-.8 4.2.5s.8 3.2-.5 4.2c-1.5 1.2-4.5 3.4-9.1 6.6-3.1 2.2-7.3 2.2-10.4 0C19.7 67.4 8 53.1 8 40.1 8 23.4 17.9 11 33.4 11c5.6 0 9.4 2 14.6 6.4zM77 52h8c1.7 0 3 1.3 3 3s-1.3 3-3 3h-8v8c0 1.7-1.3 3-3 3s-3-1.3-3-3v-8h-8c-1.7 0-3-1.3-3-3s1.3-3 3-3h8v-8c0-1.7 1.3-3 3-3s3 1.3 3 3v8z"/>',
  'HeartAddOutlinedIcon',
);
`},57643:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M46.469 7.426C52.544 2.27 56.948 0 63.436 0c13.748 0 23.167 8.36 27.047 22.1a3.485 3.485 0 1 1-6.708 1.896C80.69 13.071 73.82 6.973 63.436 6.973c-4.522 0-7.663 1.662-12.751 6.02-.236.202-1.569 1.352-1.955 1.682a3.484 3.484 0 0 1-4.522 0c-.386-.33-1.719-1.48-1.955-1.682-5.088-4.358-8.23-6.02-12.751-6.02-13.734 0-22.532 11.008-22.532 26.886 0 12.09 12.337 27.116 37.419 44.54a3.54 3.54 0 0 0 4.052-.018c5.168-3.654 8.604-6.148 10.269-7.45a3.484 3.484 0 0 1 4.892.6 3.487 3.487 0 0 1-.6 4.895c-1.781 1.392-5.28 3.931-10.537 7.65a10.509 10.509 0 0 1-12.052.05C13.607 65.506 0 48.93 0 33.859 0 14.429 11.532 0 29.502 0c6.488 0 10.892 2.271 16.967 7.426Zm33.416 39.157h9.538A3.58 3.58 0 0 1 93 50.167a3.58 3.58 0 0 1-3.577 3.583h-9.538v9.556a3.58 3.58 0 0 1-3.577 3.583 3.58 3.58 0 0 1-3.577-3.583V53.75h-9.539a3.58 3.58 0 0 1-3.577-3.583 3.58 3.58 0 0 1 3.577-3.584h9.539v-9.555a3.58 3.58 0 0 1 3.577-3.584 3.58 3.58 0 0 1 3.577 3.584v9.555Z"/>',
  'HeartAddOutlinedBoldIcon',
);
`},12137:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M38.8 53c-1.1 1.2-1 3.1.2 4.2s3.1 1 4.2-.2l9.9-10.7c1.6-1.8 1.8-4.5.3-6.4-2.2-2.8-4.1-5.6-5.8-8.4-1.6-2.7.1-6.9 3.5-10.3 1-1 1.6-1.6 2.4-2.2 2.5-1.9 5.3-2.9 9.1-2.9C74.4 16 82 25.6 82 39.4 82 49.9 71.4 63 49.7 78.2c-1 .7-2.4.7-3.4 0C24.6 63 14 49.9 14 39.4 14 25.6 21.6 16 33.4 16c1.3 0 2.5.2 3.6.6a3.037 3.037 0 0 0 1.8-5.8c-1.7-.6-3.6-.8-5.5-.8C17.9 10 8 22.5 8 39.4c0 13.1 11.7 27.5 34.8 43.7 3.1 2.2 7.2 2.2 10.3 0C76.3 66.9 88 52.5 88 39.4 88 22.5 78.1 10 62.6 10c-5.1 0-9.2 1.5-12.7 4.2-1.1.8-1.8 1.5-3 2.7-5.2 5.2-7.9 11.9-4.5 17.7 1.7 2.8 3.5 5.5 5.6 8.3L38.8 53z"/>',
  'HeartBrokenIcon',
);
`},12599:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M62.6 11C78.1 11 88 23.4 88 40.1c0 13-11.7 27.2-34.8 43.3-3.1 2.2-7.2 2.2-10.3 0C19.7 67.3 8 53.1 8 40.1 8 23.4 17.9 11 33.4 11c5.6 0 9.4 2 14.6 6.4C53.2 13 57 11 62.6 11z"/>',
  'HeartFilledIcon',
);
`},21477:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M33.4 11c5.6 0 9.4 2 14.6 6.4C53.2 13 57 11 62.6 11c11.8 0 19.9 7.2 23.3 19 .5 1.6-.5 3.3-2.1 3.7-1.6.5-3.3-.5-3.7-2.1C77.5 22.2 71.6 17 62.6 17c-3.9 0-6.6 1.4-11 5.2-.2.2-1.4 1.2-1.7 1.4-1.1 1-2.8 1-3.9 0-.3-.3-1.5-1.3-1.7-1.4-4.4-3.7-7.1-5.2-11-5.2C21.6 17 14 26.5 14 40.1c0 10.4 10.6 23.3 32.2 38.3 1 .7 2.4.7 3.5 0 4.4-3.1 7.4-5.3 8.8-6.4 1.3-1 3.2-.8 4.2.5s.8 3.2-.5 4.2c-1.5 1.2-4.5 3.4-9.1 6.6-3.1 2.2-7.3 2.2-10.4 0C19.7 67.4 8 53.1 8 40.1 8 23.4 17.9 11 33.4 11zm36.4 52.1c-.8 0-1.5-.3-2.1-.8L58.9 54l-.1-.1c-1.1-1.1-1-2.9.1-4l.1-.1c1.2-1.1 3-1.1 4.1 0l6.7 6.3 13.1-12.4c1.2-1.1 3-1.1 4.1 0l.1.1c1.1 1.1 1.2 2.8.1 4l-.1.1-15.2 14.4c-.6.5-1.4.8-2.1.8z"/>',
  'HeartMarkedOutlinedIcon',
);
`},47983:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M62.6 11C78.1 11 88 23.4 88 40.1c0 13-11.7 27.2-34.8 43.3-3.1 2.2-7.2 2.2-10.3 0C19.7 67.3 8 53.1 8 40.1 8 23.4 17.9 11 33.4 11c5.6 0 9.4 2 14.6 6.4C53.2 13 57 11 62.6 11zm0 5.9c-3.9 0-6.6 1.4-11 5.2-.2.2-1.4 1.2-1.7 1.4-1.1 1-2.8 1-3.9 0-.3-.3-1.5-1.3-1.7-1.4-4.4-3.7-7.1-5.2-11-5.2C21.6 16.9 14 26.4 14 40c0 10.4 10.6 23.3 32.3 38.3 1 .7 2.4.7 3.4 0C71.4 63.3 82 50.4 82 40c0-13.6-7.6-23.1-19.4-23.1z"/>',
  'HeartOutlinedIcon',
);
`},42895:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 55c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm-.2-35c-4.5 0-8.7 2.3-11.1 5.9-.6 1-1.1 2-1.5 3.1-.5 1.6.4 3.3 1.9 3.8 1.6.5 3.3-.4 3.8-1.9.2-.6.5-1.1.8-1.7 1.3-2 3.6-3.2 6.1-3.2 4 0 7.2 3.1 7.2 7s-3.2 7-7.2 7c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3s3-1.3 3-3v-3.3C56.6 52.3 61 47.2 61 41c0-7.2-5.9-13-13.2-13z"/>',
  'HelpCircleFilledIcon',
);
`},19421:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm13 27c0 6.2-4.4 11.3-10.2 12.7V57c0 1.7-1.3 3-3 3s-3-1.3-3-3v-6c0-1.7 1.3-3 3-3 4 0 7.2-3.1 7.2-7s-3.2-7-7.2-7c-2.5 0-4.8 1.2-6.1 3.2-.3.5-.6 1.1-.8 1.7-.5 1.6-2.2 2.4-3.8 1.9-1.6-.5-2.4-2.2-1.9-3.8.4-1.1.9-2.1 1.5-3.1 2.4-3.7 6.6-5.9 11.1-5.9C55.1 28 61 33.8 61 41zM48 69c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>',
  'HelpCircleOutlinedIcon',
);
`},7998:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m77.1 44.4 4.9 2.7C81.5 28.7 66.5 14 48 14c-18.8 0-34 15.2-34 34s15.2 34 34 34c11.5 0 22-5.7 28.3-15.1.9-1.4 2.8-1.7 4.2-.8 1.4.9 1.7 2.8.8 4.2C73.9 81.2 61.5 88 48 88 25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40c0 1-.1 2.5-.2 4.4-.2 2.2-2.6 3.4-4.5 2.4l-9.1-5.1c-1.4-.8-2-2.6-1.1-4.1.7-1.5 2.6-2.1 4-1.2zM30.9 60.9 45 46.8V30c0-1.7 1.3-3 3-3s3 1.3 3 3v18c0 .8-.3 1.6-.9 2.1l-15 15c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3 0-4.2z"/>',
  'HistoryOutlinedIcon',
);
`},49949:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m56.7 10.4 28.7 24.2.5.4c3.5 3.3 3.9 8.7 1 12.4-.3.4-.7.8-1.2 1.1l-1 .6c-2.1 1.5-3.4 3.9-3.4 6.6v14.8c0 7.8-5.3 13.8-12.7 13.8H29.5c-7.6 0-14.5-6.2-14.5-13.8V54c0-2-1.2-3.8-3-4.6-1.1-.5-1.9-1-2.6-1.9-3-3.8-2.5-9.2.9-12.4l29-24.7c5-4 12.4-4 17.4 0zm-12.6 5.9L15.6 40.7c-.5.4-.7 1.2-.5 1.8 4.5 2 7.5 6.6 7.5 11.6v16.6c0 3.1 3.3 6.1 6.9 6.1h38.9c3.1 0 5.1-2.3 5.1-6.1V55.9c0-5.2 2.5-10 6.7-12.9l.7-.5.1-.3c.1-.6-.1-1.2-.5-1.6L51.9 16.4c-2.2-1.8-5.7-1.8-7.8-.1zm4 28c3 0 6.7 2.2 11.9 6.6 3 2.5 4.7 6.2 4.7 10.1v3.7c0 1.4-.7 2.6-1.9 3.3-1.2.7-2.6.7-3.8 0-1.2-.7-1.9-1.9-1.9-3.3V61c0-1.6-.7-3.2-2-4.2-2.1-1.8-3.9-3.1-5.3-3.9-.4-.2-.8-.5-1.3-.7l-.2-.2h-.2l-.3.1-.7.4-.7.4c-1.4.8-3.2 2.2-5.4 4-1.3 1-2 2.6-2 4.2v3.7c0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8V61c0-3.9 1.7-7.6 4.8-10.1 5.4-4.4 9-6.6 11.9-6.6z" style="fill:#3c3f44"/>',
  'HomeIcon',
);
`},84756:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m52.1 11.1 29.3 21.1c2.9 2.1 4.6 5.4 4.6 8.9V75c0 6.1-4.9 11-11 11H60V70c0-6.6-5.4-12-12-12s-12 5.4-12 12v16H21c-6.1 0-11-4.9-11-11V41.1c0-3.5 1.7-6.9 4.6-8.9l29.3-21.1c2.5-1.8 5.7-1.8 8.2 0z"/>',
  'HomeFilledIcon',
);
`},89965:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M14.6 32.1 43.9 11c2.4-1.8 5.7-1.8 8.2 0l29.3 21.1c2.9 2.1 4.6 5.4 4.6 8.9v34c0 6.1-4.9 11-11 11H21c-6.1 0-11-4.9-11-11V41.1c0-3.6 1.7-6.9 4.6-9zm3.5 4.9c-1.3.9-2.1 2.5-2.1 4.1V75c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V41.1c0-1.6-.8-3.1-2.1-4.1L48.6 15.9c-.3-.3-.8-.3-1.2 0L18.1 37z"/>',
  'HomeOutlinedIcon',
);
`},67127:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M71 7c3.9 0 7 3.1 7 7v7.1c0 6-2.2 11.7-6.1 16.2L62.7 48l9.5 11c3.6 4.3 5.7 9.7 5.8 15.4V82c0 3.9-3.1 7-7 7H25c-3.9 0-7-3.1-7-7v-7.3c0-6 2.2-11.8 6.1-16.3L33.2 48l-9.1-10.4c-3.8-4.4-6-10-6.1-15.8V14c0-3.9 3.1-7 7-7h46zm0 6H25c-.6 0-1 .4-1 1v7.3c0 4.6 1.7 8.9 4.7 12.4L38 44.3c1.9 2.2 1.9 5.4 0 7.5l-9.3 10.6c-3 3.4-4.6 7.8-4.7 12.4V82c0 .6.4 1 1 1h46c.6 0 1-.4 1-1v-7.1c0-4.5-1.7-8.9-4.7-12.3L58 51.7c-1.9-2.2-1.9-5.4 0-7.5L67.6 33c2.8-3.4 4.4-7.6 4.4-12v-7c0-.6-.4-1-1-1zM60 72c1.7 0 3 1.3 3 3s-1.3 3-3 3H36c-1.7 0-3-1.3-3-3s1.3-3 3-3h24z"/>',
  'HourglassOutlinedIcon',
);
`},55201:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M66 10a12 12 0 0 1 11.5 8.6L88 54v20c0 6.6-5.4 12-12 12H20c-6.6 0-12-5.4-12-12V54l10.5-35.4C20 13.5 24.6 10 30 10h36zm0 6H30c-2.6 0-4.9 1.6-5.7 4.1l-.1.2L14.3 54h11.5c1.3 0 2.5.9 2.9 2.2l2 6.9c.5 1.6 1.9 2.8 3.6 2.9h27.2c1.7 0 3.2-1.1 3.8-2.7l.1-.2 2-6.9c.4-1.3 1.5-2.2 2.9-2.2h11.5l-10-33.7c-.7-2.5-3-4.2-5.5-4.3H66z"/>',
  'InboxFilledIcon',
);
`},72645:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M70.28 80H9.37C5.922 80 0 73.934 0 70.393v-35.19c0-3.53 2.79-6.4 6.244-6.4h6.243c3.45 0 6.244 2.856 6.244 6.4V56.68a4.117 4.117 0 0 0 4.115 4.121h43.308a4.117 4.117 0 0 0 4.115-4.12v-21.48c0-3.529 2.79-6.4 6.244-6.4h6.243c3.45 0 6.244 2.857 6.244 6.4V70.41C89.023 73.94 83.103 80 79.65 80h-9.37Zm-6.246-47.998V52.11a2.288 2.288 0 0 1-2.284 2.29H27.268a2.288 2.288 0 0 1-2.286-2.29V32c0-5.303-4.195-9.605-9.368-9.605-3.131 0-3.131-1.76-3.131-1.76V9.605C12.487 4.304 16.682 0 21.862 0h45.292c5.18 0 9.37 4.304 9.37 9.605v11.033s0 1.76-3.117 1.76c-5.176.002-9.37 4.306-9.37 9.607l-.003-.003Z"/>',
  'InboxFilledBoldIcon',
);
`},68080:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M25.1 15.5c3-5.2 9.7-7 14.9-4.1l31.3 14.7H77c6.1 0 11 4.9 11 11V75c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V37.1c0-6 4.9-10.9 10.9-11l6.2-10.6zM77 32.1H19c-2.8 0-5 2.2-5 5V75c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V37.1c0-2.8-2.2-5-5-5zM55.3 44.8c.7-1.5 2.5-2.2 4-1.5 1.5.7 2.2 2.5 1.5 4l-10 22c-1.1 2.3-4.4 2.3-5.5 0l-10-22c-.7-1.5 0-3.3 1.5-4 1.5-.7 3.3 0 4 1.5l7.3 16 7.2-16zM37.1 16.6c-2.4-1.4-5.4-.6-6.8 1.8L25.9 26h31.4l-19.9-9.3s-.1 0-.1-.1h-.2z"/>',
  'LightVipOutlinedIcon',
);
`},46235:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M55.8 39.8c6.9 6.9 7 18.1.3 25.2l-.3.3-15.6 15.5c-7 7-18.4 7-25.5 0-7-7-7-18.4 0-25.5l7.4-7.4c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2L19 59.6c-4.7 4.7-4.7 12.3 0 17 4.6 4.6 12 4.7 16.7.2l.2-.2L51.6 61c4.7-4.7 4.7-12.3 0-17-1.2-1.2-1.2-3.1 0-4.2 1.1-1.2 3-1.2 4.2 0zm25-25c6.9 6.9 7 18.1.3 25.2l-.6.6-7.6 7.6c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2l7.9-7.9c4.7-4.7 4.7-12.3 0-17-4.6-4.6-12-4.7-16.7-.2l-.3.1L44 34.6c-4.7 4.7-4.7 12.3 0 17 1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0-6.9-6.9-7-18.1-.3-25.2l.3-.3 15.6-15.6c7-6.9 18.4-6.9 25.4.1z"/>',
  'LinkOutlinedIcon',
);
`},19244:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M20 66c3.3 0 6 2.7 6 6v4c0 3.3-2.7 6-6 6h-4c-3.3 0-6-2.7-6-6v-4c0-3.3 2.7-6 6-6h4zm63 5c1.7 0 3 1.3 3 3s-1.3 3-3 3H37c-1.7 0-3-1.3-3-3s1.3-3 3-3h46zm-63 1h-4v4h4v-4zm0-32c3.3 0 6 2.7 6 6v4c0 3.3-2.7 6-6 6h-4c-3.3 0-6-2.7-6-6v-4c0-3.3 2.7-6 6-6h4zm63 5c1.7 0 3 1.3 3 3s-1.3 3-3 3H37c-1.7 0-3-1.3-3-3s1.3-3 3-3h46zm-63 1h-4v4h4v-4zm0-32c3.3 0 6 2.7 6 6v4c0 3.3-2.7 6-6 6h-4c-3.3 0-6-2.7-6-6v-4c0-3.3 2.7-6 6-6h4zm63 5c1.7 0 3 1.3 3 3s-1.3 3-3 3H37c-1.7 0-3-1.3-3-3s1.3-3 3-3h46zm-63 1h-4v4h4v-4z"/>',
  'ListOutlinedIcon',
);
`},76852:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 0c26.5 0 48 21.5 48 48 0 2.2-.1 4.4-.4 6.6-.3 2-2.1 3.4-4 3.1-2-.3-3.4-2.1-3.1-4 .2-1.8.4-3.7.4-5.6C88.8 25.5 70.5 7.2 48 7.2S7.2 25.5 7.2 48 25.5 88.8 48 88.8c1.9 0 3.7-.1 5.6-.4 2-.3 3.8 1.1 4 3.1.3 2-1.1 3.8-3.1 4-2.1.3-4.3.5-6.5.5C21.5 96 0 74.5 0 48S21.5 0 48 0z"/>',
  'LoadingThreeQuartersOutlinedIcon',
);
`},38692:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 91C42.6 91 9 65.1 9 43.7S26.5 5 48 5s39 17.3 39 38.7S53.4 91 48 91zm0-35c6.6 0 12-5.4 12-12s-5.4-12-12-12-12 5.4-12 12 5.4 12 12 12z"/>',
  'LocationFilledIcon',
);
`},9090:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8C28.7 8 13 23.7 13 43c0 13 11.2 27.7 33.2 44.4 1.1.8 2.6.8 3.6 0l1.3-1 1.3-1C72.7 69.5 83 55.5 83 43 83 23.7 67.3 8 48 8zm0 6c16 0 29 13 29 29v.3c-.2 10.1-9.6 22.7-28.4 37.5l-.6.4C28.6 66.1 19 53.3 19 43c0-16 13-29 29-29zm0 15c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14zm0 6c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/>',
  'LocationOutlinedIcon',
);
`},69669:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M35.7 52.9C37.4 47.7 42.3 44 48 44s10.6 3.7 12.3 8.9c5.8-1.1 11.4-2.9 16.7-5.5V19c0-2.8-2.2-5-5-5H24c-2.8 0-5 2.2-5 5v28.4c5.3 2.6 10.9 4.4 16.7 5.5zm25.2 6C60 65.2 54.5 70 48 70s-12-4.8-12.9-11.1c-5.6-1-11-2.6-16.1-4.9v23c0 2.8 2.2 5 5 5h48c2.8 0 5-2.2 5-5V54c-5.2 2.2-10.6 3.9-16.1 4.9zM24 8h48c6.1 0 11 4.9 11 11v58c0 6.1-4.9 11-11 11H24c-6.1 0-11-4.9-11-11V19c0-6.1 4.9-11 11-11zm24 56c3.9 0 7-3.1 7-7s-3.1-7-7-7-7 3.1-7 7 3.1 7 7 7z"/>',
  'LuckyMoneyOutlinedIcon',
);
`},85100:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M36.457 80.34c-8.958.388-13.1 3.513-11.808 5.784 1.286 2.271 10.426 7.978 25.783 9.5 15.357 1.524 30.557.828 36.352.828 5.795 0 12.64-.561 9.097-2.625-3.537-2.068-14.095-7.385-27.575-10.435-13.474-3.053-22.89-3.439-31.85-3.053ZM.9 51.763c.634 2.75 4.818 9.76 16.879 15.09 9.567 4.245 20.509 7.278 32.145 8.91 8.644 1.25 16.811 2.947 14.113-.514-2.704-3.463-11.874-12.063-25.1-18.101-13.232-6.035-20.205-6.746-26.09-7.592-5.886-.85-12.58-.547-11.953 2.207h.006Zm4.063-28.461c-4.86 0-4.533 3.06-3.23 5.685 1.304 2.624 6.858 10.427 16.45 15.177 6.387 3.164 14.488 5.906 24.31 8.23-2.198-8.498-6.882-15.18-14.066-20.047-10.787-7.292-18.617-9.042-23.464-9.042v-.003ZM26.738.63c-3.316-.206-6.286 1.217-6.634 3.178l-.193 1.357c-.54 4.354.442 8.726 2.885 12.845 3.725 6.235 9.315 11.174 16.752 14.806 1.479-3.321 2.378-6.078 2.704-8.278.495-3.303.495-6.292-2.704-13.834-1.419-3.357-4.504-6.385-9.248-9.092-.97-.553-2.223-.899-3.562-.982Z" fill="#000" fill-rule="nonzero"/>',
  'MaiSuiLeftIcon',
);
`},14158:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M62.788 79.143c9.314.4 13.618 3.638 12.272 5.994-1.34 2.352-10.842 8.264-26.803 9.84-15.96 1.58-31.764.858-37.789.858-6.024 0-13.136-.58-9.46-2.722 3.683-2.136 14.658-7.652 28.669-10.81 14.005-3.16 23.796-3.558 33.11-3.16Zm33.165-28.162c-.634 2.74-4.817 9.727-16.879 15.04-9.566 4.23-20.509 7.253-32.145 8.88-8.638 1.246-16.812 2.936-14.107-.512 2.704-3.453 11.868-12.023 25.1-18.04 13.22-6.016 20.205-6.724 26.084-7.567 5.886-.847 12.58-.545 11.953 2.2h-.006ZM91.896 22.62c4.854 0 4.528 3.05 3.224 5.666-1.304 2.616-6.858 10.393-16.444 15.126-6.399 3.153-14.5 5.887-24.31 8.204 2.192-8.47 6.882-15.13 14.066-19.98 10.775-7.272 18.605-9.016 23.464-9.016ZM70.116.02c3.316-.205 6.286 1.214 6.634 3.168l.2 1.353c.538 4.339-.446 8.697-2.892 12.801-3.725 6.214-9.308 11.137-16.752 14.756-1.473-3.31-2.378-6.057-2.704-8.25-.495-3.292-.495-6.27 2.704-13.787 1.425-3.346 4.504-6.364 9.248-9.062.97-.55 2.223-.895 3.562-.978Z" fill="#000" fill-rule="nonzero"/>',
  'MaiSuiRightIcon',
);
`},13504:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 13c5 0 9.3 3.4 10.6 8l.3.4-.2.1c.2.8.3 1.7.3 2.5v48c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V24c0-.9.1-1.7.3-2.5l-.2-.1.3-.4c1.3-4.6 5.6-8 10.6-8h58zm5 13L54.7 47.7c-3.9 3-9.2 3.1-13.2.2l-.3-.2L14 26v46c0 2.7 2.1 4.9 4.8 5H77c2.8 0 5-2.2 5-5V26zm-5-7H19c-1.1 0-2.1.4-3 1l29 23c1.7 1.3 4.1 1.4 5.9.2l.1-.2 29-23c-.9-.6-1.9-1-3-1z"/>',
  'MailOutlinedIcon',
);
`},71297:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M74.5 16.6H64c-1.7 0-3-1.3-3-3s1.3-3 3-3h18c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3s-3-1.3-3-3v-11l-9.9 9.9C74 36.3 77 43.8 77 52c0 18.2-14.8 33-33 33S11 70.2 11 52s14.8-33 33-33c7.9 0 15.1 2.8 20.8 7.4l9.7-9.8zM44 79c14.9 0 27-12.1 27-27S58.9 25 44 25 17 37.1 17 52s12.1 27 27 27z"/>',
  'MaleOutlinedIcon',
);
`},66483:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<ellipse cx="48" cy="78" rx="25" ry="12" style="opacity:.3;fill-rule:evenodd;clip-rule:evenodd;enable-background:new"/><path d="M48 78c-4.4 0-32-21.4-32-39S30.3 7 48 7s32 14.3 32 32-27.6 39-32 39zm0-29.3c5.4 0 9.8-4.4 9.8-9.8s-4.4-9.8-9.8-9.8-9.8 4.4-9.8 9.8 4.4 9.8 9.8 9.8z"/>',
  'MapFilledIcon',
);
`},11487:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M8 44c0-1.7 1.3-3 3-3s3 1.4 3 3v29.7c0 .6.4 1 1 1 .2 0 .3 0 .5-.1L30 66.7c2.1-1.2 4.7-1.1 6.8.1l23.7 14c.3.2.6.2.9 0l20-10.1c.3-.2.6-.5.6-.9V44c0-1.7 1.3-3 3-3s3 1.4 3 3v25.8c0 2.7-1.5 5.1-3.9 6.3l-20 10.1c-2.1 1.1-4.6 1-6.6-.2L33.8 72c-.3-.2-.7-.2-1 0l-14.5 7.9c-1 .6-2.2.8-3.3.8-3.9 0-7-3.2-7-7.1V44zm63-12.4c0 8.2-6.9 18.1-20.3 30-1.5 1.3-3.8 1.3-5.3 0C31.9 49.7 25 39.9 25 31.6 25 19.1 35.3 9 48 9s23 10.1 23 22.6zm-40 0c0 5.8 5.6 14 17 24.3 11.4-10.3 17-18.6 17-24.3C65 22.5 57.4 15 48 15s-17 7.5-17 16.6zM48 38c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>',
  'MapOutlinedIcon',
);
`},77922:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 75H51.3l-8.1 9c-1.1 1.2-3 1.3-4.2.2s-1.3-3-.2-4.2l9-10c.6-.6 1.4-1 2.2-1h27c2.8 0 5-2.2 5-5V22c0-2.8-2.2-5-5-5H19c-2.8 0-5 2.2-5 5v42c0 2.8 2.2 5 5 5h13c1.7 0 3 1.3 3 3s-1.3 3-3 3H19c-6.1 0-11-4.9-11-11V22c0-6.1 4.9-11 11-11h58c6.1 0 11 4.9 11 11v42c0 6.1-4.9 11-11 11zM66 32c1.7 0 3 1.3 3 3s-1.3 3-3 3H30c-1.7 0-3-1.3-3-3s1.3-3 3-3h36zM48 48c1.7 0 3 1.3 3 3s-1.3 3-3 3H30c-1.7 0-3-1.3-3-3s1.3-3 3-3h18z"/>',
  'MessageOutlinedIcon',
);
`},46234:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M51 79.9V85c0 1.7-1.3 3-3 3s-3-1.3-3-3v-5.1C27.6 78.4 14 63.8 14 46v-2c0-1.7 1.3-3 3-3s3 1.3 3 3v2c0 15.5 12.5 28 28 28s28-12.5 28-28v-2c0-1.7 1.3-3 3-3s3 1.3 3 3v2c0 17.8-13.6 32.4-31 33.9zM28 28c0-11 9-20 20-20s20 9 20 20v18c0 11-9 20-20 20s-20-9-20-20V28zm6 0v18c0 7.7 6.3 14 14 14s14-6.3 14-14V28c0-7.7-6.3-14-14-14s-14 6.3-14 14z"/>',
  'MicOutlinedIcon',
);
`},77634:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M75 13c6.1 0 11 4.9 11 11v24c0 1.7-1.3 3-3 3s-3-1.3-3-3V24c0-2.8-2.2-5-5-5H21c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h21c1.7 0 3 1.3 3 3s-1.3 3-3 3H21c-6.1 0-11-4.9-11-11V24c0-6.1 4.9-11 11-11h54zm5 44c3.3 0 6 2.7 6 6v14c0 3.3-2.7 6-6 6H58c-3.3 0-6-2.7-6-6V63c0-3.3 2.7-6 6-6h22zm0 6H58v14h22V63zM32.2 29.8 45 42.6V40c0-1.6 1.2-2.9 2.8-3h.2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H38c-1.7 0-3-1.3-3-3v-.2c.1-1.6 1.4-2.8 3-2.8h2.9l-13-13c-1.2-1.2-1.2-3.1 0-4.2 1.2-1.2 3.1-1.2 4.3 0z"/>',
  'MiniContractOutlinedIcon',
);
`},13048:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M29 42h38c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H29c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2z"/>',
  'MinusIcon',
);
`},24831:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M70 8c6.1 0 11 4.9 11 11v58c0 6.1-4.9 11-11 11H26c-6.1 0-11-4.9-11-11V19c0-6.1 4.9-11 11-11h44zM56 73H40c-1.7 0-3 1.3-3 3s1.3 3 3 3h16c1.7 0 3-1.3 3-3s-1.3-3-3-3zm14-59H26c-2.8 0-5 2.2-5 5v45h54V19c0-2.8-2.2-5-5-5z"/>',
  'MobileFilledIcon',
);
`},4413:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M24 8h48c6.1 0 11 4.9 11 11v58c0 6.1-4.9 11-11 11H24c-6.1 0-11-4.9-11-11V19c0-6.1 4.9-11 11-11zm0 6c-2.8 0-5 2.2-5 5v58c0 2.8 2.2 5 5 5h48c2.8 0 5-2.2 5-5V19c0-2.8-2.2-5-5-5H24zm16 58c-1.7 0-3-1.3-3-3s1.3-3 3-3h16c1.7 0 3 1.3 3 3s-1.3 3-3 3H40z"/>',
  'MobileOutlinedIcon',
);
`},18886:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M16.7 61.2c2.9 6.9 8 12.6 14.4 16.3V48.3L18 60.5c-.4.4-.8.6-1.3.7zm-1.9-5.9L34.4 37H15.8c-1.2 3.5-1.8 7.2-1.8 11 0 2.5.3 5 .8 7.3zM43.1 37c-.1.2-.3.4-.5.6L36.8 43c.2.4.3.8.3 1.2v7.5c.3.2.6.4.9.7l6.3 6.6h8.5l6.4-6.8v-9l-6.4-6.3c-.2 0-.5.1-.8.1h-8.9zm-6 43.2C40.5 81.4 44.2 82 48 82c3.1 0 6-.4 8.9-1.2L37.1 60v20.2zm25.8-1.6c6.1-3 11.2-7.7 14.6-13.6H50l12.4 13c.2.1.4.3.5.6zM80.2 59c1.2-3.4 1.8-7.1 1.8-11 0-3.4-.5-6.8-1.5-9.9L61 59h19.2zM18.6 31h28.2L33.7 18.1c-.2-.2-.4-.5-.6-.7C27 20.4 22 25.1 18.6 31zm20.6-15.9 20 19.6V15.9C55.7 14.7 51.9 14 48 14c-3 0-6 .4-8.8 1.1zm26 26.8v3.8l12.6-13.5.2-.2c-3-5.6-7.4-10.2-12.8-13.4v23.3zM48 88C25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40-17.9 40-40 40z"/>',
  'MomentsOutlinedIcon',
);
`},20455:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M55 10c.8 0 1.6 0 2.4.1C51 16.4 47 25.2 47 35c0 19.3 15.7 35 35 35 1.4 0 2.8-.1 4.2-.2C79.3 79.6 67.9 86 55 86c-21 0-38-17-38-38s17-38 38-38z"/>',
  'MoonOutlinedIcon',
);
`},51031:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M22 40c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm26 0c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm26 0c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z"/>',
  'MoreIcon',
);
`},21789:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M28 55c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm20 0c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm20 0c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/>',
  'MoreOutlinedIcon',
);
`},10301:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path class="st0" d="M48 26.7c2.9 0 5.3-2.4 5.3-5.3S50.9 16 48 16s-5.3 2.4-5.3 5.3 2.4 5.4 5.3 5.4zm0 26.6c2.9 0 5.3-2.4 5.3-5.3s-2.4-5.3-5.3-5.3-5.3 2.4-5.3 5.3 2.4 5.3 5.3 5.3zM48 80c2.9 0 5.3-2.4 5.3-5.3s-2.4-5.3-5.3-5.3-5.3 2.4-5.3 5.3S45.1 80 48 80z"/>',
  'MoreVerticalOutlinedIcon',
);
`},53095:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M34.9 15.4c1.5-.6 3.3.2 3.9 1.7s-.2 3.3-1.8 3.9c-12 4.5-20 16-20 29 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-15.5 9.6-29.2 23.9-34.6zM21.8 76.1c-1.2-1.2-1.2-3.1 0-4.2s3.1-1.2 4.2 0c5.8 5.8 13.6 9.1 22 9.1 8.3 0 16.2-3.3 21.9-9.1 1.2-1.2 3.1-1.2 4.2 0s1.2 3.1 0 4.2C67.3 83 58 87 48 87s-19.3-4-26.2-10.9zM85 50c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-13-8.1-24.5-20-29-1.5-.6-2.3-2.3-1.7-3.9.6-1.5 2.3-2.3 3.9-1.7C75.4 20.8 85 34.5 85 50zM48 22c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm32 47c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm-64 0c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>',
  'MovieAppointmentOutlinedIcon',
);
`},9518:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40 0 .9 0 1.8-.1 2.6-.1 1-.2 1.9-.3 2.9v.3c-.2 1.4-.5 2.8-.8 4.1v.3l-.1.5v.1c-.3.9-.5 1.8-.9 2.7 0 .1-.1.2-.1.3-1.9 5.3-5 10.1-8.8 14.1 2.2.3 4.1 1 5.9 2.2 1.4.9 1.7 2.8.8 4.2-.9 1.4-2.8 1.7-4.2.8-2.9-1.9-7.3-1.8-13.5.9-.2.1-.4.2-.5.3-.1 0-.1.1-.2.1-.1.1-.3.1-.4.2h-.1c-.2.1-.3.2-.5.2h-.1c-.2.1-.3.1-.5.2 0 0-.1 0-.1.1-.3.1-.7.3-1 .4-.1 0-.1.1-.2.1s-.2.1-.4.1c-.1 0-.2.1-.2.1-.2.1-.3.1-.5.2h-.1c-.2.1-.3.1-.5.2-.1 0-.1 0-.2.1-.2.1-.3.1-.5.2h-.1c-.2 0-.3.1-.5.1-.1 0-.1 0-.2.1-.1 0-.2.1-.4.1-.1 0-.2.1-.3.1-.1 0-.2.1-.3.1-.1 0-.2 0-.3.1-.2 0-.3.1-.5.1h-.1c-1 .2-2 .4-2.9.6h-.9c-.8.1-1.6.2-2.3.2h-2.9C25.9 88 8 70.1 8 48S25.9 8 48 8zm0 49c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm15-15c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-30 0c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm15-15c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"/>',
  'MovieFilledIcon',
);
`},81386:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M79.2 83c-2.9-1.9-7.3-1.8-13.5.9C60.2 86.6 54.2 88 48 88 25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40c0 6.3-1.4 12.3-4.2 17.8-.7 1.5-2.5 2.1-4 1.4-1.5-.7-2.1-2.5-1.4-4C80.8 58.5 82 53.3 82 48c0-18.8-15.2-34-34-34S14 29.2 14 48s15.2 34 34 34c5.3 0 10.5-1.2 15.1-3.5l.1-.1c7.9-3.4 14.5-3.7 19.3-.4 1.4.9 1.7 2.8.8 4.2-.9 1.4-2.7 1.7-4.1.8zM48 39c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm15 15c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM48 69c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM33 54c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>',
  'MovieOutlinedIcon',
);
`},30206:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M9 48.6c-1.1-.3-1.9-1.2-2-2.3s.5-2.2 1.5-2.7L85.2 7.3c1-.5 2.2-.3 3 .5.8.8 1 2 .5 3L52.4 87.5c-.5 1-1.6 1.6-2.7 1.5s-2.1-.9-2.3-2l-7.7-30.7L9 48.6z"/>',
  'NearMeIcon',
);
`},44546:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M78.9 11.4c1.9 0 3.4 1.5 3.4 3.4v66.3c0 1.9-1.5 3.4-3.4 3.4s-3.4-1.5-3.4-3.4v-28L22.9 83.9c-2.1 1.3-4.9.6-6.2-1.4-.5-.7-.7-1.5-.7-2.3V15.8c0-2.4 2-4.3 4.5-4.3.8 0 1.7.2 2.4.6l52.5 30.8v-28c0-1.9 1.6-3.5 3.5-3.5z"/>',
  'NextFilledIcon',
);
`},25430:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M68 16h7c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H21c-6.1 0-11-4.9-11-11V27c0-6.1 4.9-11 11-11h7v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3h28v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3zm0 6v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3H34v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3h-7c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V27c0-2.8-2.2-5-5-5h-7z"/>',
  'NoteOutlinedIcon',
);
`},46507:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M512 981.333a412.444 412.444 0 1 1 0-824.889 412.444 412.444 0 0 1 0 824.89zM512 896a327.111 327.111 0 1 0 0-654.222A327.111 327.111 0 0 0 512 896zM98.133 228.238a42.667 42.667 0 0 1-48.924-69.973L235.52 27.819a42.667 42.667 0 0 1 48.924 69.973l-186.31 130.39zm830.578 0L742.286 97.678a42.667 42.667 0 1 1 48.925-69.916l186.425 130.56a42.667 42.667 0 1 1-48.925 69.916zM682.667 526.222a42.667 42.667 0 1 1 0 85.334H469.333V398.222a42.667 42.667 0 0 1 85.334 0v128h128z"/>',
  'NoticeOutlinedIcon',
);
`},13422:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M72 8H24c-6.1 0-11 4.9-11 11v58c0 6.1 4.9 11 11 11h48c6.1 0 11-4.9 11-11V19c0-6.1-4.9-11-11-11zm0 6c2.8 0 5 2.2 5 5v58c0 2.8-2.2 5-5 5H24c-2.8 0-5-2.2-5-5V19c0-2.8 2.2-5 5-5h48zM32 41c-1.7 0-3-1.3-3-3s1.3-3 3-3h32c1.7 0 3 1.3 3 3s-1.3 3-3 3H32zm0 16c-1.7 0-3-1.3-3-3s1.3-3 3-3h20c1.7 0 3 1.3 3 3s-1.3 3-3 3H32z"/>',
  'OrderOutlinedIcon',
);
`},13614:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M63.6 8.4c10.5 0 19.1 8.1 19.5 18.4v39.3c0 10.3-8.2 18.8-18.7 19.2h-32c-10.5 0-19.1-8.1-19.5-18.4V27.6c0-10.3 8.2-18.8 18.7-19.2h1.1c2.1 0 3.8 1.6 3.9 3.6s-1.4 3.8-3.4 4h-1.4c-5.9.3-10.7 5-11 10.9v39.2c0 6.1 4.8 11.2 11 11.5h32c6.2 0 11.3-4.8 11.7-10.9V27.6c0-6.4-5.3-11.5-11.7-11.5-2.2 0-3.9-1.7-3.9-3.9s1.6-3.8 3.7-3.8zm-1.8 45.1c1.4 0 2.7.7 3.4 1.9.7 1.2.7 2.7 0 3.9-.7 1.2-2 1.9-3.4 1.9H34.5c-2.2 0-3.9-1.7-3.9-3.8 0-2.1 1.8-3.8 3.9-3.9h27.3zM34.5 32.4h27.4c2.1 0 3.8 1.6 3.9 3.6.1 2-1.4 3.8-3.5 4.1H34.5c-2.1 0-3.8-1.6-3.9-3.6-.1-2 1.4-3.8 3.4-4.1h27.9-27.4zM52 8.4c2.1 0 3.8 1.6 3.9 3.6s-1.4 3.8-3.4 4h-8.4c-2.1 0-3.8-1.6-3.9-3.6s1.4-3.8 3.4-4H52z" style="fill:#3c3f44"/>',
  'OrdersOutlinedIcon',
);
`},72272:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M80.9 10.9c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2L42.7 57.5c-1.2 1.2-3.1 1.2-4.2 0s-1.2-3.1 0-4.2l42.4-42.4zM80 42c0-1.7 1.3-3 3-3s3 1.3 3 3v33c0 6.1-4.9 11-11 11H21c-6.1 0-11-4.9-11-11V21c0-6.1 4.9-11 11-11h32c1.7 0 3 1.3 3 3s-1.3 3-3 3H21c-2.8 0-5 2.2-5 5v54c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V42z"/>',
  'PageEditOutlinedIcon',
);
`},40781:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M73 11c6.1 0 11 4.9 11 11v60c0 2.4-2.7 3.8-4.7 2.5l-7.2-4.8-5.7 4.3c-1.4 1-3.4 1-4.8-.1L56 79.8 50.4 84c-1.4 1-3.4 1-4.8-.1L40 79.8 34.4 84c-1.4 1-3.4 1-4.8-.1l-5.7-4.3-7.2 4.8c-2 1.3-4.7-.1-4.7-2.5V22c0-6.1 4.9-11 11-11h50zm0 6H23c-2.8 0-5 2.2-5 5v54.4l3.7-2.5c1.5-.9 3.3-.9 4.7.1l5.6 4.2 5.6-4.2c1.4-1.1 3.4-1.1 4.8 0l5.6 4.2 5.6-4.2c1.4-1.1 3.4-1.1 4.8 0l5.6 4.2 5.6-4.2c1.4-1 3.2-1.1 4.6-.1l3.7 2.5V22c.1-2.8-2.1-5-4.9-5zM53 49c1.7 0 3 1.3 3 3s-1.3 3-3 3H33c-1.7 0-3-1.3-3-3s1.3-3 3-3h20zm10-16c1.7 0 3 1.3 3 3s-1.3 3-3 3H33c-1.7 0-3-1.3-3-3s1.3-3 3-3h30z"/>',
  'PaperOutlinedIcon',
);
`},89984:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M27 36v-7c0-11.6 9.4-21 21-21s21 9.4 21 21v7h1c6.1 0 11 4.9 11 11v30c0 6.1-4.9 11-11 11H26c-6.1 0-11-4.9-11-11V47c0-6.1 4.9-11 11-11h1zm6 0h30v-7c0-8.3-6.7-15-15-15s-15 6.7-15 15v7zM21 47v30c0 2.8 2.2 5 5 5h44c2.8 0 5-2.2 5-5V47c0-2.8-2.2-5-5-5H26c-2.8 0-5 2.2-5 5z"/>',
  'PasswordOutlinedIcon',
);
`},51793:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M68.3 56.5c9.1 3.3 13.8 13.2 10.8 22.3l-.3.8C75.6 88.5 64.8 93 56.4 90l-4-1.5h-.1c-12.8-5.9-24.4-16.6-30-27.8-6.7-13.2-8.4-30.3-3.5-43.9C22.4 7.1 32.2 2.7 41.7 6.2c9.3 3.4 14 13.6 10.6 22.9-2.4 6.5-8.2 10.5-14.9 11 .8 3.8 2.1 7.6 3.9 11.2C43.4 55.4 46 59 49 62c4.7-5.7 12.1-8.1 19.3-5.5z"/>',
  'PhoneFilledIcon',
);
`},89571:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M42.7 9.1c8.5 3.1 12.9 12.7 9.8 21.3-2.2 6.1-7.5 9.8-13.7 10.3.7 3.5 1.9 7.1 3.6 10.4 1.9 3.8 4.3 7.2 7.1 10 4.3-5.3 11.2-7.5 17.7-5.1 8.4 3.1 12.7 12.3 10 20.8l-.3.8c-3 8.2-12.9 12.5-20.6 9.7l-3.7-1.4h-.1c-11.9-5.7-22.5-15.7-27.7-26-6.1-12.3-7.8-28.2-3.2-40.8 3.3-9.1 12.3-13.2 21.1-10zm-2.1 5.6c-5.7-2.1-11.3.5-13.4 6.4-3.9 10.7-2.6 24.9 2.9 36.1 4.5 9 13.9 17.9 24.3 22.9l.4.2 3.5 1.3c4.7 1.7 10.9-1.1 12.8-5.8l.1-.2.2-.7.1-.2c1.6-5.3-1.1-10.9-6.2-12.9l-.3-.1c-3.9-1.4-8-.3-10.8 3l-.2.2c-2.2 2.8-6.4 3-8.9.5-3.2-3.2-6-7.2-8.2-11.6C35 50 33.7 46 32.8 42c-.7-3.5 1.7-6.8 5.2-7.2h.2c4-.3 7.2-2.6 8.5-6.3 2-5.4-.7-11.4-6-13.5l-.1-.3z"/>',
  'PhoneOutlinedIcon',
);
`},78479:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M88 51.9V72c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V24c0-6.1 4.9-11 11-11h58c6.1 0 11 4.9 11 11v27.9zm-6-7V24c0-2.8-2.2-5-5-5H19c-2.8 0-5 2.2-5 5v32.3c1.3-.2 2.7-.3 4-.3 6.2 0 12.1 2.1 16.9 5.9.1.1.2.2.3.2C40 49.5 52.2 41 66 41c6.2 0 11.9 1.6 16 3.9zm0 7.7c-.5-.8-2-2-4.1-3.1C74.7 48 70.6 47 66 47c-11.4 0-21.5 7.2-25.4 17.7-.3.7-.7 1.9-1.3 3.6-.7 2-3.2 2.6-4.8 1.2-1.5-1.4-2.7-2.3-3.4-2.9-3.7-3-8.3-4.6-13.1-4.6-1.4 0-2.7.1-4 .4V72c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V52.6zM30 45c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-6c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z"/>',
  'PictureOutlinedIcon',
);
`},38879:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm-7.7 17c.6 0 1.2.2 1.7.5l23.4 13.8c1.6.9 2.1 2.9 1.1 4.5-.3.5-.7.8-1.1 1.1L42 64.5c-1.6.9-3.6.4-4.5-1.1-.3-.5-.5-1.1-.5-1.7V34.2c0-1.7 1.5-3.2 3.3-3.2z"/>',
  'PlayCircleOutlinedIcon',
);
`},39082:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 9c21.5 0 39 17.5 39 39S69.5 87 48 87 9 69.5 9 48 26.5 9 48 9zm0 9c-16.6 0-30 13.4-30 30s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm-8.7 14c.6 0 1.2.2 1.7.4l23.4 13.3c1.6.9 2.1 2.8 1.1 4.3-.3.4-.7.8-1.1 1.1L41 64.6c-1.6.9-3.6.4-4.5-1.1-.3-.5-.5-1.1-.5-1.7V35.2c0-1.8 1.5-3.2 3.3-3.2z"/>',
  'PlayCircleOutlinedBoldIcon',
);
`},83970:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M61.2 11.6c.1.1.1.2.2.3l2.7 5.3c.7 1.4 2.2 2.2 3.7 2.2l5.9-.3c2.2-.1 4.1 1.6 4.2 3.8v.4l-.3 5.9c-.1 1.6.8 3 2.2 3.7l5.3 2.7c2 1 2.7 3.4 1.7 5.4-.1.1-.1.2-.2.3l-3.2 5c-.8 1.3-.8 3 0 4.3l3.2 5c1.2 1.9.7 4.3-1.2 5.5-.1.1-.2.1-.3.2L79.8 64c-1.4.7-2.2 2.2-2.2 3.7l.3 5.9c.1 2.2-1.6 4.1-3.8 4.2h-.4l-5.9-.3c-1.6-.1-3 .8-3.7 2.2L61.4 85c-1 2-3.4 2.7-5.4 1.7-.1-.1-.2-.1-.3-.2l-5-3.2c-1.3-.8-3-.8-4.3 0l-5 3.2c-1.9 1.2-4.3.7-5.5-1.2-.1-.1-.1-.2-.2-.3L33 79.7c-.7-1.4-2.2-2.2-3.7-2.2l-5.9.3c-2.2.1-4.1-1.6-4.2-3.8v-.4l.3-5.9c.1-1.6-.8-3-2.2-3.7L12 61.4c-2-1-2.7-3.4-1.7-5.4.1-.1.1-.2.2-.3l3.2-5c.8-1.3.8-3 0-4.3l-3.2-5c-1.2-1.9-.7-4.3 1.2-5.5.1-.1.2-.1.3-.2l5.3-2.7c1.4-.7 2.2-2.2 2.2-3.7l-.3-5.9c-.1-2.2 1.6-4.1 3.8-4.2h.4l5.9.3c1.6.1 3-.8 3.7-2.2l2.7-5.3c1-2 3.4-2.7 5.4-1.7.1.1.2.1.3.2l5 3.2c1.3.8 3 .8 4.3 0l5-3.2c1.8-1.3 4.3-.7 5.5 1.1zm-3.7 40.9c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.3-5-5-5zm3-16C59 35 56.6 35 55 36.4l-.2.2-18.3 18.2c-1.6 1.6-1.6 4.1 0 5.6 1.5 1.6 3.9 1.6 5.5.2l.2-.2 18.3-18.3c1.5-1.5 1.5-4 0-5.6zm-21-2c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"/>',
  'PreferentialEventFilledIcon',
);
`},50505:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M34.4 11c11.2 0 20.3 9.1 20.4 20.3.8-.1 1.7-.1 2.5-.1C72 31.2 84 43.3 84 58.1S72 85 57.2 85h-7.3c-1.7 0-3-1.3-3-3s1.3-3 3-3h7.3C68.7 79 78 69.6 78 58.1s-9.3-20.9-20.8-20.9c-1.7 0-3.4.2-5.1.6-2.1.5-4.1-1.3-3.7-3.5.2-.9.3-1.9.3-2.9 0-8-6.4-14.5-14.4-14.5S20 23.5 20 31.5V49c0 1.7-1.3 3-3 3s-3-1.3-3-3V31.5C14 20.2 23.1 11 34.4 11zM17 60c1.7 0 3 1.3 3 3l.2 16H36c1.7 0 3 1.3 3 3s-1.3 3-3 3H17.2c-1.6 0-3-1.3-3-3L14 63c0-1.6 1.3-3 3-3z"/>',
  'PublicWelfareOutlinedIcon',
);
`},76436:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88c-7.3 0-14.4-2-20.5-5.7-.2-.1-.9-.5-1.9-1.1l-9.8 2.7c-2.2.6-4.3-1.4-3.7-3.7l2.7-9.8c-1-1.8-1.7-2.9-2-3.6C9.6 61.1 8 54.7 8 48 8 25.9 25.9 8 48 8zm0 55c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm-.2-35c-4.5 0-8.7 2.3-11.1 5.9-.6 1-1.1 2-1.5 3.1-.5 1.6.4 3.3 1.9 3.8 1.6.5 3.3-.4 3.8-1.9.2-.6.5-1.1.8-1.7 1.3-2 3.6-3.2 6.1-3.2 4 0 7.2 3.1 7.2 7s-3.2 7-7.2 7c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3s3-1.3 3-3v-3.3C56.6 52.3 61 47.2 61 41c0-7.2-5.9-13-13.2-13z"/>',
  'QAFilledIcon',
);
`},77140:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M85 62c1.7 0 3 1.3 3 3v12c0 6.1-4.9 11-11 11H66c-1.7 0-3-1.3-3-3s1.3-3 3-3h11c2.8 0 5-2.2 5-5V65c0-1.7 1.3-3 3-3zm-74 0c1.7 0 3 1.3 3 3v12c0 2.8 2.2 5 5 5h11c1.7 0 3 1.3 3 3s-1.3 3-3 3H19c-6.1 0-11-4.9-11-11V65c0-1.7 1.3-3 3-3zm51-2c1.7 0 3 1.3 3 3v5h5c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3h-8c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3zm-36 0c1.7 0 3 1.3 3 3v5h5c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3h-8c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3zm22 0c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3s-3-1.3-3-3v-5h-5c-1.6 0-2.9-1.2-3-2.8V63c0-1.7 1.3-3 3-3h8zm22-18c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3s-3-1.3-3-3v-5h-5c-1.6 0-2.9-1.2-3-2.8V45c0-1.7 1.3-3 3-3h8zM44 22c3.9 0 7 3.1 7 7v14c0 3.9-3.1 7-7 7H30c-3.9 0-7-3.1-7-7V29c0-3.9 3.1-7 7-7h14zm0 6H30c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V29c0-.6-.4-1-1-1zm18-6c1.7 0 3 1.3 3 3v5h5c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3h-8c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3zM77 8c6.1 0 11 4.9 11 11v12c0 1.7-1.3 3-3 3s-3-1.3-3-3V19c0-2.8-2.2-5-5-5H66c-1.7 0-3-1.3-3-3s1.3-3 3-3h11zM30 8c1.7 0 3 1.3 3 3s-1.3 3-3 3H19c-2.8 0-5 2.2-5 5v12c0 1.7-1.3 3-3 3s-3-1.3-3-3V19c0-6.1 4.9-11 11-11h11z"/>',
  'QRCodeOutlinedIcon',
);
`},35276:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M29.4 20c-3.4 0-6.2 1.2-8.6 3.1-2.2 2.1-3.4 5.1-3.4 8.6s1.2 6.2 3.4 8.2C23.2 42 26 43 29.6 43h.6c1.1 0 1.9-.1 2.6-.4-.8 10.3-6.4 18.6-16.8 25l5.2 8.4C36.4 68.2 44 55.8 44 38.9 44 26.4 39.2 20 29.4 20zm36.2 0c-3.4 0-6.4 1.2-8.8 3.1-2.2 2.1-3.4 5.1-3.4 8.6s1.2 6.2 3.4 8.2c2.4 2.1 5.4 3.1 8.8 3.1h.6c1.1 0 1.9-.1 2.6-.4-.6 10.3-6.2 18.6-16.8 25l5.4 8.4C72.6 68.2 80 55.8 80 38.9 80 26.4 75.2 20 65.6 20z"/>',
  'QuoteEndIcon',
);
`},90389:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M66.6 76c3.4 0 6.2-1.2 8.6-3.1 2.2-2.1 3.4-5.1 3.4-8.6s-1.2-6.2-3.4-8.2C72.8 54 70 53 66.4 53c-1.4 0-2.4 0-3.2.4.8-10.3 6.4-18.6 16.8-25L74.8 20C59.6 27.8 52 40.2 52 57.1 52 69.6 56.8 76 66.6 76zm-36.2 0c3.4 0 6.4-1.2 8.8-3.1 2.2-2.1 3.4-5.1 3.4-8.6s-1.2-6.2-3.4-8.2C36.8 54 33.8 53 30.4 53c-1.4 0-2.4 0-3.2.4.6-10.3 6.2-18.7 16.8-25.1L38.6 20C23.4 27.8 16 40.2 16 57.1 16 69.6 20.8 76 30.4 76z"/>',
  'QuoteStartIcon',
);
`},52177:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zM36.1 31.7c1.3-1.1 3.2-.9 4.2.4l7.7 9.2 7.7-9.2c1.1-1.3 3-1.4 4.2-.4 1.3 1.1 1.4 3 .4 4.2L53.6 44H58c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3h-6.5v4H58c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3h-6.5v4c0 1.6-1.2 2.9-2.8 3h-.2c-1.7 0-3-1.3-3-3v-4H38c-1.6 0-2.9-1.2-3-2.8V57c0-1.7 1.3-3 3-3h7.5v-4H38c-1.6 0-2.9-1.2-3-2.8V47c0-1.7 1.3-3 3-3h4.4l-6.7-8.1c-1-1.2-.9-3 .2-4.1l.2-.1z"/>',
  'RMBCircleOutlinedIcon',
);
`},96858:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M45.5 53v-4H38c-1.7 0-3-1.3-3-3s1.3-3 3-3h4.4l-6.7-8.1c-1.1-1.3-.9-3.2.4-4.2 1.3-1.1 3.2-.9 4.2.4l7.7 9.2 7.7-9.2c1.1-1.3 3-1.4 4.2-.4 1.3 1.1 1.4 3 .4 4.2L53.6 43H58c1.7 0 3 1.3 3 3s-1.3 3-3 3h-6.5v4H58c1.7 0 3 1.3 3 3s-1.3 3-3 3h-6.5v4c0 1.7-1.3 3-3 3s-3-1.3-3-3v-4H38c-1.7 0-3-1.3-3-3s1.3-3 3-3h7.5zm31.6-8.6 4.9 2.7C81.5 28.7 66.5 14 48 14c-18.8 0-34 15.2-34 34s15.2 34 34 34c11.5 0 22-5.7 28.3-15.1.9-1.4 2.8-1.7 4.2-.8 1.4.9 1.7 2.8.8 4.2C73.9 81.2 61.5 88 48 88 25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40c0 1-.1 2.5-.2 4.4-.2 2.2-2.6 3.4-4.5 2.4l-9.1-5.1c-1.4-.8-2-2.6-1.1-4.1.7-1.5 2.6-2.1 4-1.2z"/>',
  'RMBRefundOutlinedIcon',
);
`},13821:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M28 48a20 20 0 1 0 40 0 20 20 0 1 0-40 0"/>',
  'RadioCheckedFilledIcon',
);
`},65488:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M58.2 13c4.3 0 7.8 3.5 7.8 7.8v.4l-.5 9.6h14.7c.3 0 .7 0 1 .1l.3.1c4.2.7 7 4.7 6.2 9l-7.1 36.9c-.6 3.5-3.8 6.1-7.4 6.1H22.8c-3.8 0-7.1-2.8-7.7-6.6L8.7 33.3c-.6-4.2 2.3-8.2 6.5-8.8.4-.1.8-.1 1.2-.1h13.9l-.3-3.2c-.2-4.2 3-7.8 7.2-8.2h21zm-28 17.4H16.1c-1 .1-1.6 1-1.5 2l6.5 43.1c.1.9.9 1.5 1.7 1.5h10l-.7-14.2-1.9-32.4zm28-11.4H37.7c-1 0-1.7.8-1.7 1.7v.1l2.1 41.4L39 77h18.2L60 20.9v-.1c0-1-.8-1.8-1.8-1.8zm22 17.8H65.8L63.2 77h9.9c.8 0 1.5-.6 1.6-1.5l7-36.7c.2-1-.5-1.9-1.4-2h-.1z"/>',
  'RankingOutlinedIcon',
);
`},58245:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77.1 44.4c-1.4-.8-3.3-.3-4.1 1.1-.8 1.4-.3 3.3 1.1 4.1l9.1 5.1c1.9 1.1 4.3-.2 4.5-2.4.2-1.8.3-3.3.3-4.3C88 25.9 70.1 8 48 8S8 25.9 8 48s17.9 40 40 40c13.5 0 25.9-6.8 33.3-17.8.9-1.4.6-3.2-.8-4.2-1.4-.9-3.2-.6-4.2.8C70 76.3 59.5 82 48 82c-18.8 0-34-15.2-34-34s15.2-34 34-34c18.5 0 33.5 14.7 34 33.1l-4.9-2.7z"/>',
  'RefreshOutlinedIcon',
);
`},52341:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M14 87c-1.7 0-3-1.3-3-3 0-1.6 1.2-2.9 2.8-3H17V54c0-16.9 13.6-30.7 30.5-31h.5c16.9 0 30.7 13.6 31 30.5V81h3c1.7 0 3 1.3 3 3 0 1.6-1.2 2.9-2.8 3H14zm34-58c-13.7 0-24.8 11-25 24.6V81h50V54c0-13.5-10.8-24.6-24.2-25H48zm21.1-18.3c1.2-1 3-1 4.1.1 1.1 1.1 1.2 2.9.1 4.1l-.1.1-4.2 4.3-.1.1c-1.2 1-3 1-4.1-.1-1.1-1.1-1.2-2.9-.1-4.1l.1-.1 4.2-4.2.1-.2zm-42.2 0 .1.1 4.2 4.2c1.2 1.2 1.2 3.1 0 4.2-1.1 1.1-2.9 1.2-4.1.1H27L22.8 15c-1.2-1.2-1.2-3.1 0-4.2 1.1-1.2 2.9-1.2 4.1-.1zm21-4.7c1.6 0 2.9 1.2 3 2.8l.1.2.1 6c0 1.7-1.3 3-3 3-1.6 0-2.9-1.2-3-2.8V15L45 9c0-1.6 1.3-3 2.9-3z"/>',
  'ReportOutlinedIcon',
);
`},53020:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M28 10c1.7 0 3 1.3 3 3 0 1.6-1.2 2.9-2.8 3H21c-2.7 0-4.9 2.1-5 4.8V75c0 2.7 2.1 4.9 4.8 5H75c2.7 0 4.9-2.1 5-4.8V21c0-2.7-2.1-4.9-4.8-5H68c-1.7 0-3-1.3-3-3 0-1.6 1.2-2.9 2.8-3H75c6 0 10.8 4.8 11 10.7V75c0 6-4.8 10.8-10.7 11H21c-6 0-10.8-4.8-11-10.7V21c0-6 4.8-10.8 10.7-11H28zm20.3 0c1.6 0 2.9 1.3 3 2.8v.2L51 56.9l9-9c1.1-1.1 2.9-1.2 4.1-.1l.1.1c1.1 1.1 1.2 2.9.1 4.1l-.1.1-14.1 14.2c-1.1 1.1-2.9 1.2-4.1.1l-.1-.1-14.2-14.2c-1.2-1.2-1.2-3.1 0-4.2 1.1-1.1 2.9-1.2 4.1-.1l.1.1 9 9 .4-43.9c0-1.7 1.3-3 3-3z"/>',
  'SaveOutlinedIcon',
);
`},86211:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M65 16c-1.7 0-3-1.3-3-3s1.3-3 3-3h14c3.9 0 7 3.1 7 7v14c0 1.7-1.3 3-3 3s-3-1.3-3-3V17c0-.6-.4-1-1-1H65zm15 49c0-1.7 1.3-3 3-3s3 1.3 3 3v14c0 3.9-3.1 7-7 7H65c-1.7 0-3-1.3-3-3s1.3-3 3-3h14c.6 0 1-.4 1-1V65zM31 80c1.7 0 3 1.3 3 3s-1.3 3-3 3H17c-3.9 0-7-3.1-7-7V65c0-1.7 1.3-3 3-3s3 1.3 3 3v14c0 .6.4 1 1 1h14zM16 31c0 1.7-1.3 3-3 3s-3-1.3-3-3V17c0-3.9 3.1-7 7-7h14c1.7 0 3 1.3 3 3s-1.3 3-3 3H17c-.6 0-1 .4-1 1v14zm59 14c1.7 0 3 1.3 3 3s-1.3 3-3 3H21c-1.7 0-3-1.3-3-3s1.3-3 3-3h54z"/>',
  'ScanOutlinedIcon',
);
`},52295:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M46.629 3c24.095 0 43.628 19.5 43.628 43.555a43.352 43.352 0 0 1-9.952 27.693l11.406 11.306a4.35 4.35 0 0 1 .022 6.16 4.368 4.368 0 0 1-6.17.021L71.816 78.108a4.343 4.343 0 0 1-1.263-3.567 4.36 4.36 0 0 1 1.168-3.766c6.256-6.458 9.81-15.054 9.81-24.22 0-19.244-15.626-34.844-34.902-34.844-19.277 0-34.903 15.6-34.903 34.844S27.352 81.4 46.629 81.4c3.98 0 7.862-.664 11.535-1.947a4.365 4.365 0 0 1 5.559 2.672 4.354 4.354 0 0 1-2.677 5.55 43.634 43.634 0 0 1-14.417 2.436C22.533 90.11 3 70.61 3 46.555 3 22.5 22.533 3 46.629 3Z"/>',
  'SearchGapOutlinedIcon',
);
`},8173:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M46.3 8c21.2 0 38.3 17.1 38.3 38.3 0 9.7-3.6 18.5-9.5 25.2l12.1 12.1c1 1 1 2.6 0 3.6s-2.6 1-3.6 0l-12-12.1C64.8 81 56 84.6 46.3 84.6 25.1 84.6 8 67.5 8 46.3S25.1 8 46.3 8zm0 6C28.5 14 14 28.5 14 46.3s14.4 32.3 32.3 32.3 32.3-14.4 32.3-32.3S64.1 14 46.3 14z"/>',
  'SearchOutlinedIcon',
);
`},67176:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m88.5 51.8-17.1 31c-1.2 2.2-3.5 3.6-6.1 3.6h-34c-2.5 0-4.8-1.4-6.1-3.6l-17.1-31c-1.2-2.1-1.2-4.7 0-6.8l17.1-31c1.2-2.2 3.5-3.6 6.1-3.6h34c2.5 0 4.8 1.4 6.1 3.6l17.1 31c1.2 2.1 1.2 4.7 0 6.8zm-5.2-2.9c.2-.3.2-.7 0-1l-17.1-31c-.2-.3-.5-.5-.9-.5H31.5c-.4 0-.7.2-.9.5l-17.1 31c-.2.3-.2.7 0 1l17.1 31c.2.3.5.5.9.5h33.9c.4 0 .7-.2.9-.5l17-31zM48.2 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm0-6c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.4 10 10 10z"/>',
  'SettingsOutlinedIcon',
);
`},63769:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M74.707 7.75A13.533 13.533 0 0 1 88.25 21.304v53.404A13.514 13.514 0 0 1 74.71 88.25h-53.4A13.535 13.535 0 0 1 7.75 74.708V21.304A13.556 13.556 0 0 1 21.31 7.753h.02l3.697.025a2.873 2.873 0 0 1-.02 5.746h-.02l-3.686-.027a7.814 7.814 0 0 0-7.805 7.807v9.454l.01.003 68.999.002v-9.46a7.774 7.774 0 0 0-2.278-5.524 7.743 7.743 0 0 0-5.515-2.289h-3.605a2.869 2.869 0 1 1-.003-5.737ZM13.506 36.507h-.01v38.2c0 2.086.815 4.041 2.29 5.516a7.76 7.76 0 0 0 5.525 2.281h53.4a7.737 7.737 0 0 0 5.513-2.281 7.74 7.74 0 0 0 2.28-5.515V36.509l-68.998-.002Zm46.955 6.205c1.094 0 2.092.613 2.576 1.58a2.805 2.805 0 0 1-.296 2.98c-.014.016-.715.927-1.755 2.477l-.256.384a72.424 72.424 0 0 0-3.528 5.927c-1.583 2.98-2.84 5.884-3.736 8.633-1.09 3.341-1.642 6.444-1.642 9.222 0 1.566-1.286 2.835-2.872 2.835-1.586 0-2.871-1.27-2.871-2.835 0-3.386.652-7.093 1.937-11.019 1.005-3.068 2.4-6.286 4.148-9.564a77.957 77.957 0 0 1 2.88-4.95h-17.59c-1.587 0-2.873-1.27-2.873-2.835 0-1.566 1.286-2.835 2.872-2.835ZM40.327 5.833c1.586 0 2.872 1.27 2.872 2.835v5.675c0 .752-.303 1.473-.842 2.004a2.89 2.89 0 0 1-2.03.83c-1.586 0-2.872-1.269-2.872-2.834V8.668c0-1.565 1.286-2.835 2.872-2.835Zm17.263 0c1.586 0 2.871 1.27 2.871 2.835v5.675c0 .752-.302 1.473-.84 2.004a2.89 2.89 0 0 1-2.031.83c-1.586 0-2.872-1.269-2.872-2.834V8.668c0-1.565 1.286-2.835 2.872-2.835Z"/>',
  'SevenDayCalendarIcon',
);
`},87612:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M47 12c1.7 0 3 1.3 3 3s-1.3 3-3 3H24c-5 0-9 4-9 9v42c0 5 4 9 9 9h48c5 0 9-4 9-9V49c0-1.7 1.3-3 3-3s3 1.3 3 3v20c0 8.3-6.7 15-15 15H24c-8.3 0-15-6.7-15-15V27c0-8.3 6.7-15 15-15h23zm27.1.9 12 12c1.9 1.9.6 5.1-2.1 5.1h-7.9C61.8 30 50 41 49 55.2c-.1 1.7-1.6 2.9-3.2 2.8-1.7-.1-2.9-1.6-2.8-3.2C44.2 37.4 58.7 24 76.1 24h.7l-6.9-6.9c-1.1-1.1-1.2-2.9-.1-4.1l.1-.1c1.1-1.2 3-1.2 4.2 0z"/>',
  'ShareIcon',
);
`},17321:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M34 76c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm32 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zM13.8 11l.1.2 3.3 11.5c.4-.2.8-.3 1.2-.5.6-.2 1.2-.2 1.8-.2h59.5c3.9 0 7 3.1 7 7 0 .6-.1 1.2-.2 1.8l-9.8 36c-.8 3-3.6 5.2-6.8 5.2H30.1c-3.2 0-5.9-2.1-6.8-5.2l-6.9-25.4c-.1-.1-.2-.3-.2-.5l-.1-.2-8-28c-.5-1.6.5-3.3 2.1-3.7 1.5-.3 3.1.5 3.6 2zm66 17H19.9c-.5.1-.8.7-.7 1.2l9.8 36c.1.4.5.7 1 .7h39.9c.5 0 .8-.3 1-.7l9.8-36v-.3c.1-.5-.4-.9-.9-.9zM63 52c1.7 0 3 1.3 3 3 0 1.6-1.2 2.9-2.8 3H37c-1.7 0-3-1.3-3-3 0-1.6 1.2-2.9 2.8-3H63z"/>',
  'ShoppingCartOutlinedIcon',
);
`},22409:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c3.1 0 6.1.4 9 1v27c-2.5-1.9-5.6-3-9-3-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15V11c14.7 5.8 25 20.2 25 37 0 22.1-17.9 40-40 40S8 70.1 8 48 25.9 8 48 8z"/>',
  'ShowFilledIcon',
);
`},24924:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M57 36c3.6 2.7 6 7.1 6 12 0 8.3-6.7 15-15 15s-15-6.7-15-15 6.7-15 15-15c3.4 0 6.5 1.1 9 3V17c0-1.7 1.3-3 3-3s3 1.3 3 3v31c0 1.7-1.3 3-3 3s-3-1.3-3-3V36zM48 8c1.7 0 3 1.3 3 3s-1.3 3-3 3c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34c0-5.5-1.3-10.8-3.8-15.6-.8-1.5-.2-3.3 1.3-4 1.5-.8 3.3-.2 4 1.3 3 5.6 4.5 11.8 4.5 18.3 0 22.1-17.9 40-40 40S8 70.1 8 48 25.9 8 48 8zm0 49c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9zm20-31c-5.8 0-11-4-11-9s5.2-9 11-9c5.9 0 11 3.8 11 9s-5.1 9-11 9zm0-6c2.9 0 5-1.6 5-3s-2.1-3-5-3c-2.8 0-5 1.7-5 3s2.2 3 5 3z"/>',
  'ShowOutlinedIcon',
);
`},1509:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm13.4 46.7c-2.5 5-7.6 8.3-13.4 8.3-5.8 0-10.9-3.3-13.4-8.3-.7-1.5-2.5-2.1-4-1.4-1.5.7-2.1 2.5-1.4 4C32.7 64.4 39.9 69 48 69c8.1 0 15.3-4.6 18.8-11.7.7-1.5.1-3.3-1.4-4-1.4-.7-3.2-.1-4 1.4z"/>',
  'SmileFilledIcon',
);
`},4520:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88C25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40-17.9 40-40 40zm0-6c18.8 0 34-15.2 34-34S66.8 14 48 14 14 29.2 14 48s15.2 34 34 34zM34.6 64.2c-1.3-1.1-1.4-3-.4-4.2 1.1-1.3 3-1.4 4.2-.4 2.7 2.2 6 3.5 9.6 3.5 3.6 0 6.9-1.2 9.6-3.5 1.3-1.1 3.2-.9 4.2.4 1.1 1.3.9 3.2-.4 4.2C57.7 67.3 53 69 48 69s-9.7-1.7-13.4-4.8z"/>',
  'SmileOutlinedIcon',
);
`},74771:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M54.39 79.455V2.27a2.27 2.27 0 0 1 .634-1.615c.415-.427.98-.663 1.567-.654h5.224a2.16 2.16 0 0 1 1.573.65c.418.424.654 1.005.654 1.61v54.877c0 1.245.976 2.26 2.184 2.26h9.635c.795.02 1.518.483 1.888 1.209a2.32 2.32 0 0 1-.106 2.288L58.372 90.208a2.132 2.132 0 0 1-2.44.841c-.905-.302-1.513-1.176-1.5-2.156l-.034-9.438h-.009Zm-12.762-62.91V93.74c0 .6-.231 1.174-.642 1.598a2.16 2.16 0 0 1-1.55.662h-5.157a2.135 2.135 0 0 1-1.558-.654 2.27 2.27 0 0 1-.634-1.606V38.863c0-1.248-.982-2.26-2.193-2.26H20.26a2.18 2.18 0 0 1-1.979-1.154 2.32 2.32 0 0 1 .078-2.342l19.27-27.315a2.157 2.157 0 0 1 2.452-.835c.906.3 1.521 1.169 1.522 2.15l.026 9.438Z"/>',
  'SortIcon',
);
`},43899:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm2 12.4c1.2.5 2.2 1.5 2.7 2.8l3.5 8.6 9.1.7c2.8.2 4.9 2.7 4.7 5.5-.1 1.3-.7 2.6-1.8 3.5l-6.9 6.1 2.1 9.1c.6 2.8-1 5.5-3.8 6.2-1.3.3-2.7.1-3.9-.6L48 63.4l-7.7 4.8c-2.4 1.5-5.6.7-7.1-1.7-.7-1.2-.9-2.5-.6-3.8l2.1-9.1-6.9-6.1c-2.1-1.8-2.4-5.1-.6-7.2.9-1 2.1-1.7 3.5-1.8l9.1-.7 3.5-8.6c1-2.6 4.1-3.9 6.7-2.8zm-2 7.1-2.9 7c-.7 1.8-2.4 3-4.3 3.2l-7.6.6 5.8 5.1c1.4 1.3 2.1 3.2 1.6 5.1L38.9 62l6.4-4c1.6-1 3.7-1 5.4 0l6.4 4-1.8-7.5c-.4-1.9.2-3.8 1.6-5.1l5.8-5.1-7.6-.6c-1.9-.2-3.6-1.4-4.3-3.2l-2.8-7z"/>',
  'StarCircleOutlinedIcon',
);
`},70592:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M31.4 85.9c-3.4 2.1-7.8 1-9.8-2.4-1-1.6-1.3-3.5-.8-5.4l4.4-18.6c.1-.4 0-.9-.4-1.2L10.5 45.9c-3-2.6-3.3-7.1-.8-10.1 1.2-1.5 3-2.4 4.8-2.5l18.7-1.5c.4 0 .8-.3.9-.7l7.2-17.6c1.5-3.7 5.7-5.4 9.3-3.9 1.7.7 3.1 2.1 3.8 3.9l7.2 17.6c.2.4.5.7.9.7l18.7 1.5c3.9.3 6.8 3.8 6.5 7.7-.1 1.9-1 3.6-2.4 4.9l-14 12.5c-.3.3-.5.8-.4 1.2l4.4 18.6c.9 3.8-1.4 7.7-5.3 8.6-1.8.4-3.8.1-5.4-.9l-16-10c-.3-.2-.8-.2-1.1 0l-16.1 10z"/>',
  'StarFilledIcon',
);
`},91293:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M47.4 70 26.3 84.6c-.9.6-2.2.4-2.8-.5-.3-.5-.4-1.1-.3-1.7l7.5-24.5c.1-.4 0-.8-.4-1.1L9.8 41.3c-.9-.7-1.1-1.9-.4-2.8.4-.5.9-.8 1.6-.8l25.8-.5c.4 0 .8-.3.9-.7l8.5-24.2c.4-1 1.5-1.6 2.5-1.2.6.2 1 .7 1.2 1.2l8.5 24.2c.1.4.5.7.9.7l25.7.5c1.1 0 2 .9 2 2 0 .6-.3 1.2-.8 1.5L65.7 56.8c-.3.3-.5.7-.4 1.1l7.5 24.5c.3 1.1-.3 2.2-1.3 2.5-.6.2-1.2.1-1.7-.3L48.6 70c-.4-.2-.8-.2-1.2 0z"/>',
  'StarFilledSharpIcon',
);
`},5757:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M31.4 85.9c-3.4 2.1-7.8 1-9.8-2.4-1-1.6-1.3-3.5-.8-5.4l4.4-18.6c.1-.4 0-.9-.4-1.2L10.5 45.9c-3-2.6-3.3-7.1-.8-10.1 1.2-1.5 3-2.4 4.8-2.5l18.7-1.5c.4 0 .8-.3.9-.7l7.2-17.6c1.5-3.7 5.7-5.4 9.3-3.9 1.7.7 3.1 2.1 3.8 3.9l7.2 17.6c.2.4.5.7.9.7l18.7 1.5c3.9.3 6.8 3.8 6.5 7.7-.1 1.9-1 3.6-2.4 4.9l-14 12.5c-.3.3-.5.8-.4 1.2l4.4 18.6c.9 3.8-1.4 7.7-5.3 8.6-1.8.4-3.8.1-5.4-.9l-16-10c-.3-.2-.8-.2-1.1 0l-16.1 10zm20.3-15 16 10c.3.1.6.1.9.1.6-.1 1-.8.8-1.4L65 60.9c-.6-2.6.3-5.3 2.3-7.1l14.3-12.4c.2-.2.4-.5.4-.8.1-.7-.4-1.2-1-1.3l-18.7-1.5c-2.7-.2-5-1.9-6-4.4L49 15.7c-.1-.3-.3-.5-.6-.6-.6-.2-1.2 0-1.4.6l-7.2 17.6c-1 2.5-3.3 4.2-6 4.4L15 39.3c-.3 0-.6.2-.7.4-.4.5-.4 1.3.1 1.7l14.3 12.4c2 1.8 2.9 4.5 2.3 7.1l-4.4 18.6c-.1.3 0 .7.1.9.3.5 1 .7 1.5.4l16-10c2.4-1.3 5.2-1.3 7.5.1z"/>',
  'StarOutlinedIcon',
);
`},69831:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M72 0c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H24C10.745 96 0 85.255 0 72V24C0 10.745 10.745 0 24 0h48ZM50.17 11.417a5.04 5.04 0 0 0-6.462 1.966l-.242.455-7.274 15.497a5.04 5.04 0 0 1-3.257 2.726l-.544.114-16.667 2.547a5.04 5.04 0 0 0-3.208 8.088l.362.414 12.374 12.682a5.04 5.04 0 0 1 1.428 3.739l-.061.592-2.877 17.638a5.04 5.04 0 0 0 6.917 5.462l.495-.24 14.436-7.98a5.04 5.04 0 0 1 4.36-.248l.516.248 14.436 7.98a5.04 5.04 0 0 0 7.47-4.71l-.057-.512-2.877-17.638a5.04 5.04 0 0 1 .976-3.88l.39-.45 12.374-12.683a5.04 5.04 0 0 0-2.34-8.399l-.506-.103-16.667-2.547a5.04 5.04 0 0 1-3.537-2.35l-.264-.49-7.273-15.497a5.04 5.04 0 0 0-2.421-2.42Z"/>',
  'StarRoundedFilledIcon',
);
`},52929:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M68.7 80H27.3c-1.8 0-3.3-1.8-3.3-4s1.5-4 3.3-4h41.4c1.8 0 3.3 1.8 3.3 4s-1.5 4-3.3 4m15.4-26.7c-1 .1-1.9.2-2.9.2-5.2 0-10.3-1.7-14.4-4.7-1.3-1-3.1-1-4.4 0-4.1 3.1-9.2 4.8-14.4 4.7-5.2 0-10.3-1.7-14.4-4.7-1.3-1-3.1-1-4.4 0-4.9 3.6-11.2 5.2-17.3 4.5-1-.1-2 .2-2.7.8S8 55.7 8 56.6v28.6C8 89 11.1 92 14.9 92h66.3c3.8 0 6.9-3 6.9-6.8V56.6c-.1-2-1.9-3.5-4-3.3m10.6-28L87.1 9.9C85.2 6.3 81.6 4 77.7 4H18.3c-3.9 0-7.6 2.3-9.4 5.9L1.3 25.3c-4.2 10 2 21.8 12.6 22.7 5.9.5 11.6-2.3 14.9-7.3.6-1 1.7-1.5 2.8-1.5 1.1 0 2.2.6 2.8 1.5C37.5 45.2 42.6 48 48 48s10.5-2.8 13.5-7.4c.6-1 1.7-1.6 2.8-1.6s2.2.6 2.8 1.6c3.3 5 9 7.8 14.9 7.3 10.6-.8 16.9-12.6 12.7-22.6"/>',
  'StoreFilledIcon',
);
`},59051:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm17.1 27.9c-1.2-1.2-3.1-1.2-4.2 0L43 53.8l-7.9-7.9c-1.2-1.2-3.1-1.2-4.2 0s-1.2 3.1 0 4.2l10 10c1.2 1.2 3.1 1.2 4.2 0l20-20c1.2-1.2 1.2-3.1 0-4.2z"/>',
  'SuccessCircleFilledIcon',
);
`},56223:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm20.5 26.3c-1.9-1.8-5-1.7-6.9.1l-20 20-7.2-7.2c-1.9-1.9-5-1.9-6.9-.1s-2 4.8-.1 6.7l10.7 10.7c1.9 1.9 5.1 1.9 7 0L68.6 41c1.9-1.9 1.8-4.9-.1-6.7z"/>',
  'SuccessCircleFilledBoldIcon',
);
`},31547:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm17.1 21.9c1.2 1.2 1.2 3.1 0 4.2l-20 20c-1.2 1.2-3.1 1.2-4.2 0l-10-10c-1.2-1.2-1.2-3.1 0-4.2s3.1-1.2 4.2 0l7.9 7.9 17.9-17.9c1.1-1.2 3-1.2 4.2 0z"/>',
  'SuccessCircleOutlinedIcon',
);
`},26740:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M21.1 43.9 39 61.8l34.9-34.9c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-37 37c-1.2 1.2-3.1 1.2-4.2 0l-20-20c-1.2-1.2-1.2-3.1 0-4.2s3-1.2 4.2 0z"/>',
  'SuccessFilledIcon',
);
`},9567:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m28 44.7 12.3 12.1L68 29.4c1.8-1.8 4.8-1.8 6.6 0 1.8 1.8 1.8 4.7 0 6.5l-31 30.7c-1.8 1.8-4.8 1.8-6.6 0L21.4 51.3c-1.8-1.8-1.8-4.7 0-6.5 1.8-1.8 4.7-1.9 6.6-.1z"/>',
  'SuccessFilledBoldIcon',
);
`},41074:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m75.3 70.6 1.8 1.8c1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0l-1.8-1.8c-1.2-1.2-1.2-3.1 0-4.2 1.1-1.2 3-1.2 4.2 0zm-49.9 0c1.2 1.2 1.2 3.1 0 4.2l-1.8 1.8c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2l1.8-1.8c1.2-1.2 3.1-1.2 4.2 0zM47.8 20c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28zm0 6c-12.2 0-22 9.8-22 22s9.8 22 22 22 22-9.8 22-22-9.9-22-22-22zM24 19.2l1.8 1.8c1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0l-1.8-1.8c-1.2-1.2-1.2-3.1 0-4.2 1.1-1.1 3-1.1 4.2 0zm52.8 0c1.2 1.2 1.2 3.1 0 4.2L75 25.2c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2l1.8-1.8c1.1-1.1 3-1.1 4.2 0zM48.2 5c1.7 0 3 1.3 3 3v5c0 1.7-1.3 3-3 3s-3-1.3-3-3V8c0-1.7 1.4-3 3-3zM91 47.8c0 1.7-1.3 3-3 3h-5c-1.7 0-3-1.3-3-3s1.3-3 3-3h5c1.7 0 3 1.3 3 3zm-75 0c0 1.7-1.3 3-3 3H8c-1.7 0-3-1.3-3-3s1.3-3 3-3h5c1.7 0 3 1.3 3 3zM48.2 80c1.7 0 3 1.3 3 3v5c0 1.7-1.3 3-3 3s-3-1.3-3-3v-5c0-1.7 1.4-3 3-3z"/>',
  'SunOutlinedIcon',
);
`},7539:function(c,e){e.Z=`.bui-svg-icon {
  display: inline-flex;
  flex-shrink: 0;
  user-select: none;
  width: 1em;
  height: 1em;
  background-size: cover;

  &.icon-size-small {
    font-size: 16px;
  }

  &.icon-size-medium {
    font-size: 20px;
  }

  &.icon-size-large {
    font-size: 24px;
  }
}

svg.bui-svg-icon {
  fill: currentcolor;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
`},73738:function(c,e){e.Z=`import clsx from 'clsx';
import React from 'react';
import { ISvgIconProps } from '../../SvgIcon.types';
import './SvgIcon.less';

const classes = {
  root: 'bui-svg-icon',
};

export default function SvgIcon(props: ISvgIconProps) {
  const {
    className,
    children,
    component: Component = 'div',
    color,
    htmlColor,
    size,
    viewBox = '0 0 96 96',
    style,
    ...rest
  } = props;

  const colorMap = {
    default: '#959aa5',
    primary: '#ff335c',
    info: '#148aff',
    danger: '#ff335c',
    success: '#00d68f',
    warning: '#ff8533',
    disabled: '#ced1d6',
  };

  const svgColor = colorMap[color] || htmlColor || style?.color;

  if (
    Component !== 'svg' &&
    !svgColor &&
    typeof children === 'string' &&
    !/fill/.test(children)
  ) {
    console.warn(
      'Inherit Bui icon color is not available in Miniapp(<div>). You may need to specify one.',
    );
  }

  if (Component === 'svg') {
    if (typeof children === 'string') {
      // \u4F20\u5165string\uFF0Csvg dom\u6A21\u5F0F\uFF0C\u4F7F\u7528dangerouslySetInnerHTML
      return (
        <Component
          className={clsx(classes.root, className, {
            [\`icon-size-\${size}\`]: size,
          })}
          focusable="false"
          viewBox={viewBox}
          color={svgColor}
          dangerouslySetInnerHTML={{
            __html: children,
          }}
          style={style}
          {...rest}
        />
      );
    }
    // \u4F20\u5165ReactNode\uFF0C\u76F4\u63A5\u4E22\u8FDBchildren
    return (
      <Component
        className={clsx(classes.root, className, {
          [\`icon-size-\${size}\`]: size,
        })}
        focusable="false"
        viewBox={viewBox}
        color={svgColor || htmlColor}
        style={style}
        {...rest}
      >
        {children}
      </Component>
    );
  }
  if (typeof children === 'string') {
    // div\u80CC\u666F\u8272\u6A21\u5F0F\uFF0C\u7EC4\u88C5data:image/svg+xml\u585E\u8FDB\u5185\u8054\u6837\u5F0F
    return (
      <Component
        className={clsx(classes.root, className, {
          [\`icon-size-\${size}\`]: size,
        })}
        style={{
          ...style,
          backgroundImage: \`url("data:image/svg+xml,\${encodeURIComponent(
            \`<svg viewBox='\${viewBox}' xmlns='http://www.w3.org/2000/svg' \${
              svgColor ? \`fill='\${svgColor}'\` : ''
            }>\${children}</svg>\`,
          )}")\`,
        }}
        {...rest}
      />
    );
  }
  return null;
}
`},2005:function(c,e){e.Z=`export { default } from './SvgIcon';
`},38595:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M73.1 53v1.8h-8.2v3.6c0 1.4-.7 1.6-5.3 1.6 0 0-.2-.4-.3-.9l-.4-1.4H60c1 0 1.6-.1 1.6-.3v-2.7h-9.1V53h20.6zm-18 2.3 3.5 1.1c-.9 1.2-2.3 2.6-3.3 3.5l-2.8-.9c.7-.7 1.9-2.3 2.6-3.7zm12.3 1 2.7-.9.6.7c.8.9 1.7 1.9 2.4 2.9l-3.5 1-.2-.5c-.5-1.1-1.2-2.4-2-3.2zm-13.7-6.1h18.2V52H53.7v-1.8zm4.9-7h-5.4v6.1h19.2v-6.1H67V42h6.1v-2H52.5v2h6.1v1.2zM56.2 45h2.4v2.4h-2.4V45zm5.5 0H64v2.4h-2.4V45zm7.8 2.4H67V45h2.4v2.4zM64 43.1h-2.4v-1.2H64v1.2zM96 53v1.8h-8.2v3.6c0 1.4-.7 1.6-5.3 1.6-.1-.1-.7-2.2-.7-2.2h1.1c1 0 1.6-.1 1.6-.3v-2.7h-9.1V53H96zm-18.1 2.3 3.5 1.1c-.9 1.2-2.3 2.6-3.3 3.5l-2.8-.9c.8-.7 1.9-2.3 2.6-3.7zm12.3 1 2.7-.9.6.7c.9.9 1.8 1.9 2.5 2.9l-3.5 1c-.6-1.2-1.3-2.8-2.3-3.7zm-13.7-6.1h18.2V52H76.5v-1.8zm4.9-7H76v6.1h19.2v-6.1h-5.4V42h6.1v-2H75.3v2h6.1v1.2zM79 45h2.4v2.4H79V45zm5.5 0h2.4v2.4h-2.4V45zm7.8 2.4h-2.4V45h2.4v2.4zm-5.4-4.3h-2.4v-1.2h2.4v1.2zm-46.4-3.9c-.1.4-.3 1-.7 1.6h10.4v17.9c0 1.2-3 1.4-7.9 1.4 0 0-.2-.5-.3-1l-.3-1.2h.4c1.8 0 5.1.2 5.1-.8v-14H38c-.7.7-1.4 1.2-2.1 1.4l-1.2-1.7c1.4-1.2 2.1-2 2.2-3.7h3.6zm-7.6 11.9 2.4 1c-.7 2.5-2.1 5.9-3.4 7.9l-2.7-2.8.3-.3c1.6-1.7 2.6-3.6 3.3-5.5l.1-.3zM40 44c0 .2-.1.5-.3.8h5.7v1.8h-3V49H46v2h-3.6v3.5h1.2v-2.1h2.2v4.3l-9.4-.1v-4.2h2v2.1h1.3V51h-3.6v-2h3.6v-2.4h-1.3c-.6.7-1.4 1.3-2 1.5l-.8-1.2c1.1-.9 1.6-1.6 1.6-2.8H40zm-10.6 3.1 1.7-1.9.7.3c1 .4 2.4 1 3.3 1.6L33.3 50c-1.4-1.2-2.5-2-3.9-2.9zm.3-5.4 1.6-1.8.7.3c1 .4 2.3 1 3.1 1.5l-1.7 2.8c-1.3-1.3-2.4-2-3.7-2.8zM9.8 35c4.2 0 4.9 2.9 7.1 3.5 5.7 1.4 10 6.1 9.7 12.6-.3 6.6-6 10.9-13.3 10.9S.3 57.7 0 51.1c-.3-6.4 3.9-11 9.4-12.5 1.2-.4 1.9-1.9.4-3.6zM2.1 45.8c-.1 0-.3.1-.3.4v.3c0 .4.1.9.1 1.1v.1c0 .1.1.2.2.2.2.1.5.4.7 1.1 0 .3.1.7.2 1.1l.1.3c.2 1 .5 1.8 1 2.4.6 1 1.5 1.5 2.5 1.6h1.9c1.6-.1 2.5-.5 3.1-1.4.8-1.2 1.2-3.2 1.7-3.4.5.1.8 2.1 1.6 3.2l.1.1c.6.9 1.5 1.3 3.1 1.4H20c1-.1 1.9-.6 2.5-1.6.5-.7.8-1.6 1-2.7l.1-.3c.1-.3.1-.5.1-.8.1-.8.4-1 .7-1.1.1 0 .2-.2.2-.2v-.3c0-.3.1-.8.1-1.2 0-.3-.2-.4-.3-.4l-1-.1c-2-.1-5.2-.2-6.9.2l-.3.2c-.7.2-2.1.4-2.9.4-.8 0-2.3-.3-3-.4h-.1c-1.9-.6-6.2-.3-8.1-.2zm4.3 1.4c1.1-.1 2.5.1 3.2.2h.1c1.7.4 2.4 2 .7 4.6-.3.4-.8.8-2 .9H6.9c-1.3-.1-1.9-1.6-2.2-3l-.1-.5v-.2c-.1-.8-.1-1.4.6-1.7.3-.2.7-.3 1.2-.3zm13.9 0c.5 0 .9.1 1.2.3.7.4.7 1 .6 1.7 0 .2-.1.5-.1.7-.3 1.4-.9 2.9-2.2 3h-1.5c-1.2-.1-1.7-.4-2-.9-1.7-2.6-1.1-4.3.7-4.6h.1l.3-.1c.7-.1 1.9-.2 2.9-.1z"/>',
  'TaoPiaoPiaoLogoIcon',
);
`},87827:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M37.7 8C50 8 52 16.7 58.5 18.4c16.7 4.1 29.2 18 28.5 37.3C86.2 75.3 69.5 88 48 88S9.8 75.3 9 55.7c-.7-19 11.5-32.7 27.7-37.1 3.3-1 5.4-5.5 1-10.6zm43.1 32.1c-5.4-.3-18-1-23.7.5-1.7.4-6.6 1.4-9.2 1.4s-7.5-.9-9.2-1.4c-5.7-1.5-18.2-.8-23.7-.5-.1 0-.9.1-.9 1.1 0 .4.1.9.1 1.4l.1.6c.1.8.2 1.6.2 2.1 0 .1.1.6.6.7h.1c.6.3 1.6 1.1 1.9 3.3.1 1 .3 2.1.5 3.2.6 3.2 1.6 5.9 3 8 1.9 2.9 4.5 4.5 7.4 4.7 2.2.1 4 .1 5.6 0 4.6-.3 7.2-1.5 9.1-4.1 2.5-3.5 3.7-10 5.1-10 1.5 0 2.6 6.4 5.1 10 1.9 2.6 4.5 3.8 9.1 4.1 1.6.1 3.4.1 5.6 0 3-.2 5.6-1.8 7.4-4.7 1.4-2.1 2.4-4.8 3-8 .2-1.1.4-2.2.5-3.2.3-2.2 1.3-3 1.9-3.3h.1c.5-.1.6-.6.6-.7 0-.5.1-1.3.2-2.1l.1-.6c0-.5.1-1 .1-1.4.2-1-.6-1.1-.7-1.1zm-53.2 4.1c3.2-.2 7.4.3 9.4.7.1 0 .3.1.4.1 5 1 7.1 6.1 1.9 13.7-.9 1.3-2.2 2.3-5.8 2.5-1.2.1-2.6.1-4.3 0-3.8-.2-5.7-4.7-6.5-8.8-.1-.8-.3-1.5-.4-2.2-.3-2.3-.2-4.1 1.8-5.2.8-.5 2-.7 3.5-.8zm31.3.7c2-.4 6.2-.9 9.4-.7 1.4.1 2.6.3 3.4.8 2 1.1 2.1 2.9 1.8 5.2-.1.7-.2 1.4-.4 2.2-.8 4.2-2.6 8.6-6.5 8.8-1.7.1-3.1.1-4.3 0-3.6-.2-4.9-1.2-5.8-2.5-5.1-7.6-3.1-12.7 1.9-13.7.2 0 .3-.1.5-.1z"/>',
  'TaoTicketsLogoIcon',
);
`},49760:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M58.3 38.3c1.6-7 2.6-12 3.3-15.1C63.1 15.3 59.1 8 51 8c-7.2 0-10.9 3.6-13 10.8v.2c-1.3 5.8-3.3 10.3-5.9 13.6-2.8 3.4-6.9 5.4-11.2 5.5h-2.1c-4.9.1-8.8 4.1-8.8 9.1V77c0 6.1 4.9 11 10.9 11h38.7c7.9 0 15-5 17.7-12.6l8-22.5c2-5.7-.9-12-6.6-14.1-1.2-.4-2.4-.7-3.7-.7H58.3z"/>',
  'ThumbUpFilledIcon',
);
`},63176:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M58.3 38.3c1.6-7 2.6-12 3.3-15.1C63.1 15.3 59.1 8 51 8c-7.2 0-10.9 3.6-13 10.8v.2c-1.3 5.8-3.3 10.3-5.9 13.6-2.8 3.4-6.9 5.4-11.2 5.5h-2.1c-4.9.1-8.8 4.1-8.8 9.1V77c0 6.1 4.9 11 10.9 11h38.7c7.9 0 15-5 17.7-12.6l8-22.5c2-5.7-.9-12-6.6-14.1-1.2-.4-2.4-.7-3.7-.7H58.3zM51 14c3.7 0 5.6 3.4 4.7 8-.7 3.6-2.1 9.8-4.1 18.6-.4 1.9 1 3.7 2.9 3.7H75c.6 0 1.1.1 1.7.3 2.6.9 3.9 3.8 3 6.4l-8 22.5C69.8 78.6 65 82 59.6 82H21c-2.7 0-5-2.2-5-5V47.2c0-1.7 1.3-3 3-3.1h2.1c6.1-.1 11.8-3 15.7-7.7 3.2-4 5.5-9.3 7-15.9 1.4-4.9 3-6.5 7.2-6.5z"/>',
  'ThumbUpOutlinedIcon',
);
`},74999:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 13c6.1 0 11 4.9 11 11v14c0 1.7-1.3 3-3 3-3.9 0-7 3.1-7 7s3.1 7 7 7c1.7 0 3 1.3 3 3v14c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V58c0-1.7 1.3-3 3-3 3.9 0 7-3.1 7-7s-3.1-7-7-7c-1.7 0-3-1.3-3-3V24c0-6.1 4.9-11 11-11h58zM60 53H36c-1.7 0-3 1.3-3 3s1.3 3 3 3h24c1.7 0 3-1.3 3-3s-1.3-3-3-3zm0-16H36c-1.7 0-3 1.3-3 3s1.3 3 3 3h24c1.7 0 3-1.3 3-3s-1.3-3-3-3z"/>',
  'TicketFilledIcon',
);
`},90254:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M72 8c6.1 0 11 4.9 11 11v58c0 6.1-4.9 11-11 11H24c-6.1 0-11-4.9-11-11V19c0-6.1 4.9-11 11-11h48zm0 6H24c-2.8 0-5 2.2-5 5v58c0 2.8 2.2 5 5 5h48c2.8 0 5-2.2 5-5V19c0-2.8-2.2-5-5-5zM57 68c1.7 0 3 1.3 3 3s-1.3 3-3 3H39c-1.7 0-3-1.3-3-3s1.3-3 3-3h18zm7-48c3.9 0 7 3.1 7 7v26c0 3.9-3.1 7-7 7H32c-3.9 0-7-3.1-7-7V27c0-3.9 3.1-7 7-7h32zm0 6H32c-.6 0-1 .4-1 1v26c0 .6.4 1 1 1h32c.6 0 1-.4 1-1V27c0-.6-.4-1-1-1z"/>',
  'TicketMachineOutlinedIcon',
);
`},72190:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M60 37c1.7 0 3 1.3 3 3s-1.3 3-3 3H36c-1.7 0-3-1.3-3-3s1.3-3 3-3h24zm0 16c1.7 0 3 1.3 3 3s-1.3 3-3 3H36c-1.7 0-3-1.3-3-3s1.3-3 3-3h24zM11 41c-1.7 0-3-1.3-3-3V24c0-6.1 4.9-11 11-11h58c6.1 0 11 4.9 11 11v14c0 1.7-1.3 3-3 3-3.9 0-7 3.1-7 7s3.1 7 7 7c1.7 0 3 1.3 3 3v14c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V58c0-1.7 1.3-3 3-3 3.9 0 7-3.1 7-7s-3.1-7-7-7zm13 7c0 6.1-4.3 11.3-10 12.7V72c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V60.7c-5.7-1.4-10-6.5-10-12.7s4.3-11.3 10-12.7V24c0-2.8-2.2-5-5-5H19c-2.8 0-5 2.2-5 5v11.3c5.7 1.4 10 6.6 10 12.7z"/>',
  'TicketOutlinedIcon',
);
`},57481:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M51 74h9.9c.6 0 1-.4 1-1l-.3-8.8c0-1 .5-2 1.3-2.6C70.4 56.5 75 48.2 75 39c0-14.9-12.1-27-27-27S21 24.1 21 39c0 9.2 4.6 17.6 12.1 22.5.8.5 1.3 1.4 1.3 2.4l.3 9.1c0 .5.5 1 1 1H45V53.7l-7.2-7.6c-1.1-1.2-1.1-3.1.1-4.2 1.2-1.1 3.1-1.1 4.2.1l5.9 6.3 6.8-6.4c1.2-1.1 3.1-1.1 4.2.1 1.1 1.2 1.1 3.1-.1 4.2L51 53.8V74zm30-35c0 10.6-5.1 20.4-13.4 26.5l.2 7.2v.2c0 3.9-3.1 7-7 7h-25c-3.8 0-6.9-3-7-6.8l-.3-7.6C20.1 59.5 15 49.7 15 39 15 20.8 29.8 6 48 6s33 14.8 33 33zM39 90c-1.7 0-3-1.3-3-3s1.3-3 3-3h18c1.7 0 3 1.3 3 3s-1.3 3-3 3H39z"/>',
  'TipsOutlinedIcon',
);
`},89971:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm2.3 15.1 11.1 11.1c1.1 1.1 1.1 3-.1 4.2-1.2 1.2-3.1 1.2-4.2.1l-6.2-6.2v26.8c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9V38.6l-6.3 6.3c-1.1 1.1-2.9 1.2-4.1.2l-.1-.1c-1.1-1.1-1.1-3 .1-4.2l11.5-11.5c1.1-1.3 3-1.4 4.1-.2z"/>',
  'ToTopOutlinedIcon',
);
`},68866:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M44.6 51h5.9l.8-6h-5.9l-.8 6zM48 8c22.1 0 40 17.9 40 40S70.1 88 48 88c-7.3 0-14.4-2-20.5-5.7-.2-.1-.9-.5-1.9-1.1l-9.8 2.7c-2.2.6-4.3-1.4-3.7-3.7l2.7-9.8c-1-1.8-1.7-2.9-2-3.6C9.6 61.1 8 54.7 8 48 8 25.9 25.9 8 48 8zm8.4 22c-1.6-.2-3.2.9-3.4 2.6l-.8 6.4h-5.9l.7-5.6c.2-1.6-.9-3.2-2.6-3.4-1.6-.2-3.2.9-3.4 2.6l-.8 6.4H33c-1.7 0-3 1.3-3 3s1.3 3 3 3h6.4l-.8 6H33c-1.7 0-3 1.3-3 3s1.3 3 3 3h4.8l-.8 5.6c-.2 1.6.9 3.2 2.6 3.4 1.6.2 3.2-.9 3.4-2.6l.9-6.4h5.9l-.8 5.6c-.2 1.6.9 3.2 2.6 3.4 1.6.2 3.2-.9 3.4-2.6l.9-6.4H63c1.7 0 3-1.3 3-3s-1.3-3-3-3h-6.4l.8-6H63c1.7 0 3-1.3 3-3s-1.3-3-3-3h-4.8l.7-5.6c.3-1.6-.9-3.2-2.5-3.4z"/>',
  'TopicFilledIcon',
);
`},95930:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M44.6 51h5.9l.8-6h-5.9l-.8 6zm-.8 6-.8 6.4c-.2 1.6-1.7 2.8-3.4 2.6-1.6-.2-2.8-1.7-2.6-3.4l.7-5.6H33c-1.7 0-3-1.3-3-3s1.3-3 3-3h5.6l.8-6H33c-1.7 0-3-1.3-3-3s1.3-3 3-3h7.2l.9-6.4c.2-1.6 1.7-2.8 3.4-2.6 1.6.2 2.8 1.7 2.6 3.4l-.9 5.6h5.9l.9-6.4c.2-1.6 1.7-2.8 3.4-2.6 1.6.2 2.8 1.7 2.6 3.4l-.8 5.6H63c1.7 0 3 1.3 3 3s-1.3 3-3 3h-5.6l-.8 6H63c1.7 0 3 1.3 3 3s-1.3 3-3 3h-7.2l-.8 6.4c-.2 1.6-1.7 2.8-3.4 2.6-1.6-.2-2.8-1.7-2.6-3.4l.7-5.6h-5.9zm-29 13.4c-1-1.8-1.7-2.9-2-3.6C9.6 61.1 8 54.7 8 48 8 25.9 25.9 8 48 8s40 17.9 40 40-17.9 40-40 40c-7.3 0-14.4-2-20.5-5.7-.2-.1-.9-.5-1.9-1.1l-9.8 2.7c-2.2.6-4.3-1.4-3.7-3.7l2.7-9.8zm6.1.4-1.6 5.9 5.9-1.6c.8-.2 1.6-.1 2.3.3 1.7 1 2.7 1.6 3 1.8C35.8 80.3 41.8 82 48 82c18.8 0 34-15.2 34-34S66.8 14 48 14 14 29.2 14 48c0 5.7 1.4 11.2 4 16 .3.6 1.2 2.1 2.6 4.4.4.8.5 1.6.3 2.4z"/>',
  'TopicOutlinedIcon',
);
`},95031:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm20.1 29.9c-1.2-1.2-3.1-1.2-4.2 0L51.1 50.7l-7.7-8.4c-1.2-1.3-3.2-1.3-4.4-.1L27.8 53.9c-1.2 1.2-1.1 3.1.1 4.2 1.2 1.2 3.1 1.1 4.2-.1l9-9.3 7.6 8.3c1.2 1.3 3.1 1.3 4.3.1L68 42c1.3-1.1 1.3-3 .1-4.1z"/>',
  'TrendingCircleFilledIcon',
);
`},54165:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88C25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40-17.9 40-40 40zm0-6c18.8 0 34-15.2 34-34S66.8 14 48 14 14 29.2 14 48s15.2 34 34 34zm.8-24.9-7.6-8.3-9 9.3c-1.2 1.2-3 1.2-4.2.1-1.2-1.2-1.2-3-.1-4.2L39 42.3c1.2-1.2 3.2-1.2 4.4.1l7.7 8.4L63.9 38c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-15 15.1c-1.2 1.1-3.2 1.1-4.3-.2z"/>',
  'TrendingCircleOutlinedIcon',
);
`},17036:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M17 15c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1s-1-.4-1-1V16c0-.6.4-1 1-1zm14 0c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1s-1-.4-1-1V16c0-.6.4-1 1-1zm-7 0c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1s-1-.4-1-1V16c0-.6.4-1 1-1z"/>',
  'TripleVerticalLineIcon',
);
`},19803:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m27.3 46.8 19.1-26.6c.6-.9 1.9-1.1 2.8-.5.2.1.3.3.5.5l19.1 26.6c.6.9.4 2.1-.5 2.8-.3.2-.7.4-1.2.4H54v26c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2V50H28.9c-1.1 0-2-.9-2-2 0-.4.1-.8.4-1.2z"/>',
  'UpIcon',
);
`},81117:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M46 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16S54.8 8 46 8zm0 6c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10zm0 29c7.1 0 13.9 2.3 19.5 6.4 1.3 1 1.6 2.9.6 4.2-1 1.3-2.9 1.6-4.2.6C57.4 50.8 51.8 49 46 49c-14.9 0-27 12.1-27 27v6l27 .2c1.6 0 2.9 1.3 3 2.8v.2c0 1.7-1.4 3-3 3L16 88c-1.6 0-3-1.4-3-3v-9c0-18.2 14.8-33 33-33zm33.5 11c.8-1.4 2.6-1.8 4-1s2 2.6 1.2 4L68.6 85c-.8 1.4-2.6 1.8-4 1l-12.1-7c-1.4-.8-2-2.6-1.2-4l.1-.1c.8-1.3 2.6-1.6 3.9-.8l9.5 5.5L79.5 54z"/>',
  'UserFollowedOutlinedIcon',
);
`},29077:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M51 15c18.2 0 33 14.8 33 33S69.2 81 51 81H16c-2.2 0-4-1.8-4-4V48c0-18.2 14.8-33 33-33h6zm11.2 16.3c-1.5-.7-3.3 0-4 1.5l-9.9 22.1-10.6-22.2c-.7-1.5-2.5-2.1-4-1.4-1.5.7-2.1 2.5-1.4 4l13.5 28c1.1 2.3 4.4 2.3 5.4-.1l12.5-28c.7-1.5 0-3.3-1.5-3.9z"/>',
  'VerifiedFilledIcon',
);
`},17343:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m68 34.2 9.9-4.9c3.5-1.7 7.7-.3 9.4 3.1.5 1 .7 2 .7 3.1v25.3c0 3.9-3.1 7-7 7-1.1 0-2.2-.3-3.2-.8L68 61.9V66c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V30c0-6.1 4.9-11 11-11h38c6.1 0 11 4.9 11 11v4.2zm0 6.7v14.3l12.5 6.5c.1.1.3.1.5.1.6 0 1-.4 1-1V35.5c0-.2 0-.3-.1-.4-.2-.5-.8-.7-1.3-.4L68 40.9zM62 66V30c0-2.8-2.2-5-5-5H19c-2.8 0-5 2.2-5 5v36c0 2.8 2.2 5 5 5h38c2.8 0 5-2.2 5-5zM27 44c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>',
  'VideoOutlinedIcon',
);
`},82752:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 13c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V24c0-6.1 4.9-11 11-11h58zM39.9 37.1c-1.6-.5-3.3.4-3.8 2L34 45.9l-2.1-6.8a3.037 3.037 0 0 0-5.8 1.8l5 16c.9 2.8 4.8 2.8 5.7 0l5-16c.6-1.6-.3-3.3-1.9-3.8zM48 37c-1.7 0-3 1.3-3 3v16c0 1.7 1.3 3 3 3s3-1.3 3-3V40c0-1.7-1.3-3-3-3zm15 0h-6c-1.7 0-3 1.3-3 3v16c0 1.7 1.3 3 3 3s3-1.3 3-3v-5h3c3.9 0 7-3.1 7-7s-3.1-7-7-7zm0 6c.6 0 1 .4 1 1s-.4 1-1 1h-3v-2h3z"/>',
  'VipCardFilledIcon',
);
`},3677:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m46.4 16 .3-.3c.9-.7 2.1-.5 2.8.3L66 36.8c.6.7 1.5 1 2.4.6l16.1-6.9c.4-.2.8-.2 1.2-.1 1.1.2 1.8 1.3 1.6 2.4l-8.9 42.9c-.8 3.7-4 6.4-7.8 6.4h-45c-3.8 0-7.1-2.7-7.8-6.4l-9-42.9c-.1-.4 0-.8.1-1.2.4-1 1.6-1.5 2.6-1.1l16.1 6.9c.8.4 1.8.1 2.4-.6L46.4 16z"/>',
  'VipFilledIcon',
);
`},47436:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m29.2 34.8 15-19c.2-.3.5-.6.8-.8 2.1-1.7 5.2-1.3 6.9.8l15 19 14.4-6.2c.9-.4 1.9-.5 2.9-.3 2.6.5 4.3 3.1 3.8 5.8l-8.4 40.4c-1 4.9-5.3 8.4-10.3 8.4H26.8c-5 0-9.3-3.5-10.3-8.4L8.1 34.1c-.2-1-.1-2 .3-2.9 1.1-2.5 3.9-3.6 6.4-2.6l14.4 6.2zM48 20.7 33.3 39.2c-1.4 1.7-3.7 2.3-5.8 1.5L14.4 35l8 38.3c.4 2.1 2.3 3.6 4.4 3.6h42.4c2.2 0 4-1.5 4.4-3.6l8-38.3-13.2 5.6c-2 .9-4.4.3-5.8-1.5L48 20.7z"/>',
  'VipOutlinedIcon',
);
`},35564:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M65.1 11c.6 1 1 2.2 1 3.4v67.3c0 3.5-2.9 6.4-6.4 6.4-1.2 0-2.4-.3-3.4-1L30.6 70.9H16.9C12 70.9 8 66.9 8 62V34c0-4.9 4-8.9 8.9-8.9h13.6L56.3 9c3-1.9 6.9-1 8.8 2zm11.3 12.5c1.4-.9 3.2-.6 4.2.8 9.9 14.3 9.9 33.1 0 47.4-.9 1.4-2.8 1.7-4.2.8-1.4-.9-1.7-2.8-.8-4.2 8.5-12.3 8.5-28.4 0-40.6-.9-1.4-.6-3.2.8-4.2z"/>',
  'VolumeDownFilledIcon',
);
`},17507:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M47.6 10.1c.3.4.4.8.4 1.3v73.2c0 1.1-.9 2-2 2-.5 0-.9-.2-1.3-.4L19.2 65.6 3.8 60.5c-.8-.3-1.4-1-1.4-1.9V37.4c0-.9.6-1.6 1.4-1.9l15.4-5.1L44.7 9.8c.9-.7 2.2-.5 2.9.3zm37.1 25.2c1.3 1.3 1.4 3.4.2 4.8l-.2.3-7.6 7.6 7.6 7.6c1.4 1.4 1.4 3.7 0 5.1-1.3 1.3-3.4 1.4-4.8.2l-.3-.2-7.6-7.6-7.6 7.6c-1.4 1.4-3.7 1.4-5.1 0-1.3-1.3-1.4-3.4-.2-4.8l.2-.3 7.6-7.6-7.6-7.6c-1.4-1.4-1.4-3.7 0-5.1 1.3-1.3 3.4-1.4 4.8-.2l.3.2 7.6 7.6 7.6-7.6c1.4-1.4 3.7-1.4 5.1 0z"/>',
  'VolumeMuteFilledIcon',
);
`},88448:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m24.1 30.2 20.2-12.5c2.3-1.4 5.4-.7 6.9 1.6.5.8.8 1.7.8 2.6V74c0 2.7-2.2 4.9-5 4.9-.9 0-1.9-.3-2.6-.8L24.1 65.8H15c-3.9 0-7-3.1-7-6.9V37.1c0-3.8 3.1-6.9 7-6.9h9.1zm2.5 5.5c-.5.3-1 .5-1.6.5H15c-.6 0-1 .4-1 1v21.7c0 .5.4 1 1 1h10c.6 0 1.1.2 1.6.5l19.4 12V23.7l-19.4 12zm51.5 12.9 8.1 8.1c1.1 1.1 1.1 2.9 0 4.1-1.1 1.1-2.9 1.1-4.1 0L74 52.7l-8.1 8.1c-1.1 1.1-2.9 1.1-4.1 0s-1.1-2.9 0-4.1l8.1-8.1-8.1-8.1c-1.1-1.1-1.1-2.9 0-4.1s2.9-1.1 4.1 0l8.1 8.1 8.1-8.1c1.1-1.1 2.9-1.1 4.1 0 1.1 1.1 1.1 2.9 0 4.1l-8.1 8.1z"/>',
  'VolumeMuteOutlinedIcon',
);
`},6185:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M47.6 10.1c.3.4.4.8.4 1.3v73.2c0 1.1-.9 2-2 2-.5 0-.9-.2-1.3-.4L19.2 65.6 3.8 60.5c-.8-.3-1.4-1-1.4-1.9V37.4c0-.9.6-1.6 1.4-1.9l15.4-5.1L44.7 9.8c.9-.7 2.2-.5 2.9.3zM78 11.6C85.8 22.1 90 34.7 90 48c0 13.3-4.2 25.9-12 36.3-1.2 1.6-3.4 1.9-5 .8-1.6-1.2-1.9-3.4-.8-5C79 70.9 82.7 59.7 82.7 48c0-11.7-3.7-22.9-10.6-32.1-1.2-1.6-.8-3.9.8-5s4-.9 5.1.7zM63 24.3c5.1 6.8 7.9 15 7.9 23.7S68.1 65 63 71.8c-1.2 1.6-3.5 1.9-5 .7s-1.9-3.5-.7-5c4.2-5.6 6.5-12.3 6.5-19.5 0-7.1-2.3-13.8-6.4-19.4-1.2-1.6-.9-3.8.7-5 1.4-1.2 3.7-.9 4.9.7z"/>',
  'VolumeUpFilledIcon',
);
`},72519:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m24.1 30.2 20.2-12.5c2.3-1.4 5.4-.7 6.9 1.6.5.8.8 1.7.8 2.6V74c0 2.7-2.2 4.9-5 4.9-.9 0-1.9-.3-2.6-.8L24.1 65.8H15c-3.9 0-7-3.1-7-6.9V37.1c0-3.8 3.1-6.9 7-6.9h9.1zm2.5 5.5c-.5.3-1 .5-1.6.5H15c-.6 0-1 .4-1 1v21.7c0 .5.4 1 1 1h10c.6 0 1.1.2 1.6.5l19.4 12V23.7l-19.4 12zm48.5 42.1c-1.2 1.1-3.1 1.1-4.2-.1-1.2-1.2-1.1-3.1.1-4.2 14.8-14.1 14.8-36.9 0-51-1.2-1.1-1.2-3-.1-4.2 1.2-1.2 3.1-1.2 4.2-.1 17.2 16.5 17.2 43.1 0 59.6zM65.1 66c-1.2 1.1-3.1 1.1-4.2-.1-1.1-1.2-1.1-3.1.1-4.2 8.1-7.6 8.1-19.7 0-27.3-1.2-1.1-1.3-3-.1-4.2 1.1-1.2 3-1.2 4.2-.1 10.5 9.8 10.5 26 0 35.9z"/>',
  'VolumeUpOutlinedIcon',
);
`},22463:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M72 38.4c9.3 3.3 16 12.2 16 22.6 0 4-1 7.9-2.8 11.3-.2.3-.5.8-.9 1.6l1.4 5c.6 2.2-1.4 4.3-3.7 3.7l-5-1.4c-.3.2-.5.3-.6.3-3.8 2.3-8 3.5-12.4 3.5-7.3 0-13.9-3.3-18.3-8.4-1.7.3-3.5.4-5.3.4-5.9 0-11.6-1.6-16.6-4.5-.2-.1-.6-.4-1.3-.7l-7.6 2c-2.2.6-4.3-1.5-3.7-3.7l2-7.4c-.7-1.2-1.2-2.1-1.5-2.6C9.3 55.5 8 50.3 8 45c0-17.7 14.5-32 32.4-32 15 0 27.9 10.1 31.5 24.3.1.4.1.7.1 1.1zm-6.4-1.3C62.1 26.4 52 19 40.4 19 25.8 19 14 30.7 14 45c0 4.3 1.1 8.5 3.1 12.3.3.5 1 1.7 2 3.4.4.7.5 1.6.3 2.3l-1 3.6 3.7-1c.8-.2 1.6-.1 2.3.3 1.3.8 2.1 1.2 2.4 1.4 4.1 2.4 8.7 3.7 13.6 3.7.6 0 1.2 0 1.7-.1-1.4-3-2.2-6.4-2.2-9.9 0-13.3 10.7-24 24-24 .6 0 1.2 0 1.7.1zm12.5 37.2c-.2-.8-.1-1.6.3-2.3.8-1.3 1.2-2.1 1.4-2.5C81.3 66.9 82 64 82 61c0-9.9-8.1-18-18-18s-18 8.1-18 18 8.1 18 18 18c3.3 0 6.5-.9 9.2-2.5.2-.1.8-.5 1.7-1 .7-.4 1.5-.5 2.3-.3l1.2.3-.3-1.2zM31 40c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm18 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm8 19c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm14 0c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>',
  'WeChatOutlinedIcon',
);
`},23913:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M47.6 36.9c.3 0 .5-.1.7-.1 1.5-1.2 4.5-2.7 7.2-3.5C60 31.9 64 32.1 66.6 35c.8.9 1.3 1.8 1.6 2.9.6 2.2.2 3.5-1.1 6.5-1 2.2-1 2.8-.4 3.7.5.6 1 .8 2.1 1 .3 0 .5.1 1.2.1 5.4.3 8 2.5 8 9.2 0 8.1-5.7 14.8-15 19.6-7.4 3.7-16.9 6-24.1 6-8.5 0-16.5-1.7-22.2-5.6C8.8 73 6 64.1 9.5 51.9c2.8-9.7 14.8-23.1 26.2-28 2.5-1.1 5.8-1.3 8.1-.2 3.6 1.8 4.2 5.7 1.9 10.5-.9 1.8-.8 2.1 0 2.4.5.2 1.2.3 1.9.3zm-7.3-5.3c.6-1.2.8-2.1.8-2.5-.6-.2-2-.1-3 .3-9.7 4.1-20.4 16.2-22.8 24.1-2.8 9.8-.9 16 4.8 19.9C24.7 76.5 31.6 78 39 78c6.2 0 14.8-2.1 21.3-5.4C67.8 68.7 72 63.8 72 58.4c0-1.1-.1-2-.3-2.5-.1-.3-.2-.4-.2-.4-.1-.1-.5-.2-1.9-.3-.7 0-1-.1-1.5-.1-2.6-.3-4.6-1.2-6.2-3.3-2.4-3.2-2.1-5.7-.4-9.8.7-1.7.9-2.2.8-2.5 0-.1-.1-.2-.3-.4-.7-.7-2.4-.8-4.9-.1-1.2.4-2.4.9-3.5 1.4-.9.4-1.6.9-1.8 1.1-1.8 1.6-5.7 1.8-8.5.7-3.9-1.6-5.4-5.6-3-10.6zm47.4 8.1c-.3 1.6-1.8 2.8-3.4 2.5s-2.8-1.8-2.5-3.4c.1-.9.2-1.8.2-2.8 0-9.9-8.1-18-18-18h-.8c-1.7.1-3.1-1.2-3.1-2.9S61.3 12 63 12h1c13.3 0 24 10.7 24 24 0 1.2-.1 2.5-.3 3.7zm-9.8-1.4c-.1 1.7-1.6 2.9-3.3 2.7s-2.9-1.6-2.7-3.3V37c0-4.4-3.6-8-8-8-1.7 0-3-1.3-3-3s1.3-3 3-3c7.7 0 14 6.3 14 14 .1.4.1.8 0 1.3z"/>',
  'WeiBoOutlinedIcon',
);
`},62502:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M86.9 27.6c1.3 1 1.5 2.9.5 4.2s-2.9 1.5-4.2.5C73.2 24.4 60.9 20 48 20c-12.9 0-25.2 4.4-35.1 12.3-1.3 1-3.2.8-4.2-.5s-.8-3.2.5-4.2C20.1 18.9 33.7 14 48 14c14.3 0 27.9 4.9 38.9 13.6zm-22.1 28c1.3 1 1.6 2.9.6 4.2s-2.9 1.6-4.2.6C57.4 57.6 52.8 56 48 56c-4.8 0-9.4 1.6-13.2 4.4-1.3 1-3.2.7-4.2-.6s-.7-3.2.6-4.2C36 52 41.9 50 48 50c6.1 0 12 2 16.8 5.6zm12-14c1.3 1 1.6 2.9.6 4.2s-2.9 1.6-4.2.6C66 41 57.2 38 48 38s-18 3-25.2 8.4c-1.3 1-3.2.7-4.2-.6s-.7-3.2.6-4.2C27.4 35.4 37.5 32 48 32s20.6 3.4 28.8 9.6zM48 80c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>',
  'WifiOutlinedIcon',
);
`},51347:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm-6.7 10.6 7.4 5.6c1.3 1 1.6 2.9.6 4.2-1 1.3-2.9 1.6-4.2.6l-2.5-1.9v3.7c3.6.3 6.4 3.3 6.4 7v8.4c0 3.7-2.8 6.7-6.4 7v3.7L45 61c1.3-1 3.2-.7 4.2.6 1 1.3.7 3.2-.6 4.2l-7.4 5.6c-2 1.5-4.8.1-4.8-2.4v-9.8c-3.6-.3-6.4-3.3-6.4-7v-8.4c0-3.7 2.8-6.7 6.4-7V27c0-2.5 2.9-3.9 4.9-2.4zm9.9 13.6c0-2.5 2.8-3.9 4.8-2.4l12.8 9.8a3 3 0 0 1 0 4.8L56 60.2c-2 1.5-4.8.1-4.8-2.4V38.2zm-9.3 4.6H37c-.6 0-1 .4-1 1v8.4c0 .6.4 1 1 1h4.9c.6 0 1-.4 1-1v-8.4c0-.6-.5-1-1-1zm15.3 1.5v7.5L62 48l-4.8-3.7z"/>',
  'XiaMiCircleOutlinedIcon',
);
`},52961:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm17.2 47.2h.1c.4 0 .7.4.7.8v3.8c-.1 1.8-1.5 3.2-3.2 3.3h-.4c-1.7-.1-3.1-1.5-3.2-3.3V62c0-.4.4-.7.7-.8h.2c.4 0 .7.4.7.8v3.7c.1.8.7 1.5 1.5 1.6h.2c.8-.1 1.5-.7 1.5-1.6v-3.6c.3-.5.7-.9 1.2-.9zm-14.8 0h.1c.4 0 .7.4.7.8v3.8c-.1 1.8-1.5 3.2-3.2 3.3h-.4c-1.7-.1-3.1-1.5-3.2-3.3V62c0-.4.4-.7.7-.8h.2c.4 0 .7.4.7.8v3.7c.1.8.7 1.5 1.5 1.6h.2c.8-.1 1.5-.7 1.5-1.6v-3.6c.3-.5.7-.9 1.2-.9zm-19.5 0h.1c.1 0 .3.1.4.2l.1.1 2.2 2.2 2.2-2.2.1-.1c.3-.2.7-.2 1 0l.1.1.1.1c.2.3.2.7 0 1l-.2.1-2.5 2.6v3c0 .4-.4.7-.7.8h-.2c-.4 0-.7-.4-.7-.8v-3l-2.5-2.6-.1-.1c-.3-.2-.3-.4-.3-.7v-.2c.1-.2.3-.4.6-.5h.3zm9.7 0h.2c1.7.1 3.1 1.5 3.2 3.3v1.3c-.1 1.8-1.5 3.2-3.2 3.3h-.4c-1.7-.1-3.1-1.5-3.2-3.3v-1.1c0-2 1.5-3.5 3.4-3.5zm12.3 0h.1c.4 0 .7.4.7.8v6.3c0 .4-.4.7-.7.8h-.2c-.4 0-.7-.4-.7-.8v-6.2c0-.5.4-.9.8-.9zm4.9 0h.1c.2 0 .3.1.5.2l.1.1.1.1c.2.3.1.7-.1 1l-.1.1-2.4 2.4 2.4 2.4.1.1.1.1v.2c.1.3 0 .6-.1.8l-.1.1-.1.1c-.2.2-.5.2-.8.1h-.2l-.1-.1-.1-.1-2.6-2.8-.1-.1c-.4-.5-.4-1.1 0-1.6l.1-.1 2.7-2.7c.2-.2.4-.3.6-.3zm-17.2 1.7h-.1c-.8.1-1.5.7-1.5 1.6v1c0 .9.7 1.7 1.6 1.7h.2c.8-.1 1.5-.7 1.5-1.6v-1.1c-.1-.9-.8-1.6-1.7-1.6zm4.6-35.2.2.1 12.8 7.5c5.2 3.1 5.3 10.6.2 13.8l-.2.1-.5-.2.5.3-12.8 7.5c-2.8 1.7-6.5.7-8.1-2.2-1.6-2.8-.7-6.4 2-8.1l.2-.1 5.3-3.1 10.4 4.3-8.9-5.2-6.9-4.1c-2.8-1.7-3.8-5.4-2.2-8.3 1.7-2.8 5.2-3.8 8-2.3z"/>',
  'YouKuVipCircleOutlinedIcon',
);
`},64492:function(c,e){e.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M75 10c6 0 10.8 4.8 11 10.7V75c0 6-4.8 10.8-10.7 11H21c-6 0-10.8-4.8-11-10.7V21c0-6 4.8-10.8 10.7-11H75zm0 6H21c-2.7 0-4.9 2.1-5 4.8V75c0 2.7 2.1 4.9 4.8 5H75c2.7 0 4.9-2.1 5-4.8V21c0-2.7-2.1-4.9-4.8-5H75zm-8.6 33.4c1.7 0 3 1.3 3 3s-1.3 3-3 3h-3l10.7 10.7c1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0L59.4 59.9v2.5c0 1.6-1.2 2.9-2.8 3h-.2c-1.7 0-3-1.3-3-3v-10c0-1.7 1.3-3 3-3h10zM28.6 25.3 39 35.8v-2.5c0-1.6 1.2-2.9 2.8-3h.2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H32c-1.7 0-3-1.3-3-3s1.3-3 3-3h3L24.3 29.6c-1.2-1.2-1.2-3.1 0-4.2s3.1-1.2 4.3-.1z"/>',
  'ZoomInOutlinedIcon',
);
`},90282:function(c,e){e.Z=`export { default as AccessTimeCircleFilledIcon } from './AccessTimeCircleFilled';
export { default as AccessTimeCircleFilledBoldIcon } from './AccessTimeCircleFilledBold';
export { default as AccessTimeCircleOutlinedIcon } from './AccessTimeCircleOutlined';
export { default as AddIcon } from './Add';
export { default as AddCircleFilledIcon } from './AddCircleFilled';
export { default as AddCircleFilledBoldIcon } from './AddCircleFilledBold';
export { default as AddCircleOutlinedIcon } from './AddCircleOutlined';
export { default as AddCouponOutlinedIcon } from './AddCouponOutlined';
export { default as AddLargeIcon } from './AddLarge';
export { default as AlarmOutlinedIcon } from './AlarmOutlined';
export { default as AlertCircleFilledIcon } from './AlertCircleFilled';
export { default as AlertCircleFilledBoldIcon } from './AlertCircleFilledBold';
export { default as AlertCircleOutlinedIcon } from './AlertCircleOutlined';
export { default as AliFishOutlinedIcon } from './AliFishOutlined';
export { default as AliSweetOutlinedIcon } from './AliSweetOutlined';
export { default as AliWangWangFilledIcon } from './AliWangWangFilled';
export { default as AliWangWangOutlinedIcon } from './AliWangWangOutlined';
export { default as AlignCenterFilledIcon } from './AlignCenterFilled';
export { default as AlignLeftFilledIcon } from './AlignLeftFilled';
export { default as AlignRightFilledIcon } from './AlignRightFilled';
export { default as ArrowBackwardIcon } from './ArrowBackward';
export { default as ArrowBackwardLargeIcon } from './ArrowBackwardLarge';
export { default as ArrowDownwardIcon } from './ArrowDownward';
export { default as ArrowDownwardLargeIcon } from './ArrowDownwardLarge';
export { default as ArrowForwardIcon } from './ArrowForward';
export { default as ArrowForwardLargeIcon } from './ArrowForwardLarge';
export { default as ArrowUpCircleOutlinedIcon } from './ArrowUpCircleOutlined';
export { default as ArrowUpwardIcon } from './ArrowUpward';
export { default as ArrowUpwardLargeIcon } from './ArrowUpwardLarge';
export { default as AssessmentOutlinedIcon } from './AssessmentOutlined';
export { default as AssignmentOutlinedIcon } from './AssignmentOutlined';
export { default as BabyOutlinedIcon } from './BabyOutlined';
export { default as BankCardFilledIcon } from './BankCardFilled';
export { default as BankCardOutlinedIcon } from './BankCardOutlined';
export { default as BlockCircleFilledIcon } from './BlockCircleFilled';
export { default as BlockCircleOutlinedIcon } from './BlockCircleOutlined';
export { default as BlockCircleOutlinedThinIcon } from './BlockCircleOutlinedThin';
export { default as BogoOutlinedIcon } from './BogoOutlined';
export { default as BoltFilledIcon } from './BoltFilled';
export { default as BoltOutlinedIcon } from './BoltOutlined';
export { default as BuildingOutlinedIcon } from './BuildingOutlined';
export { default as CalendarInvisibleOutlinedIcon } from './CalendarInvisibleOutlined';
export { default as CalendarOutlinedIcon } from './CalendarOutlined';
export { default as CalendarVisibleOutlinedIcon } from './CalendarVisibleOutlined';
export { default as CameraFilledIcon } from './CameraFilled';
export { default as CameraOutlinedIcon } from './CameraOutlined';
export { default as CardPackageOutlinedIcon } from './CardPackageOutlined';
export { default as CaretDownIcon } from './CaretDown';
export { default as CaretLeftIcon } from './CaretLeft';
export { default as CaretRightIcon } from './CaretRight';
export { default as CaretUpIcon } from './CaretUp';
export { default as ChatFilledIcon } from './ChatFilled';
export { default as ChatOutlinedIcon } from './ChatOutlined';
export { default as CheerOutlinedIcon } from './CheerOutlined';
export { default as CinemaCardOutlinedIcon } from './CinemaCardOutlined';
export { default as CinemaFilledIcon } from './CinemaFilled';
export { default as CinemaOutlinedIcon } from './CinemaOutlined';
export { default as CircleOutlinedIcon } from './CircleOutlined';
export { default as ClockOutlinedIcon } from './ClockOutlined';
export { default as CloseIcon } from './Close';
export { default as CloseLargeIcon } from './CloseLarge';
export { default as CloudBBOutlinedIcon } from './CloudBBOutlined';
export { default as CloudDownloadOutlinedIcon } from './CloudDownloadOutlined';
export { default as CloudUploadOutlinedIcon } from './CloudUploadOutlined';
export { default as CodeOutlinedIcon } from './CodeOutlined';
export { default as CopyOutlinedIcon } from './CopyOutlined';
export { default as CouponFilledIcon } from './CouponFilled';
export { default as CouponOutlinedIcon } from './CouponOutlined';
export { default as DateOutlinedIcon } from './DateOutlined';
export { default as DeleteOutlinedIcon } from './DeleteOutlined';
export { default as DiscussOutlinedIcon } from './DiscussOutlined';
export { default as DoubleArrowDownTwoToneIcon } from './DoubleArrowDownTwoTone';
export { default as DoubleArrowLeftTwoToneIcon } from './DoubleArrowLeftTwoTone';
export { default as DoubleArrowRightTwoToneIcon } from './DoubleArrowRightTwoTone';
export { default as DoubleArrowUpTwoToneIcon } from './DoubleArrowUpTwoTone';
export { default as DoubleCircleOutlinedIcon } from './DoubleCircleOutlined';
export { default as DownIcon } from './Down';
export { default as DrinkFilledIcon } from './DrinkFilled';
export { default as DrinkOutlinedIcon } from './DrinkOutlined';
export { default as EditFilledIcon } from './EditFilled';
export { default as EditOutlinedIcon } from './EditOutlined';
export { default as EggOutlinedIcon } from './EggOutlined';
export { default as ErrorCircleFilledIcon } from './ErrorCircleFilled';
export { default as ErrorCircleFilledBoldIcon } from './ErrorCircleFilledBold';
export { default as ErrorCircleOutlinedIcon } from './ErrorCircleOutlined';
export { default as ExperimentOutlinedIcon } from './ExperimentOutlined';
export { default as ExploreCircleFilledIcon } from './ExploreCircleFilled';
export { default as ExploreCircleOutlinedIcon } from './ExploreCircleOutlined';
export { default as EyeClosedFilledIcon } from './EyeClosedFilled';
export { default as EyeFilledIcon } from './EyeFilled';
export { default as EyeOutlinedIcon } from './EyeOutlined';
export { default as FemaleOutlinedIcon } from './FemaleOutlined';
export { default as FilterOutlinedIcon } from './FilterOutlined';
export { default as FingerprintOutlinedIcon } from './FingerprintOutlined';
export { default as FireFilledIcon } from './FireFilled';
export { default as FlashlightOnOutlinedIcon } from './FlashlightOnOutlined';
export { default as FlashlightOutlinedIcon } from './FlashlightOutlined';
export { default as FlipOutlinedIcon } from './FlipOutlined';
export { default as FollowOutlinedIcon } from './FollowOutlined';
export { default as FullScreenOutlinedIcon } from './FullScreenOutlined';
export { default as GetTicketsFilledIcon } from './GetTicketsFilled';
export { default as GetTicketsOutlinedIcon } from './GetTicketsOutlined';
export { default as GiftCardOutlinedIcon } from './GiftCardOutlined';
export { default as GiftOutlinedIcon } from './GiftOutlined';
export { default as GlassesOutlinedIcon } from './GlassesOutlined';
export { default as GppGoodFilledIcon } from './GppGoodFilled';
export { default as GppGoodOutlinedIcon } from './GppGoodOutlined';
export { default as GridViewOutlinedIcon } from './GridViewOutlined';
export { default as GripperBarHorizontalIcon } from './GripperBarHorizontal';
export { default as GripperBarVerticalIcon } from './GripperBarVertical';
export { default as HashOutlinedIcon } from './HashOutlined';
export { default as HeartAddOutlinedIcon } from './HeartAddOutlined';
export { default as HeartAddOutlinedBoldIcon } from './HeartAddOutlinedBold';
export { default as HeartBrokenIcon } from './HeartBroken';
export { default as HeartFilledIcon } from './HeartFilled';
export { default as HeartMarkedOutlinedIcon } from './HeartMarkedOutlined';
export { default as HeartOutlinedIcon } from './HeartOutlined';
export { default as HelpCircleFilledIcon } from './HelpCircleFilled';
export { default as HelpCircleOutlinedIcon } from './HelpCircleOutlined';
export { default as HistoryOutlinedIcon } from './HistoryOutlined';
export { default as HomeIcon } from './Home';
export { default as HomeFilledIcon } from './HomeFilled';
export { default as HomeOutlinedIcon } from './HomeOutlined';
export { default as HourglassOutlinedIcon } from './HourglassOutlined';
export { default as InboxFilledIcon } from './InboxFilled';
export { default as InboxFilledBoldIcon } from './InboxFilledBold';
export { default as LightVipOutlinedIcon } from './LightVipOutlined';
export { default as LinkOutlinedIcon } from './LinkOutlined';
export { default as ListOutlinedIcon } from './ListOutlined';
export { default as LoadingThreeQuartersOutlinedIcon } from './LoadingThreeQuartersOutlined';
export { default as LocationFilledIcon } from './LocationFilled';
export { default as LocationOutlinedIcon } from './LocationOutlined';
export { default as LuckyMoneyOutlinedIcon } from './LuckyMoneyOutlined';
export { default as MaiSuiLeftIcon } from './MaiSuiLeft';
export { default as MaiSuiRightIcon } from './MaiSuiRight';
export { default as MailOutlinedIcon } from './MailOutlined';
export { default as MaleOutlinedIcon } from './MaleOutlined';
export { default as MapFilledIcon } from './MapFilled';
export { default as MapOutlinedIcon } from './MapOutlined';
export { default as MessageOutlinedIcon } from './MessageOutlined';
export { default as MicOutlinedIcon } from './MicOutlined';
export { default as MiniContractOutlinedIcon } from './MiniContractOutlined';
export { default as MinusIcon } from './Minus';
export { default as MobileFilledIcon } from './MobileFilled';
export { default as MobileOutlinedIcon } from './MobileOutlined';
export { default as MomentsOutlinedIcon } from './MomentsOutlined';
export { default as MoonOutlinedIcon } from './MoonOutlined';
export { default as MoreIcon } from './More';
export { default as MoreOutlinedIcon } from './MoreOutlined';
export { default as MoreVerticalOutlinedIcon } from './MoreVerticalOutlined';
export { default as MovieAppointmentOutlinedIcon } from './MovieAppointmentOutlined';
export { default as MovieFilledIcon } from './MovieFilled';
export { default as MovieOutlinedIcon } from './MovieOutlined';
export { default as NearMeIcon } from './NearMe';
export { default as NextFilledIcon } from './NextFilled';
export { default as NoteOutlinedIcon } from './NoteOutlined';
export { default as NoticeOutlinedIcon } from './NoticeOutlined';
export { default as OrderOutlinedIcon } from './OrderOutlined';
export { default as OrdersOutlinedIcon } from './OrdersOutlined';
export { default as PageEditOutlinedIcon } from './PageEditOutlined';
export { default as PaperOutlinedIcon } from './PaperOutlined';
export { default as PasswordOutlinedIcon } from './PasswordOutlined';
export { default as PhoneFilledIcon } from './PhoneFilled';
export { default as PhoneOutlinedIcon } from './PhoneOutlined';
export { default as PictureOutlinedIcon } from './PictureOutlined';
export { default as PlayCircleOutlinedIcon } from './PlayCircleOutlined';
export { default as PlayCircleOutlinedBoldIcon } from './PlayCircleOutlinedBold';
export { default as PreferentialEventFilledIcon } from './PreferentialEventFilled';
export { default as PublicWelfareOutlinedIcon } from './PublicWelfareOutlined';
export { default as QAFilledIcon } from './QAFilled';
export { default as QRCodeOutlinedIcon } from './QRCodeOutlined';
export { default as QuoteEndIcon } from './QuoteEnd';
export { default as QuoteStartIcon } from './QuoteStart';
export { default as RMBCircleOutlinedIcon } from './RMBCircleOutlined';
export { default as RMBRefundOutlinedIcon } from './RMBRefundOutlined';
export { default as RadioCheckedFilledIcon } from './RadioCheckedFilled';
export { default as RankingOutlinedIcon } from './RankingOutlined';
export { default as RefreshOutlinedIcon } from './RefreshOutlined';
export { default as ReportOutlinedIcon } from './ReportOutlined';
export { default as SaveOutlinedIcon } from './SaveOutlined';
export { default as ScanOutlinedIcon } from './ScanOutlined';
export { default as SearchGapOutlinedIcon } from './SearchGapOutlined';
export { default as SearchOutlinedIcon } from './SearchOutlined';
export { default as SettingsOutlinedIcon } from './SettingsOutlined';
export { default as SevenDayCalendarIcon } from './SevenDayCalendar';
export { default as ShareIcon } from './Share';
export { default as ShoppingCartOutlinedIcon } from './ShoppingCartOutlined';
export { default as ShowFilledIcon } from './ShowFilled';
export { default as ShowOutlinedIcon } from './ShowOutlined';
export { default as SmileFilledIcon } from './SmileFilled';
export { default as SmileOutlinedIcon } from './SmileOutlined';
export { default as SortIcon } from './Sort';
export { default as StarCircleOutlinedIcon } from './StarCircleOutlined';
export { default as StarFilledIcon } from './StarFilled';
export { default as StarFilledSharpIcon } from './StarFilledSharp';
export { default as StarOutlinedIcon } from './StarOutlined';
export { default as StarRoundedFilledIcon } from './StarRoundedFilled';
export { default as StoreFilledIcon } from './StoreFilled';
export { default as SuccessCircleFilledIcon } from './SuccessCircleFilled';
export { default as SuccessCircleFilledBoldIcon } from './SuccessCircleFilledBold';
export { default as SuccessCircleOutlinedIcon } from './SuccessCircleOutlined';
export { default as SuccessFilledIcon } from './SuccessFilled';
export { default as SuccessFilledBoldIcon } from './SuccessFilledBold';
export { default as SunOutlinedIcon } from './SunOutlined';
export { default as TaoPiaoPiaoLogoIcon } from './TaoPiaoPiaoLogo';
export { default as TaoTicketsLogoIcon } from './TaoTicketsLogo';
export { default as ThumbUpFilledIcon } from './ThumbUpFilled';
export { default as ThumbUpOutlinedIcon } from './ThumbUpOutlined';
export { default as TicketFilledIcon } from './TicketFilled';
export { default as TicketMachineOutlinedIcon } from './TicketMachineOutlined';
export { default as TicketOutlinedIcon } from './TicketOutlined';
export { default as TipsOutlinedIcon } from './TipsOutlined';
export { default as ToTopOutlinedIcon } from './ToTopOutlined';
export { default as TopicFilledIcon } from './TopicFilled';
export { default as TopicOutlinedIcon } from './TopicOutlined';
export { default as TrendingCircleFilledIcon } from './TrendingCircleFilled';
export { default as TrendingCircleOutlinedIcon } from './TrendingCircleOutlined';
export { default as TripleVerticalLineIcon } from './TripleVerticalLine';
export { default as UpIcon } from './Up';
export { default as UserFollowedOutlinedIcon } from './UserFollowedOutlined';
export { default as VerifiedFilledIcon } from './VerifiedFilled';
export { default as VideoOutlinedIcon } from './VideoOutlined';
export { default as VipCardFilledIcon } from './VipCardFilled';
export { default as VipFilledIcon } from './VipFilled';
export { default as VipOutlinedIcon } from './VipOutlined';
export { default as VolumeDownFilledIcon } from './VolumeDownFilled';
export { default as VolumeMuteFilledIcon } from './VolumeMuteFilled';
export { default as VolumeMuteOutlinedIcon } from './VolumeMuteOutlined';
export { default as VolumeUpFilledIcon } from './VolumeUpFilled';
export { default as VolumeUpOutlinedIcon } from './VolumeUpOutlined';
export { default as WeChatOutlinedIcon } from './WeChatOutlined';
export { default as WeiBoOutlinedIcon } from './WeiBoOutlined';
export { default as WifiOutlinedIcon } from './WifiOutlined';
export { default as XiaMiCircleOutlinedIcon } from './XiaMiCircleOutlined';
export { default as YouKuVipCircleOutlinedIcon } from './YouKuVipCircleOutlined';
export { default as ZoomInOutlinedIcon } from './ZoomInOutlined';
`},65227:function(c,e){e.Z=`.icon-container {
  display: flex;
  color: #2e333e;
  font-size: 15px;
  width: 100%;

  .bui-radio-group {
    width: 80px;
    flex: 0 0 auto;
    margin-right: 12px;
  }

  .icon-panel {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }

  .bui-input-wrapper {
    width: 70%;
    background: var(--bui-color-bg-default);
    margin-bottom: 9px;
  }
}

.icon-container-hint {
  font-size: 13px;
  color: var(--bui-color-success);
  padding: 0 12px 9px;
}

.icon-container-content {
  overflow: auto;
}

.icon-container-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  align-items: center;
  border-radius: 10px;
  background-color: var(--bui-color-bg-view);
}

.modal-content div:first-child {
  font-weight: bolder;
  font-size: 20px;
}

.modal-content div:nth-child(n + 2) {
  user-select: all;
}

.modal-content div:nth-child(n + 2)::selection {
  background-color: rgba(0, 0, 0, 0.2);
}

.icon-item {
  width: 128px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--bui-color-fg-default);
  background: var(--bui-color-bg-default);
  flex-direction: column;
  border-radius: 6px;
  margin: 5px;
  padding: 9px;
  cursor: pointer;
}

.icon-name {
  font-size: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 5px 3px;
  text-align: center;
  width: 100%;
  color: var(--bui-color-fg-default);
}
`},62845:function(c,e){e.Z=`import React, { useEffect, useState } from 'react';
import { Input, Modal, Radio, RadioGroup } from '@bifrostui/react';
import * as iconComponents from '../components';
import './index.less';

const allIconsMap = {};
const allIcons = Object.keys(iconComponents)
  .sort()
  .map((importName) => {
    let theme;
    if (importName.indexOf('Outlined') !== -1) {
      theme = 'Outlined';
    } else {
      theme = 'Filled';
    }

    const name = importName.replace(/(Outlined|Filled|)$/, '');
    const icon = {
      importName,
      name,
      theme,
      Component: iconComponents[importName],
    };
    allIconsMap[importName] = icon;
    return icon;
  });

const IconDemo = () => {
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState('');
  const [icons, setIcons] = useState(allIcons);
  const [open, setOpen] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(null);

  useEffect(() => {
    setIcons(
      allIcons.filter((item) => {
        const category = theme?.toLowerCase() || '';
        const componentName = item.importName?.toLowerCase() || '';

        if (category === 'all') {
          return item;
        }

        if (
          category === 'others' &&
          componentName.indexOf('filled') === -1 &&
          componentName.indexOf('outlined') === -1
        ) {
          return item;
        }

        if (componentName.indexOf(category) !== -1) {
          return item;
        }
        return false;
      }),
    );
  }, [theme]);

  useEffect(() => {
    setIcons(
      allIcons.filter((item) => {
        if (
          item.importName?.toLowerCase().indexOf(search.toLowerCase()) !== -1
        ) {
          return item;
        }
        return false;
      }),
    );
  }, [search]);

  return (
    <div className="icon-container">
      <RadioGroup
        value={theme}
        onChange={(_, data) => {
          setTheme(data.value);
        }}
      >
        <Radio value="All">All</Radio>
        <Radio value="Filled">Filled</Radio>
        <Radio value="Outlined">Outlined</Radio>
        <Radio value="Others">Others</Radio>
      </RadioGroup>
      <div className="icon-panel">
        <Input
          placeholder="Search icons"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {search ? (
          <div className="icon-container-hint">
            {icons.length} matching results
          </div>
        ) : null}
        <div className="icon-container-content">
          {icons.map((icon) => {
            return (
              <div
                className="icon-item"
                key={icon.importName}
                title={icon.importName}
                onClick={() => {
                  setCurrentIcon(icon);
                  setOpen(true);
                }}
              >
                <icon.Component size="large" />
                <div className="icon-name">{icon.importName}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal
        className="icon-container-modal"
        open={open}
        onClose={() => {
          setOpen(false);
          setCurrentIcon(null);
        }}
      >
        <div className="modal-content">
          <div> {currentIcon?.importName}</div>
          <div>
            import {\`{ \${currentIcon?.importName} }\`} from
            &apos;@bifrostui/icons&apos;;
          </div>
          {currentIcon ? (
            <currentIcon.Component style={{ fontSize: '100px' }} />
          ) : null}
        </div>
      </Modal>
    </div>
  );
};

export default IconDemo;
`},66381:function(c,e){e.Z=`import { isMini } from '@bifrostui/utils';
import React from 'react';
import SvgIcon from '../components/SvgIcon';

export default function createSvgIcon(
  path: React.ReactNode | string,
  displayName: string,
): typeof SvgIcon {
  const Component = (props, ref) => (
    <SvgIcon ref={ref} component={isMini ? 'div' : 'svg'} {...props}>
      {path}
    </SvgIcon>
  );

  Component.displayName = \`\${displayName}Icon\`;

  // @ts-ignore internal component
  return React.memo(React.forwardRef(Component));
}
`}}]);
