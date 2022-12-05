import { useState, useEffect, ChangeEvent } from 'react';
import useSWR from 'swr';
import { useDebounce } from 'usehooks-ts';

// Services
import CourseServices from '../services/course.services';

// Components
import Layout from '../components/Layout'
import { CourseListCard } from '../components/Courses/CourseListCard'
import { CreateCourseModal } from '../components/Courses/CreateCourseModal';

// icons
import { PageDescriptor } from '../components/PageDescriptor';
import useAuthStore from '../contexts/useAuthStore';


const Courses = () => {
  const token = useAuthStore(state => state.token);
  const getToken = useAuthStore(async state => await state.getToken);

  // Fetch all courses
  const { data, error } = useSWR(
    ["http://127.0.0.1:8888/api/courses/", token],
    CourseServices.getAllCourses
  );

  // // local data clone
  // const [localData, setLocalData] = useState(data);
  // const [search, setSearch] = useState<string>("");
  // const debouncedSearch = useDebounce<string>(search, 250);

  // // Simple search change
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setSearch(event.target.value)
  // }

  // // Client side filtering
  // useEffect(() => {
  //   if (debouncedSearch !== '') {
  //     setLocalData(localData.filter((d: any) => d.title.toLowerCase().includes(debouncedSearch.toLowerCase()) == true));
  //   } else {
  //     setLocalData(data);
  //   }
  // }, [debouncedSearch, localData, data]);

  // useSWR built in loaders
  if (error) return <p>"An error has occurred."</p>;
  if (!data) return <p>"Loading..."</p>;

  return (
    <Layout meta="Course overview">

      {/** Page Descriptor */}
      <PageDescriptor
        title="Courses"
        desc="All courses are verified by 2 experts and validated by an Educado Admin. Allegedly."
      />

      {/** Page Navbar */}
      <div className="navbar bg-none p-6">
        <div className="flex-1">
          {/** Create new courses */}
          <CreateCourseModal />
        </div>

        <div className="flex-none">
          <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <div className=" relative ">
              <input
                type="text"
                className="input input-bordered rounded w-full max-w-xs"
                placeholder="Looking for a course?"
                onChange={() => console.log("Heyo")}
              />
            </div>
            <button className="btn btn-primary space-x-2">
              Filter
            </button>
          </form>
        </div>
      </div>

      {/** Page content real data from backend */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-6">
        {data.data.map((course: any, key: number) => <CourseListCard course={course} key={key} />)}
      </div>
    </Layout>
  )
}

export default Courses

