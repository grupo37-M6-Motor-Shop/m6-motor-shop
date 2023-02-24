import { UserImg, ContainerUser, FontTwoLatters, FontUserName } from "./style";
import { DetailProps } from "../../interfaces/DetailProps/DetailProps";
import { useState } from "react";

const Detail = ({ auction, colorFont, name, image }: DetailProps) => {
  const [backgroundColor, setBackgroundColor] = useState<string | undefined>(undefined);

	const setBackgroundRandomColor = () => {
	  if (!backgroundColor) {
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
		const randomColor = colors[colorRandom] as string;
  
		setBackgroundColor(randomColor);
	  }
	};

	const colorRandom = setBackgroundRandomColor();

  const twoLetters = () => {
    if(name !== undefined) {
      const first = name[0];
      const second = name[name.indexOf(" ") + 1];
      return <FontTwoLatters>{`${first}${second}`.toUpperCase()}</FontTwoLatters>;
		}
  };

  return (
    <ContainerUser>
      <UserImg colorRandom={backgroundColor}>{image ? image : twoLetters()}</UserImg>
      <FontUserName auction={auction} colorFont={colorFont}>
        {name}
      </FontUserName>
    </ContainerUser>
  );
};

export default Detail;
