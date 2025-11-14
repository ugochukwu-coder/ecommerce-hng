import CategoryHeader from "../components/categoryHeader";
import ProductsAccesseries from "../components/ProductsAccesseries";
import AudioGear from "../components/AudioGear";
import ProductPage from "../components/ProductPage";


export default function Speakers(){

   const speakers = [
    
    {
      imageSrc: "/ZX9speaker.png",
      altText: "ZX9speaker.png",
      isNewProduct: true,
      productName: "ZX9",
      productType: "SPEAKER",
      description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      productLink: "speakers/speakerone",
      layout: 'left' as const
    },
    {
      imageSrc: "/ZX7speaker.png",
      altText: "ZX7speaker.png",
      isNewProduct: true,
      productName: "ZX7",
      productType: "SPEAKER",
      description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      productLink: "speakers/speakertwo",
      layout: 'right' as const
    }

  ];
  return(
    <>
    
      <CategoryHeader categoryName="SPEAKERS" />

        {speakers.map((speaker, index) => (
          <ProductPage
            key={index}
            {...speaker}
          />
        ))}

        <ProductsAccesseries/>
        <AudioGear />
    </>
  )
}



