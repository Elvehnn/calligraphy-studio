import { memo } from 'react';
import Image from 'next/image';
import styles from './_style.module.css';

export type Course = {
  title: string;
  shortDescription: string;
  coverLink: string;
  price: string;
};
interface ICoursesCardProps {
  course: Course;
}

const CourseCard = ({ course }: ICoursesCardProps) => {
  const { title, shortDescription, coverLink, price } = course;
  const myLoader = ({ src }: Record<string, unknown>) => {
    return `${src}`;
  };

  return (
    <a href="#" className={styles.card} target="_blank" rel="noopener noreferrer">
      <Image loader={myLoader} src={coverLink} alt={title} width={200} height={150} priority />
      <h2>{title}</h2>
      <p>{shortDescription}</p>
      <h3>
        {price} <span>-&gt;</span>
      </h3>
    </a>
  );
};

export default memo(CourseCard);
