import ProductPage from "../components/ProductPage";

export default function HeadphonesTwo(){

  const headphones = [
    {
      imageSrc: "/markI.png",
      altText: "XX99 Mark I Headphones",
      isNewProduct: true,
      productName: "XX99 MARK I",
      productType: "HEADPHONES",
      description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      productLink: "yyyyy",
      layout: 'right' as const
    }

  ]
  return(
    <div>
       {headphones.map((headphone, index) => (
          <ProductPage
            key={index}
            {...headphone}
          />
        ))}

    </div>
  )
}