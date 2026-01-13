import footerSocial from "@/mock/footer-social";
import IFooterSocial from "@/types/footer-social";
import Link from "next/link";

const FooterSocial = () => {
  return (
    <div className="flex items-center justify-center gap-x-6">
      {footerSocial.map(({ id, href, icon }: IFooterSocial) => (
        <Link key={id} href={href} target="_blank" rel="noopener noreferrer">
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default FooterSocial;
