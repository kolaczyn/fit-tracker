import { Heading, Text } from '@chakra-ui/layout';
import { NextSeo } from 'next-seo';
import { AppBox } from '../components/ui/AppBox';
export default function Home() {
  return (
    <>
      <NextSeo title="Track Fit" description="Get in shape with Track Fit. Track you calories, weight and BMI and many more"/>
      <AppBox>
        <Heading as="h1">
          Welcome to Track <span style={{ fontWeight: 'normal' }}>Fit</span>!
        </Heading>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          commodi!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          voluptate tempore in nostrum, recusandae delectus, praesentium quae
          porro neque dignissimos eum aperiam quam est atque!
        </Text>
      </AppBox>
    </>
  );
}
