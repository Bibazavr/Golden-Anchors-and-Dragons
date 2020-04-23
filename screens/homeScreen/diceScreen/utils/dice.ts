export const diceDrop = (facets: number): number => {
    return getRndInteger(1, facets);
}

export const getRndInteger = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}