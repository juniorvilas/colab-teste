import Skeleton from "@mui/material/Skeleton";

export function CardUserSkeleton() {
  return (
    <div className="rounded-md min-h-[410px] text-primary-100 w-full text-center flex flex-col max-w-[350px] gap-2  ">
      <div className="relative rounded-t-md py-5 flex items-center w-full justify-center">
        <Skeleton
          className="absolute top-20"
          variant="circular"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col p-5 gap-2 mt-32">
        <div className="flex justify-center ">
          <Skeleton variant="rounded" width={160} height={20} />
        </div>

        <div>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </div>
        <div>
          <Skeleton variant="rounded" width={160} height={20} />
        </div>

        <div className="w-full flex flex-col mt-5">
          <div className="mb-4 flex justify-center">
            <Skeleton variant="rounded" width={200} height={20} />
          </div>
          <Skeleton variant="rounded" height={40} />
        </div>
      </div>
    </div>
  );
}
