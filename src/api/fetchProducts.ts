import { baremetalData } from "../mock/mock";

export const fetchProducts = () => {
  return Promise.resolve(Object.values(baremetalData));
};
