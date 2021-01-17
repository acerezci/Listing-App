import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <div className="h-16 bg-gray-900">
    <div className="min-h-full flex justify-center items-center">
      <div className="text-white mr-4">
        <Link to="/">Home</Link>
      </div>
      <div className="text-white mr-4">
        <Link to="/addlink">Add Link</Link>
      </div>
    </div>
  </div>
);

export default Header;
