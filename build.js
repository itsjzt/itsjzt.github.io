const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const data = {
  intro: {
    title: "Hello, <mark>I;m Saurabh</mark>",
    description:
      "I'm a Web Developer, UI/UX Engineer. I build websites for a tech company in Silicon Valley. You can find my work on Codepen, Github and Instagram. I also love digital art, so you'll find me posting on Dribbble occasionally. If you would like to work with me, drop me an email.",
  },
  projects: [
    {
      name: "simple scroll to top",
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
      name: "Superbar",
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
      name: "Slick Scroll Progress Bar",
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
      name: "Shopify Delivery App",
      isPublished: false,
      description: "show our delivery company as shipping options to customer",
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
  blog: {
    title: "Blogs",
    articles: [
      { title: "Try these 4 languages from 4 corners of Programming", url: "" },
      { title: "Declarative Programming & React", url: "" },
      {
        title: "My favorite people to stay updated in web development space",
        url: "",
      },
    ],
  },
  socialMedia: {
    title: "Social Media",
    description: "",
    platforms: [
      { title: "Facebook", url: "https://facebook.com/itsjzt" },
      { title: "Twitter", url: "https://twitter.com/itsjzt" },
      { title: "Instagram", url: "htttps://instagram.com/itsjzt" },
      { title: "Telegram", url: "https://telegram.org/@itsjzt" },
      { title: "Github", url: "https://github.com/itsjzt" },
      { title: "LinkedIn", url: "https://linkedin.com/itsjzt" },
      { title: "Codepen", url: "https://codepen.io/itsjzt" },
    ],
  },
  email: {
    title: "Say Hi",
    description: "If you'd like to say hi or work with me: ",
    emailLabel: "Drop me an Email",
    emailId: "jztsaurabh@gmail.com",
  },
};

// @ts-ignore
ejs.renderFile(path.join(__dirname, "index.ejs"), data, {}, (err, str) => {
  if (err) {
    console.log(err);
  }

  fs.writeFileSync(path.join(__dirname, "index2.html"), str);
});
