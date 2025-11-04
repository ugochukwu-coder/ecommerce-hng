import CategoryHeader from "../components/categoryHeader";
import ProductsAccesseries from "../components/ProductsAccesseries";
import ProductPage from "../components/ProductPage";
import AudioGear from "../components/AudioGear";
import Image from 'next/image';
import Link from "next/link";

export default function Earphones(){

  const earphones = [
    
    {
      imageSrc: "/wireless.png",
      altText: "wireless.png",
      isNewProduct: true,
      productName: "YX1 WIRELESS",
      productType: "EARPHONES",
      description: " The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      productLink: "/spk/spk",
      layout: 'left' as const
    }

  ];
  return(
    <>
      <CategoryHeader categoryName="EARPHONES" />

         {earphones.map((earphones, index) => (
                  <ProductPage
                    key={index}
                    {...earphones}
                  />
                ))}

        <ProductsAccesseries/>
        <AudioGear />
    </>
  )
}
