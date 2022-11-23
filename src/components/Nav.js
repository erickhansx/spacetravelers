import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => (
  <div className="nav">
    <div className="nav__logo">
      <img className="nav__image" src="/img/planet.png" alt="planet" />
      Space Travelers&apos; Hub
    </div>
    <div className="nav__links">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/">Missions</NavLink>
      <NavLink to="/">My Profile</NavLink>
    </div>
  </div>
);

export default Nav;
