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
}

interface SectionProps {
  titleSection: string;
  value: string;
  vehicles: IVehicle[];
  auction: boolean;
}

const Section = ({ titleSection, value, vehicles , auction}: SectionProps) => {
  return (
    <CustonSection>
      <TitleSection>{ titleSection }</TitleSection>
      <ListCards>
        {
          auction ? 
            vehicles.map(
              ({ id, userName, urlImage, description, mileage, year, price, typeAnnouncement }: IVehicle) =>
              typeAnnouncement === value && (
                <Card
                  key={id}
                  auction
                  userName={userName}
                  urlImage={urlImage}
                  description={description}
                  mileage={mileage}
                  year={year}
                  price={price}
                />
              )
            )
          : 
            vehicles.map(
              ({ id, userName, urlImage, title, description, mileage, year, price, typeVehicle }: IVehicle) =>
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
                />
              )
            )
        }
      </ListCards>
    </CustonSection>
  );
}

export default Section;
