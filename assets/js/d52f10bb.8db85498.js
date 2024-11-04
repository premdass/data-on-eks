"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[2337],{6336:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(4848),t=n(8453),s=(n(1470),n(9365),n(2450));const o={sidebar_position:2,sidebar_label:"Data Generation"},l="Data Generation for Running Spark Benchmark Tests on Amazon EKS",i={id:"benchmarks/spark-operator-benchmark/data-generation",title:"Data Generation for Running Spark Benchmark Tests on Amazon EKS",description:"The following guide provides instructions on how to generate the data set for running the TPCDS benchmark tests for Spark.",source:"@site/docs/benchmarks/spark-operator-benchmark/data-generation.md",sourceDirName:"benchmarks/spark-operator-benchmark",slug:"/benchmarks/spark-operator-benchmark/data-generation",permalink:"/data-on-eks/docs/benchmarks/spark-operator-benchmark/data-generation",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/benchmarks/spark-operator-benchmark/data-generation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Data Generation"},sidebar:"benchmarks",previous:{title:"Introduction to Spark Benchmarks",permalink:"/data-on-eks/docs/benchmarks/spark-operator-benchmark/spark-operator-eks-benchmark"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"data-generation-for-running-spark-benchmark-tests-on-amazon-eks",children:"Data Generation for Running Spark Benchmark Tests on Amazon EKS"})}),"\n",(0,a.jsx)(r.p,{children:"The following guide provides instructions on how to generate the data set for running the TPCDS benchmark tests for Spark."}),"\n",(0,a.jsxs)(s.A,{header:(0,a.jsx)(r.h2,{children:(0,a.jsx)(r.span,{children:"Deploying the Solution"})}),children:[(0,a.jsxs)(r.p,{children:["In this ",(0,a.jsx)(r.a,{href:"https://github.com/awslabs/data-on-eks/tree/main/analytics/terraform/spark-k8s-operator",children:"example"}),", you will provision the following resources required to run Spark Jobs with open source Spark Operator and Apache YuniKorn."]}),(0,a.jsx)(r.p,{children:"This example deploys an EKS Cluster running the Spark K8s Operator into a new VPC."}),(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Creates a new sample VPC, 2 Private Subnets and 2 Public Subnets"}),"\n",(0,a.jsx)(r.li,{children:"Creates Internet gateway for Public Subnets and NAT Gateway for Private Subnets"}),"\n",(0,a.jsx)(r.li,{children:"Creates EKS Cluster Control plane with public endpoint (for demo reasons only) with core managed node group, on-demand node group and Spot node group for Spark workloads."}),"\n",(0,a.jsx)(r.li,{children:"Deploys Metrics server, Cluster Autoscaler, Spark-k8s-operator, Apache Yunikorn, Karpenter, Grafana, AMP and Prometheus server."}),"\n"]}),(0,a.jsx)(r.h3,{id:"prerequisites",children:"Prerequisites"}),(0,a.jsx)(r.p,{children:"Ensure that you have installed the following tools on your machine."}),(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n"]}),(0,a.jsx)(r.h3,{id:"deploy",children:"Deploy"}),(0,a.jsx)(r.p,{children:"Clone the repository."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\ncd data-on-eks\nexport DOEKS_HOME=$(pwd)\n"})}),(0,a.jsxs)(r.p,{children:["If DOEKS_HOME is ever unset, you can always set it manually using ",(0,a.jsx)(r.code,{children:"export DATA_ON_EKS=$(pwd)"})," from your data-on-eks directory."]}),(0,a.jsxs)(r.p,{children:["Export the following environment variables to set the minimum and desired number of ssd enabled c5d 12xlarge instances. In our tests, we've set both of these to ",(0,a.jsx)(r.code,{children:"6"}),". Please adjust the number of instances as per your requirement and set up."]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"export TF_VAR_spark_benchmark_ssd_min_size=6\nexport TF_VAR_spark_benchmark_ssd_desired_size=6\n"})}),(0,a.jsxs)(r.p,{children:["Navigate into one of the example directories and run ",(0,a.jsx)(r.code,{children:"install.sh"})," script."]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"cd ${DOEKS_HOME}/analytics/terraform/spark-k8s-operator\nchmod +x install.sh\n./install.sh\n"})}),(0,a.jsx)(r.p,{children:"Now create an S3_BUCKET variable that holds the name of the bucket created\nduring the install. This bucket will be used in later examples to store output\ndata. If S3_BUCKET is ever unset, you can run the following commands again."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"export S3_BUCKET=$(terraform output -raw s3_bucket_id_spark_history_server)\necho $S3_BUCKET\n"})})]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},9365:(e,r,n)=>{n.d(r,{A:()=>o});n(6540);var a=n(4164);const t={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){let{children:r,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,o),hidden:n,children:r})}},1470:(e,r,n)=>{n.d(r,{A:()=>w});var a=n(6540),t=n(4164),s=n(3104),o=n(6347),l=n(205),i=n(7485),c=n(1682),u=n(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:a,default:t}}=e;return{value:r,label:n,attributes:a,default:t}}))}(n);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const t=(0,o.W6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(t.location.search);r.set(s,e),t.replace({...t.location,search:r.toString()})}),[s,t])]}function b(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,s=h(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:s}))),[c,d]=m({queryString:n,groupId:t}),[b,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,s]=(0,u.Dv)(n);return[t,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:t}),k=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(2303);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){let{className:r,block:n,selectedValue:a,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const r=e.currentTarget,n=i.indexOf(r),t=l[n].value;t!==a&&(c(r),o(t))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},r),children:l.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,t.A)("tabs__item",k.tabItem,s?.className,{"tabs__item--active":a===r}),children:n??r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function j(e){const r=b(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",k.tabList),children:[(0,g.jsx)(x,{...r,...e}),(0,g.jsx)(v,{...r,...e})]})}function w(e){const r=(0,f.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(r))}},2450:(e,r,n)=>{n.d(r,{A:()=>m});var a=n(6540),t=n(5556),s=n.n(t),o=n(4164);const l="collapsibleContent_q3kw",i="header_QCEw",c="icon_PckA",u="content_qLC1",d="expanded_iGsi";var h=n(4848);function p(e){let{children:r,header:n}=e;const[t,s]=(0,a.useState)(!1);return(0,h.jsxs)("div",{className:l,children:[(0,h.jsxs)("div",{className:(0,o.A)(i,{[d]:t}),onClick:()=>{s(!t)},children:[n,(0,h.jsx)("span",{className:(0,o.A)(c,{[d]:t}),children:t?"\ud83d\udc47":"\ud83d\udc48"})]}),t&&(0,h.jsx)("div",{className:u,children:r})]})}p.propTypes={children:s().node.isRequired,header:s().node.isRequired};const m=p},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var a=n(6540);const t={},s=a.createContext(t);function o(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);