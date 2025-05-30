import eccImg from 'public/images/elliptic-curve/elliptic-curve.png';
import { AppArticle, ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import ChapterBox from 'src/components/Thesis/ChapterBox';
import ImageBox from 'src/components/Thesis/FigureBox';
import RefLink from 'src/components/Thesis/RefLink';

export default function ECDSA() {
  return (
    <ChapterBox title="Elliptic Curve Digital Signature Algorithm" id="ecdsa">
      <ImageBox src={eccImg} alt="ecc" id="elliptic-curve-shape" title="Elliptic curve shape" />
      <AppArticle isFirst>
        ECDSA (<RefLink toId="figure_elliptic-curve-shape" />) is a cryptographic scheme for
        creating and verifying digital signatures based on ECC. It consists of three main
        operations: key generation, signature generation, and signature verification.
      </AppArticle>
      <ArticleUL className="list-disc">
        <ArticleLI>
          <p className="font-[500]">Key generation</p>
          <ArticleUL className="list-decimal">
            <ArticleLI isMath className="ml-[2rem]">
              {'Select a random integer $d \\in [1, n-1]$, $n$ is the order of elliptic curve.'}
            </ArticleLI>
            <ArticleLI isMath className="ml-[2rem]">
              {'Compute $Q = dG$'}
            </ArticleLI>
            <ArticleLI isMath className="ml-[2rem]">
              {'Public key is $Q$ and private key is $d$.'}
            </ArticleLI>
          </ArticleUL>
        </ArticleLI>
        <ArticleLI>
          <AppArticle isMath>{'$\\textbf{Signature generation}$ with message $m$'}</AppArticle>
          <ArticleUL className="list-decimal">
            <ArticleLI isMath>
              {
                'Calculate $z = \\textit{hashFunction}(m)$, $\\textit{hashFunction}$ is a cryptographic hash function (SHA-256).'
              }
            </ArticleLI>
            <ArticleLI isMath>{'Choose a random integer $k \\in [1, n - 1]$'}</ArticleLI>
            <ArticleLI isMath>
              {
                'Calculate $R = kG$, denote $r$ is x-coordinate of $R$, if $r = 0$, choose different $k$, and the calculation is repeated.'
              }
            </ArticleLI>
            <ArticleLI isMath>
              {
                'Calculate $s = k^{-1} (z + rd)$ mod $n$, where $k^{-1}$ is the modular inverse of $k$ modulo $n$. If $s = 0$, choose a different k and repeat the calculation.'
              }
            </ArticleLI>
            <ArticleLI isMath>{'Signature for message $m$ is $(r, s)$.'}</ArticleLI>
          </ArticleUL>
        </ArticleLI>
        <ArticleLI>
          <p className="font-[500]">Signature verification</p>
          <ArticleUL className="list-decimal">
            <ArticleLI isMath>
              {
                'Calculate $z = \\textit{hashFunction}(m)$, $\\textit{hashFunction}$ is the same function used in signature generation.'
              }
            </ArticleLI>
            <ArticleLI isMath>{'Calculate $w = s^{-1}$ mod $n$.'}</ArticleLI>
            <ArticleLI isMath>{'Calculate $u_1 = zw$ mod $n$ and $u_2 = rw$ mod $n$.'}</ArticleLI>
            <ArticleLI isMath>{'Calculate $R = (x, y) = u_1G + u_2Q$'}</ArticleLI>
            <ArticleLI isMath>
              {'If $x = z$ mod $n$, the signature is valid; otherwise, it is invalid.'}
            </ArticleLI>
          </ArticleUL>
        </ArticleLI>
      </ArticleUL>
    </ChapterBox>
  );
}
