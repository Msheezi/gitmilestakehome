(this.webpackJsonpgetmiles=this.webpackJsonpgetmiles||[]).push([[0],{26:function(e,r,n){e.exports=n(41)},31:function(e,r,n){},37:function(e,r,n){},41:function(e,r,n){"use strict";n.r(r);var t=n(0),a=n.n(t),o=n(9),c=n.n(o),i=(n(31),n(5)),u=(n(37),n(18)),d=n(19),l=n(25),s=n(24),p=n(1),f=n(2);function g(){var e=Object(p.a)(["\n  grid-area: vertspacer;\n  grid-row-start: 1;\n  grid-row-end: span 8;\n  border-right: 1px solid black;\n  margin: 10px;\n"]);return g=function(){return e},e}function m(){var e=Object(p.a)(["\ngrid-area: spacer;\nheight: 50px;\n\n"]);return m=function(){return e},e}function b(){var e=Object(p.a)(["\n  \n  line-height:20px;\n  width: 20px;\n  position: absolute;\n  top: 2px;\n  right:2px;\n  cursor: pointer;\n  border-radius: 10px;\n  background-color: white;\n"]);return b=function(){return e},e}function v(){var e=Object(p.a)(["\n         line-height: 100px;\n         margin: 20px auto;\n         background-color: ",";\n         grid-area: ",";\n         text-align: center;\n         height: 100px;\n         width:100px;\n         position: relative;\n         \n\n\n       "]);return v=function(){return e},e}function h(){var e=Object(p.a)(["\n    grid-area: ",";\n    grid-row-start: 2;\n    grid-row-end: span 7;\n    text-align: center;\n    border-right: 1px solid black;\n"]);return h=function(){return e},e}function w(){var e=Object(p.a)(["\n   grid-column-start: 3 ;\n   grid-column-end: 8;\n   border-bottom: 1px solid black;\n   margin-bottom: 10px;\n   \n\n"]);return w=function(){return e},e}function x(){var e=Object(p.a)(["\n  text-align: center;\n  grid-area: ",";\n  /* border-bottom: 1px solid black; */\n  margin: 20px auto;\n  /* text-decoration: underline; */\n  \n"]);return x=function(){return e},e}function y(){var e=Object(p.a)(["\n  cursor: pointer;\n  box-sizing: border-box;\n  width: 100px;\n  height: 100px;\n  background-color: ",";\n  text-align: center;\n  line-height: 100px;\n  margin: 20px auto;\n  grid-area: ",";\n\n\n"]);return y=function(){return e},e}function E(){var e=Object(p.a)(['\n         display: grid;\n         width: 80vw;\n         grid-template-columns: minmax(150px,1fr) 0.5fr minmax(150px,1fr) minmax(150px,1fr) minmax(150px,1fr) minmax(150px,1fr) minmax(150px,1fr);\n         /* 150px 50px 150px 150px 150px 150px 150px  */\n          \n         grid-template-rows: auto;\n         /* grid-gap: 20px; */\n         grid-template-areas:\n           "rewardheader vertspacer categoryheader . . . ."\n           ".  . c1header  c2header  c3header  c4header  c5header"\n           ". . . spacer . . ."\n           "r1 . r1c1 r1c2 r1c3 r1c4 r1c5"\n           "r2 . r2c1 r2c2 r2c3 r2c4 r2c5"\n           "r3 . r3c1 r3c2 r3c3 r3c4 r3c5"\n           "r4 . r4c1 r4c2 r4c3 r4c4 r4c5"\n           "r5 . r5c1 r5c2 r5c3 r5c4 r5c5"\n           ". . . resetbutton . . .";\n       ']);return E=function(){return e},e}var k=f.a.div(E()),O=f.a.div(y(),(function(e){return e.color}),(function(e){return e.location})),R=f.a.h2(x(),(function(e){return e.location})),D=f.a.div(w()),S=f.a.div(h(),(function(e){return e.location})),j=f.a.div(v(),(function(e){return e.color}),(function(e){return e.location})),T=f.a.div(b()),A=f.a.div(m()),C=f.a.div(g()),_=[{name:"r1",category:"c1",bgcolor:"#f5e6e8"},{name:"r2",category:"c2",bgcolor:"#a3f7b5"},{name:"r3",category:"c3",bgcolor:"#40c9a2"},{name:"r4",category:"c4",bgcolor:"#2f9c95"},{name:"r5",category:"c5",bgcolor:"#bee3ea"}],L={r1:"#f5e6e8",r2:"#a3f7b5",r3:"#40c9a2",r4:"#2f9c95",r5:"#bee3ea"},U=function(e){Object(l.a)(n,e);var r=Object(s.a)(n);function n(){return Object(u.a)(this,n),r.apply(this,arguments)}return Object(d.a)(n,[{key:"onDragOver",value:function(e){e.preventDefault()}},{key:"onDragStart",value:function(e,r,n){e.dataTransfer.setData("id",r),e.dataTransfer.setData("key",n)}},{key:"onDrop",value:function(e,r){var n=e.dataTransfer.getData("id"),t=e.dataTransfer.getData("key"),a="".concat(n).concat(r),o=this.props.rewards.find((function(e){return e.key===t}));if(o&&o.location!==a)this.props.movingReward(o,r);else if(!o){var c={name:n,location:a,bgcolor:L[n],key:t};this.props.updateReward(c)}}},{key:"deletePlacedReward",value:function(e){this.props.removeReward(e)}},{key:"renderDropZones",value:function(){var e=this;return["c1","c2","c3","c4","c5"].map((function(r){return a.a.createElement(S,{"data-testid":"".concat(r,"Dropzone"),key:r,location:"".concat(r,"header"),className:"rewards1",onDragOver:function(r){return e.onDragOver(r)},onDrop:function(n){return e.onDrop(n,"".concat(r))}},a.a.createElement("span",{className:"category"},r))}))}},{key:"renderRewards",value:function(){var e=this;return _.map((function(r){return a.a.createElement(O,{"data-testid":"rewards".concat(r.name),key:r.name,color:r.bgcolor,location:r.name,draggable:!0,onDragStart:function(n){return e.onDragStart(n,r.name,Date.now())}},r.name)}))}},{key:"renderPlacedRewards",value:function(){var e,r=this;return this.props.rewards.length>0&&(e=this.props.rewards.map((function(e){return a.a.createElement(j,{"data-testid":"reward ".concat(e.location),location:e.location,key:e.key,color:e.bgcolor,draggable:!0,onDragStart:function(n){return r.onDragStart(n,e.name,e.key)}},e.name,a.a.createElement(T,{onClick:function(){return r.deletePlacedReward(e.key)}},"X"))}))),e}},{key:"resetState",value:function(){localStorage.clear(),this.props.clearState()}},{key:"loadFromStorage",value:function(){var e=function(){try{var e=localStorage.getItem("savedState");if(null===e)return;return JSON.parse(e).rewards.present}catch(r){return}}();this.props.restoreFromStorage(e)}},{key:"render",value:function(){var e=this,r=this.renderPlacedRewards(),n=this.renderRewards(),t=this.renderDropZones();return a.a.createElement(k,null,a.a.createElement(A,null),a.a.createElement(R,{style:{borderBottom:"1px solid black"},location:"rewardheader"},"Rewards"),n,a.a.createElement(D,null,a.a.createElement(R,null,"Categories")),t,r,a.a.createElement(C,null),a.a.createElement("div",{style:{gridArea:"resetbutton",paddingTop:"50px"}},a.a.createElement("button",{onClick:function(){return e.resetState()}},"Reset Local Storage"),a.a.createElement("button",{onClick:function(){return e.loadFromStorage()}},"Load From Local Storage"),a.a.createElement("button",{onClick:function(){return function(e){try{var r=JSON.stringify(e);localStorage.setItem("savedState",r)}catch(n){}}(e.props.state)}},"Save State to Storage")))}}]),n}(a.a.Component),P=Object(i.b)((function(e){var r=e.rewards.present,n=Object.keys(r);return{rewards:n.map((function(e){return r[e]})),keys:n,state:e}}),(function(e){return{updateReward:function(r){return e(function(e){return function(e){return{type:"ADD_REWARD",reward:e}}(e)}(r))},removeReward:function(r){return e(function(e){return function(e){return{type:"DELETE_REWARD",key:e}}(e)}(r))},movingReward:function(r,n){return e(function(e,r){return function(e,r){return{type:"UPDATE_REWARD",reward:e,cat:r}}(e,r)}(r,n))},clearState:function(){return e({type:"RESET_STATE"})},restoreFromStorage:function(r){return e(function(e){return function(e){return{type:"RESTORE",state:e}}(e)}(r))}}}))(U),W=n(7),F=n.n(W),J=function(e){var r=e.canUndo,n=e.canRedo,t=e.onUndo,o=e.onRedo;return a.a.createElement("p",null,a.a.createElement("button",{type:"undo",onClick:t,disabled:!r},"Undo"),a.a.createElement("button",{type:"redo",onClick:o,disabled:!n},"Redo"))},N=J=Object(i.b)((function(e){return{canUndo:e.rewards.past.length>0,canRedo:e.rewards.future.length>0}}),(function(e){return{onUndo:function(){return e(W.ActionCreators.undo())},onRedo:function(){return e(W.ActionCreators.redo())}}}))(J);var z=function(){return a.a.createElement("div",null,a.a.createElement(P,null),a.a.createElement(N,null))},I=function(e){var r=e.store;return a.a.createElement(i.a,{store:r},a.a.createElement(z,null))},B=n(3),Z=n(23),M=n.n(Z),X=n(10),q=n(8),G={},H=F()((function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(r),n.type){case"ADD_REWARD":return(e=Object.assign({},r))[n.reward.key]=n.reward,e;case"UPDATE_REWARD":var t=n.reward.key;return(e=Object(q.a)(Object(q.a)(Object(q.a)({},r),r.key),{},Object(X.a)({},t,Object(q.a)({},n.reward))))[t].location="".concat(n.reward.name).concat(n.cat),e;case"DELETE_REWARD":return delete(e=Object.assign({},r))[n.key],e;case"RESTORE":return e=Object.assign({},n.state);case"RESET_STATE":return e=Object.assign({});default:return r}})),K=Object(B.c)({rewards:H}),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(B.d)(K,e,Object(B.a)(M.a))};document.addEventListener("DOMContentLoaded",(function(){var e=Q();window.getState=e.getState;var r=document.getElementById("root");c.a.render(a.a.createElement(I,{store:e}),r)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.41e6d065.chunk.js.map