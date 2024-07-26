import dynamic from 'next/dynamic';

const MainImageSlider = dynamic(() => import('@/components/Home/MainImageSlider'), { ssr: false });
const HomeCategory = dynamic(() => import('@/components/Home/HomeCategory'), { ssr: false });
const DiscountSection = dynamic(() => import('@/components/Home/DiscountSection'), { ssr: false });
const RecommendedSection = dynamic(() => import('@/components/Home/RecommendedSection'), { ssr: false });

export default function Home() {
  return (
    <main className=" bg-lbackground dark:bg-dbackground">
      <MainImageSlider />
      <HomeCategory />
      <DiscountSection />
      <RecommendedSection />
    </main>
  );
}
