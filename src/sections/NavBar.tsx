import React from "react";

function NavBar() {
  return (
    <nav>
      <img src="/images/fireflies.svg" alt="" className="w-15 fill-white" />
      <img src="/images/menu.svg" alt="" className="w-10 fill-white" />
    </nav>
  );
}

export default React.memo(NavBar);
