/* eslint-disable quotes */
/* eslint-disable react/no-unescaped-entities */
import { Typography } from '@mui/material';
import ArticleBox from 'src/components/box/ArticleBox';

export default function HomomorphicHidings() {
  return (
    <div className="mt-[1rem]">
      <ArticleBox>
        Constructions of zk-SNARKs involve a careful combination of several ingredients; fully
        understanding how these ingredients all work together can take a while.
      </ArticleBox>
      <ArticleBox>
        Among these components, <span className="font-[500]">Homomorphic Hiding (HH)</span> plays a
        particularly prominent role. In this article, we will explain what an HH is, why it's
        useful, and how it's constructed.
      </ArticleBox>
      <Typography variant="h4">Homomorphic Hiding (HH)</Typography>
      <ArticleBox isMath isFirst>
        An HH, denoted as {'$E(x)$'}, is a function applied to a number x x that satisfies the
        following properties:
      </ArticleBox>
      <ArticleBox mode="div">
        <ArticleBox isMath>
          1. For most values of x, given {'$E(x)$'}, it is difficult to recover x.
        </ArticleBox>
        <ArticleBox isMath={true}>
          2. Different inputs lead to different outputs—so if {'$x \\neq y$'}, then{' '}
          {'$ E(x) \\neq E(y) $'}
        </ArticleBox>
        <ArticleBox isMath>
          3. Given {'$E(x)$ and $E(y)$'}, one can generate the HH of arithmetic expressions
          involving {'$x$ and $y$'}. For instance, it is possible to compute{' '}
          {'$E(x + y)$ from $E(x)$ and $E(y)$'}
        </ArticleBox>
      </ArticleBox>
      <Typography variant="h4">Example of HH in Zero-Knowledge Proofs</Typography>
      <ArticleBox isMath isFirst>
        {
          'To illustrate why HH is useful for zero-knowledge proofs, consider a simple example. Alice wants to prove to Bob that she knows numbers $x$ and $y$ such as $x + y = 7$. While this is a basic example, it helps explain the concept.'
        }
      </ArticleBox>
      <ArticleBox mode="div">
        <ArticleBox isMath>1. Alice send {'$E(x)$ and $E(y)$'} to Bob.</ArticleBox>
        <ArticleBox isMath>
          2. Using the properties of HH, Bob computes {'$E(x + y)$'} from these values.
        </ArticleBox>
        <ArticleBox isMath>
          3. Bob also computes {'$E(7)$'} and checks whether {'$E(x + y) = E(7)$'}. He accepts
          Alice's proof only if this condition holds.
        </ArticleBox>
      </ArticleBox>
      <ArticleBox isMath>
        Because different inputs lead to distinct outputs under HH, Bob can trust the proof only if
        Alice sent the correct hidings of {'$x$ and $y$ such as $x + y = 7$'}. Importantly, Bob
        doesn’t learn the values of {'$x$ and $y$'}; he only sees their encrypted forms.
      </ArticleBox>
      <Typography variant="h4">Constructing Homomorphic Hiding</Typography>
      <ArticleBox isFirst>
        To construct an HH, we look at finite groups instead of regular integers. We define
        arithmetic using modular operations.
      </ArticleBox>
      <ArticleBox isMath>
        {
          'Let $n$ be an integer, and consider the operation $A$ mod $n$, which gives the remainder when $A$ is divided by $n$. For example, 9 mod 7 = 2 and 13 mod 12 = 1. We use this modular operation to define addition on numbers in the set {0,..., n - 1}. This is called the group $\\mathbb{Z}_n$, where addition is done modulo $n$.'
        }
      </ArticleBox>
      <ArticleBox isMath>
        {
          'For the prime $p$, we also define multiplication modulo $p$ over set {0,..., p - 1}, forming the group $\\mathbb{Z}^{*}_p$. In this group, the multiplication of two numbers is followed by a modulo $p$ operation. For example 2 x 4 = 1 mod 7.'
        }
      </ArticleBox>
      <ArticleBox isMath className="text-[20px] font-[700]">
        {'Key Properties of $\\mathbb{Z}^{*}_p$'}
      </ArticleBox>
      <ArticleBox isFirst isMath>
        1. <span className="font-[500]">cyclic Group: </span>{' '}
        {
          'There exists a generator $g$ such that every element of $\\mathbb{Z}^{*}_p$ can be written as $g^a$ for some $a$ in {0,...,p - 2}, with $g^0 = 1$.'
        }
      </ArticleBox>
      <ArticleBox isMath>
        2. <span className="font-[500]">Discrete Logarithm Problem: </span>{' '}
        {'It is computationally difficult to find $a$ given $g^a = h$ mod $p$ for a large $p$.'}
      </ArticleBox>
      <ArticleBox isMath>
        3. <span className="font-[500]">Homomorphic Property</span>{' '}
        {'For $a, b \\in {0,..., p - 2}$, we have $g^ag^b = g^{a + b\\: mod\\: p - 1}$.'}
      </ArticleBox>
      <Typography variant="h4">Constructing an HH That Supports Addition</Typography>
      <ArticleBox isFirst isMath>
        {
          'Now, we define an HH that allows us to compute $E(x + y)$ from $E(x)$ and E(y). Assume the input $x$ comes from $\\mathbb{Z}_{p - 1}$, so it is in the range {0,...,p - 2}. We define $E(x) = g^x$ for each such $x$, and claim that $E$ is an HH:'
        }
      </ArticleBox>
      <ArticleBox isMath>
        1. <span className="font-[500]">Uniqueness:</span>{' '}
        {"Different $x^{'}$ in $\\mathbb{Z}_{p - 1}$ are mapped to distinct outputs."}
      </ArticleBox>
      <ArticleBox isMath>
        2. <span className="font-[500]">Hiding:</span>{' '}
        {'Given $E(x) = g^x$, it is hard to recover $x$'}
      </ArticleBox>
      <ArticleBox isMath>
        3. <span className="font-[500]">Addition:</span>{' '}
        {'Given $E(x)$ and $E(y)$, we can compute $E(x + y)$ as:'}
      </ArticleBox>
      <ArticleBox isMath className="text-center">
        {'$E(x + y) = g^{x + y \\: mod \\: p - 1} = g^xg^y = E(x)E(y)$'}
      </ArticleBox>
      <ArticleBox>
        This construction provides a homomorphic hiding that supports addition, a crucial component
        in zk-SNARKs and other cryptographic protocols.
      </ArticleBox>
    </div>
  );
}
