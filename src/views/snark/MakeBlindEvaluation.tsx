/* eslint-disable quotes */
import { ArticleTitle } from 'src/components/box/ArticleBox';

export default function MakeBlindEvaluation() {
  return (
    <div className="mt-[1rem]">
      <ArticleTitle>
        {
          "In this part, we build on Parts 2 and 3 to develop a protocol for verifiable blind evaluation of polynomials, which we will define shortly. In Part V, we'll explore how such a protocol can be used to construct SNARKs, so bear with me for the connection to SNARKs :)."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Suppose, as in Part 2, that Alice has a polynomial $P$ of degree $d$, and Bob has point $s \\in \\mathbb{F}_p$ that he chose randomly. We want to construct a protocol that allows Bob to learn $E(P(s))$'
        }
      </ArticleTitle>
    </div>
  );
}
