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

export function CaseStudy({project,charts}:{project:ProjectCaseStudy,charts:React.ReactNode}){
 const current=projects.findIndex(p=>p.slug===project.slug), next=projects[(current+1)%projects.length];
 return <main id="top"><section className="case-hero"><div className="case-kicker"><span className="eyebrow">{project.eyebrow}</span><span>CASE / {String(current+1).padStart(2,"0")}</span></div><h1>{project.title}</h1><div className="case-hero-bottom"><div className="case-intro"><p className="lead">{project.question}</p><p className="case-summary">{project.summary}</p><div className="case-actions"><GithubButton href={project.github}/><FeishuButton href={publicFeishuLinks[project.slug]}/></div></div><div className="decision-card"><span>决策结论</span><p>{project.decision}</p></div></div></section>
 <nav className="case-nav" aria-label="案例页目录"><a href="#overview">项目速览</a><a href="#evidence">关键证据</a><a href="#method">分析方法</a><a href="#action">行动建议</a><a href="#limits">分析边界</a></nav>
 <section id="overview" className="content-section reveal-section"><SectionTitle kicker="01 / OVERVIEW" title="用指标快速理解项目"/><div className="metric-grid">{project.metrics.map(m=><div className="metric-card" key={m.label}><strong>{m.value}</strong><span>{m.label}</span>{m.note&&<small>{m.note}</small>}</div>)}</div></section>
 <section id="evidence" className="content-section reveal-section"><SectionTitle kicker="02 / EVIDENCE" title="关键数据证据" copy="每张图都保留口径、样本量和可执行结论。"/><div className="charts-grid">{charts}</div><div className="evidence-enrichment"><figure className="evidence-figure"><img src={project.reportEvidence.image} alt={project.reportEvidence.alt} loading="lazy"/><figcaption>{project.reportEvidence.alt}</figcaption></figure><div className="evidence-context"><h3>{project.reportEvidence.title}</h3><p>{project.reportEvidence.takeaway}</p><ul>{project.reportEvidence.points.map(point=><li key={point}>{point}</li>)}</ul></div></div><div className="insight-list">{project.insights.map((x,i)=><article key={x}><span>0{i+1}</span><p>{x}</p></article>)}</div></section>
 <section id="method" className="content-section split-section reveal-section"><SectionTitle kicker="03 / METHOD" title="分析方法" copy="点击卡片，查看方法如何服务于这个项目的具体决策。"/><div className="method-list">{project.methods.map((x,i)=><details className="method-card" key={x}><summary><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong><i aria-hidden>＋</i></summary><div className="method-page"><p>{methodApplications[project.slug][i]}</p></div></details>)}</div></section>
 <section id="action" className="content-section reveal-section density-light"><SectionTitle kicker="04 / ACTION" title="从洞察到行动"/><div className="action-grid">{project.actions.map((x,i)=><article key={x}><span>P{i}</span><p>{x}</p></article>)}</div></section>
 <section id="limits" className="content-section limit-section reveal-section density-light"><SectionTitle kicker="05 / BOUNDARY" title="分析边界"/><ul>{project.limitations.map(x=><li key={x}>{x}</li>)}</ul></section>
 <section className="next-project reveal-section"><span>下一个案例</span><Link href={`/projects/${next.slug}`}><strong>{next.title}</strong><span aria-hidden>→</span></Link></section></main>
}
