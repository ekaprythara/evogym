import Logo from "@/assets/Logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <footer className="bg-primary-500 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            repudiandae repellat maiores, eligendi quaerat suscipit voluptatibus
            at dolorem nobis natus dolore obcaecati. Ullam, perspiciatis error.
            Aspernatur temporibus unde vel nisi?
          </p>
          <p>&copy; Evogym All Right Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <div className="flex flex-col gap-2 mt-5">
            <AnchorLink href="#home">Home</AnchorLink>
            <AnchorLink href="#benefits">Benefits</AnchorLink>
            <AnchorLink href="#ourclasses">Our Classes</AnchorLink>
            <AnchorLink href="#contactus">Contact Us</AnchorLink>
          </div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <div className="flex flex-col gap-2 mt-5">
            <p>example@email.com</p>
            <p>+62 (851) 728 528</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
