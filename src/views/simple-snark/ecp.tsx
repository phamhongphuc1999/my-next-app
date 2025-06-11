/* eslint-disable quotes */
import { AppArticle, ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import EquationBox from 'src/components/Thesis/EquationBox';
import RefLink from 'src/components/Thesis/RefLink';
import SectionBox from 'src/components/Thesis/SectionBox';

export default function ECP() {
  return (
    <SectionBox id="ecp" title="Pairing-Based Cryptography and Elliptic Curve Pairings">
      <AppArticle isMath>
        {
          'Given $G_1$, $G_2$, and a target group $G_T$ be groups of prime order $p$. A paring $e$ is a mapping that takes elements from two groups $G_1$ and $G_2$ and returns an element in $G_T$ such that $g_1$ and $g_2$ are generators of $G_1$ and $G_2$ respectively, then $e(g_1, g_2) \\neq 1$ is a generator of $G_T$ and $e(g_1^a, g_2^b) = e(g_1, g_2)^{ab}$.'
        }
      </AppArticle>
      <EquationBox id="ecp1">{'$e: G_1 \\times G_2 \\rightarrow G_T$'}</EquationBox>
      <AppArticle isMath>
        {
          'A pairing function satisfies the following properties, given $q_1, q_2 \\in G_1$ and $t_1, t_2 \\in G_2$'
        }
      </AppArticle>
      <EquationBox id="ecp2">
        {
          '$e(q_1 + q_2, t_1) = e(q_1, t_1) \\times e(q_2, t_1) \\\\ e(q_1, t_1 + t_2) = e(q_1, t_1) \\times e(q_1, t_2) \\\\ e(\\alpha q_1, \\beta t_1) = e(\\alpha\\beta q_1, t_1)$'
        }
      </EquationBox>
      <AppArticle>
        {
          'Using the properties of the paring of elliptic curves, we can implement a protocol that can hide the knowledge of coefficients from Bob and does not need a community between Alice and Bob.'
        }
      </AppArticle>
      <ArticleUL className="list-disc">
        <ArticleLI isMath>
          {'Alice performs the calculation with the circuit and records the witness $w$.'}
        </ArticleLI>
        <ArticleLI isMath>
          {
            'Alice chooses polynomials $A$, $B$, $C$ and $H$ as following $(w \\odot A)(w \\odot B) - w \\odot C = H(x)z(x)$.'
          }
        </ArticleLI>
        <ArticleLI isMath>
          <span className="italic">setup common reference string (CRS)</span>: given a random value
          $\alpha$, the CRS is published.
          <EquationBox id="ecp3">
            {
              '$G_1(1),G_1(s),\\ldots,G_1(s^d),G_2(\\alpha),G_2(\\alpha s),\\ldots,G_2(\\alpha s^d)$'
            }
          </EquationBox>
        </ArticleLI>
        <ArticleLI isMath>
          <span className="italic">Proof</span>: Alice computes $a = G_1(P(s))$ and $b = G_2(\alpha
          P(s))$ using the elements of the CRS, noticing that $G_1, G_2$ support linear
          combinations.
        </ArticleLI>
        <ArticleLI isMath>
          <span className="italic">Verification</span>:{' '}
          {
            'Fix the $x, y \\in \\mathbb{F}_r$, such that $a = G_1(x)$ and $b = G_2(y)$. Bob computes $G_T(\\alpha x) = e(G_1(x), G_2(\\alpha))$ and $G_T(y) = e(G_1(1), G_2(y))$, and checks that they are equal. If they are equal, it implies the equation.'
          }
          <EquationBox id="alpha_x_equal_y">{'$\\alpha x = y$'}</EquationBox>
        </ArticleLI>
      </ArticleUL>
      <AppArticle isMath>
        {'Based on equation '}
        <RefLink toId="alpha_x_equal_y" mode="equation" />
        {
          ', Bob ensures that Alice has the knowledge of coefficients of polynomial $P$ of degree $d$. It is done by the below protocol.'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          "Suppose Bob sends to Alice $d$ $\\alpha$-pairs $(a_1, b_1),\\ldots,(a_d, b_d)$(a pair $(a, b) \\in G$ is called a $\\alpha$-pair if $a,b \\neq 0$ and $b = \\alpha a$). Alice is challenged to generate some other $\\alpha$-pairs $(a^{'}, b^{'})$. If Alice knows $\\alpha$, the problem is straightforward, she chooses a random value $a^{'} \\in G$ and calculate $b^{'} = \\alpha a^{'}$. However, seeing the hardness of the discrete logarithm problem, the probability that Alice can find $\\alpha$ is very small. Thus, instead of finding $\\alpha$, Alice should perform the following protocol to pass the challenge. She chooses several random values $c_1,\\ldots,c_d \\in \\mathbb{F}_p$ and computes the pair $(a^{'}, b^{'}) = (\\sum_{i=1}^d c_ia_i, \\sum_{i=1}^d c_ib_i)$. We consider the equation"
        }
      </AppArticle>
      <EquationBox id="ecp4">
        {
          "$b^{'} = \\sum_{i=1}^d c_ib_i = \\sum_{i=1}^d c_i\\alpha a_i = \\alpha \\sum_{i=1}^d c_ia_i = \\alpha a^{'}$"
        }
      </EquationBox>
      <AppArticle isMath>
        {
          "Obviously, the pair $(a^{'}, b^{'})$ is a $\\alpha$-pair and Bob easily accept the Alice's pair. By the way, Alice proves that she knows a linear relationship between $a^{'}$ and $a_1, a_2,\\ldots,a_d$, such that, she knows $c_1,c_2,\\ldots,c_d$, and $a^{'} = \\sum_{i=1}^d c_ia_i$."
        }
      </AppArticle>
      <AppArticle isMath>
        {
          "Depending on the statement, we can present the protocol that verifies Alice's knowledge about coefficients. Assume that an HH is the mapping $e(x) = xg$ for a generator $g$ of $G$."
        }
      </AppArticle>
      <ArticleUL className="list-disc">
        <ArticleLI isMath>
          {
            'Bob chooses a random $\\alpha \\in \\mathbb{F}_p^*$ and sends to Alice the hiding $g, sg,\\ldots,s^dg$ and $\\alpha g, \\alpha s g,\\ldots,\\alpha s^dg$.'
          }
        </ArticleLI>
        <ArticleLI isMath>
          {
            'Alice computes $a = P(s)g$ and $b = \\alpha P(s)g$ using the elements sent in the first step and sends both to Bob.'
          }
        </ArticleLI>
        <ArticleLI isMath>
          {'Bob checks that $b = \\alpha a$ and accepts if and only if this equality holds.'}
        </ArticleLI>
      </ArticleUL>
    </SectionBox>
  );
}
