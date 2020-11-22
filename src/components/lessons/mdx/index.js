import MdxWrapper from "./MdxWrapper";
import {
  HorizontalCodeEditor,
  ImgIcon,
  Fragment,
  AnimatedCode,
} from "components/lessons/reveal";
import Hotkey from "components/Hotkey";
import Code from "../reveal/RevealCode";

const A = props => <a {...props} target="blank" />;

export default {
  wrapper: MdxWrapper,
  code: Code,
  a: A,
  HorizontalCodeEditor,
  Code,
  Hotkey,
  ImgIcon,
  Fragment,
  AnimatedCode,
};
