import React from 'react';
import {
  ContainerStyled,
  HomeStyled,
  Text,
  SecondContainer,
  Title,
  Line,
  ContainerCards,
  Card,
  Image,
  CardText,
  CardTitle,
  TextFirst,
  TextNewsletter
} from './HomeStyled';


import { ContainerNewsletter } from '../../components/Newsletter/NewsletterStyled';
import Newsletter from '../../components/Newsletter/Newsletter';
import Enfoque from '../../enfoque/Enfoque';

const Home = () => {
  return (
    <HomeStyled>
      <ContainerStyled>
        <TextFirst>
          Tu sitio web <span>gratis</span> por tiempo limitado
        </TextFirst>
      </ContainerStyled>

      <SecondContainer>
        <Title>Quienes somos</Title>
        <Line />
        <Text>
Creamos tu web con enfoque único, resaltando la esencia de tu marca. Análisis detallado para el éxito personalizado.<br></br>
<br></br>Aquí la presencia online no es solo un servicio; es una experiencia colaborativa.
<br></br>
<br></br>

Sé parte de nuestra comunidad y déjanos ser tu socio digital. Juntos, vamos a escribir la historia de tu presencia en internet, con un enfoque amigable, sin complicaciones y lleno de entusiasmo. ¡Tu éxito digital comienza con nosotros!

        </Text>
      </SecondContainer>

      <Enfoque />

      {/* <ContainerNewsletter>
        <TextNewsletter style={{textAlign:'center'}}>Suscribite a nuestro newsletter para recibir más información</TextNewsletter>
        
        <Newsletter />
      </ContainerNewsletter> */}

    </HomeStyled>
  );
};

export default Home;
