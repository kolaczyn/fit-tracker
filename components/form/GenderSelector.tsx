import { FormLabel, RadioGroup } from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';

import { Gender } from '../../customTypes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { updateMetrics } from '../../redux/metricsSlice';
import { RadioWrapper } from './RadioWrapper';

interface GenderSelectorProps {}

export const GenderSelector: React.FC<GenderSelectorProps> = ({}) => {
  const dispatch = useAppDispatch();
  // FIXME for some reason this doesn't work properly
  const loadedGender = useAppSelector(
    state => state.metrics.gender || Gender.Male
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const gender = e.target.value as Gender;
    dispatch(updateMetrics({ gender }));
  };
  return (
    <Formik
      enableReinitialize
      initialValues={{ gender: loadedGender }}
      onSubmit={({ gender }: { gender: Gender }) => {
        dispatch(updateMetrics({ gender }));
      }}
    >
      {() => (
        <>
          <RadioGroup>
            <FormLabel>Gender</FormLabel>
            <RadioWrapper
              label="Male"
              name="gender"
              value={Gender.Male}
              onChange={handleChange}
            />
            <RadioWrapper
              label="Female"
              name="gender"
              value={Gender.Female}
              onChange={handleChange}
            />
          </RadioGroup>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </>
      )}
    </Formik>
  );
};
