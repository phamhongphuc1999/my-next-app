import { THESIS_CLASS } from 'src/configs/constance';
import {
  ContentType,
  ThesisChapterType,
  ThesisCiteIndexType,
  ThesisEquationType,
  ThesisFigureType,
  ThesisSectionType,
  ThesisSubsectionType,
} from 'src/global';

function buildCiteContent(element: HTMLElement, result: { [key: string]: ThesisCiteIndexType }) {
  const items = element.querySelectorAll(`.${THESIS_CLASS.cite}`);
  let _counter = 1;
  for (const item of items) {
    const id = item.id;
    result[id] = { id, index: _counter++ };
  }
}

function buildSubsectionContent(
  element: Element,
  counter: string | number,
  result: { [key: string]: ThesisSubsectionType }
) {
  const items = element.querySelectorAll(`.${THESIS_CLASS.subsection}`);
  let _counter = 1;
  for (const item of items) {
    const id = item.id;
    const titleComponent = element.querySelector(`#${id}_title`);
    const title = titleComponent?.textContent;
    result[id] = { id, title: title || '', index: `${counter}.${_counter++}` };
  }
}

function _buildSectionContent(
  element: Element,
  counter: string | number,
  result: { [key: string]: ThesisSectionType },
  subsectionResult: { [key: string]: ThesisSubsectionType }
) {
  const items = element.querySelectorAll(`.${THESIS_CLASS.section}`);
  let _counter = 1;
  for (const item of items) {
    const id = item.id;
    const titleComponent = element.querySelector(`#${id}_title`);
    const title = titleComponent?.textContent;
    const _index = `${counter}.${_counter++}`;
    buildSubsectionContent(item, _index, subsectionResult);
    result[id] = { id, title: title || '', index: _index };
  }
}

function buildFigureContent(
  element: Element,
  counter: string | number,
  result: { [key: string]: ThesisFigureType }
) {
  const items = element.querySelectorAll(`.${THESIS_CLASS.figure}`);
  let _counter = 1;
  for (const item of items) {
    const id = item.id;
    const titleComponent = element.querySelector(`#${id}_title`);
    const title = titleComponent?.textContent;
    result[id] = { id, title: title || '', index: `${counter}.${_counter++}` };
  }
}

function buildEquationContent(
  element: Element,
  counter: string | number,
  result: { [key: string]: ThesisEquationType }
) {
  const items = element.querySelectorAll(`.${THESIS_CLASS.equation}`);
  let _counter = 1;
  for (const item of items) {
    const id = item.id;
    result[id] = { id, index: `${counter}.${_counter++}` };
  }
}

function buildChapterContent(container: HTMLElement): ContentType {
  const elements = container.querySelectorAll(`.${THESIS_CLASS.chapter}`);
  const chapters: { [key: string]: ThesisChapterType } = {};
  const sections: { [key: string]: ThesisSectionType } = {};
  const subsections: { [key: string]: ThesisSubsectionType } = {};
  const figures: { [key: string]: ThesisFigureType } = {};
  const equations: { [key: string]: ThesisEquationType } = {};
  const cites: { [key: string]: ThesisCiteIndexType } = {};
  let counter = 1;
  for (const element of elements) {
    const id = element.id;
    const titleComponent = element.querySelector(`#${id}_title`);
    const title = titleComponent?.textContent;

    _buildSectionContent(element, counter, sections, subsections);
    buildFigureContent(element, counter, figures);
    buildEquationContent(element, counter, equations);
    chapters[id] = { id, title: title || '', index: counter++ };
  }
  buildCiteContent(container, cites);
  return { chapters, sections, subsections, figures, equations, cites };
}

function buildSectionContent(container: HTMLElement): ContentType {
  const elements = container.querySelectorAll(`.${THESIS_CLASS.section}`);
  const sections: { [key: string]: ThesisSectionType } = {};
  const subsections: { [key: string]: ThesisSubsectionType } = {};
  const figures: { [key: string]: ThesisFigureType } = {};
  const equations: { [key: string]: ThesisEquationType } = {};
  const cites: { [key: string]: ThesisCiteIndexType } = {};
  let counter = 1;
  for (const element of elements) {
    const id = element.id;
    const titleComponent = element.querySelector(`#${id}_title`);
    const title = titleComponent?.textContent;

    buildSubsectionContent(element, counter, subsections);
    buildFigureContent(element, counter, figures);
    buildEquationContent(element, counter, equations);
    sections[id] = { id, title: title || '', index: counter++ };
  }
  buildCiteContent(container, cites);
  return { chapters: {}, sections, subsections, figures, equations, cites };
}

export function buildContent(containerId: string, firstLevel: 'chapter' | 'section') {
  const container = document.getElementById(containerId);
  if (container) {
    return firstLevel == 'chapter'
      ? buildChapterContent(container)
      : buildSectionContent(container);
  }
}
