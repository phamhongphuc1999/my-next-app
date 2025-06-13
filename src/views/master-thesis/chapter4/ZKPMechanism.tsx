/* eslint-disable quotes */
import { AppArticle } from 'src/components/box/ArticleBox';
import RefLink from 'src/components/Thesis/RefLink';
import SectionBox from 'src/components/Thesis/SectionBox';

export default function ZKPMechanism() {
  return (
    <SectionBox title="Zero-Knowledge-Based Guardian Mechanism" id="zkp-based-guardian-mechanism">
      <AppArticle isFirst>
        {
          'In this section, we describe how ZKPs are implemented in our architecture and the reason behind several key design decisions.'
        }
      </AppArticle>
      <AppArticle>
        {'As discussed in '}
        <RefLink toId="change-ownership-process" mode="subsection" />
        {
          ", storing plain guardian addresses on-chain is insecure. To eliminate this, we store only the hashed form of each guardian's address. However, verifying a guardian's authorization by comparing a submitted hash with a stored hash is not sufficient because everyone has access to the guardian's address, and they can compute the hash of the guardian's address. Even if they are equal, we cannot be certain that the sender actually controls the corresponding guardian account."
        }
      </AppArticle>
    </SectionBox>
  );
}
