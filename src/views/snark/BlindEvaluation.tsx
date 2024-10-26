'use client';

/* eslint-disable quotes */
/* eslint-disable react/no-unescaped-entities */
import { Typography } from '@mui/material';
import { ArticleLI, ArticleTitle, ArticleUL } from 'src/components/box/ArticleBox';

export default function BlindEvaluation() {
  return (
    <div className="mt-[1rem]">
      <ArticleTitle>
        {
          'In this post, we recall the notion of a polynomial and explain the concept of "blind evaluation" of a polynomial, and how it is implemented using Homomorphic Hiding (HH). (See Part 1 for an explanation of HH.) In future posts, we will see that blind evaluation is a central tool in SNARK constructions.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'We denote by $\\mathbb{F}_p$ the field of size $p$; that is, the element of $\\mathbb{F}_p$ are {0,..., $p$ - 1}, and addition and multiplication are done mod $p$, as explained in Part 1.'
        }
      </ArticleTitle>
      <Typography variant="h4">Polynomials and Linear Combinations</Typography>
      <ArticleTitle isFirst isMath>
        {
          'Recall that a polynomial $P$ of degree $d$ over $\\mathbb{F}_p$ is an expression of the form'
        }
      </ArticleTitle>
      <ArticleTitle isMath className="text-center">
        {'$P(X) = a_0 + a_1 \\cdot X + a_2 \\cdot X^2 + \\ldots + a_d \\cdot X^d$.'}
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'We can evaluate $P$ at a point $s \\in \\mathbb{F}_p$ by substituting $s$ for $X$ and computing the resultant sum'
        }
      </ArticleTitle>
      <ArticleTitle isMath className="text-center">
        {'$P(s) = a_0 + a_1 \\cdot s + a_2 \\cdot s^2 + \\ldots + a_d \\cdot s^d$'}
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'For someone who knows $P$, the value $P(s)$ is a linear combination of the values 1, $s$,...,$s^d$, where linear combination just means "weighted sum"; in the case of $P(s)$, the "weights" are $a_0,...,a_d$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'In the last post, we saw the HH $E$ defined by $E(x) = g^x$, where $g$ was a generator of a group with a hard discrete log problem. We mentioned that this HH “supports addition” in the sense that $E(x + y)$ can be computed from $E(x)$ and $E(y)$. We note here that it also "supports linear combinations", meaning that, given $a, b, E(x), E(y)$, we can compute $E(ax + by)$. This is simply because'
        }
      </ArticleTitle>
      <ArticleTitle isMath className="text-center">
        {
          '$E(ax+by)=g^{ax+by}=g^{ax} \\cdot g^{by} = (g^x)^a \\cdot (g^y)^b = E(x)^a \\cdot E(y)^b$'
        }
      </ArticleTitle>
      <Typography variant="h4">Blind Evaluation of a Polynomial</Typography>
      <ArticleTitle isMath isFirst>
        {
          'Suppose Alice has a polynomial $P$ of degree $d$, and Bob has a point $s \\in \\mathbb{F}_p$ that he chose randomly. Bob wishes to learn $E(P(s))$,i.e., the HH of the evaluation of $P$ at $s$. Two simple ways to do this are:'
        }
      </ArticleTitle>
      <ArticleUL className="list-decimal">
        <ArticleLI isMath className="ml-[2rem]">
          {'Alice sends $P$ to Bob, and he computes $E(P(s))$ by himself.'}
        </ArticleLI>
        <ArticleLI isMath className="ml-[2rem]">
          {'Bob sends $s$ to Alice; she computes $E(P(s))$ and sends it to Bob.'}
        </ArticleLI>
      </ArticleUL>
      <ArticleTitle isMath>
        {
          "However, in the blind evaluation problem, we want Bob to learn $E(P(s))$ without learning $P$, which precludes the first option; and, most importantly, we don't want Alice to learn $s$, which rules out the second"
        }
        <a href="#snark2_1" className="cursor-pointer">
          [1].
        </a>
      </ArticleTitle>
      <ArticleTitle>Using HH, we can perform blind evaluation as follows:</ArticleTitle>
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
      <ArticleTitle isMath>
        {'Note that, as only hidings were sent, neither Alice learned $s$ '}
        <a href="#snark2_2" className="cursor-pointer">
          [2]
        </a>
        {', nor did Bob learn $P$.'}
      </ArticleTitle>
      <Typography variant="h4">Why Is This Useful?</Typography>
      <ArticleTitle isFirst>
        {
          'Subsequent posts will go into more detail on how blind evaluation is used in SNARKs. The rough intuition is that the verifier has a “correct” polynomial in mind and wishes to check that the prover knows it. Making the prover blindly evaluate their polynomial at a random point not known to them ensures the prover will give the wrong answer with high probability if their polynomial is not the correct one. This, in turn, relies on the Schwartz-Zippel Lemma, which states that “different polynomials are different at most points.”'
        }
      </ArticleTitle>
      <ArticleTitle isMath id="snark2_1">
        {
          "[1]The main reason we don't want to send $P$ to Bob is simply that it is large, $d$ + 1 elements, where, for example, $d \\approx 2000000$ in the current Zcash protocol; this ultimately has to do with the 'Succinct' part of SNARKs. It is true that the sequence of hidings Bob is sending to Alice above is just as long, but it will turn out this sequence can be 'hard-coded' in the parameters of the system, whereas Alice's message will be different for each SNARK proof."
        }
      </ArticleTitle>
      <ArticleTitle isMath id="snark2_2">
        {
          '[2]Actually, the hiding property only guarantees $s$ not being recoverable from $E(s)$, but here we want to claim it is also not recoverable from the sequence $E(s),...,E(s^d)$ that potentially contains more information about $s$. This follows from the $d$-power Diffie-Hellman assumption, which is needed in several SNARK security proofs.'
        }
      </ArticleTitle>
    </div>
  );
}
