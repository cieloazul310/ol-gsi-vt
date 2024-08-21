import { useAsync } from "@yamada-ui/react";
import parse from "html-react-parser";
import { codeToHtml, type CodeToHastOptions } from "shiki/bundle-web.mjs";

function useShiki(input: string, options: CodeToHastOptions) {
  const { value } = useAsync(async () => {
    const code = await codeToHtml(input, options);
    return code;
  }, [input, options]);
  if (!value) return null;
  return parse(value);
}

export default useShiki;
