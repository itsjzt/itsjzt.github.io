// const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
const Liquid = require("liquid");
const engine = new Liquid.Engine();

const data = {
  intro: {
    title: "Hello, I'm <mark>Saurabh Sharma</mark>",
    description:
      "I'm a Web Developer. I build websites and apps, mostly making shopify apps and themes these days. You can find my work on Codepen, Github and Shopify App Store. If you would like to work with me, drop me an email.",
  },
  works: {
    title: "Projects that I've worked on",
    projects: [
      {
        title: "simple scroll to top",
        isPublished: true,
        description: "Add a lightweight scroll to top button to your shop",
        logo:
          "https://apps.shopifycdn.com/listing_images/9e602feef50c504551bd76269e1e7ed4/icon/d8dc4e2ea5850762e1c006348298416f.png?height=168&width=168",
        highlights: [
          "Frontend with React and Polaris (shopify's design system)",
          "Storefront payload done in Svelte for better loading speed and performace",
          "Multiple Pricing options. Monthly, Annual, Coupons, Trail",
          "Live Preview of storefront while customizing",
        ],
        url: "https://apps.shopify.com/simple-scroll-to-top",
        ratings: "4.2",
      },
      {
        title: "Superbar",
        isPublished: true,
        description:
          "Powerful announcement bars that increase sales and conversions",
        logo:
          "https://apps.shopifycdn.com/listing_images/7147baad0a73265200b9d28c3477ad69/icon/729206222b23a171f966216008dfecc4.png?height=168&width=168",
        highlights: [
          "Geotargeting Vistors, ex: show a bar only to people from India",
          "show / hide Animations, attention seeking animations",
          "Frontend with React and Polaris (shopify's design system)",
          "Storefront payload done in Svelte for better loading speed and performace",
          "Multiple Pricing options. Monthly, Annual, Coupons, Trail",
          "Live Preview of storefront while customizing",
        ],
        url: "https://apps.shopify.com/superbar",
        ratings: "5.0",
      },
      {
        title: "Slick Scroll Progress Bar",
        isPublished: true,
        description:
          "Help visitors navigate your store with a scroll progress bar",
        logo:
          "https://apps.shopifycdn.com/listing_images/6d5e3ca24c9378643a9f6b99f678b861/icon/84707581a9b32ef4e1f7c8290b162139.png?height=168&width=168",
        highlights: [
          "Show the progress bar on specific pages like blog or article only",
          "Frontend with React and Polaris (shopify's design system)",
          "Storefront payload done in Svelte for better loading speed and performace",
          "Multiple Pricing options. Monthly, Annual, Coupons, Trail",
          "Live Preview of storefront while customizing",
        ],
        url: "https://apps.shopify.com/slick-scroll-progress-bar",
        ratings: "5.0",
      },
      {
        title: "Shopify Delivery App",
        isPublished: false,
        description:
          "show our delivery company as shipping options to customer",
        logo:
          "https://apps.shopifycdn.com/listing_images/6d5e3ca24c9378643a9f6b99f678b861/icon/84707581a9b32ef4e1f7c8290b162139.png?height=168&width=168",
        highlights: [
          "Backend done in Graphql/Nodejs",
          "Frontend with React and Polaris (shopify's design system)",
        ],
        url: "",
        ratings: "5.0",
      },
    ],
  },
  blog: {
    title: "Blogs",
    description: "",
    articles: [
      {
        title: "Try these 4 languages from 4 corners of Programming",
        url:
          "https://dev.to/itsjzt/try-these-4-languages-from-4-corners-of-programming-epm",
      },
      {
        title: "Declarative Programming & React",
        url: "https://dev.to/itsjzt/declarative-programming--react-3bh2",
      },
      {
        title: "My favorite people to stay updated in web development space",
        url:
          "https://dev.to/itsjzt/my-favorite-people-to-stay-updated-in-web-development-space-3950",
      },
      {
        title: "and many more...",
        url: "https://dev.to/itsjzt",
      },
    ],
  },
  socialMedia: {
    title: "Social Media",
    description:
      "Not much active on social media but still if you want to follow along",
    platforms: [
      { title: "Facebook", url: "https://facebook.com/itsjzt" },
      { title: "Twitter", url: "https://twitter.com/itsjzt" },
      { title: "Instagram", url: "htttps://instagram.com/itsjzt" },
      { title: "Telegram", url: "https://t.me/itsjzt" },
      { title: "LinkedIn", url: "https://www.linkedin.com/in/itsjzt/" },
      {
        title: "Github ( find my one-off projects here )",
        url: "https://github.com/itsjzt",
      },
      { title: "Codepen ( and here too )", url: "https://codepen.io/itsjzt" },
    ],
  },
  email: {
    title: "Say Hi",
    description: "If you'd like to say hi or work with me: ",
    emailLabel: "Drop me an Email",
    emailId: "jztsaurabh@gmail.com",
  },
};

function build() {
  const liquidSource = fs.readFileSync(path.join(__dirname, "index.liquid"), {
    encoding: "utf-8",
  });

  engine.parseAndRender(liquidSource, data).then((result) => {
    fs.writeFileSync(path.join(__dirname, "index.html"), result);
  });
}

// exports.build = build;
build();
