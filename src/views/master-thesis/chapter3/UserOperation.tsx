/* eslint-disable quotes */
import { AppArticle } from 'src/components/box/ArticleBox';
import { SubsectionBox } from 'src/components/Thesis/SectionBox';

export default function UserOperation() {
  return (
    <SubsectionBox id="user-operation" title="UserOperation">
      <AppArticle isFirst>
        {
          "A UserOperation is a new data structure that packages the user's intended actions. Unlike traditional Ethereum transactions, it is not sent directly to the network, but instead stored in a mempool. A UserOperation contains various fields that are different from traditional transactions. Some of the important fields of a UserOperation include the following:"
        }
      </AppArticle>
    </SubsectionBox>
  );
}
