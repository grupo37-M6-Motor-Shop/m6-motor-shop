import Detail from "../Detail";
import { FontIntegerNormal } from "../../style/fonts";
import { ContainerCardComment, ContainerDetailAndCreation, CreationTime } from "./style";

const CardComment = ({ ...props }) => {
  const creatioTime = (time: string): string => {
    const dateHourString = time;
    const dateHour = new Date(dateHourString);
    const now = new Date();
    const diffMs = now.getTime() - dateHour.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHour = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHour / 24);
    const diffWeek = Math.floor(diffDays / 7);
    const diffMonth = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffMonth / 12);

    if (diffSeconds < 60) {
      return "agora";
    } else if (diffMinutes < 60) {
      return `há ${diffMinutes} ${diffMinutes === 1 ? "minuto" : "minutos"}`;
    } else if (diffHour < 24) {
      return `há ${diffHour} ${diffHour === 1 ? "hora" : "horas"}`;
    } else if (diffDays < 7) {
      return `há ${diffDays} ${diffDays === 1 ? "dia" : "dias"}`;
    } else if (diffWeek < 4) {
      return `há ${diffWeek} ${diffWeek === 1 ? "semana" : "semanas"}`;
    } else if (diffMonth < 12) {
      return `há ${diffMonth} ${diffMonth === 1 ? "mês" : "meses"}`;
    } else {
      return `há ${diffYears} ${diffYears === 1 ? "ano" : "anos"}`;
    }
  };

  return (
    <ContainerCardComment>
      <ContainerDetailAndCreation>
        <Detail name={props.name} colorFont="--grey1" />
        <CreationTime>• {creatioTime(props.update)}</CreationTime>
      </ContainerDetailAndCreation>
      <FontIntegerNormal>{props.description}</FontIntegerNormal>
    </ContainerCardComment>
  );
};

export default CardComment;
