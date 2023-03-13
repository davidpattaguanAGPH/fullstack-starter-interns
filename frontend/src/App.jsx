import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:4000");
      console.log(result);
      setData(result.data.data);
    };

    fetchData();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
