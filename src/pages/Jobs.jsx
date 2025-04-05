import { useForm } from "react-hook-form";
import jobsData from "../data/jobs";
import schema from "../validationSchemas/search";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

function Jobs() {
  let [allJobs, setAllJobs] = useState(jobsData);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const query = data.query;
    const filteredJobs = jobsData.filter(
      (job) => job.author.includes(query) || job.description.includes(query)
    );
    setAllJobs(filteredJobs);
  };

  function deleteJob(id) {
    const filteredJobs = allJobs.filter((job) => job.id !== id);
    setAllJobs(filteredJobs);
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-center">All Jobs</h2>
        <Link
          to="/jobs/new"
          className="  rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add new job
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("query")}
          className="col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5  px-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-indigo-600  sm:text-sm/6"
          type="search"
          placeholder="Search job..."
          id="query"
        />
        {errors.query && (
          <span className="text-sm text-red-500">{errors.query.message}</span>
        )}
      </form>

      {allJobs.map((job) => (
        <div
          key={job.id}
          className="bg-white p-4 rounded hover:bg-gray-50 hover:shadow"
        >
          <div className="flex justify-between items-center">
            <h3
              onClick={() => navigate(`/jobs/${job.id}`)}
              className="font-semibold text-indigo-500 text-2xl"
            >
              {job.author}
            </h3>

            <div className="flex gap-2">
              <Link
                to={`/jobs/${job.id}/edit`}
                className="text-sm text-gray-400"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteJob(job.id)}
                className="text-sm  text-red-400"
              >
                Delete
              </button>
            </div>
          </div>
          <p onClick={() => navigate(`/jobs/${job.id}`)}>{job.description}</p>
        </div>
      ))}
    </>
  );
}

export default Jobs;
