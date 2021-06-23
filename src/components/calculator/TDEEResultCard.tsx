import React from 'react';

export const TDEEResultCard: React.FC = ({}) => {
  return <h2>TDEE result placeholder</h2>;
  // const metrics = useAppSelector(state => state.metrics);
  // if (metrics.height === null || metrics.weight === null) return null;

  // const bmiStats = calculateBMIStats({
  //   heightInCm: metrics.height,
  //   weightInKg: metrics.weight,
  // });

  // return (
  //   <>
  //     <Text>
  //       Your BMI is {bmiStats.currentBMI.toFixed(1)}, you are in the{' '}
  //       {bmiStats?.category} category
  //     </Text>
  //     {bmiStats.targetWeight !== null ? (
  //       <Text>
  //         You need to reached the weight {bmiStats.targetWeight.toFixed(1)}
  //         to be in a better category
  //       </Text>
  //     ) : null}
  //   </>
  // );
};
