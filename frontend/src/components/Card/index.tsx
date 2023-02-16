import Detail from "../Detail";
import {
  CustomLi,
  ContainerPriceYearKm,
  InfoCard,
  InfoKmYear,
  CarImg,
  FontCardDescription,
  FontCardTitle,
  FontPrice,
  ButtonAuction,
  ContainerInfoCard,
  RightArrow,
  Clock,
} from "./style";

const Card = ({ auction = false, ...props }) => {
  return (
    <CustomLi key={props.id}>
      {!auction && (
        <div>
          <CarImg src={props.urlImage} alt="car card" />
        </div>
      )}
      <ContainerInfoCard auction={auction} image={props.urlImage}>
        <InfoCard auction={auction}>
          {auction && (
            <Clock>
              <img src="/img/clock.png" alt="clock" />
              <span>01:58:00</span>
            </Clock>
          )}
          <FontCardTitle auction={auction}>{props.title}</FontCardTitle>
          <FontCardDescription auction={auction}>{props.description}</FontCardDescription>
          <Detail auction={auction} name={props.userName} image={props.userImage} />
          <ContainerPriceYearKm auction={auction}>
            <div>
              <InfoKmYear>{props.mileage} KM</InfoKmYear>
              <InfoKmYear>{props.year}</InfoKmYear>
            </div>
            <FontPrice>R$ {props.price}</FontPrice>
          </ContainerPriceYearKm>
        </InfoCard>
      </ContainerInfoCard>
      {auction && (
        <ButtonAuction>
          <span>Acessar página do leilão</span>
          <RightArrow src="/img/right_arrow.png" alt="right arrow" />
        </ButtonAuction>
      )}
    </CustomLi>
  );
};

export default Card;
