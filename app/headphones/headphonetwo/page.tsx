import ProductPage from "@/app/components/ProductPage";
import Features from "@/app/components/Features";
import MoreProducts from "@/app/components/MoreProducts";
import Gallery from "@/app/components/Gallery";
import ProductsAccesseries from "@/app/components/ProductsAccesseries";
import AudioGear from "@/app/components/AudioGear";



export default function HeadphoneTwo(){

  const headphones = [
     {
      imageSrc: "/markI.png",
      altText: "XX99 Mark I Headphones",
      isNewProduct: true,
      productName: "XX99 MARK I",
      productType: "HEADPHONES",
      price: 1750,
      quantity: 1,
      description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      productLink: "",
      variant: "cart" as const,
      layout: "left" as const
    }
  ]

   // FEATURES
   const featuresDescription = [
    "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
    "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
  ];

  const boxItems = [
    { quantity: "1x", item: "Headphone Unit" },
    { quantity: "2x", item: "Replacement Earcups" },
    { quantity: "1x", item: "User Manual" },
    { quantity: "1x", item: "3.5mm 5m Audio Cable" }
    
  ];

  
   // GALLERY DATA
  const smallImages = [
    {
      src: "/imagefour.png",
      alt: "Person listening to music",
    },
    {
      src: "/imagefive.png", 
      alt: "Microphone setup",
    }
  ];

  const largeImage = {
    src: "/imagesix.png",
    alt: "Studio microphone",
  };

  // MOREPRODUCTS DATA
  const relatedProducts = [
    {
      id: "1",
      imageSrc: "/markII.png",
      altText: "XX99 Mark II Headphones",
      name: "XX99 MARK II",
      productLink: "/headphones/headphoneone",
    },

    {
      id: "2", 
      imageSrc: "/XX59.png",
      altText: "XX59 Headphones",
      name: "XX59",
      productLink: "/headphones/headphonethree",
    },
    {
      id: "3",
      imageSrc: "/image-speaker-small.png",
      altText: "ZX9 Speaker",
      name: "ZX9 SPEAKER", 
      productLink: "/speakers/speakerone",
    }
  ];
   
  return(
    <div style={{ marginTop: '5rem' }}>
        {headphones.map((headphone, index) => (
            <ProductPage
              key={index}
              {...headphone}
            />
          ))}

          <Features
          featuresDescription={featuresDescription}
          boxItems={boxItems}
        />

        {/* Gallery component */}
        <Gallery 
          smallImages={smallImages}
          largeImage={largeImage}
          layout="left" 
        />

      

          {/* page content */}
        <MoreProducts 
          title="YOU MAY ALSO LIKE"
          products={relatedProducts}
        />

        <ProductsAccesseries />

        <AudioGear />

    </div>
  )
}  







