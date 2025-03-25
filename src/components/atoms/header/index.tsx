'use client';


import * as S from './styles';
import ScrollProgress from '../scroll'; 
import { Next13NProgress } from 'nextjs13-progress';

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Header>
        <S.ImgContainer>
          <img src="/svg/logo.svg" alt="Logo FIAP" />
        </S.ImgContainer>
      </S.Header>

      <ScrollProgress />
    </S.HeaderContainer>
  );
};
