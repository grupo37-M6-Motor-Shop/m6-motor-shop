import {
  CustomerPhotoList,
  ContainerPhoto,
  Photo,
  ContainerPhotoList,
  TextPhoto,
} from "./style";

const PhotoList = ({ images }: any) => {
  return (
    <ContainerPhotoList>
      <TextPhoto>Fotos</TextPhoto>
      <CustomerPhotoList>
        {images.map((image: any, index: number) => (
          <ContainerPhoto key={index}>
            <Photo src={image} alt="" />
          </ContainerPhoto>
        ))}
      </CustomerPhotoList>
    </ContainerPhotoList>
  );
};

export default PhotoList;
