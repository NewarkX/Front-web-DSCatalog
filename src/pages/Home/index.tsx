import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MainImage } from '../../core/assets/images/main-image.svg';
import ButtonIcon from '../../core/components/ButtonIcon';
import'./styles.scss';

const Home = () => (
    <div className="home-container">
        <div className="row home-content">
            <div className="col-6 home-text">
                <h1 className="text-tittle" >Conheça o melhor <br/> catálogo de produtos</h1>
                <p className="text-subtitle" >Ajudaremos a você a encontrar os melhores <br/> produtos disponíveis no mercado</p>
                <Link to="/catalog" >
                    <ButtonIcon text="inicie agora a sua busca" />
                </Link>  
            </div>
            <div className="col-6">
                <MainImage className="main-image" />
            </div>
        </div>
    </div>
);

export default Home;