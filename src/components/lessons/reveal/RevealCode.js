import copyWithout from "lib/utils/object";
import { useContext, forwardRef } from "react";
import { RevealContext } from "../reveal/RevealProvider";

const HIGHLIGHT_REGEX = /^\[(.+)\]$/;

const RevealCode = forwardRef((props, ref) => {
  const mdLineNumbers = Object.keys(props).find(k => HIGHLIGHT_REGEX.test(k));

  const propsCopy = copyWithout(props, ["metastring"]);

  const reveal = useContext(RevealContext);

  const disableSlideChange = () => {
    if (!reveal) return;
    const { mouseWheel } = reveal.getConfig();
    if (!mouseWheel) return;
    reveal.configure({ mouseWheel: false });
  };

  const enableSlideChange = () => {
    if (!reveal) return;
    const { mouseWheel } = reveal.getConfig();
    if (mouseWheel) return;
    reveal.configure({ mouseWheel: true });
  };

  if (mdLineNumbers) {
    const htmlLineNumbers = mdLineNumbers.replace(HIGHLIGHT_REGEX, "$1");
    const propsCopy = copyWithout(props, ["metastring", mdLineNumbers]);
    return (
      <code
        {...propsCopy}
        ref={ref}
        onMouseOver={disableSlideChange}
        onMouseLeave={enableSlideChange}
        data-line-numbers={htmlLineNumbers}
      />
    );
  }

  return (
    <code
      {...propsCopy}
      ref={ref}
      onMouseOver={disableSlideChange}
      onMouseLeave={enableSlideChange}
      data-line-numbers={
        Object.prototype.hasOwnProperty.call(props, "data-line-numbers")
          ? props["data-line-numbers"]
          : true
      }
      data-trim
    />
  );
});

RevealCode.displayName = "RevealCode";

export default RevealCode;
