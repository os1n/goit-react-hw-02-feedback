(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=n(7),u=n(1),i=n(2),s=n(4),b=n(3),d=function(e){Object(s.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null," Feedback options "),r.a.createElement("button",{type:"button",onClick:function(t){e.props.onLeaveFeedback("good")}},"Good"),r.a.createElement("button",{type:"button",onClick:function(t){e.props.onLeaveFeedback("bad")}},"Bad"),r.a.createElement("button",{type:"button",onClick:function(t){e.props.onLeaveFeedback("neutral")}},"neutral"))}}]),n}(a.Component),p=function(e){Object(s.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Section Stats"),r.a.createElement("h2",null,this.props.title),r.a.createElement(d,{options:this.props.options,onLeaveFeedback:this.props.onLeaveFeedback}))}}]),n}(a.Component);function m(e){var t=e.good,n=e.bad,a=e.neutral,c=e.total,o=e.positivePercentage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Statistics"),r.a.createElement("h3",null,"Good: ",r.a.createElement("span",null,t)),r.a.createElement("h3",null,"Bad: ",r.a.createElement("span",null,n)),r.a.createElement("h3",null,"Neutral: ",r.a.createElement("span",null,a)),r.a.createElement("h3",null,"Total: ",r.a.createElement("span",null,c)),r.a.createElement("h3",null,"Positive Feedback: ",r.a.createElement("span",null,o,"%")))}var h=n(8),v=n.n(h),E=function(e){Object(s.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(e){return Object.values(e).reduce((function(e,t){return e+t}),0)},e.incrementState=function(t){e.setState((function(e){return Object(l.a)({},t,e[t]+1)}))},e}return Object(i.a)(n,[{key:"countPositiveFeedbackPercentage",value:function(e){return 0!==e.good?(100*+e.good/Object.values(e).reduce((function(e,t){return e+t}),0)).toFixed(2):100}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(this.state),o=this.countPositiveFeedbackPercentage(this.state);return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:v.a.container},r.a.createElement(p,{title:"Please leave feedback!!",options:[t,a,n],onLeaveFeedback:this.incrementState}),"000"!==Object.values(this.state).join("")&&r.a.createElement(m,{good:t,neutral:n,bad:a,total:c,positivePercentage:o})))}}]),n}(a.Component);E.defaultProps={good:0,neutral:0,bad:0},o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))},8:function(e,t,n){},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.99a93f37.chunk.js.map