import { FaGithub } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-10 bg-yellow-200">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">ToDoアプリ</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1"> 
          <li>
            <a href="https://github.com/Natti3588"><FaGithub className="w-6 h-6" /></a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
