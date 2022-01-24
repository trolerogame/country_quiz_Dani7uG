import{s as c,j as m,r as l,W as _,R as j,a as R}from"./vendor.0f59a5b2.js";const A=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}};A();const N=c.div`
    width: 375px;
    background-color:#fff;
    border-radius:15px;
    position: relative;
    padding:20px;
    padding-top:40px;
`,O=c.img`
    position:absolute;
    right:0;
    top:-70px;
    width:140px;
    object-fit: cover;
`,I=c.b`
    display: block;
    color:#192a56;
    font-size:25px;
    margin:20px 0;
    font-weight:600;
    img{
        width: 100px;
    }
`,D=c.h1`
    position:absolute;
    font-size:40px;
    color:#fff;
    top:-80px;
    left:0;
`,L=c.div`
    display: flex;
    flex-direction: column;
`,q=c.button`
    border: none;
    width:100%;
    height: 50px;
    background:${e=>e.isTrue?e.isTrue:"none"};
    outline:${e=>e.isTrue?"none":"1px solid #273c75"};
    cursor:pointer;
    color:${e=>e.isTrue?"#fff":"#273c75"};
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding:10px 20px;
    border-radius:15px;
    margin:15px 0;
    transition: all .2s linear;
    span{
        margin-right:30px;
        font-size:20px;
    }
    &:hover{
        background:orange;
        color:#fff;
        outline:none;
    }
`,F=c.div`
    display: flex;
    justify-content: flex-end;
`,G=c.button`
    border:none;
    outline:none;
    border-radius:10px;
    background:orange;
    font-size:18px;
    font-weight: 600;
    height:40px;
    color:#fff;
    width:80px;
    cursor:pointer;
`,n=m.exports.jsx,f=m.exports.jsxs,k=m.exports.Fragment,M={1:"A",2:"B",3:"C",4:"D"},$=({country:e,i:r,countrieTrue:a,setWin:u,win:t,setCount:o})=>{const i=e.capital==a.capital,[g,p]=l.exports.useState("");l.exports.useEffect(()=>{t===!1&&i&&p("green"),t===null&&p("")},[t]);const h=()=>{const{count:x}=o;i&&o.setCount(x+1),p(i),u(i),p(i?"green":"red")};return f(q,{isTrue:g,onClick:()=>t===null&&h(),children:[f("div",{children:[n("span",{children:M[r+1]}),e.name]}),g&&n("img",{style:{width:"20px"},src:"/country_quiz_Dani7uG"+g=="green"?"/check-circle-solid.svg":"/times-circle-solid.svg",alt:""})]},r)},E=c.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h3,p,button{
        color:#273c75;
    }
    h3{
        font-size:35px;
        margin:40px 0 5px 0;
    }
    p{
        display:block;
        margin:5px 0 60px 0;
    }
    b{
        color:#44bd32;
        font-size:24px;
        margin:0 3px;
    }
`,W=c.button`
    width: 180px;
    height: 50px;
    font-size:18px;
    outline: 1px solid #273c75;
    border-radius: 10px;
    background-color: transparent;
    border:none;
    cursor: pointer;
`,P=({count:e,retry:r})=>f(E,{children:[n("img",{src:"/country_quiz_Dani7uG/undraw_winners_ao2o 2.svg",alt:""}),n("h3",{children:"Results"}),f("p",{children:["Your got ",n("b",{children:e})," correct answers"]}),n(W,{onClick:r,children:"Try Again"})]}),B=({win:e,next:r,allCountries:a,setIsRetry:u})=>n(F,{children:n(G,{onClick:()=>e?r(a):u(!0),children:"Next"})}),Q=()=>{let e=[];for(;e.length<4;){let r=b(250);e.includes(r)||(e=[...e,r])}return e},b=e=>Math.floor(Math.random()*e),Z=_`
    body{
        font-family: 'Lato', sans-serif;
        font-family: 'Rubik', sans-serif;
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100vh;
        display:grid;
        place-content: center;
        background-color: #5352ed;
        background: url('/country_quiz_Dani7uG/background.png') no-repeat;
        background-size: cover ;
    }
`;function K(){var w;const[e,r]=l.exports.useState([]),[a,u]=l.exports.useState([]),[t,o]=l.exports.useState({}),[i,g]=l.exports.useState(null),[p,h]=l.exports.useState(0),[x,y]=l.exports.useState(!1),[z,S]=l.exports.useState(0),v=s=>{const d=Q();o(s[d[b(4)]]),S(b(2)),u([s[d[0]],s[d[1]],s[d[2]],s[d[3]]])},C=s=>{v(s),g(null)},T=()=>{C(e),h(0),y(!1)};return l.exports.useEffect(()=>{fetch("https://restcountries.com/v2/all").then(s=>s.json()).then(s=>{r(s),v(s)})},[]),f(N,{children:[n(Z,{}),n(D,{children:"Country Quiz"}),x===!1&&f(k,{children:[n(O,{src:"/country_quiz_Dani7uG/undraw_adventure_4hum 1.svg",alt:""}),n(I,{children:z?`${t.capital} is the capital of`:f(k,{children:[n("img",{src:(w=t.flags)==null?void 0:w.png,alt:""}),n("p",{children:"Which country does this flag belong to"})]})}),n(L,{children:a&&a.map((s,d)=>n($,{country:s,win:i,setWin:g,countrieTrue:t,i:d,setCount:{setCount:h,count:p}},d))})]}),x&&n(P,{count:p,retry:T}),i!==null&&!x&&n(B,{win:i,next:C,allCountries:e,setIsRetry:y})]})}j.render(n(R.StrictMode,{children:n(K,{})}),document.getElementById("root"));
