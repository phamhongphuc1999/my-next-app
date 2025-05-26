import { AppArticle, ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';

export default function Ed25519() {
  return (
    <div className="mt-[1rem]">
      <p className="text-[20px] font-[500]">3. Ed25519</p>
      <AppArticle isFirst>
        Ed25519 is a specific instance of EdDSA that uses the Curve25519 elliptic curve and the
        SHA-512 hash function. The curve equation for Ed25519 is given by:
      </AppArticle>
      <AppArticle isMath className="text-center">
        {'$-x^2 + y^2 = 1 - \\frac{121665}{121666}x^2y^2$'}
      </AppArticle>
      <AppArticle>Other parameters include:</AppArticle>
      <ArticleUL className="list-disc">
        <ArticleLI isMath>Prime number $p = 2^{255} - 19$</ArticleLI>
        <ArticleLI isMath>
          {
            'Generator point $G = (15112221349535400772501151409588531511454012693041857206046113283949847762202, 46316835694926478169428394003475163141307993866256225615783033603165251855960)$'
          }
        </ArticleLI>
        <ArticleLI>{'Order $l = 2^{252} + 27742317777372353535851937790883648493$'}</ArticleLI>
      </ArticleUL>
    </div>
  );
}
