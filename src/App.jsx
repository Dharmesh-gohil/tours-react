import { useEffect } from "react";
import { useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours,setTours]=useState([])

  const removeTour = (id) => { 
    let newTour = tours.filter((tour) => tour.id !== id)
    setTours(newTour)
  }

  const fetchTours = async () => { 
        setIsLoading(true)
    try {
        const response = await fetch(url)
        const tours = await response.json()
        console.log(tours)
        setTours(tours)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchTours()
   },[])

  if (isLoading) { 
    return <main>
      <Loading/>
    </main>
  }

  if (tours.length === 0) { 
    return <main>
      <div className="title">
        <h2>No Tours left</h2>
        <button type="button" style={{marginTop:"2.5rem"}} className="btn" onClick={fetchTours}>Refresh</button>
      </div>
    </main>
  }
  
  return <main>
    <Tours tours={tours} removeTour={removeTour} />
    </main>
};
export default App;
