import { LazyImageWithPlaceholder } from "../../Components/LazyImage";


interface Draggable {

    image: string;
}
export const Card = ({ image }: Draggable) => {

    return <LazyImageWithPlaceholder src={image} alt={`index`} />

}


