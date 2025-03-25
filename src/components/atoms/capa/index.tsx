'use client';

import * as S from './styles';

export const Capa = () => {
  return (
    <S.CapaContainer>
      <S.ImgContainer> 
        <img src="/imgs/header.jpg" alt="Imagem de Fundo" />
      </S.ImgContainer>
      <S.TextContainer>
        <h1>A MAIOR FACULDADE</h1>
        <h2>DE TECNOLOGIA</h2>
        <p>
        Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade que <br /> prepara profissionais para o futuro, com um ensino prático, professores <br /> atuantes no mercado e desafios reais que conectam os alunos às grandes <br/> empresas. 
        </p>
      </S.TextContainer>
    </S.CapaContainer>
  );
};