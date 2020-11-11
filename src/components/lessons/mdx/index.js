import copyWithout from "../../../lib/utils/object";
import MdxWrapper from "./MdxWrapper";

const HIGHLIGHT_REGEX = /^\[(.+)\]$/;

const Code = props => {
  const mdLineNumbers = Object.keys(props).find(k => HIGHLIGHT_REGEX.test(k));
  if (mdLineNumbers) {
    const htmlLineNumbers = mdLineNumbers.replace(HIGHLIGHT_REGEX, "$1");
    const propsCopy = copyWithout(props, ["metastring", mdLineNumbers]);
    return <code {...propsCopy} data-line-numbers={htmlLineNumbers} />;
  }

  return <code {...props} />;
};

const A = props => <a {...props} target="blank" />;

export default {
  wrapper: MdxWrapper,
  code: Code,
  a: A,
};
