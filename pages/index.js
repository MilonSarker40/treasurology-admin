import Image from "next/image";
import { Inter } from "next/font/google";
import DashboardImg from '../public/images/dashboard-img.png';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="dashboard__sec__wrap prdLR30">
          <Image src={DashboardImg} alt="Dashboard Img" />
      </div>
    </>
  );
}
