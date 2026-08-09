import Link from "next/link";
import { ProjectCaseStudy, projects } from "@/data/projects";
import { FeishuButton, GithubButton, SectionTitle } from "./site";

const publicFeishuLinks: Record<ProjectCaseStudy["slug"], string> = {
 "ab-test": "https://my.feishu.cn/wiki/Wl2IwREdhijsppkqENzcAsYXnXb",
 "ai-product": "https://my.feishu.cn/wiki/MF9Nw2eTniNkYRkdGfGcu6Venhd",
 "user-behavior": "https://my.feishu.cn/wiki/Lelawexidi1cr7kH7j3cpkxQnIu",
};

const methodApplications: Record<ProjectCaseStudy["slug"], string[]> = {
 "ab-test": [
  "将同一天的实验组与对照组一一配对，消除共同的大盘波动。Welch 检验得到 p=0.9387，而日期级配对后 p=0.0002，识别出日均 GMV 约 -6,111 的负向差异。",
  "在配对 t 检验之外，用 Wilcoxon 符号秩检验与 20,000 次 Bootstrap 复核。两种稳健性检查都支持负向结论，同时揭示效果主要集中在实验后半程。",
  "以 29 对日期、双侧 α=5% 和目标功效 80% 估算，GMV 的最小可检测效应约为日均 0.86%。观测到的 1.26% 下降超过该门槛，不能简单归因于样本不足。",
  "把 GMV、净增量价值作为主要决策指标，同时监控完成率和取消率。体验指标虽小幅改善，但不足以抵消 GMV、客单价与补贴效率的恶化。",
 ],
 "ai-product": [
  "English 样本先使用可解释规则分类，非 English 样本交给 gpt-4o-mini。仅对规则覆盖薄弱的 11.1% 样本使用模型，将非 English 的“其他”占比从约 40% 降到 6.85%。",
  "把回答长度、列表、代码块和拒答表达等转成可比较特征，并只在 7,075 条明确胜负样本中分析。结果用于提出产品假设，不把观察性关联解释成因果。",
  "按问答、写作和编程分别计算模型胜率，并要求每个模型—任务组合至少 30 场。gpt-4 跨任务领先，但写作差距最小，为分场景成本路由提供依据。",
  "任务占比使用 10,000 条全量样本；偏好分析只使用明确胜负样本；总体模型胜率要求至少 50 场。用分层口径和最低样本门槛减少小样本误导。",
 ],
 "user-behavior": [
  "构建首页—列表页—商品页—支付页—确认页五级漏斗，同时比较环节转化率与绝对流失量，定位商品页到支付页的 42,756 条流失为 P0 杠杆。",
  "逐环节比较新老用户，而不是只看最终转化率。结果显示前两步差距较小，差异主要在商品页之后扩大，因此把新用户设为首轮实验的预设分层。",
  "以全体样本的“用户类型 × 设备”联合分布作为统一权重，重新计算渠道转化率。Direct 从原始 3.03% 收窄到标准化后的 2.41%，避免把用户构成误当成渠道能力。",
  "用理论新增确认量衡量机会规模，再结合可实验性排序。商品页到支付页每提升 1 个百分点，理论上增加约 174 条确认记录，因此优先进入组合实验。",
 ],
};

