export type Metric = { value: string; label: string; note?: string };
export type ProjectCaseStudy = {
  slug: "ab-test" | "ai-product" | "user-behavior";
  eyebrow: string; title: string; question: string; summary: string; decision: string;
  metrics: Metric[]; methods: string[]; insights: string[]; actions: string[]; limitations: string[];
  github: string; feishu: string;
  reportEvidence: { label:string; title:string; image:string; alt:string; takeaway:string; points:string[]; note:string };
};

export const projects: ProjectCaseStudy[] = [
  { slug:"ab-test", eyebrow:"实验设计与统计推断", title:"网约车优惠券 A/B 测试", question:"提高优惠券力度，是否值得推广？", summary:"用日期级配对结构剥离大盘波动，同时评估增长、补贴效率与体验护栏。", decision:"不建议直接推广当前优惠券路径；应固定处理强度并开展第二轮受控实验。", metrics:[{value:"29 天",label:"完整日期配对"},{value:"-1.26%",label:"实验组日均 GMV"},{value:"-1.63%",label:"实验组客单价"},{value:"p=0.0002",label:"GMV 配对检验"}], methods:["日期级配对 t 检验","Wilcoxon 与 Bootstrap 稳健性检查","功效与最小可检测效应（MDE）","增量经济性与体验护栏"], insights:["独立样本检验得到 p=0.9387；按日期配对后，共同波动被消除，负向 GMV 效果显现。","订单量基本持平，GMV 损失主要来自客单价下降。","完成率提高约 0.20 个百分点、取消率降低约 0.21 个百分点，但不足以抵消商业指标恶化。"], actions:["停止直接放量，以 GMV 或净增量价值定义主要成功指标。","固定券额差，保留用户 ID 稳定分流并补齐曝光、领券和核销链路。","预先注册样本量、停止规则与时间异质性分析。"], limitations:["数据为日期级汇总，无法核验随机化质量、SRM 与重复曝光。","券额随时间变化，结果代表当前策略路径而非固定券额增量的纯因果效应。","29 天数据不能外推长期留存与利润效果。"], github:"https://github.com/lulu04201226/coupon-ab-test", feishu:"#feishu-preview", reportEvidence:{label:"REPORT CUT / 01",title:"正确的分析结构，会改变决策结论",image:"/report-insights/ab-method-reversal.png",alt:"独立样本检验与按日期配对检验的显著性比较",takeaway:"忽略日期配对时，跨日期波动会掩盖组间差异；匹配实验结构后，GMV 的负向效果才从噪声中显现。",points:["Welch 独立样本检验 p=0.9387，容易得到“没有差异”的判断。","按日期配对后 p=0.0002，且日均 GMV 差值为 -6,111。"],note:"精选自飞书项目报告 · 检验方法对显著性判断的影响"} },
  { slug:"ai-product", eyebrow:"AI 产品与用户偏好", title:"AI 对话产品用户需求与模型偏好", question:"用户用 AI 做什么，偏好怎样的回答？", summary:"构建 Hybrid Prompt 分类和回答质量分析框架，为任务入口、回答结构与模型路由提供依据。", decision:"知识问答优先保障高能力模型；成本敏感的常规写作可优先尝试低成本模型。", metrics:[{value:"10,000",label:"真实对战对话"},{value:"6 类",label:"Prompt 需求"},{value:"7,075",label:"明确偏好样本"},{value:"54.55%",label:"知识问答占比"}], methods:["规则 + LLM Hybrid 分类","回答可解释特征工程","分任务模型胜率分析","分层抽样与最低样本量门槛"], insights:["问答是最主要的产品入口；写作与编程构成第二梯队。","获胜回答平均更长，更常使用列表和代码块，且更少出现拒答表达。","gpt-4 跨任务稳定领先；与 gpt-3.5-turbo 的差距在写作任务最小。"], actions:["问答默认采用“结论—依据—下一步”结构，并提供来源核验入口。","按任务类型与难度分层路由，复杂请求再升级模型。","提供本地化写作模板，并用线上 A/B 测试验证回答结构。"], limitations:["偏好特征属于观察性关联，不能解释为因果效果。","数据主要来自 2023 年模型生态，不能代表当前模型水平。","胜率未校正对手强弱、成本与时延。"], github:"https://github.com/lulu04201226/ai-chatbot-user-preference-analysis", feishu:"#feishu-preview", reportEvidence:{label:"REPORT CUT / 02",title:"模型能力差距，需要按任务类型解释",image:"/report-insights/ai-model-task-heatmap.png",alt:"五个高出场量模型在问答、写作和编程任务中的胜率热力图",takeaway:"gpt-4 跨任务稳定领先，但写作任务的能力差距更小，因此比知识问答更适合尝试成本路由。",points:["问答占全部需求 54.55%，是最核心的产品入口。","gpt-3.5-turbo 与 gpt-4 的差距：写作 11.3pct，问答 16.4pct。"],note:"精选自飞书项目报告 · Top 5 模型×任务类型胜率"} },
  { slug:"user-behavior", eyebrow:"漏斗诊断与增长策略", title:"电商用户行为漏斗与转化增长", question:"现有流量下，最大的增长杠杆在哪里？", summary:"从匿名访问记录中定位关键流失环节，并通过用户分层和渠道结构标准化确定实验优先级。", decision:"优先验证商品页到支付页组合优化；新用户与 SEO / Ads 纳入首轮预设分层。", metrics:[{value:"100,000",label:"匿名访问记录"},{value:"2.40%",label:"整体最终转化率"},{value:"13.83%",label:"商品页 → 支付页"},{value:"+174",label:"提升 1pct 的理论确认量"}], methods:["五级漏斗与绝对流失诊断","新老用户分环节对比","用户类型 × 设备结构标准化","增量情景与实验优先级"], insights:["商品页到支付页流失 42,756 条记录，是 P0 增长杠杆。","新用户最终转化率为 1.47%，低于老用户的 2.83%，差距主要在商品页之后扩大。","Direct 原始转化率为 3.03%，结构标准化后为 2.41%，渠道优势明显收窄。"], actions:["开展商品信息、优惠表达、信任元素和购买入口的组合实验。","为新用户验证首购权益、注册成本、支付指引与保障信息。","SEO / Ads 同步检查广告承诺与落地页、商品页的一致性。"], limitations:["访问记录不等于独立用户，无法计算留存、复购和访问频次。","分群与渠道结果是观察性关系，不代表因果。","理论增量假设下游转化不变，只用于机会规模判断。"], github:"https://github.com/lulu04201226/ecommerce-funnel-growth-analysis", feishu:"#feishu-preview", reportEvidence:{label:"REPORT CUT / 03",title:"渠道优势，需要先排除用户结构差异",image:"/report-insights/ecommerce-channel-standardized.png",alt:"Direct、SEO 和 Ads 渠道原始转化率与结构标准化转化率对比",takeaway:"Direct 的原始优势部分来自老用户占比更高；统一用户类型与设备结构后，优势明显收窄。",points:["Direct 原始转化率 3.03%，结构标准化后为 2.41%。","商品页→支付页转化率仅 13.83%，贡献 42,756 条绝对流失。"],note:"精选自飞书项目报告 · 渠道原始值与结构标准化对比"} }
];

