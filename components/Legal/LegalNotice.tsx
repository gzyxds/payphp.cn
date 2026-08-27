/**
 * 法律声明内容组件
 * 注：本文件为模板文本，含【】占位符，上线前须替换为真实主体信息并由法律顾问复核。
 * 针对支付聚合平台特性，重点提示资质合规、禁止用途与免责边界。
 */
import { LegalPage, LegalSection } from "./LegalLayout";

const LegalNotice = () => {
  return (
    <LegalPage
      title="法律声明"
      intro="本声明适用于 PaYphp 网站（以下简称「本网站」）及其提供的支付相关服务。请您在访问与使用前仔细阅读。如您继续使用本网站，即视为已理解并同意本声明的全部内容。"
    >
      <LegalSection id="nature" title="一、网站性质与「按现状」声明">
        <p className="font-semibold text-black dark:text-white">
          重要声明：本项目（PaYphp）仅提供支付系统软件销售与支付接口的测试对接服务，不涉及资金清算、托管或结算，不对您使用本系统开展的任何业务及由此产生的任何后果承担法律责任。
        </p>
        <p>
          本网站所载内容（含文字、图片、代码、示例与说明）按「现状」提供，仅供一般参考。我们已尽力确保信息的准确性与完整性，但对其时效性、适用性及是否完全无误不作任何明示或默示保证。
        </p>
        <p>
          在适用法律允许的最大范围内，对于因使用或无法使用本网站信息所导致的任何直接或间接损失，我们不承担法律责任。
        </p>
      </LegalSection>

      <LegalSection id="ip" title="二、知识产权与商标">
        <p>
          本网站及其相关服务端程序、界面设计、文档、标识、商标（含「PaYphp」名称及 Logo）的知识产权归【运营主体全称】或相关权利人所有，受《著作权法》《商标法》等法律法规保护。
        </p>
        <p>
          未经书面授权，任何人不得擅自复制、修改、传播、反向工程或用于商业目的。开源或明确授权部分除外。
        </p>
      </LegalSection>

      <LegalSection id="accuracy" title="三、信息与链接的准确性">
        <p>
          本网站可能包含外部网站的链接（如支付宝、微信支付、QQ 钱包官方平台的说明文档）。我们不对外部网站内容、服务或交易的安全性、合法性负责，您通过链接产生的权利义务由该网站运营方承担。
        </p>
        <p>
          涉及费率、到账时间等具体业务参数，以您实际签署的服务协议及系统实时展示为准；本网站宣传内容不构成合同承诺。
        </p>
      </LegalSection>

      <LegalSection id="compliance" title="四、支付服务合规声明">
        <p>
          本网站提供聚合支付接入与技术服务。您理解并同意：
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            使用本服务开展资金收付，须确保您已取得所在地法律法规要求的相应资质（如《支付业务许可证》、增值电信业务经营许可证等），并独立承担合规责任；
          </li>
          <li>
            您须遵守反洗钱（AML）、反恐怖融资（CFT）及外汇管理等相关规定，配合必要的身份识别与可疑交易报送；
          </li>
          <li>
            我们依据风控规则与监管要求，有权对异常交易采取延迟结算、冻结或拒绝服务等风控措施，且不因此承担违约责任。
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="prohibited" title="五、禁止用途">
        <p>您不得利用本服务从事任何违法违规活动，包括但不限于：</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>赌博、私彩、色情、诈骗、非法集资、传销等违法行业或交易；</li>
          <li>洗钱、恐怖融资、逃税或规避外汇管制；</li>
          <li>刷单、套现、虚假交易等损害支付平台或他人利益的行为；</li>
          <li>侵犯他人知识产权或违反其他法律法规的行为。</li>
        </ul>
        <p>一经发现，我们有权立即终止服务并保留向有权机关报告的权利。</p>
      </LegalSection>

      <LegalSection id="forcemajeure" title="六、不可抗力">
        <p>
          对于因不可抗力（如自然灾害、战争、网络基础设施故障、政府行为、官方支付平台接口中断等）导致的中断或损失，我们在合理范围内免责。
        </p>
      </LegalSection>

      <LegalSection id="contact" title="七、联系我们">
        <ul className="list-disc space-y-2 pl-6">
          <li>联系邮箱：【legal@PaYphp.cn】</li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
};

export default LegalNotice;