const caseDetails: Record<ProjectCaseStudy["slug"], {
 objective:string; role:string; analysis:string; conclusions:string[];
 delivery:string; actions:{priority:string;title:string;copy:string;meta?:string}[]; limitations:string[];
}> = {
 "user-behavior": {
  objective:"在不新增流量的前提下，定位电商转化流失瓶颈，输出可落地的分层实验增长方案，并量化各优化环节的理论收益。",
  role:"独立负责｜问题定义、数据清洗、漏斗诊断、分层分析、收益测算与实验规划",
  analysis:"搭建首页—列表页—商品页—支付页—确认页五级漏斗，并从新老用户、渠道校正、年龄、性别与访问深度等维度拆解转化差异。",
  conclusions:[
   "整体最终转化率仅 2.40%。商品页→支付页转化率为 13.83%，流失 42,756 条访问、流失率 86.17%；该环节每提升 1pct，理论新增确认记录约 7.23%。",
   "新用户最终转化率为 1.47%，老用户为 2.83%；差距集中在后半链路，其中支付页→确认页相差 13.25pct，说明首购路径需要单独设计。",
   "Direct 原始转化率为 3.03%，按用户类型 × 设备统一结构校正后仅 2.41%；高转化部分来自老用户占比高，不能直接归因于渠道质量。",
  ],
  delivery:"交付完整漏斗增长报告、机会规模测算、P0—P2 实验路线图及可复现分析代码。",
  actions:[
   {priority:"P0",title:"商品页组合优化实验",copy:"围绕商品信息、优惠表达、信任元素、规格选择与结算入口开展组合实验。",meta:"4 周排期｜协同产品、设计、前端与数据"},
   {priority:"P1",title:"新用户与外部渠道承接",copy:"验证首购权益、注册与支付指引；同步优化 SEO / Ads 创意承诺与落地页的一致性。"},
   {priority:"P2",title:"移动端预设分层",copy:"随主实验同步观察终端差异，确认存在稳定效果后再单独立项。"},
  ],
  limitations:["缺少独立用户 ID、会话 ID 与时间戳，无法计算留存、复购和访问频次。","缺少订单毛利与投放成本，只能测算确认记录增量，不能核算完整 ROI。","分层与渠道差异属于观察性相关，具体原因与收益必须通过线上随机实验验证。"],
 },
 "ai-product": {
  objective:"拆解 AI 用户的核心使用需求与高好感回答特征，量化主流模型的分任务表现，并输出 Prompt 模板与分层模型路由策略。",
  role:"独立负责｜分类体系设计、Python 分析、偏好建模、模型比较与产品策略输出",
  analysis:"采用规则 + LLM 混合分类将 Prompt 划分为 6 类；筛选 7,075 条明确偏好样本，对比获胜与落败回答特征，并测算 Top 5 模型的分任务胜率。",
  conclusions:[
   "知识问答占 54.55%，写作占 16.83%，编程占 13.51%；非英文用户写作需求更高，英文用户的编程需求更突出。",
   "获胜回答平均更长，列表与代码块占比更高、拒答表达更少；该方向在问答、写作与编程中一致，但仍是关联而非因果。",
   "gpt-4 全任务稳定领先；gpt-3.5-turbo 与其在写作任务的差距最小、知识问答差距最大，支持按任务类型分层路由。",
  ],
  delivery:"交付用户需求与模型偏好报告、可复现 Python 代码，以及回答模板、多语言入口和分层路由产品方案。",
  actions:[
   {priority:"P0",title:"问答结构与模型路由",copy:"问答默认结论前置，并按任务类型与难度调度模型；复杂知识问答优先保障高能力模型。"},
   {priority:"P1",title:"编程体验与标准模板",copy:"补充代码注释、最小可运行示例和一键复制；按问答、写作、编程提供标准回答模板。"},
   {priority:"P2",title:"多语言与拒答替代",copy:"建设本地化写作模板；将生硬拒答改为边界说明、合规替代方案与安全改写入口。"},
  ],
  limitations:["数据主要来自较早的模型生态，不能直接代表当前模型水平。","非英文、数学与翻译样本量偏少，细分类结论需谨慎外推。","回答特征与偏好是观察性关联，产品效果仍需控制变量或 A/B 测试验证。"],
 },
 "ab-test": {
  objective:"验证“加大优惠券力度”能否产生可持续商业收益，同时兼顾 GMV、补贴成本和用户体验，判断策略是否适合全量推广。",
  role:"独立负责｜实验结构识别、统计检验、经济性评估、稳健性分析与决策建议",
  analysis:"采用日期配对 t 检验消除大盘周期波动，比较 GMV、客单价、补贴成本与体验指标，并用 Bootstrap、Wilcoxon、功效及 MDE 做稳健性校验。",
  conclusions:[
   "实验组日均 GMV 下降 1.26%（p=0.0002）、客单价下降 1.63%，补贴成本上升，绝对 ROI 下滑 2.41%；请求量与完成订单均无显著增量。",
   "完成率提高 0.20pct、取消率降低 0.21pct，但体验改善不足以抵消营收与补贴效率恶化，因此不建议直接放量。",
   "忽略日期配对会误判为两组无差异；配对分析才能识别负向效果。损失主要集中在实验后半段，提示处理强度或用户结构存在时间异质性。",
  ],
  delivery:"交付实验评估报告、统计检验与稳健性证据，并设计固定券额差、稳定分流和完整埋点的第二轮实验方案。",
  actions:[
   {priority:"P0",title:"停止当前路径直接放量",copy:"以 GMV 或净增量收益作为核心上线门槛，不以体验指标的小幅改善替代商业结果。"},
   {priority:"P1",title:"重做第二轮受控实验",copy:"固定券额差、采用用户 ID 稳定分流，补齐曝光、领券、核销和订单链路。"},
   {priority:"P2",title:"补全长期价值观测",copy:"新增用户分层、毛利、复购和时间异质性指标，并预注册样本量与停止规则。"},
  ],
  limitations:["仅有日期级汇总数据，缺少用户级分流日志，无法核验随机化质量、SRM 与重复曝光。","实验仅覆盖 29 天，不能外推长期留存、复购与利润效果。","ROI 只包含 GMV 与优惠券成本，未纳入平台抽佣、司机激励等完整经营成本。"],
 },
};

