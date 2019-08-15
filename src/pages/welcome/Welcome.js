import React, { Fragment } from "react";

import Main from "./Main";
import Side from "./Side";
import Wallpaper from "./Wallpaper";

export default function Welcome() {
  return (
    <Fragment>
      <Wallpaper />
      <div className="content-wrapper">
        <Main />
        <Side />
      </div>
    </Fragment>
  );
}
