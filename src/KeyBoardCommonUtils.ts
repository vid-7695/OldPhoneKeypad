import {ActionKind} from "./Action";


export const getChar= (counter:number, stringSequence: string) => {
    if(stringSequence.length<=1) return stringSequence.charAt(0);
    const currentCharRotation = (counter) % stringSequence.length;
    return stringSequence.charAt(currentCharRotation);
}
export const recordKeyPressLocally = (numberAction:ActionKind) => {
  window.localStorage.setItem(numberAction, new Date().toString());
}

export const isDelayedKeyPress = (numberAction:ActionKind)  => {
    const currenTime = new Date();
    const lastKeyPressedTimeInString = window.localStorage.getItem(numberAction);
    const lastKeyPressedTime = new Date(lastKeyPressedTimeInString==null ? "" : lastKeyPressedTimeInString);
    const gapTime = currenTime.getTime() - lastKeyPressedTime?.getTime();
    recordKeyPressLocally(numberAction);
    return gapTime > 3000;
}
