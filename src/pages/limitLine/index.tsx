import { useRef } from "react";
import QuestionLayout from "../../components/QuestionLayout";
import { IQuestionLayoutProps } from "../../components/QuestionLayout";
import styles from './style.module.scss';

const questionLayoutProps: IQuestionLayoutProps = {
  description: '存在未知数量的元素：',
  requirements: ['最少展示两行元素，当元素超过两行时添加展开按钮。',
    '点击展开按钮，最多展示四行，超过四行则不展示',
    '添加收起按钮，点击收起时展示两行。']
};

const mockElements:string[] = [];
for(let i=0;i<100;i++){
  mockElements.push(`第${i+1}个元素`)
};

const LimitLine = () => {
  return <>
    <QuestionLayout {...questionLayoutProps} />
    <section className={styles.mockElementContainer}>
      {mockElements.map((item,i)=><section key={item} className={`${styles.mockElement} ${styles['mockElementBg'+i]}`}>{item}</section>)}
    </section>
  </>
};

export default LimitLine