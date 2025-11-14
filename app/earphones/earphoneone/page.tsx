import ProductPage from "@/app/components/ProductPage";
import Features from "@/app/components/Features";
import MoreProducts from "@/app/components/MoreProducts";
import Gallery from "@/app/components/Gallery";
import ProductsAccesseries from "@/app/components/ProductsAccesseries";
import AudioGear from "@/app/components/AudioGear";



export default function EarphoneOne(){

  const speakers = [
      {
      imageSrc: "/wireless.png",
      altText: "wireless.png",
      isNewProduct: true,
      productName: "YX1 WIRELESS",
      price: 2999,
      quantity: 1,
      productType: "EARPHONES",
      description: " The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      productLink: "",
      variant: 'cart' as const,
      layout: 'left' as const
    }
    
  ]

   // FEATURES
   const featuresDescription = [
    "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
    "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
  ];

  const boxItems = [
    { quantity: "2x", item: "Earphone Unit" },
    { quantity: "6x", item: "Multi-size Earplugs" },
    { quantity: "1x", item: "User Manual" },
    { quantity: "1x", item: "USB-C Charging Cable" },
    {quantity: "1x", item: "Travel Pouch"}
    
  ];

  
   // GALLERY DATA
  const smallImages = [
    {
      src: "/imagesixteen.png",
      alt: "Person listening to music",
    },
    {
      src: "/imageseventeen.png", 
      alt: "Microphone setup",
    }
  ];

  const largeImage = {
    src: "/imageeighteen.png",
    alt: "Studio microphone",
  };

  // MOREPRODUCTS DATA
  const relatedProducts = [
    {
      id: "1",
      imageSrc: "/markI.png",
      altText: "XX99 MARK I",
      name: "XX99 MARK II",
      productLink: "/headphones/headphonetwo",
    },
    {
      id: "3", 
      imageSrc: "/XX59.png",
      altText: "XX59 Headphones",
      name: "XX59",
      productLink: "/headphones/headphonethree",
    },
     {
      id: "1",
      imageSrc: "/ZX9speaker.png",
      altText: "ZX9 SPEAKER",
      name: "ZX9 SPEAKER",
      productLink: "/speakers/speakerone",
    },

  
    
  ];
   
  return(
    <div style={{ marginTop: '5rem' }}>
        {speakers.map((speaker, index) => (
            <ProductPage
              key={index}
              {...speaker}
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







