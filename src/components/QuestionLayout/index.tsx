import styles from './style.module.scss';
import '../../index.css';
import { Button } from 'antd';

export interface IQuestionLayoutProps {
  description: string;
  requirements: string[]
}
const QuestionLayout: React.FC<IQuestionLayoutProps> = (props: IQuestionLayoutProps) => {
  return <>
    <h1>题目描述</h1>
    <Button type='dashed' className={styles.viewAnswer}>查看代码</Button>
    <section>
      {props.description}
      <ul>
        {props.requirements.map((item,index) => <li key={index}>{item}</li>)}
      </ul>
    </section>
  </>
};

export default QuestionLayout