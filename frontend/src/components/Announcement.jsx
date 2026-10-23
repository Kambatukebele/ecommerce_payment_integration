import ContactInfoItem from "./ContactInfoItem";
import { MailCheck, PhoneLog, MapPin } from "lucide-react";

const Announcement = () => {
  return (
    <section className="hidden lg:flex justify-center items-center bg-black text-white">
      <div className="container flex justify-between items-center py-2">
        <ContactInfoItem
          href="mailto:lucide@gmail.com"
          icon={<MailCheck className="w-3" />}
          text="lucide@gmail.com"
        />
        <ContactInfoItem
          href="tel:+420 999 888 777"
          icon={<PhoneLog className="w-3" />}
          text="+420 999 888 777"
        />
        <ContactInfoItem
          icon={<MapPin className="w-3" />}
          text="6329 Blossom St | Silverpeak"
        />
      </div>
    </section>
  );
};

export default Announcement;
