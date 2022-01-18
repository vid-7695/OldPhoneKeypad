import StackItem, {Button} from "@fluentui/react"
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
import {useKeyButtonStyles} from "./Keyboard.styles";




export const Keyboard:React.FC = () => {
    const buttonPress = (action: ActionKind, currentString: string, currentButtonCounter: number, payLoad: string)  => {
        const isKeyCountResetNeeded = isDelayedKeyPress(ActionKind.FourPress);
        var updatedButtonCounter = currentButtonCounter;
        var updatedString = currentString;
        if(isKeyCountResetNeeded){
            updatedString = updatedString +getChar(0, payLoad);
            updatedButtonCounter =1 ;

        } else {
            updatedString = updatedString + payLoad.charAt(0);
            updatedButtonCounter = updatedButtonCounter+1;
        }
        return {currentButtonCounter: updatedButtonCounter, currentString: updatedString};
    }
    const styles = useKeyButtonStyles();
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
            <Stack.Item>
                {state.currentValue}
            </Stack.Item>
            <Stack.Item>
                <Stack horizontal>
                    <Button onClick={() => dispatch(onePressAction)} styles = {styles.alphaNumericButtonStyle}>
                        <AlphaNumberButton inputSequence={"1"} buttonID={0} />
                    </Button>
                    <Button styles = {styles.alphaNumericButtonStyle} onClick={() => dispatch(twoPressAction)}>
                        <AlphaNumberButton inputSequence={"2abc"} buttonID={1}/>
                    </Button>
                    <Button styles = {styles.alphaNumericButtonStyle} onClick={()=> dispatch(threePressAction)}>
                        <AlphaNumberButton buttonID={2} inputSequence={"3def"}/>
                    </Button>
                </Stack>
            </Stack.Item>
            <Stack.Item>
                <Stack horizontal>
                    <Button styles = {styles.alphaNumericButtonStyle} onClick={()=> dispatch(fourPressAction)}>
                        <AlphaNumberButton inputSequence={"4ghi"} buttonID={3}/>
                    </Button>
                    <Button styles = {styles.alphaNumericButtonStyle} onClick={() => dispatch(fivePressAction)}>
                        <AlphaNumberButton inputSequence={"5jkl"} buttonID={4}/>
                    </Button>
                    <Button styles = {styles.alphaNumericButtonStyle} >
                        <AlphaNumberButton inputSequence={""} buttonID={5}/>
                    </Button>
                </Stack>
            </Stack.Item>
        </Stack>
    )
}