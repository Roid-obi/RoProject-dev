import Image from "next/image";
import Link from "next/link";
import { CardHeader, Content, HeaderHomeStyle, OpsionProject, Padding, TextHeader, TextTitle } from "./page.styled";
import Button from "@/components/Button";
import IconCalculator from "@/public/ios-calculator-3.svg";
import IconSuhu from "@/public/klipartz.com.png";
import IconKod from "@/public/pngegg.png";
import IconHeart from "@/public/heart-tanya.png";

export default function Home() {
  return (
    <Padding>
      <Content>
        <TextTitle>Welcome to <b>RoProject-dev</b></TextTitle>
        <HeaderHomeStyle>
          <Link href={"/calculator"} className="text-white">
            <OpsionProject>
              <Image src={IconCalculator} alt="Calculator" />
            </OpsionProject>
          </Link>
          <Link href={"/konversi-suhu"} className="text-white">
            <OpsionProject>
              <Image src={IconSuhu} alt="Konversi Suhu" className="logo-icon-suhu"/>
            </OpsionProject>
          </Link>
          <Link href={"/cek-kodham"} className="text-white">
            <OpsionProject>
              <Image src={IconKod} alt="Cek Kodham" className="logo-icon-kod"/>
            </OpsionProject>
          </Link>
          <Link href={"/cek-kecocokan"} className="text-white">
            <OpsionProject>
              <Image src={IconHeart} alt="Cek Kecocokan" className="logo-icon-hati"/>
            </OpsionProject>
          </Link>
        </HeaderHomeStyle>
      </Content>
    </Padding>
  );
}
