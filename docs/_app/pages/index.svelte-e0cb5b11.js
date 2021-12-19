import{S as Z,i as x,s as $,e as _,t as D,c as v,a as b,g as I,d as m,b as d,f as ee,E as c,h as P,G as le,k as j,j as ne,n as S,m as re,N as ie,o as oe,x as q,u as T,v as ce,w as de,O as he,r as ge}from"../chunks/vendor-70b7faf9.js";function me(a){let s,t,e;return{c(){s=_("div"),t=_("div"),e=D(a[0]),this.h()},l(l){s=v(l,"DIV",{class:!0});var n=b(s);t=v(n,"DIV",{class:!0});var i=b(t);e=I(i,a[0]),i.forEach(m),n.forEach(m),this.h()},h(){d(t,"class","rounded-full font-bold text-gray-500 px-2 "+a[1]()),d(s,"class","flex flex-row")},m(l,n){ee(l,s,n),c(s,t),c(t,e)},p(l,[n]){n&1&&P(e,l[0])},i:le,o:le,d(l){l&&m(s)}}}function pe(a,s,t){let{status:e}=s,l=()=>{switch(e){case"finished":return"bg-green-300";case"watching":return"bg-blue-300";case"planned":return"bg-yellow-300";case"dropped":return"bg-red-300"}};return a.$$set=n=>{"status"in n&&t(0,e=n.status)},[e,l]}class _e extends Z{constructor(s){super();x(this,s,pe,me,$,{status:0})}}function ve(a){let s,t,e,l,n,i,h,r,u,o,f,F,V,A,W,G,z,N,K,J,U,L,Q,y,C,B,X,H,M,E;return r=new _e({props:{status:a[5]}}),{c(){s=_("div"),t=_("div"),e=_("img"),i=j(),h=_("div"),ne(r.$$.fragment),u=j(),o=_("p"),f=D(a[6]),F=j(),V=_("p"),A=D(a[0]),W=D("/"),G=D(a[7]),z=j(),N=_("p"),K=j(),J=_("p"),U=D(a[4]),L=D("/169 pp"),Q=j(),y=_("div"),C=_("h1"),B=D(a[2]),X=j(),H=_("h2"),M=D(a[3]),this.h()},l(g){s=v(g,"DIV",{class:!0});var p=b(s);t=v(p,"DIV",{class:!0});var k=b(t);e=v(k,"IMG",{class:!0,src:!0,alt:!0}),i=S(k),h=v(k,"DIV",{class:!0});var w=b(h);re(r.$$.fragment,w),u=S(w),o=v(w,"P",{class:!0});var se=b(o);f=I(se,a[6]),se.forEach(m),F=S(w),V=v(w,"P",{class:!0});var O=b(V);A=I(O,a[0]),W=I(O,"/"),G=I(O,a[7]),O.forEach(m),z=S(w),N=v(w,"P",{class:!0}),b(N).forEach(m),K=S(w),J=v(w,"P",{class:!0});var Y=b(J);U=I(Y,a[4]),L=I(Y,"/169 pp"),Y.forEach(m),w.forEach(m),k.forEach(m),Q=S(p),y=v(p,"DIV",{class:!0});var R=b(y);C=v(R,"H1",{class:!0});var te=b(C);B=I(te,a[2]),te.forEach(m),X=S(R),H=v(R,"H2",{class:!0});var ae=b(H);M=I(ae,a[3]),ae.forEach(m),R.forEach(m),p.forEach(m),this.h()},h(){d(e,"class","flex justify-center overflow-hidden rounded-xl place-content-center w-32"),ie(e.src,l=a[1])||d(e,"src",l),d(e,"alt",n=a[2]+" image"),d(o,"class","text-gray-600"),d(V,"class","text-gray-600"),d(N,"class","text-gray-600"),d(J,"class","text-gray-600"),d(h,"class","flex flex-col"),d(t,"class","flex flex-row space-x-2"),d(C,"class","text-xl font-bold"),d(H,"class","text-lg font-bold"),d(y,"class","flex flex-col"),d(s,"class","flex flex-col p-2")},m(g,p){ee(g,s,p),c(s,t),c(t,e),c(t,i),c(t,h),oe(r,h,null),c(h,u),c(h,o),c(o,f),c(h,F),c(h,V),c(V,A),c(V,W),c(V,G),c(h,z),c(h,N),c(h,K),c(h,J),c(J,U),c(J,L),c(s,Q),c(s,y),c(y,C),c(C,B),c(y,X),c(y,H),c(H,M),E=!0},p(g,[p]){(!E||p&2&&!ie(e.src,l=g[1]))&&d(e,"src",l),(!E||p&4&&n!==(n=g[2]+" image"))&&d(e,"alt",n);const k={};p&32&&(k.status=g[5]),r.$set(k),(!E||p&64)&&P(f,g[6]),(!E||p&1)&&P(A,g[0]),(!E||p&128)&&P(G,g[7]),(!E||p&16)&&P(U,g[4]),(!E||p&4)&&P(B,g[2]),(!E||p&8)&&P(M,g[3])},i(g){E||(q(r.$$.fragment,g),E=!0)},o(g){T(r.$$.fragment,g),E=!1},d(g){g&&m(s),ce(r)}}}function be(a,s,t){let{image:e,name:l,nameJpn:n,score:i,status:h,type:r,episodes:u,episodesFinished:o}=s;return h=="finished"&&(o=u),a.$$set=f=>{"image"in f&&t(1,e=f.image),"name"in f&&t(2,l=f.name),"nameJpn"in f&&t(3,n=f.nameJpn),"score"in f&&t(4,i=f.score),"status"in f&&t(5,h=f.status),"type"in f&&t(6,r=f.type),"episodes"in f&&t(7,u=f.episodes),"episodesFinished"in f&&t(0,o=f.episodesFinished)},[o,e,l,n,i,h,r,u]}class Ee extends Z{constructor(s){super();x(this,s,be,ve,$,{image:1,name:2,nameJpn:3,score:4,status:5,type:6,episodes:7,episodesFinished:0})}}function fe(a,s,t){const e=a.slice();return e[1]=s[t],e}function ue(a){let s,t;return s=new Ee({props:{image:a[1].thumbnail,name:a[1].title,nameJpn:a[1].titleJPN,score:a[1].scoreUser,status:a[1].status,type:a[1].type,episodes:a[1].episodes,episodesFinished:a[1].episodesFinished}}),{c(){ne(s.$$.fragment)},l(e){re(s.$$.fragment,e)},m(e,l){oe(s,e,l),t=!0},p(e,l){const n={};l&1&&(n.image=e[1].thumbnail),l&1&&(n.name=e[1].title),l&1&&(n.nameJpn=e[1].titleJPN),l&1&&(n.score=e[1].scoreUser),l&1&&(n.status=e[1].status),l&1&&(n.type=e[1].type),l&1&&(n.episodes=e[1].episodes),l&1&&(n.episodesFinished=e[1].episodesFinished),s.$set(n)},i(e){t||(q(s.$$.fragment,e),t=!0)},o(e){T(s.$$.fragment,e),t=!1},d(e){ce(s,e)}}}function we(a){let s,t,e,l,n=a[0],i=[];for(let r=0;r<n.length;r+=1)i[r]=ue(fe(a,n,r));const h=r=>T(i[r],1,1,()=>{i[r]=null});return{c(){s=_("div"),t=_("div"),e=_("div");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){s=v(r,"DIV",{class:!0});var u=b(s);t=v(u,"DIV",{class:!0});var o=b(t);e=v(o,"DIV",{class:!0,id:!0});var f=b(e);for(let F=0;F<i.length;F+=1)i[F].l(f);f.forEach(m),o.forEach(m),u.forEach(m),this.h()},h(){d(e,"class","grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"),d(e,"id","gridWrapper"),d(t,"class","bg-gray-100 dark:bg-gray-800 shadow-2xl lg:container mx-auto p-5 rounded-2xl"),d(s,"class","lg:pl-10 lg:pr-10 pt-10 pb-10")},m(r,u){ee(r,s,u),c(s,t),c(t,e);for(let o=0;o<i.length;o+=1)i[o].m(e,null);l=!0},p(r,[u]){if(u&1){n=r[0];let o;for(o=0;o<n.length;o+=1){const f=fe(r,n,o);i[o]?(i[o].p(f,u),q(i[o],1)):(i[o]=ue(f),i[o].c(),q(i[o],1),i[o].m(e,null))}for(ge(),o=n.length;o<i.length;o+=1)h(o);de()}},i(r){if(!l){for(let u=0;u<n.length;u+=1)q(i[u]);l=!0}},o(r){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)T(i[u]);l=!1},d(r){r&&m(s),he(i,r)}}}const Ve=async({fetch:a})=>{let t=await(await a("animes.json")).json();return console.log("at fetch"),console.log(t.dataArray),{props:{data:t.dataArray}}};function De(a,s,t){let{data:e}=s;return a.$$set=l=>{"data"in l&&t(0,e=l.data)},[e]}class ye extends Z{constructor(s){super();x(this,s,De,we,$,{data:0})}}export{ye as default,Ve as load};
