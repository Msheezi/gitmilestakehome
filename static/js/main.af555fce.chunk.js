(this.webpackJsonpgetmiles=this.webpackJsonpgetmiles||[]).push([[0],{25:function(e,n,r){e.exports=r(40)},30:function(e,n,r){},36:function(e,n,r){},40:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(8),c=r.n(o),u=(r(30),r(5)),i=(r(36),r(22)),l=r(16),d=r(17),s=r(24),g=r(23),f=r(1),p=r(2);function m(){var e=Object(f.a)(["\ngrid-area: spacer;\nheight: 50px;\n\n"]);return m=function(){return e},e}function v(){var e=Object(f.a)(["\n  line-height:20px;\n  width: 20px;\n  position: absolute;\n  top: 2px;\n  right:2px;\n  cursor: pointer;\n  border-radius: 10px;\n  background-color: white;\n"]);return v=function(){return e},e}function h(){var e=Object(f.a)(["\n         line-height: 100px;\n         margin: 20px;\n         background-color: ",";\n         grid-area: ",";\n         text-align: center;\n         height: 100px;\n         width:100px;\n         position: relative;\n\n       "]);return h=function(){return e},e}function b(){var e=Object(f.a)(["\n    grid-area: ",";\n    grid-row-start: 2;\n    grid-row-end: span 7;\n    text-align: center;\n    \n"]);return b=function(){return e},e}function D(){var e=Object(f.a)(["\n   grid-column-start: 3 ;\n   grid-column-end: 7;\n\n"]);return D=function(){return e},e}function y(){var e=Object(f.a)(["\n  text-align: center;\n  grid-area: ",";\n"]);return y=function(){return e},e}function w(){var e=Object(f.a)(["\n  cursor: pointer;\n  box-sizing: border-box;\n  width: 100px;\n  height: 100px;\n  background-color: ",";\n  text-align: center;\n  line-height: 100px;\n  margin: 20px;\n  grid-area: ",";\n"]);return w=function(){return e},e}function E(){var e=Object(f.a)(['\n         display: grid;\n         width: 80vw;\n         grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n         grid-template-rows: auto;\n         /* grid-gap: 20px; */\n         grid-template-areas:\n           "rewardheader . categoryheader . . . ."\n           ".  . c1header  c2header  c3header  c4header  c5header"\n           ". . . spacer . . ."\n           "r1 . r1c1 r1c2 r1c3 r1c4 r1c5"\n           "r2 . r2c1 r2c2 r2c3 r2c4 r2c5"\n           "r3 . r3c1 r3c2 r3c3 r3c4 r3c5"\n           "r4 . r4c1 r4c2 r4c3 r4c4 r4c5"\n           "r5 . r5c1 r5c2 r5c3 r5c4 r5c5";\n       ']);return E=function(){return e},e}var O=p.a.div(E()),k=p.a.div(w(),(function(e){return e.color}),(function(e){return e.location})),R=p.a.h2(y(),(function(e){return e.location})),x=p.a.div(D()),j=p.a.div(b(),(function(e){return e.location})),S=p.a.div(h(),(function(e){return e.color}),(function(e){return e.location})),C=p.a.div(v()),A=p.a.div(m()),N=[{name:"r1",category:"c1",bgcolor:"green"},{name:"r2",category:"c2",bgcolor:"yellow"},{name:"r3",category:"c3",bgcolor:"pink"},{name:"r4",category:"c4",bgcolor:"skyblue"},{name:"r5",category:"c5",bgcolor:"orange"}],T={r1:"green",r2:"yellow",r3:"pink",r4:"skyblue",r5:"orange"},U=function(e){Object(s.a)(r,e);var n=Object(g.a)(r);function r(){return Object(l.a)(this,r),n.apply(this,arguments)}return Object(d.a)(r,[{key:"onDragOver",value:function(e){e.preventDefault()}},{key:"onDragStart",value:function(e,n,r){console.log("dragstart:",n,"key:",r),e.dataTransfer.setData("id",n),e.dataTransfer.setData("key",r)}},{key:"onDrop",value:function(e,n){var r=e.dataTransfer.getData("id"),t=e.dataTransfer.getData("key"),a=Object(i.a)(this.props.rewards),o=a.find((function(e){return e.key===t}));if(o)this.props.movingReward(o,n);else if(!o){var c={name:r,location:"".concat(r).concat(n),bgcolor:T[r],key:t};a.push(c),this.props.updateReward(c)}}},{key:"deletePlacedReward",value:function(e){this.props.removeReward(e)}},{key:"render",value:function(){var e,n=this,r=N.map((function(e){return a.a.createElement(k,{key:e.name,color:e.bgcolor,location:e.name,draggable:!0,onDragStart:function(r){return n.onDragStart(r,e.name,Date.now())}},e.name)}));return this.props.rewards.length>0&&(e=this.props.rewards.map((function(e){return a.a.createElement(S,{location:e.location,key:e.key,color:e.bgcolor,draggable:!0,onDragStart:function(r){return n.onDragStart(r,e.name,e.key)}},e.name,a.a.createElement(C,{onClick:function(){return n.deletePlacedReward(e.key)}},"X"))}))),a.a.createElement(O,null,a.a.createElement(A,null),a.a.createElement(R,{location:"rewardheader"},"Rewards"),r,a.a.createElement(x,null,a.a.createElement(R,null,"Categories")),a.a.createElement(j,{location:"c1header",className:"rewards1",onDragOver:function(e){return n.onDragOver(e)},onDrop:function(e){return n.onDrop(e,"c1")}},a.a.createElement("span",{className:"category"},"C1")),a.a.createElement(j,{location:"c2header",className:"rewards1",onDragOver:function(e){return n.onDragOver(e)},onDrop:function(e){return n.onDrop(e,"c2")}},a.a.createElement("span",{className:"category"},"C2")),a.a.createElement(j,{location:"c3header",className:"rewards1",onDragOver:function(e){return n.onDragOver(e)},onDrop:function(e){return n.onDrop(e,"c3")}},a.a.createElement("span",{className:"category"},"C3")),a.a.createElement(j,{location:"c4header",className:"rewards1",onDragOver:function(e){return n.onDragOver(e)},onDrop:function(e){return n.onDrop(e,"c4")}},a.a.createElement("span",{className:"category"},"C4")),a.a.createElement(j,{location:"c5header",className:"rewards1",onDragOver:function(e){return n.onDragOver(e)},onDrop:function(e){return n.onDrop(e,"c5")}},a.a.createElement("span",{className:"category"},"C5")),e)}}]),r}(a.a.Component),W=Object(u.b)((function(e){return{rewards:Object.values(e.rewards.present)}}),(function(e){return{updateReward:function(n){return e(function(e){return function(e){return{type:"ADD_REWARD",reward:e}}(e)}(n))},removeReward:function(n){return e(function(e){return function(e){return{type:"DELETE_REWARD",key:e}}(e)}(n))},movingReward:function(n,r){return e(function(e,n){return function(e,n){return{type:"UPDATE_REWARD",reward:e,cat:n}}(e,n)}(n,r))}}}))(U),_=r(7),J=r.n(_),L=function(e){var n=e.canUndo,r=e.canRedo,t=e.onUndo,o=e.onRedo;return a.a.createElement("p",null,a.a.createElement("button",{onClick:t,disabled:!n},"Undo"),a.a.createElement("button",{onClick:o,disabled:!r},"Redo"))},P=L=Object(u.b)((function(e){return{canUndo:e.rewards.past.length>0,canRedo:e.rewards.future.length>0}}),(function(e){return{onUndo:function(){return e(_.ActionCreators.undo())},onRedo:function(){return e(_.ActionCreators.redo())}}}))(L);var I=function(){return a.a.createElement("div",null,a.a.createElement(W,null),a.a.createElement(P,null))},z=function(e){var n=e.store;return a.a.createElement(u.a,{store:n},a.a.createElement(I,null))},B=r(3),M=r(21),X=r.n(M),q=[],F=J()((function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,r=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(n),r.type){case"ADD_REWARD":return e=n.concat([r.reward]);case"UPDATE_REWARD":var t=r.reward,a=t.name,o=t.bgcolor,c=t.key;return(e=n.filter((function(e){return e.key!==c}))).push({name:a,key:c,location:"".concat(a).concat(r.cat),bgcolor:o}),e;case"DELETE_REWARD":return e=n.filter((function(e){return e.key!==r.key}));default:return n}})),G=Object(B.c)({rewards:F}),H=function(){var e=function(){try{var e=localStorage.getItem("savedState");if(null===e)return;return JSON.parse(e)}catch(n){return}}();return Object(B.d)(G,e,Object(B.a)(X.a))};document.addEventListener("DOMContentLoaded",(function(){var e=H();e.subscribe((function(){!function(e){try{console.log(e);var n=JSON.stringify(e);localStorage.setItem("savedState",n)}catch(r){}}(e.getState())})),window.getState=e.getState;var n=document.getElementById("root");c.a.render(a.a.createElement(z,{store:e}),n)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.af555fce.chunk.js.map