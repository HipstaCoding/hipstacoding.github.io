import { createContext, useState, useEffect } from "react";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";

import "reveal.js/dist/reveal.css";
import "lib/reveal-theme/atom-one-light.css";
import "lib/reveal-theme/source/hipsta.scss";

export const RevealContext = createContext(null);

export default function RevealProvider(props) {
  const [revealInstance, setRevealInstance] = useState(null);

  useEffect(() => {
    const deck = new Reveal({
      overview: true,
      mouseWheel: true,
      hash: true,
      history: false,
      plugins: [Markdown, Highlight],
    });
    deck.initialize();
    setRevealInstance(deck);
  }, []);

  return <RevealContext.Provider {...props} value={revealInstance} />;
}
