import {
  CustomLi,
  ContainerPriceYearKm,
  ContainerUser,
  InfoCard,
  InfoKmYear,
  UserImg,
  CarImg,
  FontCardDescription,
  FontTwoLatters,
  FontCardTitle,
  FontPrice,
  ButtonAuction,
  FontUserName,
  ContainerInfoCard,
  RightArrow,
  Clock,
} from "./style";

const Card = ({ auction = true, ...props }) => {
  const twoLetters = () => {
    const first = props.userName[0];
    const second = props.userName[props.userName.indexOf(" ") + 1];
    return <FontTwoLatters>{`${first}${second}`.toUpperCase()}</FontTwoLatters>;
  };

  const backgroundImgRandom = () => {
    const colors: string[] = [
      "--random1",
      "--random2",
      "--random3",
      "--random4",
      "--random5",
      "--random6",
      "--random7",
      "--random8",
      "--random9",
      "--random10",
      "--random11",
      "--random12",
    ];
    const colorRandom = Math.floor(Math.random() * colors.length);
    return colors[colorRandom] as string;
  };

  const colorRandom = backgroundImgRandom();

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
              <img src="public/img/clock.png" alt="clock" />
              <span>01:58:00</span>
            </Clock>
          )}
          <FontCardTitle auction={auction}>{props.title}</FontCardTitle>
          <FontCardDescription auction={auction}>{props.description}</FontCardDescription>
          <ContainerUser>
            <UserImg colorRandom={colorRandom}>
              {props.userImg ? props.userImg : twoLetters()}
            </UserImg>
            <FontUserName auction={auction}>{props.userName}</FontUserName>
          </ContainerUser>
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
          <RightArrow src="public/img/right_arrow.png" alt="right arrow" />
        </ButtonAuction>
      )}
    </CustomLi>
  );
};

export default Card;
