import copyWithout from "lib/utils/object";

const HIGHLIGHT_REGEX = /^\[(.+)\]$/;

const Code = props => {
  const mdLineNumbers = Object.keys(props).find(k => HIGHLIGHT_REGEX.test(k));
  if (mdLineNumbers) {
    const htmlLineNumbers = mdLineNumbers.replace(HIGHLIGHT_REGEX, "$1");
    const propsCopy = copyWithout(props, ["metastring", mdLineNumbers]);
    return <code {...propsCopy} data-line-numbers={htmlLineNumbers} />;
  }

  return <code data-line-numbers data-trim {...props} />;
};

export default Code;
