import Avatar from "@mui/material/Avatar";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";

export function UserDetails() {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  return (
    <Layout>
      <title>User Details</title>
      <section className="flex  text-cyan-50 flex-col w-full items-center justify-center py-10 bg-cyan-950">
        <div className="container px-2 pb-6 max-w-[1280px]">
          <h1 className="mb-4 text-3xl lg:text-4xl">User Details</h1>
          <Link
            className="flex items-center gap-2 py-0.5 hover:brightness-105 text-rob-roy-400"
            to="/"
          >
            <MdOutlineArrowBackIos />
            Back to Users
          </Link>
        </div>

        <div className="container px-2 max-w-[1280px]">
          <div className="rounded-md bg-primary py-6 flex items-center w-full justify-center">
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              sx={{ width: 200, height: 200 }}
            />
          </div>
          <div className="flex py-5 w-full items-center justify-center">
            <h2 className=" text-cyan-500 text-xl lg:text-4xl">João Silva</h2>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <h2 className="font-semibold">Age:</h2>
              <h2 className="text-cyan-500">30</h2>
            </div>
            <div className="flex gap-2">
              <h2 className="font-semibold">Gender:</h2>
              <h2 className="text-cyan-500">male</h2>
            </div>
            <div className="flex gap-2">
              <h2 className="font-semibold">Phone:</h2>
              <h2 className="text-cyan-500">71 99171-3860</h2>
            </div>
          </div>

          <div className="container flex justify-center items-center max-w-[1280px] py-5">
            <div className="container flex-col items-start h-full gap-14 flex lg:flex-row justify-between max-w-[1280px]">
              <div className="text-swamp flex flex-col gap-10">
                <h1 className="font-semibold text-xl lg:text-3xl">Location</h1>
                <div className="text-sm w-full lg:text-base">
                  <div className="flex gap-2">
                    Street: <h2 className="text-cyan-500">68 Hill Lane</h2>
                  </div>
                  <div className="flex gap-2">
                    Number:
                    <h2 className="text-cyan-500">14609</h2>
                  </div>
                  <div className="flex gap-2">
                    City:<h2 className="text-cyan-500">West Babylon</h2>
                  </div>
                  <div className="flex gap-2">
                    Country:<h2 className="text-cyan-500">NY</h2>
                  </div>
                  <div className="flex gap-2">
                    Postcode:<h2 className="text-cyan-500">11208</h2>
                  </div>
                  <div className="flex gap-2">
                    Latitude:<h2 className="text-cyan-500">6.320758</h2>
                  </div>
                  <div className="flex gap-2">
                    Longitude:<h2 className="text-cyan-500">10.019531</h2>
                  </div>
                </div>
                <div className="flex gap-3 text-sm lg:text-base">
                  <h2 className="text-ming800 font-bold"></h2>
                </div>
              </div>

              <div className="w-full lg:w-2/3">
                <h1 className="text-2xl font-bold mb-10">Bio</h1>
                <div className="flex flex-col gap-6 text-cyan-500">
                  <p>
                    Keystone 3 PRO Hardware Wallet é uma carteira de hardware de
                    comunicação com código QR 100% air-gap para Bitcoin,
                    Ethereum, USDT, BCH, XRP, Tron, LTC, Dash, Polkadot, Kusama
                    e mais de 1000 criptomoedas. Ele oferece uma solução de
                    armazenamento frio conveniente com um firmware de código
                    aberto, tela sensível ao toque de 4 polegadas e suporte
                    multisig PSBT Bitcoin. Proteja sua criptomoeda com o
                    equilíbrio perfeito entre carteira de hardware segura e
                    conveniente. Todas as carteiras de hardware precisam de
                    algum meio de conexão à rede para assinar transações; o
                    quanto sua carteira de hardware está “Air-Gapped” depende de
                    como ela limita a superfície de ataque ao transmitir dados
                    para um dispositivo habilitado para Internet. Os códigos QR
                    têm uma superfície de ataque menor do que USB, NFC e
                    Bluetooth, tornando-os o meio perfeito de transmissão de
                    dados para uma carteira de hardware como a Keystone. Fomos
                    pioneiros em uma solução de código QR animado que permite a
                    transmissão de grandes quantidades de dados de transações e
                    também desenvolvemos o recurso de cartão micro SD, pois os
                    requisitos de compatibilidade com carteiras de mesa como
                    Electrum e Wasabi são mais exigentes.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
