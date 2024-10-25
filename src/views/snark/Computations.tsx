/* eslint-disable quotes */
'use client';

import { Typography } from '@mui/material';
import Image from 'next/image';
import { ArticleLI, ArticleTitle, ArticleUL } from 'src/components/box/ArticleBox';
import CircuitImg from 'public/images/CircuitDrawing.png';

export default function Computation() {
  return (
    <div className="mt-[1rem]">
      <ArticleTitle>
        {
          'In the three previous parts, we developed a certain machinery for dealing with polynomials. In this part, we show how to translate statements we would like to prove and verify to the language of polynomials. The idea of using polynomials in this way goes back to the '
        }
        <a
          href="https://www.semanticscholar.org/paper/Algebraic-methods-for-interactive-proof-systems-Lund-Fortnow/99c8148bb179eed21d4177edefa43d34ec536d78?p2df"
          target="_blank"
          rel="noreferrer"
          className="font-[500] underline"
        >
          groundbreaking work
        </a>{' '}
        {' of Lund, Fortnow, Karloff, and Nisan.'}
      </ArticleTitle>
      <ArticleTitle>
        In 2013,{' '}
        <a
          href="https://eprint.iacr.org/2012/215.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-[500] underline"
        >
          another breakthrough work
        </a>
        {
          ' of Gennaro, Gentry, Parno, and Raykova defined an extremely useful translation of computations into polynomials called a Quadratic Arithmetic Program (QAP). QAPs have become the basis for modern zk-SNARK constructions, in particular those used by Zcash.'
        }
      </ArticleTitle>
      <ArticleTitle>
        {
          'In this post we explain the translation into QAPs by example. Even when focusing on a small example rather than the general definition, it is unavoidable that it is a lot to digest at first, so be prepared for a certain mental effort :).'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Suppose Alice wants to prove to Bob she knows $c_1, c_2, c_3 \\in \\mathbb{F}_p$ such that $(c_1c_2)(c_1 + c_3) = 7$. The first step is to present the expression computed from $c_1, c_2, c_3$ as an arithmetic circuit.'
        }
      </ArticleTitle>
      <Typography variant="h4">Arithmetic Circuits</Typography>
      <ArticleTitle isFirst isMath>
        {
          'An arithmetic circuit consists of gates computing arithmetic operations like addition and multiplication, with wires connecting the gates. In our case, the circuit looks like this:'
        }
      </ArticleTitle>
      <Image src={CircuitImg} alt="circuit" className="h-auto w-[80%] md:w-[450px]" />
      <ArticleTitle isFirst>
        {
          'The bottom wires are the input wires, and the top wire is the output wire giving the result of the circuit computation on the inputs.'
        }
      </ArticleTitle>
      <ArticleTitle>
        {
          'As can be seen in the picture, we label the wires and gates of the circuit in a very particular way, needed for the next step of translating the circuit into a QAP:'
        }
      </ArticleTitle>
      <ArticleUL className="list-decimal">
        <ArticleLI isMath className="ml-[2rem]">
          {
            'When the same outgoing wire goes into more than one gate, we still think of it as one wire - like $w_1$ in the example.'
          }
        </ArticleLI>
        <ArticleLI>
          {
            'We assume multiplication gates have exactly two input wires, which we call the left wire and right wire.'
          }
        </ArticleLI>
        <ArticleLI isMath>
          {
            "We don't label the wires going from an addition to a multiplication gate, nor the addition gate itself; we think of the inputs of the addition gate as going directly into the multiplication gate. So, in the example, we think of $w_1$ and $w_3$ as both being right inputs of $g_2$."
          }
        </ArticleLI>
      </ArticleUL>
      <ArticleTitle>
        {
          'A legal assignment for the circuit is an assignment of values to the labeled wires where the output value of each multiplication gate is indeed the product of the corresponding inputs.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'So for our circuit, a legal assignment is of the form $(c_1,...,c_5)$ where $c_4 = c_1c_2$ and $c_5 = c_4(c_1 + c_3)$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'In this terminology, what Alice wants to prove is that she knows a legal assignment $(c_1,...,c_5)$ such that $c_5 = 7$. The next step is to translate this statement into one about polynomials using QAPs.'
        }
      </ArticleTitle>
      <Typography variant="h4">Reduction to a QAP</Typography>
      <ArticleTitle isFirst isMath>
        {
          'We associate each multiplication gate with a field element: $g_1$ will be associated with $1 \\in \\mathbb{F}_p$ and $g_2$ with $2 \\in \\mathbb{F}_p$. We call the points {$1$, $2$} our target points. Now, we need to define a set of "left wire polynomials" $L_1,...,L_5$, "right wire polynomials" $R_1,...,R_5$ and "output wire polynomials" $O_1,...,O_5$.'
        }
      </ArticleTitle>
      <ArticleTitle>
        {
          "The idea for the definition is that the polynomials will usually be zero on the target points, except the ones involved in the target point's corresponding multiplication gate."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Concretely, as $w_1, w_2, w_4$ are, respectively, the left, right, and output wire of $g_1$; we define $L_1 = R_2 = O_4 = 2 - X$, as the polynomial $2 - X$ is one on the point $1$ corresponding to $g_1$ and zero on the point $2$ corresponding to $g_2$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Note that $w_1$ and $w_3$ are both right inputs of $g_2$. Therefore, we define similarly $L_4 = R_1 = R_3 = O_5 = X - 1$, as $X - 1$ is one on the target point 2 corresponding to $g_2$ and zero on the other target point.'
        }
      </ArticleTitle>
      <ArticleTitle>{'We set the rest of the polynomials to be the zero polynomial.'}</ArticleTitle>
      <ArticleTitle isMath>
        {
          'Given fixed values $(c_1,...,c_5)$ we use them as coefficients to define a left, right, and output "sum" polynomials. That is, we define'
        }
      </ArticleTitle>
      <ArticleTitle isMath className="text-center">
        {'$L := \\sum_{i=1}^5 c_i L_i, R := \\sum_{i=1}^5 c_i R_i, O := \\sum_{i=1}^5 c_i O_i,$'}
      </ArticleTitle>
      <ArticleTitle isMath>{'and then we define the polynomial $P := L R - O$.'}</ArticleTitle>
      <ArticleTitle isMath>
        {
          'Now, after all these definitions, the central point is this: $(c_1,...,c_5)$ is a legal assignment to the circuit if and only if $P$ vanishes on all the target points.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "Let's examine this using our example. Suppose we defined $L,R,O,P$ as above given some $c_1,...,c_5$. Let's evaluate all these polynomials at the target point 1:"
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "Out of all the $L_i$'s only $L_i$ is non-zero on 1. So we have $L(1) = c_1 L_1(1) = c_1$. Similarly, we get $R(1) = c_2$ and $O(1) = c_4$."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Therefore, $P(1) = c_1 c_2 - c_4$. A similar calculation shows $P(2) = c_4(c_1 + c_3) - c_5$. In other words, $P$ vanishes on the target points if and only if $(c_1,...,c_5)$ is a legal assignment.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Now, we use the following algebraic fact: For a polynomial $P$ and a point $a \\in \\mathbb{F}_p$, we have $P(a) = 0$ if and only if the polynomial $X - a$ divides $P$. $P = (X - a) H$ for some polynomial $H$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'Defining the target polynomial $T(X) := (X - 1)(X - 2)$, we thus have that $T$ divides $P$ if and only if $(c_1,...,c_5)$ is a legal assignment.'
        }
      </ArticleTitle>
      <ArticleTitle>{'Following the above discussion, we define a QAP as follows:'}</ArticleTitle>
      <ArticleTitle isMath>
        {
          'A Quadratic Arithmetic Program $Q$ of degree $d$ and size $m$ consist of polynomials $L_1,...,L_m,R_1,...,R_m,O_1,...,O_m$ and a target polynomial $T$ of degree $d$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'An assignment $(c_1,...,c_m)$ satisfies $Q$ if, defining $L := \\sum_{i=1}^m c_i L_i, R := \\sum_{i=1}^m c_i R_i, O := \\sum_{i=1}^m c_i O_i$ and $P := LR - O$, we have that $T$ divides $P$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'In this terminology, Alice wants to prove she knows an assignment $(c_1,...,c_5)$ satisfying the QAP described above with $c_5 = 7$.'
        }
      </ArticleTitle>
      <ArticleTitle>
        {
          'To summarize, we have seen how a statement such as "i know $c_1, c_2, c_3$ such that $(c_1c_2)(c_1 + c_3) = 7$" can be translated into an equivalent statement about polynomials using QAPs. In the next part, we will see an efficient protocol for proving knowledge of a satisfying assignment to a QAP.'
        }
      </ArticleTitle>
      <ArticleTitle>
        {
          "[1]In this post we tried to give the most concise example of a reduction to QAP; we also recommend Vitalik Buterin's "
        }
        <a
          href="https://medium.com/@VitalikButerin/quadratic-arithmetic-programs-from-zero-to-hero-f6d558cea649"
          target="_blank"
          className="font-[500] underline"
          rel="noreferrer"
        >
          excellent post
        </a>
        {' for more details on the transformation from a program to a QAP.'}
      </ArticleTitle>
    </div>
  );
}
