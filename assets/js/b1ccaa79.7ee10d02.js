"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2652],{2643:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=t(4848),s=t(8453);const l={sidebar_position:2},r="Local Installation",o={id:"installations/local_installation",title:"Local Installation",description:"1. Prerequisites: Python 3.9 or higher",source:"@site/docs/installations/local_installation.md",sourceDirName:"installations",slug:"/installations/local_installation",permalink:"/cs-documentation/docs/installations/local_installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/cs-documentation/docs/installations/Requirements"},next:{title:"Docker Installation",permalink:"/cs-documentation/docs/installations/docker_installation"}},a={},c=[];function d(n){const e={a:"a",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"local-installation",children:"Local Installation"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Prerequisites: ",(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"Python 3.9 or higher"})})]}),"\n",(0,i.jsxs)(e.li,{children:["Clone the repository ",(0,i.jsx)(e.code,{children:"git clone https://git.rwth-aachen.de/linsherpa/ms_converter.git"})]}),"\n",(0,i.jsxs)(e.li,{children:["Create a python virtual environment and activate it. ",(0,i.jsx)(e.a,{href:"https://docs.python.org/3/library/venv.html",children:"Tips to create a python vitrual environment"})]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"python3 -m venv <your desired virtual environment name>\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsx)(e.li,{children:"Activate the environment"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"source <path to your desired virtual environment name>/bin/activate\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"5",children:["\n",(0,i.jsxs)(e.li,{children:["Install necessary requirements ",(0,i.jsx)(e.code,{children:"pip install -r requirements.txt"})]}),"\n",(0,i.jsxs)(e.li,{children:["Run the main file ",(0,i.jsx)(e.code,{children:"rest_api.py"})," :"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"python rest_api.py\n"})}),"\n",(0,i.jsx)(e.p,{children:"or"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:" flask --app rest_api.py run\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"7",children:["\n",(0,i.jsxs)(e.li,{children:["The URL will be available on ",(0,i.jsx)(e.code,{children:"http://localhost:5000/api-docs#"})]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var i=t(6540);const s={},l=i.createContext(s);function r(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);