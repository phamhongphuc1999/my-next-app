'use client';

import ThesisConfigProvider from 'src/context/ThesisConfigContext';
import ArithmeticCircuits from './ArithmeticCircuits';
import Overview from './Overview';

export default function SimpleSnarkPage() {
  return (
    <ThesisConfigProvider id="SimpleSnarkPage" firstLevel="section">
      <Overview />
      <ArithmeticCircuits />
    </ThesisConfigProvider>
  );
}
