import React from "react";
import * as S from "./Style";
import Whatsapp from "./assets/whatsapp.png"
import Instagram from "./assets/instagram.png"
import Facebook from "./assets/facebook.png"
import OutubroRosa from "./assets/OutubroRosa.png"

function Mainn () {
    return(
        <S.Main>
        <S.Div3>
            <S.H2>Conscientização e</S.H2>
            <S.H2>Esperança</S.H2>
            <S.Div4>
            <p>O Outubro Rosa é um movimento global que acontece em outubro para aumentar a conscientização sobre o câncer de mama. A cor rosa é o símbolo dessa causa, representando esperança. Durante este mês, lembramos a importância da detecção precoce, apoio às pessoas afetadas e doações para a pesquisa. Vamos juntos lutar contra o câncer de mama.</p>
            </S.Div4>
            <S.Button>Saiba mais</S.Button>
            <S.Div5>
                <S.Img src={Whatsapp} alt="Whatsapp Logo" /><S.Img src={Instagram} alt="Instagram Logo" /><S.Img src={Facebook} alt="Facebook Logo" />
            </S.Div5>
        </S.Div3>
        <S.Section2>
            <img src={OutubroRosa} alt="Imagem outubro rosa" />
        </S.Section2>
      </S.Main>
    )
}

export default Mainn