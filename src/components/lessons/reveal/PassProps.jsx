import { Children } from "react";

export default function PassProps({ children, ...props }) {
  const [firstChild, ...otherChildren] = Children.toArray(children);

  return (
    <firstChild.type {...firstChild.props} {...props}>
      {[...firstChild.props.children, ...otherChildren]}
    </firstChild.type>
  );
}
