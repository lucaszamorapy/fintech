import sidenav from "../../config/sidenav.json";
import FintechSVG from "../../assets/FintechSVG";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech Logo" />
      <ul>
        {sidenav.map((item) => (
          <li>
            <span>
              <img src={item.image} alt="" />
            </span>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidenav;
