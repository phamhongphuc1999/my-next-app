/* eslint-disable quotes */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { ArticleLI, ArticleTitle, ArticleUL } from 'src/components/box/ArticleBox';

export default function HomomorphicHidings() {
  return (
    <div className="mt-[1rem]">
      <ArticleTitle>
        {
          'Constructions of zk-SNARKs involve a careful combination of several ingredients; fully understanding how these ingredients all work together can take a while.'
        }
      </ArticleTitle>
      <ArticleTitle>
        {
          'If I had to choose one ingredient whose role is most prominent, it would be what I will call here Homomorphic Hiding (HH)'
        }
        <a href="#snark1_1">[1]</a>
        {
          '. In this post we explain what an HH is, and then give an example of why it is useful and how it is constructed.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {'An HH $E(x)$ of a number $x$ is a function satisfying the following properties:'}
      </ArticleTitle>
      <ArticleUL className="list-disc">
        <ArticleLI isMath>{"For most $x$'s, given $E(x)$ it is hard to find $x$."}</ArticleLI>
        <ArticleLI isMath>
          {'Different inputs lead to different outputs - so if $x \\neq y$, then $E(x)\\neq E(y)$.'}
        </ArticleLI>
        <ArticleLI isMath>
          {
            'If someone knows $E(x)$ and $E(y)$, they can generate the HH of arithmetic expressions in $x$ and $y$. For example, they can compute $E(x+y)$ from $E(x)$ and $E(y)$.'
          }
        </ArticleLI>
      </ArticleUL>
      <ArticleTitle isMath>
        {
          "Here's a toy example of why HH is useful for Zero-Knowledge proofs: Suppose Alice wants to prove to Bob she knows numbers $x,y$ such that $x+y=7$ (Of course, it's not too exciting knowing such $x,y$, but this is a good example to explain the concept with)."
        }
      </ArticleTitle>
      <ArticleUL className="list-disc">
        <ArticleLI isMath>{'Alice sends $E(x)$ and $E(y)$ to Bob.'}</ArticleLI>
        <ArticleLI isMath>
          {'Bob computes $E(x+y)$ from these values(which he is able to do since $E$ is an HH).'}
        </ArticleLI>
        <ArticleLI isMath>
          {
            "Bob also computes $E(7)$, and now checks whether $E(x+y) = E(7)$. He accepts Alice's proof only if equality holds."
          }
        </ArticleLI>
      </ArticleUL>
      <ArticleTitle isMath>
        {
          'As different inputs are mapped by $E$ to different hidings, Bob indeed accepts the proof only if Alice sent hidings of $x, y$ such as $x + y = 7$. On the other hand, Bob does not learn $x$ and $y$, as he just has access to their hidings.'
        }
        <a href="#snark1_2">[2]</a>
      </ArticleTitle>
      <ArticleTitle>
        {
          "Now let's see an example of how such hidings are constructed. We actually cannot construct them for regular integers with regular addition, but need to look at finite groups:"
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Let $n$ be some integer. When we write $A$ mod $n$ for an integer $A$, we mean taking the remainder of $A$ after dividing by $n$. For example, 9 mod 7 = 2 and 13 mod 12 = 1. We can use the mod $n$ operation to define an addition operation on the numbers {0,...,$n$ - 1}. We do regular addition but then apply (mod $n$) on the result to get back a number in the range {0,...,$n$ - 1}. We sometimes write (mod $n$) on the right to clarify we are using this type of addition. For example, 2 + 3 = 1 (mod 4). We call the set of elements {0,...,$n$ - 1} together with this addition operation the group $\\mathbb{Z}_n$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'For a prime $p$, we can use the mod $p$ operation to also define a multiplication operation over the numbers {1,...,$p$ - 1} in a way that the multiplication result is also always in the set {1,...,$p$ - 1}- by performing regular multiplication of integers, and then taking the result mod $p$'
        }
        <a href="#snark1_3">[3]</a>
        {'. For example, $2 \\cdot 4 = 1(mod 7)$.'}
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'This set of elements together with this operation is referred to as the group $\\mathbb{Z}_p^* \\mathbb{Z}_p^*$ has the following useful properties:'
        }
      </ArticleTitle>
      <ArticleUL className="list-disc">
        <ArticleLI isMath>
          {
            'It is a cyclic group; which means that there is some element $g$ in $\\mathbb{Z}_p^*$ called a generator such that all elements of $\\mathbb{Z}_p^*$ can be written as $g^a$ for some $a$ in {0,...,$p$ - 2}, where we define $g^0 = 1$.'
          }
        </ArticleLI>
        <ArticleLI isMath>
          {
            'The discrete logarithm problem is believed to be hard in $\\mathbb{Z}_p^*$. This means that, when $p$ is large, given an element $h$ in $\\mathbb{Z}_p^*$ it is difficult to find the integer $a$ in {0,...,$p$-2} such that $g^a = h$ (mod $p$).'
          }
        </ArticleLI>
        <ArticleLI isMath>
          {
            'As "exponents add up when elements are multiplied", we have for $a, b$ in {0,...,$p$ - 2},$g^ag^b = g^{a + b \\: mod \\: p - 1}$'
          }
        </ArticleLI>
      </ArticleUL>
      <ArticleTitle isMath>
        {
          "Using these properties, we now construct an HH that 'supports addition' - meaning that $E(x + y)$ is computable from $E(x)$ and $E(y)$. We assume the input $x$ of $E$ is from $\\mathbb{Z}_{p - 1}$, so it is in the range {0,...,$p - 2$}. We define $E(x) = g^x$ for each such $x$, and claim that $E$ is an HH: The first property implies that different x's in $\\mathbb{Z}_{p - 1}$ are mapped to different outputs. The second property implies that given $E(x) = g^x$ it is hard to find $x$. Finally, using the third property, given $E(x)$ and $E(y)$ we can compute $E(x + y)$ as $E(x + y) =$ $g^{x + y \\:mod\\: p - 1} = g^xg^y =$ $E(x)E(y)$."
        }
      </ArticleTitle>
      <ArticleTitle isMath id="snark1_1">
        {
          "[1] Homomorphic hiding is not a term formally used in cryptography and is introduced here for didactic purposes. It is similar to but weaker than the well-known notion of a computationally hiding commitment. The difference is that an HH is a deterministic function of the input, whereas a commitment uses additional randomness. As a consequence, HHs essentially 'hide most $x$'s' whereas commitments 'hide every $x$'."
        }
      </ArticleTitle>
      <ArticleTitle isMath id="snark1_2">
        {
          "[2] Bob does learn some information about $x$ and $y$. For example, he can choose a random $x^{'}$ and check whether $x = x^{'}$ by computing $E(x^{'})$. For this reason, the above protocol is not really a Zero-Knowledge protocol and is only used here for explanatory purposes. In fact, as we shall see in later posts, HH is ultimately used in SNARKs to conceal verifier challenges rather than prover secrets."
        }
      </ArticleTitle>
      <ArticleTitle isMath id="snark1_3">
        {
          '[3] When $p$ is not a prime, it is problematic to define multiplication this way. One issue is that the multiplication result can be zero even when both arguments are not zero. For example, when $p = 4$, we can get 2 * 2 = 0 (mod 4).'
        }
      </ArticleTitle>
    </div>
  );
}
