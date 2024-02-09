import { useState } from "react";
import Button from "../components/Button";
import { CardUserSkeleton } from "../components/CardUseSkeleton";
import { CardUser } from "../components/CardUser";
import Layout from "../components/Layout";
import { useGetAllUsers } from "../hooks/useGetAllUsers";

export function Home() {
  const [results, setResults] = useState(9);

  const { data, isLoading } = useGetAllUsers({
    results,
  });

  const LoadingMore = () =>
    setResults((prevResult) => Math.min(prevResult + 9, 100));

  const skeletonArray = Array.from({ length: results });
  return (
    <Layout>
      <title>Users</title>
      <section className="flex w-full items-center justify-center bg-primary-800">
        <div className="container flex justify-center items-center max-w-[1280px] px-2">
          <div className="w-full justify-center gap-5  py-10 md:gap-8 lg:gap-14 flex flex-wrap">
            {data?.results.map((user) => (
              <CardUser key={user.id.value} user={user} />
            ))}
            {isLoading && (
              <>
                {skeletonArray.map((_, index) => (
                  <CardUserSkeleton key={index} />
                ))}
              </>
            )}

            <div className=" mb-10">
              <Button onClick={LoadingMore}>Loading more</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
