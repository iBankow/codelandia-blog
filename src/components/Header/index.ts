import styled from "styled-components";

const Header = styled.section`
  background: linear-gradient(88.27deg, #574ae8 0%, #3ea1db 100%);
  height: 250px;
  width: 100%;
  color: white;
`;

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  font-weight: 200;
  padding: 40px 0 40px 0;
  align-items: flex-end;

  p {
    font-size: 24px;
  }

  @media (max-width: 1024px) {
    max-width: 360px;
  }
`;

const InputContent = styled.div`
  max-width: 900px;
  height: 65px;
  margin: 0 auto;
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  align-items: center;
  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-size: 18px;
    color: #fff;
    outline: none;

    ::placeholder {
      color: #fff;
      opacity: 0.5;
    }
  }

  @media (max-width: 1024px) {
    max-width: 360px;
  }
`;

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 20px 0 20px;
`;

export { Header, HeaderContent, InputContent, IconWrapper };
