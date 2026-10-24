import ButtonLInk from "./ButtonLInk";
import ContactInfoItem from "./ContactInfoItem";
import { MailCheck, PhoneLog } from "lucide-react";
import watches from "../assets/images/watches.jpg";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="w-full flex justify-center px-4 lg:px-0 lg:w-1/2">
          <div className="w-full flex flex-col gap-6 py-10 lg:px-16 xl:w-150 xl:px-0">
            <h1 className="text-3xl font-semibold sm:w-90 lg:w-full lg:text-6xl">
              Buying and selling luxury watches
            </h1>
            <hr className="w-10" />
            <p className="text-base">
              Every customer deserves a personal approach and attention to their
              wishes. We will help you choose a watch as well as sell one. We
              provide valuations, direct purchase, consignment sales and
              trade-ins, and we also take care of after-sales service.
            </p>
            <div className="w-full flex flex-wrap gap-2">
              <ButtonLInk
                extraClass="bg-black text-white hover:bg-white hover:text-black hover:border"
                button_text="Shop offer"
              />
              <ButtonLInk
                extraClass="bg-transparent text-black border hover:bg-black hover:text-white"
                button_text="Sell your watch"
              />
            </div>
            <div className="w-full flex flex-wrap gap-2">
              <ContactInfoItem
                href="mailto:lucide@gmail.com"
                icon={<MailCheck className="w-4" />}
                text="lucide@gmail.com"
              />
              <ContactInfoItem
                href="tel:+420 999 888 777"
                icon={<PhoneLog className="w-4" />}
                text="+420 999 888 777"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:h-212">
          <img
            className="w-full h-full object-center object-cover block overflow-hidden"
            src={watches}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
