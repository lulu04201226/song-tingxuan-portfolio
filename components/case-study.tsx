import Link from "next/link";
import { ProjectCaseStudy, projects } from "@/data/projects";
import { GithubButton, SectionTitle } from "./site";

export function CaseStudy({project,charts}:{project:ProjectCaseStudy,charts:React.ReactNode}){
 const current=projects.findIndex(p=>p.slug===project.slug), next=projects[(current+1)%projects.length];
 return <main id="top"><section className="case-hero"><div className="case-kicker"><span className="eyebrow">{project.eyebrow}</span><span>CASE / {String(current+1).padStart(2,"0")}</span></div><h1>{project.title}</h1><div className="case-hero-bottom"><div className="case-intro"><p className="lead">{project.question}</p><p className="case-summary">{project.summary}</p><GithubButton href={project.github}/></div><div className="decision-card"><span>决策结论</span><p>{project.decision}</p></div></div></section>
 <nav className="case-nav" aria-label="案例页目录"><a href="#overview">项目速览</a><a href="#evidence">关键证据</a><a href="#method">分析方法</a><a href="#action">行动建议</a><a href="#limits">分析边界</a></nav>
 <section id="overview" className="content-section"><SectionTitle kicker="01 / OVERVIEW" title="用指标快速理解项目"/><div className="metric-grid">{project.metrics.map(m=><div className="metric-card" key={m.label}><strong>{m.value}</strong><span>{m.label}</span>{m.note&&<small>{m.note}</small>}</div>)}</div></section>
 <section id="evidence" className="content-section"><SectionTitle kicker="02 / EVIDENCE" title="关键数据证据" copy="每张图都保留口径、样本量和可执行结论。"/><div className="charts-grid">{charts}</div><div className="insight-list">{project.insights.map((x,i)=><article key={x}><span>0{i+1}</span><p>{x}</p></article>)}</div></section>
 <section id="method" className="content-section split-section"><SectionTitle kicker="03 / METHOD" title="分析方法" copy="方法服务于决策，而不是停留在工具清单。"/><div className="method-list">{project.methods.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><p>{x}</p></div>)}</div></section>
 <section id="action" className="content-section"><SectionTitle kicker="04 / ACTION" title="从洞察到行动"/><div className="action-grid">{project.actions.map((x,i)=><article key={x}><span>P{i}</span><p>{x}</p></article>)}</div></section>
 <section id="limits" className="content-section limit-section"><SectionTitle kicker="05 / BOUNDARY" title="分析边界"/><ul>{project.limitations.map(x=><li key={x}>{x}</li>)}</ul></section>
 <section className="next-project"><span>下一个案例</span><Link href={`/projects/${next.slug}`}><strong>{next.title}</strong><span aria-hidden>→</span></Link></section></main>
}
