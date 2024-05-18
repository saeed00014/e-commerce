import { Link } from "react-router-dom";

type Props = {
  path: string;
  text: string;
};

const NavLink = ({ path, text }: Props) => {
  return (
    <Link className="flex items-center h-full px-4" to={path}>
      {text}
    </Link>
  );
};

export default NavLink;
