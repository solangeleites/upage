import { ButtonStyled } from "./ButtonStyle";

const Button = () => {
    const phoneNumber = '1124614480';
    const handleButtonClick = () => {
      const whatsappUrl = `https://wa.me/${phoneNumber}`;
      window.location.href = whatsappUrl;
    };
  
    return (
      <ButtonStyled onClick={handleButtonClick}>
        Solicitar
      </ButtonStyled>
    );
  };
  
  export default Button;