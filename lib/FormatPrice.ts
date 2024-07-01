export const FormatPrice = (price: number) => {
  return new Intl.NumberFormat("es-HN", {
    style: "currency",
    currency: "HNL",
  }).format(price);
};
