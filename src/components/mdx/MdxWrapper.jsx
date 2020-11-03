export default function MdxWrapper({ frontmatter, children, ...props }) {
  return <section {...props}>{children}</section>;
}
