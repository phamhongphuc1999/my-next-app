/* eslint-disable quotes */
/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link';
import { AppArticle, ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import { ContrastLink } from 'src/components/utils';

export default function BlindEvaluation() {
  return (
    <div className="mt-[1rem]">
      <AppArticle>
        {
          'In this post, we recall the notion of a polynomial and explain the concept of "blind evaluation" of a polynomial, and how it is implemented using Homomorphic Hiding (HH). (See '
        }
        <Link href="/snark/chapter1" className="font-[500] text-black-350 underline">
          part 1
        </Link>
        {
          ' for an explanation of HH). In future posts, we will see that blind evaluation is a central tool in SNARK constructions.'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'We denote by $\\mathbb{F}_p$ the field of size $p$; that is, the element of $\\mathbb{F}_p$ are {0,..., $p$ - 1}, and addition and multiplication are done mod $p$, as explained in '
        }
        <Link href="/snark/chapter1">part 1.</Link>
      </AppArticle>
      <p className="text-[20px]">Polynomials and Linear Combinations</p>
      <AppArticle isFirst isMath>
        {
          'Recall that a polynomial $P$ of degree $d$ over $\\mathbb{F}_p$ is an expression of the form for some $a_0,\\ldots, a_d \\in \\mathbb{F}_p$.'
        }
      </AppArticle>
      <AppArticle isMath className="text-center">
        {'$P(X) =$ $a_0 + a_1 \\cdot X +$ $a_2 \\cdot X^2 +$ $\\ldots +$ $a_d \\cdot X^d$'}
      </AppArticle>
      <AppArticle isMath>
        {
          'We can evaluate $P$ at a point $s \\in \\mathbb{F}_p$ by substituting $s$ for $X$ and computing the resultant sum'
        }
      </AppArticle>
      <AppArticle isMath className="text-center">
        {'$P(s) =$ $a_0 + a_1 \\cdot s +$ $a_2 \\cdot s^2 +$ $\\ldots + a_d \\cdot s^d$'}
      </AppArticle>
      <AppArticle isMath>
        {
          'For someone who knows $P$, the value $P(s)$ is a linear combination of the values $1, s,\\ldots,s^d$, where linear combination just means "weighted sum"; in the case of $P(s)$, the "weights" are $a_0,\\ldots,a_d$.'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'In the last post, we saw the HH $E$ defined by $E(x) = g^x$, where $g$ was a generator of a group with a hard discrete log problem. We mentioned that this HH "supports addition" in the sense that $E(x + y)$ can be computed from $E(x)$ and $E(y)$. We note here that it also "supports linear combinations", meaning that, given $a, b, E(x), E(y)$, we can compute $E(ax + by)$. This is simply because'
        }
      </AppArticle>
      <AppArticle isMath className="text-center">
        {
          '$E(ax+by) =$ $g^{ax+by} =$ $g^{ax} \\cdot g^{by} =$ $(g^x)^a \\cdot (g^y)^b =$ $E(x)^a \\cdot E(y)^b$'
        }
      </AppArticle>
      <p className="text-[20px]">Blind Evaluation of a Polynomial</p>
      <AppArticle isMath isFirst>
        {
          'Suppose Alice has a polynomial $P$ of degree $d$, and Bob has a point $s \\in \\mathbb{F}_p$ that he chose randomly. Bob wishes to learn $E(P(s))$,i.e., the HH of the evaluation of $P$ at $s$. Two simple ways to do this are:'
        }
      </AppArticle>
      <ArticleUL className="list-decimal">
        <ArticleLI isMath className="ml-[2rem]">
          {'Alice sends $P$ to Bob, and he computes $E(P(s))$ by himself.'}
        </ArticleLI>
        <ArticleLI isMath className="ml-[2rem]">
          {'Bob sends $s$ to Alice; she computes $E(P(s))$ and sends it to Bob.'}
        </ArticleLI>
      </ArticleUL>
      <AppArticle isMath>
        {
          "However, in the blind evaluation problem, we want Bob to learn $E(P(s))$ without learning $P$, which precludes the first option; and, most importantly, we don't want Alice to learn $s$, which rules out the second"
        }
        <ContrastLink id="snark2_1_item" href="#snark2_1">
          [1]
        </ContrastLink>
      </AppArticle>
      <AppArticle>Using HH, we can perform blind evaluation as follows:</AppArticle>
      <ArticleUL className="list-decimal">
        <ArticleLI isMath className="ml-[2rem]">
          {'Bob sends to Alice the hidings $E(1)$, $E(s)$,...,$E(s^d)$.'}
        </ArticleLI>
        <ArticleLI isMath className="ml-[2rem]">
          {
            'Alice computes $E(P(s))$ from the elements sent in the first step, and sends $E(P(s))$ to Bob. Alice can do this since $E$ supports linear combinations, and $P(s)$  is a linear combination of 1, $s$,...,$s^d$.'
          }
        </ArticleLI>
      </ArticleUL>
      <AppArticle isMath>
        {'Note that, as only hidings were sent, neither Alice learned $s$ '}
        <ContrastLink id="snark2_2_item" href="#snark2_2">
          [2]
        </ContrastLink>
        {', nor did Bob learn $P$.'}
      </AppArticle>
      <p className="text-[20px] font-[500]">Why Is This Useful?</p>
      <AppArticle isFirst>
        {
          'Subsequent posts will go into more detail on how blind evaluation is used in SNARKs. The rough intuition is that the verifier has a "correct" polynomial in mind and wishes to check that the prover knows it. Making the prover blindly evaluate their polynomial at a random point not known to them ensures the prover will give the wrong answer with high probability if their polynomial is not the correct one. This, in turn, relies on the Schwartz-Zippel Lemma, which states that "different polynomials are different at most points".'
        }
      </AppArticle>
      <a href="#snark2_1_item">
        <AppArticle isMath id="snark2_1">
          {
            "[1]The main reason we don't want to send $P$ to Bob is simply that it is large, $d$ + 1 elements, where, for example, $d \\approx 2000000$ in the current Zcash protocol; this ultimately has to do with the 'Succinct' part of SNARKs. It is true that the sequence of hidings Bob is sending to Alice above is just as long, but it will turn out this sequence can be 'hard-coded' in the parameters of the system, whereas Alice's message will be different for each SNARK proof."
          }
        </AppArticle>
      </a>
      <a href="#snark2_2_item">
        <AppArticle isMath id="snark2_2">
          {
            '[2]Actually, the hiding property only guarantees $s$ not being recoverable from $E(s)$, but here we want to claim it is also not recoverable from the sequence $E(s),...,E(s^d)$ that potentially contains more information about $s$. This follows from the $d$-power Diffie-Hellman assumption, which is needed in several SNARK security proofs.'
          }
        </AppArticle>
      </a>
    </div>
  );
}
