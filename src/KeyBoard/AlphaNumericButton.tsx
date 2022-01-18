import {Stack, StackItem, Text} from "@fluentui/react";
import {useKeyButtonStyles} from "../Styles/Keyboard.styles";

interface IAlphaNumericButton {
    inputSequence:string;
    buttonID:number;
    onChangeEvent?: any;
}
export const AlphaNumberButton:React.FC<IAlphaNumericButton> = ({inputSequence, buttonID}) => {
    const topCharacter = inputSequence[0];
    const bottomSequence = inputSequence.slice(1, inputSequence.length);
    const styles = useKeyButtonStyles();
    return (
        <Stack>
            <StackItem styles={styles.textContainerStyle}>
                <Text variant="large" styles = {styles.numberTextStyles}> {topCharacter}</Text>
            </StackItem>
            <StackItem >
                <Text styles={styles.charSequenceStyles}>{bottomSequence}</Text>
            </StackItem>
        </Stack>
    )
};