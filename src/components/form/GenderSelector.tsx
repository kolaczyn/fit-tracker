import { Box, BoxProps, FormLabel, HStack, RadioGroup } from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';
import { Gender } from '../../customTypes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { updateMetrics } from '../../redux/metricsSlice';
import { RadioWrapper } from './RadioWrapper';

export const GenderSelector: React.FC<BoxProps> = ({ ...props }) => {
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
      onSubmit={() => {}}
    >
      {() => (
        <Box {...props}>
          <RadioGroup defaultValue={loadedGender} mb="2">
            <HStack>
              {/* I add m="0", because there's some weight margin on the component by default */}
              <FormLabel fontWeight="bold" pr="2" m="0">
                Gender
              </FormLabel>
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
            </HStack>
          </RadioGroup>
        </Box>
      )}
    </Formik>
  );
};
