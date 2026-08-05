import type { Metadata } from "next";
import { AiFeatureChart, AiTaskChart, ModelChart } from "@/components/charts";
import { CaseStudy } from "@/components/case-study";
import { getProject } from "@/data/projects";
export const metadata:Metadata={title:"AI 对话产品用户需求与模型偏好",description:"基于真实对战对话分析用户需求、回答偏好与模型路由空间。"};
export default function Page(){return <CaseStudy project={getProject("ai-product")} charts={<><AiTaskChart/><AiFeatureChart/><ModelChart/></>}/>}
