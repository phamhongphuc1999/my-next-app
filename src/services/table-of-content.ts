import { appendixIndex, THESIS_CLASS } from 'src/configs/constance';
import {
  TableOfContentType,
  ThesisAppendixType,
  ThesisFigureType,
  ThesisObjectType,
  ThesisTableType,
} from 'src/global';
import { buildListOfFigures, buildListOfTables } from './list-of-objects';

function buildSubsectionTableOfContent(elements: NodeListOf<Element>): TableOfContentType {
  const result: TableOfContentType = [];
  let counter = 1;
  for (const element of elements) {
    const id = element.id;
    const titleComponent = element.querySelector(`#${id}_title`);
    const title = titleComponent?.textContent;
    result.push({ id, title: title || '', index: counter++, type: 'subsection', content: [] });
  }
  return result;
}

function buildSectionTableOfContent(elements: NodeListOf<Element>): TableOfContentType {
  const result: TableOfContentType = [];
  let counter = 1;
  for (const element of elements) {
    const id = element.id;
    const titleComponent = element.querySelector(`#${id}_title`);
    const title = titleComponent?.textContent;
    const subsectionElements = element.querySelectorAll(`.${THESIS_CLASS.subsection}`);
    const subsections = buildSubsectionTableOfContent(subsectionElements);
    result.push({
      id,
      title: title || '',
      index: counter++,
      type: 'section',
      content: subsections,
    });
  }
  return result;
}

function buildChapterTableOfContent(elements: NodeListOf<Element>): TableOfContentType {
  const result: TableOfContentType = [];
  let counter = 1;
  for (const element of elements) {
    const id = element.id;
    const titleComponent = element.querySelector(`#${id}_title`);
    const title = titleComponent?.textContent;
    const sectionElements = element.querySelectorAll(`.${THESIS_CLASS.section}`);
    const sections = buildSectionTableOfContent(sectionElements);
    result.push({ id, title: title || '', index: counter++, type: 'chapter', content: sections });
  }
  return result;
}

function buildSameChapterContent(container: HTMLElement) {
  const appendixes = container.querySelectorAll(`.${THESIS_CLASS.appendix}`);
  const appendixResult: Array<ThesisAppendixType> = [];
  let counter = 0;
  for (const appendix of appendixes) {
    const id = appendix.id;
    const titleComponent = appendix.querySelector(`#${id}_title`);
    const title = titleComponent?.textContent;
    appendixResult.push({ id, title: title || '', index: appendixIndex[counter++] });
  }
  const abstract = container.querySelector(`.${THESIS_CLASS.abstract}`);
  const acknowledge = container.querySelector(`.${THESIS_CLASS.acknowledgement}`);
  const reference = container.querySelector(`.${THESIS_CLASS.reference}`);
  return {
    appendixes: appendixResult,
    abstract: Boolean(abstract),
    acknowledge: Boolean(acknowledge),
    reference: Boolean(reference),
  };
}

export function buildTableOfContent(containerId: string, firstLevel: 'chapter' | 'section') {
  const container = document.getElementById(containerId);
  let content: TableOfContentType = [];
  let figures: Array<Array<ThesisFigureType>> = [];
  let tables: Array<Array<ThesisTableType>> = [];
  let _result: {
    appendixes: Array<ThesisObjectType>;
    abstract: boolean;
    acknowledge: boolean;
    reference: boolean;
  } = {
    appendixes: [],
    abstract: false,
    acknowledge: false,
    reference: false,
  };
  if (container) {
    _result = buildSameChapterContent(container);
    if (firstLevel == 'chapter') {
      const elements = container.querySelectorAll(`.${THESIS_CLASS.chapter}`);
      content = buildChapterTableOfContent(elements);
      figures = buildListOfFigures(elements);
      tables = buildListOfTables(elements);
    } else {
      const elements = container.querySelectorAll(`.${THESIS_CLASS.section}`);
      content = buildSectionTableOfContent(elements);
      figures = buildListOfFigures(elements);
      tables = buildListOfTables(elements);
    }
  }
  return { content, figures, tables, ..._result };
}
