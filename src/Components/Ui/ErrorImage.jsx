import Image from "./Image";
import notFound from "../../assets/error-image.svg";

function ErrorImage() {
  return (
    <div>
      <Image
        src={notFound}
        alt="Item not found"
        className="w-96 object-cover"
      />
      <p className="text-center font-bold text-orange">
        No food item(s) available
      </p>
    </div>
  );
}

export default ErrorImage;
