import { CardUser } from "../components/CardUser";
import Layout from "../components/Layout";

export function Home() {
  const mockResults = [
    {
      picture: {
        large:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      },

      name: {
        first: "João ",
        last: "Silva",
      },
      dob: {
        age: 30,
      },
      gender: "male",
      email: "joao@gmail.com",
      phone: "(71)99171-3860",
      id: {
        value: "5a6fc22b-e439-49d6-8215-01113f98f999",
      },
    },
    {
      gender: "female",
      name: {
        first: "Paula ",
        last: "Silva",
      },
      picture: {
        large:
          "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
      },
      email: "paula@gmail.com",
      dob: {
        age: 30,
      },
      phone: "(71)9911-1215",
      id: {
        value: "5a6fc22b-e439-49d6-8215-01113f98f77b",
      },
    },
    {
      gender: "male",
      name: {
        first: "Pedro ",
        last: "Silva",
      },
      picture: {
        large:
          "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
      },
      email: "pedro@gmail.com",
      dob: {
        age: 25,
      },
      phone: "(71)99171-4444",
      id: {
        value: "5a6fc22b-e439-49d6-8215-01113f98f888",
      },
    },
  ];

  return (
    <Layout>
      <title>Users</title>
      <section className="flex w-full items-center justify-center bg-cyan-950">
        <div className="container flex justify-center items-center max-w-[1280px] px-2">
          <div className="w-full justify-center gap-5  py-10 md:gap-8 lg:gap-14 flex flex-wrap">
            {/* user */}
            {mockResults.map((user) => (
              <CardUser key={user.id.value} user={user} />
            ))}

            {/* end user */}
          </div>
        </div>
      </section>
    </Layout>
  );
}
