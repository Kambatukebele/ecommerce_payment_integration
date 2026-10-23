const ContactInfoItem = ({ href, icon, text }) => {
  return (
    <a href={href} className="flex justify-start items-center gap-1">
      <span>{icon}</span>
      <p className="text-xs">{text}</p>
    </a>
  );
};

export default ContactInfoItem;
