import { Course } from '@/components/CourseCard/CourseCard';
import { mappedByOption } from '@/utils/mappedByOption';
import type { NextApiRequest, NextApiResponse } from 'next';
import { COURSES_ENDPOINT } from './endpoints';

const getCourses = async (req: NextApiRequest, res: NextApiResponse<Course[]>) => {
  const response = await fetch(COURSES_ENDPOINT);
  const courses = await response.json();

  if (courses) {
    return mappedByOption(courses.data, 'attributes');
  }
};

export default getCourses;
