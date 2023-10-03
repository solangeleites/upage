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
} from './HomeStyled';
import { SiStylelint } from 'react-icons/si';
import { GrOptimize } from 'react-icons/gr';
import { FaUserFriends } from 'react-icons/fa';
import Input from '../../components/UI/Input';

import Footer from '../../footer/Footer';

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum
          eaque iusto cum facilis perferendis quae quidem, possimus excepturi
          illum esse quos aut expedita sunt rerum dolorum? Illum necessitatibus
          doloremque odit blanditiis labore et ut sed recusandae, aliquid
          quisquam officiis exercitationem atque earum nam? Iure nemo possimus
          laborum provident quasi! Optio facere minima fuga, ipsum vero
          excepturi impedit ratione placeat quaerat, deserunt, rem aspernatur?
          Cumque eum libero beatae facilis voluptatibus! Error illo, illum ullam
          veritatis amet at animi deleniti, aliquid mollitia doloribus nobis
          minus tempore fugiat sapiente sunt? Maiores, voluptates distinctio?
          Sit veniam repellendus quasi voluptatem earum nihil enim doloribus,
          praesentium magnam possimus explicabo, veritatis quam nobis modi est
          officiis! Error odit delectus necessitatibus dolorem laborum, nihil
          deserunt fugit minus!
        </Text>
      </SecondContainer>

      <SecondContainer>
        <Title>En que nos enfocamos?</Title>

        <Line />

        <Text>
          {' '}
          Nos enfocamos como agencia especializada en Marketing Digital, de
          llevar a cabo un diseño de sitio web que cumpla con todos los
          requerimientos que tu empresa necesita, de ésta manera otorgarle mayor
          reconocimiento y por consiguiente maximizar su imagen y ventas.
        </Text>

        <ContainerCards>
          <Card>
            <Image>
              {' '}
              <SiStylelint
                style={{ fontSize: '150px', position: 'absolute' }}
              />{' '}
            </Image>
            <CardText>Páginas Web con estilo</CardText>
            <CardText>
              Diseñamos tu sitio web con el estilo que diferencia a tu marca.
              Además realizamos un análisis previo, donde nos encargamos de
              sentar las pautas de un branding que la lleve al éxito.{' '}
            </CardText>
          </Card>

          <Card>
            <Image>
              {' '}

              <GrOptimize
                style={{ fontSize: '150px', position: 'absolute'}}
              /> 
            </Image>
            <CardText> Páginas Web Optimizadas</CardText>
            <CardText>
              Utilizamos diferentes métodos de optimización de recursos para el
              diseño de tu página web. Lo que dá como resultado la carga veloz
              del sitio, y el mejor posicionamiento en Google.
            </CardText>
          </Card>

          <Card>
            <Image>
              {' '}
              <FaUserFriends
                style={{ fontSize: '150px', position: 'absolute' }}
              />
            </Image>
            <CardText> Siempre conectado</CardText>
            <CardText>
              Enlazamos en el diseño de tu Página Web, las redes sociales de tu
              marca, como Facebook, Instagram, Linkedin, entre otras, de tal
              manera estarás siempre conectado con tus clientes.
            </CardText>
          </Card>
        </ContainerCards>
      </SecondContainer>

      <SecondContainer style={{height: '300px'}}>
        <Text>Suscribite a nuestro newsletter para recibir más información</Text>
        <Input />
      </SecondContainer>

<Footer />
    </HomeStyled>
  );
};

export default Home;
