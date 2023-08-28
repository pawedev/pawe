import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Navbar from "./components/Header/navbar";
import Logo from "./components/Header/logo";
import GoTop from "./components/RightSidebar/top";

const config = {
  logo: Logo,

  docsRepositoryBase: "https://github.com/pawedev/pawe/blob/main",

  nextThemes: {
    defaultTheme: "dark",
  },

  navbar: {
    extraContent: Navbar,
  },

  // banner: {
  //   key: "bannerjor",
  //   text: "🔥 Newroz Pîroz Be!",
  // },

  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://pawe.dev" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="PAWE" />
        <meta
          property="og:title"
          content={frontMatter.title || "Nivîsbarî û Bernamenûsî"}
        />
        <meta
          property="og:description"
          content={frontMatter.description || "Pawe Pêşvebirin"}
        />
        <meta
          property="og:image"
          content={frontMatter.image || "https://pawe.dev/pawe-social.png"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pawedev" />
        <meta name="twitter:creator" content="@pawedev" />
        <link rel="icon" href="/pawe.jpg"/>
      </>
    );
  },

  useNextSeoProps() {
    const { frontMatter } = useConfig();
    return {
      title: frontMatter.title,
      titleTemplate: "%s | PAWE",
      defaultTitle: "Pawe Pêşvebirin | Nivîsbarî û Bernamenûsî",
      additionalMetaTags: [
        { content: "ku", httpEquiv: "Content-Language" },
        { content: "PAWE", name: "apple-mobile-web-app-title" },
        { content: "#000", name: "msapplication-TileColor" },
      ],
    };
  },

  footer: {
    text: <span>{new Date().getFullYear()} © Pawe Pêşvebirin</span>,
  },

  themeSwitch: {
    useOptions() {
      return {
        light: "Ronî",
        dark: "Tarî",
        system: "Li Gorî Pergalê",
      };
    },
  },

  primaryHue: {
    dark: 164,
    light: 245,
  },

  toc: {
    title: "Sernavan:",
    extraContent: GoTop,
  },

  search: {
    placeholder: "Bigere...",
    loading: "Tên bar kirin..",
    error: "Xeletî çêbû!",
  },

  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },

  i18n: [{ locale: "ku", text: "Kurmancî" }],

  feedback: {
    content: null,
  },

  editLink: {
    text: "Di vê naverokê biguherîne",
  },
};

export default config;
