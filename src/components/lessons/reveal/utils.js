export const pickLine = (snippet, lines) => {
  const newArr = [];
  const snippetArray = snippet.split("\n");
  for (const line of lines) {
    newArr.push(snippetArray[line - 1]);
  }

  return newArr.join("\n");
};
