import React from "react";
import { Link, Outlet } from "react-router-dom";
function Services(props) {
  return (
    <div>
      This is Serviiiiiices
      <br />
      <Link to="/services/marketing">MK</Link>
      <br />
      <Link to="/services/dev">DEV</Link>
      <Outlet />
    </div>
  );
}

export default Services;
