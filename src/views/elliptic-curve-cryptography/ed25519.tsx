import { AppArticle, ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import ChapterBox from 'src/components/Thesis/ChapterBox';
import EquationBox from 'src/components/Thesis/EquationBox';

export default function Ed25519() {
  return (
    <ChapterBox title="Ed25519" id="ed25519">
      <AppArticle isFirst>
        Ed25519 is a specific instance of EdDSA that uses the Curve25519 elliptic curve and the
        SHA-512 hash function. The curve equation for Ed25519 is given by:
      </AppArticle>
      <EquationBox id="ed25519-shape">
        {'$-x^2 + y^2 = 1 - \\frac{121665}{121666}x^2y^2$'}
      </EquationBox>
      <AppArticle>Other parameters include:</AppArticle>
      <ArticleUL className="list-disc">
        <ArticleLI isMath>{'Prime number $p = 2^{255} - 19$'}</ArticleLI>
        <ArticleLI isMath>
          {
            'Generator point $G = (15112221349535400772501151409588531511454012693041857206046113283949847762202, 46316835694926478169428394003475163141307993866256225615783033603165251855960)$'
          }
        </ArticleLI>
        <ArticleLI isMath>
          {'Order $l = 2^{252} + 27742317777372353535851937790883648493$'}
        </ArticleLI>
      </ArticleUL>
    </ChapterBox>
  );
}
