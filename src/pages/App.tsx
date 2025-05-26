import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";
import { ProductCard } from "../components/ProductCard";
import { useFilteredProducts } from "../hooks/useFilteredProducts";
import { useSelector } from "react-redux";
import { Filters } from "../components/Filters";

const App = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [showFilter, setShowFilter] = useState<string>('false');

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
    });

    window.addEventListener("resize", () => {
      console.log("Resize!");
    });
  });

  const filter = useSelector((state: any) => state.filter);

  const filteredProducts = useFilteredProducts(products, filter);

  const showFilters = () => {
    if (showFilter === 'true') {
      setShowFilter('false');
    } else {
      setShowFilter('true');
    }
  }

  const FiltersToogler = () => {
    return (
      <button>
        {showFilter && (
          <a onClick={(e) => showFilters()} href="#">Masquer les filtres</a>
        )}
        {!showFilter && (
          <a onClick={(e) => showFilters()} href="#">Afficher les filtres</a>
        )}
      </button>
    )
  }

  return (
    <>
      <div>
        <h1>Catalogue Bare Metal</h1>
        <div className="filtres">
          <div className={`filtres--wrapper ${showFilter ? 'd-block' : 'd-none'}`}>
            <Filters />
          </div>
          <FiltersToogler />
        </div>
        {filteredProducts.length && <div>{filteredProducts.length} produits trouvés</div>}
        {filteredProducts.map((props, index) => (
          <ProductCard key={index} {...props} />
        ))}
      </div>
    </>
  );
};

export default App;
