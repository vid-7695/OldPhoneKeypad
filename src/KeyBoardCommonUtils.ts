export let characters = [["1"],
    ["2", "A", "B", "C"],
["3", "D","E", "F"]];

export const getChar= (counter:number, id:number) => {
    if(characters[id].length<=1) return characters[id];
    const currentCharRoation = counter % characters[id].length;
    return characters[id][currentCharRoation];
}