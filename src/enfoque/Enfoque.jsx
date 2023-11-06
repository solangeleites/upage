import React from 'react'
import { SecondContainer, Title, Line, Text, ContainerCards, Card, Image, CardText, CardTitle } from '../pages/home/HomeStyled'
import { SiStylelint } from 'react-icons/si';
import { GrOptimize } from 'react-icons/gr';
import { FaUserFriends } from 'react-icons/fa';

const Enfoque = () => {
  return (
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
                style={{ fontSize: '100px', position: 'absolute' }}
              />{' '}
            </Image>
            <CardTitle>Sitio web con estilo</CardTitle>
            <CardText>
            Creamos tu web con enfoque único, resaltando la esencia de tu marca. Análisis detallado para el éxito personalizado.
            </CardText>
          </Card>

          <Card>
            <Image>
              {' '}

              <GrOptimize
                style={{ fontSize: '100px', position: 'absolute'}}
              /> 
            </Image>
            <CardTitle> Optimización de la web</CardTitle>
            <CardText>
            Optimizamos tu web con estrategias que garantizan eficiencia y destacan en Google, logrando una carga rápida y excelente posición.
            </CardText>
          </Card>

          <Card>
            <Image>
              {' '}
              <FaUserFriends
                style={{ fontSize: '100px', position: 'absolute' }}
              />
            </Image>
            <CardTitle>Conexión permanente</CardTitle>
            <CardText>
            Integramos Facebook, Instagram y Linkedin en tu web, fortaleciendo tu presencia digital y asegurando conexión constante con clientes
            </CardText>
          </Card>
        </ContainerCards>
      </SecondContainer>
  )
}

export default Enfoque