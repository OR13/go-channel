(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),o=a(8),i=a.n(o),s=(a(14),a(1)),c=a(2),p=a(4),h=a(3),l=a(5),u=(a(16),a(6)),d=a.n(u),b=function t(e){this.current_color=t.BLACK,this.size=e,this.board=this.create_board(e),this.last_move_passed=!1,this.in_atari=!1,this.attempted_suicide=!1};b.EMPTY=0,b.BLACK=1,b.WHITE=2,b.prototype.create_board=function(t){for(var e=[],a=0;a<t;a++){e[a]=[];for(var r=0;r<t;r++)e[a][r]=b.EMPTY}return e},b.prototype.switch_player=function(){this.current_color=this.current_color===b.BLACK?b.WHITE:b.BLACK},b.prototype.pass=function(){this.last_move_passed&&this.end_game(),this.last_move_passed=!0,this.switch_player()},b.prototype.end_game=function(){console.log("GAME OVER")},b.prototype.play=function(t,e){if(console.log("Played at "+t+", "+e),this.attempted_suicide=this.in_atari=!1,this.board[t][e]!==b.EMPTY)return!1;var a=this.board[t][e]=this.current_color,r=[],n=this.get_adjacent_intersections(t,e),o=!1,i=this;return d.a.each(n,function(t){var e=i.board[t[0]][t[1]];if(e!==b.EMPTY&&e!==a){var n=i.get_group(t[0],t[1]);console.log(n),0===n.liberties?r.push(n):1===n.liberties&&(o=!0)}}),d.a.isEmpty(r)&&0===this.get_group(t,e).liberties?(this.board[t][e]=b.EMPTY,this.attempted_suicide=!0,!1):(d.a.each(r,function(t){d.a.each(t.stones,function(t){i.board[t[0]][t[1]]=b.EMPTY})}),o&&(this.in_atari=!0),this.last_move_passed=!1,this.switch_player(),!0)},b.prototype.get_adjacent_intersections=function(t,e){var a=[];return t>0&&a.push([t-1,e]),e<this.size-1&&a.push([t,e+1]),t<this.size-1&&a.push([t+1,e]),e>0&&a.push([t,e-1]),a},b.prototype.get_group=function(t,e){var a=this.board[t][e];if(a===b.EMPTY)return null;for(var r={},n=[],o=[[t,e]],i=0,s=function(t){var e=h.board[t[0]][t[1]];e===b.EMPTY&&i++,e===a&&o.push([t[0],t[1]])};o.length>0;){var c=o.pop();if(!r[c]){var p=this.get_adjacent_intersections(c[0],c[1]),h=this;d.a.each(p,s),r[c]=!0,n.push(c)}}return{liberties:i,stones:n}};var f=b,v=function(t){function e(){var t,a;Object(s.a)(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(p.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(n)))).handleClick=function(){a.props.board.play(a.props.row,a.props.col)&&a.props.onPlay()},a}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t={top:40*this.props.row,left:40*this.props.col},e="intersection";return this.props.color!==f.EMPTY&&(e+=this.props.color===f.BLACK?" black":" white"),n.a.createElement("div",{onClick:this.handleClick,className:e,style:t})}}]),e}(r.Component),m=function(t){function e(){return Object(s.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){for(var t=[],e=0;e<this.props.board.size;e++)for(var a=0;a<this.props.board.size;a++)t.push(n.a.createElement(v,Object.assign({key:"".concat(e,"-").concat(a)},{board:this.props.board,color:this.props.board.board[e][a],row:e,col:a,onPlay:this.props.onPlay})));var r={width:40*this.props.board.size,height:40*this.props.board.size};return n.a.createElement("div",{style:r,id:"board"},t)}}]),e}(r.Component),y=function(t){function e(){return Object(s.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t="";return this.props.board.in_atari?t="ATARI!":this.props.board.attempted_suicide&&(t="SUICIDE!"),n.a.createElement("div",{id:"alerts"},t)}}]),e}(r.Component),_=function(t){function e(){var t,a;Object(s.a)(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(p.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(n)))).handleClick=function(t){a.props.board.pass()},a}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("input",{id:"pass-btn",type:"button",value:"Pass",onClick:this.handleClick})}}]),e}(r.Component),j=function(t){function e(){return Object(s.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"componentWillMount",value:function(){this.setState({board:this.props.board})}},{key:"onBoardUpdate",value:function(){this.setState({board:this.props.board})}},{key:"render",value:function(){return n.a.createElement("div",{className:"ContainerView"},n.a.createElement("div",{className:"ContainerViewBoard"},n.a.createElement(m,{board:this.state.board,onPlay:this.onBoardUpdate.bind(this)})),n.a.createElement("div",{className:"ContainerViewSidebar"},n.a.createElement("a",{href:"https://github.com/OR13/G0"},"Source Code"),n.a.createElement(y,{board:this.state.board}),n.a.createElement(_,{board:this.state.board})))}}]),e}(r.Component),O=new f(19),E=function(t){function e(){return Object(s.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(j,{board:O}))}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,a){t.exports=a(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.b8aa11e7.chunk.js.map