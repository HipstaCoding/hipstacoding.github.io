import MdxWrapper from "./MdxWrapper";
import revealComponents from "components/lessons/reveal";
import Hotkey from "components/Hotkey";
import Code from "../reveal/RevealCode";
import Pre from "../reveal/RevealPre";
import icons from "components/common/Icons";

const A = props => <a {...props} target="blank" />;

export default {
  wrapper: MdxWrapper,
  code: Code,
  a: A,
  pre: Pre,
  Code,
  Hotkey,
  ...revealComponents,
  ...icons,
};
