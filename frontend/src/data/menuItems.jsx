export const menuItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  {
    name: "Services",
    dropdown: true,
    subMenu: [
      { name: "Web / App Development", link: "/services/web-app-development" },
      { name: "Sketching and Crafts", link: "/services/sketching-crafts" },
      { name: "Organic Products", link: "/services/organic-products" },
    ],
  },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Contact", link: "/contact" },
  { name: "About Us", link: "/about-us" },
];
