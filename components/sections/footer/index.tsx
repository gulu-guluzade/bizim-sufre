import FooterAddress from "./footer-address";
import FooterNav from "./footer-nav";
import FooterSocial from "./footer-social";

const Footer = () => {
  return (
    <footer className="bg-[#1F1B1B] text-white px-3 py-6 pb-4 flex flex-col gap-y-7">
      <FooterNav />
      <FooterSocial />
      <FooterAddress />
    </footer>
  );
};

export default Footer;