export const getProject = (slug: ProjectCaseStudy["slug"]) => projects.find(p => p.slug === slug)!;

export const projectCardDetails: Record<ProjectCaseStudy["slug"], {
  goal: string;
  role: string;
  methods: string[];
  conclusion: string;
  interpretation: string;
  deliverable: string;
}> = {
  "ab-test": {
    goal: "判断提高优惠券力度能否拉动订单与 GMV，并验证新增收益能否覆盖补贴。",
    role: "独立负责｜实验评估、统计检验与策略输出",
    methods: ["29 天日期级配对 A/B 实验", "配对 t 检验", "Wilcoxon / Bootstrap 稳健性检查"],
    conclusion: "日均 GMV -1.26%（p=0.0002），客单价 -1.63%，订单量基本持平。",
    interpretation: "活动并非没有影响；更高补贴未带来订单增量，反而压低每笔订单贡献，导致收益被侵蚀。",
    deliverable: "完成实验评估报告，并提出固定券额、稳定分流与分层小额券定向投放的第二轮实验方案。",
  },
  "ai-product": {
    goal: "识别用户使用 AI 的核心任务、偏好怎样的回答，并为不同任务选择合适的模型。",
    role: "独立负责｜需求分类、偏好分析与产品策略设计",
    methods: ["规则 + LLM Hybrid 分类", "回答特征工程", "分任务模型胜率分析"],
    conclusion: "问答占 54.55%；获胜回答的列表使用率高 9.26pct；gpt-4 与 gpt-3.5-turbo 在写作场景的差距最小，为 11.3pct。",
    interpretation: "用户首先把 AI 当作问题解决工具；清晰结构与少拒答更受偏好，常规写作比知识问答更适合低成本模型路由。",
    deliverable: "完成需求与模型偏好报告，输出分任务回答模板、多语言写作入口和分层模型路由方案。",
  },
  "user-behavior": {
    goal: "在不增加流量的前提下定位最大转化损失，并确定最值得优先验证的人群与渠道机会。",
    role: "独立负责｜漏斗诊断、用户分层与增长实验规划",
    methods: ["五级漏斗与绝对流失诊断", "新老用户分环节对比", "用户类型 × 设备结构标准化"],
    conclusion: "商品页→支付页转化率仅 13.83%，流失 42,756 条；该环节提升 1pct，理论可新增约 174 条确认记录。",
    interpretation: "增长瓶颈不在获客，而在商品页后的购买决策；Direct 的原始优势也被老用户占比放大，不能直接归因于渠道质量。",
    deliverable: "完成漏斗增长报告，输出 P0 商品页组合实验、P1 新用户首购路径及 SEO / Ads 承接优化方案。",
  },
};
