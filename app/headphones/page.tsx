
import CategoryHeader from "../components/categoryHeader";
import ProductsAccesseries from "../components/ProductsAccesseries";
import AudioGear from "../components/AudioGear";

import ProductPage from "../components/ProductPage";

export default function Headphones(){

 const headphones = [
    {
      imageSrc: "/markII.png",
      altText: "XX99 Mark II Headphones",
      isNewProduct: true,
      productName: "XX99 MARK II",
      productType: "HEADPHONES",
      description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      productLink: "/headphones/headphonesone",
      layout: 'left' as const
    },
    {
      imageSrc: "/markI.png",
      altText: "XX99 Mark I Headphones",
      isNewProduct: true,
      productName: "XX99 MARK I",
      productType: "HEADPHONES",
      description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      productLink: "yyyyy",
      layout: 'right' as const
    },
    {
      imageSrc: "/XX59.png",
      altText: "XX59 Headphone",
      isNewProduct: true,
      productName: "XX59",
      productType: "HEADPHONES",
      description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      productLink: "/products/xx59",
      layout: 'left' as const
    }
  ];

  return(

    <>
      
        <CategoryHeader categoryName="HEADPHONES" />

         {headphones.map((headphone, index) => (
        <ProductPage
          key={index}
          {...headphone}
        />
      ))}

        <ProductsAccesseries/>
        <AudioGear />
    </>    
  )
}

