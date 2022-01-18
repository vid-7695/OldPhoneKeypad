import {Stack, StackItem} from "@fluentui/react";

interface IAlphaNumericButton {
    inputSequence:string;
    buttonID:number;
    onChangeEvent?: any;
}
export const AlphaNumberButton:React.FC<IAlphaNumericButton> = ({inputSequence, buttonID}) => {
    const topCharacter = inputSequence[0];
    const bottomSequence = inputSequence.slice(1, inputSequence.length);

    return (
        <Stack>
            <StackItem>
                {topCharacter}
            </StackItem>
            <StackItem>
                {bottomSequence}
            </StackItem>
        </Stack>
    )
};