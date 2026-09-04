function TextStats({ words, characters }) {
  return (
    <div className="text-stats">
      <div>
        <span>Words</span>
        <strong>{words}</strong>
      </div>

      <div>
        <span>Characters</span>
        <strong>{characters}</strong>
      </div>
    </div>
  );
}

export default TextStats;