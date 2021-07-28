module.exports = {
  //-- SITE SETTINGS -----
  author: "Lars Kvinnesland",
  siteTitle: "Lars Kvinnesland - Portfolio",
  siteShortTitle: "Lars Kvinnesland - Portfolio", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Product Design and UX/UI Design portfolio · Lars Kvinnesland",
  siteUrl: "https://www.larskvinnesland.com",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Lars Kvinnesland - Portfolio", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  useCookieBar: false, // If you use Google Analytics and want to be GDPR-compliant, set it to true
  googleAnalyticsTrackingId: "", // e.g. UA-XXXXXX-X

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#fdd9a3",
      tertiary: "#fdd9a3",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#61dafb",
      tertiary: "#61dafb",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#0e1116",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Source Sans Pro, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
  // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance, E-Mail
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/larskvinnesland/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/larskvinnesland/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/larskvinnesland",
    },
    {
      name: "ResearchGate",
      url: "https://www.researchgate.net/profile/Lars-Kvinnesland",
    },
    // {
    //   name: "Mail",
    //   url: "mailto:lkvinnes@gmail.com",
    // },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#hero",
      },
      {
        name: "Experience",
        url: "/#projects",
      },
    ],
    button: {
      useFileName: true,
      name: "🔒 Resume",
      fileName: "cv_kvinnesland_2020.pdf", // the file has to be placed inside the static folder at the root level
      url: "", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
  footerLinks: [
    {
      name: "",
      url: "/hero",
    },
    {
      name: "",
      url: "/projects",
    },
  ],
}
