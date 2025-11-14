import ProductsAccesseries from "@/app/components/ProductsAccesseries";
import AudioGear from "@/app/components/AudioGear";
import Gallery from  "@/app/components/Gallery"
import MoreProducts from '@/app/components/MoreProducts';
import Features from "@/app/components/Features";
import ProductPage from "@/app/components/ProductPage";

export default function HeadphoneOne() {

  const headphones = [
      {
      imageSrc: "/markII.png",
      altText: "XX99 Mark II Headphones",
      isNewProduct: true,
      price: 2999,
      quantity:1,
      productName: "XX99 MARK II",
      productType: "HEADPHONES",
      description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      productLink: "/products/xx99-mark-ii",
      variant: "cart" as const,
      layout: 'left' as const
    }
  ]

  // FEATURES
   const featuresDescription = [
    "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you are taking a business call or just in your own personal space, the auto on/off and pause features ensure that you will never miss a beat.",
    "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
  ];

  const boxItems = [
    { quantity: "1x", item: "Headphone Unit" },
    { quantity: "2x", item: "Replacement Earcups" },
    { quantity: "1x", item: "User Manual" },
    { quantity: "1x", item: "3.5mm 5m Audio Cable" },
    { quantity: "1x", item: "Travel Bag" }
  ];


  // GALLERY DATA
  const smallImages = [
    {
      src: "/imageOne.png",
      alt: "XX99 Mark II Headphones",
    },
    {
      src: "/imageTwo.png", 
      alt: "Microphone setup",
    }
  ];

  const largeImage = {
    src: "/imageThree.png",
    alt: "Studio microphone",
  };

  // MOREPRODUCTS DATA
  const relatedProducts = [
    {
      id: "1",
      imageSrc: "/image-headphone-small.png",
      altText: "XX99 Mark I Headphones",
      name: "XX99 MARK I",
      productLink: "/headphones/headphonetwo"
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

  return (
  <div  style={{ marginTop: '5rem' }}>

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
  );
}