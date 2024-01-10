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
for (let i = 0; i < 100; i++) {
  mockElements.push(`第${i + 1}个元素`)
};

const elementMap:Map<number, { element: any, index: number }> = new Map()

const LimitLine = () => {
  const elementContainerRef: any = useRef(null);
  const [elementContainerHeight, setElementContainerHeight] = useState<number | 'initial'>('initial');
  const [minLineLastElementIndex, setMinLineLastElementIndex] = useState<null | number>(null);
  const [maxLineLastElementIndex, setMaxLineLastElementIndex] = useState<null | number>(null);
  const minLine = 2, maxLine = 4;
  // const [elementMap, setElementMap] = useState<Map<number, { element: any, index: number }>>(new Map())

  /**
   * @description: 隐藏minLine行或者maxLine行之外的元素
   * @param {number} line minLine 或者maxLine
   * @return {*}
   */
  const hideMoreElement = (line: number) => {
    console.log('隐藏元素');
    const elementMapArr = Array.from(elementMap);
    const firstLineBottom = elementMapArr[0][0]; // 获取第1行的bottom
    const LineBottom = elementMapArr[1][0]; // 获取第2行的bottom
    const oneLineHeight = LineBottom - firstLineBottom;
    setElementContainerHeight(oneLineHeight * line);
  };


  /**
   * @description: 添加展开或者收起按钮
   * @param {number} line
   * @param {*} type
   * @return {*}
   */
  const addButton = (line: number, type: 'expand' | 'close') => {
    const elementMapArr = Array.from(elementMap);
    const itemIndex = elementMapArr[line - 1][1].index;
    if (type === 'expand') {
      setMinLineLastElementIndex(itemIndex);
    }else{
      setMaxLineLastElementIndex(itemIndex);
      console.log('itemIndex',itemIndex)
    }

  };


  /**
   * @description: 点击展开按钮
   * @return {*}
   */
  const handleExpand = () => {
    console.log('点击展开按钮', elementMap);
    // 1.展示隐藏内容:重新设置 elementContainerHeight
    if (elementMap.size > maxLine) {
      // 1.1 超过四行，在四行最后一个元素添加收起按钮，并且隐藏多余元素
      hideMoreElement(maxLine);
      addButton(maxLine,'close');// 添加展开按钮
    } else {
      // 1.2 不足四行：直接在最后一个元素后添加收起按钮

    }
    // 2.移除展开按钮
    setMinLineLastElementIndex(null);

  };

  /**
   * @description: 点击关闭按钮
   * @return {*}
   */
  const handleClose =()=>{
    hideMoreElement(minLine);// 隐藏两行之后的内容
    addButton(minLine,'expand');// 添加展开按钮
  };

  useEffect(() => {
    const children = elementContainerRef?.current?.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const { bottom } = child.getBoundingClientRect();
      elementMap.set(bottom, { element: child, index: i }); // 记录每一行最后一个元素element，元素的下标index(setMinLineLastElementIndex)。同一行bottom相同会一直覆盖；
      if (elementMap.size > maxLine) { // 只记录到最多展示的那一行+1(用来判断是否超过了四行)即可，因为后边的都不展示；
        break;
      };
    };
    if (elementMap.size > 2) {
      hideMoreElement(minLine);// 隐藏两行之后的内容
      addButton(minLine,'expand');// 添加展开按钮
    };
  }, []);

  return <>
    <QuestionLayout {...questionLayoutProps} />
    <section style={{ height: elementContainerHeight + 'px', overflow: 'hidden' }} ref={elementContainerRef} className={styles.mockElementContainer}>
      {mockElements.map((item, i) => <section key={item} className={`${styles.mockElement} ${styles['mockElementBg' + i]}  ${(minLineLastElementIndex === i||maxLineLastElementIndex === i) && styles.minLineLastElement}`}>
        <>
          {item}
          {minLineLastElementIndex === i && <Button onClick={handleExpand} className={styles.expandButton}>展开</Button>}
          {maxLineLastElementIndex === i && <Button onClick={handleClose} className={styles.expandButton}>收起</Button>}
        </>
      </section>)}
    </section>
  </>
};

export default LimitLine