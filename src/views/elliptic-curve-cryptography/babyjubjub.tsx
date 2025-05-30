import { AppArticle, ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import ChapterBox from 'src/components/Thesis/ChapterBox';
import EquationBox from 'src/components/Thesis/EquationBox';

export default function BabyJubjub() {
  return (
    <ChapterBox title="Baby Jubjub" id="babyjubjub">
      <AppArticle isFirst>
        BabyJubJub is a twisted Edwards curve optimized for efficient cryptographic operations in
        zk-SNARK circuits. The curve equation for Ed25519 is given by:
      </AppArticle>
      <EquationBox id="babyjubjub-shape">
        {'$-x^2 + y^2 = 1 - \\frac{10240}{10241}x^2y^2$'}
      </EquationBox>
      <AppArticle>This curve has several parameters:</AppArticle>
      <ArticleUL className="list-disc">
        <ArticleLI isMath>{'Prime Number $p = 2^{255} - 19$'}</ArticleLI>
        <ArticleLI isMath>
          {
            'The generator point G on BabyJubJub is defined by a specific (x, y) point. This point is chosen as the base point for scalar multiplication in cryptographic operations.'
          }
        </ArticleLI>
        <ArticleLI isMath>
          {'Order $l = 2^{252} + 27742317777372353535851937790883648493$'}
        </ArticleLI>
      </ArticleUL>
    </ChapterBox>
  );
}
