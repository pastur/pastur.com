import React, { Fragment } from "react";

import { CenterLayout, Main, Side } from "../../ui/layouts/center";
import Intro from "./Intro";
import Avatar from "./Avatar";
import Wallpaper from "./Wallpaper";

export default function Welcome() {
  return (
    <Fragment>
      <Wallpaper />
      <CenterLayout>
        <Main>
          <Intro />
        </Main>
        <Side>
          <Avatar />
        </Side>
      </CenterLayout>
    </Fragment>
  );
}
