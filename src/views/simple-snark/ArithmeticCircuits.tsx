/* eslint-disable quotes */
import ArithmeticImg from 'public/images/arithmetic-circuit.png';
import { AppArticle } from 'src/components/box/ArticleBox';
import EquationBox from 'src/components/Thesis/EquationBox';
import FigureBox from 'src/components/Thesis/FigureBox';
import RefLink from 'src/components/Thesis/RefLink';
import SectionBox from 'src/components/Thesis/SectionBox';

export default function ArithmeticCircuits() {
  return (
    <SectionBox title="Capturing Computations Using Arithmetic Circuits" id="captureTheComputation">
      <AppArticle isFirst isMath>
        {
          'An arithmetic circuit is a directed acyclic graph where the nodes represent addition and multiplication gates, and the edges represent wires over a finite field $\\mathbb{F}_p$. Wires connect the output of one gate to the input of another. Each gate has two input wires, left and right, and one output wire, with one final output wire representing the result of the computation.'
        }
      </AppArticle>
      <FigureBox
        id="arithmetic-circuit"
        src={ArithmeticImg}
        alt="arithmetic-circuit"
        title="The arithmetic circuit of the computation: $f = (c_1c_2)+(c_1 + c_3)$"
      />
      <AppArticle isFirst isMath>
        <RefLink toId="arithmetic-circuit" />
        {
          ' illustrates the arithmetic circuit for the computation $f = (c_1c_2)+(c_1 + c_3)$, where $c_1, c_2, c_3 \\in \\mathbb{F}_p$. The top wire ($w_5$) is the final output wire, and the bottom wires ($w_1, w_2, w_3$) are the input wires. Some middle wires, going from addition to multiplication or addition gates, are not labeled because their inputs can be assumed to go directly. An arithmetic circuit can construct a correct assignment of values that satisfies all constraints defined by the circuit. In this example, the correct assignment is $(c_1, c_2, c_3, c_4, c_5)$, where $c_4 = c_1c_2$ and $c_5 = c_4(c_1 + c_3)$.'
        }
      </AppArticle>
      <AppArticle isMath>
        {
          'More abstractly, an arithmetic circuit can be transformed into a Rank 1 Constraint System (R1CS), a vector-based system that represents the sequence of gates in the circuit. For instance, a circuit that calculates $y = x^3 + 2x + 5$ can be decomposed into gates: $T_1 = x \\cdot x$, $T_2 = T_1 \\cdot x$, $T_3 = T_2 + 2x$, and finally $y = T_3 + 5$. The witness, which encodes the state of each gate in the circuit, is defined by the vector $w = (w_1, w_2, w_3, w_4, w_5, w_6) = (1, x, y, T_1, T_2, T_3)$.'
        }
      </AppArticle>
      <AppArticle>
        {
          'Assuming vectors $A$ and $B$ represent the left and right inputs of each gate, and $C$ represents the output, the constraint can be expressed as the following equation \\cite{equation_overview-snark}:'
        }
      </AppArticle>
      <EquationBox id="overview-snark">{'$(w \\odot A) * (w \\odot B) = w \\odot C$'}</EquationBox>
      <AppArticle isMath>
        {
          'The $\\odot$ operator is defined by: given two vectors $v_1 = \\{a_1, a_2,...,a_m\\}$ and $v_2 = \\{b_1, b_2,...,b_m\\}$'
        }
      </AppArticle>
      <EquationBox id="overview-snark1">
        {'$v_1 \\odot v_2 = \\sum_{i = 1}^{m} a_ib_i$'}
      </EquationBox>
      <AppArticle isMath>
        {
          'For the computation $y = x^3 + 2x + 5$ and witness $w = (1, x, y, T_1, T_2, T_3)$, the vectors are:'
        }
      </AppArticle>
      <EquationBox id="vector">
        {
          '$A = \\begin{bmatrix}0 & 1 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 1 & 0 & 0 \\\\ 0 & 2 & 0 & 0 & 1 & 0 \\\\ 5 & 0 & 0 & 0 & 0 & 1 \\end{bmatrix}, B = \\begin{bmatrix}0 & 1 & 0 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 & 0 & 0 \\\\ 1 & 0 & 0 & 0 & 0 & 0 \\\\ 1 & 0 & 0 & 0 & 0 & 0\\end{bmatrix}, C = \\begin{bmatrix}0 & 0 & 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 0 & 0 & 1 \\\\ 0 & 0 & 1 & 0 & 0 & 0\\end{bmatrix}$'
        }
      </EquationBox>
      <AppArticle isMath>
        {
          "Let's assign a value to $x$, for example $x = 3$, then $w = (1, 3, 38, 9, 27, 33)$. Applying the $\\odot$ operator to each row, we get:"
        }
      </AppArticle>
      <EquationBox id="vector1">
        {
          '$w \\odot A = \\begin{bmatrix}3 & 9 & 33 & 38\\end{bmatrix},w \\odot B = \\begin{bmatrix}3 & 3 & 1 & 1\\end{bmatrix},w \\odot C = \\begin{bmatrix}9 & 27 & 33 & 38\\end{bmatrix}$'
        }
      </EquationBox>
      <AppArticle isMath>
        {
          "It's easy to verify the constraints: $3 \\cdot 3 = 9$, $9 \\cdot 3 = 27$, $33 \\cdot 1 = 33$, and $38 \\cdot 1 = 38$, confirming that the witness satisfies all the constraints."
        }
      </AppArticle>
      <AppArticle>
        In conclusion, R1CS transforms computations into a set of numerical vector constraints. The
        verification process simply checks whether these constraints are satisfied at each step.
        However, this method can be computationally intensive for verification. Therefore,
        additional transformations are typically applied to optimize the verification process and
        reduce intensity.
      </AppArticle>
    </SectionBox>
  );
}
