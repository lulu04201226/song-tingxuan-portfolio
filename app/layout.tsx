import type { Metadata } from "next";
import "./globals.css";
import { BackToTop, Footer, Header } from "@/components/site";

export const metadata:Metadata={title:{default:"宋亭萱｜数据分析作品集",template:"%s｜宋亭萱"},description:"数据分析与产品分析作品集：A/B 测试、AI 产品分析与电商用户行为增长分析。",openGraph:{title:"宋亭萱｜数据分析作品集",description:"用数据回答业务问题，把洞察转化为行动。",type:"website",locale:"zh_CN"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body><a className="skip-link" href="#main-content">跳到主要内容</a><div className="shell"><Header/><div id="main-content">{children}</div><Footer/></div><BackToTop/></body></html>}
