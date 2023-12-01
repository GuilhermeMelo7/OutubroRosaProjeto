import React from "react";
import Carrinho from "./assets/carrinho.png";
import * as S from "./Style";
import { GlobalStyle } from "./Global";

function Header() {
  return (
    <S.Section>
      <GlobalStyle />
      <S.Div2>
      <S.H1>Outubro Rosa</S.H1>
      </S.Div2>
      <S.Div>
      <S.HH2>ABOUT</S.HH2>
      <S.HH2>PRODUCT</S.HH2>
      <S.HH2>STORES</S.HH2>
      <S.HH2>CONTACT</S.HH2>
      <S.Img src={Carrinho}></S.Img>
      </S.Div>
    </S.Section>
  );
}

export default Header;