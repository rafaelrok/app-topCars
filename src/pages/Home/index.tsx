import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="base-card-home home-card">
                <div className="home-content-container">
                    <div>                     
                        <h1>O carro perfeito para você</h1>
                        <p>
                            Conheça nossos carros e dê mais um passo na
                            realização de seu sonho
                        </p>
                    </div>                                  
                </div>
                <div className="home-image-container">
                    <MainImage />
                </div>
            </div>
            <div className="home-btn-container">
                <Link to="/products">
                    <ButtonIcon />
                </Link>
                <p>Comece agora a navegar</p>
            </div>
        </div>
    );
};

export default Home;
