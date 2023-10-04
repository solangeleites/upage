import React from 'react';
import { Paragraph, Title } from '../../components/Text/TextStyle';
import {
  Card,
  CardText,
  ContainerCards,
  ContainerStyled,
  Text,
} from '../home/HomeStyled';
import Button from '../../components/Button/Button';
import { HomeStyled } from '../home/HomeStyled';
import { CardProducts, ContainerCardsProducts, ContainerProducts } from './ProductsStyled';

const Products = () => {
  return (
    <HomeStyled>
    <ContainerProducts style={{flexDirection:'column', height:'100%', gap:'40px'}}>
      <Title>Nuestros servicios</Title>
      <Paragraph>
        Te damos dos opciones para que elijas la que mejor se adapte a tus necesidades
      </Paragraph>

      <ContainerCardsProducts>
        <CardProducts>
          <CardText style={{ fontSize: '32px' }}>Landing page</CardText>
          <ul style={{ fontSize: '20px' }}>
            <li> Diseño responsive</li>
            <li>Contenido de hasta 4 secciones</li>
            <li>Contenido fijo</li>
            <li>Integracion con redes sociales</li>
            <li>Diseño profesional básico</li>
          </ul>

          <Text style={{ fontSize: '30px', fontWeight: '700' }}>$1000</Text>
          <Button>Solicitar</Button>
        </CardProducts>

        <CardProducts>
          <CardText style={{ fontSize: '32px' }}>Sitio web</CardText>
          <ul style={{ fontSize: '20px' }}>
            <li> Diseño responsive</li>
            <li>Contenido de hasta 6 secciones</li>
            <li>Contenido editable</li>
            <li>Integracion con redes sociales</li>
            <li>Diseño profesional avanzado</li>
            <li>Catálogo de productos</li>
          </ul>

          <Text style={{ fontSize: '30px', fontWeight: '700' }}>$2500</Text>
          <Button>Solicitar</Button>
        </CardProducts>
      </ContainerCardsProducts>
    </ContainerProducts>
    </HomeStyled>
  );
};

export default Products;
