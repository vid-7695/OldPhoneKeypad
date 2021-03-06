import {Button, TextField} from "@fluentui/react"
import {Stack} from "@fluentui/react/lib/Stack"
import {useReducer} from "react";
import {AlphaNumberButton} from "./AlphaNumericButton";
import {initialCounterState, State} from "../States/State";
import {
    Action,
    ActionKind,
    fivePressAction,
    fourPressAction,
    onePressAction,
    threePressAction,
    twoPressAction
} from "../States/Action";
import {getChar, isDelayedKeyPress} from "../Utils/KeyBoardCommonUtils";
import {useKeyButtonStyles} from "../Styles/Keyboard.styles";
import {stat} from "fs";




export const Keyboard:React.FC = () => {
    const buttonPress = (action: ActionKind, currentString: string, currentButtonCounter: number, payLoad: string)  => {
        const isKeyCountResetNeeded = isDelayedKeyPress(ActionKind.FourPress);
        var updatedButtonCounter = currentButtonCounter;
        var updatedString = currentString;
        if(isKeyCountResetNeeded){
            console.log("Never hit");
            updatedString = updatedString +getChar(0, payLoad);
            updatedButtonCounter =1 ;
        } else {
            console.log(`Updated string after : ${updatedString}`);
            updatedString = updatedString.slice(0, -1) + payLoad.charAt(0);
            console.log(`Updated string before : ${updatedString}`);
            updatedButtonCounter = updatedButtonCounter+1;
        }
        return {currentButtonCounter: updatedButtonCounter, currentString: updatedString};
    }
    const styles = useKeyButtonStyles();
    const reducer =  (state:State, action:Action) => {
        const  {type, payload} = action;
        const updatedState = buttonPress(type, state.currentValue, state.currentButtonCounter, payload);
        return {currentButtonCounter: updatedState.currentButtonCounter, currentValue: updatedState.currentString};
    }

    const [state, dispatch] = useReducer(reducer, initialCounterState);


    return (
        <Stack>
            <Stack.Item>
               <TextField placeholder={state.currentValue}/>
            </Stack.Item>
            <Stack.Item>
                <Stack horizontal>
                    <Button onClick={() => dispatch(onePressAction)} styles = {styles.alphaNumericButtonStyle}>
                        <AlphaNumberButton inputSequence={onePressAction.payload}  />
                    </Button>
                    <Button styles = {styles.alphaNumericButtonStyle} onClick={() => dispatch(twoPressAction)}>
                        <AlphaNumberButton inputSequence={twoPressAction.payload} />
                    </Button>
                    <Button styles = {styles.alphaNumericButtonStyle} onClick={()=> dispatch(threePressAction)}>
                        <AlphaNumberButton inputSequence={threePressAction.payload}/>
                    </Button>
                </Stack>
            </Stack.Item>
            <Stack.Item>
                <Stack horizontal>
                    <Button styles = {styles.alphaNumericButtonStyle} onClick={()=> dispatch(fourPressAction)}>
                        <AlphaNumberButton inputSequence={fourPressAction.payload} />
                    </Button>
                    <Button styles = {styles.alphaNumericButtonStyle} onClick={() => dispatch(fivePressAction)}>
                        <AlphaNumberButton inputSequence={fivePressAction.payload}/>
                    </Button>
                    <Button styles = {styles.alphaNumericButtonStyle} >
                        <AlphaNumberButton inputSequence={""} />
                    </Button>
                </Stack>
            </Stack.Item>
        </Stack>
    )
}