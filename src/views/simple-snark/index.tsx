'use client';

import ThesisConfigProvider from 'src/context/ThesisConfigContext';
import ArithmeticCircuits from './ArithmeticCircuits';
import EllipticCurvePairing from './EllipticCurvePairing';
import HomomorphicEncryption from './HomomorphicEncryption';
import Overview from './Overview';
import QuadraticArithmetic from './QuadraticArithmetic';

export default function SimpleSnarkPage() {
  return (
    <ThesisConfigProvider id="SimpleSnarkPage" firstLevel="section">
      <Overview />
      <ArithmeticCircuits />
      <QuadraticArithmetic />
      <HomomorphicEncryption />
      <EllipticCurvePairing />
    </ThesisConfigProvider>
  );
}
