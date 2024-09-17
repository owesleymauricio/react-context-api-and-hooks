import { useCounterContext } from "@/context/CounterContext";
import P from "prop-types";

export const Heading = () => {
    const [state, actions] = useCounterContext()
    
    return(
        <h1>
            {state.counter}
        </h1>
    )
}

