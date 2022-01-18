import {ActionKind} from "./Action";


/*
 Gets a character, given a character sequence from the payload
 */
export const getChar= (counter:number, stringSequence: string) => {
    if(stringSequence.length<=1) return stringSequence.charAt(0);
    const currentCharRotation = (counter) % stringSequence.length;
    return stringSequence.charAt(currentCharRotation);
}
/*
Records the last time of keypress for each Key and stores it.
Key-> Enum identifier.
Value -> LastPressed TimeStamp
 */
export const recordKeyPressLocally = (numberAction:ActionKind) => {
  window.localStorage.setItem(numberAction, new Date().toString());
}

/*
Finds out if the keypress is delayed or not.
 */
export const isDelayedKeyPress = (numberAction:ActionKind)  => {
    const currenTime = new Date();
    const lastKeyPressedTimeInString = window.localStorage.getItem(numberAction);
    const lastKeyPressedTime = new Date(lastKeyPressedTimeInString==null ? "" : lastKeyPressedTimeInString);
    const gapTime = currenTime.getTime() - lastKeyPressedTime?.getTime();
    recordKeyPressLocally(numberAction);
    return gapTime > 3000;
}
