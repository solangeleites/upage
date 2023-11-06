import React from 'react';
import { Paragraph } from '../../components/Text/TextStyle';
import { CardText, Text } from '../home/HomeStyled';
import Button from '../../components/Button/Button';
import { HomeStyled } from '../home/HomeStyled';
import {
  CardProducts,
  ContainerCardsProducts,
  ContainerProducts,
  Lista,
  Title
} from './ProductsStyled';

const Products = () => {
  return (
    <HomeStyled>
      <ContainerProducts>
        <Title>Nuestros servicios</Title>
        <Paragraph>
          Te damos dos opciones para que elijas la que mejor se adapte a tus
          necesidades
        </Paragraph>

        <ContainerCardsProducts>
          <CardProducts>
            <CardText style={{ fontSize: '22px', fontWeight:'600' }}>Landing page</CardText>
            <Lista style={{ fontSize: '18px'}}>
              <li> Diseño responsive</li>
              <li>Contenido de hasta 4 secciones</li>
              <li>Contenido fijo</li>
              <li>Integracion con redes sociales</li>
              <li>Diseño profesional básico</li>
            </Lista>

            <Text style={{ fontSize: '30px', fontWeight: '700' }}>$1000</Text>
            <Button>Solicitar</Button>
          </CardProducts>

          <CardProducts>
            <CardText style={{ fontSize: '22px', fontWeight:'600' }}>Sitio web</CardText>
            <Lista style={{ fontSize: '18px' }}>
              <li>Contenido de hasta 6 secciones</li>
              <li>Contenido editable</li>
              <li>Integracion con redes sociales</li>
              <li>Diseño profesional avanzado</li>
              <li>Catálogo de productos</li>
            </Lista>

            <Text style={{ fontSize: '30px', fontWeight: '700' }}>$2500</Text>
            <Button>Solicitar</Button>
          </CardProducts>
        </ContainerCardsProducts>
      </ContainerProducts>
    </HomeStyled>
  );
};

export default Products;
