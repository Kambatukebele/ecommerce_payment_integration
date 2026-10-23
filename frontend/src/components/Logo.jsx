import { Link } from "react-router";
const Logo = ({ to }) => {
  return (
    <Link to={to} className="text-xl font-semibold">
      Ventro
    </Link>
  );
};

export default Logo;
