import './styles.css'
// 0 1 2
// 3 4 5
// 6 7 8


function Square({ value }) {

    return (
        <button className="square">
            {value}
        </button>
    )
}

export default function TicTacToe() {


    return (
        <div className="tic-tac-toe-container">
            <div className="row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="row">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    )
}