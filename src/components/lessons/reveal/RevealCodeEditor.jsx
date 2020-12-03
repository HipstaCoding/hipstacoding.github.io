import { useContext } from "react";
import CodeEditor from "../code-editor/CodeEditor";
import { RevealContext } from "../reveal/RevealProvider";

export default function RevealCodeEditor(props) {
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

  // TODO: add throttle
  return (
    <CodeEditor
      {...props}
      onMouseOver={disableSlideChange}
      onMouseLeave={enableSlideChange}
    />
  );
}
