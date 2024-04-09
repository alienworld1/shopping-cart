import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NavLink = ({link, text}) => (
  <Link className="link" to={link}>
      {text}
  </Link>
)

NavLink.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};

const NavBar = () => (
  <nav>
    <ul className="flex text-xl items-center h-full gap-8">
    <NavLink link='/' text='Home'/>
    <NavLink link='/' text='Shop'/>
    <NavLink link='/' text='Cart'/>
    </ul>
  </nav>
);

export default NavBar;