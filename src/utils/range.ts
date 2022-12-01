export const range = (value: number, istart: number, istop: number, ostart: number, ostop: number) => {
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}

export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}