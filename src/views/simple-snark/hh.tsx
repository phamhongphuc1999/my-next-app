/* eslint-disable quotes */
import { AppArticle, ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import EquationBox from 'src/components/Thesis/EquationBox';
import RefLink from 'src/components/Thesis/RefLink';
import SectionBox from 'src/components/Thesis/SectionBox';

export default function HH() {
  return (
    <SectionBox id="hh" title="Homomorphic Encryption and Blind Polynomial Evaluation">
      <AppArticle isMath>
        {
          'A homomorphic hiding (HH) is a function $E(x): \\mathbb{F}_p \\rightarrow G$ that satisfies the following properties:'
        }
      </AppArticle>
      <ArticleUL className="list-disc">
        <ArticleLI isMath>{'Given $E(x)$, it is hard to find $x$.'}</ArticleLI>
        <ArticleLI isMath>{'If $x \\neq Y$, then $E(x) \\neq E(y)$.'}</ArticleLI>
        <ArticleLI isMath>
          {
            'Given $E(x)$ and $E(y)$, it can generate the HH of arithmetic expressions in $x$ and $y$. For example, it is possible to calculate $E(x + y)$ from $E(x)$ and $E(y)$.'
          }
        </ArticleLI>
      </ArticleUL>
      <AppArticle isMath>
        {
          'Considering a cyclic group $G$ of prime order $p$ with a generator $g$, we define $E(x) = g^x$. Because the discrete logarithm problem is hard when $p$ is large and prime, it is hard to find $x$ from $g^x$. Moreover, different values of $x$ are associated with different values of $E(x)$. Furthermore, $E(x + y) = g^{x + y \\mod p} = g^x \\cdot g^y = E(x)E(y)$, so $E(x)$ is a HH. Notably, HH also supports linear combinations. That is, given $a, b, E(x), E(y)$, we can compute $E(ax + by)$ using the following equation:'
        }
      </AppArticle>
      <EquationBox id="hh1">
        {'$E(ax + by) = g^{ax + by} = g^{ax}g^{by} = (g^x)^a(g^y)^b = E(x)^aE(y)^b$'}
      </EquationBox>
      <AppArticle isMath>
        {
          'A polynomial of degree $d$ over $\\mathbb{F}_p$ is the expression of the form for coefficients $a_0, a_1,\\ldots,a_d \\in \\mathbb{F}_p$'
        }
      </AppArticle>
      <EquationBox id="hh2">
        {'$P(x) = \\sum_{i=0}^d a_ix^i = a_0 + a_1x + \\ldots + a_dx^d$'}
      </EquationBox>
      <AppArticle isMath>
        {
          'Suppose Alice has a polynomial $P$ of degree $d$, and Bob has a random point $s \\in \\mathbb{F}_p$. Bob wants to learn the hiding $E(P(s))$ without revealing $s$. This can be achieved through blind polynomial evaluation using HH as follows:'
        }
      </AppArticle>
      <ArticleUL className="list-disc">
        <ArticleLI isMath>{'Bob sends to Alice the hiding $E(1), E(s),\\ldots,E(s^d)$'}</ArticleLI>
        <ArticleLI isMath>
          {
            'Alice computes $E(P(s))$ from the values sent by Bob and sends $E(P(s))$ to Bob. Alice can do it because $E$, as an HH, supports linear combinations, and $P(s)$ is a linear combination of $1, s, s^2,\\ldots,s^d$.'
          }
        </ArticleLI>
      </ArticleUL>
      <AppArticle>
        Combining with QAP in section <RefLink toId="section_qap" mode="section" />, we have a
        protocol to test whether Alice has a correct assignment
      </AppArticle>
      <ArticleUL className="list-disc">
        <ArticleLI isMath>
          {'Alice performs the calculation with the circuit and records the witness $w$.'}
        </ArticleLI>
        <ArticleLI isMath>
          {
            'Alice chooses polynomials $A$, $B$, $C$ and $H$ as following: $(w \\odot A)(w \\odot B) - w \\odot C = H(x)z(x)$.'
          }
        </ArticleLI>
        <ArticleLI isMath>
          {
            'Bob chooses a random value $s$ and calculates $E(s), E(s^2),\\ldots, E(s^d)$ and send to Alice.'
          }
        </ArticleLI>
        <ArticleLI isMath>
          {
            'Alice sends Bob the hiding of all these polynomials evaluated at $E(A(s))$, $E(B(s))$, $E(C(s))$, and $E(H(s))$ using the hiding of evaluation point Bob sends.'
          }
        </ArticleLI>
        <ArticleLI isMath>
          {
            "Bob checks Alice's knowledge of the polynomial whether $E(A(s)B(s) - C(s)) = E(Z(s)H(s))$ without revealing $s$."
          }
        </ArticleLI>
      </ArticleUL>
      <AppArticle isMath>
        {
          "However, in zk-SNARK, Alice wants to hide all knowledge about her assignment. The hiding $E(A(s))$, $E(B(s))$, $E(O(s))$ and $E(H(s))$ seemingly can deal with the problem, but in practice, the hiding still provide some information about Alice's assignment. For example, given some other satisfying assignment $w^{'} = (w_1^{'}, w_2^{'},\\ldots, w_d^{'})$, Bob can compute the corresponding $A^{'}$, $B^{'}$, $C^{'}$, $H^{'}$ and the hiding $E(A^{'})$, $E(B^{'})$, $E(C^{'})$ and $E(H^{'})$. If this hiding is different from Alice's hiding, Bob can gain that $w^{'} = (w_1^{'}, w_2^{'},\\ldots, w_d^{'})$ is not Alice's assignment."
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'To prevent the problem, Alice can add a random $Z$-shift to each polynomial. That is, Alice creates three random $\\beta_1, \\beta_2, \\beta_3$ and define $A_{\\beta} := A + \\beta_1 Z$, $B_{\\beta} := B + \\beta_2 Z$ and $C_{\\beta} := C + \\beta_3 Z$ and we have an equation'
        }
      </AppArticle>
      <EquationBox id="hh3">
        {
          '$A_\\beta B_\\beta - C_\\beta = (A + \\beta_1Z)(B + \\beta_2Z) - C - \\beta_3Z \\\\ = (AB - C) + A\\beta_2Z + beta_1ZB + \\beta_1\\beta_2Z^2 - \\beta_3Z \\\\ = Z(H + A\\beta_2 + \\beta_1B + \\beta_1\\beta_2Z - \\beta_3)$'
        }
      </EquationBox>
      <AppArticle isMath>
        {
          'Define $H_\\beta = H + A\\beta_2 + \\beta_1B + \\beta_1\\beta_2Z - \\beta_3$, we have $A_\\beta B_\\beta - C_\\beta = TH_\\beta$. Therefore, if Alice uses the polynomials $A_\\beta$, $B_\\beta$, $C_\\beta$, $H_\\beta$ instead of $A$, $B$, $C$ and $D$, Bob will always accept. Moreover, these polynomials evaluated at $s \\in \\mathbb{F}_p$ with $Z \\neq 0$ do not reveal any information about the assignment. For example, since $Z(x)$ is non-zero and $\\beta_1$ is random, $\\beta Z(s)$ is a random value, and therefore $A_{\\beta} := A + \\beta_1 Z$ does not leak any information about $A(s)$.'
        }
      </AppArticle>
      <AppArticle>
        {
          'By the way, Alice can convince Bob that she has a legal assignment for a QAP without revealing any information about this assignment. However, this protocol still requires an interaction cycle between Alice and Bob. The problem can be resolved through pairings of elliptic curves, which will be discussed in the next section.'
        }
      </AppArticle>
    </SectionBox>
  );
}
