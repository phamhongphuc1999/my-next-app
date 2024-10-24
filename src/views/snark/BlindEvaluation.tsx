/* eslint-disable react/no-unescaped-entities */
import { Typography } from '@mui/material';
import ArticleBox from 'src/components/box/ArticleBox';

export default function BlindEvaluation() {
  return (
    <div className="mt-[1rem]">
      <ArticleBox>
        In this post, we introduce the concept of "blind evaluation" of a polynomial, which is
        crucial for SNARK (Succinct Non-Interactive Argument of Knowledge) constructions. Before
        diving into blind evaluation, let's recall some basics of polynomials and homomorphic hiding
        (HH), which was discussed in Part 1.
      </ArticleBox>
      <Typography variant="h4">Polynomials and Linear Combinations</Typography>
    </div>
  );
}
