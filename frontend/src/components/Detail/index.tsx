import { UserImg, ContainerUser, FontTwoLatters, FontUserName } from "./style";
import { DetailProps } from "../../interfaces/DetailProps/DetailProps";

const Detail = ({ auction, colorFont, name, image }: DetailProps) => {
  const twoLetters = (): JSX.Element => {
    const first = name[0];
    const second = name[name.indexOf(" ") + 1];
    return <FontTwoLatters>{`${first}${second}`.toUpperCase()}</FontTwoLatters>;
  };

  const backgroundImgRandom = (): string => {
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
    <ContainerUser>
      <UserImg colorRandom={colorRandom}>{image ? image : twoLetters()}</UserImg>
      <FontUserName auction={auction} colorFont={colorFont}>
        {name}
      </FontUserName>
    </ContainerUser>
  );
};

export default Detail;
