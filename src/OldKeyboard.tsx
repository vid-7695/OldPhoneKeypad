import {ITextField, SearchBox, Stack, TextField } from "@fluentui/react"
import {ButtonObject, KeyboardRow} from "./Keyboard";
import {useEffect, useRef} from "react";



export const OldKeyboard = () => {
    const firstRow:ButtonObject  = { buttonId: 0,  numberValue: "1"};
    const secondRow:ButtonObject = { buttonId: 1, numberValue:"2", characterList:"ABC"};
    const thridRow: ButtonObject = {buttonId: 2, numberValue:"3", characterList: "DEF"};
    const keyboardFirstRow:ButtonObject[] = [firstRow, secondRow, thridRow];
    return (
        <div>
            <Stack>
                <KeyboardRow buttonProp={keyboardFirstRow} />
            </Stack>
        </div>
    )
}