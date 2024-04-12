import { Link } from "react-router-dom";

const Home = () => (
  <main className="bg-mall flex-1 bg-cover gap flex flex-col justify-center items-center gap-5">
    <div className="bg-zinc-800/50 p-3 rounded-sm shadow-sm flex justify-center items-center flex-col gap-5">
      <h1 className="text-4xl font-bold text-slate-100">The one place where you can get anything!</h1>
      <p className="text-lg text-zinc-50">This is a mock shopping cart created using tailwind CSS and React</p>
    </div>
    <Link to='shop' className="bg-violet-700 text-violet-50 p-3 text-xl rounded-md hover:bg-violet-500 active:bg-violet-800">Shop Now!</Link>
  </main>
);

export default Home;