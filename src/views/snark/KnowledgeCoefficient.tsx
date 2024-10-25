/* eslint-disable react/no-unescaped-entities */
/* eslint-disable quotes */
import { Typography } from '@mui/material';
import { ArticleTitle } from 'src/components/box/ArticleBox';

export default function KnowledgeCoefficient() {
  return (
    <div className="mt-[1rem]">
      <ArticleTitle isMath>
        {
          'In Part 2, we discussed how Alice could evaluate the hidden result $E(P(s))$ of her polynomial $P$ at a point $s$ chosen by Bob. This process was "blind" because Alice did not learn the value of $s$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'However, a crucial aspect was missing in that protocol. Although Alice could compute $E(P(s))$, there was no guarantee she would send Bob the correct value rather than some unrelated one. To ensure Alice follows the protocol and provides $E(P(s))$ truthfully, we need a mechanism to enforce this behavior. This post introduces a fundamental tool for that purpose, the'
        }{' '}
        <span className="font-[500]">Knowledge of Coefficient (KC) Test</span>{' '}
        {'which we’ll expand upon in Part 4.'}
      </ArticleTitle>
      <Typography variant="h4">Setting Up the KC Test</Typography>
      <ArticleTitle isFirst isMath>
        {
          'As before, we define $g$ as a generator of a group $G$ with order $|G| = p$, where the discrete logarithm is hard. Moving forward, we’ll represent group elements additively instead of multiplicatively. Thus, for $\\alpha \\in \\mathbb{F}_p, \\alpha g$ represents the result of summing $\\alpha$ copies of $g$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "For $\\alpha \\in \\mathbb{F}_p^*$ (the non-zero elements of $\\mathbb{F}_p$), let's define a pair $(a, b)$ in $G$ as an $\\alpha$-pair if $a, b \\neq 0$ and $b = \\alpha a$."
        }
      </ArticleTitle>
      <Typography variant="h4">The KC Test Procedure</Typography>
      <ArticleTitle isMath isFirst>
        1. <span className="font-[500]">Bob's Challenge:</span>{' '}
        {
          'Bob selects a random $\\alpha \\in \\mathbb{F}_p^*$ and a random element $\\alpha$ in $G$. He computes $b = \\alpha a$, creating the $\\alpha$-pair $(a, b)$.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        2. <span className="font-[500]">Sending the Challenge:</span>{' '}
        {'Bob sends this pair $(a, b)$ to Alice as a challenge.'}
      </ArticleTitle>
      <ArticleTitle isMath>
        3. <span className="font-[500]">Alice's Response:</span>{' '}
        {
          "Alice must respond with a different pair $(a^{'}, b^{'})$ that is also an $\\alpha$-pair."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        4. <span className="font-[500]">Verification:</span>{' '}
        {
          "Bob accepts Alice's response only if $(a^{'}, b^{'})$ is indeed an $\\alpha$-pair, which he can verify by checking if $b^{'} = \\alpha a^{'}$"
        }
      </ArticleTitle>
      <Typography variant="h4">How Alice Can Succeed in the KC Test</Typography>
      <ArticleTitle isFirst isMath>
        {
          "If Alice knew $\\alpha$, she could easily construct $(a^{'}, b^{'})$ by selecting any $a^{'}$ in $G$ and computing $b^{'} = \\alpha a^{'}$. However, since Alice only knows $a$ and $b = \\alpha a$ (and the discrete logarithm problem in $G$ is hard), she cannot directly find $\\alpha$."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'To respond successfully without knowing $\\alpha$, Alice can select random $\\gamma \\in \\mathbb{F}_p^*$ and set:'
        }
      </ArticleTitle>
      <ArticleTitle isMath className="text-center">
        {"$(a^{'}, b^{'}) = (\\gamma a, \\gamma b)$"}
      </ArticleTitle>
      <ArticleTitle>in this case:</ArticleTitle>
      <ArticleTitle isMath className="text-center">
        {"$b^{'} = \\gamma b = \\gamma(\\alpha a) = \\alpha (\\gamma a) = \\alpha a^{'}$"}
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "Thus, $(a^{'}, b^{'})$ is indeed an $\\alpha$-pair as required. In doing this, Alice knows the coefficient $\\gamma$ such that $a^{'} = \\gamma a$."
        }
      </ArticleTitle>
      <Typography variant="h4">The Knowledge of Coefficient Assumption (KCA)</Typography>
      <ArticleTitle isFirst isMath>
        The <span className="font-[500]">Knowledge of Coefficient Assumption (KCA)</span>{' '}
        {
          "states that if Alice responds successfully to Bob's challenge $(a, b)$ with non-negligible probability, she must know the coefficient $\\gamma$ such that $a^{'} = \\gamma a$."
        }
      </ArticleTitle>
      <Typography>Formalizing "Knowledge" in KCA</Typography>
      <ArticleTitle isFirst isMath>
        To formally define "knowledge," we introduce a theoretical entity called{' '}
        <span className="font-[500]">Alice's Extractor</span> This Extractor has access to Alice's
        internal state and can be used to demonstrate that, whenever Alice responds with an{' '}
        {
          "$\\alpha$-pair $(a^{'}, b^{'})$, the Extractor can output the corresponding $\\gamma$ such that $a^{'} = \\gamma a$"
        }
      </ArticleTitle>
      <ArticleTitle>
        The KC Test and KCA are fundamental tools that will be expanded upon in Part IV, where we
        ensure Alice's adherence to the protocol. This foundation enables secure and reliable
        verification in cryptographic protocols.
      </ArticleTitle>
    </div>
  );
}
