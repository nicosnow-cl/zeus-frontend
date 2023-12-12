export const formatNumberToString = (
  num: number,
  separator: string = '.',
  decimalsSeparator: string = ','
): string => {
  const parts = num.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)

  return parts.join(decimalsSeparator)
}
