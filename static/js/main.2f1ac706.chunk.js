(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),r=a.n(l),o=a(3),u=a(4),i=a(5),s=a(8),d=a(7);function b(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",onClick:function(t){e.onLeaveFeedback("good")}},"Good"),c.a.createElement("button",{type:"button",onClick:function(t){e.onLeaveFeedback("bad")}},"Bad"),c.a.createElement("button",{type:"button",onClick:function(t){e.onLeaveFeedback("neutral")}},"neutral"))}function m(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Section Stats"),c.a.createElement("h2",null,e.title),c.a.createElement("h2",null," Feedback options "),c.a.createElement(b,{onLeaveFeedback:e.onLeaveFeedback}))}function E(e){var t=e.good,a=e.bad,n=e.neutral,l=e.total,r=e.positivePercentage;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Statistics"),c.a.createElement("h3",null,"Good: ",c.a.createElement("span",null,t)),c.a.createElement("h3",null,"Bad: ",c.a.createElement("span",null,a)),c.a.createElement("h3",null,"Neutral: ",c.a.createElement("span",null,n)),c.a.createElement("h3",null,"Total: ",c.a.createElement("span",null,l)),c.a.createElement("h3",null,"Positive Feedback: ",c.a.createElement("span",null,r,"%")))}var h=a(6),f=a.n(h),v=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(e){return Object.values(e).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=(100*e.state.good/Object.values(e.state).reduce((function(e,t){return e+t}),0)).toFixed(2);return 0!==e.state.good?t:0},e.incrementState=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,l=this.countTotalFeedback(this.state),r=this.countPositiveFeedbackPercentage();return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:f.a.container},c.a.createElement(m,{title:"Please leave feedback!!",options:[t,n,a],onLeaveFeedback:this.incrementState}),0!==this.countTotalFeedback(this.state)&&c.a.createElement(E,{good:t,neutral:a,bad:n,total:l,positivePercentage:r})))}}]),a}(n.Component);v.defaultProps={good:0,neutral:0,bad:0},r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))},6:function(e,t,a){},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.2f1ac706.chunk.js.map