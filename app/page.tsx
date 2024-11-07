import Image from "next/image";
import Link from "next/link";
import { CardHeader, HeaderHomeStyle, Padding, TextHeader } from "./page.styled";
import Button from "@/components/Button";

export default function Home() {
  return (
        <Padding>
          <HeaderHomeStyle>
            <Link href={"/calculator"} className="">
              Calculator
            </Link>
            <Link href={"/konversi-suhu"} className="">
              Konversi Suhu
            </Link>
            <Link href={"/spinner-wheel"} className="">
              Spinner Wheel
            </Link>
          </HeaderHomeStyle>
        </Padding>
  );
}
