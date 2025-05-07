/* eslint-disable react/no-unescaped-entities */

import { AppArticle } from 'src/components/box/ArticleBox';
import ECDSA from './ecdsa';
import Eddsa from './eddsa';

export default function EllipticCurveCryptographyPage() {
  return (
    <div className="mt-[1rem]">
      <AppArticle>
        Elliptic Curve Cryptography (ECC) is a widely used cryptographic framework to create secure
        digital signatures and keys. ECC provides smaller key sizes than other cryptographic systems
        like RSA, offering the same level of security with better efficiency. Elliptic curves are
        defined by equations of the form:
      </AppArticle>
      <AppArticle isMath className="text-center">
        {'$E: y^2 = (x^3 + ax + b) (\\text{ mod p})$ (1)'}
      </AppArticle>
      <AppArticle isMath>
        {
          'For two points $(x_1, y_1)$ and $(x_2, y_2)$, their sum and doubling are computed using the following equations $(x_1, y_1) + (x_2, y_2) = (x_3, y_3)$, such as'
        }
      </AppArticle>
      <AppArticle isMath className="text-center">
        {
          '$\\lambda = \\frac{y_2 - y_1}{x_2 - x_1}, x_3 = \\lambda^2 - x_1 - x_2, y_3 = \\lambda^2(x_1 - x_3) - y_1$ (2)'
        }
      </AppArticle>
      <ECDSA />
      <Eddsa />
    </div>
  );
}
