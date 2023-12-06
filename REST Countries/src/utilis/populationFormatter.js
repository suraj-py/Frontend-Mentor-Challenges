export const POPULATION_FORMATTER = new Intl.NumberFormat(undefined, {
    notation: 'standard',
})

export function numberFormatter(number) {
    return POPULATION_FORMATTER.format(number)
}