type CardBase = { num: string; tag: string; title: string; subtitle: string };

export type InstitutionCard = CardBase & {
  kind: "institution";
  addressLines: string[];
  action: { label: string; href: string };
};

export type QqCard = CardBase & {
  kind: "qq";
  image: string;
  imageAlt: string;
};

export type GithubCard = CardBase & {
  kind: "github";
  repos: { label: string; href: string; note: string }[];
};

export type ContactCard = InstitutionCard | QqCard | GithubCard;

export type ContactJsonLdLocation = {
  name: string;
  streetAddress: string;
  postalCode: string;
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
};

export type ContactPageData = {
  htmlLang: "zh-CN" | "en";
  inLanguage: "zh-CN" | "en";
  canonicalPath: string;
  pageTitle: string;
  pageDescription: string;
  hero: {
    eyebrow: string;
    titleLines: { text: string; italic?: boolean; period?: string }[];
    lede: string;
  };
  cards: ContactCard[];
  qrCloseLabel: string;
  jsonLd: {
    parentOrgName: string;
    parentOrgUrl: string;
    contactPoints: {
      contactType: string;
      email: string;
      areaServed: string;
      availableLanguage: string[];
    }[];
    locations: ContactJsonLdLocation[];
    sameAs: string[];
  };
};

export const contactZh: ContactPageData = {
  htmlLang: "zh-CN",
  inLanguage: "zh-CN",
  canonicalPath: "/contact",
  pageTitle: "SPONGEMM | 联系我们",
  pageDescription:
    "SPONGE 分子模拟软件团队联系方式：北京大学化学与分子工程学院、西湖大学理学院办公地点，开发者邮箱、QQ 用户群与 GitHub 源码与官网仓库。",
  hero: {
    eyebrow: "联络",
    titleLines: [{ text: "想聊聊吗", period: "？" }],
    lede: "SPONGE 由北京大学高毅勤课题组与合作团队共同开发与维护。"
  },
  qrCloseLabel: "关闭",
  cards: [
    {
      kind: "institution",
      num: "01",
      tag: "北京",
      title: "北京大学",
      subtitle: "化学与分子工程学院",
      addressLines: ["北京市海淀区成府路 202 号", "邮编 100871"],
      action: { label: "yijiexia@pku.edu.cn", href: "mailto:yijiexia@pku.edu.cn" }
    },
    {
      kind: "institution",
      num: "02",
      tag: "杭州",
      title: "西湖大学",
      subtitle: "理学院",
      addressLines: ["浙江省杭州市西湖区墩余路 600 号 · 云谷校区", "邮编 310030"],
      action: { label: "xiayijie@westlake.edu.cn", href: "mailto:xiayijie@westlake.edu.cn" }
    },
    {
      kind: "qq",
      num: "03",
      tag: "QQ 群",
      title: "SPONGE 用户群",
      subtitle: "扫码加入",
      image: "/assets/contact/qq.jpg",
      imageAlt: "SPONGE 用户 QQ 群二维码"
    },
    {
      kind: "github",
      num: "04",
      tag: "源代码",
      title: "GitHub",
      subtitle: "项目相关仓库",
      repos: [
        { label: "spongemm/SPONGE", href: "https://github.com/spongemm/SPONGE", note: "程序源码" },
        { label: "spongemm/spongemm_cn", href: "https://github.com/spongemm/spongemm_cn", note: "官网源码" },
        { label: "spongemm", href: "https://github.com/spongemm", note: "组织仓库" }
      ]
    }
  ],
  jsonLd: {
    parentOrgName: "北京大学",
    parentOrgUrl: "https://www.pku.edu.cn/",
    contactPoints: [
      {
        contactType: "Academic inquiry (Peking University)",
        email: "yijiexia@pku.edu.cn",
        areaServed: "CN",
        availableLanguage: ["zh-CN", "en"]
      },
      {
        contactType: "Academic inquiry (Westlake University)",
        email: "xiayijie@westlake.edu.cn",
        areaServed: "CN",
        availableLanguage: ["zh-CN", "en"]
      }
    ],
    locations: [
      {
        name: "北京大学化学与分子工程学院",
        streetAddress: "成府路 202 号",
        postalCode: "100871",
        addressLocality: "海淀区",
        addressRegion: "北京市",
        addressCountry: "CN"
      },
      {
        name: "西湖大学理学院",
        streetAddress: "墩余路 600 号 · 云谷校区",
        postalCode: "310030",
        addressLocality: "西湖区",
        addressRegion: "杭州市",
        addressCountry: "CN"
      }
    ],
    sameAs: [
      "https://github.com/spongemm",
      "https://github.com/spongemm/SPONGE",
      "https://github.com/spongemm/spongemm_cn"
    ]
  }
};
