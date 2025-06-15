import { AppArticle } from 'src/components/box/ArticleBox';
import ChapterBox from 'src/components/Thesis/ChapterBox';

export default function Chapter6() {
  return (
    <ChapterBox id="chapter6" title="CONCLUSION AND FUTURE WORK">
      <AppArticle isFirst>
        {
          'This thesis has demonstrated several problems with the current account model, EOA, and CA, how the problems can be addressed by account abstraction, and proposed an approach to secure and privacy-preserving wallet recovery by guardian-based recovery and zero-knowledge proof in the context of account abstraction wallet. Traditional social recovery, while effective, may expose potential vulnerabilities. By leveraging zero-knowledge proof, this research demonstrates how users can prove ownership to recover their assets without revealing sensitive information, ensuring a robust balance between usability, privacy, and security.'
        }
      </AppArticle>
      <AppArticle>
        {
          'The proposed solution focuses on storing the hashes of the addresses on-chain, instead of storing the plain addresses of the guardians on-chain, and then using zero-knowledge proof to allow the guardians to create valid proof that they are the owners of the hashed addresses stored in the smart contract, so that only guardians can provide authorized proof to recover ownership. We also provide evaluations to select the hash function and elliptic curve algorithm that are friendly in the zero-knowledge circuit and suitable for the application requirements. In terms of the thesis, we use Poseidon hash function and BabyJubJub to implement and evaluate our system.'
        }
      </AppArticle>
      <AppArticle>
        {
          'The proposed architecture has much potential for improvement and development. The future works will focus on improving the gas cost and the time a transaction takes to execute. We will implement some novel features, such as paymaster, maximum amount of special transactions, or delay time after a massive transaction. Moreover, we will use zero-knowledge proof more extensively in the architecture. For example, in the current design, zero-knowledge proof is used to hide guardian addresses, but in the future version, zero-knowledge proof can be used to hide transaction parameters, such as amount, token address, and receive address.'
        }
      </AppArticle>
    </ChapterBox>
  );
}
