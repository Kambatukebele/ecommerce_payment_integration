import { Link } from "react-router";

const ButtonLInk = ({ href, button_text, extraClass }) => {
  return (
    <button
      type="button"
      className={`${extraClass} px-8 py-3 rounded cursor-pointer`}
    >
      <Link className="text-base w-full h-full" to={href}>
        {button_text}
      </Link>
    </button>
  );
};

export default ButtonLInk;
