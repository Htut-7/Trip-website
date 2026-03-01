import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './Blogdetails.css';

function Blogdetails(){

    const params=useParams();
    let url='http://localhost:3005/trips/'+params.id;
    let {data:trip, loading, error}=useFetch(url);

    return(
      <div className="blog-container">
        {loading &&<p>loading...</p>}
        {error &&<p>{error}</p>}
        <h3>{trip.title}</h3>
        <img src={trip.image} alt={trip.title}/>
        <p>Price - {trip.price} </p>
        <span>{trip.category}</span>
        <p>{trip.description}</p>
        <Link to='/trips'>Back</Link>
    </div>
    );
}

export default Blogdetails;