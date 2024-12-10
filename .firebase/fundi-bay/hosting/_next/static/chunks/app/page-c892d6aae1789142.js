(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{43542:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,49480,23)),Promise.resolve().then(t.bind(t,92963)),Promise.resolve().then(t.bind(t,43769))},92963:(e,r,t)=>{"use strict";t.d(r,{default:()=>d});var n=t(85878),l=t(83446),s=t(4812),a=t(93393),o=t(94347);let i=(0,a.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=l.forwardRef((e,r)=>{let{className:t,variant:l,size:a,asChild:c=!1,...d}=e,u=c?s.DX:"button";return(0,n.jsx)(u,{className:(0,o.cn)(i({variant:l,size:a,className:t})),ref:r,...d})});c.displayName="Button";let d=function(){let[e,r]=(0,l.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{size:"lg",variant:"link",className:"rounded-full text-xl p-6",onClick:()=>r(!e),children:"or enjoy Picpazz"}),e&&(0,n.jsx)("div",{className:"fixed top-0 left-0 z-20 bg-black bg-opacity-80 h-dvh w-screen flex flex-col items-center justify-center",children:(0,n.jsxs)("div",{className:"md:w-3/5 h-4/5 bg-white p-4 rounded",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("h5",{className:"text-2xl",children:"Picpazz Game"}),(0,n.jsx)(c,{variant:"ghost",className:"",onClick:()=>r(!e),children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})})]}),(0,n.jsx)("iframe",{src:"https://picpazz.com/embeded?embed=true",className:"w-full h-full"})]})})]})}},43769:(e,r,t)=>{"use strict";t.d(r,{default:()=>j});var n=t(85878),l=t(83446),s=t(95234),a=t(64389),o=t(69690),i=t(23553),c=t(26546),d=t(65277),u=t(94347);let h={light:"",dark:".dark"},m=l.createContext(null);function x(){let e=l.useContext(m);if(!e)throw Error("useChart must be used within a <ChartContainer />");return e}let f=l.forwardRef((e,r)=>{let{id:t,className:s,children:a,config:o,...c}=e,d=l.useId(),h="chart-".concat(t||d.replace(/:/g,""));return(0,n.jsx)(m.Provider,{value:{config:o},children:(0,n.jsxs)("div",{"data-chart":h,ref:r,className:(0,u.cn)("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",s),...c,children:[(0,n.jsx)(g,{id:h,config:o}),(0,n.jsx)(i.u,{children:a})]})})});f.displayName="Chart";let g=e=>{let{id:r,config:t}=e,l=Object.entries(t).filter(e=>{let[r,t]=e;return t.theme||t.color});return l.length?(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:Object.entries(h).map(e=>{let[t,n]=e;return"\n".concat(n," [data-chart=").concat(r,"] {\n").concat(l.map(e=>{var r;let[n,l]=e,s=(null===(r=l.theme)||void 0===r?void 0:r[t])||l.color;return s?"  --color-".concat(n,": ").concat(s,";"):null}).join("\n"),"\n}\n")}).join("\n")}}):null},v=c.m,p=l.forwardRef((e,r)=>{let{active:t,payload:s,className:a,indicator:o="dot",hideLabel:i=!1,hideIndicator:c=!1,label:d,labelFormatter:h,labelClassName:m,formatter:f,color:g,nameKey:v,labelKey:p}=e,{config:j}=x(),y=l.useMemo(()=>{var e;if(i||!(null==s?void 0:s.length))return null;let[r]=s,t="".concat(p||r.dataKey||r.name||"value"),l=b(j,r,t),a=p||"string"!=typeof d?null==l?void 0:l.label:(null===(e=j[d])||void 0===e?void 0:e.label)||d;return h?(0,n.jsx)("div",{className:(0,u.cn)("font-medium",m),children:h(a,s)}):a?(0,n.jsx)("div",{className:(0,u.cn)("font-medium",m),children:a}):null},[d,h,s,i,m,j,p]);if(!t||!(null==s?void 0:s.length))return null;let w=1===s.length&&"dot"!==o;return(0,n.jsxs)("div",{ref:r,className:(0,u.cn)("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",a),children:[w?null:y,(0,n.jsx)("div",{className:"grid gap-1.5",children:s.map((e,r)=>{let t="".concat(v||e.name||e.dataKey||"value"),l=b(j,e,t),s=g||e.payload.fill||e.color;return(0,n.jsx)("div",{className:(0,u.cn)("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground","dot"===o&&"items-center"),children:f&&(null==e?void 0:e.value)!==void 0&&e.name?f(e.value,e.name,e,r,e.payload):(0,n.jsxs)(n.Fragment,{children:[(null==l?void 0:l.icon)?(0,n.jsx)(l.icon,{}):!c&&(0,n.jsx)("div",{className:(0,u.cn)("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",{"h-2.5 w-2.5":"dot"===o,"w-1":"line"===o,"w-0 border-[1.5px] border-dashed bg-transparent":"dashed"===o,"my-0.5":w&&"dashed"===o}),style:{"--color-bg":s,"--color-border":s}}),(0,n.jsxs)("div",{className:(0,u.cn)("flex flex-1 justify-between leading-none",w?"items-end":"items-center"),children:[(0,n.jsxs)("div",{className:"grid gap-1.5",children:[w?y:null,(0,n.jsx)("span",{className:"text-muted-foreground",children:(null==l?void 0:l.label)||e.name})]}),e.value&&(0,n.jsx)("span",{className:"font-mono font-medium tabular-nums text-foreground",children:e.value.toLocaleString()})]})]})},e.dataKey)})})]})});function b(e,r,t){if("object"!=typeof r||null===r)return;let n="payload"in r&&"object"==typeof r.payload&&null!==r.payload?r.payload:void 0,l=t;return t in r&&"string"==typeof r[t]?l=r[t]:n&&t in n&&"string"==typeof n[t]&&(l=n[t]),l in e?e[l]:e[t]}function j(e){let{title:r,children:t,percentage:l,color:i}=e,c=[{skill:"growth",percentage:l,fill:i},{skill:"portential",percentage:100-l,fill:"rgba(0,0,0,0.5)"}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{config:{portential:{label:"Room for growth",color:"hsl(var(--chart-1))"},growth:{label:r,color:"hsl(var(--chart-2))"}},className:"mx-auto aspect-square max-h-[250px]",children:(0,n.jsxs)(s.r,{children:[(0,n.jsx)(v,{cursor:!1,content:(0,n.jsx)(p,{hideLabel:!0})}),(0,n.jsx)(a.F,{data:c,dataKey:"percentage",nameKey:"skill",innerRadius:60,strokeWidth:5,children:(0,n.jsx)(o.J,{content:e=>{let{viewBox:r}=e;if(r&&"cx"in r&&"cy"in r)return(0,n.jsxs)("text",{x:r.cx,y:r.cy,textAnchor:"middle",dominantBaseline:"middle",children:[(0,n.jsxs)("tspan",{x:r.cx,y:r.cy,className:"fill-white text-3xl font-bold",children:[l,"%"]}),(0,n.jsx)("tspan",{x:r.cx,y:(r.cy||0)+24,className:"fill-white text-white",children:"Percentage"})]})}})})]})}),t]})}p.displayName="ChartTooltip",d.s,l.forwardRef((e,r)=>{let{className:t,hideIcon:l=!1,payload:s,verticalAlign:a="bottom",nameKey:o}=e,{config:i}=x();return(null==s?void 0:s.length)?(0,n.jsx)("div",{ref:r,className:(0,u.cn)("flex items-center justify-center gap-4","top"===a?"pb-3":"pt-3",t),children:s.map(e=>{let r="".concat(o||e.dataKey||"value"),t=b(i,e,r);return(0,n.jsxs)("div",{className:(0,u.cn)("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),children:[(null==t?void 0:t.icon)&&!l?(0,n.jsx)(t.icon,{}):(0,n.jsx)("div",{className:"h-2 w-2 shrink-0 rounded-[2px]",style:{backgroundColor:e.color}}),null==t?void 0:t.label]},e.value)})}):null}).displayName="ChartLegend"},94347:(e,r,t)=>{"use strict";t.d(r,{cn:()=>s});var n=t(83161),l=t(49402);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,l.QP)((0,n.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[509,707,955,358],()=>r(43542)),_N_E=e.O()}]);