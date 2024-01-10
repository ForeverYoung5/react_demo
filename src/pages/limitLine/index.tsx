import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import QuestionLayout from "../../components/QuestionLayout";
import { IQuestionLayoutProps } from "../../components/QuestionLayout";
import styles from './style.module.scss';

const questionLayoutProps: IQuestionLayoutProps = {
  description: '存在未知数量的元素：',
  requirements: ['最少展示两行元素，当元素超过两行时添加展开按钮。',
    '点击展开按钮，最多展示四行，超过四行则不展示',
    '添加收起按钮，点击收起时展示两行。']
};

const mockElements: string[] = [];
for (let i = 0; i < 22; i++) {
  mockElements.push(`第${i}个元素`);
};

const elementMap: Map<number, { rect: any, index: number, lineHeight: number }> = new Map()

const LimitLine = () => {
  const elementContainerRef: any = useRef(null);
  const [elementContainerHeight, setElementContainerHeight] = useState<string | 'initial'>('initial');
  const [minLineLastElementIndex, setMinLineLastElementIndex] = useState<null | number>(null);
  const [maxLineLastElementIndex, setMaxLineLastElementIndex] = useState<null | number>(null);
  const [canShowAll, setCanShowAll] = useState(false);
  const [elementWidth, setElementWidth] = useState<string>();
  const minLine = 2, maxLine = 4;

  /**
   * @description: 隐藏minLine行或者maxLine行之外的元素
   * @param {number} line minLine 或者maxLine
   * @return {*}
   */
  const hideMoreElement = (line: number) => {
    const elementMapArr = Array.from(elementMap);
    let height = 0;
    for (let i = 0; i < line; i++) {
      const item = elementMapArr[i][1];
      height += item.lineHeight;
    };
    setElementContainerHeight(height + 'px');
  };


  /**
   * @description: 添加展开或者收起按钮
   * @param {number} line number | null(元素不足maxLine)
   * @param {*} type
   * @return {*}
   */
  const addButton = (line: number | null, type: 'expand' | 'close') => {
    const elementMapArr = Array.from(elementMap);
    let itemIndex: number;
    if (typeof line === 'number') {
      itemIndex = elementMapArr[line - 1][1].index;
    } else {
      // 兼容元素总数不超过四行的情况：展示全部内容
      setElementContainerHeight('initial');
      // 判断最后一个元素是否占完了最后一行，占完了就替换为展开按钮，还有空间的话在最后添加展开按钮
      const beforeLastLineElement = elementMapArr[elementMapArr.length - 2][1];//倒数第二行的最后一个元素
      const lastLineElement = elementMapArr[elementMapArr.length - 1][1];//倒数第一行的最后一个元素
      itemIndex = lastLineElement.index;
      if (beforeLastLineElement.rect.right > lastLineElement.rect.right) {
        // 最后一行还有空间
        setCanShowAll(true);
        setElementWidth(beforeLastLineElement.rect.width);
      } else {
        // 最后一行刚好用完
        setCanShowAll(false);
      };
    };
    if (type === 'expand') {
      setMinLineLastElementIndex(itemIndex);
    } else {
      setMaxLineLastElementIndex(itemIndex);
    }
  };


  /**
   * @description: 点击展开按钮
   * @return {*}
   */
  const handleExpand = () => {
    // 1.展示隐藏内容:重新设置 elementContainerHeight
    if (elementMap.size > maxLine) {
      // 1.1 超过四行，在四行最后一个元素添加收起按钮，并且隐藏多余元素
      hideMoreElement(maxLine);
      addButton(maxLine, 'close');// 添加展开按钮
    } else {
      // 1.2 不足四行：直接在最后一个元素后添加收起按钮
      addButton(null, 'close');
    }
    // 2.移除展开按钮
    setMinLineLastElementIndex(null);
  };

  /**
   * @description: 点击关闭按钮
   * @return {*}
   */
  const handleClose = () => {
    hideMoreElement(minLine);// 隐藏两行之后的内容
    addButton(minLine, 'expand');// 添加展开按钮
    // 移除收起按钮
    setMaxLineLastElementIndex(null);
  };

  useEffect(() => {
    const children = elementContainerRef?.current?.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const rect = child.getBoundingClientRect();
      if (elementMap.has(rect.top)) {
        // @ts-ignore
        const _lineHeight = elementMap.get(rect.top).lineHeight;
        elementMap.set(rect.top, { rect, index: i, lineHeight: Math.max(rect.height,_lineHeight) });
      } else {
        elementMap.set(rect.top, { rect, index: i, lineHeight: rect.height }); // 记录每一行最后一个元素element，元素的下标index(setMinLineLastElementIndex)。同一行top相同会一直覆盖；lineHeight:行高即这一行所有元素中最大的height
      }
      if (elementMap.size > maxLine) { // 只记录到最多展示的那一行+1(用来判断是否超过了四行)即可，因为后边的都不展示；
        break;
      };
    };
    if (elementMap.size > 2) {
      hideMoreElement(minLine);// 隐藏两行之后的内容
      addButton(minLine, 'expand');// 添加展开按钮
    };
  }, []);

  return <>
    <QuestionLayout {...questionLayoutProps} />
    <section style={{ height: elementContainerHeight, overflow: 'hidden' }} ref={elementContainerRef} className={styles.mockElementContainer}>
      {mockElements.map((item, i) => <section key={item} style={{ height: i % 2 ? '200px' : '300px' }}
        className={`${styles.mockElement} ${styles['mockElementBg' + i]}  ${(minLineLastElementIndex === i || (!canShowAll && maxLineLastElementIndex === i)) && styles.minLineLastElement}`}>
        <div>
          {item}
          {minLineLastElementIndex === i && <Button onClick={handleExpand} className={styles.expandButton}>展开</Button>}
          {!canShowAll && maxLineLastElementIndex === i && <Button onClick={handleClose} className={styles.expandButton}>收起</Button>}
        </div>
      </section>)}
      {canShowAll && <div style={{ width: elementWidth, display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Button onClick={handleClose} style={{}}>收起</Button></div>}
    </section>
  </>
};

export default LimitLine