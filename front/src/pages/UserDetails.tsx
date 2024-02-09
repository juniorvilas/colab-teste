import { faker } from "@faker-js/faker";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import toast from "react-hot-toast";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useUserStore } from "../store/userDetails";

export function UserDetails() {
  const { userDetails } = useUserStore();
  const shortbio = faker.person.bio();
  const fakerBio = faker.lorem.paragraph({ min: 10, max: 10 });

  const handlePhoneClick = () => {
    navigator.clipboard.writeText(userDetails.phone);
    toast.success("Number copied!", { position: "top-right" });
  };

  return (
    <Layout>
      <title>Profile Details</title>
      <section className="flex  text-primary-100 flex-col w-full items-center justify-center py-10 bg-primary-800">
        <div className="container px-2 pb-6 max-w-[1280px]">
          <Link
            className="flex items-center group gap-2 hover:text-primary-500 py-0.5 hover:brightness-105 text-rob-roy-400"
            to="/"
          >
            <MdOutlineArrowBackIos className="group-hover:-translate-x-2 transition ease-in" />
            Back to Users
          </Link>
        </div>

        <div className="container flex flex-col items-center px-2 max-w-[1280px]">
          <h1 className="mb-4 text-3xl lg:text-4xl">Profile</h1>
          <h1>{shortbio}</h1>
          <div className="rounded-md py-6 flex items-center w-full justify-center">
            <Avatar
              alt="Remy Sharp"
              src={userDetails.picture.large}
              sx={{ width: 200, height: 200 }}
            />
          </div>
          <div className="flex py-5 w-full items-center justify-center">
            <h2 className=" text-primary-500 text-xl lg:text-4xl">
              {userDetails.name.title}. {userDetails.name.first}{" "}
              {userDetails.name.last}
            </h2>
          </div>

          {/* ABOUT */}
          <div className=" rounded-sm bg-primary-600 max-w-[650px] p-4 w-full flex flex-col justify-center items-center my-10">
            <h1 className="text-2xl font-bold mb-10">About me</h1>
            <div className="flex flex-col gap-6 ">
              <p>{fakerBio}</p>
            </div>
          </div>
          {/* ABOUT */}

          {/* LOCATION */}

          <div className="text-swamp items-center justify-center flex flex-col gap-10">
            <h1 className="font-semibold italic text-xl lg:text-3xl">
              Details
            </h1>

            <div className="flex items-center justify-center flex-col gap-3">
              <div className="flex items-center justify-center flex-col gap-2">
                <h2 className="font-semibold">Age:</h2>
                <h2 className="text-primary-500">{userDetails.dob.age}</h2>
              </div>
              <div className="flex items-center justify-center flex-col gap-2">
                <h2 className="font-semibold">Gender:</h2>
                <h2 className="text-primary-500">{userDetails.gender}</h2>
              </div>
              <div className="flex items-center justify-center flex-col gap-2">
                <h2 className="font-semibold">Phone:</h2>

                <Tooltip placement="left-start" arrow title="Copy number">
                  <button
                    onClick={handlePhoneClick}
                    className="cursor-pointer text-primary-500 hover:text-primary-200 flex items-center gap-3"
                  >
                    <h2>{userDetails.phone}</h2>
                  </button>
                </Tooltip>
              </div>
              <div className="flex items-center justify-center flex-col gap-2">
                <h2 className="font-semibold">Email:</h2>
                <a
                  target="_blank"
                  type="button"
                  href={`mailto:${userDetails.email}`}
                  className=" w-full flex items-center text-primary-500 hover:text-primary-200 gap-2  justify-center  font-medium text-sm py-2.5 text-center me-2 mb-2"
                >
                  {userDetails.email}
                </a>
              </div>
              <div className="flex items-center justify-center flex-col gap-2">
                <h2 className="font-semibold">Location:</h2>
                <h2 className="text-primary-500">
                  {userDetails.location.street.name},{" "}
                  {userDetails.location.street.number}{" "}
                  {userDetails.location.state}-{userDetails.location.country}
                </h2>
              </div>
            </div>
          </div>

          {/* LOCATION */}
        </div>
      </section>
    </Layout>
  );
}
