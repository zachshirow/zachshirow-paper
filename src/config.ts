import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://zachshirow.ir", // replace this with your deployed domain
  author: "زکریا شیرمحمدلی",
  profile: "https://zachshirow.ir/about",
  desc: "باغچه دیجیتال زکریا شیرمحمدلی، جایی برای نشر تجربیاتم در زمینه های آموزش زبان انگلیسی، برنامه نویسی و طراحی گرافیک.",
  title: "zachshirow",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  editPost: {
    url: "https://github.com/zachshirow/zachshirow-paper/edit/main/src/content/posts",
    text: "پیشنهاد ویرایش",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "fa", // html lang code. Set this empty and default will be "en"
  langTag: ["fa-IR"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 50,
  height: 50,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/zachshirow",
    linkTitle: ` ${SITE.title} در گیتهاب`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/zachshirow",
    linkTitle: `${SITE.title} در اینستاگرام`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zachshirow",
    linkTitle: `${SITE.title} در لینکداین`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:zachshirow@gmail.com",
    linkTitle: `ارسال یک ایمیل به ${SITE.author}`,
    active: true,
  },
  {
    name: "X",
    href: "https://github.com/zachshirow",
    linkTitle: `${SITE.title} در تویتر/اکس`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/zachshirow",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/zachshirow_ir",
    linkTitle: `${SITE.title} در تلگرام`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
