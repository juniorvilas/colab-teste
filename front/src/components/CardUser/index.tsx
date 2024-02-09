import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export type Props = {
  user: {
    picture: {
      large: string;
    };
    name: {
      first: string;
      last: string;
    };
    dob: {
      age: number;
    };
    gender: string;
    email: string;
    phone: string;
    id: {
      value: string;
    };
  };
};

export function CardUser({ user }: Props) {
  return (
    <div className="rounded-md text-cyan-100 w-full text-center flex flex-col p-7 max-w-[350px] gap-2 border-green-300 border">
      <div className="rounded-md bg-primary py-6 flex items-center w-full justify-center">
        <Avatar
          alt="Remy Sharp"
          src={user.picture.large}
          sx={{ width: 100, height: 100 }}
        />
      </div>

      <h2 className="text-blue-600 text-2xl">
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

      <div className="flex gap-3">
        <h2 className="font-semibold">Phone:</h2>
        <h2>{user.phone}</h2>
      </div>
      <div className="w-full flex flex-col ">
        <a
          target="_blank"
          type="button"
          href={`mailto:${user.email}`}
          className=" w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Send a email to {user.email}
        </a>
        <Link
          to={`/user/${user.id.value}`}
          className=" w-full text-white bg-gradient-to-br to-green-400 from-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
