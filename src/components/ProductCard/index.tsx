import './styles.css';

import ProductImg from 'assets/images/product.png';


const ProductCard = () => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do produto" />
            </div>
            <div className="card-bottom-container">
                <h6>Audi Supra TT</h6>            
            </div>
            <div className="card-bottom-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            </div>
            <div>
                <div className="btn-container">
                    <button className="btn btn-content">
                        <h6>COMPRAR</h6>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;