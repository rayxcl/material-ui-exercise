(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{232:function(e,t,r){"use strict";r.r(t);var n=r(12),s=r.n(n),a=r(276),l=r.n(a),i=r(251),c=r.n(i),o=r(275),u=r.n(o),m=r(238),h=r.n(m),d=r(52),p=r(246),b=r(273),x=r.n(b);function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=class extends n.Component{constructor(){super(...arguments),E(this,"state",this.getInitState()),E(this,"handleChange",e=>{this.setState({[e.target.name]:e.target.value})}),E(this,"handleSubmit",()=>{this.props.onSubmit(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){E(e,t,r[t])})}return e}({id:this.state.title.toLocaleLowerCase().replace(/ /g,"-")},this.state))})}getInitState(){return this.props.exercise||{title:"",description:"",muscles:""}}static getDerivedStateFromProps(e,t){return e.exercise&&e.exercise.id!==t.id?e.exercise:null}render(){const e=this.props,t=e.muscles,r=e.exercise,n=this.state,a=n.title,l=n.description,i=n.muscles;return s.a.createElement("form",null,s.a.createElement(p.u,{label:"Title",value:a,name:"title",onChange:this.handleChange,margin:"normal",fullWidth:!0}),s.a.createElement("br",null),s.a.createElement(p.h,{fullWidth:!0},s.a.createElement(p.k,{htmlFor:"muscles"},"Muscles"),s.a.createElement(p.r,{name:"muscles",value:i,onChange:this.handleChange},t.map(e=>s.a.createElement(p.p,{key:e,value:e},e)))),s.a.createElement("br",null),s.a.createElement(p.u,{multiline:!0,rows:"4",label:"Description",value:l,name:"description",onChange:this.handleChange,margin:"normal",fullWidth:!0}),s.a.createElement("br",null),s.a.createElement(p.b,{color:"primary",variant:"contained",onClick:this.handleSubmit,disabled:!a||!i},r?"Edit":"Create"))}};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const y=Object(n.createContext)(),v=y.Provider,S=y.Consumer,C=e=>t=>s.a.createElement(S,null,r=>s.a.createElement(e,f({},r,t)));function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k=C(class extends n.Component{constructor(){super(...arguments),w(this,"state",{open:!1}),w(this,"handleToggle",()=>{this.setState(e=>({open:!e.open}))}),w(this,"handleFormSubmit",e=>{this.handleToggle(),this.props.onCreate(e)})}render(){const e=this.state.open,t=this.props.muscles;return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.g,{"aria-label":"Add",size:"small",color:"secondary",onClick:this.handleToggle},s.a.createElement(x.a,null)),s.a.createElement(p.c,{open:e,onClose:this.handleToggle,fullWidth:!0,maxWidth:"xs"},s.a.createElement(p.f,null,"Create a New Exercise"),s.a.createElement(p.d,null,s.a.createElement(p.e,null,"Please fill out the form below."),s.a.createElement(g,{muscles:t,onSubmit:this.handleFormSubmit}))))}});var O=Object(d.withStyles)({flex:{flex:1}})(e=>{let t=e.classes;return s.a.createElement("div",null,s.a.createElement(c.a,{position:"static"},s.a.createElement(u.a,null,s.a.createElement(h.a,{variant:"h6",color:"inherit",className:t.flex},"News"),s.a.createElement(k,null))))});function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=C(Object(d.withStyles)(e=>({root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}))(class extends n.Component{constructor(){super(...arguments),j(this,"onIndexSelect",(e,t)=>{const r=this.props,n=r.onCategorySelect,s=r.muscles;n(0===t?"":s[t-1])}),j(this,"getIndex",()=>{const e=this.props,t=e.category,r=e.muscles;return t?r.findIndex(e=>e===t)+1:0})}render(){const e=this.props.muscles;return s.a.createElement(p.a,{position:"static"},s.a.createElement(p.t,{indicatorColor:"secondary",textColor:"secondary",value:this.getIndex(),onChange:this.onIndexSelect,variant:"scrollable",scrollButtons:"auto"},s.a.createElement(p.s,{label:"All"}),e.map(e=>s.a.createElement(p.s,{label:e,key:e}))))}})),B=r(5668);function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,s=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){s=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(s)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var T=C(Object(d.withStyles)(e=>({paper:{padding:3*e.spacing.unit,overflowY:"auto",[e.breakpoints.up("sm")]:{marginTop:5,height:"calc(100% - 10px)"},[e.breakpoints.down("xs")]:{height:"100%"},marginBottom:10},"@global":{"html, body, #root":{height:"100%"}},container:{[e.breakpoints.up("sm")]:{height:"calc(100% - 64px - 48px)"},[e.breakpoints.down("xs")]:{height:"calc(100% - 56px - 48px)"}},item:{[e.breakpoints.down("xs")]:{height:"50%"}}}))(e=>{let t=e.classes,r=e.exercisesByMuscels,a=e.category,l=e.muscles,i=e.editMode,c=e.exercise,o=e.exercise,u=o.id,m=o.title,h=void 0===m?"Welcome!":m,d=o.description,b=void 0===d?"Please select an exercise from the list on the left.":d,x=e.onSelect,E=e.onSelectEdit,f=e.onEdit,y=e.onDelete;return s.a.createElement(p.i,{container:!0,className:t.container},s.a.createElement(p.i,{item:!0,xs:12,sm:6,className:t.item},s.a.createElement(p.q,{className:t.paper},r.map(e=>{let t=D(e,2),r=t[0],l=t[1];return a&&a!==r?null:s.a.createElement(n.Fragment,{key:r},s.a.createElement(p.v,{variant:"h5",color:"secondary",style:{textTransform:"capitalize"}},r),s.a.createElement(p.l,{component:"ul"},l.map(e=>{let t=e.id,r=e.title;return s.a.createElement(p.m,{key:t,button:!0,onClick:()=>x(t)},s.a.createElement(p.o,{primary:r}),s.a.createElement(p.n,null,s.a.createElement(p.j,{color:"primary",onClick:()=>E(t)},s.a.createElement(B.b,null)),s.a.createElement(p.j,{color:"primary",onClick:()=>y(t)},s.a.createElement(B.a,null))))})))}))),s.a.createElement(p.i,{item:!0,xs:12,sm:6,className:t.item},s.a.createElement(p.q,{className:t.paper},s.a.createElement(p.v,{variant:"h4",gutterbottom:"true",color:"secondary"},h),i?s.a.createElement(g,{key:u,muscles:l,onSubmit:f,exercise:c}):s.a.createElement(p.v,{variant:"subtitle1"},b))))}));const M=["shoulders","chest","arms","back","legs"],I=[{id:"overhead-press",title:"Overhead Press",description:"Delts exercise...",muscles:"shoulders"},{id:"dips",title:"Dips",description:"Triceps exercise...",muscles:"arms"},{id:"barbell-curls",title:"Barbell Curls",description:"Biceps exercise...",muscles:"arms"},{id:"bench-press",title:"Bench Press",description:"Chest exercise...",muscles:"chest"},{id:"pull-ups",title:"Pull Ups",description:"Back and biceps exercise...",muscles:"back"},{id:"deadlifts",title:"Deadlifts",description:"Back and leg exercise...",muscles:"back"},{id:"squats",title:"Squats",description:"Legs exercise...",muscles:"legs"}];function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){F(e,t,r[t])})}return e}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=class extends n.Component{constructor(){super(...arguments),F(this,"state",{exercises:I,exercise:{}}),F(this,"handleTabSelect",e=>{this.setState({category:e})}),F(this,"handleExerciseSelect",e=>{this.setState({exercise:this.state.exercises.find(t=>t.id===e),editMode:!1})}),F(this,"handleExerciseCreate",e=>{this.setState({exercises:[...this.state.exercises,e]})}),F(this,"handleExerciseDelete",e=>{this.setState(t=>{let r=t.exercises,n=t.exercise,s=t.editMode;return{exercises:r.filter(t=>t.id!==e),editMode:n.id!==e&&s,exercise:n.id===e?{}:n}}),console.log(this.exercises)}),F(this,"handleExerciseSelectEdit",e=>this.setState({editMode:!0,exercise:this.state.exercises.find(t=>t.id===e)})),F(this,"handleExerciseEdit",e=>{this.setState({exercises:[...this.state.exercises.filter(t=>t.id!==e.id),e]})}),F(this,"getContext",()=>N({muscles:M},this.state,{exercisesByMuscels:this.getExercisesByMuscles(),onCategorySelect:this.handleTabSelect,onCreate:this.handleExerciseCreate,onSelect:this.handleExerciseSelect,onSelectEdit:this.handleExerciseSelectEdit,onEdit:this.handleExerciseEdit,onDelete:this.handleExerciseDelete}))}getExercisesByMuscles(){const e=M.reduce((e,t)=>N({},e,{[t]:[]}),{}),t=this.state.exercises.reduce((e,t)=>{const r=t.muscles;return e[r]=[...e[r],t],e},e);return Object.entries(t)}render(){return s.a.createElement(v,{value:this.getContext()},s.a.createElement(l.a,null),s.a.createElement(O,null),s.a.createElement(T,null),s.a.createElement(P,null))}}}}]);
//# sourceMappingURL=app.js.map