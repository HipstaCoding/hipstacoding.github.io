const EXAMPLES = {
  html: "html-examples-273kz",
};

export default function CodeSanbox({
  height = 600,
  stage,
  id,
  lesson,
  example,
  files,
}) {
  const sanboxId = id || EXAMPLES[stage];
  const initalPath = encodeURIComponent(`/${lesson}/${example}/index.html`);
  const module = files
    .map(file => encodeURIComponent(`/${lesson}/${example}/${file}`))
    .join(",");
  const src = `https://codesandbox.io/embed/${sanboxId}?fontsize=15&hidenavigation=1&initialpath=${initalPath}&moduleview=0&theme=dark&hidedevtools=1&module=${module}&view=split&expanddevtools=0&forcerefresh=1`;
  return (
    <iframe
      src={src}
      style={{
        width: "100%",
        height: `${height}px`,
        border: 0,
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="html-examples"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  );
}
