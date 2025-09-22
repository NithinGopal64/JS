import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
const today = dayjs();

export const deliveryOptions = [
  {
    id: 1,
    days: today.add(5, "days").format("dddd, MMMM D"),
    priceCents: 0,
  },
  {
    id: 2,
    days: today.add(3, "days").format("dddd, MMMM D"),
    priceCents: 499,
  },
  {
    id: 3,
    days: today.add(1, "days").format("dddd, MMMM D"),
    priceCents: 999,
  },
];
