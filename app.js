const papers = [
  {id:'ultra',topic:'chiplet',venue:'TCAD 2026',status:'Journal',title:'ULTRA-2.5D: An Analytical Placement Framework for Ultra-Large-Scale Multi-Reticle Chiplet Systems',authors:'Jinhong Huang, Yuyan Wang, Boxiang Song, Chengkai Zhu, Yuman Zeng, Jiayao Li, Keren Zhu, Lang Feng, Changhao Yan, Chixiao Chen, and Xuan Zeng',publication:'IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems',url:'https://ieeexplore.ieee.org/document/11740930',type:'article'},
  {id:'cne',topic:'pdn',venue:'ICCAD 2026',status:'Accepted',title:'CNE-PDN: Joint Optimization of PDN Geometry and TSV Layout via Component-Level Neural Parasitic Extraction for 2.5D IC',authors:'Chengkai Zhu, Jinhong Huang, Boxiang Song, Xihan Yang, Siwen Wang, Yiyang Zhao, Keren Zhu, and Changhao Yan',publication:'IEEE/ACM International Conference on Computer-Aided Design',url:null,type:'inproceedings'},
  {id:'rc',topic:'routing',venue:'ISCAS 2026',status:'Accepted',title:'RC-Scaled Timing-Driven Routing: Bridging Targeted Timing Optimization and Massively Parallel Global Routing',authors:'Chuyu Wang, Zecheng Xu, Boxiang Song, Zhiang Wang, Fan Yang, Keren Zhu, and Xuan Zeng',publication:'IEEE International Symposium on Circuits and Systems',url:null,type:'inproceedings'}
];
papers.find(p=>p.id==='rc').url='https://doi.org/10.1109/ISCAS66217.2026.11562636';
const chineseTitles={ultra:'ULTRA-2.5D：面向超大规模多光罩 Chiplet 系统的分析式布局框架',cne:'CNE-PDN：基于元件级神经寄生参数提取的 2.5D IC 供电网络几何与 TSV 布局联合优化',rc:'RC 缩放时序驱动布线：连接定向时序优化与大规模并行全局布线'};
const translations={
 zh:{skip:'跳到正文',navigation:'主导航',about:'关于',publications:'论文',education:'教育经历',role:'博士研究生 · 复旦大学 CODA Lab',bio:'我于 2025 年秋季加入复旦大学 CODA Lab，研究电子设计自动化（EDA）。目前关注时序驱动全局布线、大规模 Chiplet 布局和供电网络建模。',lab:'实验室',contact:'联系',research:'研究方向',interests:'时序驱动全局布线 · 大规模 Chiplet 布局 · 供电网络建模',fudan:'复旦大学',phd:'博士研究生 · CODA Lab',phdDates:'2025 — 至今',wuhan:'武汉大学',bachelor:'学士',honors:'荣誉与奖项',ispd:'ISPD 全局布线竞赛第三名（46 支队伍）',opendacs:'openDACS 开源 EDA 与芯片设计竞赛优胜奖',citation:'引用',close:'关闭',citationNote:'未补充尚未确认的卷号、页码或 DOI。',copy:'复制 BibTeX',copied:'已复制。',copyFallback:'请按 Ctrl+C 或长按复制选中的引用。',paper:'论文链接',accepted:'已接收',title:'Boxiang Song · 学术主页',description:'Boxiang Song，复旦大学 CODA Lab 博士研究生。研究方向：全局布线、Chiplet 布局与供电网络。'},
 en:{skip:'Skip to content',navigation:'Main navigation',about:'About',publications:'Publications',education:'Education',role:'Ph.D. student · CODA Lab, Fudan University',bio:'I am a Ph.D. student at CODA Lab, Fudan University, where I joined in Fall 2025. My research is in electronic design automation (EDA), with a focus on timing-driven global routing, large-scale chiplet placement, and power-delivery-network modeling.',lab:'Lab',contact:'Contact',research:'Research interests',interests:'Timing-driven global routing · Large-scale chiplet placement · Power-delivery-network modeling',fudan:'Fudan University',phd:'Ph.D. student · CODA Lab',phdDates:'2025 — Present',wuhan:'Wuhan University',bachelor:'B.S.',honors:'Honors & awards',ispd:'Third place, ISPD Global Routing Contest (46 teams)',opendacs:'Excellence Award, openDACS Open-Source EDA and Chip Design Competition',citation:'Citation',close:'Close',citationNote:'Unavailable volume, page, and DOI fields are omitted.',copy:'Copy BibTeX',copied:'Copied.',copyFallback:'Press Ctrl+C or long-press to copy the selected citation.',paper:'Paper',accepted:'Accepted',title:'Boxiang Song · Academic homepage',description:'Boxiang Song, Ph.D. student at CODA Lab, Fudan University. Research in global routing, chiplet placement, and power-delivery networks.'}
};
Object.assign(translations.zh,{location:'中国 · 上海',routing:'时序驱动全局布线',chiplet:'大规模 Chiplet 布局',pdn:'供电网络建模'});
Object.assign(translations.en,{location:'Shanghai, China',routing:'Timing-driven global routing',chiplet:'Large-scale chiplet placement',pdn:'Power-delivery-network modeling'});
let language='zh';
try{const saved=localStorage.getItem('bs-language');if(saved==='en'||saved==='zh')language=saved;}catch{}
const dialog=document.getElementById('citation-dialog');
const languageButton=document.getElementById('language');
function citation(p){return `@${p.type}{${p.id}2026,\n  title = {${p.title}},\n  author = {${p.authors.replace(/, and /g,' and ').replace(/, /g,' and ')}},\n  ${p.type==='article'?'journal':'booktitle'} = {${p.publication}},\n  year = {2026}${p.url?`,\n  url = {${p.url}}`:''}\n}`;}
function renderPapers(){
 const t=translations[language];
 document.getElementById('publication-list').innerHTML=papers.map(p=>`<article class="publication"><div class="paper-venue"><strong>${p.venue.split(' ')[0]}</strong><time datetime="2026">2026</time></div><div class="paper-content"><h3 class="paper-title" lang="${language==='zh'?'zh-CN':'en'}">${p.url?`<a href="${p.url}" target="_blank" rel="noreferrer">${language==='zh'?chineseTitles[p.id]:p.title}</a>`:(language==='zh'?chineseTitles[p.id]:p.title)}</h3><p class="paper-authors" lang="en">${p.authors.replace('Boxiang Song','<strong>Boxiang Song</strong>')}</p><p class="paper-journal" lang="en">${p.publication}</p><div class="paper-links">${p.url?`<a href="${p.url}" target="_blank" rel="noreferrer">Paper</a>`:''}<button type="button" class="citation-button" data-cite="${p.id}" aria-label="${t.citation}: ${p.venue}">BibTeX</button>${p.status==='Accepted'?`<span class="paper-status">${t.accepted}</span>`:''}</div></div></article>`).join('');
}
function applyLanguage(){
 const t=translations[language];
 document.documentElement.lang=language==='zh'?'zh-CN':'en';
 document.title=t.title;
 document.querySelector('meta[name="description"]').content=t.description;
 document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=t[el.dataset.i18n];});
 document.querySelectorAll('[data-label]').forEach(el=>el.setAttribute('aria-label',t[el.dataset.label]));
 languageButton.textContent=language==='zh'?'English':'中文';
 languageButton.lang=language==='zh'?'en':'zh-CN';
 languageButton.setAttribute('aria-label',language==='zh'?'Switch to English':'切换到中文');
 document.getElementById('copy-status').textContent='';
 renderPapers();
}
applyLanguage();
languageButton.addEventListener('click',()=>{language=language==='zh'?'en':'zh';try{localStorage.setItem('bs-language',language);}catch{}applyLanguage();});
let activeCitation='';
document.getElementById('publication-list').addEventListener('click',event=>{
 const button=event.target.closest('[data-cite]');if(!button)return;
 const paper=papers.find(p=>p.id===button.dataset.cite);activeCitation=citation(paper);
 document.getElementById('citation-code').textContent=activeCitation;
 document.getElementById('copy-status').textContent='';dialog.showModal();
});
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
document.getElementById('copy-citation').addEventListener('click',async()=>{
 try{await navigator.clipboard.writeText(activeCitation);document.getElementById('copy-status').textContent=translations[language].copied;}
 catch{const range=document.createRange();range.selectNodeContents(document.getElementById('citation-code'));const selection=getSelection();selection.removeAllRanges();selection.addRange(range);document.getElementById('copy-status').textContent=translations[language].copyFallback;}
});


