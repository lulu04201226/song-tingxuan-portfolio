import type { Metadata } from "next";
import { AbLiftChart, AbMethodChart } from "@/components/charts";
import { CaseStudy } from "@/components/case-study";
import { getProject } from "@/data/projects";
export const metadata:Metadata={title:"网约车优惠券 A/B 测试",description:"使用日期级配对分析评估优惠券策略的增长、经济性与体验影响。"};
export default function Page(){return <CaseStudy project={getProject("ab-test")} charts={<><AbLiftChart/><AbMethodChart/></>}/>}
