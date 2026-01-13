import footerNavItems from "@/mock/footer-nav-items";
import IFooterNavItems from "@/types/footer-nav-items";
import Link from "next/link";

const FooterNav = () => {
  return (
    <nav className="flex flex-col xs:flex-row gap-x-10 gap-y-5 justify-center items-center capitalize text-lg">
      {footerNavItems.map(({ id, label, href }: IFooterNavItems) => (
        <Link key={id} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default FooterNav;
