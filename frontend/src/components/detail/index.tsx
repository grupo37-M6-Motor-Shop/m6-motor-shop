import { Container, DetailLogo, DetailName } from "./style";

interface IDetail {
	name: string;
}

const Detail = ({ name }: IDetail) => {
	const initials = name.split(" ");

	return (
		<Container>
			<DetailLogo>
				{initials.map((initial) => {
					return initial[0];
				})}
			</DetailLogo>

			<DetailName>{name}</DetailName>
		</Container>
	);
};

export default Detail;
