import { useState, useEffect } from "react";
import parse from "html-react-parser";
import {
  createHighlighterCore,
  type HighlighterCore,
  type CodeToHastOptions,
} from "shiki/core";
import getWasm from "shiki/wasm";
import darkPlus from "shiki/themes/dark-plus.mjs";
import js from "shiki/langs/javascript.mjs";
import json from "shiki/langs/json.mjs";

function useHighlighter() {
  const [highlighter, setHighlighter] = useState<HighlighterCore>();

  useEffect(() => {
    (async () => {
      const highlighterCore = await createHighlighterCore({
        themes: [darkPlus],
        langs: [js, json],
        loadWasm: getWasm,
      });
      setHighlighter(highlighterCore);
    })();
  }, [darkPlus, js, json, getWasm]);

  return highlighter;
}

function useShiki(input: string, options: CodeToHastOptions) {
  const highlighter = useHighlighter();
  if (!highlighter) return "<pre></pre>";
  const code = highlighter.codeToHtml(input, options);

  return parse(code);
}

export default useShiki;
