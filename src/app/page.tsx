import FeaturesSection from '@/components/widgets/FeaturesSection'
import NewsLetterSection from '@/components/widgets/NewsLetterSection'
import ProductSector from '@/components/widgets/ProductSector'
import PromotionSector from '@/components/widgets/PromotionSector'
import TopConrainer from '@/components/widgets/TopConrainer'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <TopConrainer/>
      <PromotionSector/>
      {/* @ts-ignore */}
      <ProductSector/>
      <FeaturesSection/>
      <NewsLetterSection/>
    </main>
  )
}
