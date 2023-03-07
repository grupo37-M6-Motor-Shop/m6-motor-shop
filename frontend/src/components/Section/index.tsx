import { IAds } from "../../interfaces/IAds/IAds";
import { IUser } from "../../interfaces/IUser/IUser";
import Card from "../Card";
import { motion } from "framer-motion";
import { CustonSection, EmptyList, ListCards } from "./style";
import { BaseSyntheticEvent, useEffect, useRef, useState } from "react";

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
  let hasList = false;

  const carousel = useRef<null | HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    carousel.current &&
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const conditionalEmptyList = () => {
    switch (titleSection) {
      case "Leilão":
        return "Ainda não há leilões ativos 😢";
      case "Carros":
        return "Ainda não há carros cadastrados para venda 😢";
      case "Motos":
        return "Ainda não há motos cadastradas para venda 😢";
    }
  };

  vehicles.forEach((vehicle: IAds) => {
    if (
      (auction && vehicle.typeAd === value && vehicle.isActive) ||
      (!auction &&
        vehicle.typeVehicle === value &&
        vehicle.typeAd === "Venda" &&
        vehicle.isActive) ||
      (profile && auction && vehicle.typeAd === value) ||
      (profile &&
        !auction &&
        vehicle.typeVehicle === value &&
        vehicle.typeAd === "Venda")
    ) {
      hasList = true;
    }
  });

  return (
    <CustonSection id={id}>
      <motion.h5
        className="titleSection"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {titleSection}
      </motion.h5>
      {hasList ? (
        <div
          className="content"
          onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}
        >
          <motion.div
            ref={carousel}
            className="carousel"
            whileTap={{ cursor: "grabbing" }}
            onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}
          >
            {!profile && (
              <motion.ul
                className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}
              >
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
                          <motion.li
                            key={id}
                            className="item"
                            onClick={(event: BaseSyntheticEvent) =>
                              event.stopPropagation()
                            }
                          >
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
                          </motion.li>
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
                        typeVehicle === value &&
                        typeAd === "Venda" &&
                        isActive && (
                          <motion.li
                            key={id}
                            className="item"
                            onClick={(event: BaseSyntheticEvent) =>
                              event.stopPropagation()
                            }
                          >
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
                          </motion.li>
                        )
                    )}
              </motion.ul>
            )}
            {profile && (
              <motion.ul
                className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}
              >
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
                          <motion.li
                            key={id}
                            className="item"
                            onClick={(event: BaseSyntheticEvent) =>
                              event.stopPropagation()
                            }
                          >
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
                          </motion.li>
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
                        typeVehicle === value &&
                        typeAd === "Venda" && (
                          <motion.li
                            key={id}
                            className="item"
                            onClick={(event: BaseSyntheticEvent) =>
                              event.stopPropagation()
                            }
                          >
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
                          </motion.li>
                        )
                    )}
              </motion.ul>
            )}
          </motion.div>
        </div>
      ) : (
        <EmptyList>{conditionalEmptyList()}</EmptyList>
      )}
    </CustonSection>
  );
};

export default Section;
