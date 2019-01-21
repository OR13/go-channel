(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{230:function(e,t,a){e.exports=a(558)},235:function(e,t,a){},252:function(e,t,a){},325:function(e,t){},327:function(e,t){},340:function(e,t){},388:function(e,t){},390:function(e,t){},558:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"playerProfileUpdated",function(){return C}),a.d(n,"chatMessageReceived",function(){return P}),a.d(n,"selfPeerInfo",function(){return x}),a.d(n,"gameInvitationRecieved",function(){return I}),a.d(n,"gameInvitationAccepted",function(){return T});var r,o=a(0),i=a.n(o),c=a(34),s=a.n(c),l=(a(235),a(13)),u=a(16),p=a(18),d=a(17),h=a(19),m=a(80),f=a(206),b=a(15),v=a(43),y=a(137),g=a(36),O=a(81),j=a(208),E=a.n(j),w=a(209),k=a(210),_=a(560),C=Object(_.a)("go/PLAYER_PROFILE_UPDATED",function(e){return{peerId:e.peerId,playerName:e.playerName,playerEmoji:e.playerEmoji}}),P=Object(_.a)("go/CHAT_MESSAGE_RECEIVED",function(e){return{from:e.from,content:e.content,timestamp:e.timestamp}}),x=Object(_.a)("go/SELF_PEER_INFO",function(e){return{peerInfo:e.peerInfo}}),I=Object(_.a)("go/GAME_INVITATION_RECEIVED",function(e){return{from:e.from}}),T=Object(_.a)("go/GAME_INVITATION_ACCEPTED",function(e){return{nonce:e.nonce,players:e.players}}),A=a(27),N=a(228),S=a(559),M=Object(S.a)((r={},Object(A.a)(r,x,function(e,t){var a=t.payload;return Object(b.a)({},e,a)}),Object(A.a)(r,P,function(e,t){var a=t.payload;return Object(b.a)({},e,{messages:Object(N.a)(e.messages).concat([a])})}),Object(A.a)(r,C,function(e,t){var a=t.payload;return Object(b.a)({},e,{players:Object(b.a)({},e.players,Object(A.a)({},a.peerId,Object(b.a)({},a)))})}),Object(A.a)(r,T,function(e,t){var a=t.payload;return Object(b.a)({},e,{game:Object(b.a)({},a)})}),Object(A.a)(r,I,function(e,t){var a=t.payload;return Object(b.a)({},e,{invitation:Object(b.a)({},a)})}),r),{version:0,players:{},invitation:{},game:{},messages:[]}),L=a(105),R=Object(m.connect)(function(e){return{go:e.go,router:e.router}},Object(b.a)({},n)),B=a(3),D=a.n(B),W=a(12),Y=Object(L.b)({navigateTo:function(){return function(){var e=Object(W.a)(D.a.mark(function e(t){var a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t.path,J.push(a);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},sendMessage:function(){return function(){var e=Object(W.a)(D.a.mark(function e(t){var a,n,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.room,n=t.payload,r=JSON.stringify({action:"chat:message:sent",payload:n}),e.next=4,a.broadcast(r);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},updatePlayerProfile:function(){return function(){var e=Object(W.a)(D.a.mark(function e(t){var a,n,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.room,n=t.payload,r=JSON.stringify({action:"lobby:player:profileUpdated",payload:n}),e.next=4,a.broadcast(r);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},saveDTO:function(){return function(){var e=Object(W.a)(D.a.mark(function e(t){var a,n,r,o,i;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.db,n=t.room,r=t.dto,o=t.opponent,e.next=3,a.put(Object(b.a)({_id:"dto:latest"},r));case 3:return i=JSON.stringify({action:"game:dto:saved",payload:{dto:r}}),e.next=6,n.sendTo(o,i);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},deleteDTO:function(){return function(){var e=Object(W.a)(D.a.mark(function e(t){var a,n,r,o,i;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.db,n=t.room,r=t.dto,o=t.opponent,e.next=3,a.del("dto:latest");case 3:return i=JSON.stringify({action:"game:dto:deleted",payload:{dto:r}}),e.next=6,n.sendTo(o,i);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},sendGameInvite:function(e){e.gameInvitationAccepted;return function(){var e=Object(W.a)(D.a.mark(function e(t){var a,n,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t.room,n=t.payload,r=JSON.stringify({action:"game:invite",payload:n}),a.sendTo(n.to,r);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},acceptGameInvite:function(e){var t=e.gameInvitationAccepted;return function(){var e=Object(W.a)(D.a.mark(function e(a){var n,r,o;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=a.room,r=a.payload,o=JSON.stringify({action:"game:invite:accepted",payload:r}),n.sendTo(r.players[1],o),t(r);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}}),G={actions:n,reducer:M,container:Object(L.a)(R,Y)},J=Object(g.a)(),z={go:G.reducer,router:Object(O.connectRouter)(J)},U=a(132),K=a(102),H=(a(252),function(e){var t={key:"root",blacklist:["go"],storage:E.a},a=Object(v.createStore)(Object(y.a)(t,Object(v.combineReducers)(Object(b.a)({},z,e))),Object(w.composeWithDevTools)(Object(v.applyMiddleware)(k.a,Object(O.routerMiddleware)(J))));return{store:a,persistor:Object(y.b)(a),history:J}}()),F=H.store,q=H.persistor,V=H.history,X=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(m.Provider,{store:F},i.a.createElement(f.PersistGate,{persistor:q},i.a.createElement(O.ConnectedRouter,{history:V},i.a.createElement(U.a,null,i.a.createElement(K.a,{exact:!0,path:"/",render:function(){return i.a.createElement(ae,null)}}),i.a.createElement(K.a,{exact:!0,path:"/lobby",render:function(){return i.a.createElement(xe,null)}}),i.a.createElement(K.a,{path:"/game",render:function(){return i.a.createElement(Ee,null)}}),i.a.createElement(K.a,{render:function(){return i.a.createElement("div",null,"Miss")}})))))}}]),t}(o.Component),$=a(35),Q=a.n($),Z=a(212),ee=a.n(Z),te=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"LandingPage"},i.a.createElement(ee.a,{className:"Particles",params:{fps_limit:28,particles:{number:{value:200,density:{enable:!1}},line_linked:{enable:!0,distance:30,opacity:.4},move:{speed:1},opacity:{anim:{enable:!0,opacity_min:.05,speed:2,sync:!1},value:.4}},polygon:{enable:!0,scale:.9,type:"inline",move:{radius:10},url:"./deer.svg",inline:{arrangement:"equidistant"},draw:{enable:!0,stroke:{color:"rgba(255, 255, 255, .2)"}}},retina_detect:!1,interactivity:{events:{onhover:{enable:!0,mode:"bubble"}},modes:{bubble:{size:6,distance:40}}}}}),i.a.createElement(Q.a,{id:"JoinLobby",variant:"contained",color:"primary",onClick:Object(W.a)(D.a.mark(function t(){return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.props.navigateTo({path:"/lobby"});case 1:case"end":return t.stop()}},t,this)}))},"Enter Lobby"))}}]),t}(o.Component),ae=G.container(te),ne=a(227),re=a(46),oe=a.n(re),ie=a(67),ce=a.n(ie),se=new window.Ipfs({repo:"/orbitdb/go",EXPERIMENTAL:{pubsub:!0},config:{Addresses:{Swarm:["/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star"]}}}),le=function(){return window.ipfs?Promise.resolve(window.ipfs):new Promise(function(e,t){se.on("ready",Object(W.a)(D.a.mark(function t(){return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:window.ipfs=se,e(se);case 2:case"end":return t.stop()}},t,this)})))})},ue=a(319),pe=function(){var e=Object(W.a)(D.a.mark(function e(){var t,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.orbitdb){e.next=2;break}return e.abrupt("return",Promise.resolve(window.orbitdb));case 2:return e.next=4,le();case 4:return t=e.sent,void 0,a=new ue(t,"./orbitdb",void 0),window.orbitdb||(window.orbitdb=a),e.abrupt("return",Promise.resolve(window.orbitdb));case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),de=a(48),he=a.n(de),me=[],fe=[],be=function e(t){var a=this,n=t.size,r=t.board,o=t.last_move_passed,i=t.in_atari,c=t.attempted_suicide,s=t.history,u=t.captures,p=t.capturesArrayBlack,d=t.capturesArrayWhite,h=t.moveCount,m=t.moveCountArray,f=t.last_move_undo,v=t.current_color;Object(l.a)(this,e),this.getDataTransferObject=function(){return Object(b.a)({},JSON.parse(JSON.stringify(a)))},this.create_board=function(t){for(var a=[],n=0;n<t;n++){a[n]=[];for(var r=0;r<t;r++)a[n][r]=e.EMPTY}return a},this.reset=function(){this.current_color=e.BLACK,this.board=this.create_board(this.size),this.last_move_passed=!1,this.in_atari=!1,this.attempted_suicide=!1,this.history=[],this.captures=[],this.moveCount=0,this.moveCountArray=[],this.last_move_undo=!1},this.switch_player=function(){this.current_color=this.current_color===e.BLACK?e.WHITE:e.BLACK},this.pass=function(){this.last_move_passed&&this.end_game(),this.last_move_passed=!0,this.switch_player()},this.undo=function(){if(this.history.length){var e=this.history.pop(),t=e.board,a=e.current_color;this.board=t,this.current_color=a}},this.end_game=function(){},this.is_valid_state=function(e){for(var t=JSON.stringify(this.board),a=0;this.moveCountArray[this.moveCountArray.length-1]>this.moveCountArray[this.moveCountArray.length-2]&&this.moveCount>0&&a<e.length;a+=1)if(JSON.stringify(e[a].board)===t)return!1;return!0},this.play=function(t,a){if(me.push(t),fe.push(a),this.moveCount++,this.moveCountArray.push(this.moveCount),this.attempted_suicide=this.in_atari=!1,me[me.length-1]===me[me.length-2]&&fe[fe.length-1]===fe[fe.length-2])return this.moveCount--,!1;if(this.board[t][a]!==e.EMPTY)return!1;var n=this.board[t][a]=this.current_color,r=[],o=this.get_adjacent_intersections(t,a),i=!1,c=this;he.a.each(o,function(t){var a=c.board[t[0]][t[1]];if(a!==e.EMPTY&&a!==n){var o=c.get_group(t[0],t[1]);0===o.liberties?r.push(o):1===o.liberties&&(i=!0)}});var s=0,l=0;if(he.a.isEmpty(r)&&0===this.get_group(t,a).liberties)return this.board[t][a]=e.EMPTY,this.attempted_suicide=!0,!1;he.a.each(r,function(t){he.a.each(t.stones,function(t){c.board[t[0]][t[1]]=e.EMPTY,1===n?s++:2===n&&l++})}),this.capturesArrayBlack.push(s),this.capturesArrayWhite.push(l),i&&(this.in_atari=!0),this.last_move_passed=!1,this.switch_player();var u={current_color:this.current_color,board:he.a.cloneDeep(c.board)};return this.history.push(u),!0},this.get_adjacent_intersections=function(e,t){var a=[];return e>0&&a.push([e-1,t]),t<this.size-1&&a.push([e,t+1]),e<this.size-1&&a.push([e+1,t]),t>0&&a.push([e,t-1]),a},this.get_group=function(t,a){var n=this.board[t][a];if(n===e.EMPTY)return null;for(var r={},o=[],i=[[t,a]],c=0,s=function(t){var a=p.board[t[0]][t[1]];a===e.EMPTY&&c++,a===n&&i.push([t[0],t[1]])};i.length>0;){var l=i.pop();if(!r[l]){var u=this.get_adjacent_intersections(l[0],l[1]),p=this;he.a.each(u,s),r[l]=!0,o.push(l)}}return{liberties:c,stones:o}},n&&(this.size=n,this.board=this.create_board(n)),r&&(this.size=r[0].length,this.board=r),this.current_color=v||e.BLACK,this.last_move_passed=o||!1,this.in_atari=i||!1,this.attempted_suicide=c||!1,this.history=s||[],this.captures=u||[],this.capturesArrayBlack=p||[],this.capturesArrayWhite=d||[],this.moveCount=h||0,this.moveCountArray=m||[],this.last_move_undo=f||!1};be.EMPTY=0,be.BLACK=1,be.WHITE=2;var ve=be,ye=a(181),ge=function(e){return"black"===e?1:2},Oe=function(e,t,a){return e&&e[t]?e[t][a]:""},je=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ready:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=Object(W.a)(D.a.mark(function e(){var t,a,n,r,o,i,c,s,l,u,p,d,h,m=this;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.router,n=t.selfPeerInfo,r=t.playerProfileUpdated,o=a.location.pathname,i=o.replace("/game",""),c=i.split("/")[3],e.next=6,pe();case 6:return s=e.sent,e.next=9,s._ipfs.id();case 9:return l=e.sent,n({peerInfo:l}),u=ye(s._ipfs,c),this.orbitdb=s,this.room=u,this.peerId=l.id,e.next=17,s.open(i);case 17:return this.db=e.sent,e.next=20,this.db.load();case 20:return e.next=22,this.db.get("dto:latest")[0];case 22:if(void 0!==(p=e.sent)){e.next=30;break}return this.board=new ve({size:5}),d=this.board.getDataTransferObject(),e.next=28,this.db.put(Object(b.a)({_id:"dto:latest",name:"dto:latest"},d));case 28:e.next=31;break;case 30:this.board=new ve(p);case 31:u.on("peer joined",function(){var e=Object(W.a)(D.a.mark(function e(t){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),u.on("peer left",function(e){}),u.on("subscribed",function(){}),u.on("message",function(){var e=Object(W.a)(D.a.mark(function e(t){var a,n,o;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=JSON.parse(t.data),n=a.action,o=a.payload,console.log("message...",t,n,o),"lobby:player:profileUpdated"===n&&r(Object(b.a)({},o)),"game:dto:saved"===n&&(m.board=new ve(o.dto),m.setState({board:m.board})),"game:dto:deleted"===n&&(m.board=new ve(o.dto),m.setState({board:m.board}));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),h=setInterval(Object(W.a)(D.a.mark(function e(){var t,a,n,r,o;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=u.getPeers(),a=Object(ne.a)(t,1),(n=a[0])&&(o=[l.id,n].sort(),m.setState({ready:!0,opponent:n,you:l.id,colors:(r={},Object(A.a)(r,o[0],"white"),Object(A.a)(r,o[1],"black"),r)}),clearInterval(h));case 2:case"end":return e.stop()}},e,this)})),1e3);case 36:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.go,n=t.saveDTO,r=t.deleteDTO,o=this.state,c=o.ready,s=o.colors,l=o.you,u=o.opponent;return c?i.a.createElement("div",{className:"GamePage"},i.a.createElement(Tt,null,i.a.createElement(oe.a,{style:{padding:"16px",marginBottom:"16px"}},i.a.createElement(Lt,{room:this.room,peerId:this.peerId})),i.a.createElement(Q.a,{variant:"contained",color:"primary",onClick:Object(W.a)(D.a.mark(function t(){return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({room:e.room,db:e.db,dto:e.board.getDataTransferObject(),opponent:u});case 1:case"end":return t.stop()}},t,this)}))},"Save Game"),"\xa0",i.a.createElement(Q.a,{variant:"contained",color:"primary",onClick:Object(W.a)(D.a.mark(function t(){var a;return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.board=new ve({size:5}),a=e.board.getDataTransferObject(),t.next=4,e.db.put(Object(b.a)({_id:"dto:latest",name:"dto:latest"},a));case 4:e.setState({board:e.board}),r({room:e.room,db:e.db,dto:a,opponent:u});case 6:case"end":return t.stop()}},t,this)}))},"Reset Game"),i.a.createElement("h3",null,"You are ",s[l],","," ",Oe(a.players,u,"playerName")," is"," ",s[u]),i.a.createElement("h3",null,"It is "," ",this.board.current_color===ge(s[l])?"your turn":"".concat(Oe(a.players,u,"playerName"),"'s turn")),i.a.createElement(Te,{currentPlayer:ge(s[l]),board:this.board,onPlay:function(t){e.board=t,e.setState({board:t}),n({room:e.room,db:e.db,dto:e.board.getDataTransferObject(),opponent:u})}}))):i.a.createElement(ce.a,null)}}]),t}(o.Component),Ee=G.container(je),we=a(84),ke=a.n(we),_e=a(181),Ce=function(e,t,a){return e&&e[t]?e[t][a]:t},Pe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={peers:[]},a.handleChange=function(e){return function(t){a.setState(Object(A.a)({},e,t.target.value))}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=Object(W.a)(D.a.mark(function e(){var t,a,n,r,o,i,c,s,l,u=this;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.selfPeerInfo,n=t.playerProfileUpdated,r=t.gameInvitationRecieved,o=t.navigateTo,e.next=3,le();case 3:return i=e.sent,e.next=6,pe();case 6:return c=e.sent,e.next=9,i.id();case 9:s=e.sent,this.peerInfo=s,a({peerInfo:s}),this.roomName="go.lobby",l=_e(i,this.roomName),this.room=l,this.ipfs=i,this.orbitdb=c,l.on("message",function(){var e=Object(W.a)(D.a.mark(function e(t){var a,i,s;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("lobby:player:profileUpdated"===(a=JSON.parse(t.data)).action&&n(Object(b.a)({},a.payload)),"game:invite"===a.action&&r(Object(b.a)({from:t.from},a.payload)),"game:invite:accepted"!==a.action){e.next=9;break}return e.next=6,c.create("go.game.".concat(a.payload.nonce),"docstore",{replicate:!0,overwrite:!0,write:["*"]});case 6:i=e.sent,s=i.address.toString(),o({path:"/game".concat(s)});case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),setInterval(Object(W.a)(D.a.mark(function e(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u.setState({peers:l.getPeers()});case 1:case"end":return e.stop()}},e,this)})),5e3);case 19:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.peers,a=this.props,n=a.go,r=a.sendGameInvite,o=n.players,c=this.room&&this.peerInfo.id,s=this.room&&t.length>0;return i.a.createElement("div",{className:"LobbyPage"},i.a.createElement(Tt,null,i.a.createElement(ke.a,{container:!0,spacing:24},i.a.createElement(ke.a,{item:!0,xs:12},i.a.createElement(oe.a,{style:{padding:"16px"}},!c&&i.a.createElement(ce.a,null),c&&i.a.createElement(Lt,{room:this.room,peerId:this.peerInfo.id}))),i.a.createElement(ke.a,{item:!0,xs:12,md:6},i.a.createElement(oe.a,{style:{padding:"16px"}},!s&&i.a.createElement(ce.a,null),s&&i.a.createElement("div",null,i.a.createElement("h3",null," Ask for a game with: "),t.map(function(t){return i.a.createElement("div",{key:t},i.a.createElement(Q.a,{variant:"contained",color:"primary",onClick:Object(W.a)(D.a.mark(function a(){var n;return D.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:n={to:t},r({room:e.room,payload:n});case 2:case"end":return a.stop()}},a,this)}))},Ce(o,t,"playerEmoji"),"\xa0"," ",Ce(o,t,"playerName")))})))),i.a.createElement(ke.a,{item:!0,xs:12,md:6},i.a.createElement(oe.a,{style:{padding:"16px"}},!s&&i.a.createElement(ce.a,null),s&&i.a.createElement(rt,{room:this.room})))),i.a.createElement(Ke,{room:this.room,orbitdb:this.orbitdb})))}}]),t}(o.Component),xe=G.container(Pe),Ie=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.currentPlayer===a.props.board.current_color?a.props.board.play(a.props.row,a.props.col)&&a.props.onPlay(a.props.board):console.log("not your turn!!!")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={top:40*this.props.row,left:40*this.props.col,backgroundColor:this.props.color!==ve.EMPTY?this.props.color===ve.BLACK?window._PLAYER_ONE_COLOR:window._PLAYER_TWO_COLOR:void 0,backgroundImage:this.props.color!==ve.EMPTY?this.props.color===ve.BLACK?window._PLAYER_ONE_IMAGE:window._PLAYER_TWO_IMAGE:void 0},t="intersection";return this.props.color!==ve.EMPTY&&(t+=this.props.color===ve.BLACK?" black":" white"),i.a.createElement("div",{onClick:this.handleClick,className:t,style:e})}}]),t}(o.Component),Te=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=this.props.board,t=[],a=0;a<e.size;a++)for(var n=0;n<e.size;n++)t.push(i.a.createElement(Ie,Object.assign({key:"".concat(a,"-").concat(n)},{board:e,color:e.board[a][n],row:a,col:n,currentPlayer:this.props.currentPlayer,onPlay:this.props.onPlay})));var r={width:40*e.size,height:40*e.size};return i.a.createElement("div",{style:r,id:"board"},t)}}]),t}(o.Component),Ae=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){a.props.board.pass()},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("input",{id:"pass-btn",type:"button",value:"Pass",onClick:this.handleClick})}}]),t}(o.Component),Ne=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){window.location.reload(!1),a.props.board.reset(),a.props.onReset()},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("input",{id:"newgame-btn",type:"button",value:"New Game",onClick:this.handleClick})}}]),t}(o.Component),Se=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e="black"===this.props.color?this.props.board.capturesArrayBlack:this.props.board.capturesArrayWhite,t="Captures by ".concat(this.props.color,": ")+e.reduce(function(e,t){return e+t},0);return i.a.createElement("div",{id:"alerts"},"\xa0",t,"\xa0")}}]),t}(o.Component),Me=(o.Component,a(213)),Le=a.n(Me),Re=a(217),Be=a.n(Re),De=a(215),We=a.n(De),Ye=a(216),Ge=a.n(Ye),Je=a(214),ze=a.n(Je),Ue=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.go.invitation&&e.go.invitation.from&&!Object.keys(e.go.game).length?this.setState({from:e.go.invitation.from,open:!0}):this.setState({open:!1})}},{key:"render",value:function(){var e,t,a,n=this,r=this.props,o=r.go,c=r.room,s=r.acceptGameInvite,l=r.navigateTo,u=this.state,p=u.from,d=u.open;return i.a.createElement("div",null,i.a.createElement(Le.a,{open:d,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},i.a.createElement(ze.a,{id:"alert-dialog-title"},"Game Invite"),i.a.createElement(We.a,null,i.a.createElement(Ge.a,{id:"alert-dialog-description"},"Invitation from ",(e=o.players,t=p,a="playerName",e&&e[t]?e[t][a]:""),".")),i.a.createElement(Be.a,null,i.a.createElement(Q.a,{onClick:function(){n.setState({open:!1})},color:"primary"},"Reject"),i.a.createElement(Q.a,{onClick:Object(W.a)(D.a.mark(function e(){var t,a,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.random().toString(16),s({room:c,payload:{nonce:t,players:[o.peerInfo.id,o.invitation.from]}}),e.next=4,n.props.orbitdb.create("go.game.".concat(t),"docstore",{replicate:!0,overwrite:!0,write:["*"]});case 4:a=e.sent,r=a.address.toString(),l({path:"/game".concat(r)});case 7:case"end":return e.stop()}},e,this)})),color:"primary",autoFocus:!0},"Accept"))))}}]),t}(i.a.Component),Ke=G.container(Ue),He=a(83),Fe=a.n(He),qe=a(79),Ve=a.n(qe),Xe=a(65),$e=a.n(Xe),Qe=a(82),Ze=a.n(Qe),et=a(54),tt=a.n(et),at=function(e,t,a){return e&&e[t]?e[t][a]:""},nt=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={content:"",messages:[]},a.scrollToBottomOfChat=function(){setTimeout(function(){document.querySelector(".chatContainer")&&(document.querySelector(".chatContainer").scrollTop=document.querySelector(".chatContainer").scrollHeight)},1e3)},a.handleChange=function(e){return function(t){a.setState(Object(A.a)({},e,t.target.value))}},a.sendMessage=function(){a.props.sendMessage({room:a.props.room,payload:{content:a.state.content,timestamp:Math.round((new Date).getTime()/1e3)}}),a.setState({content:""})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.room,a=e.chatMessageReceived;t.on("message",function(){var e=Object(W.a)(D.a.mark(function e(t){var n,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"chat:message:sent"===(n=JSON.parse(t.data)).action&&(r=Object(b.a)({},n.payload,{from:t.from}),a(r));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.props.go,t=e.messages,a=e.players;return i.a.createElement("div",null,i.a.createElement("h3",null,"Chat"),!t.length&&i.a.createElement("h5",null,"No Messages"),i.a.createElement(Ve.a,{className:"chatContainer",style:{maxHeight:"420px",overflowY:"scroll"}},t.map(function(t){var n=at(a,t.from,"playerEmoji"),r=at(e.players,t.from,"playerName");return i.a.createElement($e.a,{key:t.timestamp,alignItems:"flex-start"},n,i.a.createElement(Ze.a,{primary:r,secondary:i.a.createElement(i.a.Fragment,null,i.a.createElement(tt.a,{component:"span",color:"textPrimary"},t.content))}))}),this.scrollToBottomOfChat()),i.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},i.a.createElement(Fe.a,{label:"Message",fullWidth:!0,value:this.state.content,onChange:this.handleChange("content"),margin:"normal"}),i.a.createElement(Q.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.sendMessage},"Send")))}}]),t}(o.Component),rt=G.container(nt),ot=a(222),it=a.n(ot),ct=a(221),st=a.n(ct),lt=a(218),ut=a.n(lt),pt=a(136),dt=a.n(pt),ht=a(135),mt=a.n(ht),ft=a(224),bt=a.n(ft),vt=a(219),yt=a.n(vt),gt=a(220),Ot=a.n(gt),jt=a(134),Et=a.n(jt),wt=a(225),kt=a.n(wt),_t=a(223),Ct=a.n(_t),Pt=a(103),xt=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={mobileOpen:!1},a.handleDrawerToggle=function(){a.setState(function(e){return{mobileOpen:!e.mobileOpen}})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.theme,r=i.a.createElement("div",null,i.a.createElement("div",{className:a.toolbar}),i.a.createElement(ut.a,null),i.a.createElement(Ve.a,null,i.a.createElement($e.a,{button:!0,onClick:function(){e.props.navigateTo({path:"/"})}},i.a.createElement(Et.a,null,i.a.createElement(yt.a,null)),i.a.createElement(Ze.a,{primary:"Home"})),i.a.createElement($e.a,{button:!0,onClick:function(){e.props.navigateTo({path:"/lobby"})}},i.a.createElement(Et.a,null,i.a.createElement(Ot.a,null)),i.a.createElement(Ze.a,{primary:"Lobby"}))));return i.a.createElement("div",{className:a.root},i.a.createElement(st.a,null),i.a.createElement(it.a,{position:"fixed",className:a.appBar},i.a.createElement(Ct.a,null,i.a.createElement(bt.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerToggle,className:a.menuButton},i.a.createElement(kt.a,null)),i.a.createElement(tt.a,{variant:"h6",color:"inherit",noWrap:!0},"G0"))),i.a.createElement("nav",{className:a.drawer},i.a.createElement(mt.a,{smUp:!0,implementation:"css"},i.a.createElement(dt.a,{container:this.props.container,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:this.state.mobileOpen,onClose:this.handleDrawerToggle,classes:{paper:a.drawerPaper}},r)),i.a.createElement(mt.a,{xsDown:!0,implementation:"css"},i.a.createElement(dt.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},r))),i.a.createElement("main",{className:a.content},i.a.createElement("div",{className:a.toolbar}),this.props.children))}}]),t}(i.a.Component),It=Object(Pt.withStyles)(function(e){return{root:{display:"flex"},drawer:Object(A.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(A.a)({marginLeft:240},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),menuButton:Object(A.a)({marginRight:20},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:3*e.spacing.unit}}},{withTheme:!0})(xt),Tt=G.container(It),At=a(226),Nt=a.n(At),St=[{value:"\ud83d\ude00",label:"\ud83d\ude00"},{value:"\ud83d\ude05",label:"\ud83d\ude05"},{value:"\ud83d\ude07",label:"\ud83d\ude07"},{value:"\ud83e\udd14",label:"\ud83e\udd14"},{value:"\ud83d\ude30",label:"\ud83d\ude30"}],Mt=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={playerName:"",playerEmoji:"\ud83d\ude00"},a.handleChange=function(e){return function(t){a.setState(Object(A.a)({},e,t.target.value)),"playerName"!==e&&"playerEmoji"!==e||a.safePlayerProfileUpdate()}},a.sendProfileToPeers=function(){a.props.updatePlayerProfile({room:a.props.room,payload:{peerId:a.props.peerId,playerName:a.state.playerName,playerEmoji:a.state.playerEmoji}})},a.safePlayerProfileUpdate=he.a.debounce(Object(W.a)(D.a.mark(function e(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.sendProfileToPeers();case 1:case"end":return e.stop()}},e,this)})),1e3),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this,t={peerId:this.props.peerId,playerName:this.props.peerId.substring(2,6)+"...",playerEmoji:"\ud83d\ude00"};this.setState(Object(b.a)({},t)),this.safePlayerProfileUpdate(),this.props.room.on("peer joined",function(){var t=Object(W.a)(D.a.mark(function t(a){return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Peer joined the room",a),e.sendProfileToPeers();case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()),this.props.room.on("subscribed",function(){e.sendProfileToPeers()})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"Your Profile"),i.a.createElement(Fe.a,{id:"standard-select-currency",select:!0,label:"Mood",value:this.state.playerEmoji,onChange:this.handleChange("playerEmoji"),margin:"normal"},St.map(function(e){return i.a.createElement(Nt.a,{key:e.value,value:e.value},e.label)})),"\xa0\xa0",i.a.createElement(Fe.a,{label:"Nickname",value:this.state.playerName,onChange:this.handleChange("playerName"),margin:"normal"}))}}]),t}(o.Component),Lt=G.container(Mt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[230,2,1]]]);
//# sourceMappingURL=main.1710af8f.chunk.js.map