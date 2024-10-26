'use client';

/* eslint-disable quotes */
import { Typography } from '@mui/material';
import { ArticleLI, ArticleTitle, ArticleUL } from 'src/components/box/ArticleBox';

export default function MakeBlindEvaluation() {
  return (
    <div className="mt-[1rem]">
      <ArticleTitle>
        {
          "In this part, we build on Part 2 and 3 to develop a protocol for verifiable blind evaluation of polynomials, which we will define shortly. In Part 4 we'll start to see how such a protocol can be used for constructing SNARKs, so bear with me a little bit longer for the connection to SNARKs :)."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Suppose, as in Part 2, that Alice has a polynomial $P$ of degree $d$ and Bob has a point $s \\in \\mathbb{F}_p$ that he chose randomly. We want to construct a protocol that allows Bob to learn $E(P(s))$,i.e., the hiding of $P$ evaluated at $s$, with two additional properties:'
        }
      </ArticleTitle>
      <ArticleUL className="list-disc">
        <ArticleLI isMath>
          <span className="font-[500]">Blindness:</span>
          {' Alice will not learn $s$ (and Bob will not learn $P$).'}
        </ArticleLI>
        <ArticleLI isMath>
          <span className="font-[500]">Verifiability:</span>
          {
            ' The probability that Alice sends a value not of the form $E(P(s))$ for $P$ of degree $d$ that is known to her, but Bob still accepts, is negligible.'
          }
        </ArticleLI>
      </ArticleUL>
      <ArticleTitle>
        {
          'This is what we call verifiable blind evaluation of a polynomial. The protocol in Part 2 gave us the first item but not the second. To get verifiability, we need an extended version of the Knowledge of Coefficient Assumption (KCA) that was presented in Part 3.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'The verifiability and blindness properties are useful together because they make Alice decide what polynomial $P$ she will use without seeing $s$.'
        }
        <a href="#snark4_1">[1]</a>
        {
          'This, in a sense, commits Alice to an "answer polynomial" without seeing the "challenge point" $s$. This intuition will become clearer in the next parts of the series.'
        }
      </ArticleTitle>
      <Typography variant="h4">An Extended KCA</Typography>
      <ArticleTitle isMath isFirst>
        {
          "The KCA as we defined it in Part 3 essentially said something like this: If Bob gives Alice some $\\alpha$-pair $(a,b = \\alpha \\cdot a)$ and then Alice generates another $\\alpha$-pair $(a',b')$, then she knows $c$ such that $a'=c \\cdot a$. In other words, Alice knows the relation between $a'$ and $a$."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "Now, suppose that instead of one, Bob sends Alice several $\\alpha$-pair $(a_1, b_1),...,(a_d, b_d)$ (for the same \\alpha); and that again, after receiving these pairs, Alice is challenged to generate some other $\\alpha$-pair $(a^{'}, b^{'})$. Recall that the main point is that Alice must do so although she does not know $\\alpha$."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "As we saw in Part 3, a natural way for Alice to generate such an $\\alpha$-pair, would be to take one of the pairs $(a_i,b_i)$ she received from Bob, and multiply both elements by some $c \\in \\mathbb{F}^*_p$; if $(a_i,b_i)$ was an $\\alpha$-pair, then $(c \\cdot a_i,c \\cdot b_i)$ will be one too. But can Alice generate $\\alpha$-pairs in more ways now that she's received multiple $\\alpha$-pairs? Perhaps using several of the received $\\alpha$-pairs simultaneously to get a new one?"
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "The answer is yes: For example, Alice can choose two values $c_1,c_2 \\in \\mathbb{F}_p$ and compute the pair $(a',b')=(c_1 \\cdot a_1 + c_2 \\cdot a_2, c_1 \\cdot b_1 + c_2 \\cdot b_2)$. An easy computation shows that, as long as $a'$ is non-zero, this is also an $\\alpha$-pair:"
        }
      </ArticleTitle>
      <ArticleTitle isMath className="text-center">
        {
          "$b' = c_1 \\cdot b_1 + c_2 \\cdot b_2 = c_1 \\alpha \\cdot a_1 + c_2 \\alpha \\cdot a_2 = \\alpha (c_1 \\cdot a_1 + c_2 \\cdot a_2) = \\alpha \\cdot a'$."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "More generally, Alice can take any linear combination of the given $d$ pairs - that is choose any $c_1,\\ldots,c_d \\in \\mathbb{F}_p$ and define $(a',b')=(\\sum_{i=1}^d c_i a_i, \\sum_{i=1}^d c_ib_i)$."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "Note that if Alice uses this strategy to generate her $\\alpha$-pair, she will know some linear relation between $a^{'}$ and $a_1,...,a_d$; that is, she knows $c_1,...,c_d$ such that $a^{'} = \\sum_{i=1}^d c_i \\cdot a_i$."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "The extended KCA states, essentially, that this is the only way Alice can generate an $\\alpha$-pair;  that is, whenever she succeeds, she will know such a linear relation between $a^{'}$ and $a_1,...,a_d$. More formally, suppose that $G$ is a group of size $p$ with generator $g$, written additively as in Part 3. The $d$-power Knowledge of Coefficient Assumption ($d$-KCA) "
        }
        <a href="#snark4_2">[2]</a>
        {' in $G$ is as follows:'}
      </ArticleTitle>
      <ArticleTitle isMath>
        <span className="font-[500]">d-KCA:</span>
        {
          " Suppose Bob chooses random $\\alpha \\in \\mathbb{F}_p^*$ and $s \\in \\mathbb{F}_p$, and sends to Alice the $\\alpha$-pairs $(g,\\alpha \\cdot g)$, $(s \\cdot g,\\alpha s \\cdot g)$,$\\ldots$, $(s^d \\cdot g,\\alpha s^d \\cdot g)$. Suppose that Alice then outputs another $\\alpha$-pair $(a',b')$. Then, except with negligible probability, Alice knows $c_0,\\ldots,c_d \\in \\mathbb{F}_p$ such that $\\sum_{i=0}^d c_i s^i \\cdot g = a'$."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Note that in the $d$-KCA Bob does not send an arbitrary set of $\\alpha$-pairs, but one with a certain "polynomial structure". This will be useful in the protocol below.'
        }
      </ArticleTitle>
      <Typography variant="h4">The Verifiable Blind Evaluation Protocol</Typography>
      <ArticleTitle isMath isFirst>
        {
          'Assume that our hiding homomorphism (HH) is the mapping $E(x) = x \\cdot g$ for a generator $g$ of $G$ as above.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {'For simplicity, we present the protocol for this particular $E$.'}
      </ArticleTitle>
      <ArticleUL className="list-decimal">
        <ArticleLI isMath className="ml-[2rem]">
          {
            'Bob chooses a random $\\alpha \\in \\mathbb{F}_p^*$, and sends to Alice the hidings $g,s \\cdot g,\\ldots,s^d \\cdot g$ (of $1,s,\\ldots,s^d$) and also the hidings $\\alpha \\cdot g$, $\\alpha s \\cdot g$,$\\ldots,\\alpha s^d \\cdot g$ (of $\\alpha, \\alpha s,\\ldots, \\alpha s^d$).'
          }
        </ArticleLI>
        <ArticleLI isMath className="ml-[2rem]">
          {
            'Alice computes $a = P(s)g$ and $b = \\alpha P(s)g$ using the elements sent in the first step, and sends both to Bob.'
          }
        </ArticleLI>
        <ArticleLI isMath className="ml-[2rem]">
          {'Bob checks that $b = \\alpha a$, and accepts if and only if this equality holds.'}
        </ArticleLI>
      </ArticleUL>
      <ArticleTitle isMath>
        {
          "First, note that given the coefficients of $P,P(s) g$  is a linear combination of $g, sg,...,s^d g$; and $\\alpha P(s) g$ is a linear combination of $\\alpha g, \\alpha s g,...,\\alpha s^dg$. Thus, similarly to the protocol of Part II, Alice can indeed compute these values from Bob's messages for a polynomial $P$ that she knows."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Second, by the $d$-KCA if Alice sends $a, b$ such that $b = \\alpha a$  then almost surely she knows $c_0,...,c_d \\in \\mathbb{F}_p$ such that $a = \\sum_{i=0}^d c_is^ig$. In that case, $a = P(s) g$ for the polynomial $P(X) = \\sum_{i=0}^d c_i X^i$ known to Alice. In other words, the probability that Bob accepts in Step 3 while at the same time Alice does not know such a $P$ is negligible.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "To summarize, using the $d$-KCA we've developed a protocol for verifiable blind evaluation of polynomials. In the next posts, we will see how this building block comes to play in SNARK constructions."
        }
      </ArticleTitle>
      <ArticleTitle id="snark4_1" isMath>
        {
          '[1] In the fully formal proof, things are somewhat more subtle, as Alice does see some information about $s$ before deciding on her $P$-for example, the hiding of $s,...,s^d$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath id="snark4_2">
        {'[2]The d-KCA was introduced in a '}
        <a
          href="http://www0.cs.ucl.ac.uk/staff/J.Groth/ShortNIZK.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-[500] underline"
        >
          paper
        </a>
        {' of Jens Groth.'}
      </ArticleTitle>
    </div>
  );
}
