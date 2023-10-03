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

const Products = () => {
  return (
    <HomeStyled>
    <ContainerStyled style={{flexDirection:'column', height:'100%', gap:'40px'}}>
      <Title>Nuestros servicios</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae,
        illum ullam ipsum quod porro qui ducimus ex possimus quisquam.
      </Paragraph>

      <ContainerCards>
        <Card>
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
        </Card>

        <Card>
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
        </Card>
      </ContainerCards>
    </ContainerStyled>
    </HomeStyled>
  );
};

export default Products;
