import MovieList from "@/components/MovieList";
import { useSession,getSession, signOut}  from "next-auth/react";
import { NextPageContext } from "next";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import useMovieList from "@/hooks/useMovieList";

export async function getServerSideProps(context: NextPageContext){

  const session = await getSession(context);

  if(!session){
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
export default function Home() {
  const {data: movies = []} = useMovieList();

 return (
    <>
     <Navbar/>
     <Billboard/>
     <div className="pb-40">
      <MovieList title="Trending" data={movies}/>
     </div>
    </>
  );
}
