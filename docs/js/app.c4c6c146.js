(function(){"use strict";var e={1404:function(e,n,t){var o=t(9242),s=t(3396);function i(e,n,t,o,i,a){const r=(0,s.up)("Header"),l=(0,s.up)("Main"),c=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(r),(0,s.Wm)(l),(0,s.Wm)(c)],64)}const a=(0,s._)("div",{id:"header"},[(0,s._)("span",null," Hashin2425 Portfolio ")],-1),r=(0,s._)("div",{id:"header-size"},null,-1);function l(e,n,t,o,i,l){return(0,s.wg)(),(0,s.iD)(s.HY,null,[a,r],64)}var c={name:"Header-section"},u=t(89);const d=(0,u.Z)(c,[["render",l]]);var h=d;const p={id:"main"},m=(0,s._)("h1",null,"About",-1),v=(0,s._)("h1",null,"Skills",-1),g=(0,s._)("h1",null,"Projects",-1);function w(e,n,t,o,i,a){const r=(0,s.up)("About"),l=(0,s.up)("SkillCard"),c=(0,s.up)("CreativeCard");return(0,s.wg)(),(0,s.iD)("div",p,[m,(0,s.Wm)(r,{sns:i.sns},null,8,["sns"]),v,(0,s.Wm)(l,{skills:i.skills},null,8,["skills"]),g,(0,s.Wm)(c,{projects:i.projects},null,8,["projects"])])}var f=t(7139);const y=e=>((0,s.dD)("data-v-5add5cfe"),e=e(),(0,s.Cn)(),e),_={class:"search"},b=y((()=>(0,s._)("span",null,"絞り込み：",-1))),k=["onClick"],D=["onClick"],C={key:0,class:"project-card shadow-box"},j={class:"image-box"},H=["src"],z=["src"],P={class:"table-box"},T={colspan:"2"},A={class:"project-name"},L=y((()=>(0,s._)("th",null,"期間",-1))),x=y((()=>(0,s._)("th",null,"開発体制",-1))),I=y((()=>(0,s._)("th",null,"開発言語・技術",-1))),q=y((()=>(0,s._)("th",null,"GitHubリポジトリ",-1))),S=["href"],O=y((()=>(0,s._)("th",null,"きっかけ",-1))),M=y((()=>(0,s._)("th",null,"アピールポイント",-1)));function G(e,n,t,o,i,a){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",_,[b,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.uniqueTechnologies,(e=>((0,s.wg)(),(0,s.iD)("span",{key:e},[i.selectedTechnologies.includes(e)?((0,s.wg)(),(0,s.iD)("span",{key:0,class:"search-tech technology-selected shadow-box",onClick:n=>a.selectTechnology(e,!0)},(0,f.zw)(e),9,k)):(0,s.kq)("",!0),i.selectedTechnologies.includes(e)?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",{key:1,class:"search-tech technology-not-selected shadow-box",onClick:n=>a.selectTechnology(e,!1)},(0,f.zw)(e),9,D))])))),128))]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.projects,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.name},[a.hasCommonItem(i.selectedTechnologies,e.technologies)||0===i.selectedTechnologies.length?((0,s.wg)(),(0,s.iD)("div",C,[(0,s._)("div",j,[e.image?((0,s.wg)(),(0,s.iD)("img",{key:0,src:e.image,alt:"画像"},null,8,H)):(0,s.kq)("",!0),e.image?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("img",{key:1,src:i.iconDocument,alt:"画像"},null,8,z))]),(0,s._)("div",P,[(0,s._)("table",null,[(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("td",T,[(0,s._)("div",A,(0,f.zw)(e.name),1),(0,s._)("div",null,(0,f.zw)(e.about),1)])])]),(0,s._)("tbody",null,[(0,s._)("tr",null,[L,(0,s._)("td",null,(0,f.zw)(e.period),1)]),(0,s._)("tr",null,[x,(0,s._)("td",null,(0,f.zw)(e.team),1)]),(0,s._)("tr",null,[I,(0,s._)("td",null,[(0,s._)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.technologies,(e=>((0,s.wg)(),(0,s.iD)("span",{class:"project-technologies",key:e},(0,f.zw)(e),1)))),128))]),(0,s._)("div",null,(0,f.zw)(e.description),1)])]),(0,s._)("tr",null,[q,(0,s._)("td",null,[(0,s._)("a",{href:e.codeLink,target:"_blank"},(0,f.zw)(e.codeLink),9,S)])]),(0,s._)("tr",null,[O,(0,s._)("td",null,(0,f.zw)(e.whyDid),1)]),(0,s._)("tr",null,[M,(0,s._)("td",null,(0,f.zw)(e.appealPoint),1)])])])])])):(0,s.kq)("",!0)])))),128))],64)}t(7658);var W=t.p+"img/document.ea0db39d.png",Y={props:{projects:{type:Object,required:!0}},data(){return{iconDocument:W,selectedTechnologies:[]}},computed:{uniqueTechnologies(){const e=this.projects.reduce(((e,n)=>e.concat(n.technologies)),[]);return[...new Set(e)].sort()}},methods:{selectTechnology:function(e,n){if(n){const n=this.selectedTechnologies.indexOf(e);n>-1&&this.selectedTechnologies.splice(n,1)}else this.selectedTechnologies.push(e)},hasCommonItem:function(e,n){const t=new Set(e);for(let o of n)if(t.has(o))return!0;return!1}}};const Z=(0,u.Z)(Y,[["render",G],["__scopeId","data-v-5add5cfe"]]);var F=Z;const K=e=>((0,s.dD)("data-v-c0e19e04"),e=e(),(0,s.Cn)(),e),N={class:"skill-card shadow-box"},U=K((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("td",{class:"nowrap-this"}),(0,s._)("td",{class:"nowrap-this"},"技術"),(0,s._)("td",{class:"nowrap-this"},"開発歴"),(0,s._)("td",{class:"nowrap-this"},"レベル"),(0,s._)("td",{class:"nowrap-this"},"概要")])],-1))),V=["rowspan"],E={class:"nowrap-this",style:{"background-color":"rgb(235, 235, 235)"}},Q={class:"nowrap-this"},B={class:"nowrap-this"};function J(e,n,t,o,i,a){const r=(0,s.up)("LvIcon");return(0,s.wg)(),(0,s.iD)("div",N,[(0,s._)("table",null,[U,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.skills,(e=>((0,s.wg)(),(0,s.iD)("tbody",{key:e.name},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.contents,((n,t)=>((0,s.wg)(),(0,s.iD)("tr",{key:n.name},[0===t?((0,s.wg)(),(0,s.iD)("th",{key:0,class:"nowrap-this",rowspan:e.contents.length},(0,f.zw)(e.section),9,V)):(0,s.kq)("",!0),(0,s._)("td",E,(0,f.zw)(n.name),1),(0,s._)("td",Q,(0,f.zw)(n.years)+"年目",1),(0,s._)("td",B,[(0,s.Wm)(r,{level:n.level},null,8,["level"])]),(0,s._)("td",null,(0,f.zw)(n.message),1)])))),128))])))),128))])])}const R={class:"lv-icon-container"},X={key:0,class:"description"};function $(e,n,t,o,i,a){return(0,s.wg)(),(0,s.iD)("div",R,[(0,s._)("span",{class:(0,f.C_)(["lv","level-"+t.level]),onMouseover:n[0]||(n[0]=e=>i.showDescription=!0),onMouseleave:n[1]||(n[1]=e=>i.showDescription=!1)},"Lv."+(0,f.zw)(t.level),35),i.showDescription?((0,s.wg)(),(0,s.iD)("div",X,(0,f.zw)(i.descriptions[t.level]),1)):(0,s.kq)("",!0)])}var ee={name:"LvIcon",props:{level:{type:Number,required:!0}},data(){return{descriptions:{0:"少し触ったことのある程度",1:"勉強中であり、まだ上手く扱えない",2:"調べたりAIを使ったりすることで、任意の処理やタスクを遂行できる",3:"その言語やツールの特性を理解し、適切な方法で活用できる",4:"その言語やツールから派生して、フレームワークやライブラリを作れる"},showDescription:!1}}};const ne=(0,u.Z)(ee,[["render",$],["__scopeId","data-v-60529772"]]);var te=ne,oe={name:"SkillCard",components:{LvIcon:te},props:{skills:{type:Object,required:!0}}};const se=(0,u.Z)(oe,[["render",J],["__scopeId","data-v-c0e19e04"]]);var ie=se;const ae=e=>((0,s.dD)("data-v-3002908f"),e=e(),(0,s.Cn)(),e),re={key:0},le=ae((()=>(0,s._)("p",null,"趣味や大学のプロジェクトで色々な開発を行っております。",-1))),ce=["href"];function ue(e,n,t,o,i,a){return(0,s.wg)(),(0,s.iD)("div",{id:"about-div",onMouseover:n[0]||(n[0]=e=>i.isAboutBoxHover=!0),onMouseleave:n[1]||(n[1]=e=>i.isAboutBoxHover=!1)},[((0,s.wg)(),(0,s.iD)("p",re," 学部 "+(0,f.zw)(i.myGrade)+" 年生のHashin2425です。 ",1)),(0,s.kq)("",!0),le,(0,s._)("p",null,[(0,s.Uk)("リンク："),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.sns,(e=>((0,s.wg)(),(0,s.iD)("a",{key:e.name,href:e.url,target:"_blank",rel:"noopener noreferrer"},"> "+(0,f.zw)(e.name),9,ce)))),128))])],32)}var de={name:"About-section",props:{sns:{type:Array,required:!0}},data(){return{myGrade:Math.floor((new Date-new Date(2023,4,1))/31536e6)+1,isAboutBoxHover:!1}}};const he=(0,u.Z)(de,[["render",ue],["__scopeId","data-v-3002908f"]]);var pe=he;function me(e,n){return Math.floor((new Date-new Date(e,n,1))/31536e6)}var ve={name:"Main-section",components:{CreativeCard:F,SkillCard:ie,About:pe},data(){return{sns:[{name:"Twitter",url:"https://twitter.com/HashIn2425"},{name:"GitHub",url:"https://github.com/hashin2425"},{name:"Qiita",url:"https://qiita.com/hashin2425"},{name:"AtCoder",url:"https://atcoder.jp/users/HashIn2425"}],projects:[{name:"ポートフォリオサイト(このサイト)",period:"2023年10月",team:"個人開発",about:"ポートフォリオサイトをVue.jsによって作成しました。",description:"GitHub Pagesを用いることによって静的Webサイトを公開しています。Vue.jsファイルからビルドする作業はローカルで行わず、GitHub Actionsを用いて、自動的に行うように設定しています。具体的には、リポジトリのmainブランチにコードがプルされたときに自動的にビルドが開始し、GitHub Pagesへのデプロイまでを行うように設定しています。",technologies:["Vue.js","GitHub Actions"],codeLink:"https://github.com/hashin2425/hashin2425",appealPoint:"               ",whyDid:"GitHub ActionsによるCI/CDを勉強したかったので"},{name:"ゲーム「競え！初夏の夢祭り」",period:"2023年8月から10月",team:"デザイナ・サウンドクリエイタを含む8名チームで、私はプログラマとして参加しました。",about:"夏祭りの気分を味わえるゲーム「競え！初夏の夢祭り」の作成に参加しました。",description:"               ",technologies:["Unity","C#"],codeLink:"https://github.com/hashin2425/CGP_team_2023_c",appealPoint:"               ",whyDid:"               "},{name:"学生食堂の混雑度状況がわかるアプリ",period:"2023年5月から(継続)",team:"エンジニア2名チームで、私はバックエンド・フロントエンドでの開発に取り組みました。",about:"                 ",description:"               ",technologies:["Python","JavaScript","MySQL","Node.js","Express.js","Redis","Docker","サーバー構築","FastAPI","Linux"],codeLink:"https://github.com/hashin2425/dockerWebAppTemperate",appealPoint:"               ",whyDid:"               "},{name:"ソーラーカー監視ソフトウェア",period:"2023年4月から6月",team:"個人開発",about:"ソーラーカーに搭載されたセンサー類を監視するためのGUIアプリケーション",description:"               ",technologies:["Python","eel-Python","Chart.js"],codeLink:"https://github.com/hashin2425/SolarCarSensorMonitor",appealPoint:"               ",whyDid:"               "},{name:"LazyRename",period:"               ",team:"               ",about:"一括でファイル名を変更するためのWindows向けソフトウェア",description:"               ",technologies:["C#",".NET Framework"],codeLink:"https://github.com/hashin2425/LazyRename",appealPoint:"               ",whyDid:"               "},{name:"ロボカップ得点計算ソフト",period:"               ",team:"個人開発",about:"ロボカップレスキューの得点を計算するためのオフライン用アプリ",description:"               ",technologies:["JavaScript"],codeLink:"https://github.com/hashin2425/robocup_calc",appealPoint:"               ",whyDid:"               "}],skills:[{section:"プログラミング言語",contents:[{name:"Python",years:me(2021,9),level:3,message:"もっとも頻繁に使っている言語だと思います。簡単な処理やアプリ開発、競技プログラミング(AtCoder)など、さまざまな場面で利用しています。"},{name:"JavaScript",years:me(2020,5),level:2,message:"Node.jsによるバックエンドやブラウザの拡張機能を開発するときに利用しています。"},{name:"C#",years:me(2020,1),level:2,message:"Unityでのゲーム開発や.NET Framework開発などに利用しています。"}]},{section:"フレームワークなど",contents:[{name:"Node.js",years:me(2023,6),level:1,message:""},{name:"Vue.js",years:me(2023,6),level:2,message:"このページもVue.jsで作成しています。"},{name:"Scikit-learn",years:me(2022,1),level:2,message:""}]},{section:"開発環境",contents:[{name:"Unity",years:me(2021,1),level:2,message:""}]},{section:"コンテナ技術",contents:[{name:"Docker",years:me(2023,7),level:1,message:""}]},{section:"データベース",contents:[{name:"MySQL",years:me(2023,7),level:1,message:""},{name:"SQLite3",years:me(2021,9),level:2,message:""}]},{section:"オペレーションシステム",contents:[{name:"Windows",years:me(2014,8),level:3,message:"XPの頃から、ほぼ毎日使っています。"},{name:"Debian/Linux",years:me(2021,9),level:2,message:""}]},{section:"マイコン",contents:[{name:"Arduino",years:me(2021,6),level:2,message:""}]},{section:"CI/CD",contents:[{name:"GitHub Actions",years:me(2023,9),level:1,message:"Webフロントエンドでのビルド・テストを自動化するために勉強しています。"}]}]}}};const ge=(0,u.Z)(ve,[["render",w]]);var we=ge;const fe={id:"footer"},ye=(0,s._)("div",null,"Thank you for visiting.",-1),_e=(0,s._)("div",null," Copyright Hashin2425 ",-1),be=[ye,_e];function ke(e,n,t,o,i,a){return(0,s.wg)(),(0,s.iD)("div",fe,be)}var De={name:"Footer-section"};const Ce=(0,u.Z)(De,[["render",ke]]);var je=Ce,He={name:"App",components:{Header:h,Main:we,Footer:je}};const ze=(0,u.Z)(He,[["render",i]]);var Pe=ze;(0,o.ri)(Pe).mount("#app")}},n={};function t(o){var s=n[o];if(void 0!==s)return s.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,s,i){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],i=e[u][2];for(var r=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(r=!1,i<a&&(a=i));if(r){e.splice(u--,1);var c=s();void 0!==c&&(n=c)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,s,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p=""}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var s,i,a=o[0],r=o[1],l=o[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(s in r)t.o(r,s)&&(t.m[s]=r[s]);if(l)var u=l(t)}for(n&&n(o);c<a.length;c++)i=a[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(1404)}));o=t.O(o)})();
//# sourceMappingURL=app.c4c6c146.js.map