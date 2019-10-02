export const discount = value => {
  return value.price.discount
    ? value.price.price - (value.price.price * value.price.discount) / 100
    : value.price.price
}
