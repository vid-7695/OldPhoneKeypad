import { IButtonStyles, IStackItemStyles, IStackStyles, ITextStyles } from '@fluentui/react';
import { useMemo } from 'react';


interface IStyle {
    alphaNumericButtonStyle: IButtonStyles;
    textContainerStyle: IStackStyles;
    numberTextStyles: ITextStyles;
    charSequenceStyles: ITextStyles;
}

export const useKeyButtonStyles = (): IStyle =>
    useMemo(() => {
        return {
            charSequenceStyles:{
                root:{
                    color: "white",
                }
            },
            numberTextStyles: {
                root:{
                    color: "white",
                },
            },
            alphaNumericButtonStyle: {
                root: {
                    backgroundColor: 'blue',
                    alignItems: 'center',
                    borderRadius: '4px',
                    width: 60,
                    height: 60,
                    margin: 4,
                },
                rootHovered: {
                    backgroundColor: 'black',
                },
            },
            textContainerStyle: {
                root: {

                },
            },
        };
    }, []);
