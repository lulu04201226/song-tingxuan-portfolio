import type { Metadata } from "next";
import { CaseStudy } from "@/components/case-study";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "eBay 跨境电商数据运营",
  description: "围绕店铺冷启动、商品元数据治理、LLM 提效与 SKU 级指标复盘的跨境电商项目。",
};

function EbayOperationsFlow() {
  const steps = [
    ["01", "商品信息规范", "标题、类目与多语种描述标准化"],
    ["02", "AI 辅助处理", "文案润色、标签提取与信息校对"],
    ["03", "质量校验", "平台规则、异常过滤与人工复核"],
    ["04", "经营复盘", "SKU、曝光、滞销、GMV 与广告 ROI"],
  ];
  return <figure className="chart-frame operations-flow"><figcaption><strong>商品数据运营闭环</strong><span>从数据底座到经营策略迭代</span></figcaption><div className="operations-flow-list">{steps.map(([index,title,copy])=><div key={index}><span>{index}</span><p><strong>{title}</strong><small>{copy}</small></p></div>)}</div><p className="chart-caption">现象：商品处理并非一次性上架任务；业务含义：规范、AI 提效、质量控制与经营复盘需要形成连续闭环。</p></figure>;
}

export default function Page() {
  return <CaseStudy project={getProject("ebay-operations")} charts={<EbayOperationsFlow/>}/>;
}
