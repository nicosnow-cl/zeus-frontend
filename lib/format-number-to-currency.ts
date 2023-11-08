export const formatNumberToCurrency = (number: number): string => {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(number)
}
