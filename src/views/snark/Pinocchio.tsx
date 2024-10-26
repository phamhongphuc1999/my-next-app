/* eslint-disable react/no-unescaped-entities */
/* eslint-disable quotes */
import { Typography } from '@mui/material';
import Link from 'next/link';
import { ArticleLI, ArticleTitle, ArticleUL } from 'src/components/box/ArticleBox';

export default function Pinocchio() {
  return (
    <div className="mt-[1rem]">
      <ArticleTitle>
        {
          'In part V, we saw how a statement Alice would like to prove to Bob can be converted into an equivalent form in the "language of polynomials" called a Quadratic Arithmetic Program (QAP).'
        }
      </ArticleTitle>
      <ArticleTitle>
        {
          'In this part, we show how Alice can send a very short proof to Bob showing she has a satisfying assignment to a QAP. We will use the '
        }
        <a
          href="https://eprint.iacr.org/2013/279.pdf"
          target="_blank"
          className="font-[500] underline"
          rel="noreferrer"
        >
          Pinocchio Protocol
        </a>
        {
          ' of Parno, Howell, Gentry, and Raykova. But first, let us recall the definition of a QAP we gave last time:'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'A Quadratic Arithmetic Program $Q$ of degree $d$ and size $m$ consists of polynomials $L_1,...,L_m,R_1,...,R_m,O_1,...,O_m$, and a target polynomial $T$ of degree $d$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'An assignment $(c_1,...,c_m)$ satisfies $Q$ if, defining $L := \\sum_{i=1}^m c_i L_i, R := \\sum_{i=1}^m c_i R_i, O := \\sum_{i=1}^m c_i O_i$, and $P := LR - O$, we have that $T$ divides $P$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'As we saw in Part 4, Alice will typically want to prove she has a satisfying assignment possessing some additional constraints, $c_m = 7$; but we ignore this here for simplicity and show how to just prove knowledge of some satisfying assignment.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'If Alice has a satisfying assignment, it means that, defining $L,R,O,P$ as above, there exists a polynomial $H$ such that $P = HT$. In particular, for any $s \\in \\mathbb{F}_p$ we have $P(s) = H(s)T(s)$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Suppose now that Alice doesn’t have a satisfying assignment, but she still constructs $L,R,O,P$ as above from some unsatisfying assignment $(c_1,...,c_m)$. Then we are guaranteed that $T$ does not divide $P$. This means that for any polynomial $H$ of degree at most $d - 2$, $P$ and $L,R,O,H$ will be different polynomials. Note that $P$ here is of degree at most $2(d - 1)$, $L,R,O$ here are of degree at most $d - 1$, and $H$ here is of degree at most $d - 2$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {'Now we can use the famous '}
        <a
          href="https://en.wikipedia.org/wiki/Schwartz%E2%80%93Zippel_lemma"
          target="_blank"
          className="font-[500] underline"
          rel="noreferrer"
        >
          Schwartz-Zippel Lemma
        </a>
        {
          ', which tells us that two different polynomials of degree at most $2d$ can agree on at most $2d$ points $s \\in \\mathbb{F}_p$. Thus, if $p$ is much larger than $2d$,  the probability that $P(s) = H(s)T(s)$ for a randomly chosen $s \\in \\mathbb{F}_p$ is very small.'
        }
      </ArticleTitle>
      <ArticleTitle>
        {
          'This suggests the following protocol sketch to test whether Alice has a satisfying assignment:'
        }
      </ArticleTitle>
      <ArticleUL className="list-decimal">
        <ArticleLI className="ml-[2rem]" isMath>
          {'Alice chooses polynomials $L,R,O,H$ of degree at most $d$.'}
        </ArticleLI>
        <ArticleLI className="ml-[2rem]" isMath>
          {'Bob chooses a random point $s \\in \\mathbb{F}_p$ and computes $E(T(s))$.'}
        </ArticleLI>
        <ArticleLI className="ml-[2rem]" isMath>
          {
            'Alice sends Bob the hidings of all these polynomials evaluated at $E(L(s)), E(R(s)), E(O(s)), E(H(s))$.'
          }
        </ArticleLI>
        <ArticleLI className="ml-[2rem]" isMath>
          {
            'Bob checks if the desired equation holds at $s$. That is, he checks whether $E(L(s)R(s) - O(s)) = E(T(s)H(s))$.'
          }
        </ArticleLI>
      </ArticleUL>
      <ArticleTitle isMath>
        {
          'Again, the point is that if Alice does not have a satisfying assignment, she will end up using polynomials where the equation does not hold identically and thus does not hold for most choices of $s$. Therefore, Bob will reject with high probability over his choice of $s$ in such a case.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'The question is whether we have the tools to implement this sketch. The most crucial point is that Alice must choose the polynomials she will use, without knowing $s$. But this is exactly the problem we solved in the verifiable blind evaluation protocol developed in Parts 2-4.'
        }
      </ArticleTitle>
      <ArticleTitle>
        {
          'Given that, there are four main points that need to be addressed to turn this sketch into a zk-SNARK. We deal with two of them here, and the other two in the next part.'
        }
      </ArticleTitle>
      <Typography variant="h4">
        Making sure Alice chooses her polynomials according to an assignment
      </Typography>
      <ArticleTitle isMath isFirst>
        {
          "Here is an important point: If Alice doesn't have a satisfying assignment, it doesn't mean she can't find any polynomials $L,R,O,H$ of degree at most $d$ with $LR - O = TH$; it just means she can’t find such polynomials where $L, R,$ and $O$ were 'produced from an assignment', namely, that $L := \\sum_{i=1}^m c_i L_i, R := \\sum_{i=1}^m c_i R_i, O := \\sum_{i=1}^m c_i O_i$ for the same $(c_1,...,c_m)$."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'The protocol of Part IV only guarantees she is using some polynomials $L,R,O$ of the right degree, but not that they were produced from an assignment. This is a point where the formal proof gets a little subtle; here we sketch the solution imprecisely.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {"Let's combine the polynomials $L,R,O$ into one polynomial $F$ as follows:"}
      </ArticleTitle>
      <ArticleTitle isMath className="text-center">
        {'$F = L + X^{d + 1}R + X^{2(d + 1)}O$'}
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'The point of multiplying $R$ by $X^{d + 1}$ and $O$ by $X^{2(d + 1)}$ is that the coefficients of $L,R,O$ "do not mix" in $F$: The coefficients of $1, X,...,X^d$ in $F$ are precisely the coefficients of $L$, the next $d + 1$ coefficients of $X^{d + 1},...,X^{2d + 1}$ are precisely the coefficients of $R$, and the last $d + 1$ coefficients are those of $O$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "Let's combine the polynomials in the QAP definition in a similar way, defining for each $i \\in \\{1,...,m\\}$ a polynomial $F_i$ whose first $d + 1$ coefficients are the coefficients of $L_i$, followed by the coefficients of $R_i$ and then $O_i$. That is, for each $i \\in \\{1,...,m\\}$, we define the polynomial"
        }
      </ArticleTitle>
      <ArticleTitle isMath className="text-center">
        {'$F_i = L_i + X^{d + 1}R_i + X^{2(d + 1)}O_i$'}
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "Note that when we sum two of the $F_i$'s, the $L_i, R_i$ and $O_i$ 'sum separately'. For example, $F_1 + F_2 = (L_1 + L_2) + X^{d+1}(R_1 + R_2) + X^{2(d + 1)}(O_1 + O_2)$."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "More generally, suppose that we had $F = \\sum_{i=1}^m c_i F_i$ for some $(c_1,...,c_m)$. Then we'll also have $L := \\sum_{i=1}^m c_i L_i$, $R := \\sum_{i=1}^m c_i R_i$, $O := \\sum_{i=1}^m c_i O_i$ for the same coefficients $(c_1,...,c_m)$. In other words, if $F$ is a linear combination of the $F_i$'s, it means that $L,R,O$ were indeed produced from an assignment."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "Therefore, Bob will ask Alice to prove to him that $F$ is a linear combination of the $F_i$'s. This is done in a similar way to the protocol for verifiable evaluation:"
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Bob chooses a random $\\beta \\in \\mathbb{F}_p^*$ and sends to Alice the hidings $E(\\beta F_1(s)),...,E(\\beta F_m(s))$. He then asks Alice to send him the element $E(\\beta F(s))$. If she succeeds, an extended version of the '
        }
        <Link href="/snark/chapter3" target="_blank" className="font-[500] underline">
          Knowledge of Coefficient Assumption
        </Link>
        {" implies she knows how to write $F$ as a linear combination of the $F_i$'s"}
      </ArticleTitle>
      <Typography variant="h4">
        Adding the zero-knowledge part - concealing the assignment
      </Typography>
      <ArticleTitle isFirst isMath>
        {
          'In a zk-SNARK, Alice wants to conceal all information about her assignment. However, the hidings $E(L(s))$, $E(R(s))$, $E(O(s))$, $E(H(s))$ do provide some information about the assignment.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "For example, given some other satisfying assignment $(c_1^{'},...,c_m^{'})$, Bob could compute the corresponding $L^{'}, R^{'}, H^{'}$ and hidings $E(L^{'}(s))$, $E(R^{'}(s))$, $E(O^{'}(s))$, $E(H^{'}(s))$. If these come out different from Alice's hidings, he could deduce that $(c_1^{'},...,c_m^{'})$ is not Alice's assignment."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'To avoid such information leakage about her assignment, Alice will conceal her assignment by adding a "random $T$-shift" to each polynomial. That is, she chooses random $\\delta_1, \\delta_2, \\delta_3 \\in \\mathbb{F}_p^*$, and defines $L_z := L + \\delta_1 \\cdot T$, $R_z := R + \\delta_2 \\cdot T$, $O_z := O + \\delta_3 \\cdot T$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "Assume $L, R, O$ were produced from a satisfying assignment; hence, $L \\cdot R - O = T \\cdot H$  for some polynomial $H$. As we've just added a multiple of $T$ everywhere, $T$ also divides $L_z \\cdot R_z - O_z$. Let's do the calculation to see this:"
        }
      </ArticleTitle>
      <ArticleTitle isMath className="text-center">
        {
          '$L_z \\cdot R_z - O_z$ $= (L + \\delta_1 \\cdot T)(R + \\delta_2 \\cdot T) - O - \\delta_3 \\cdot T$ $= (L \\cdot R - O) + L \\cdot \\delta_2 \\cdot T + \\delta_1 \\cdot T \\cdot R + \\delta_1\\delta_2 \\cdot T^2 - \\delta_3 \\cdot T$ $= T \\cdot (H + L \\cdot \\delta_2 + \\delta_1 \\cdot R + \\delta_1\\delta2 \\cdot T - \\delta_3)$'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'thus, defining $H_z = $$H + L \\cdot \\delta_2 + \\delta_1 \\cdot R + \\delta_1\\delta_2 \\cdot - \\delta_3$, we have that $L_z \\cdot R_z - O_z = T \\cdot H_z$. Therefore, if Alice uses the polynomials $L_z$, $R_z$, $O_z$, $H_z$ instead of $L$, $R$, $O$, $H$, Bob will always accept.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'On the other hand, these polynomials evaluated at $s \\in \\mathbb{F}_p$ with $T(s) \\neq 0$ (which is all but $d$ values of $s$), reveal no information about the assignment. For example, as $T(s)$ is non-zero and $\\delta_1$ is random, $\\delta_1 \\cdot T(s)$ is a random value, and therefore $L_z(s) = L(s) + \\delta_1 \\cdot T(s)$ reveals no information about $L(s)$ as it is masked by this random value.'
        }
      </ArticleTitle>
      <Typography variant="h4">What's left for next time?</Typography>
      <ArticleTitle isFirst>
        {
          'We presented a sketch of the Pinocchio Protocol in which Alice can convince Bob she possesses a satisfying assignment for a QAP, without revealing information about that assignment. There are two main issues that still need to be resolved in order to obtain a zk-SNARK:'
        }
      </ArticleTitle>
      <ArticleUL className="list-disc">
        <ArticleLI isMath>
          {
            'In the sketch, Bob needs a homomorphic hiding (HH) that "supports multiplication". For example, he needs to compute $E(H(s) \\cdot T(s))$ from $E(H(s))$ and $E(T(s))$. However, we have not seen so far an example of an HH that enables this. We have only seen an HH that supports addition and linear combinations.'
          }
        </ArticleLI>
        <ArticleLI>
          {
            'Throughout this series, we have discussed interactive protocols between Alice and Bob. Our final goal, though, is to enable Alice to send single-message non-interactive proofs, that are publicly verifiable - meaning that anybody seeing this single message proof will be convinced of its validity, not just Bob (who had prior communication with Alice).'
          }
        </ArticleLI>
      </ArticleUL>
    </div>
  );
}
