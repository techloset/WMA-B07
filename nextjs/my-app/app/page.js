import Image from "next/image";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/contact" >Contact </Link>
      <Header/>
      <h1>Hello Nextjs</h1>
      <Footer/>
    </div>
  );
}
