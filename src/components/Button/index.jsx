import P from "prop-types";
import { useCounterContext } from "@/context/CounterContext";

export const Button = ({onButtonClick, title, disabled = false}) => {
    const [state, actions] = useCounterContext()
    
    return(
        <button disabled={disabled} onClick={onButtonClick}>
            {title}
        </button>
    )
}

Button.prototype = {
    onButtonClick: P.func.isRequired,
    title: P.string.isRequired,
}