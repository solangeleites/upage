import React from 'react';
import { Button, Container, NewsletterStyle } from './NewsletterStyled';

const Newsletter = () => {
  return (
    
    <Container>
      <NewsletterStyle placeholder="Ingresa tu email" type="email" >            
      </NewsletterStyle>
      <Button>Enviar</Button>
      </Container>
    
  );
};

export default Newsletter;
