import type { Metadata } from "next";
import { ChannelChart, FunnelChart, UserStageChart } from "@/components/charts";
import { CaseStudy } from "@/components/case-study";
import { getProject } from "@/data/projects";
export const metadata:Metadata={title:"电商用户行为漏斗与转化增长",description:"从十万条匿名访问记录中定位漏斗瓶颈、重点人群与渠道机会。"};
export default function Page(){return <CaseStudy project={getProject("user-behavior")} charts={<><FunnelChart/><UserStageChart/><ChannelChart/></>}/>}
