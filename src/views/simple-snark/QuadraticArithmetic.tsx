import Link from 'next/link';
import { AppArticle, ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import EquationBox from 'src/components/Thesis/EquationBox';
import SectionBox from 'src/components/Thesis/SectionBox';

export default function QuadraticArithmetic() {
  return (
    <SectionBox id="qap" title="Quadratic Arithmetic Programs">
      <AppArticle isFirst>
        A Quadratic Arithmetic Program (QAP) is a polynomial-based representation of an arithmetic
        circuit, particularly the R1CS. The use of polynomials in QAP is chosen by two key
        properties for constructing zk-SNARKs.
      </AppArticle>
      <AppArticle isMath>
        {
          'First, the coefficients of polynomials can encode a large amount of information. Second, comparing the knowledge of polynomials is easy due to the '
        }
        <Link href="https://en.wikipedia.org/wiki/Schwartz-Zippel_lemma" target="_blank">
          Schwartz-Zippel lemma
        </Link>
        {
          '. Instead of checking equality at every point, this lemma evaluates the polynomials at randomly chosen points. Given two different polynomials $P_1$ and $P_2$, even if with very few different coefficients, they have very different curve forms. Therefore, the probability that $P_1(s) = P_2(s)$, where a random $s \\in \\mathbb{F}_p$, is very low.'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'Returning to the example computation $y = x^3 + 2x + 5$, To transition this into a QAP, we define sets of input polynomials $A_1, A_2, ..., A_6$, $B_1, B_2, ..., B_6$, and output polynomials $C_1, C_2, ..., C_6$, corresponding to each wire in the circuit. The left, right, and output total polynomials are defined as:'
        }
      </AppArticle>
      <EquationBox id="qap1">
        {'$A := \\sum_{i=1}^6 w_iA_i; B := \\sum_{i=1}^6 w_iB_i; C := \\sum_{i=1}^6 w_iC_i$'}
      </EquationBox>
      <AppArticle>Or more compactly, using the dot product notation:</AppArticle>
      <EquationBox id="qap2">
        {'$A := w \\odot A_z; B := w \\odot B_z; C = w \\odot C_{z}$'}
      </EquationBox>
      <AppArticle isMath>
        {
          'Where $A_z = \\{A_1, ..., A_6\\}$, $B_z = \\{B_1, B_2, B_3, B_4, B_5, B_6\\}$ and $C_z = \\{C_1, C_2, C_3, C_4, C_5, C_6\\}$.'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'We define a polynomial $P:= AB - C$. The witness $w$ satisfies the circuit constraints if and only if $P(x) = 0$ for all target points. Target points are the points that we link to gates in the circuit. For example, the above circuit (representing the computation $y = x^3 + 2x + 5$) has four gates, so we can associate the points $\\{1, 2, 3, 4\\} \\subset \\mathbb{F}_p$ to these gates. From this, we construct the target polynomial'
        }
      </AppArticle>
      <EquationBox id="qap3">{'$Z(x) = (x - 1)(x - 2)(x - 3)(x - 4)$'}</EquationBox>
      <AppArticle isMath>
        {'Thus, the constraint $P(x) = 0$ at the target points implies:'}
      </AppArticle>
      <EquationBox id="qap4">{'$P(x) = H(x)T(x)$'}</EquationBox>
      <AppArticle isMath>
        {
          'A QAP $Q$ of degree $d$ and size $m$ (the number of wires in the circuit) consists of polynomials $A_z$, $B_z$, $C_z$, and target polynomial $T$ of degree $d$. A witness $w = (w_1, w_2,\\ldots,w_m)$ satisfies $Q$, if $(w \\odot A_z)(w \\odot B_z) - w \\odot C_z = H(x)T(x)$. Based on this construction, we can design a verification protocol between Alice (the prover) and Bob (the verifier) as follows:'
        }
      </AppArticle>
      <ArticleUL className="list-decimal">
        <ArticleLI className="ml-8" isMath>
          <span className="italic">Common knowledge shared between Alice and Bob</span>:{' '}
          {'$A_z$, $B_z$, $C_z$ and $Z(x)$.'}
        </ArticleLI>
        <ArticleLI className="ml-8">
          <span className="italic">Prover</span>
          <ArticleUL className="list-disc">
            <ArticleLI isMath>
              {'Performs the calculation with the circuit and records the witness $w$.'}
            </ArticleLI>
            <ArticleLI isMath>
              {'Calculates $H(x) = ((w \\odot A_z)(w \\odot B_z) - w \\odot C_z) / Z(x)$.'}
            </ArticleLI>
            <ArticleLI isMath>
              {'Evaluates $A$, $B$, $C$ and $H$ at point $s$ chosen randomly by Bob.'}
            </ArticleLI>
            <ArticleLI isMath>
              {'Shares $A(s)$, $B(s)$, $C(s)$ and $H(s)$ with the verifier.'}
            </ArticleLI>
          </ArticleUL>
        </ArticleLI>
        <ArticleLI>
          <span className="italic">Verifier</span>
          <ArticleUL className="list-disc">
            <ArticleLI isMath>
              {
                'Checks that $A(s) * B(s) - C(s) = H(s)T(s)$. This proves all circuit constraints if all constraints are met. At this time, Bob considers all calculations to be done correctly according to the circuit.'
              }
            </ArticleLI>
          </ArticleUL>
        </ArticleLI>
      </ArticleUL>
      <AppArticle isMath>
        {
          'However, the verification protocol does not have ZKP. The ZKP only satisfies two conditions: Alice must not know the value $s$, and Bob must not know the curve. If Alice knows the random value $s$, she can cheat by choosing another curve with the same value in the random $s$. Two conditions can be dealt with by implementing holomorphic hiding and blind evaluation of polynomials.'
        }
      </AppArticle>
    </SectionBox>
  );
}
