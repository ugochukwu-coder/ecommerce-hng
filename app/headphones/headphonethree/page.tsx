import ProductPage from "@/app/components/ProductPage";
import Features from "@/app/components/Features";
import MoreProducts from "@/app/components/MoreProducts";
import Gallery from "@/app/components/Gallery";
import ProductsAccesseries from "@/app/components/ProductsAccesseries";
import AudioGear from "@/app/components/AudioGear";



export default function HeadphoneThree(){

  const headphones = [
      {
      imageSrc: "/XX59.png",
      altText: "XX59 Headphone",
      isNewProduct: true,
      productName: "XX59",
      price: 1999,
      quantity: 1,
      productType: "HEADPHONES",
      description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      productLink: "/products/xx59",
      variant: "cart" as const,
      layout: 'left' as const
    },
    
  ]

   // FEATURES
   const featuresDescription = [
    "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
    "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
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
      src: "/imageeight.png",
      alt: "Person listening to music",
    },
    {
      src: "/imageseven.png", 
      alt: "Microphone setup",
    }
  ];

  const largeImage = {
    src: "/imagenine.png",
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
      imageSrc: "/markI.png",
      altText: "XX99 MARK I",
      name: "XX99 MARK I",
      productLink: "/headphones/headphonetwo",
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







