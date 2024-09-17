"use client"
import { useCounterContext } from "@/context/CounterContext"
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";


export default function Home() {
    const [state, actions] = useCounterContext();
  
    return (
      <main>
        <Heading />

        <div>
            <Button onButtonClick={actions.increase} title="increase"/>
            <Button onButtonClick={actions.decrease} title="decrease"/>
            <Button onButtonClick={actions.reset} title="Reset"/>
            <Button onButtonClick={() => actions.setCounter({ counter: 10 })} title="set 10"/>
            <Button onButtonClick={() => actions.setCounter({ counter: 20 })} title="set 20"/>
            <Button disabled={state.loading} onButtonClick={actions.asyncIncrease} title="async increase"/>
            <Button disabled={state.loading} onButtonClick={actions.asyncError} title="async ERROR"/>
        </div>
      </main>
    )
  }
  