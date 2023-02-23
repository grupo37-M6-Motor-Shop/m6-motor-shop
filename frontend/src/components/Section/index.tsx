import Card from "../Card";
import { CustonSection, ListCards, TitleSection } from "./style";

interface IVehicle {
	id: number;
	userName: string;
	urlImage: string;
	title?: string;
	description: string;
	mileage: number;
	year: number;
	price: string;
	typeAnnouncement: string;
	typeVehicle: string;
	isActive: boolean;
}

interface SectionProps {
  id?: string;
	titleSection: string;
	value: string;
	vehicles: IVehicle[];
	auction: boolean;
	advertiser?: boolean;
	tags?: boolean;
	profile?: boolean;
}

const Section = ({ id,
	titleSection,
	value,
	vehicles,
	auction,
	advertiser,
	tags,
	profile,
}: SectionProps) => {
	return (
		<CustonSection id={id}>
			<TitleSection>{titleSection}</TitleSection>
			{!profile && (
				<ListCards>
					{auction
						? vehicles.map(
								({
									id,
									userName,
									urlImage,
									title,
									description,
									mileage,
									year,
									price,
									typeAnnouncement,
									isActive,
								}: IVehicle) =>
									typeAnnouncement === value &&
									isActive && (
										<Card
											key={id}
											auction
											userName={userName}
											urlImage={urlImage}
											title={title}
											description={description}
											mileage={mileage}
											year={year}
											price={price}
											advertiser={advertiser}
											isActive={isActive}
											tags={tags}
										/>
									)
						  )
						: vehicles.map(
								({
									id,
									userName,
									urlImage,
									title,
									description,
									mileage,
									year,
									price,
									typeVehicle,
									isActive,
								}: IVehicle) =>
									typeVehicle === value &&
									isActive && (
										<Card
											key={id}
											userName={userName}
											urlImage={urlImage}
											title={title}
											description={description}
											mileage={mileage}
											year={year}
											price={price}
											advertiser={advertiser}
											isActive={isActive}
											tags={tags}
										/>
									)
						  )}
				</ListCards>
			)}
			{profile && (
				<ListCards>
					{auction
						? vehicles.map(
								({
									id,
									userName,
									urlImage,
									title,
									description,
									mileage,
									year,
									price,
									typeAnnouncement,
									isActive,
								}: IVehicle) =>
									typeAnnouncement === value && (
										<Card
											key={id}
											auction
											userName={userName}
											urlImage={urlImage}
											title={title}
											description={description}
											mileage={mileage}
											year={year}
											price={price}
											advertiser={advertiser}
											isActive={isActive}
											tags={tags}
										/>
									)
						  )
						: vehicles.map(
								({
									id,
									userName,
									urlImage,
									title,
									description,
									mileage,
									year,
									price,
									typeVehicle,
									isActive,
								}: IVehicle) =>
									typeVehicle === value && (
										<Card
											key={id}
											userName={userName}
											urlImage={urlImage}
											title={title}
											description={description}
											mileage={mileage}
											year={year}
											price={price}
											advertiser={advertiser}
											isActive={isActive}
											tags={tags}
										/>
									)
						  )}
				</ListCards>
			)}
		</CustonSection>
	);
};

export default Section;
