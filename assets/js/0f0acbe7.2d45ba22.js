"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3587],{7310:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=t(4848),o=t(8453);const s={sidebar_position:3},l="Docker Installation",c={id:"installations/docker_installation",title:"Docker Installation",description:"1. Pulling the docker image:",source:"@site/docs/installations/docker_installation.md",sourceDirName:"installations",slug:"/installations/docker_installation",permalink:"/cs-documentation/docs/installations/docker_installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Local Installation",permalink:"/cs-documentation/docs/installations/local_installation"},next:{title:"Kubernetes Deployment",permalink:"/cs-documentation/docs/installations/kubernetes_deployment"}},r={},a=[];function d(n){const e={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"docker-installation",children:"Docker Installation"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Pulling the docker image:\n",(0,i.jsx)(e.code,{children:"docker pull docker pull lincoln1010/mass_spectrometry_file_converter:v1"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Running the container:\n",(0,i.jsx)(e.code,{children:"docker run --privileged -d -ti --name < name of the container > -p 5000:5000 lincoln1010/mass_spectrometry_file_converter:v1.0"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Enabling the docker in docker (which is necessary):\n",(0,i.jsx)(e.code,{children:"docker exec < name of the container > dockerd >/tmp/docker.stdout 2>/tmp/docker.stderr &"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Copy extra parameters on config.txt file:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"a : create a config.txt file with content , for example, --mzXML  (without any indentation)"}),"\n",(0,i.jsxs)(e.li,{children:["b : ",(0,i.jsx)(e.code,{children:"docker cp < path to your config.txt file > < name of the container >:/app/config.txt"}),"\n(copying the config.txt file to /app/config.txt inside the container)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["The URL will be available on ",(0,i.jsx)(e.code,{children:"http://localhost:5000/api-docs#"})," with RESTAPI"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var i=t(6540);const o={},s=i.createContext(o);function l(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);