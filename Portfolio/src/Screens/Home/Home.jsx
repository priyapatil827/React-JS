import { useState, useEffect } from "react"
import About from "../../Components/About/About"
import axios from "axios";
import Project from "../../Components/Projects/Project";
import Contact from "../../Components/Contact/Contact";

export default function Home() {

  const [githubData, setGithubData] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchApi().then((data) => setGithubData(data));
    fetchRepos().then((data) => setRepos(data));
  }, []);

  const fetchApi = async () => {
    const res = await axios.get("https://api.github.com/users/priyapatil827")
    return res.data;
  }

  const fetchRepos = async () => {
    const res = await axios.get("https://api.github.com/users/priyapatil827/repos")
    return res.data;
  }


  return (
    <>
      <About user={githubData} />
      <Project repos={repos} />
      <Contact/>
    </>
  )
}
