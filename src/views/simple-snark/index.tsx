'use client';

import ThesisConfigProvider from 'src/context/ThesisConfigContext';
import ArithmeticCircuits from './ArithmeticCircuits';
import Overview from './Overview';
import QuadraticArithmetic from './QuadraticArithmetic';
import ECP from './ecp';
import HH from './hh';

export default function SimpleSnarkPage() {
  return (
    <ThesisConfigProvider id="SimpleSnarkPage" firstLevel="section">
      <Overview />
      <ArithmeticCircuits />
      <QuadraticArithmetic />
      <HH />
      <ECP />
    </ThesisConfigProvider>
  );
}
