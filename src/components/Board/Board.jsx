import Row from "../Row/Row"

const Board = (props) => {
  const guessLimitArr = new Array(props.guessLimit)
  return (
    <div className="board">
      {guessLimitArr.map((x, idx) => (
        <Row key={idx} />
      ))}
    </div>
  )
}

export default Board