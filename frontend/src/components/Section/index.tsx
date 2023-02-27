import { IAds } from "../../interfaces/IAds/IAds";
import { IUser } from "../../interfaces/IUser/IUser";
import Card from "../Card";
import { CustonSection, ListCards, TitleSection } from "./style";

interface SectionProps {
	id?: string;
	userAd?: IUser;
	titleSection: string;
	value: string;
	vehicles: IAds[];
	auction: boolean;
	advertiser?: boolean;
	tags?: boolean;
	profile?: boolean;
}

const Section = ({
	id,
	userAd,
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
									user,
									urlCoverImage,
									title,
									description,
									mileage,
									year,
									price,
									typeAd,
									isActive,
									typeVehicle,
								}: IAds) =>
									typeAd === value &&
									isActive && (
										<Card
											key={id}
											auction
											id={id}
											user={user}
											urlCoverImage={urlCoverImage}
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
									user,
									urlCoverImage,
									title,
									description,
									mileage,
									year,
									price,
									typeAd,
									typeVehicle,
									isActive,
								}: IAds) =>
									typeVehicle === value && typeAd === "Venda" &&
									isActive && (
										<Card
											key={id}
											id={id}
											user={user}
											urlCoverImage={urlCoverImage}
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
									urlCoverImage,
									title,
									description,
									mileage,
									year,
									price,
									typeAd,
									isActive,
									typeVehicle,
								}: IAds) =>
									typeAd === value && (
										<Card
											key={id}
											auction
											id={id}
											user={userAd}
											urlCoverImage={urlCoverImage}
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
									urlCoverImage,
									title,
									description,
									mileage,
									year,
									price,
									typeVehicle,
									isActive,
									typeAd,
								}: IAds) =>
									typeVehicle === value && typeAd === "Venda" && (
										<Card
											key={id}
											id={id}
											user={userAd}
											urlCoverImage={urlCoverImage}
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
