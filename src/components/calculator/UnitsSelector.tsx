import { Box, BoxProps, FormLabel, HStack, RadioGroup } from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';
import { Gender, Units } from '../../customTypes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { updateMetrics, setUnits } from '../../redux/metricsSlice';
import { RadioWrapper } from '../form/RadioWrapper';

export const UnitsSelector: React.FC<BoxProps> = ({...props}) => {
  const dispatch = useAppDispatch();
  // FIXME for some reason this doesn't work properly
  const loadedUnits = useAppSelector(
    state => state.metrics.units || Units.Metric
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const units = e.target.value as Units;
    dispatch(updateMetrics({ units }));
  };
  return (
    <Formik
      enableReinitialize
      initialValues={{ units: loadedUnits }}
      onSubmit={({ units }: { units: Units }) => {
        dispatch(setUnits(units));
      }}
    >
      {() => (
        <Box {...props}>
          <RadioGroup defaultValue={loadedUnits} mb="2">
            <HStack>
              {/* I add m="0", because there's some weight margin on the component by default */}
              <FormLabel fontWeight="bold" pr="2" m="0">
                Units
              </FormLabel>
              <RadioWrapper
                label="Metric"
                name="metric"
                value={Units.Metric}
                onChange={handleChange}
              />
              <RadioWrapper
                label="Imperial"
                name="imperial"
                value={Units.Imperial}
                onChange={handleChange}
              />
            </HStack>
          </RadioGroup>
        </Box>
      )}
    </Formik>
  );
};
