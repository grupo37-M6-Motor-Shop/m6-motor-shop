import Container from "./style";

interface IDetail {
	name: string;
}

const Detail = ({ name }: IDetail) => {
	const initials = name.split(" ");

	return (
		<Container>
			<div className="logo">
				{initials.map((initial) => {
					return initial[0];
				})}
			</div>

			<p className="type">{name}</p>
		</Container>
	);
};

export default Detail;
