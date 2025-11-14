import ProductPage from "@/app/components/ProductPage";
import Features from "@/app/components/Features";
import MoreProducts from "@/app/components/MoreProducts";
import Gallery from "@/app/components/Gallery";
import ProductsAccesseries from "@/app/components/ProductsAccesseries";
import AudioGear from "@/app/components/AudioGear";



export default function SpeakerTwo(){

  const speakers = [
         {
      imageSrc: "/ZX7speaker.png",
      altText: "ZX7speaker.png",
      isNewProduct: true,
      productName: "ZX7",
      price: 1234,
      quantity: 1,
      productType: "SPEAKER",
      description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      variant: "cart" as const,
      productLink: "/spk/spk",
      layout: 'left' as const
    },
    
  ]

   // FEATURES
   const featuresDescription = [
    "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
    "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
  ];

  const boxItems = [
    { quantity: "2x", item: "Speaker Unit" },
    { quantity: "2x", item: "Speaker Cloth Panel" },
    { quantity: "1x", item: "User Manual" },
    { quantity: "1x", item: "3.5mm 5m Audio Cable" },
    {quantity: "1x", item: "10m Optical Cable"}
    
  ];


  
   // GALLERY DATA
  const smallImages = [
    {
      src: "/imagefourteen.png",
      alt: "Person listening to music",
    },
    {
      src: "/imagethirteen.png", 
      alt: "Microphone setup",
    }
  ];

  const largeImage = {
    src: "/imagefifteen.png",
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
      id: "2", 
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







