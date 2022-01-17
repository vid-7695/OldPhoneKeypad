import {Button, Stack, StackItem} from "@fluentui/react";
import {useEffect, useState} from "react";
import {getChar} from "./KeyBoardCommonUtils";

interface IAlphaNumericButton {
    inputSequence:string;
    buttonID:number;
    onChangeEvent?: any;
}
export const AlphaNumberButton:React.FC<IAlphaNumericButton> = ({inputSequence}) => {
    const topCharacter = inputSequence[0];
    const bottomSequence = inputSequence.slice(1, inputSequence.length);
    const [buttonCounter, setButtonCounter] = useState(-1);
    let lastButtonPressTime;

    useEffect(()=>{
        lastButtonPressTime = new Date();
        window.localStorage.setItem('lastButtonClick', new Date().toString());
    }, [])

    const mouseClickActions = (buttonID?:any) => {
        const currentTime = new Date();
        const lastStroedDate  = window.localStorage.getItem('lastButtonClick');
        // @ts-ignore
        lastButtonPressTime = new Date(lastStroedDate);
        var gapTime = currentTime.getTime() - lastButtonPressTime?.getTime();
        console.log(gapTime);
        if(gapTime>3000) {
            // Change the text value on every click
            console.log("BCHitting");
            console.log(buttonCounter);
            console.log("CV");
            console.log(getChar(-1,2))
            setButtonCounter(-1);
            lastButtonPressTime = new Date();
            window.localStorage.setItem('lastButtonClick', new Date().toString());
            return;
        }
        setButtonCounter(buttonCounter => buttonCounter+1);
        console.log("BC");
        console.log(buttonCounter);
        console.log("CV");
        console.log(getChar(buttonCounter,2))
        lastButtonPressTime = new Date();
        window.localStorage.setItem('lastButtonClick', new Date().toString());
    };

    return (
        <Button onClick={mouseClickActions}>
        <Stack>
            <StackItem>
                {topCharacter}
            </StackItem>
            <StackItem>
                {bottomSequence}
            </StackItem>
        </Stack>
        </Button>
    )
}