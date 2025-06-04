import { AppArticle, ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import SectionBox from 'src/components/Thesis/SectionBox';

export default function Overview() {
  return (
    <SectionBox title="Overview" id="overview">
      <AppArticle isFirst>
        zk-SNARK stands for Zero-Knowledge Succinct Non-Interactive Argument of Knowledge. It is a
        type of ZKP that satisfies the core properties of non-interactive ZKPs: completeness,
        soundness, zero-knowledge, and non-interactivity. In addition, zk-SNARKs also satisfy the
        following important characteristics:
      </AppArticle>
      <ArticleUL className="list-disc">
        <ArticleLI>
          <span className="italic">Succinctness</span>: the proof is short and can be efficiently
          stored on-chain and quickly verified by network nodes.
        </ArticleLI>
        <ArticleLI>
          <span className="italic">Argument of knowledge</span>: the prover possesses a valid
          witness that satisfies the given statement.
        </ArticleLI>
      </ArticleUL>
      <AppArticle>
        In practical terms, a zk-SNARK proves that a specific computation was executed correctly
        without revealing any of the private inputs involved in that computation. Implementing
        zk-SNARKs generally involves five main steps:
      </AppArticle>
      <ArticleUL className="list-decimal">
        <ArticleLI className="ml-[2rem]">
          The computation is defined as a set of constraints over variables
        </ArticleLI>
        <ArticleLI className="ml-[2rem]">
          These constraints are rewritten into polynomial equations suitable for cryptographic
          operations
        </ArticleLI>
        <ArticleLI className="ml-[2rem]">
          A trusted setup phase generates random parameters (commonly referred to as toxic waste)
          that remain secret.
        </ArticleLI>
        <ArticleLI className="ml-[2rem]">
          The prover computes the proof using these parameters and the witness, applying
          randomization to hide the private data while preserving the structure of the equations.
        </ArticleLI>
        <ArticleLI className="ml-[2rem]">
          A pairing function maps the proof into a new space, preserving the equation structure and
          allowing for efficient verification.
        </ArticleLI>
      </ArticleUL>
    </SectionBox>
  );
}
