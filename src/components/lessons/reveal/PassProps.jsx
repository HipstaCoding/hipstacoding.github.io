import { Children } from "react";

export default function PassProps({ children, ...props }) {
  console.log(props, children);

  return Children.map(children, (child, i) => {
    if (i === 0) return <child.type {...child.props} {...props} />;
    return child;
  });
}
