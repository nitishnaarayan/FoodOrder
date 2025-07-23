import { STORE_IMG_URL } from "../utils/constants";

const ResCard = (props) => {
    const { info } = props.resData;
    const { cloudinaryImageId, name, cuisines, avgRating, sla, veg } = info;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" src={STORE_IMG_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg"></h3>
            <h5>{veg ? "Pure Veg" : "Non Veg"}</h5>
            <h6>{cuisines.join(", ")}</h6>
            <h5>{avgRating} stars</h5><h5>{sla.slaString}</h5>
        </div>
    )
}

export default ResCard;