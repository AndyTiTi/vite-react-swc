import useLogging from "./hooks/useLogging";

const Home = () => {
  useLogging();
  return <div>I will log every time I render!</div>;
}

export default Home