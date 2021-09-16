import React, { useState } from 'react';
import Slider from "react-slick";
import TextField, { Input } from '@material/react-text-field/dist/index';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import { Container, Carousel, Search, Logo, Wrapper, CarouselTitle } from './styles';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [modalOpened, setModalOpened] = useState(true);
   
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      adaptiveHeight: true,
    };

    function handleKeyPress(e) {
      //if (e.charCode === 13) {
      if (e.key === 'Enter') {
        setQuery(inputValue);
      }
    }

    return(
      <Wrapper>
        <Container>
          <Search>
            <Logo src={logo} alt="Logo do Restaurante" />
              <TextField
                label="Pesquisar Restaurantes"
                outlined
                trailingIcon={<MaterialIcon role="button" icon="search" />}>
                <Input 
                  value={inputValue} 
                  onKeyPress={handleKeyPress}                 
                  onChange={(e) => setInputValue(e.target.value)} 
                />
              </TextField>
              <CarouselTitle>Na sua Área</CarouselTitle>
              <Carousel {...settings}>
                <Card photo={restaurante} title="Restaurante 1"/>
                <Card photo={restaurante} title="Restaurante 2"/>
                <Card photo={restaurante} title="Restaurante 3"/>
                <Card photo={restaurante} title="Restaurante 4"/>
                <Card photo={restaurante} title="Restaurante 5"/>
                <Card photo={restaurante} title="Restaurante 6"/>
                <Card photo={restaurante} title="Restaurante 7"/>
              </Carousel>
          </Search>
          <RestaurantCard />
        </Container>
        <Map query={query} />
        {/*<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} /> */}
      </Wrapper>
    );
};                    

export default Home;