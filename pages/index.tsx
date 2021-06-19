import { NextSeo } from 'next-seo';
import { CurrentStats } from '../components/stats/CurrentStats';
import { NutrientsInput } from '../components/stats/NutrientsInput';

export default function Home() {
  return (
    <>
      <NextSeo title="Track Fit" />
      <CurrentStats />
      <NutrientsInput />
    </>
  );
}
