/* eslint-disable quotes */
import { Typography } from '@mui/material';
import Image from 'next/image';
import Curve1Img from 'public/images/curve1.png';
import Curve2Img from 'public/images/curve2.png';
import { ArticleLI, ArticleTitle, ArticleUL } from 'src/components/box/ArticleBox';

export default function EllipticCurve() {
  return (
    <div className="mt-[1rem]">
      <ArticleTitle>
        {
          "In Part 6, we saw an outline of the Pinocchio zk-SNARK. We were missing two things - an HH that supports both addition and multiplication that is needed for the verifier's checks, and a transition from an interactive protocol to a non-interactive proof system."
        }
      </ArticleTitle>
      <ArticleTitle>
        {
          'In this post we will see that using elliptic curves we can obtain a limited, but sufficient for our purposes, form of HH that supports multiplication. We will then show that this limited HH also suffices to convert our protocol to the desired non-interactive system.'
        }
      </ArticleTitle>
      <ArticleTitle>
        {
          'We begin by introducing elliptic curves and explaining how they give us the necessary HH.'
        }
      </ArticleTitle>
      <Typography variant="h4">Elliptic curves and their pairings</Typography>
      <ArticleTitle isMath isFirst>
        {
          'Assume $p$ is a prime larger that 3, and take some $u, v \\in \\mathbb{F}_b$ such that $4u^3 + 27v^2 \\neq 0$. We look at the equation'
        }
      </ArticleTitle>
      <ArticleTitle isMath>{'$Y^2 = X^3 + u \\cdot X + v$'}</ArticleTitle>
      <ArticleTitle isMath>
        {'An elliptic curve $\\mathcal{C}$ is the set of points $(x, y)$ '}
        <a href="#snark7_1">[1]</a>
        {
          ' that satisfy such an equation. These curves give us an interesting way to construct groups. The group elements will be the points $(x, y) \\in \\mathbb{F}_p^2$ that are on the curve, i.e., that satisfy the equation, together with a special point $\\mathcal{O}$, which for technical reasons is sometimes referred to as the “point at infinity” and serves as the identity element, i.e., the zero of the group.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Now the question is how we add two points $P = (x_1, y_1)$, $Q = (x_2, y_2)$  to get a third. The addition rule is derived from a somewhat abstract object called the divisor class group of the curve. For our purposes, all you have to know about this divisor class group is that it imposes the following constraint on the definition of addition: The sum of points on any line must be zero, i.e., $\\mathcal{O}$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "Let's see how the addition rule is derived from this constraint. Look at a vertical line, defined by an equation of the form $X = c$. Suppose this line intersects the curve at a point $P = (x_1, y_1)$. Because the curve equation is of the form $Y^2 = f(X)$, if $(x_1, y_1)$ is on the curve, so is the point $Q := (x_1, -y_1)$. Moreover, since it's a vertical line and the curve equation is of degree two in $Y$, we can be sure these are the only points where the line and curve intersect."
        }
      </ArticleTitle>
      <Image src={Curve1Img} alt="curve1" className="h-auto w-[50%] md:w-[200px]" />
      <ArticleTitle isFirst isMath>
        {
          'Thus, we must have $P + Q = \\mathcal{O}$, which means $P = -Q$; that is, $Q$ is the inverse of $P$ in the group.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Now let us look at points $P$ and $Q$ that have a different first coordinate — that is, $x_1 \\neq x_2$, and see how to add them. We pass a line through $P$ and $Q$.'
        }
      </ArticleTitle>
      <Image src={Curve2Img} alt="curve2" className="h-auto w-[50%] md:w-[200px]" />
      <ArticleTitle isFirst isMath>
        {
          'Since the curve is defined by a degree-three polynomial in $X$ and already intersects this (non-vertical) line at two points, it is guaranteed to intersect the line at a third point, which we denote $R = (x, y)$, and no other points.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'So we must have $P + Q + R = \\mathcal{O}$, which means $P + Q = -R$; and we know by now that $-R$ is obtained from $R$ by flipping the second coordinate from $y$ to $-y$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Thus, we have derived the addition rule for our group: Given points $P$ and $Q$, pass a line through them, and then take the "mirror" point of the third intersection point of the line as the addition result.'
        }
        <a href="#snark7_2">[2]</a>
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "This group is usually called $\\mathcal{C}(\\mathbb{F}_p)$, as it consists of points on the curve $\\mathcal{C}$ with coordinates in $\\mathbb{F}_p$; but let's denote it by $G_1$ from now on. Assume for simplicity that the number of elements in $G_1$ is a prime number $r$, and is different from $p$. This is often the case, for example in the curve that Zcash is currently using. In this case, any element $g \\in G_1$ different from $\\mathcal{O}$ generates $G_1$."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'The smallest integer $k$ such that $r$ divides $p^k - 1$ is called the embedding degree of the curve. It is conjectured that when $k$ is not too small, say, at least 6, then the discrete logarithm problem in $G_1$, finding $\\alpha$ from $g$ and $\\alpha \\cdot g$ is very hard. (In BN curves'
        }
        <a href="#snark7_3">[3]</a> {' currently used by Zcash, $k = 12$).'}
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'The multiplicative group of $\\mathbb{F}_{p^k}$ contains a subgroup of order $r$ that we denote $G_T$. We can look at curve points with coordinates in $\\mathbb{F}_{p^k}$ and not just in $\\mathbb{F}_p$. Under the same addition rule, these points also form a group together with $\\mathcal{O}$ called $\\mathcal{C}(\\mathbb{F}_{p^k})$. Note that $\\mathcal{C}(\\mathbb{F}_{p^k})$ clearly contains $G_1$. Beside $G_1$, $\\mathcal{C}(\\mathbb{F}_{p^k})$ will contain an additional subgroup $G_2$ of order $r$ (in fact, $r - 1$ additional subgroups of order $r$).'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Fix generators $g \\in G_1$ and $h \\in G_2$. It turns out that there is an efficient map, called the Tate reduced pairing, taking a pair of elements from $G_1$ and $G_2$ into an element of $G_T$, such that'
        }
      </ArticleTitle>
      <ArticleUL className="list-decimal">
        <ArticleLI isMath className="ml-[2rem]">
          {'$\\mathrm{Tate}(g, h) = g$ for a generator $\\mathbf{g}$ of $G_T$ and'}
        </ArticleLI>
        <ArticleLI isMath className="ml-[2rem]">
          {
            'given a pair of elements $a, b \\in \\mathbb{F}_r$, we have $\\mathrm{Tate}(a \\cdot g, b \\cdot h) = \\mathbf{g}^{ab}$.'
          }
        </ArticleLI>
      </ArticleUL>
      <ArticleTitle isMath>
        {
          "Defining $\\mathrm{Tate}$ is a bit beyond the scope of this series and relies on concepts from algebraic geometry, most prominently that of divisors. Here's a sketch of $\\mathrm{Tate}$'s definition:"
        }
        <a href="#snark7_4">[4]</a>
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'For $a \\in \\mathbb{F}_p$, the polynomial $(X - a)^r$ has a zero of multiplicity $r$ at the point $a$, and no other zeroes. For a point $P \\in G_1$, divisors enable us to prove that there exists a function $f_p$ from the curve to $\\mathbb{F}_p$ that also has, in some precise sense, a zero of multiplicity $r$ at $P$ and no other zeroes. Then $\\mathrm{Tate}(P, Q)$ is defined as $f_p(Q)^{(p^k - 1)/r}$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'It may not seem at all clear what this definition has to do with the stated properties, and indeed the proof that $\\mathrm{Tate}$ has these properties is quite complex.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "Defining $E_1(x) := x \\cdot g$, $E_2(x) := x \\cdot h$, $E(x) := x \\cdot \\mathbf{g}$, we get a weak version of an HH that supports both addition and multiplication: $E_1$, $E_2$, $E$ are HHs that support addition, and given the hidings $E_1(x)$, $E_2(y)$, we can compute $E(xy)$. In other words, if we have the 'right' hidings of $x$ and $y$, we can get a (different) hiding of $xy$. But for example, if we had hidings of $x,y,z$, we couldn't get a hiding of $xyz$."
        }
      </ArticleTitle>
      <ArticleTitle>
        {
          "We move on to discussing non-interactive proof systems. We begin by explaining exactly what we mean by 'non-interactive'."
        }
      </ArticleTitle>
      <Typography variant="h4">
        Non-interactive proofs in the common reference string model
      </Typography>
      <ArticleTitle isFirst>
        {
          "The strongest and most intuitive notion of a non-interactive proof is probably the following. In order to prove a certain claim, a prover broadcasts a single message to all parties, with no prior communication of any kind; and anyone reading this message would be convinced of the prover's claim. This can be shown to be impossible in most cases."
        }
        <a href="snark7_5">[5]</a>
      </ArticleTitle>
      <ArticleTitle>
        {
          'A slightly relaxed notion of non-interactive proof is to allow a common reference string (CRS). In the CRS model, before any proofs are constructed, there is a setup phase where a string is constructed according to a certain randomized process and broadcast to all parties. This string is called the CRS and is then used to help construct and verify proofs. The assumption is that the randomness used in the creation of the CRS is not known to any party - as knowledge of this randomness might enable constructing proofs of false claims.'
        }
      </ArticleTitle>
      <ArticleTitle>
        {
          'We will explain how in the CRS model we can convert the verifiable blind evaluation protocol of Part 4 into a non-interactive proof system. As the protocol of Part 6 consisted of a few such subprotocols it can be turned into a non-interactive proof system in a similar way.'
        }
      </ArticleTitle>
      <Typography variant="h4">A non-interactive evaluation protocol</Typography>
      <ArticleTitle isFirst isMath>
        {
          "The non-interactive version of the evaluation protocol essentially consists of publishing Bob's first message as the CRS. Recall that the purpose of the protocol is to obtain the hiding $E(P(s))$ of Alice's polynomial $P$ at a randomly chosen $s \\in \\mathbb{F}_r$."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        <span className="font-[500]">Setup:</span>
        {' Random $\\alpha \\in \\mathbb{F}_r^* \\in \\mathbb{F}_r$, are chosen, and the CRS:'}
      </ArticleTitle>
      <ArticleTitle isMath className="text-center">
        {
          '$(E_1(1)$,$E_1(s)$,$\\ldots$,$E_1(s^d)$,$E_2(\\alpha)$,$E_2(\\alpha s)$,$\\ldots$,$E_2(\\alpha s^d))$ is published.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        <span className="font-[500]">Proof:</span>
        {
          ' Alice computes $E_1(P(s))$ and $b = E_2(\\alpha P(s))$ using the elements of the CRS, and the fact that $E_1$ and $E_2$ support linear combinations.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        <span className="font-[500]">Verification:</span>
        {
          ' Fix the $x,y \\in \\mathbb{F}_r$ such that $a=E_1(x)$ and $b=E_2(y)$. Bob computes $E(\\alpha x)=\\mathrm{Tate}(E_1(x),E_2(\\alpha))$ and $E(y)=\\mathrm{Tate}(E_1(1),E_2(y))$, and checks that they are equal. (If they are equal it implies $\\alpha x =y$).'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'As explained in Part 4, Alice can only construct $a,b$ that will pass the verification check if $a$ is the hiding of $P(s)$ for a polynomial $P$ of degree $d$ known to her. The main difference here is that Bob does not need to know $\\alpha$ for the verification check, as he can use the pairing function to compute $E(\\alpha x)$ only from $E_1(x)$ and $E_2(\\alpha)$. Thus, he does not need to construct and send the first message himself, and this message can simply be fixed in the CRS.'
        }
      </ArticleTitle>
      <ArticleTitle isMath id="#snark7_1">
        {
          "[1]You may ask 'The set of points from where?'. We mean the set of points with coordinates in the algebraic closure of $\\mathbb{F}_p$. Also, the curve has an affine and projective version. When we are referring to the projective version we also include the 'point at infinity' $\\mathcal{O}$ as an element of the curve."
        }
      </ArticleTitle>
      <ArticleTitle isMath id="#snark7_2">
        {
          '[2]We did not address the case of adding $P$ to itself. This is done by using the line that is tangent to the curve at $P$, and taking $R$ to be the second intersection point of this line with the curve.'
        }
      </ArticleTitle>
      <ArticleTitle id="#snark7_3" className="break-words">
        [3]<a href="https://eprint.iacr.org/2005/133.pdf">https://eprint.iacr.org/2005/133.pdf</a>
      </ArticleTitle>
      <ArticleTitle isMath id="#snark7_4">
        {
          '[4]The pairing Zcash actually uses is the optimal Ate pairing, which is based on the Tate reduced pairing, and can be computed more efficiently than $\\mathrm{Tate}$.'
        }
      </ArticleTitle>
      <ArticleTitle id="#snark7_5">
        {
          "[5]In computational complexity theory terms, one can show that only languages in BPP have non-interactive zero-knowledge proofs in this strong sense. The type of claims we need to prove in Zcash transactions, e.g. 'I know a hash preimage of this string', correspond to the complexity class NP which is believed to be much larger than BPP."
        }
      </ArticleTitle>
      <ArticleTitle id="#snark7_6">
        {
          '[6]The images used were taken from the following article and are used under the creative commons license.'
        }
      </ArticleTitle>
    </div>
  );
}
