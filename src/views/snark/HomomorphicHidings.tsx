/* eslint-disable react/no-unescaped-entities */
import { Typography } from '@mui/material';
import ArticleBox from 'src/components/box/ArticleBox';

export default function HomomorphicHidings() {
  return (
    <div className="mt-[1rem]">
      <ArticleBox>
        Constructions of zk-SNARKs involve a careful combination of several ingredients; fully
        understanding how these ingredients all work together can take a while.
      </ArticleBox>
      <ArticleBox>
        Among these components, <span className="font-[500]">Homomorphic Hiding (HH)</span> plays a
        particularly prominent role. In this article, we will explain what an HH is, why it's
        useful, and how it's constructed.
      </ArticleBox>
      <Typography variant="h4">Homomorphic Hiding (HH)</Typography>
      <ArticleBox>
        An HH, denoted as <span className="italic">E(x)</span>, is a function applied to a number x
        x that satisfies the following properties:
      </ArticleBox>
      <ArticleBox mode="div">
        <ArticleBox>
          1. For most values of x, given <span className="italic">E(x)</span>, it is difficult to
          recover x.
        </ArticleBox>
        <ArticleBox isMath={true}>
          2. Different inputs lead to different outputs—so if {'$x \\neq y$'}, then{' '}
          {'$ E(x) \\neq E(y) $'}
        </ArticleBox>
      </ArticleBox>
    </div>
  );
}
