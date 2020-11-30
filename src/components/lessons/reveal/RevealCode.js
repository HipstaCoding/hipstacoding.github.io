import copyWithout from "lib/utils/object";

const HIGHLIGHT_REGEX = /^\[(.+)\]$/;

const Code = props => {
  const mdLineNumbers = Object.keys(props).find(k => HIGHLIGHT_REGEX.test(k));
  if (mdLineNumbers) {
    const htmlLineNumbers = mdLineNumbers.replace(HIGHLIGHT_REGEX, "$1");
    const propsCopy = copyWithout(props, ["metastring", mdLineNumbers]);
    return <code {...propsCopy} data-line-numbers={htmlLineNumbers} />;
  }

  const propsCopy = copyWithout(props, ["metastring"]);

  return <code data-line-numbers data-trim {...propsCopy} />;
};

export default Code;
