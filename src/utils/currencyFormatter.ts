export function currencyFormatter(
  amount: number,
  locale: string,
  currency: string,
) {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  })

  return formatter.format(amount)
}
