import { Link } from "react-router-dom";
import { themes } from "../../lib/themes";
const Navbar = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          E Challan
        </Link>
      </div>
      <div className="flex-none relative">
        {/* Theme selector */}
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            Theme
            <svg
              width="12px"
              height="12px"
              className="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048">
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
            {themes.map((value, index) => {
              return (
                <li key={index}>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label={value}
                    value={value}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1">
          <li className="btn btn-ghost">
            <details>
              <summary>Models</summary>
              <ul className="bg-base-100 z-50 rounded-t-none p-2">
                <li>
                  <Link className="text-nowrap" to="/model1">
                    Speed Violation
                  </Link>
                </li>
                <li>
                  <Link to="/model2">Model 2</Link>
                </li>
                <li>
                  <Link to="/model3">Model 3</Link>
                </li>
                <li>
                  <Link to="/model4">Model 4</Link>
                </li>
                <li>
                  <Link to="/model5">Model 5</Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="btn btn-accent ml-3">
            <Link to="/challan">Check Challan</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
