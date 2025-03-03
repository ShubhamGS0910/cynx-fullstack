import { Home, Info, Briefcase, Layers, FileText, PhoneCall } from "lucide-react";

export const menuItems = [
  { title: "Home", path: "/", icon: Home },
  { title: "About Us", path: "/about", icon: Info },
  {
    title: "Services",
    icon: Briefcase,
    submenus: [
      { title: "Software Development", path: "/services/software-development" },
      { title: "AI Solutions", path: "/services/ai-solutions" },
      { title: "Cloud & DevOps", path: "/services/cloud-devops" },
      { title: "UI/UX Design", path: "/services/ui-ux" },
      {
        title: "Digital Marketing",
        submenus: [
          { title: "Product Shoot", path: "/services/digital-marketing/product-shoot" },
          { title: "Branding", path: "/services/digital-marketing/branding" },
          { title: "Videography", path: "/services/digital-marketing/videography" },
          { title: "Photography", path: "/services/digital-marketing/photography" },
          { title: "Content Creation", path: "/services/digital-marketing/content-creation" },
        ],
      },
      {
        title: "Art & Crafts",
        submenus: [
          { title: "Sketching", path: "/services/art-crafts/sketching" },
          { title: "Painting", path: "/services/art-crafts/painting" },
          { title: "Caricatures", path: "/services/art-crafts/caricatures" },
        ],
      },
    ],
  },
  {
    title: "Products",
    icon: Layers,
    submenus: [
      { title: "Mobile Applications", path: "/products/mobile-applications" },
      { title: "Web Applications", path: "/products/web-applications" },
      { title: "Custom Software", path: "/products/custom-software" },
      { title: "Enterprise Applications", path: "/products/enterprise-applications" },
    ],
  },
  {
    title: "Industries",
    icon: Briefcase,
    submenus: [
      { title: "Healthcare", path: "/industries/healthcare" },
      { title: "Finance", path: "/industries/finance" },
      { title: "Retail", path: "/industries/retail" },
      { title: "Automotive", path: "/industries/automotive" },
      { title: "Logistics", path: "/industries/logistics" },
      { title: "E-Tech", path: "/industries/e-tech" },
      { title: "Art", path: "/industries/art" },
      { title: "Farming", path: "/industries/farming" },
    ],
  },
  { title: "Blog", path: "/blog", icon: FileText },
  { title: "Contact Us", path: "/contact", icon: PhoneCall },
];
