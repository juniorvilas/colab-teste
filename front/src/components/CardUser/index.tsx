import { Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import toast from "react-hot-toast";
import { FaPhone } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineMailOutline,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/userDetails";
import { User } from "../../types/types";

export type Props = {
  user: User;
};

export function CardUser({ user }: Props) {
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setUser(user);
    navigate(`/user/${user.id.value}`);
  };

  const handlePhoneClick = () => {
    navigator.clipboard.writeText(user.phone);
    toast.success("Number copied!", { position: "top-right" });
  };
  return (
    <div className="rounded-md text-primary-100 w-full text-center flex flex-col max-w-[350px] gap-2 border-primary-300 border">
      <div className="relative rounded-t-md bg-primary-500 py-5 flex items-center w-full justify-center">
        <Avatar
          alt="Remy Sharp"
          src={user.picture.medium}
          sx={{ width: 100, height: 100 }}
          className="absolute top-16"
        />
      </div>
      <div className="flex flex-col p-5 gap-2 mt-5">
        <h2 className="text-primary-400 text-2xl">
          {user.name.first} {user.name.last}
        </h2>
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <h2 className="font-semibold">Age:</h2>
            <h2>{user.dob.age}</h2>
          </div>
          <div className="flex gap-3">
            <h2 className="font-semibold">Gender:</h2>
            <h2>{user.gender}</h2>
          </div>
        </div>

        <Tooltip placement="top" arrow title="Copy number">
          <button
            onClick={handlePhoneClick}
            className="cursor-pointer hover:text-primary-500 flex items-center gap-3"
          >
            <FaPhone />
            <h2>{user.phone}</h2>
          </button>
        </Tooltip>

        <div className="w-full flex flex-col ">
          <a
            target="_blank"
            type="button"
            href={`mailto:${user.email}`}
            className=" w-full flex items-center gap-2 group hover:text-primary-500 justify-center text-white font-medium text-sm py-2.5 text-center me-2 mb-2"
          >
            <MdOutlineMailOutline className="group-hover:-translate-x-2 transition ease-in" />{" "}
            {user.email}
          </a>
          <button
            onClick={handleLinkClick}
            className=" w-full flex items-center group justify-center text-white bg-gradient-to-br to-primary-400 from-primary-800 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Details
            <MdOutlineKeyboardArrowRight
              size={20}
              className="group-hover:translate-x-2 transition ease-in"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
