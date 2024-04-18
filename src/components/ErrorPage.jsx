import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="bg-mall flex-1 bg-cover gap flex flex-col justify-center items-center gap-5 h-screen">
      <div className="bg-zinc-800/50 p-3 rounded-sm shadow-sm flex justify-center items-center flex-col gap-5">
        <h1 className="text-4xl font-bold text-slate-100">404 Not Found</h1>
        <p className="text-lg text-zinc-50">The page you are looking for does not exist.</p>
        <Link to='/' className="bg-violet-600 p-2 rounded-lg text-violet-50 hover:bg-violet-500 active:bg-violet-700">Link to Home</Link>
      </div>
    </main>
  );
}

export default ErrorPage;