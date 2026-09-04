import { useEffect, useState } from "react";
import TextStats from "./TextStats";

function TextAnalyzer() {
  const [text, setText] = useState("");

  const characterCount = text.length;

  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  useEffect(() => {
    document.title = `Text Analyzer - ${characterCount} Characters`;
  }, [characterCount]);

  return (
    <div className="text-analyzer">
      <h2>Text Analyzer</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write something here..."
      />

      <TextStats
        words={wordCount}
        characters={characterCount}
      />
    </div>
  );
}

export default TextAnalyzer;