import React from "react";
import { TiMediaPlay } from "react-icons/ti";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/router";
import useInfoModal from "@/hooks/useInfoModal";
import { IoChevronDownSharp } from "react-icons/io5";
interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {

    const router = useRouter();

    const {openModal} = useInfoModal();
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        src={data.thumbnailUrl}
        alt="thumbnail"
        className="
        cursor-pointer
        object-cover
        transition
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-300
        w-full
        h-[12vw]
        
        "
      />
      <div
        className="
        opacity-0
        transition
        absolute
        top-0
        delay-300
        w-full
        scale-0
        group-hover:scale-110
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:opacity-100
        sm:visible
        invisible
        z-10
        duration-200
        "
      >
        <img
          src={data.thumbnailUrl}
          alt=""
          className="

cursor-pointer
object-cover
transition
duration
shadow-xl
rounded-t-md
w-full
h-[12vw]
"
        />
        <div
          className="
z-10
bg-zinc-800
p-2
lg:p-4
absolute
w-full
transition
shadow-md
rounded-b-md
"
        >
            <div className="flex flex-row items-center gap-3">

                <div onClick={() => {router.push(`/watch/${data?.id}`)}} className="
                cursor-pointer
                w-6
                h-6
                lg:w-10
                lg:h-10
                bg-white
                rounded-full
                flex
                justify-center
                items-center
                transition
                hover:bg-neautral-300
                ">
<TiMediaPlay size={30} />
                </div>
                <FavoriteButton movieId={data?.id}/>
                <div 
                onClick={() => openModal(data?.id)}
                className="
                cursor-pointer
                ml-auto
                group/item
                w-6
                h-6
                lg:w-10
                lg:h-10
                border-2
                rounded-full
                justify-center
                flex
                items-center
                transition
                hover:border-neutral-400
                border-white
                ">

    <IoChevronDownSharp size={30} className="text-white group-hover/item:text-neutral-500" />
                </div>
            </div>
            <p className="text-green-500 font-semibold mt-4">
                new <span className="text-white">2023</span>
            </p>
            <div className="flex flex-row mt-4 gap-2 items-center">
                <p className="text-white text-[-10px] lg:text-sm">{data.duration}</p>
            </div>

            <div className="flex flex-row mt-4 gap-2 items-center">
                <p className="text-white text-[-10px] lg:text-sm">{data.genre}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
