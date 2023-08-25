import styled from 'styled-components'
import Logo from '../../img/logo.png'
import Robo from '../../img/robo.png'
import Robos from '../../img/robos.png'
import RoboRua from '../../img/robo_rua.png'

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 65vh;

   p {
      color: #000;
   }

   @media screen and (max-width: 391px) {
      height: 100vh;
      background-image: url(${Robo});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center; 
      width: 100%;
      height: 100vh;
   }



`
export const Header = styled.header`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 18vh;


      @media screen and (max-width: 391px) {
         display: flex;
         align-items: center;
         justify-content: center;
         

         img {
            position:absolute;
         }

      }

      .divImg {
         display: flex;
         align-items: center;
         justify-content: center;
         text-align: center;
         background: #000;
         
      }


   img {
         background-repeat: no-repeat;
   }

`
