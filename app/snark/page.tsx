import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';

export default function Snark() {
  return (
    <CommonContainer>
      <CssBreadcrumbs
        configs={[{ label: 'Home', link: '/' }, { label: 'SNARK' }]}
        className="mb-[1rem]"
      />
      <div className="flex flex-col gap-1">
        <Link href="/snark/chapter1" className="hover:underline">
          Part 1: Homomorphic Hidings
        </Link>
        <Link href="/snark/chapter2" className="hover:underline">
          Part 2: Blind Evaluation of Polynomials
        </Link>
        <Link href="/snark/chapter3" className="hover:underline">
          Part 3: The Knowledge of Coefficient Test and Assumption
        </Link>
        <Link href="/snark/chapter4" className="hover:underline">
          Part 4: How to make Blind Evaluation of Polynomials Verifiable
        </Link>
        <Link href="/snark/chapter5" className="hover:underline">
          Part 5: From Computations to Polynomials
        </Link>
        <Link href="/snark/chapter6" className="hover:underline">
          Part 6: The Pinocchio Protocol
        </Link>
        <Link href="/snark/chapter7" className="hover:underline">
          Part 7: Pairings of Elliptic Curves
        </Link>
      </div>
    </CommonContainer>
  );
}
