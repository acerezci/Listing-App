import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-16 bg-gray-900">
      <div className="text-white mr-4">
        <Link to="/">Home</Link>
      </div>
      <div className="text-white mr-4">
        <Link to="/addlink">Add Link</Link>
      </div>
    </div>
  );
};

export default Header;
