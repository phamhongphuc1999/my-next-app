'use client';

import { AppArticle } from 'src/components/box/ArticleBox';
import CiteBox from 'src/components/Thesis/CiteBox';
import ThesisConfigProvider from 'src/context/ThesisConfigContext';
import BabyJubjub from './babyjubjub';
import ECDSA from './ecdsa';
import Ed25519 from './ed25519';
import Eddsa from './eddsa';

export default function EllipticCurveCryptographyPage() {
  return (
    <ThesisConfigProvider id="EllipticCurveCryptographyPage" firstLevel="section">
      <div className="mt-[1rem]">
        <AppArticle>
          Elliptic Curve Cryptography (ECC) is a widely used cryptographic framework to create
          secure digital signatures and keys. ECC provides smaller key sizes than other
          cryptographic systems like RSA, offering the same level of security with better
          efficiency. Elliptic curves are defined by equations of the form:
        </AppArticle>
        <AppArticle isMath className="text-center">
          {'$E: y^2 = (x^3 + ax + b) (\\text{ mod p})$'}
        </AppArticle>
        <AppArticle isMath>
          {
            'For two points $(x_1, y_1)$ and $(x_2, y_2)$, their sum and doubling are computed using the following equations $(x_1, y_1) + (x_2, y_2) = (x_3, y_3)$, such as'
          }
        </AppArticle>
        <AppArticle isMath className="text-center">
          {
            '$\\lambda = \\frac{y_2 - y_1}{x_2 - x_1}, x_3 = \\lambda^2 - x_1 - x_2, y_3 = \\lambda^2(x_1 - x_3) - y_1$'
          }
        </AppArticle>
        <ECDSA />
        <Eddsa />
        <Ed25519 />
        <BabyJubjub />
        <p className="text-lg font-bold">Reference</p>
        <CiteBox
          cite={{
            id: 'eddsa',
            author: 'Daniel J.  Bernstein, Niels Duif, Tanja Lange, Peter Schwabe, Bo-Yin Yang',
            title: 'High-speed High-security Signatures',
            journal:
              'Preneel, B., Takagi, T. (eds) Cryptographic Hardware and Embedded Systems – CHES 2011. CHES 2011. Lecture Notes in Computer Science, vol 6917. Springer, Berlin, Heidelberg.',
            year: 2011,
          }}
        />
      </div>
    </ThesisConfigProvider>
  );
}
