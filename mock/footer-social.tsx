import { Facebook, Instagram, Youtube } from "lucide-react";
import IFooterSocial from "@/types/footer-social";

const footerSocial: IFooterSocial[] = [
  {
    id: 1,
    href: "https://www.instagram.com/bizim_sufre/",
    icon: <Instagram />,
  },
  {
    id: 2,
    href: "https://www.facebook.com/BizimSufre/",
    icon: <Facebook />,
  },
  {
    id: 3,
    href: "https://www.youtube.com/channel/UChqMKPO_TkF74I7Rf0rZivw",
    icon: <Youtube />,
  },
];

export default footerSocial;
