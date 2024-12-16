import { Breadcrumbs } from '@/components/breadcrumbs'
import GridProducts from '@/components/GridProducts'
import { ProductImages } from '@/components/product-images'
import { ProductInfo } from '@/components/product-info'
import { TabsSection } from '@/components/tabs-section'

export default function ProductPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Product Name', href: '/product/123' },
  ]

  const productImages = [
    '/images/pd1.png',
    '/images/pd2.png',
    '/images/pd3.png',
  ]


  const likePro = [
    {
      image: "/images/na1.png",
      title: "Stylish Jacket",
      price: 150,
      discountPrice: 120,
      discountPercent: 20,
      rating: 4.8,
    },
    {
      image: "/images/na2.png",
      title: "Trendy Sneakers",
      price: 100,
      discountPrice: null,
      discountPercent: null,
      rating: 4.5,
    },
    {
      image: "/images/na3.png",
      title: "Trendy Sneakers",
      price: 100,
      discountPrice: null,
      discountPercent: null,
      rating: 4.5,
    },
    {
      image: "/images/na4.png",
      title: "Trendy Sneakers",
      price: 100,
      discountPrice: null,
      discountPercent: null,
      rating: 4.5,
    },
  ];
  return (
    <div className="max-w[1240px] mx-auto md:px-4  px-2 md:py-6 py-3">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <ProductImages images={productImages} />
        <ProductInfo
          title="One Life Graphic Tshirt"
          rating={4.5}
          price={99.99}
          discountPrice={79.99}
          discountLabel="20% OFF"
        />
      </div>
      <div className="mt-12">
        <TabsSection />
      </div>


      <GridProducts title="You might also like" products={likePro}/>
    </div>
  )
}

