import type { ContactPageData } from "./contact";

export const contactEn: ContactPageData = {
  htmlLang: "en",
  inLanguage: "en",
  canonicalPath: "/en/contact",
  pageTitle: "SPONGEMM | Contact",
  pageDescription:
    "Contact information for the SPONGE molecular simulation project: offices at Peking University (College of Chemistry and Molecular Engineering) and Westlake University (School of Science), developer email, QQ user group and GitHub repositories.",
  hero: {
    eyebrow: "Contact",
    titleLines: [
      { text: "Drop us" },
      { text: "a line", italic: true, period: "." }
    ],
    lede:
      "SPONGE is developed and maintained by the Yi Qin Gao group at Peking University together with collaborating teams."
  },
  qrCloseLabel: "Close",
  cards: [
    {
      kind: "institution",
      num: "01",
      tag: "Beijing",
      title: "Peking University",
      subtitle: "College of Chemistry and Molecular Engineering",
      addressLines: ["No. 202 Chengfu Road, Haidian District, Beijing", "Postal code 100871"],
      action: { label: "yijiexia@pku.edu.cn", href: "mailto:yijiexia@pku.edu.cn" }
    },
    {
      kind: "institution",
      num: "02",
      tag: "Hangzhou",
      title: "Westlake University",
      subtitle: "School of Science",
      addressLines: ["No. 600 Dunyu Road, Xihu District, Hangzhou · Yungu Campus", "Postal code 310030"],
      action: { label: "xiayijie@westlake.edu.cn", href: "mailto:xiayijie@westlake.edu.cn" }
    },
    {
      kind: "qq",
      num: "03",
      tag: "QQ Group",
      title: "SPONGE user group",
      subtitle: "Scan to join",
      image: "/assets/contact/qq.jpg",
      imageAlt: "SPONGE user QQ group QR code"
    },
    {
      kind: "github",
      num: "04",
      tag: "Source code",
      title: "GitHub",
      subtitle: "Project repositories",
      repos: [
        { label: "spongemm/SPONGE", href: "https://github.com/spongemm/SPONGE", note: "Program source" },
        { label: "spongemm/spongemm_cn", href: "https://github.com/spongemm/spongemm_cn", note: "Website source" },
        { label: "spongemm", href: "https://github.com/spongemm", note: "Organization" }
      ]
    }
  ],
  jsonLd: {
    parentOrgName: "Peking University",
    parentOrgUrl: "https://english.pku.edu.cn/",
    contactPoints: [
      {
        contactType: "Academic inquiry (Peking University)",
        email: "yijiexia@pku.edu.cn",
        areaServed: "CN",
        availableLanguage: ["en", "zh-CN"]
      },
      {
        contactType: "Academic inquiry (Westlake University)",
        email: "xiayijie@westlake.edu.cn",
        areaServed: "CN",
        availableLanguage: ["en", "zh-CN"]
      }
    ],
    locations: [
      {
        name: "Peking University, College of Chemistry and Molecular Engineering",
        streetAddress: "No. 202 Chengfu Road",
        postalCode: "100871",
        addressLocality: "Haidian District",
        addressRegion: "Beijing",
        addressCountry: "CN"
      },
      {
        name: "Westlake University, School of Science",
        streetAddress: "No. 600 Dunyu Road, Yungu Campus",
        postalCode: "310030",
        addressLocality: "Xihu District",
        addressRegion: "Hangzhou",
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
