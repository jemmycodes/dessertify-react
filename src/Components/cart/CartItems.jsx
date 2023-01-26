import Image from "../Ui/Image";
import image from "../../assets/d5.png";
import { AiFillDelete } from "react-icons/ai";

function CartItems(props) {
  return (
    <hgroup className="bg-[#303030] text-white rounded-md p-2 gap-2 flex items-center">
      <Image
        src={props.image}
        alt={props.name}
        className="w-[6rem] h-[3.5rem] object-cover rounded-full "
      />
      <div>
        <p className=" max-w-[8rem]  text-md">{props.name}</p>
        <p>
          <span className="text-pepperRed mr-1 font-bold">₦</span>
          {props.price}
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <p>-</p>
        <p className="px-2  bg-[#1c1c1c] rounded-md">1</p>
        <p>+</p>
      </div>
      <div className="bg-pepperRed text-white p-1 rounded-md mx-2">
        <AiFillDelete />
      </div>
    </hgroup>
  );
}

export default CartItems;
