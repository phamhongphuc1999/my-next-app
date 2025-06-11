/* eslint-disable react/no-unescaped-entities */
import caImg from 'public/images/master-thesis/chapter2/contract-account.png';
import eoaImg from 'public/images/master-thesis/chapter2/eoa.png';
import { AppArticle, ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import FigureBox from 'src/components/Thesis/FigureBox';
import RefLink from 'src/components/Thesis/RefLink';
import SectionBox from 'src/components/Thesis/SectionBox';

export default function AccountSystem() {
  return (
    <SectionBox id="account-system" title="Account system in blockchain">
      <AppArticle isFirst>
        This section introduces the account system in blockchain, focusing on the two fundamental
        account types: Externally Owned Accounts (EOAs) and Contract Accounts (CAs). It provides an
        overview of the structure, components, and roles of the two types of accounts.
      </AppArticle>
      <AppArticle>
        The account system is fundamental to blockchain's functionality, enabling users and
        applications to interact with decentralized ledgers. Unlike traditional systems, where
        accounts are typically maintained and managed by centralized authorities, blockchain
        accounts are decentralized and governed by a cryptographic algorithm. In the current
        blockchain architecture, user accounts are divided into two typical types: externally owned
        accounts (EOAs) and contract accounts (CAs). EOAs are the most basic type of blockchain
        account, allowing users to execute transactions, such as cryptocurrency transfers or smart
        contract executions. CAs allow users to perform complex operations, such as Uniswap's
        automated makers or Aave's lending protocols.
      </AppArticle>
      <FigureBox
        id="eoa-structure"
        title="Structure of Externally owned account"
        src={eoaImg}
        alt="eoa-structure"
      />
      <AppArticle isFirst>
        EOAs are controlled through a cryptographic key pair consisting of a private key and a
        public key. The private key is used to generate digital signatures and authorize
        transactions, while the public key is used to derive the account's address. Because EOAs are
        based on a cryptographic pair key, their applications are limited to signing transactions
        and interacting with the smart contract, and can not store executable logic,
        transactions'state, or perform complex programmable actions.{' '}
        <RefLink toId="eoa-structure" /> illustrates the key components of an EOA, including
      </AppArticle>
      <ArticleUL className="list-disc">
        <ArticleLI>
          <span className="italic">Address</span>: A 20-byte identifier derived from the public key
          using the Keccak-256 hash function. This is the user's identity on the blockchain, used
          for sending and receiving assets or interacting with smart contracts.
        </ArticleLI>
        <ArticleLI isMath>
          <span className="italic">Private key</span>:{' '}
          {
            'A randomly generated 256-bit integer is in the range between 0 and $2^{256}- 1$. It is used to sign transactions and prove ownership, based on elliptic curve cryptography.'
          }
        </ArticleLI>
        <ArticleLI>
          <span className="italic">Nonce</span>:{' '}
          {
            'A transaction counter to prevent replay attacks by ensuring each transaction is unique.'
          }
        </ArticleLI>
        <ArticleLI>
          <span className="italic">Balance</span>
          {
            ': The amount of cryptocurrency held by the account. The balance is maintained by the ledger, and the EOA does not physically hold these tokens.'
          }
        </ArticleLI>
      </ArticleUL>
      <AppArticle>
        {
          'EOAs are commonly implemented in various software wallets such as MetaMask, Trust Wallet, and Rainbow, or hardware wallets such as Trezor, Ledger, and GridPlus. While they differ in terms of user experience and security interface, both types provide the same fundamental account structure and functionality.'
        }
      </AppArticle>
      <FigureBox
        id="contract-account-structure"
        title="Structure of Contract account"
        src={caImg}
        alt="contract-account-structure"
      />
      <AppArticle isFirst>
        CAs are controlled by on-chain code (implemented by a smart contract) rather than a private
        key. CAs cannot initiate transactions on their own but can be triggered by transactions sent
        from EOAs or other contracts. When triggered, a CA executes its embedded logic, enabling
        advanced functionalities such as automated market making, lending protocols, multi-signature
        wallets, or programmable access controls. A contract account consists of key components (as
        illustrated in <RefLink toId="contract-account-structure" />)
      </AppArticle>
    </SectionBox>
  );
}
