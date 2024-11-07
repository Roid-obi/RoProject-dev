import Image from "next/image";
import Link from "next/link";
import { CardHeader, Content, HeaderHomeStyle, OpsionProject, Padding, TextHeader, TextTitle } from "./page.styled";
import Button from "@/components/Button";
import IconCalculator from "@/public/ios-calculator-3.svg";
import IconSuhu from "@/public/klipartz.com.png";
import IconKod from "@/public/pngegg.png";

export default function Home() {
  return (
    <Padding>
      <Content>
        <TextTitle>Welcome to RoProject-dev</TextTitle>
        <HeaderHomeStyle>
          <Link href={"/calculator"} className="text-white">
            <OpsionProject>
              <Image src={IconCalculator} alt="Calculator" />
            </OpsionProject>
          </Link>
          <Link href={"/konversi-suhu"} className="text-white">
            <OpsionProject>
              <Image src={IconSuhu} alt="Konversi Suhu" className="logo-icon"/>
            </OpsionProject>
          </Link>
          <Link href={"/cek-kodham"} className="text-white">
            <OpsionProject>
              <Image src={IconKod} alt="Cek Kodham" className="logo-icon"/>
            </OpsionProject>
          </Link>
        </HeaderHomeStyle>
      </Content>
    </Padding>
  );
}
