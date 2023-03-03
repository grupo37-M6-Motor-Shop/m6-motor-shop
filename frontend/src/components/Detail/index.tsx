import { UserImg, ContainerUser, FontTwoLatters, FontUserName } from "./style";
import { DetailProps } from "../../interfaces/DetailProps/DetailProps";

const Detail = ({
  auction,
  colorFont,
  name,
  image,
  avatarColor,
}: DetailProps) => {
  const twoLetters = () => {
    if (name !== undefined) {
      const first = name[0];
      const second = name[name.indexOf(" ") + 1];
      return (
        <FontTwoLatters>{`${first}${second}`.toUpperCase()}</FontTwoLatters>
      );
    }
  };

  return (
    <ContainerUser>
      <UserImg colorRandom={avatarColor}>
        {image ? image : twoLetters()}
      </UserImg>
      <FontUserName auction={auction} colorFont={colorFont}>
        {name}
      </FontUserName>
    </ContainerUser>
  );
};

export default Detail;
