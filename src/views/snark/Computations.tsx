/* eslint-disable quotes */

import Image from 'next/image';
import CircuitImg from 'public/images/CircuitDrawing.png';
import { AppArticle, ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';

export default function Computation() {
  return (
    <div className="mt-[1rem]">
      <AppArticle>
        {
          'In the three previous parts, we developed a certain machinery for dealing with polynomials. In this part, we show how to translate statements we would like to prove and verify to the language of polynomials. The idea of using polynomials in this way goes back to the '
        }
        <a
          href="https://www.semanticscholar.org/paper/Algebraic-methods-for-interactive-proof-systems-Lund-Fortnow/99c8148bb179eed21d4177edefa43d34ec536d78?p2df"
          target="_blank"
          rel="noreferrer"
          className="font-[500] text-black-350 underline"
        >
          groundbreaking work
        </a>{' '}
        {' of Lund, Fortnow, Karloff, and Nisan.'}
      </AppArticle>
      <AppArticle>
        In 2013,{' '}
        <a
          href="https://eprint.iacr.org/2012/215.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-[500] text-black-350 underline"
        >
          another breakthrough work
        </a>
        {
          ' of Gennaro, Gentry, Parno, and Raykova defined an extremely useful translation of computations into polynomials called a Quadratic Arithmetic Program (QAP). QAPs have become the basis for modern zk-SNARK constructions, in particular those used by Zcash.'
        }
      </AppArticle>
      <AppArticle>
        {
          'In this post we explain the translation into QAPs by example. Even when focusing on a small example rather than the general definition, it is unavoidable that it is a lot to digest at first, so be prepared for a certain mental effort.'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'Suppose Alice wants to prove to Bob she knows $c_1,c_2,c_3 \\in \\mathbb{F}_p$ such that $(c_1 \\cdot c_2) \\cdot (c_1 + c_3) = 7$. The first step is to present the expression computed from $c_1,c_2,c_3$ as an arithmetic circuit.'
        }
      </AppArticle>
      <p className="text-[20px]">Arithmetic Circuits</p>
      <AppArticle isFirst isMath>
        {
          'An arithmetic circuit consists of gates computing arithmetic operations like addition and multiplication, with wires connecting the gates. In our case, the circuit looks like this:'
        }
      </AppArticle>
      <Image src={CircuitImg} alt="circuit" className="h-auto w-[80%] md:w-[450px]" />
      <AppArticle isFirst>
        {
          'The bottom wires are the input wires, and the top wire is the output wire giving the result of the circuit computation on the inputs.'
        }
      </AppArticle>
      <AppArticle>
        {
          'As can be seen in the picture, we label the wires and gates of the circuit in a very particular way, needed for the next step of translating the circuit into a QAP:'
        }
      </AppArticle>
      <ArticleUL className="list-disc">
        <ArticleLI isMath>
          {
            'When the same outgoing wire goes into more than one gate, we still think of it as one wire - like $\\mathsf{w_1}$ in the example.'
          }
        </ArticleLI>
        <ArticleLI>
          {
            'We assume multiplication gates have exactly two input wires, which we call the left wire and right wire.'
          }
        </ArticleLI>
        <ArticleLI isMath>
          {
            "We don't label the wires going from an addition to multiplication gate, nor the addition gate; we think of the inputs of the addition gate as going directly into the multiplication gate. So in the example we think of $\\mathsf{w_1}$ and $\\mathsf{w_3}$ as both being right inputs of $\\mathsf{g_2}$."
          }
        </ArticleLI>
      </ArticleUL>
      <AppArticle>
        {
          'A legal assignment for the circuit is an assignment of values to the labeled wires where the output value of each multiplication gate is indeed the product of the corresponding inputs.'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'So for our circuit, a legal assignment is of the form: $(c_1,\\ldots,c_5)$ where $c_4=c_1 \\cdot c_2$ and $c_5=c_4 \\cdot (c_1+c_3)$.'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'In this terminology, what Alice wants to prove is that she knows a legal assignment $(c_1,\\ldots,c_5)$ such that $c_5=7$. The next step is to translate this statement into one about polynomials using QAPs.'
        }
      </AppArticle>
      <p className="text-[20px]">Reduction to a QAP</p>
      <AppArticle isFirst isMath>
        {
          'We associate each multiplication gate with a field element: $\\mathsf{g_1}$ will be associated with $1 \\in \\mathbb{F}_p$ and $\\mathsf{g_2}$ with $2 \\in \\mathbb{F}_p$. We call the points $\\{1,2\\}$ our target points. Now we need to define a set of "left wire polynomials" $L_1,\\ldots,L_5$, "right wire polynomials" $R_1,\\ldots,R_5$ and "output wire polynomials" $O_1,\\ldots,O_5$.'
        }
      </AppArticle>
      <AppArticle>
        {
          "The idea for the definition is that the polynomials will usually be zero on the target points, except the ones involved in the target point's corresponding multiplication gate."
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'Concretely, as $\\mathsf{w_1}$, $\\mathsf{w_2}$, $\\mathsf{w_4}$ are, respectively, the left, right and output wire of $\\mathsf{g_1}$; we define $L_1 =$ $R_2 =$ $O_4 =$ $2-X$, as the polynomial $2-X$ is one on the point $1$ corresponding to $\\mathsf{g_1}$ and zero on the point $2$ corresponding to $\\mathsf{g_2}$.'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'Note that $\\mathsf{w_1}$ and $\\mathsf{w_3}$ are both right inputs of $\\mathsf{g_2}$. Therefore, we define similarly $L_4 =$ $R_1 =$ $R_3 =$ $O_5 =$ $X-1$, as $X-1$ is one on the target point $2$ corresponding to $\\mathsf{g_2}$ and zero on the other target point. We set the rest of the polynomials to be the zero polynomial.'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'Given fixed values $(c_1,\\ldots,c_5)$ we use them as coefficients to define a left, right, and output "sum" polynomials. That is, we define'
        }
      </AppArticle>
      <AppArticle isMath className="text-center">
        {
          '$L:=\\sum_{i=1}^5 c_i \\cdot L_i,$ $R:= \\sum_{i=1}^5 c_i \\cdot R_i,$ $O:=\\sum_{i=1}^5 c_i \\cdot O_i`,$'
        }
      </AppArticle>
      <AppArticle isMath>{'and then we define the polynomial $P:=L \\cdot R -O$.'}</AppArticle>
      <AppArticle isMath>
        {
          'Now, after all these definitions, the central point is this: $(c_1,\\ldots,c_5)$ is a legal assignment to the circuit if and only if $P$ vanishes on all the target points.'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          "Let's examine this using our example. Suppose we defined $L,R,O,P$ as above given some $c_1,\\ldots,c_5$. Let's evaluate all these polynomials at the target point 1:"
        }
      </AppArticle>
      <AppArticle isMath>
        {
          "Out of all the $L_i$'s only $L_1$ is non-zero on $1$. So we have $L(1)=c_1 \\cdot L_1(1) = c_1$. Similarly, we get $R(1)=c_2$ and $O(1)=c_4$."
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'Therefore, $P(1)=c_1 \\cdot c_2-c_4$. A similar calculation shows $P(2) =$ $c_4 \\cdot (c_1+c_3) -$ $c_5$. In other words, $P$ vanishes on the target points if and only if $(c_1,\\ldots,c_5)$ is a legal assignment.'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'Now, we use the following algebraic fact: For a polynomial $P$ and a point $a \\in \\mathbb{F}_p$, we have $P(a)=0$ if and only if the polynomial $X-a$ divides $P$, i.e. $P=(X-a) \\cdot H$ for some polynomial $H$.'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'Defining the target polynomial $T(X) :=$ $(X-1) \\cdot (X-2)$, we thus have that $T$ divides $P$ if and only if $(c_1,\\ldots,c_5)$ is a legal assignment. Following the above discussion, we define a QAP as follows:'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'A Quadratic Arithmetic Program $Q$ of degree $d$ and size $m$ consists of polynomials $L_1,\\ldots,L_m$, $R_1,\\ldots,R_m$, $O_1,\\ldots,O_m$ and a target polynomial $T$ of degree $d$. An assignment $(c_1,\\ldots,c_m)$ satisfies $Q$ if, defining $L:=\\sum_{i=1}^m c_i \\cdot L_i$, $R:=\\sum_{i=1}^m c_i \\cdot R_i$, $O:=\\sum_{i=1}^m c_i \\cdot O_i$ and $P:=L \\cdot R -O$, we have that $T$ divides $P$.'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'In this terminology, Alice wants to prove she knows an assignment $(c_1,\\ldots,c_5)$ satisfying the QAP described above with $c_5=7$.'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'To summarize, we have seen how a statement such as "I know $c_1,c_2,c_3$ such that $(c_1 \\cdot c_2) \\cdot (c_1 + c_3) = 7$" can be translated into an equivalent statement about polynomials using QAPs. In the next part, we will see an efficient protocol for proving knowledge of a satisfying assignment to a QAP.'
        }
      </AppArticle>
      <a href="#snark5_1_item">
        <AppArticle>
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
        </AppArticle>
      </a>
    </div>
  );
}
