import { AboutIcon, AnalysisIcon, NewsIcon } from "../utils/Icons";

export const routes = [
  {
    label: "Analysis",
    path: "/",
    href: "/",
    icon: <AnalysisIcon />,
  },
  {
    label: "News",
    path: "/news",
    href: "/news",
    icon: <NewsIcon />,
  },
  {
    label: "About",
    path: "/about",
    href: "/about",
    icon: <AboutIcon />,
  },
];
