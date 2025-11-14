import ProductPage from "@/app/components/ProductPage";
import Features from "@/app/components/Features";
import MoreProducts from "@/app/components/MoreProducts";
import Gallery from "@/app/components/Gallery";
import ProductsAccesseries from "@/app/components/ProductsAccesseries";
import AudioGear from "@/app/components/AudioGear";



export default function SpeakerOne(){

  const speakers = [
         {
      imageSrc: "/ZX9speaker.png",
      altText: "ZX9speaker.png",
      isNewProduct: true,
      productName: "ZX9",
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
    "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
    "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
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
      src: "/imageten.png",
      alt: "Person listening to music",
    },
    {
      src: "/imageeleven.png", 
      alt: "Microphone setup",
    }
  ];

  const largeImage = {
    src: "/imagetwelve.png",
    alt: "Studio microphone",
  };

  // MOREPRODUCTS DATA
  const relatedProducts = [
    {
      id: "1",
      imageSrc: "/ZX7speaker.png",
      altText: "ZX7 Speaker",
      name: "ZX7 SPEAKER",
      productLink: "/speakers/speakertwo",
    },
       {
      id: "2",
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







