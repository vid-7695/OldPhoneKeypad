import {Button, TextField} from "@fluentui/react"
import { Stack } from "@fluentui/react/lib/Stack"
import {useEffect, useRef, useState} from "react";
import {getChar} from "./KeyBoardCommonUtils";

export interface ButtonObject{
    buttonId:Number;
    numberValue:string;
    characterList?:string;
}

interface  IKeyboardProps {
    buttonProp:ButtonObject[];
}
export const KeyboardRow:React.FC<IKeyboardProps> = ({
    buttonProp,
                                                     }) => {

    const [buttonCounter, setButtonCounter] = useState(-1);
    const [initialString, setInitalStirng] = useState("");
    const buttonObjects = buttonProp;
    let lastButtonPressTime:any = undefined;

    const mouseClickActions = (buttonID?:any) => {
        setButtonCounter(buttonCounter => buttonCounter+1);
        const currentTime = new Date();
        const lastStroedDate  = window.localStorage.getItem('lastButtonClick');
        // @ts-ignore
        lastButtonPressTime = new Date(lastStroedDate);
        var gapTime = currentTime.getTime() - lastButtonPressTime?.getTime();
        console.log(gapTime);
        if(gapTime>3000) {
            // Change the text value on every click
            setButtonCounter(buttonCounter => buttonCounter = -1);
        }
        console.log("Button counter value");
        console.log(buttonCounter);
        setInitalStirng(getChar(buttonCounter,buttonID)?.toString());
        lastButtonPressTime = new Date();
        window.localStorage.setItem('lastButtonClick', new Date().toString());
    };


    return (
        <div>
            <Stack>
            <Stack horizontal>
                <Button  onMouseDown={() => {mouseClickActions(buttonObjects[0].buttonId)}}  />
                <Button onMouseDown={() => {mouseClickActions(buttonObjects[1].buttonId)}} />
                <Button onMouseDown={() => {mouseClickActions(buttonObjects[2].buttonId)}}/>
            </Stack>
                <Stack horizontal>
                    <Button onMouseDown={() => {mouseClickActions()}}  />
                    <Button onMouseDown={() => {mouseClickActions()}} />
                    <Button/>
                </Stack>
                <Stack horizontal>
                    <Button onMouseDown={() => {mouseClickActions()}}  />
                    <Button onMouseDown={() => {mouseClickActions()}} />
                    <Button/>
                </Stack>
            </Stack>
            <input value={initialString}/>
        </div>
    )
}