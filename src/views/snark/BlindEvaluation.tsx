/* eslint-disable quotes */
/* eslint-disable react/no-unescaped-entities */
import { Typography } from '@mui/material';
import { ArticleLI, ArticleTitle, ArticleUL } from 'src/components/box/ArticleBox';

export default function BlindEvaluation() {
  return (
    <div className="mt-[1rem]">
      <ArticleTitle>
        In this post, we introduce the concept of "blind evaluation" of a polynomial, which is
        crucial for SNARK (Succinct Non-Interactive Argument of Knowledge) constructions. Before
        diving into blind evaluation, let's recall some basics of polynomials and homomorphic hiding
        (HH), which was discussed in Part 1.
      </ArticleTitle>
      <Typography variant="h4">Polynomials and Linear Combinations</Typography>
      <ArticleTitle isMath isFirst>
        {
          'A polynomial $P(X)$ of degree $d$ over a finite field $\\mathbb{F}_p$ (where $\\mathbb{F}_p$ consist of the elements {0,...,p - 1}) and arithmetic is done module $p$ is expressed as:'
        }
      </ArticleTitle>
      <ArticleTitle isMath className="text-center">
        {'$P(X) = a_0 + a_1X + a_2X^2 + ... + a_dX^d$'}
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Where $a_0,...,a_d \\in \\mathbb{F}_p$ are coefficients. To evaluate the polynomial at a special point $s \\in \\mathbb{F}_p$, we substitute $s$ for $X$, obtaining:'
        }
      </ArticleTitle>
      <ArticleTitle isMath className="text-center">
        {'$P(s) = a_0 + a_1s + a_2s^2 + ... + a_ds^d$'}
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Thus, $P(s)$ is a linear combination of the terms $1, s, s^2,...,s^d$, where the weights are the coefficients $a_0,...,a_d$.'
        }
      </ArticleTitle>
      <Typography variant="h4">Homomorphic Hiding (HH)</Typography>
      <ArticleTitle isFirst isMath>
        {
          'Homomorphic Hiding $E(x)$ (introduced in Part I) is defined as $E(x) = g^x$, where $g$ is a generator of a cyclic group with a hard discrete logarithm problem. This HH schema "supports addition," meaning we can compute $E(x + y)$ from $E(x)$ and $E(y)$. Additionally, HH supports linear combinations, so given $a, b, E(x), E(y)$, we can compute $E(ax + by)$ as:'
        }
      </ArticleTitle>
      <ArticleTitle isMath className="text-center">
        {'$E(ax + by) = g^{ax + by} = g^{ax}g^{by} = (g^x)^a(g^y)^b = E(x)^aE(y)^b$'}
      </ArticleTitle>
      <ArticleTitle>
        {
          'This property enables us to perform operations on encrypted values without revealing the underlying data.'
        }
      </ArticleTitle>
      <Typography variant="h4">Blind Evaluation of a Polynomial</Typography>
      <ArticleTitle isMath isFirst>
        {
          'Suppose Alice has a polynomial $P$ of degree $d$, and Bob has a secret point $s \\in \\mathbb{F}_p$, that he chose randomly. Bob want to compute the HH of $P(s)$, denote $E(P(s))$, but without revealing $s$ to Alice and without learning the full polynomial $P$. this setup leads to the bind evaluation problem.'
        }
      </ArticleTitle>
      <ArticleTitle>Two simple but unsuitable options are:</ArticleTitle>
      <ArticleTitle isMath>
        {'1. Alice sends $P$ to Bob, who computes $E(P(s))$ himself.'}
      </ArticleTitle>
      <ArticleTitle isMath>
        {'2. Bob sends $s$ to Alice, who computes $E(P(s))$ and returns it.'}
      </ArticleTitle>
      <ArticleTitle>However, in blind evaluation:</ArticleTitle>
      <ArticleUL className="list-disc">
        <ArticleLI isMath>{'Bob must not reveal $s$ to Alice.'}</ArticleLI>
        <ArticleLI isMath>{'Alice must not reveal $P$ to Bob.'}</ArticleLI>
      </ArticleUL>
      <ArticleTitle>Using HH, we can solve this problem efficiently:</ArticleTitle>
      <ArticleTitle isMath>
        1. <span className="font-[500]">Step 1:</span>{' '}
        {'Bob sends Alice the hiding $E(1), E(s),...,E(s^d)$.'}
      </ArticleTitle>
      <ArticleTitle isMath>
        2. <span className="font-[500]">Step 2:</span>{' '}
        {'Alice computes $E(P(s))$ using these values and sends $E(P(s))$ back to Bob.'}
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "Since HH supports linear combinations, Alice can compute $E(P(s))$ as a linear combination of the values Bob sent her without learning $s$. Similarly, Bob only receives $E(P(s))$, not the actual polynomial $P$, thus presenting Alice's privacy."
        }
      </ArticleTitle>
      <Typography variant="h4">Why Blind Evaluation is Useful</Typography>
      <ArticleTitle isFirst>
        Blind evaluation plays a key role in SNARKs, where a verifier wants to check that a prover
        knows a certain polynomial. By having the prover evaluate their polynomial at a random,
        secret point chosen by the verifier, the protocol ensures the prover will output incorrect
        results with high probability if their polynomial is wrong. This relies on the{' '}
        <span className="font-[500]">Schwartz-Zippel Lemma</span>, which states that two different
        polynomials agree at only a few points.
      </ArticleTitle>
      <Typography variant="h4">Conclusion</Typography>
      <ArticleTitle isFirst>
        Blind evaluation allows for secure polynomial evaluation without revealing sensitive
        information. It's a fundamental technique in zk-SNARKs, ensuring privacy while maintaining
        the integrity of the verification process. Future posts will delve deeper into its role
        within SNARK protocols.
      </ArticleTitle>
    </div>
  );
}
