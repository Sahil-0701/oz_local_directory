import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "../validationSchemas/job";
import { useNavigate } from "react-router";

function NewJob() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });

      function onSubmit(data) {
        console.log(data);
      }

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}  className="bg-white p-4 rounded flex flex-col gap-3">
            <h3 className="font-semibold text-indigo-500 text-2xl">Add new job</h3>
            <div>
                <input {...register('author')} className="col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5  px-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-indigo-600  sm:text-sm/6" type="text" id="author"  placeholder="Author" />
                {errors.author && (<span className='text-sm text-red-500'>{errors.author.message}</span>)}
            </div>

            <div>
                <textarea {...register('description')} className="col-start-1 h-[200px] row-start-1 block w-full rounded-md bg-white py-2.5  px-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-indigo-600  sm:text-sm/6"  placeholder="Description"></textarea>
                {errors.description && (<span className='text-sm text-red-500'>{errors.description.message}</span>)}
            </div>
            <input type='submit' value="Add" className=" mt-8 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      />

        </form>
        <div className='flex justify-end'>
                <button onClick={() => navigate(-1)}  className='text-blue-600 text-sm'>Back</button>
            </div>
        </>
    )
}

export default NewJob;