import { useEffect, useState } from "react";

export const useFilteredProducts = (products: any[], filter: any) => {
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    setFiltered(products.filter(p => p.default.cpuBrand.includes(filter)));
  });

  return filtered;
};
