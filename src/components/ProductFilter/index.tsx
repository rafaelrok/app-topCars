import './styles.css';


const ProductFilter = () => {

    return (
        <div className="base-card product-filter-container">
            <form className="product-filter-form">
                <div className="product-filter-name-container">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite sua busca"
                        name="name"
                    />
                    <button className="product-filter-search-icon">
                        BUSCAR
                    </button>
                </div>
                <div className="product-filter-bottom-container">
                </div>
            </form>
        </div>
    );
};

export default ProductFilter;
