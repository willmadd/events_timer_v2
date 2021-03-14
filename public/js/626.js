(self.webpackChunk=self.webpackChunk||[]).push([[626],{60626:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});var r=n(85893),o=n(67294),a=n(87757),s=n.n(a),c=n(9072),i=n(86664),l=n(21606),u=n(5977),d=n(24911),h=n(37703),f=n(26986);function p(e,t,n,r,o,a,s){try{var c=e[a](s),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,o)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const v=(0,c._)((function(e){var t,n,a=e.selectedPlan,c=e.setSelectedPlan,y=(0,h.I0)(),v=(0,u.k6)(),b=(0,i.useStripe)(),x=(0,i.useElements)(),g=m((0,o.useState)(!1),2),j=g[0],w=g[1],S=m((0,o.useState)(""),2),_=S[0],k=S[1],C=function(){var e,t=(e=s().mark((function e(t){var n,r,o,c,l,u,h;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b&&x){e.next=2;break}return e.abrupt("return");case 2:return n=x.getElement(i.CardElement),e.next=5,b.createPaymentMethod({type:"card",card:n});case 5:r=e.sent,o=r.error,c=r.paymentMethod,o?console.log("[error]",o):(w(!0),l=c.id,u=localStorage.getItem("eventcountdown:all:userToken"),h={headers:{Authorization:"Bearer ".concat(u)}},axios.post("/api/auth/subscribe",{id:l,plan:a.stripe_plan},h).then((function(e){w(!1),y((0,f.PJ)(u)),v.push(d.Z.memberDashboard)})).catch((function(e){w(!1),k("A server error occured, Please try again"),console.log(e)})));case 9:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(e){p(a,r,o,s,c,"next",e)}function c(e){p(a,r,o,s,c,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,r.jsx)("div",{className:"plans__checkout",children:(0,r.jsxs)("div",{className:"plans__checkout__modal",children:[(0,r.jsx)("div",{type:"button",onClick:function(){return c(null)},className:"plans__checkout__close"}),(0,r.jsx)("h3",{children:"Checkout"}),(0,r.jsxs)("div",{className:"plans__checkout__summary",children:[(0,r.jsxs)("p",{children:["You are purchasing 1 x ",a.name," subscription to EventsCountdown.com"]}),(0,r.jsx)("p",{children:"Cancel at any time"}),(0,r.jsx)("p",{children:"Charge today: 0"}),(0,r.jsxs)("p",{children:["Your first payment of ".concat(a.cost," ").concat(a.currency," will happen on "),(0,r.jsx)("b",{children:(t=new Date,n=t.getDate(),t.setMonth(t.getMonth()+1),t.getDate()!=n&&t.setDate(0),t).toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"numeric"})})," ","unless you cancel beforehand"]})]}),_&&(0,r.jsx)("p",{className:"error",children:_}),j?(0,r.jsx)(l.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.CardElement,{options:{style:{base:{fontSize:"16px",border:"1px solid #333333",marginBottom:"24px",color:"#424770","::placeholder":{color:"#aab7c4"}},invalid:{color:"#9e2146"}}}}),(0,r.jsx)("button",{className:"primary",type:"button",onClick:function(){return C()},disabled:!b,children:"Sign Up"})]}),(0,r.jsx)("div",{className:"checkout__info",children:(0,r.jsx)("p",{children:"Payments are handled by Stripe and card details are never stored on Events Countdown's servers"})})]})})}));n(87950);var b=n(14683);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const j=function(e){var t=e.plans,n=x((0,o.useState)(),2),a=n[0],s=n[1];return(0,r.jsxs)("div",{className:"plans",children:[(0,r.jsx)("h2",{children:"Get Events Countdown Pro"}),(0,r.jsx)("p",{children:"If you're running online or in person events regularly then it works out much more cost effective to purchase an Events Countdown subscription."}),(0,r.jsxs)("p",{children:[" ","The first month is on us, so if you don't like our service, you can cancel within the first month and you won't be charged at all."]}),(0,r.jsxs)("div",{className:"plans__wrapper",children:[(0,r.jsx)(b.Z,{plans:t,selectedPlan:a,setSelectedPlan:s,buttonLabel:"Sign up to"}),a&&(0,r.jsx)(v,{setSelectedPlan:s,selectedPlan:t.find((function(e){return e.slug===a}))})]})]})}}}]);