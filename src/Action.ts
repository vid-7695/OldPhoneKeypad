export enum ActionKind {
    OnePress = 'ONE_PRESS',
    TwoPress = 'TWO_PRESS',
    ThreePress = 'THREE_PRESS',
    FourPress  = 'FOUR_PRESS',
    FivePress = 'FIVE_PRESS',
}

export type Action = {
    type: ActionKind,
    payload: string
}

export const onePressAction: Action  ={
    type: ActionKind.OnePress,
    payload: "1"
}

export const twoPressAction: Action = {
    type: ActionKind.TwoPress,
    payload: "2abc"
}

export const threePressAction: Action = {
    type: ActionKind.ThreePress,
    payload: "3def"
}

export const fourPressAction: Action = {
    type: ActionKind.FourPress,
    payload: "4ghi"
}

export const fivePressAction: Action = {
    type: ActionKind.FivePress,
    payload: "5jkl"
}
