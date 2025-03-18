import { HashtagIcon, LockClosedIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router';
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../validationSchemas/register';
import { sendCodeAction } from '../actions/authActions';

function Register() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    
      const onSubmit = (data) => console.log(data)

      async function sendCode() {
        const email = watch('email');
        if(email) {
            const data = await sendCodeAction(email);
            console.log({data});
        }
      }


    return (
        <>
            <p className="text-sm text-gray-500">
                One DeepSeek account is all you need to access to all DeepSeek services.
            </p>

            <p className="text-sm text-gray-500">
                Only email registration is supported in your region.
            </p>


            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                <div>
                    <input className="col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5  px-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-indigo-600  sm:text-sm/6" type="text" id="email" {...register("email")} placeholder="Email address" />
                    {errors.email && (<span className='text-sm text-red-500'>{errors.email.message}</span>)}
                </div>

                <div>
                <div className="mt-2 grid grid-cols-1">
                    <input
                        id="password"
                        {...register("password")}
                        type="password"
                        placeholder="Password"
                        className="col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5 pl-10 pr-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                    />
                    <LockClosedIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                    />
                </div>
                {errors.password && (<span className='text-sm text-red-500'>{errors.password.message}</span>)}
                </div>

                <div className="mt-2 grid grid-cols-1">
                    <input
                        id="confirm_password"
                        {...register("confirm_password")}
                        type="password"
                        placeholder="Confirm Password"
                        className="col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5 pl-10 pr-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                    />
                    <LockClosedIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                    />
                </div>


                <div className='flex gap-3'>
                    <div>
                        <div className="mt-2 grid grid-cols-1">
                            <input
                                id="code"
                                {...register("code")}
                                type="text"
                                placeholder="Code"
                                className="col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5 pl-10 pr-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                            />
                            <HashtagIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                            />
                        </div>
                    </div>

                    <button onClick={() => sendCode()} className='rounded-md mt-2 bg-white px-3  text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 w-[100px] hover:bg-gray-100'>Send code</button>

                </div>


                <div>
                    <label  className="text-xs flex items-start gap-1.5 text-gray-900"> 
                        <input className='mt-1' type='checkbox' id='confirm' {...register("confirm")}  value={true} /> 
                        <span className='leading-[1.6]'>I confirm that I have read, consent and agree to DeepSeek's  
                        <a href="https://cdn.deepseek.com/policies/en-US/deepseek-terms-of-use.html" target="_blank" rel="noopener noreferrer" className='text-blue-600' > Terms of Use</a> and 
                        <a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer" className='text-blue-600'> Privacy Policy</a>
                     </span>
                     </label>
                </div>


                <input type='submit' value="Sign up" className=" mt-8 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      />


            </form>

            <div className='flex justify-between'>
                <Link to="/forgot-password" className='text-blue-600 text-sm'>Forgot Password?</Link>
                <Link to="/login" className='text-blue-600 text-sm'>Log in</Link>
            </div>

        </>
    );
}

export default Register;