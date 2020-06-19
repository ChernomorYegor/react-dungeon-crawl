(this["webpackJsonpreact-dungeon-crawl"]=this["webpackJsonpreact-dungeon-crawl"]||[]).push([[0],{29:function(e,t,a){e.exports=a(41)},34:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=(a(34),a(9)),i=a(43),s={"GAME/START_GAME":Object(i.a)("GAME/START_GAME"),"GAME/MOVE_LEFT":Object(i.a)("GAME/MOVE_LEFT"),"GAME/MOVE_UP":Object(i.a)("GAME/MOVE_UP"),"GAME/MOVE_RIGHT":Object(i.a)("GAME/MOVE_RIGHT"),"GAME/MOVE_DOWN":Object(i.a)("GAME/MOVE_DOWN"),"GAME/CHANGE_OFFSET_X":Object(i.a)("GAME/CHANGE_OFFSET_X"),"GAME/CHANGE_OFFSET_Y":Object(i.a)("GAME/CHANGE_OFFSET_Y"),"GAME/ADD_CERTIFICATE":Object(i.a)("GAME/ADD_CERTIFICATE"),"GAME/START_LEVEL2":Object(i.a)("GAME/START_LEVEL2"),"GAME/ADD_SKILL":Object(i.a)("GAME/ADD_SKILL"),"GAME/REMOVE_BOSS_WALLS":Object(i.a)("GAME/REMOVE_BOSS_WALLS"),"GAME/ADD_POINTS_BOSS":Object(i.a)("GAME/ADD_POINTS_BOSS"),"GAME/QUIT_GAME":Object(i.a)("GAME/QUIT_GAME"),"GAME/END_GAME":Object(i.a)("GAME/END_GAME")},E={"SETTINGS/SHOW_SETTINGS":Object(i.a)("SETTINGS/SHOW_SETTINGS"),"SETTINGS/HIDE_SETTINGS":Object(i.a)("SETTINGS/HIDE_SETTINGS"),"SETTINGS/GET_SETTINGS":Object(i.a)("SETTINGS/GET_SETTINGS"),"SETTINGS/GET_SETTINGS_SUCCESSFULLY":Object(i.a)("SETTINGS/GET_SETTINGS_SUCCESSFULLY"),"SETTINGS/GET_SETTINGS_ERROR":Object(i.a)("SETTINGS/GET_SETTINGS_ERROR"),"SETTINGS/SAVE_SETTINGS":Object(i.a)("SETTINGS/SAVE_SETTINGS"),"SETTINGS/SAVE_SETTINGS_SUCCESSFULLY":Object(i.a)("SETTINGS/SAVE_SETTINGS_SUCCESSFULLY"),"SETTINGS/SAVE_SETTINGS_ERROR":Object(i.a)("SETTINGS/SAVE_SETTINGS_ERROR")},u={"TOP_RESULTS/SHOW_TOP_RESULTS":Object(i.a)("TOP_RESULTS/SHOW_TOP_RESULTS"),"TOP_RESULTS/HIDE_TOP_RESULTS":Object(i.a)("TOP_RESULTS/HIDE_TOP_RESULTS"),"TOP_RESULTS/PLAYER_NAME_CHANGED":Object(i.a)("TOP_RESULTS/PLAYER_NAME_CHANGED"),"TOP_RESULTS/GET_RESULTS":Object(i.a)("TOP_RESULTS/GET_RESULTS"),"TOP_RESULTS/GET_RESULTS_SUCCESSFULLY":Object(i.a)("TOP_RESULTS/GET_RESULTS_SUCCESSFULLY"),"TOP_RESULTS/GET_RESULTS_ERROR":Object(i.a)("TOP_RESULTS/GET_RESULTS_ERROR"),"TOP_RESULTS/SAVE_RESULT":Object(i.a)("TOP_RESULTS/SAVE_RESULT"),"TOP_RESULTS/SAVE_RESULT_SUCCESSFULLY":Object(i.a)("TOP_RESULTS/SAVE_RESULT_SUCCESSFULLY"),"TOP_RESULTS/SAVE_RESULT_ERROR":Object(i.a)("TOP_RESULTS/SAVE_RESULT_ERROR"),"TOP_RESULTS/PLAYER_NAME_ERROR":Object(i.a)("TOP_RESULTS/PLAYER_NAME_ERROR")},S={DIFFICULTY:{easy:20,medium:25,hard:30},CERTIFICATES:25,SKILLS:3,BOSSES:1,NUMBER_OF_RESULTS:10};var m=function(e){var t=e.CERTIFICATES,a=e.BOSSES,n=e.difficulty,c=e.mapWidth,l=e.mapHeight,o=e.viewportWidth,i=e.generateItems,s=e.getRandomNumber,E=e.startGame,u=e.showSettings,S=e.showTopResults;return r.a.createElement("div",{className:"start-container"},r.a.createElement("h1",null,"Dungeon Crawl"),r.a.createElement("div",{className:"start-menu"},r.a.createElement("button",{type:"button",onClick:function(){var e=s(0,o-1),r=function(e){var r=[],o=Math.ceil(c*n/100);console.log(o);for(var E=0;E<l;E++){var u=[];0===E&&(u[e]="player");for(var S=0;S<o;){var m=s(0,c-1);"wall"===u[m]||"player"===u[m]||1===E&&m===e||(u[m]="wall",S++)}for(var p=0;p<c;p++)u[p]||(u[p]="empty");r.push(u)}return function(e,t){var a=Math.floor(l/t),n=0;console.log(a);for(;n<l-1;){var r=s(n+1,n+a-5),o=s(0,c-5);console.log(n);for(var i=1;i<4;i++)e[r][o]="boss-wall",e[r+i][o]="boss-wall",e[r][o+i]="boss-wall",e[r+i][o+3]="boss-wall",e[r+3][o+i]="boss-wall";for(var E=1;E<3;E++)e[r+1][o+E]="boss",e[r+2][o+E]="boss";n+=a}}(r,a),i(r,t,"certificate"),r}(e);console.log(r,e),E({map:r,playerX:e})}},"Start Game"),r.a.createElement("button",{type:"button",onClick:u},"Settings"),r.a.createElement("button",{type:"button",onClick:S},"Top Results")))},p=Object(o.b)((function(e){return{CERTIFICATES:S.CERTIFICATES,BOSSES:S.BOSSES,difficulty:e.settings.difficulty,mapWidth:e.settings.mapWidth,mapHeight:e.settings.mapHeight,viewportWidth:e.settings.viewportWidth}}),(function(e){return{startGame:function(t){var a=t.map,n=t.playerX;return e(s["GAME/START_GAME"]({map:a,playerX:n}))},showSettings:function(){return e(E["SETTINGS/SHOW_SETTINGS"]())},showTopResults:function(){return e(u["TOP_RESULTS/SHOW_TOP_RESULTS"]())}}}))(m),T=a(13);var f=function(e){var t=e.CERTIFICATES,a=e.SKILLS,c=e.gameMap,l=e.currentCertificates,o=e.currentSkills,i=e.isDefeatedBoss,s=e.level,E=e.points,u=e.currentOffsetX,S=e.currentOffsetY,m=e.playerX,p=e.playerY,f=e.difficulty,O=e.mapWidth,d=e.mapHeight,_=e.viewportWidth,g=e.viewportHeight,h=e.playerName,b=e.isPlayerNameError,v=e.moveLeft,R=e.moveUp,L=e.moveRight,G=e.moveDown,w=e.changeOffsetX,A=e.changeOffsetY,y=e.addCertificate,N=e.startLevel2,M=e.addSkill,I=e.removeBossWalls,j=e.addPointsBoss,U=e.quitGame,C=e.endGame,H=e.onPlayerNameChange,P=e.saveResult,k=e.playerNameError,W=e.windowWidth,D=e.windowHeight,F=e.generateItems,Y=Object(n.useState)(""),x=Object(T.a)(Y,2),V=x[0],X=x[1],$=Math.floor(91*W/(100*_)),B=Math.floor(51*D/(100*g)),K=0;function q(e,t,a){if(e>0){X(t);var n=setTimeout((function(){X("")}),a);return function(){return clearTimeout(n)}}}function J(e){if("certificate"===e.replace(/[0-9]/g,"")){if(l===t-1){var n=c.slice();console.log("map",n),F(n,a,"skill"),console.log("map",n),N({map:n})}y(Math.round(Q(10)))}if("skill"===e.replace(/[0-9]/g,"")){if(o===a-1){var r=c.slice();console.log("map",r),r.forEach((function(e,t){return e.forEach((function(e,a){"boss-wall"===e&&(console.log("square-change",e),r[t][a]="empty")}))})),console.log("map",r),I({map:r})}M(Math.round(Q(100)))}"boss"===e&&(j(Math.round(Q(300))),C())}function Q(e){return e*f*(O/100)*(d/100)*(10/_)*(10/g)}function z(){window.confirm("Are you sure you want to quit?")&&U()}function Z(e){e.preventDefault(),h.trim()?(P(),U()):k()}return K=$<B?$:B,Object(n.useEffect)((function(){if(!i){var e=function(e){switch(e.key){case"ArrowLeft":if(console.log("ArrowLeft"),0===m&&"wall"!==c[p][O-1]&&"boss-wall"!==c[p][O-1]){w(O-1-(_-1)),J(c[p][O-1]),v(O-1);break}if(0!==m&&"wall"!==c[p][m-1]&&"boss-wall"!==c[p][m-1]){m<=3+u&&!(m<=3)&&w(u-1),J(c[p][m-1]),v(m-1);break}break;case"ArrowUp":if(console.log("ArrowUp"),0===p)break;if("wall"!==c[p-1][m]&&"boss-wall"!==c[p-1][m]){p<=3+S&&!(p<=3)&&A(S-1),J(c[p-1][m]),R(p-1);break}break;case"ArrowRight":if(console.log("ArrowRight"),m===O-1&&"wall"!==c[p][0]&&"boss-wall"!==c[p][0]){w(0),J(c[p][0]),v(0);break}if(m!==O-1&&"wall"!==c[p][m+1]&&"boss-wall"!==c[p][m+1]){m>=_-1-3+u&&!(m>=O-1-3)&&w(u+1),J(c[p][m+1]),L(m+1);break}break;case"ArrowDown":if(console.log("ArrowDown"),p===c.length-1)break;if("wall"!==c[p+1][m]&&"boss-wall"!==c[p+1][m]){p>=g-1-3+S&&!(p>=d-1-3)&&A(S+1),J(c[p+1][m]),G(p+1);break}break;case"Escape":console.log("Quit Game"),z()}};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}}),[m,p]),Object(n.useEffect)((function(){q(l,"+1 certificate",500)}),[l]),Object(n.useEffect)((function(){q(o,"+1 skill",500)}),[o]),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"top-bar-head"},r.a.createElement("h2",null,"Dungeon Crawl"),r.a.createElement("button",{className:"btn-quit",type:"text",onClick:z},"Quit Game")),r.a.createElement("div",{className:"top-bar"},r.a.createElement("div",{className:"top-bar-stats"},r.a.createElement("div",null,"Level: ",r.a.createElement("span",null,s)),r.a.createElement("div",null,r.a.createElement("p",null,"Certificates: ",r.a.createElement("span",null,l,"/",t)),r.a.createElement("progress",{value:l,max:t})),r.a.createElement("div",null,r.a.createElement("p",null,"Skills: ",r.a.createElement("span",null,o,"/",a)),r.a.createElement("progress",{value:o,max:a})),r.a.createElement("div",null,"Points: ",r.a.createElement("span",null,E))),r.a.createElement("div",{className:"messages"},r.a.createElement("p",null,V),1===s&&r.a.createElement("p",null,"Collect 25 certificates."),2===s&&o<a&&r.a.createElement("p",null,"Collect 3 skills."),2===s&&o===a&&!i&&r.a.createElement("p",null,"Find the boss."))),r.a.createElement("div",{className:"map"},i?r.a.createElement("div",{className:"game-over"},r.a.createElement("p",null,"Congratulations!"),r.a.createElement("p",null,"You left the dungeon!"),r.a.createElement("p",{className:"result"},"Your result: ",E," points."),r.a.createElement("form",{className:"result-form",onSubmit:Z},r.a.createElement("input",{type:"text",placeholder:b?"Cannot Be Empty":"Enter Your Name",value:h,onChange:H}),r.a.createElement("button",{type:"submit",className:"btn-save"},"Save & Exit"))):function(){for(var e=[],t=S;t<S+g;t++){var a=c[t].slice(u,u+_);e.push(a)}return console.log("visibleMap",e),console.log("currentOffsetY",S),console.log("currentOffsetX",u),e.map((function(e,t){return r.a.createElement("div",{className:t+S===0?"row-map first":t+S===d-1?"row-map last":"row-map",key:t+S},e.map((function(e,a){return r.a.createElement("div",{className:"square ".concat(e.replace(/[0-9]/g,"")),key:"".concat(t+S).concat(a+u),style:{width:"".concat(K,"px"),height:"".concat(K,"px")}},"empty"!==e&&r.a.createElement("img",{src:"/react-dungeon-crawl"+"/images/".concat(e,".png"),alt:e.replace(/[0-9]/g,""),style:{width:"".concat(K,"px"),height:"".concat(K,"px")}}))})))}))}()),r.a.createElement("div",{className:"bottom-bar"},r.a.createElement("div",null,r.a.createElement("p",null,"Press 'Arrows' on the keyboard to move."),r.a.createElement("p",null,"Press 'Esc' to quit the game or click the button at the top right."))))},O=Object(o.b)((function(e){return{CERTIFICATES:S.CERTIFICATES,SKILLS:S.SKILLS,gameMap:e.game.map,currentCertificates:e.game.certificates,currentSkills:e.game.skills,isDefeatedBoss:e.game.isDefeatedBoss,level:e.game.level,points:e.game.points,currentOffsetX:e.game.currentOffsetX,currentOffsetY:e.game.currentOffsetY,playerX:e.game.playerX,playerY:e.game.playerY,difficulty:e.settings.difficulty,mapWidth:e.settings.mapWidth,mapHeight:e.settings.mapHeight,viewportWidth:e.settings.viewportWidth,viewportHeight:e.settings.viewportHeight,playerName:e.topResults.playerName,isPlayerNameError:e.topResults.isPlayerNameError}}),(function(e){return{moveLeft:function(t){return e(s["GAME/MOVE_LEFT"](t))},moveUp:function(t){return e(s["GAME/MOVE_UP"](t))},moveRight:function(t){return e(s["GAME/MOVE_RIGHT"](t))},moveDown:function(t){return e(s["GAME/MOVE_DOWN"](t))},changeOffsetX:function(t){return e(s["GAME/CHANGE_OFFSET_X"](t))},changeOffsetY:function(t){return e(s["GAME/CHANGE_OFFSET_Y"](t))},addCertificate:function(t){return e(s["GAME/ADD_CERTIFICATE"](t))},startLevel2:function(t){var a=t.map;return e(s["GAME/START_LEVEL2"]({map:a}))},addSkill:function(t){return e(s["GAME/ADD_SKILL"](t))},removeBossWalls:function(t){var a=t.map;return e(s["GAME/REMOVE_BOSS_WALLS"]({map:a}))},addPointsBoss:function(t){return e(s["GAME/ADD_POINTS_BOSS"](t))},quitGame:function(){return e(s["GAME/QUIT_GAME"]())},endGame:function(){return e(s["GAME/END_GAME"]())},onPlayerNameChange:function(t){return e(u["TOP_RESULTS/PLAYER_NAME_CHANGED"](t))},saveResult:function(){return e(u["TOP_RESULTS/SAVE_RESULT"]())},playerNameError:function(){return e(u["TOP_RESULTS/PLAYER_NAME_ERROR"]())}}}))(f);var d=function(e){var t=e.difficultyOptions,a=e.difficulty,c=e.mapWidth,l=e.mapHeight,o=e.viewportWidth,i=e.viewportHeight,s=e.backToStartMenu,E=e.saveSettings,u=e.viewportWidthMax,S=e.viewportHeightMax,m=Object(n.useState)(a),p=Object(T.a)(m,2),f=p[0],O=p[1],d=Object(n.useState)(c),_=Object(T.a)(d,2),g=_[0],h=_[1],b=Object(n.useState)(l),v=Object(T.a)(b,2),R=v[0],L=v[1],G=Object(n.useState)(o),w=Object(T.a)(G,2),A=w[0],y=w[1],N=Object(n.useState)(i),M=Object(T.a)(N,2),I=M[0],j=M[1];function U(e,t){switch(e){case"Difficulty":O(+t.target.value);break;case"Map Width":h(+t.target.value);break;case"Map Height":L(+t.target.value);break;case"Viewport Width":y(+t.target.value);break;case"Viewport Height":j(+t.target.value)}}return r.a.createElement("div",{className:"settings"},r.a.createElement("div",{className:"top-bar-head"},r.a.createElement("h3",null,"Settings"),r.a.createElement("button",{className:"btn-back",type:"text",onClick:s},"Back")),r.a.createElement("form",{className:"settings-form",onSubmit:function(e){e.preventDefault(),console.log({difficultyLocal:f,mapWidthLocal:g,mapHeightLocal:R,viewportWidthLocal:A,viewportHeightLocal:I}),E({difficultyLocal:f,mapWidthLocal:g,mapHeightLocal:R,viewportWidthLocal:A,viewportHeightLocal:I})}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"difficulty"},"Difficulty:"),r.a.createElement("select",{id:"difficulty",value:f,onChange:U.bind(this,"Difficulty")},r.a.createElement("option",{value:t.easy},"Easy"),r.a.createElement("option",{value:t.medium},"Medium"),r.a.createElement("option",{value:t.hard},"Hard"))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"map-width"},"Map Width ",r.a.createElement("small",null,"(20 - 200)"),":"),r.a.createElement("input",{id:"map-width",type:"number",value:g,min:"20",max:"200",step:"5",onChange:U.bind(this,"Map Width")})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"map-height"},"Map Height ",r.a.createElement("small",null,"(50 - 500)"),":"),r.a.createElement("input",{id:"map-height",type:"number",value:R,min:"50",max:"500",step:"5",onChange:U.bind(this,"Map Height")})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"viewport-width"},"Viewport Width ",r.a.createElement("small",null,"(10 - ",c<=o?c:u,")"),":"),r.a.createElement("input",{id:"viewport-width",type:"number",value:A,min:"10",max:c<=o?c:u,step:"1",onChange:U.bind(this,"Viewport Width")})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"viewport-height"},"Viewport Height ",r.a.createElement("small",null,"(10 - ",S,")"),":"),r.a.createElement("input",{id:"viewport-height",type:"number",value:I,min:"10",max:S,step:"1",onChange:U.bind(this,"Viewport Height")})),r.a.createElement("button",{type:"submit",className:"btn-save"},"Save")))},_=Object(o.b)((function(e){return{difficultyOptions:S.DIFFICULTY,difficulty:e.settings.difficulty,mapWidth:e.settings.mapWidth,mapHeight:e.settings.mapHeight,viewportWidth:e.settings.viewportWidth,viewportHeight:e.settings.viewportHeight}}),(function(e){return{backToStartMenu:function(){return e(E["SETTINGS/HIDE_SETTINGS"]())},saveSettings:function(t){var a=t.difficultyLocal,n=t.mapWidthLocal,r=t.mapHeightLocal,c=t.viewportWidthLocal,l=t.viewportHeightLocal;return e(E["SETTINGS/SAVE_SETTINGS"]({difficultyLocal:a,mapWidthLocal:n,mapHeightLocal:r,viewportWidthLocal:c,viewportHeightLocal:l}))}}}))(d);var g=function(e){var t=e.topResults,a=e.getResults,c=e.backToStartMenu;return Object(n.useEffect)((function(){console.log(a()),a()}),[]),r.a.createElement("div",{className:"top-results"},r.a.createElement("div",{className:"top-bar-head"},r.a.createElement("h3",null,"Top Results"),r.a.createElement("button",{className:"btn-back",type:"text",onClick:c},"Back")),r.a.createElement("div",{className:"top-results-body"},t.length?r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"No."),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Points"))),r.a.createElement("tbody",null,t.map((function(e,t){return console.log(e.name),r.a.createElement("tr",{key:e.id},r.a.createElement("td",{className:"position"},t+1,"."),r.a.createElement("td",{className:"player-name"},e.name),r.a.createElement("td",{className:"points"},e.points))})))):r.a.createElement("p",{className:"no-results"},"There are no results yet.")))},h=Object(o.b)((function(e){return{topResults:e.topResults.topResults}}),(function(e){return{getResults:function(){return e(u["TOP_RESULTS/GET_RESULTS"]())},backToStartMenu:function(){return e(u["TOP_RESULTS/HIDE_TOP_RESULTS"]())}}}))(g);var b=function(e){var t=e.gameOn,a=e.isSettingsShow,c=e.mapWidth,l=e.mapHeight,o=e.isTopResultsShow,i=e.getSettings,s=document.documentElement.clientWidth,E=document.documentElement.clientHeight,u=10*Math.floor(9.1*s/2500),S=10*Math.floor(5.1*E/2500);function m(e,t,a){var n=Math.floor(l/t),r=0,o=0,i=0;for(l%t!==0&&(o=1,i=Math.ceil(l%t)-1),console.log("itemBalance",i),console.log("itemsInterval",n);o<l;){var s=T(o,o+n-1),E=T(0,c-1);console.log("itemVar",o),"empty"!==e[s][E]||0!==E&&E!==c-1&&0!==s&&s!==l-1&&u(s,E-1)&&u(s,E+1)&&u(s-1,E)&&u(s+1,E)||0===s&&0===E&&u(s,E+1)&&u(s+1,E)&&u(s,c-1)||0===s&&E===c-1&&u(s,E-1)&&u(s+1,E)&&u(s,0)||s===l-1&&E===c-1&&u(s,E-1)&&u(s-1,E)&&u(s,0)||s===l-1&&0===E&&u(s,E+1)&&u(s-1,E)&&u(s,c-1)||0===s&&0!==E&&E!==c-1&&u(s,E-1)&&u(s,E+1)&&u(s+1,E)||s===l-1&&0!==E&&E!==c-1&&u(s,E-1)&&u(s,E+1)&&u(s-1,E)||0===E&&0!==s&&s!==l-1&&u(s,E+1)&&u(s+1,E)&&u(s-1,E)||E===c-1&&0!==s&&s!==l-1&&u(s,E-1)&&u(s+1,E)&&u(s-1,E)||(e[s][E]="".concat(a).concat(r),r++,console.log("itemIncrement",r),i>0?(o+=n+1,i--):0===i&&(o+=n))}function u(t,a){return"wall"===e[t][a]||"boss-wall"===e[t][a]}}function T(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}return Object(n.useEffect)((function(){i()}),[]),r.a.createElement("div",{style:{height:E+"px"}},!t&&!a&&!o&&r.a.createElement(p,{generateItems:m,getRandomNumber:T}),t&&r.a.createElement(O,{windowWidth:s,windowHeight:E,generateItems:m}),a&&r.a.createElement(_,{viewportWidthMax:u,viewportHeightMax:S}),o&&r.a.createElement(h,null))},v=Object(o.b)((function(e){return{gameOn:e.game.gameOn,isSettingsShow:e.settings.isSettingsShow,mapWidth:e.settings.mapWidth,mapHeight:e.settings.mapHeight,isTopResultsShow:e.topResults.isTopResultsShow}}),(function(e){return{getSettings:function(){return e(E["SETTINGS/GET_SETTINGS"]())}}}))(b);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R,L,G,w=a(11),A=a(3),y=a(5),N=a.n(y),M=a(42),I={gameOn:!1,map:[],certificates:0,skills:0,isDefeatedBoss:!1,level:0,points:0,currentOffsetX:0,currentOffsetY:0,playerX:0,playerY:0},j=Object(M.a)((R={},Object(A.a)(R,s["GAME/START_GAME"],(function(e,t){return console.log(t.payload),N()(e,{$merge:{gameOn:!0,map:t.payload.map,level:1,playerX:t.payload.playerX}})})),Object(A.a)(R,s["GAME/MOVE_LEFT"],(function(e,t){var a;return N()(e,{map:Object(A.a)({},e.playerY,(a={},Object(A.a)(a,e.playerX,{$set:"empty"}),Object(A.a)(a,t.payload,{$set:"player"}),a)),playerX:{$set:t.payload}})})),Object(A.a)(R,s["GAME/MOVE_UP"],(function(e,t){var a;return N()(e,{map:(a={},Object(A.a)(a,e.playerY,Object(A.a)({},e.playerX,{$set:"empty"})),Object(A.a)(a,t.payload,Object(A.a)({},e.playerX,{$set:"player"})),a),playerY:{$set:t.payload}})})),Object(A.a)(R,s["GAME/MOVE_RIGHT"],(function(e,t){var a;return N()(e,{map:Object(A.a)({},e.playerY,(a={},Object(A.a)(a,e.playerX,{$set:"empty"}),Object(A.a)(a,t.payload,{$set:"player"}),a)),playerX:{$set:t.payload}})})),Object(A.a)(R,s["GAME/MOVE_DOWN"],(function(e,t){var a;return N()(e,{map:(a={},Object(A.a)(a,e.playerY,Object(A.a)({},e.playerX,{$set:"empty"})),Object(A.a)(a,t.payload,Object(A.a)({},e.playerX,{$set:"player"})),a),playerY:{$set:t.payload}})})),Object(A.a)(R,s["GAME/CHANGE_OFFSET_X"],(function(e,t){return N()(e,{$merge:{currentOffsetX:t.payload}})})),Object(A.a)(R,s["GAME/CHANGE_OFFSET_Y"],(function(e,t){return N()(e,{$merge:{currentOffsetY:t.payload}})})),Object(A.a)(R,s["GAME/ADD_CERTIFICATE"],(function(e,t){return N()(e,{$merge:{certificates:e.certificates+1,points:e.points+t.payload}})})),Object(A.a)(R,s["GAME/START_LEVEL2"],(function(e,t){return N()(e,{$merge:{map:t.payload.map,level:2}})})),Object(A.a)(R,s["GAME/ADD_SKILL"],(function(e,t){return N()(e,{$merge:{skills:e.skills+1,points:e.points+t.payload}})})),Object(A.a)(R,s["GAME/REMOVE_BOSS_WALLS"],(function(e,t){return N()(e,{$merge:{map:t.payload.map}})})),Object(A.a)(R,s["GAME/ADD_POINTS_BOSS"],(function(e,t){return N()(e,{$merge:{points:e.points+t.payload}})})),Object(A.a)(R,s["GAME/QUIT_GAME"],(function(e,t){return N()(e,{$merge:{gameOn:I.gameOn,map:I.map,certificates:I.certificates,skills:I.skills,isDefeatedBoss:I.isDefeatedBoss,level:I.level,points:I.points,currentOffsetX:I.currentOffsetX,currentOffsetY:I.currentOffsetY,playerX:I.playerX,playerY:I.playerY}})})),Object(A.a)(R,s["GAME/END_GAME"],(function(e,t){return N()(e,{$merge:{isDefeatedBoss:!0}})})),R),I),U=Object(M.a)((L={},Object(A.a)(L,E["SETTINGS/SHOW_SETTINGS"],(function(e,t){return N()(e,{$merge:{isSettingsShow:!0}})})),Object(A.a)(L,E["SETTINGS/HIDE_SETTINGS"],(function(e,t){return N()(e,{$merge:{isSettingsShow:!1}})})),Object(A.a)(L,E["SETTINGS/GET_SETTINGS_SUCCESSFULLY"],(function(e,t){if(console.log(t.payload),null!==t.payload)return N()(e,{$merge:{difficulty:t.payload.difficultyLocal,mapWidth:t.payload.mapWidthLocal,mapHeight:t.payload.mapHeightLocal,viewportWidth:t.payload.viewportWidthLocal,viewportHeight:t.payload.viewportHeightLocal}})})),Object(A.a)(L,E["SETTINGS/SAVE_SETTINGS_SUCCESSFULLY"],(function(e,t){return N()(e,{$merge:{difficulty:t.payload.difficultyLocal,mapWidth:t.payload.mapWidthLocal,mapHeight:t.payload.mapHeightLocal,viewportWidth:t.payload.viewportWidthLocal,viewportHeight:t.payload.viewportHeightLocal}})})),L),{isSettingsShow:!1,difficulty:20,mapWidth:20,mapHeight:100,viewportWidth:20,viewportHeight:10}),C={isTopResultsShow:!1,playerName:"",isPlayerNameError:!1,topResults:[]},H=Object(M.a)((G={},Object(A.a)(G,u["TOP_RESULTS/SHOW_TOP_RESULTS"],(function(e,t){return N()(e,{$merge:{isTopResultsShow:!0}})})),Object(A.a)(G,u["TOP_RESULTS/HIDE_TOP_RESULTS"],(function(e,t){return N()(e,{$merge:{isTopResultsShow:!1}})})),Object(A.a)(G,u["TOP_RESULTS/PLAYER_NAME_CHANGED"],(function(e,t){return N()(e,{$merge:{playerName:t.payload.target.value,isPlayerNameError:C.isPlayerNameError}})})),Object(A.a)(G,u["TOP_RESULTS/GET_RESULTS_SUCCESSFULLY"],(function(e,t){return N()(e,{$merge:{topResults:t.payload}})})),Object(A.a)(G,u["TOP_RESULTS/SAVE_RESULT_SUCCESSFULLY"],(function(e,t){return N()(e,{$merge:{topResults:t.payload}})})),Object(A.a)(G,u["TOP_RESULTS/PLAYER_NAME_ERROR"],(function(e,t){return N()(e,{$merge:{isPlayerNameError:!0}})})),G),C),P=Object(w.c)({game:j,settings:U,topResults:H}),k=a(27),W=a.n(k),D=a(28),F=a(7),Y=a.n(F),x=a(6),V=a(19),X=a(20),$=new(function(){function e(){Object(V.a)(this,e)}return Object(X.a)(e,[{key:"get",value:function(){var e=window.localStorage.getItem("DUNGEON_CRAWL_SETTINGS_KEY");return JSON.parse(e)}},{key:"save",value:function(e){return window.localStorage.setItem("DUNGEON_CRAWL_SETTINGS_KEY",JSON.stringify(e)),e}}]),e}()),B=Y.a.mark(z),K=Y.a.mark(Z),q=Y.a.mark(ee),J=Y.a.mark(te),Q=Y.a.mark(ae);function z(){var e,t;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(x.b)($.get);case 3:return e=a.sent,a.next=6,Object(x.c)(E["SETTINGS/GET_SETTINGS_SUCCESSFULLY"](e));case 6:a.next=13;break;case 8:return a.prev=8,a.t0=a.catch(0),t=a.t0.message,a.next=13,Object(x.c)(E["SETTINGS/GET_SETTINGS_ERROR"]({message:t}));case 13:case"end":return a.stop()}}),B,null,[[0,8]])}function Z(e){var t,a;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(x.b)($.save,e.payload);case 3:return t=n.sent,n.next=6,Object(x.c)(E["SETTINGS/SAVE_SETTINGS_SUCCESSFULLY"](t));case 6:n.next=13;break;case 8:return n.prev=8,n.t0=n.catch(0),a=n.t0.message,n.next=13,Object(x.c)(E["SETTINGS/SAVE_SETTINGS_ERROR"]({message:a}));case 13:case"end":return n.stop()}}),K,null,[[0,8]])}function ee(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.e)("SETTINGS/GET_SETTINGS",z);case 2:case"end":return e.stop()}}),q)}function te(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.e)("SETTINGS/SAVE_SETTINGS",Z);case 2:case"end":return e.stop()}}),J)}function ae(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)([ee(),te()]);case 2:case"end":return e.stop()}}),Q)}var ne=S.NUMBER_OF_RESULTS,re=new(function(){function e(){Object(V.a)(this,e)}return Object(X.a)(e,[{key:"get",value:function(){var e=window.localStorage.getItem("DUNGEON_CRAWL_TOP_RESULTS_KEY");return e=e?JSON.parse(e):[]}},{key:"save",value:function(e,t,a){if(e){var n=0;e.forEach((function(e){return a<e.points&&n++})),n<ne&&e.splice(n,0,{id:Date.now(),name:t,points:a}),e.length>ne&&e.pop()}else e.push({id:Date.now(),name:t,points:a});return console.log(e),window.localStorage.setItem("DUNGEON_CRAWL_TOP_RESULTS_KEY",JSON.stringify(e)),e}}]),e}()),ce=Y.a.mark(Ee),le=Y.a.mark(ue),oe=Y.a.mark(Se),ie=Y.a.mark(me),se=Y.a.mark(pe);function Ee(){var e,t;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(x.b)(re.get);case 3:return e=a.sent,a.next=6,Object(x.c)(u["TOP_RESULTS/GET_RESULTS_SUCCESSFULLY"](e));case 6:a.next=13;break;case 8:return a.prev=8,a.t0=a.catch(0),t=a.t0.message,a.next=13,Object(x.c)(u["TOP_RESULTS/GET_RESULTS_ERROR"]({message:t}));case 13:case"end":return a.stop()}}),ce,null,[[0,8]])}function ue(){var e,t,a,n,r;return Y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(x.d)((function(e){return e.topResults.topResults}));case 3:return e=c.sent,c.next=6,Object(x.d)((function(e){return e.topResults.playerName}));case 6:return t=c.sent,c.next=9,Object(x.d)((function(e){return e.game.points}));case 9:return a=c.sent,c.next=12,Object(x.b)(re.save,e,t,a);case 12:return n=c.sent,c.next=15,Object(x.c)(u["TOP_RESULTS/SAVE_RESULT_SUCCESSFULLY"](n));case 15:c.next=22;break;case 17:return c.prev=17,c.t0=c.catch(0),r=c.t0.message,c.next=22,Object(x.c)(u["TOP_RESULTS/SAVE_RESULT_ERROR"]({message:r}));case 22:case"end":return c.stop()}}),le,null,[[0,17]])}function Se(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.e)("TOP_RESULTS/GET_RESULTS",Ee);case 2:case"end":return e.stop()}}),oe)}function me(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.e)("TOP_RESULTS/SAVE_RESULT",ue);case 2:case"end":return e.stop()}}),ie)}function pe(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)([Se(),me()]);case 2:case"end":return e.stop()}}),se)}var Te=Object(D.a)(),fe=Object(w.e)(P,Object(w.a)(W.a,Te));Te.run(ae),Te.run(pe),l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:fe},r.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.88c713fd.chunk.js.map