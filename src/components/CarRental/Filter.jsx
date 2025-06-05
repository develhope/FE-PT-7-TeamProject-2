import './Filter.css';

const Filter = ({ brand, setBrand, type, setType, maxPrice, setMaxPrice, brands, types }) => {  
  
    const resetFilters = () => {
    setBrand('All');
    setType('All');
    setMaxPrice(3700);
  };

  return (
    <aside className="car-filter-panel">
      <h3><i class="fa-solid fa-filter"></i>Filter Cars</h3>

      <label>
        Brand
        <select value={brand} onChange={e => setBrand(e.target.value)}>
          {brands.map((b, i) => <option key={i} value={b}>{b}</option>)}
        </select>
      </label>

      <label>
        Type
        <select value={type} onChange={e => setType(e.target.value)}>
          {types.map((t, i) => <option key={i} value={t}>{t}</option>)}
        </select>
      </label>

      <label>
        Max Price: ${maxPrice}/day
        <input
          type="range"
          min="100"
          max="3700"
          step="100"
          value={maxPrice}
          onChange={e => setMaxPrice(Number(e.target.value))}
        />
      </label>
      <button className="button-submit" onClick={resetFilters}>
        Reset Filters
      </button>
    </aside>
  );
};

export default Filter;
