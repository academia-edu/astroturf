import s from "astroturf/react";
// prettier-ignore
import _FancyBox from "./styled-tag-FancyBox.module.css";
import _FancierBox from "./styled-tag-FancierBox.module.css";
const FancyBox = /*#__PURE__*/ s("div", null, {
  displayName: "FancyBox",
  styles: _FancyBox,
});
const FancierBox = /*#__PURE__*/ s(FancyBox, null, {
  displayName: "FancierBox",
  styles: _FancierBox,
});