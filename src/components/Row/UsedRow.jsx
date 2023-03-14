const UsedRow = ({ guess }) => {
  const guessArr = guess.split('')
  return (
    <div className="row">
      {guessArr.map((letter, idx) => (
        <div key={idx}>{letter}</div>
      ))}
    </div>
  )
}

export default UsedRow