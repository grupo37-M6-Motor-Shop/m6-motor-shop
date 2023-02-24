import { IGallery } from "../../interfaces/IGallery/IGallery";
import {
	CustomerPhotoList,
	ContainerPhoto,
	Photo,
	ContainerPhotoList,
	TextPhoto,
} from "./style";

const PhotoList = ({
	urlImage1,
	urlImage2,
	urlImage3,
	urlImage4,
	urlImage5,
	urlImage6,
}: IGallery) => {
	return (
		<ContainerPhotoList>
			<TextPhoto>Fotos</TextPhoto>
			<CustomerPhotoList>
				{urlImage1 && (
					<ContainerPhoto>
						<Photo src={urlImage1} alt="" />
					</ContainerPhoto>
				)}
        {urlImage2 && (
					<ContainerPhoto>
						<Photo src={urlImage2} alt="" />
					</ContainerPhoto>
				)}
        {urlImage3 && (
					<ContainerPhoto>
						<Photo src={urlImage3} alt="" />
					</ContainerPhoto>
				)}
        {urlImage4 && (
					<ContainerPhoto>
						<Photo src={urlImage4} alt="" />
					</ContainerPhoto>
				)}
        {urlImage5 && (
					<ContainerPhoto>
						<Photo src={urlImage5} alt="" />
					</ContainerPhoto>
				)}
        {urlImage6 && (
					<ContainerPhoto>
						<Photo src={urlImage6} alt="" />
					</ContainerPhoto>
				)}
			</CustomerPhotoList>
		</ContainerPhotoList>
	);
};

export default PhotoList;
