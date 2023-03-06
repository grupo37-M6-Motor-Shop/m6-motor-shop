import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IAds } from "../../interfaces/IAds/IAds";
import { IUser } from "../../interfaces/IUser/IUser";
import Card from "../Card";
import { CustonSection, EmptyList } from "./style";

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
        className="title"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {titleSection}
      </motion.h5>
      {hasList ? (
        <>
          {!profile && (
            <motion.div
              ref={carousel}
              className="carousel"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.ul
                className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 600 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.2 }}
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
                        typeVehicle === value &&
                        typeAd === "Venda" &&
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
              </motion.ul>
            </motion.div>
          )}
          {profile && (
            <motion.div
              ref={carousel}
              className="carousel"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.ul
                className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 600 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.2 }}
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
                        typeVehicle === value &&
                        typeAd === "Venda" && (
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
              </motion.ul>
            </motion.div>
          )}
        </>
      ) : (
        <EmptyList>{conditionalEmptyList()}</EmptyList>
      )}
    </CustonSection>
  );
};

export default Section;
