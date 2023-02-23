import Button from "../../components/Button";
import CardComment from "../../components/CardComment";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InputComment from "../../components/InputComment";
import PhotoList from "../../components/PhotoList";
import { BackgroundContent, Comments, Container, Image, ContainerInfo, InfoAd, Main, ContainerPriceYearKm, InfoKmYear, FontPrice, InfoVehicle, Description, InfoAdvertiser, Title, Content, Info, UserImg, Name, ContainerComments } from "./style"

const DetailAd = () => {
  const user = {
    id: 1,
    userName: "João da Silva",
    urlImage:
      "https://www.webmotors.com.br/wp-content/uploads/2020/06/03124927/Mercedes-Benz-A200-Sedan-49.jpg",
    title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
    description:
      "Lorem ipsum dolor sit amet. Et autem fuga et quas officiis et nostrum repellat hic molestias perspiciatis aut adipisci accusantium est voluptatem similique non ipsam quis. Est excepturi commodi a atque nulla est distinctio animi.",
    descrip:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    mileage: 1000,
    year: 1990,
    price: "R$ 170.000,00",
    typeAnnouncement: "Leilão",
    typeVehicle: "Carro",
    images: [
      "https://www.webmotors.com.br/wp-content/uploads/2020/06/03124927/Mercedes-Benz-A200-Sedan-49.jpg",
      "https://www.webmotors.com.br/wp-content/uploads/2020/06/03124927/Mercedes-Benz-A200-Sedan-49.jpg",
      "https://www.webmotors.com.br/wp-content/uploads/2020/06/03124927/Mercedes-Benz-A200-Sedan-49.jpg",
      "https://www.webmotors.com.br/wp-content/uploads/2020/06/03124927/Mercedes-Benz-A200-Sedan-49.jpg",
      "https://www.webmotors.com.br/wp-content/uploads/2020/06/03124927/Mercedes-Benz-A200-Sedan-49.jpg",
      "https://www.webmotors.com.br/wp-content/uploads/2020/06/03124927/Mercedes-Benz-A200-Sedan-49.jpg",
    ]
  }

  return (
    <Container>
      <Header/>
      <Main>
        <BackgroundContent/>
        <Content>
          <ContainerInfo>
            <InfoAd>
              <Image>
                <img src={user.urlImage} alt="" />
              </Image>

              <InfoVehicle>
                <p>{user.title}</p>
                
                <ContainerPriceYearKm>
                  <div>
                    <InfoKmYear>{user.mileage} KM</InfoKmYear>
                    <InfoKmYear>{user.year}</InfoKmYear>
                  </div>
                  <FontPrice>R$ {user.price}</FontPrice>
                </ContainerPriceYearKm>
                <Button 
                  color="whiteFixed" 
                  bgcolor="brand1" 
                  component="medium" 
                  width="8rem"
                >
                  Comprar
                </Button>
              </InfoVehicle>

              <Description align="justify">
                <Title>Descrição</Title>
                {user.description}
              </Description>
            </InfoAd>

            <InfoAdvertiser>
              <PhotoList images={user.images}/>
              <Info>
                <UserImg>JD</UserImg>
                <Name>{user.userName}</Name>
                <Description align="center">
                  {user.description}
                </Description>
                <Button 
                  color="whiteFixed" 
                  bgcolor="grey0" 
                  component="medium" 
                  width="14rem"
                >
                  Ver todos os anúncios
                </Button>
              </Info>
            </InfoAdvertiser>

          </ContainerInfo>
          <ContainerComments>
            <Comments>
              <Title>Comentários</Title>
              <CardComment name="Marco Oliveira" description="Gostei muito!"/>
              <CardComment name="Marcelo Silva" description="Excelente. Gostaria de saber sobre a forma de pagamento."/>
              <CardComment name="Larissa Neves" description="Lorem ipsum dolor sit amet. Et autem fuga et quas officiis et nostrum repellat hic molestias perspiciatis aut adipisci accusantium est voluptatem similique non ipsam quis. Est excepturi commodi a atque nulla est distinctio animi."/>
            </Comments>
            <InputComment/>
          </ContainerComments>
        </Content>
      </Main>
      <Footer/>
    </Container>
  );
}

export default DetailAd;
