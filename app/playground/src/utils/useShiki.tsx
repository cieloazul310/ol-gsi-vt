import { Text, useAsync } from "@yamada-ui/react";
import parse from "html-react-parser";
import {
  createHighlighterCore,
  type HighlighterCore,
  type CodeToHastOptions,
} from "shiki/core";
import darkPlus from "shiki/themes/dark-plus.mjs";
import json from "shiki/langs/json.mjs";

/**
 * ref:
 * https://mailingui.com/blog/002-caching-shiki-for-faster-build-times
 */
const highlighterCache = new Map<string, Promise<HighlighterCore>>();

function useHighlighter() {
  const highlighter = useAsync(async () => {
    const cached = highlighterCache.get("highlighter");
    if (cached) {
      const cachedHighlighter = await cached;
      return cachedHighlighter;
    }
    const highlighterPromise = createHighlighterCore({
      themes: [darkPlus],
      langs: [async () => import("shiki/langs/javascript.mjs"), json],
      loadWasm: async () => import("shiki/wasm"),
    });
    const highlighterCore = await highlighterPromise;
    highlighterCache.set("highlighter", highlighterPromise);
    return highlighterCore;
  }, [highlighterCache]);

  return highlighter;
}

function useShiki(input: string, options: CodeToHastOptions) {
  const { value, loading, error } = useHighlighter();
  const code = value?.codeToHtml(input, options);
  if (!code || loading) return <Text color="white">Loading...</Text>;
  if (error) return <Text color="red.100">Error!</Text>;
  return parse(code);
}

export default useShiki;
