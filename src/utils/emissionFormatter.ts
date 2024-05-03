export const emissionFormatter = (emission: number): string => {
    return emission >= 1000 ? `${(emission / 1000).toFixed(2)}t` : `${emission.toFixed(0)}kg`;
}