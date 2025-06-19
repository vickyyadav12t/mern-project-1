import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p className="rd-xl">Welcome to the Home Page of your MERN Vite project.</p>
      <Link to="/login"><button>Go to login </button></Link>
    </div>
  );
}

export default Home;
