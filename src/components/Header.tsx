
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-200 p-4 border-b-2 border-blue-500">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "Times New Roman, serif" }}>
          COMPANY INTERNAL WIKI
        </h1>
        <p className="mb-4">Last updated: May 23, 2025</p>
      </div>
      <div className="flex justify-center gap-2 flex-wrap">
        <Link to="/" className="px-3 py-1 bg-white text-blue-800 border border-blue-500 hover:bg-blue-100">
          Home
        </Link>
        <Link to="/wiki" className="px-3 py-1 bg-white text-blue-800 border border-blue-500 hover:bg-blue-100">
          Wiki
        </Link>
        <Link to="/status" className="px-3 py-1 bg-white text-blue-800 border border-blue-500 hover:bg-blue-100">
          Server Status
        </Link>
        <Link to="/about" className="px-3 py-1 bg-white text-blue-800 border border-blue-500 hover:bg-blue-100">
          About
        </Link>
        <Link to="/help" className="px-3 py-1 bg-white text-blue-800 border border-blue-500 hover:bg-blue-100">
          Help
        </Link>
      </div>
    </div>
  );
};

export default Header;
