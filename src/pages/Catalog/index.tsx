import ProductCard from 'components/ProductCard';
import ProductFilter from 'components/ProductFilter';

const Catalog = () => {
    return (
        <div className="container my-4 catalog-container">
            <div className="catalog-filter-container">
                <ProductFilter />
            </div>
            <div className="row">
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default Catalog;
