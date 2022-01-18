import {Button} from "@fluentui/react"
import {Stack} from "@fluentui/react/lib/Stack"
import {useReducer} from "react";
import {AlphaNumberButton} from "./AlphaNumericButton";
import {initialCounterState, State} from "./State";
import {
    Action,
    ActionKind,
    fivePressAction,
    fourPressAction,
    onePressAction,
    threePressAction,
    twoPressAction
} from "./Action";
import {getChar, isDelayedKeyPress} from "./KeyBoardCommonUtils";




export const Keyboard:React.FC = () => {
    const buttonPress = (action: ActionKind, currentString: string, currentButtonCounter: number, payLoad: string)  => {
        const isKeyCountResetNeeded = isDelayedKeyPress(ActionKind.FourPress);
        var updatedButtonCounter = currentButtonCounter;
        var updatedString = currentString;
        if(isKeyCountResetNeeded){
            updatedString = updatedString +getChar(0, payLoad);
            updatedButtonCounter =1 ;

        } else {
            //Immediate key press
            updatedString = updatedString + payLoad.charAt(0);
            updatedButtonCounter = updatedButtonCounter+1;
        }
        console.log("Updated State");
        console.log(updatedButtonCounter)
        return {currentButtonCounter: updatedButtonCounter, currentString: updatedString};
    }

    const reducer =  (state:State, action:Action) => {
        console.log(state);
        const  {type, payload} = action;
        const updatedState = buttonPress(type, state.currentValue, state.currentButtonCounter, payload);
        console.log(`Updated button counter: ${updatedState.currentButtonCounter}`)
        return {currentButtonCounter: updatedState.currentButtonCounter, currentValue: updatedState.currentString};
    }

    const [state, dispatch] = useReducer(reducer, initialCounterState);


    return (
            <Stack>
                {state.currentValue}
            <Stack horizontal>
                <Button onClick={() => dispatch(onePressAction)}>
                    <AlphaNumberButton inputSequence={"1"} buttonID={0} />
                </Button>
                <Button onClick={() => dispatch(twoPressAction)}>
                    <AlphaNumberButton inputSequence={"2abc"} buttonID={1}/>
                </Button>
                <Button onClick={()=> dispatch(threePressAction)}>
                    <AlphaNumberButton buttonID={2} inputSequence={"3def"}/>
                </Button>
            </Stack>
                <Stack horizontal>
                    <Button onClick={()=> dispatch(fourPressAction)}>
                         <AlphaNumberButton inputSequence={"4ghi"} buttonID={3}/>
                    </Button>
                    <Button onClick={() => dispatch(fivePressAction)}>
                        <AlphaNumberButton inputSequence={"5jkl"} buttonID={4}/>
                    </Button>
                    <Button >
                        <AlphaNumberButton inputSequence={""} buttonID={5}/>
                    </Button>
                </Stack>
            </Stack>
    )
}