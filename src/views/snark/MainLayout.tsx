import Link from 'next/link';

export default function SnarkMainLayout() {
  return (
    <>
      <Link href="/snark/chapter1" className="hover:underline">
        Part 1: Homomorphic Hidings
      </Link>
      <br />
      <Link href="/snark/chapter2" className="hover:underline">
        Part 2: Blind Evaluation of Polynomials
      </Link>
      <br />
      <Link href="/snark/chapter3" className="hover:underline">
        Part 3: The Knowledge of Coefficient Test and Assumption
      </Link>
      <br />
      <Link href="/snark/chapter4" className="hover:underline">
        Part 4: How to make Blind Evaluation of Polynomials Verifiable
      </Link>
    </>
  );
}
