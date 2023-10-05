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
} from './HomeStyled';
import { SiStylelint } from 'react-icons/si';
import { GrOptimize } from 'react-icons/gr';
import { FaUserFriends } from 'react-icons/fa';

import { ContainerNewsletter } from '../../components/Newsletter/NewsletterStyled';
import Newsletter from '../../components/Newsletter/Newsletter';

const Home = () => {
  return (
    <HomeStyled>
      <ContainerStyled>
        <Text style={{ fontSize: '50px', textTransform: 'uppercase' }}>
          Tu sitio web gratuito por tiempo limitado
        </Text>
      </ContainerStyled>

      <SecondContainer>
        <Title>Quienes somos</Title>
        <Line />
        <Text>
        Somos apasionados por impulsar sueños y emprendimientos. En el corazón de nuestro proyecto, nos dedicamos a construir conexiones digitales.  Con pila de creatividad, damos vida a tus ideas en el mundo virtual. 
<br></br>
<br></br>Aquí la presencia online no es solo un servicio; es una experiencia colaborativa.
<br></br>
<br></br>

Te invitamos a unirte a nosotros en esta emocionante travesía empresarial. Sé parte de nuestra comunidad y déjanos ser tu socio digital. Juntos, vamos a escribir la historia de tu presencia en internet, con un enfoque amigable, sin complicaciones y lleno de entusiasmo. ¡Tu éxito digital comienza con nosotros!

        </Text>
      </SecondContainer>

      <SecondContainer>
        <Title>En que nos enfocamos?</Title>

        <Line />

        <Text>
        Nos dedicamos a la creación de sitios web que se adaptan por completo a las necesidades de tu empresa. Nuestro enfoque va más allá de un diseño atractivo; buscamos potenciar la visibilidad de tu marca, generando una sólida imagen que, a su vez, impacta positivamente en tus ventas.
        </Text>

        <ContainerCards>
          <Card>
            <Image>
              {' '}
              <SiStylelint
                style={{ fontSize: '150px', position: 'absolute' }}
              />{' '}
            </Image>
            <CardTitle>Sitio web con estilo</CardTitle>
            <CardText>
            Diseñamos tu página web con un enfoque distintivo que resalta la esencia de tu marca. Previo al desarrollo, realizamos un análisis detallado para establecer las directrices de un branding que conduzca al éxito.
            </CardText>
          </Card>

          <Card>
            <Image>
              {' '}

              <GrOptimize
                style={{ fontSize: '150px', position: 'absolute'}}
              /> 
            </Image>
            <CardTitle> Optimización de la web</CardTitle>
            <CardText>
            Implementamos diversas estrategias de optimización para el diseño de tu página web. El resultado es una carga eficiente del sitio y una posición destacada en los motores de búsqueda, en especial en Google.
            </CardText>
          </Card>

          <Card>
            <Image>
              {' '}
              <FaUserFriends
                style={{ fontSize: '150px', position: 'absolute' }}
              />
            </Image>
            <CardTitle>Conexión permanente</CardTitle>
            <CardText>
            Integramos las redes sociales de tu marca, como Facebook, Instagram y Linkedin, en el diseño de tu página web. Esto garantiza que siempre estés conectado con tus clientes, fortaleciendo tu presencia digital de manera continua.
            </CardText>
          </Card>
        </ContainerCards>
      </SecondContainer>

      <ContainerNewsletter>
        <Text>Suscribite a nuestro newsletter para recibir más información</Text>
        <Newsletter />
      </ContainerNewsletter>

    </HomeStyled>
  );
};

export default Home;
