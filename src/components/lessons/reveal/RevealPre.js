import { cloneElement } from "react";

const DATA_ID = "data-id";

export default function Pre(props) {
  if (
    props &&
    props.children &&
    props.children.props &&
    props.children.props[DATA_ID]
  ) {
    const dataId = props.children.props[DATA_ID];
    const newProps = {};
    newProps["data-id"] = null;
    return (
      <pre data-id={dataId} {...props}>
        {cloneElement(props.children, newProps)}
      </pre>
    );
  }
  return <pre {...props} />;
}
