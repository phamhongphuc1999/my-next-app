/* eslint-disable react/no-unescaped-entities */
/* eslint-disable quotes */
import { Typography } from '@mui/material';
import Link from 'next/link';
import { ArticleLI, ArticleTitle, ArticleUL } from 'src/components/box/ArticleBox';
import { ContrastLink } from 'src/components/utils';

export default function KnowledgeCoefficient() {
  return (
    <div className="mt-[1rem]">
      <ArticleTitle isMath>
        {'In '}
        <Link href="/snark/chapter2" className="font-[500] text-black-350 underline">
          part 2
        </Link>
        {
          ' , we saw how Alice can blindly evaluate the hiding $E(P(s))$ of her polynomial $P$ of degree $d$, at a point $s$ belong to Bob. We called this "blind" evaluation because Alice did not learn $s$ in the process.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'However, there was something missing in that protocol — the fact that Alice is able to compute $E(P(s))$ does not guarantee she will indeed send $E(P(s))$ to Bob, rather than some completely unrelated value.'
        }
      </ArticleTitle>
      <ArticleTitle>
        {
          'Thus, we need a way to "force" Alice to follow the protocol correctly. We will explain in '
        }
        <Link href="/snark/chapter4" className="font-[500] text-black-350 underline">
          Part 4
        </Link>
        {
          ' precisely how we achieve this. In this post, we focus on explaining the basic tool needed for that — which we call the Knowledge of Coefficient (KC) Test.'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'As before, we denote by $g$ a generator of a group $G$ of order $|G|=p$ where the discrete log is hard. It will be convenient from this post onwards to write our group additively rather than multiplicatively. That is, for $\\alpha \\in \\mathbb{F}_p$, $\\alpha \\cdot g$ denotes the result of summing $\\alpha$ copies of $g$.'
        }
      </ArticleTitle>
      <Typography variant="h4">The KC Test</Typography>
      <ArticleTitle isMath isFirst>
        {'For $\\alpha \\in \\mathbb{F}_p^*$'}
        <ContrastLink id="snark3_1_item" href="#snark3_1">
          [1]
        </ContrastLink>
        {
          ', let us call a pair of elements $(a, b)$ in $G$ an $\\alpha$-pair if $a, b \\neq 0$ and $b = \\alpha \\cdot a$.'
        }
      </ArticleTitle>
      <ArticleTitle>The KC Test proceeds as follows:</ArticleTitle>
      <ArticleUL className="list-decimal">
        <ArticleLI isMath className="ml-[2rem]">
          {
            'Bob chooses random $\\alpha \\in \\mathbb{F}_p^*$ and $a \\in G$. He computes $b = \\alpha \\cdot a$.'
          }
        </ArticleLI>
        <ArticleLI isMath className="ml-[2rem]">
          {
            'He sends to Alice the "challenge" pair $(a, b)$. Note that $(a, b)$ is an $\\alpha$-pair.'
          }
        </ArticleLI>
        <ArticleLI isMath className="ml-[2rem]">
          {
            "Alice must now respond with a different pair $(a^{'}, b^{'})$ that is also an $\\alpha$-pair."
          }
        </ArticleLI>
        <ArticleLI isMath className="ml-[2rem]">
          {
            "Bob accepts Alice's response only if $(a',b')$ is indeed an $\\alpha$-pair. (As he knows $\\alpha$ he can check if $b' = \\alpha \\cdot a')$."
          }
        </ArticleLI>
      </ArticleUL>
      <ArticleTitle isMath>
        {
          "Now, let's think about how Alice could successfully respond to the challenge. Let's assume for a second that she knew $\\alpha$. In that case, she could simply choose any $a^{'}$ in $G$, and compute $b^{'} = \\alpha \\cdot a^{'}$; and return $(a^{'}, b^{'})$ as her new $\\alpha$-pair."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          'However, as the only information about $\\alpha$ she has is $\\alpha \\cdot a$ and $G$ has a hard discrete log problem, we expect that Alice cannot find $\\alpha$. So, how can she successfully respond to the challenge without knowing $\\alpha$?'
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "Here's the natural way to do it: Alice simply chooses some $\\gamma \\in \\mathbb{F}_p^*$, and responds with $(a',b') =$ $(\\gamma \\cdot a, \\gamma \\cdot b)$. In this case, we have:"
        }
      </ArticleTitle>
      <ArticleTitle isMath className="text-center">
        {
          "$b'=$ $\\gamma \\cdot b =$ $\\gamma \\alpha \\cdot a =$ $\\alpha (\\gamma \\cdot a) =$ $\\alpha \\cdot a'$,"
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {"so indeed $(a^{'}, b^{'})$ is an $\\alpha$-pair as required."}
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "Note that if Alice responds using this strategy, she knows the ratio between $a$ and $a^{'}$. That is, she knows the coefficient $\\gamma$ such that $a^{'} = \\gamma \\cdot a$."
        }
      </ArticleTitle>
      <ArticleTitle>
        {'The Knowledge of Coefficient Assumption'}
        <ContrastLink id="snark3_2_item" href="#snark3_2">
          [2]
        </ContrastLink>
        {' (KCA) states that this is always the case, namely:'}
      </ArticleTitle>
      <ArticleTitle isMath>
        <span className="font-[500]">KCA:</span>
        {
          " If Alice returns a valid response $(a^{'}, b^{'})$ to Bob's challenge $(a, b)$ with non-negligible probability over Bob's choices of $a, \\alpha$, then she knows $\\gamma$ such that $a^{'} = \\gamma \\cdot a$."
        }
      </ArticleTitle>
      <ArticleTitle>The KC Test and Assumption will be important tools in Part 4.</ArticleTitle>
      <Typography variant="h4">What Does "Alice Knows" Mean Exactly?</Typography>
      <ArticleTitle isFirst isMath>
        {
          'You may wonder how we can phrase the KCA in precise mathematical terms; specifically, how do we formalize the notion that "Alice knows $\\gamma$" in a mathematical definition?'
        }
      </ArticleTitle>
      <ArticleTitle>
        {
          "This is done roughly as follows: We say that, in addition to Alice, we have another party which we call Alice's Extractor. Alice's Extractor has access to Alice's inner state."
        }
      </ArticleTitle>
      <ArticleTitle isMath>
        {
          "We then formulate the KCA by saying that whenever Alice successfully responds with an $\\alpha$-pair $(a^{'}, b^{'})$, Alice's Extractor output $\\gamma$ such that $a^{'} = \\gamma \\cdot a.$"
        }
        <ContrastLink id="snark3_3_item" href="#snark3_3">
          [3]
        </ContrastLink>
      </ArticleTitle>
      <a href="snark3_1_item">
        <ArticleTitle id="snark3_1" isMath>
          {
            '[1]$\\mathbb{F}_p^*$ denotes the non-zero elements of $\\mathbb{F}_p$. It is the same as $\\mathbb{Z}_p^*$ described in Part 1.'
          }
        </ArticleTitle>
      </a>
      <a href="snark3_2_item">
        <ArticleTitle id="snark3_2">
          {
            '[2]This is typically called the Knowledge of Exponent Assumption in the literature, as traditionally it was used for groups written multiplicatively.'
          }
        </ArticleTitle>
      </a>
      <a href="snark3_3_item">
        <ArticleTitle id="snark3_3" isMath>
          {
            '[3]The fully formal definition needs to give the Extractor "a little slack" and states instead that the probability that Alice responds successfully but the Extractor does not output such $\\gamma$ is negligible.'
          }
        </ArticleTitle>
      </a>
    </div>
  );
}
