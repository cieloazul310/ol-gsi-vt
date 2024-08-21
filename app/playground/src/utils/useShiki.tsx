import { Text, useAsync } from "@yamada-ui/react";
import parse from "html-react-parser";
import { codeToHtml, type CodeToHastOptions } from "shiki/bundle-web.mjs";

function useShiki(input: string, options: CodeToHastOptions) {
  const { value, loading, error } = useAsync(async () => {
    const code = await codeToHtml(input, options);
    return code;
  }, [input]);
  if (loading) return <Text color="white">Loading...</Text>;
  if (error) return <Text color="red.100">Error!</Text>;
  if (!value) return null;
  return parse(value);
}

export default useShiki;
