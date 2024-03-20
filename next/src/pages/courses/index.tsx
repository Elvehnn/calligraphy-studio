import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import CourseCard, { Course } from '@/components/CourseCard/CourseCard';
import Header from '@/components/Header/Header';

export interface IHome {
  courses: Course[];
}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:1337/api/courses');
  const courses = await response.json();

  if (courses) {
    const mapped = courses.data.map((item: Record<string, unknown>) => item.attributes);

    return {
      props: { courses: mapped },
    };
  }

  return { props: { courses: courses.data } };
};

export default function Home({ courses }: IHome) {
  console.log(courses);

  return (
    <>
      <Head>
        <title>Сalligraphy studio</title>
        <meta name="description" content="Katerina Kiseleva's Сalligraphy studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${styles.main} `}>
        {/* <div className={styles.description}>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div> */}

        <div className={styles.grid}>
          {courses.map((course) => (
            <CourseCard course={course} key={course.title} />
          ))}
        </div>
      </main>
    </>
  );
}
