import React from 'react';
import {
  Card,
  ContainerBlog,
  ContainerCards,
  Paragraph,
  Title,
  Image,
} from './BlogStyled';
import { ContainerStyled, HomeStyled } from '../home/HomeStyled';

const Blog = () => {
  return (
    <HomeStyled>
      <ContainerStyled style={{ flexDirection: 'column', height: '100%' }}>
        <ContainerBlog>
          <Title>Nuestro blog</Title>
          <Paragraph>
            Tenemos como finalidad ayudarte a elegir el mejor servicio para vos
            y que estes informado acerca de las nuevas tecnologias
          </Paragraph>

          <ContainerCards>
            <Card>
              <Image />
              <Title>Que es una landing page?</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque nostrum iusto veniam quis magnam quas perspiciatis
                totam ut eos necessitatibus, quam sequi omnis, officia
                asperiores, iure dolores nihil numquam dolor!
              </Paragraph>
            </Card>

            <Card>
              <Image />
              <Title>Cual es la diferencia entre dominio y hosting?</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque nostrum iusto veniam quis magnam quas perspiciatis
                totam ut eos necessitatibus, quam sequi omnis, officia
                asperiores, iure dolores nihil numquam dolor!
              </Paragraph>
            </Card>

            <Card>
              <Image />
              <Title>Que es el SEO?</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque nostrum iusto veniam quis magnam quas perspiciatis
                totam ut eos necessitatibus, quam sequi omnis, officia
                asperiores, iure dolores nihil numquam dolor!
              </Paragraph>
            </Card>
          </ContainerCards>
        </ContainerBlog>
      </ContainerStyled>
    </HomeStyled>
  );
};

export default Blog;
