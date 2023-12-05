// import logo from './logo.svg';
import "./styles.css";

const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}) {
    switch(type){
        case ACTIONS.ADD_DIGIT:
        return{
            ...state,
            currentOperand: `${currentOperand || ""}${payload.digit}`
        }
    }
}
dispatch({type: ACTIONS.ADD_DIGIT, digit, payload: {digit: 1}}) {/*This adds the digit to the current opperand */}
function App() {
    const[{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer , {})
return (
    <div className="calculator-grid">
        <div className="output"> {/* for upper box of the calculator */}
            <div className="previous-operand">{previousOperand} {operation}</div>
            <div className="current-operand">{currentOperand}</div> {/*current number being inputed */}
                
        </div>
        <button className="span-two">AC</button> {/*called span 2 as the clear button takes 2 columns */}
        <button>Del</button> 
        <button>÷</button>
        <button>1</button> 
        <button>2</button> 
        <button>3</button> 
        <button>*</button> {/*creating each row and button */}
        <button>4</button> 
        <button>5</button> 
        <button>6</button> 
        <button>+</button> 
        <button>7</button> 
        <button>8</button> 
        <button>9</button> 
        <button>-</button> 
        <button>.</button> 
        <button>0</button> 
        <button className="span-two">=</button> 
    </div>

)
}

export default App;
