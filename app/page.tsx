import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { ProjectCard, SectionTitle } from "@/components/site";
import { projects } from "@/data/projects";

const skills=["漏斗与增长分析","A/B 测试","统计推断","用户研究","AI 产品分析","Python / SQL / 可视化"];
export default function Home(){return <main id="top"><section className="home-hero"><div><span className="eyebrow">DATA ANALYST · PRODUCT ANALYST</span><h1>宋亭萱</h1><p className="hero-line">用数据回答业务问题，<br/>把洞察转化为行动。</p><Link className="hero-link" href="#projects">浏览项目 <ArrowDownIcon/></Link></div><div className="hero-note"><span>作品集 / 2026</span><p>聚焦实验设计、用户行为与 AI 产品，通过清晰的分析框架支持产品和增长决策。</p></div></section>
<section id="projects" className="home-section"><SectionTitle kicker="SELECTED WORK" title="三个项目，三种决策场景" copy="从实验评估、AI 用户偏好到电商漏斗诊断，展示完整的问题定义、分析方法与落地建议。"/><div className="project-grid">{projects.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div></section>
<section id="skills" className="home-section skills-section"><SectionTitle kicker="CAPABILITIES" title="分析能力" copy="不以工具为终点，以可靠结论和可验证行动为目标。"/><div className="skill-grid">{skills.map((s,i)=><div key={s}><span>{String(i+1).padStart(2,"0")}</span><p>{s}</p></div>)}</div></section>
<section className="closing"><span>观点</span><blockquote>“好的分析，不只是解释发生了什么，<br/>还要说明下一步值得做什么。”</blockquote></section></main>}