export function CaseStudy({project,charts}:{project:ProjectCaseStudy,charts:React.ReactNode}){
 const current=projects.findIndex(p=>p.slug===project.slug), next=projects[(current+1)%projects.length], detail=caseDetails[project.slug];
 return <main id="top"><section className="case-hero"><div className="case-kicker"><span className="eyebrow">{project.eyebrow}</span><span>CASE / {String(current+1).padStart(2,"0")}</span></div><h1>{project.title}</h1><div className="case-hero-bottom"><div className="case-intro"><p className="lead">{project.question}</p><p className="case-summary">{project.summary}</p><div className="case-actions"><GithubButton href={project.github}/><FeishuButton href={publicFeishuLinks[project.slug]}/></div></div><div className="decision-card"><span>决策结论</span><p>{project.decision}</p></div></div></section>
 <nav className="case-nav" aria-label="案例页目录"><a href="#overview">项目速览</a><a href="#evidence">关键证据</a><a href="#method">分析方法</a><a href="#action">行动建议</a><a href="#limits">分析边界</a></nav>
 <section id="overview" className="content-section reveal-section"><SectionTitle kicker="01 / OVERVIEW" title="用指标快速理解项目"/><div className="case-brief"><article><span>业务目标</span><p>{detail.objective}</p></article><article><span>我的角色</span><p>{detail.role}</p></article><article><span>核心分析动作</span><p>{detail.analysis}</p></article><article><span>最终交付</span><p>{detail.delivery}</p></article></div><div className="metric-grid">{project.metrics.map(m=><div className="metric-card" key={m.label}><strong>{m.value}</strong><span>{m.label}</span>{m.note&&<small>{m.note}</small>}</div>)}</div></section>
 <section id="evidence" className="content-section reveal-section"><SectionTitle kicker="02 / EVIDENCE" title="关键数据证据" copy="图表与结论一一对应：先看数字，再看它对业务决策意味着什么。"/><div className="charts-grid">{charts}</div><div className="evidence-enrichment"><figure className="evidence-figure"><img src={project.reportEvidence.image} alt={project.reportEvidence.alt} loading="lazy"/><figcaption>{project.reportEvidence.alt}</figcaption></figure><div className="evidence-context"><h3>{project.reportEvidence.title}</h3><p>{project.reportEvidence.takeaway}</p><ul>{project.reportEvidence.points.map(point=><li key={point}>{point}</li>)}</ul></div></div><div className="insight-list">{detail.conclusions.map((x,i)=><article key={x}><span>0{i+1}</span><p>{x}</p></article>)}</div></section>
 <section id="method" className="content-section split-section reveal-section"><SectionTitle kicker="03 / METHOD" title="分析方法" copy="点击卡片，查看方法如何服务于这个项目的具体决策。"/><div className="method-list">{project.methods.map((x,i)=><details className="method-card" key={x}><summary><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong><i aria-hidden>＋</i></summary><div className="method-page"><p>{methodApplications[project.slug][i]}</p></div></details>)}</div></section>
 <section id="action" className="content-section reveal-section density-light"><SectionTitle kicker="04 / ACTION" title="从洞察到行动" copy="按优先级安排资源，让结论进入可验证的落地路径。"/><div className="action-grid">{detail.actions.map(action=><article key={action.priority}><span>{action.priority}</span><h3>{action.title}</h3><p>{action.copy}</p>{action.meta&&<small>{action.meta}</small>}</article>)}</div></section>
 <section id="limits" className="content-section limit-section reveal-section density-light"><SectionTitle kicker="05 / BOUNDARY" title="分析边界"/><ul>{detail.limitations.map(x=><li key={x}>{x}</li>)}</ul></section>
 <section className="next-project reveal-section"><span>下一个案例</span><Link href={`/projects/${next.slug}`}><strong>{next.title}</strong><span aria-hidden>→</span></Link></section></main>
}
