const DifficultySelect = ({ updateWordCount }) => {
  return (
    <div>
      <button onClick={() => updateWordCount(1)}>Wordle</button>
      <button onClick={() => updateWordCount(2)}>Dordle</button>
      <button onClick={() => updateWordCount(4)}>Quordle</button>
      <button onClick={() => updateWordCount(8)}>Octordle</button>
      <button onClick={() => updateWordCount(16)}>Sedecordle</button>
    </div>
  )
}

export default DifficultySelect