import { Container, Header } from './Initial.styles'
import LogoNome from '../../img/logo_nome.png'


export function Initial() {
   return(
      <div data-aos="fade-up-right" data-aos-duration="3000">
            <Header>
               <div className='divImg'>
                  <img src={LogoNome} />
               </div>
            </Header>
            <Container>
               <div data-aos="fade-up" data-aos-duration="3000">
               </div>
            </Container>
         </div>
   )
}