import { Navigate, useNavigate } from "react-router";
import schema from "../validationSchemas/search";
import { Link } from "react-router";
import { useState } from "react";
import roomsData from "../data/rooms"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function Rooms() {
    let[allRooms, setAllRooms] = useState(roomsData);
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    const onSubmit = (data) => {
        const query = data.query;
        const filteredRooms = roomsData.filter(
          (room) => room.author.includes(query) || room.description.includes(query)
        );
        setAllRooms(filteredRooms);
      };
  return (
    <>
      
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-center">All Rooms</h2>
        <Link
          to="/romms/new"
          className="  rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add new room
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="search"
          placeholder="Search rooms..."
          id="query"
          {...register("query")} className="col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5  px-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-indigo-600  sm:text-sm/6"
        />
         {errors.query && (
          <span className="text-sm text-red-500">{errors.query.message}</span>
        )}
      </form>
      {allRooms.map((room) => (
        <div
          key={room.id}
          className="bg-white p-4 rounded hover:bg-gray-50 hover:shadow"
        >
          <div className="flex justify-between items-center">
            <h3
              onClick={() => navigate(`/rooms/${room.id}`)}
              className="font-semibold text-indigo-500 text-2xl"
            >
              {room.author}
            </h3>

            <div className="flex gap-2">
              <Link
                to={`/rooms/${room.id}/edit`}
                className="text-sm text-gray-400"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteroom(room.id)}
                className="text-sm  text-red-400"
              >
                Delete
              </button>
            </div>
          </div>
          <p onClick={() => navigate(`/rooms/${room.id}`)}>{room.description}</p>
        </div>
      ))}
    </>
  );
}
export default Rooms;
