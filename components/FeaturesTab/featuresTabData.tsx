import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "银行级安全支付保障体系",
    desc1: `采用多重加密技术和风控系统，确保每一笔交易的安全性。支持PCI DSS标准，提供端到端的数据保护，让企业和用户都能安心使用。`,
    desc2: `实时风险监控和智能反欺诈系统，7×24小时守护资金安全。支持多种身份验证方式，包括短信验证、指纹识别等，全方位保障交易安全。`,
    image: "/images/features/features-dark-01.jpg",
    imageDark: "/images/features/features-dark-01.jpg",
  },
  {
    id: "tabTwo",
    title: "智能数据分析与实时监控",
    desc1: `提供全面的交易数据分析和可视化报表，帮助企业深入了解业务状况。实时监控交易流水、成功率、异常情况等关键指标。`,
    desc2: `支持自定义数据维度分析，包括用户行为分析、支付渠道效果评估、财务对账等功能。通过大数据技术，为企业决策提供有力支撑。`,
    image: "/images/features/features-dark-02.jpg",
    imageDark: "/images/features/features-dark-02.jpg",
  },
  {
    id: "tabThree",
    title: "便捷API集成与快速部署",
    desc1: `提供完善的RESTful API接口和SDK开发包，支持多种编程语言。详细的技术文档和示例代码，让开发者能够快速集成支付功能。`,
    desc2: `支持沙箱环境测试，提供专业的技术支持团队。从接入到上线，全程协助企业完成支付系统的部署和优化，确保稳定运行。`,
    image: "/images/features/features-dark-03.jpg",
    imageDark: "/images/features/features-dark-03.jpg",
  },
];

export default featuresTabData;
