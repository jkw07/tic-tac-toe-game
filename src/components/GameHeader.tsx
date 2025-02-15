export const GameHeader = ({text}: any) => {
    return (
      <>
        <div className="game-logo">
          <i className="fa-solid fa-x fa-2xl icon iconx"></i>
          <i className="fa-solid fa-o fa-2xl icon icono"></i>
        </div>
        <div className="status-info">{text}</div>
      </>
    )
}