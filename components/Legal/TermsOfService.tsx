/**
 * 服务条款（商户服务条款）内容组件
 * 参考用户提供的《商户服务条款》通用范本结构重写，并结合本项目实际业务进行适配：
 * 本项目（PaYphp）仅提供支付系统软件销售与支付接口的测试对接服务，仅对接支付宝、微信支付、QQ 钱包官方接口并支持个人收款码模式，
 * 不涉及资金清算、托管或结算，不接入任何第三方支付通道。范本中「结算/备付金/手续费/二级商户清算」等持牌支付机构条款已相应改写。
 * 注：本文件为模板文本，含【】占位符，上线前须替换为真实主体信息并由法律顾问复核。
 */
import { LegalPage, LegalSection } from "./LegalLayout";

const TermsOfService = () => {
  return (
    <LegalPage
      title="服务条款"
      intro={
        <>
          <p className="font-semibold text-black dark:text-white">
            特别提示：本协议由 PaYphp 系统（以下简称「我们」）与您共同签订，具有合同法律效力。请您使用本支付系统前，先认真阅读本商户服务条款。PaYphp
            系统有权随时更新条款，请您严格遵守本服务条款的约定；注册商户后，即默认代表您已同意本服务条款。
          </p>
          <p className="mt-3">
            请您务必审慎阅读并充分理解各条款内容，特别是免除或者限制责任的条款（可能以加粗字体显示，您应重点阅读）。除非您已阅读并接受本协议所有条款，否则您无权使用本服务。您使用本服务即视为您已阅读并同意受本协议的约束。如您对本协议有任何疑问的，应向客服咨询。
          </p>
          <p className="mt-3">
            重要声明：本项目（PaYphp）仅提供支付系统软件销售与支付接口的测试对接服务，不涉及资金清算、托管或结算，不对您使用本系统开展的任何业务及由此产生的任何后果承担法律责任。
          </p>
        </>
      }
    >
      <LegalSection id="def" title="一、定义">
        <p>如无特别说明，下列术语在本协议中的定义为：</p>
        <ul className="list-decimal space-y-2 pl-6">
          <li>
            <strong className="font-semibold text-black dark:text-white">1.1 商户号</strong>
            ：指您凭以登录、操作商户平台的账号。您成功申请商户号后，PaYphp
            系统将向您在本协议中载明的联系邮箱发送电子邮件，告知您的商户平台登录账号及初始密码；您可在商户平台中修改该初始密码，亦可根据需要为登录账号设置对应的商户密钥，用来查询和操作您的 PaYphp 系统商户号。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">1.2 商户密钥</strong>
            ：指您凭以登录、操作商户平台的账号密码及 API Key 等凭证。您应妥善保管，不得出租、出借、转让或泄露给第三方。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">1.3 结算</strong>
            ：指用户购买您的商品或服务后，由您自行对接的官方支付接口（支付宝、微信支付、QQ 钱包）或其绑定的本人收款账户完成资金入账的行为。PaYphp
            系统仅提供软件与对接能力，不直接记账、托管或结算资金。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">1.4 提现</strong>
            ：指由对应官方支付平台或您本人的收款账户，依据其自身规则将资金转入您指定合法收款账户的行为，相关时限以官方平台规则为准。
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="scope" title="二、服务内容">
        <p>
          <strong className="font-semibold text-black dark:text-white">2.1 本服务的场景和功能</strong>
          ：PaYphp 系统为您提供的服务为支付系统软件及支付接口的测试对接，即当您经营的商品或服务需要收款时，可通过本系统调用您自行配置的支付宝、微信支付、QQ 钱包官方接口或个人收款码完成交易闭环。本服务的具体运用包括 WAP 支付、H5 支付等。
        </p>
        <p>
          <strong className="font-semibold text-black dark:text-white">2.2 服务限制</strong>
          ：本服务仅能用于您在商户平台申报并经核准的商品或服务，且每笔订单不能超过 PaYphp
          系统规定的限额。您了解并同意 PaYphp
          系统有权根据您经营的商品或服务类型，以及您经营活动的风险状况调整您的交易额度或暂停服务。
        </p>
      </LegalSection>

      <LegalSection id="our-rights" title="三、PaYphp 系统的权利和义务">
        <ul className="list-decimal space-y-2 pl-6">
          <li>
            <strong className="font-semibold text-black dark:text-white">3.1 支付系统建设</strong>
            ：PaYphp 系统负责其软件产品的建设、运行和管理，并确保该系统的安全性与可用性。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">3.2 交易查询</strong>
            ：PaYphp 系统设立查询接口，为您提供服务信息查询与交易记录查询能力（交易最终状态以官方支付平台为准）。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">3.3 支付指令校验</strong>
            ：PaYphp 系统依据您的商户平台登录账号、登录密码及商户密钥来校验您支付指令的真实性、有效性。当校验均通过时，即视为系您本人操作，PaYphp 系统无需校验其他信息即可执行相应指令。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">3.4 交易纠纷处理</strong>
            ：PaYphp 系统仅为您提供支付系统软件与对接能力，您与用户或其他主体之间的交易纠纷由您自行负责处理，与 PaYphp 系统无关；但因 PaYphp 系统自身软件故障直接导致的问题除外。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">3.5 商户经营审核</strong>
            ：PaYphp 系统有权定期或不定期审核您的业务类型，以及通过本服务售卖的物品和服务。若您违反本协议约定或从事不符合国家相关法律法规规定的经营活动时，PaYphp 系统有权暂停或终止提供服务。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">3.6 交易停滞</strong>
            ：您自开户之日起 6 个月内无交易记录，或连续 180 个自然日未利用本服务产生交易额的，PaYphp 系统有权暂停服务并要求您重新核实身份；您不予配合或身份核实未通过的，PaYphp 系统有权终止本协议且无需承担任何法律责任。您的受理终端或收款码连续 3 个月内未发生交易的，PaYphp 系统有权暂停服务并要求重新核实身份；连续 12 个月内未发生交易的，有权停止为您提供收款服务。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">3.7 风险管控与延迟处理</strong>
            ：PaYphp 系统发现您可能存在洗钱、恐怖融资、欺诈交易、信用卡套现、恶意倒闭或其他违法违规行为，或发现集中转入分散转出等可疑交易特征的，有权对您的商户号采取限制功能、延迟处理或暂停服务等措施。您的上述行为导致 PaYphp 系统遭受损失的，您应当承担赔偿责任。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">3.8 身份验证和授权</strong>
            ：您使用本服务，即表明您同意 PaYphp 系统收集、记录和使用您使用本服务过程中产生的相关信息和数据，包括但不限于您及其法定代表人、负责人的身份信息、账户信息和交易信息等，并将前述信息提交国家机关、金融机构和其他企事业单位进行身份验证和鉴权。为更好地提供服务，PaYphp 系统有权在法律允许的范围内自行收集、记录、使用上述信息和数据。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">3.9 风险管理</strong>
            ：PaYphp 系统有权对您的业务进行风险管理，持续监测和分析交易金额、笔数、类型、时间、频率等特征，完善可疑交易监测模型。如发现交易金额、时间、频率与您的经营范围、规模不相符等异常情形的，有权采取延迟处理、设置限额、暂停使用权限等措施。
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="your-rights" title="四、您的权利和义务">
        <ul className="list-decimal space-y-2 pl-6">
          <li>
            <strong className="font-semibold text-black dark:text-white">4.1 账号开立和身份验证</strong>
            ：您在申请开立 PaYphp 系统商户号时，应向 PaYphp 系统如实提供相关信息。您应保证所提交资料的准确性、真实性、完整性。信息发生变更或您迁址、停业、变更域名或联系电话等，应提前通知 PaYphp 系统，否则 PaYphp 系统有权视具体情况暂停服务，您未及时通知导致的一切投诉和纠纷均由您承担。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">4.2 账号使用</strong>
            ：您不得把 PaYphp 系统商户号、技术接口、安全协议及证书用于本协议范围以外的用途，也不得出租、转让给第三方使用。您不得将其他商户的交易假冒成自己的交易。您应充分了解出租、出借、出售、购买账号的相关法律责任，承诺依法依规开立和使用账号。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">4.3 禁止存储用户敏感信息</strong>
            ：您不得存储用户银行账户密码、银行卡的磁道信息或芯片信息、银行卡验证码和有效期等敏感信息，不得泄露用户信用卡信息和借记卡信息等。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">4.4 账号保管和挂失</strong>
            ：您应妥善保管商户号及其密码，以及手机短信验证码、API Key 等。商户号下的一切行为均视为您的行为。若发现商户号被盗用，应立即向 PaYphp 系统发起挂失；因您管理不善导致商户号被盗用的一切损失由您自行承担。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">4.5 指令的不可撤销</strong>
            ：由于系统的实时性和不可更改性，您向 PaYphp 系统发起的任何支付指令，在执行后均为不可撤销或更改的。支付指令一旦被执行，您不得要求止付、更改或撤销。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">4.6 规范使用</strong>
            ：未经 PaYphp 系统书面授权，您不得转载、复制、截取、篡改其商标、标识、Logo 等内容或制作衍生产品；除在商户中心登记的域名外，不得在任何网页或 APP 页面展示与 PaYphp 系统有关的链接、弹窗或与 H5 支付有关的内容及其衍生产品。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">4.7 商户系统安全与维护</strong>
            ：您应负责自身硬件平台搭建并承担相关费用。您应严格按照接入技术规范建设和运行自己的计算机系统并确保安全性，在交易过程中验证 PaYphp 系统请求和响应数据包中的签名真实性，并保障支付信息数据传输过程中的安全性、保密性。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">4.8 真实交易背景</strong>
            ：您承诺发起的本服务交易基于真实的交易，不得利用本服务从事虚假交易。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">4.9 保存订单信息</strong>
            ：您应保证订单信息的合法性、真实性、准确性和完整性，妥善保留有关交易数据和凭证，由交易发生之日起或本协议终止之日起至少保留三年，并按 PaYphp 系统要求提供查询与调单。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">4.10 第三方网络交易平台</strong>
            ：若您经营第三方网络交易平台，不得利用本服务从事非法支付结算业务，并应识别二级商户的身份信息和经营资质，收集、保存其营业执照等资料；保证二级商户所提交资料的准确性、真实性、完整性，并妥善保留二级商户交易数据和凭证至少五年。您应保证二级商户不再发展下一级商户，并承担因二级商户发展和管理不善造成的全部风险损失。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">4.11 第三方平台风险防范</strong>
            ：若您经营第三方网络交易平台，需对二级商户交易行为的真实性、合法性进行监控和管理，防止其利用本服务从事信用卡套现、洗钱、虚假交易等违法违规活动；若出现此类情形，PaYphp 系统有权解除本协议并追究您的违约责任。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">4.12 反套现、反洗钱</strong>
            ：您不得主动或协助持卡人进行信用卡套现、洗钱、交易分单等违法经营行为，不得出现虚假申请、恶意倒闭等严重风险行为，否则 PaYphp 系统有权暂停或终止提供服务，并将您的信息报送至中国人民银行和公安部及相关监管机构。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">4.13 实物和虚拟</strong>
            ：您需同时经营实物类和虚拟类商品或服务时，应当分别申请商户号，不得用同一商户号同时经营。否则 PaYphp 系统有权解除本协议并追究违约责任。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">4.14 安全守则</strong>
            ：您不得对 PaYphp 系统的计算机系统和程序采取反向工程手段进行破解，不得复制、修改、编译、整合和篡改，不得修改或增加其原有功能。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">4.15 消费者权益</strong>
            ：您应切实维护消费者合法权益，不得对采用不同支付方式的消费者采取歧视性措施。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">4.16 其他义务</strong>
            ：包括但不限于：不得将接口委托或转让给第三方；不得招聘无本人身份证原件的人员作为收银员；风险较高的商户必须加装录像监控设施，录像资料保留不少于 3 个月；对单笔交易金额超过（含）5 万元的交易核对用户身份证原件；不得向消费者征收任何附加费或额外费用；妥善保管交易数据信息，确保只有授权人员接触。
          </li>
          <li>
            <strong className="font-semibold text-black dark:text-white">4.17 保障消费者合法权益</strong>
            ：您应确保使用各种支付方式的用户均享受一致性公平待遇，不得转嫁或变相转嫁服务费用，不得无理拒绝用户使用已开通的支付方式。
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="fees" title="五、服务费用和交易结算">
        <p>
          <strong className="font-semibold text-black dark:text-white">5.1 PaYphp 系统服务费用（含税）</strong>
        </p>
        <ul className="list-decimal space-y-2 pl-6">
          <li>
            5.1.1 您使用本软件服务，应向 PaYphp 系统缴纳相应的软件服务费用（以下简称「服务费」），具体标准以商户平台核准记录为准。
          </li>
          <li>
            5.1.2 在合作过程中，您可能因满足相关优惠条件而在一定期限内享受优惠价格；当您不再满足优惠条件或优惠期限届满时，PaYphp 系统有权将价格恢复为原有标准，具体以商户平台核准记录为准。
          </li>
          <li>
            5.1.3 若遇国家政策调整或 PaYphp 系统经营需要，PaYphp 系统有权据此调整服务费用并通知您；您在收到通知后五个工作日内未提出书面异议的，按调整后价格执行。双方无法就变更达成一致意见的，可终止本协议。
          </li>
        </ul>
        <p>
          <strong className="font-semibold text-black dark:text-white">5.2 误差</strong>
          ：各方确认并同意，涉及费用结算如因小数点后两位进位而产生微小误差，各方均予以认可。
        </p>
        <p>
          <strong className="font-semibold text-black dark:text-white">5.3 交易结算</strong>
          ：本服务项下的实际支付交易由您自行对接的官方支付接口（支付宝、微信支付、QQ 钱包）或您本人的收款账户完成，交易资金不经 PaYphp 系统之手。相关费率、结算周期、到账时间以对应官方平台的规则为准；因官方平台、银行或您自身原因导致的延迟、限额或失败，PaYphp 系统不承担违约或赔偿责任，但将协助排查。
        </p>
      </LegalSection>

      <LegalSection id="deposit" title="六、保证金">
        <p>
          6.1 PaYphp 系统有权要求您缴纳风险保证金，保证金额度以商户平台核准记录的为准。在本协议有效期内，风险保证金冻结于您的保证金账户中，您不得提前解冻、提取或使用。
        </p>
        <p>
          6.2 PaYphp 系统有权根据您的经营状况、业务变化及实际风险情况调整保证金额度，并通知您补足；如您未能在收到通知后的五个工作日内补足，PaYphp 系统有权暂停提供服务；三十天内未补足的，可单方解除本协议而无需承担任何法律责任。
        </p>
        <p>
          6.3 若您在使用本服务过程中没有违约行为，且主动注销本服务满一年仍未受到任何第三方投诉或发生交易纠纷的，应解冻保证金，您可自主提取保证金本金（无息）。
        </p>
        <p>
          6.4 若您违反法律法规或本协议致用户或 PaYphp 系统受损时，PaYphp 系统有权直接使用保证金进行赔付，不足部分可继续向您追偿。
        </p>
      </LegalSection>

      <LegalSection id="refund" title="七、退款条款">
        <p>
          对于您的交易中出现的退款情形，按如下规则处理：
        </p>
        <ul className="list-decimal space-y-2 pl-6">
          <li>
            7.1 退款由对应官方支付平台按其规则处理；PaYphp 系统提供相应的系统能力与操作入口。因您资金不足或平台规则导致无法退款的，其后果由您自行承担。
          </li>
          <li>
            7.2 退款时是否另行收取费用，以官方平台规则为准；若平台方面需要向 PaYphp 系统另行收取相关费用的，此费用应由您自行承担。
          </li>
          <li>
            7.3 您负责解决和承担用户拒付交易款项而导致的退款纠纷或责任。
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="confidential" title="八、保密条款">
        <ul className="list-decimal space-y-2 pl-6">
          <li>
            8.1 除本协议另有约定外，未经一方书面同意，任何一方不得将本协议内容、用户个人信息、用户支付信息以及接口技术、安全协议及证书等透露给第三方。
          </li>
          <li>
            8.2 各方对在履行协议中获得的商业机密和技术秘密负保密责任。出现下列任一情况时，PaYphp 系统有权披露您的商业信息：（1）人民银行或金融监管机构要求提供的；（2）公安机关、人民法院、人民检察院或有权行政机关要求提供的；（3）用户投诉并经查实后可以提供的。商业信息包括但不限于您与用户之间的交易单号、交易凭证、资金流水等。
          </li>
          <li>8.3 各方保证其雇员及代理人履行本条保密义务。</li>
          <li>8.4 上述保密义务在本协议终止后五年内有效。</li>
        </ul>
      </LegalSection>

      <LegalSection id="breach" title="九、违约责任">
        <p>
          9.1 各方中的任何一方违反本协议约定，均构成违约；9.2 您有下列情形之一的，PaYphp 系统有权单方面解除本协议并要求您承担相关赔偿责任：
        </p>
        <ul className="list-decimal space-y-2 pl-6">
          <li>（1）直接或间接参与欺诈，或出租、出借、出售、购买银行账户（含银行卡）或支付账户，或涉嫌实施其他违法犯罪活动的；</li>
          <li>（2）经营及财务状况恶化无法正常经营，或被列入「严重违法失信企业名单」，或注册地址不存在、虚构经营场所的；</li>
          <li>（3）您或其法定代表人、负责人被支付清算协会、银行卡清算机构、其他国家机关或企事业单位列入黑名单，或存在被处罚记录的；</li>
          <li>（4）实施违规操作，或违反本协议约定且经指出拒不改正，或在合理期间内无法达到整改要求的；</li>
          <li>（5）无理拒绝或故意拖延 PaYphp 系统交易查询、调单查询或监查要求的；</li>
          <li>（6）进入破产程序、解散、营业执照被吊销；</li>
          <li>（7）实施有损 PaYphp 系统利益行为的；</li>
          <li>（8）违反本协议或利用本服务从事非法业务的；</li>
          <li>（9）您的软硬件系统存在安全问题，经通知后拒不整改的；</li>
          <li>（10）出现风险事件或经 PaYphp 系统判断交易异常的；</li>
          <li>（11）违反 PaYphp 系统的相关规则和制度的。</li>
        </ul>
      </LegalSection>

      <LegalSection id="cancel" title="十、账号注销">
        <p>
          10.1 发生下列情形之一的，PaYphp 系统有权注销您的商户号（法律另有规定或本协议另有约定的除外）：（1）您主动申请注销的；（2）本协议解除或终止的；（3）您利用本服务从事非法活动的；（4）您违反本协议或违反与 PaYphp 系统签订的其他协议的。
        </p>
        <p>
          10.2 无论您的商户号是否被注销，PaYphp 系统均有权依据法律规定或国家机关的合法要求，配合冻结、扣划相关资金。
        </p>
      </LegalSection>

      <LegalSection id="disclaimer" title="十一、免责条款">
        <p>
          11.1 因受不可抗力影响而不能履行或不能完全履行本协议的一方可以免除责任。不可抗力是指各方不能预见、不能避免、不能克服的客观情况。此外，鉴于网络之特殊属性，发生包括但不限于下列任何情形导致 PaYphp 系统不能履行本协议下义务的，各方可以免责：（1）黑客攻击、计算机病毒侵入或发作；（2）计算机系统遭到破坏、瘫痪或无法正常使用而导致信息或纪录的丢失、PaYphp 系统不能提供本协议项下之服务的；（3）电信部门技术调整导致之重大影响的；（4）因政府管制而造成服务终止的；（5）其它非各方原因造成的。
        </p>
        <p>
          11.2 PaYphp 系统仅提供支付系统软件与支付接口的测试对接服务，不涉及资金清算、托管或结算。对于因官方支付平台、银行或您自身原因导致的交易失败、资金延迟、限额或损失，PaYphp 系统不承担法律责任。
        </p>
      </LegalSection>

      <LegalSection id="risk" title="十二、风险提示及特别约定">
        <ul className="list-decimal space-y-2 pl-6">
          <li>
            12.1 各方对于电子商务环境及相关风险均完全知悉，均承诺采取合理的风险防范措施，以尽量避免或减小风险。
          </li>
          <li>
            12.2 本服务交易过程中，您应积极防范银行卡持卡人拒付风险，及时解决交易中出现的问题；若交易中出现的交易不真实、欺诈、伪冒交易、持卡人账户信息泄漏或您违反国家法律规定等情形，您应自行承担上述情形造成的全部损失。
          </li>
          <li>
            12.3 您在进行支付交易的过程中，应严格遵守中国人民银行网上银行业务和信用卡交易相关的政策法规，不得进行虚假交易、非法套现、洗钱等行为。您不得直接或变相从事互联网赌博、色情平台，互联网销售彩票平台，非法外汇、贵金属投资交易平台，非法证券期货类交易平台，代币发行融资及虚拟货币交易平台，也不得未经监管部门批准通过互联网开展资产管理业务以及未取得省级政府批文的大宗商品交易场所等非法交易，否则 PaYphp 系统有权终止为其提供支付对接服务。
          </li>
          <li>
            12.4 如您申请开通大额支付功能，应确认并同意遵守如下条款：「您保证将 PaYphp 系统所提供的大额支付功能用于实名制业务，否则您应承担因违反上述承诺而造成的一切风险和法律责任，并对受损方作出无条件的先行赔付。」实名制业务，指用户使用 PaYphp 系统提供的在线支付服务购买商品或服务时，提交了所购商品或服务最终接收方（或最终受益方）的姓名、身份证号码等真实身份信息的业务。
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="ip" title="十三、知识产权">
        <ul className="list-decimal space-y-2 pl-6">
          <li>13.1 PaYphp 系统在本合作中提供的内容（包括但不限于商标、标识、网页、文字、图片等）的知识产权归 PaYphp 系统所有。</li>
          <li>13.2 除另有特别声明外，PaYphp 系统提供的软件系统、技术接口、安全证书等所依托的著作权、专利权及其他知识产权均归 PaYphp 系统所有。</li>
          <li>13.3 上述知识产权均受到法律保护，未经 PaYphp 系统或相关权利人许可，不得以任何形式进行使用或创造相关衍生作品。</li>
          <li>
            13.4 PaYphp 系统对带有 PaYphp 字样、标识、logo、图片等信息的物料、宣传资料和扫码设备享有知识产权，您不得在经营场所实施或协助、放任他人实施替换、遮盖、涂抹、藏匿、毁坏上述物料、宣传资料和扫码设备的行为，否则应按 PaYphp 系统的要求恢复原状、赔偿损失。
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="change" title="十四、协议变更">
        <p>
          PaYphp 系统有权根据需要不时地制定、修改本协议，如本协议有任何变更，将在商户平台进行公告。如您不同意相关变更，必须立即以书面方式通知 PaYphp 系统终止为您提供服务。任何修订将按照法律法规及监管规定在网站或商户平台上公布生效。您登录或继续使用服务即表示您接受经修订的协议。
        </p>
      </LegalSection>

      <LegalSection id="term" title="十五、协议有效期、自动续期和提前终止">
        <ul className="list-decimal space-y-2 pl-6">
          <li>
            15.1 本协议的有效时间以商户平台确认的时间为准，默认为长期有效；若 PaYphp 系统在协议有效期内提出服务费用变更请求并通知您，自信息发出之日起 30 日内您继续使用本服务的，PaYphp 系统有权自 30 日届满之日起按照变更后的价格向您收取费用。
          </li>
          <li>
            15.2 各方有权基于各自的营运需要提前终止本协议，且无需承担任何法律责任。需提前终止的，主动提出方应提前一个月以书面或电子邮件形式通知各方。
          </li>
          <li>
            15.3 协议解除或终止后，涉及保证金、退款和保密的条款依然有效，各方应继续遵照执行。
          </li>
          <li>
            15.4 本协议一式贰份，双方各执壹份，具有同等法律效力。
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="contact" title="十六、如何联系我们">
        <p>
          如您对本协议有任何疑问，请通过本平台在线客服或发送邮件至【terms@PaYphp.cn】与我们联系，我们将在核实身份后的合理期限内回复。
        </p>
      </LegalSection>
    </LegalPage>
  );
};

export default TermsOfService;
