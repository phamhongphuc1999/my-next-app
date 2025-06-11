'use client';

/* eslint-disable react/no-unescaped-entities */
import { AppArticle } from 'src/components/box/ArticleBox';
import RefLink from 'src/components/Thesis/RefLink';
import SectionBox from 'src/components/Thesis/SectionBox';

export default function Section1_2() {
  return (
    <SectionBox id="section1_2" title="Our Contributions">
      <AppArticle isFirst>
        The primary contributions of the thesis are to introduce account abstraction and related
        concepts. After that, this thesis proposes the implementation of a zero-knowledge recovery
        mechanism for account abstraction based on ERC-4337. Specifically, our contributions will be
        presented in Chapter <RefLink toId="chapter_chapter4" mode="chapter" /> and Chapter{' '}
        <RefLink toId="chapter_chapter5" mode="chapter" />, including:
      </AppArticle>
    </SectionBox>
  );
}
