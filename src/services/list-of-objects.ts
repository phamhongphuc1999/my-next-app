import { THESIS_CLASS } from 'src/configs/constance';
import { ThesisFigureType } from 'src/global';

export function buildListOfFigures(elements: NodeListOf<Element>) {
  let elementCounter = 1;
  const result: Array<Array<ThesisFigureType>> = [];
  for (const element of elements) {
    const items = element.querySelectorAll(`.${THESIS_CLASS.figure}`);
    let figureCounter = 1;
    const _result: Array<ThesisFigureType> = [];
    for (const item of items) {
      const id = item.id;
      const titleComponent = element.querySelector(`#${id}_title`);
      const title = titleComponent?.textContent;
      _result.push({ id, title: title || '', index: `${elementCounter}.${figureCounter++}` });
    }
    elementCounter++;
    result.push(_result);
  }
  return result;
}
