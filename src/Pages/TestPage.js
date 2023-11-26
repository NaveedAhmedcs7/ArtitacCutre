// ExampleComponent.js
import React, { useEffect, useState } from 'react';
import { fetchData, postData } from '../HttpService/HttpService'
import axios from 'axios';

const ExampleComponent = () => {
  const [data, setData] = useState(null);
  const [postDataResponse, setPostDataResponse] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchDataFromApi();
  }, []);

  const [mydata, setMyData] = useState({
      menuName: '',
      menuQty: '',
      menuImage: "",
      servingPerson: '',
      price: '',
  })

  const handleInput = (event) => {
    setMyData ({... mydata, [event.target.id]: event.target.value})
  }


  const handlePostData = async () => {



    try {
      const result = await postData( "/Restaurants/CreateRestaurantsMenu",mydata);
      setPostDataResponse(result);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      {/* Render your component using the fetched data
      {data ? (
        <p>Data: {data}</p>
      ) : (
        <p>Loading...</p>
      )} */}

      
<form>
      <h2> Department </h2>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">

<select className='sect'>
    <option>
    restaurantId
    </option>
    {/* {
        mydata.map((post) => {
            const {id} = post;
            return <option key={id}><h2>{id}</h2></option>
        }
       
         
        )
    } */}
{/* {mydata.map((post) => {
      const {id} = post;
      return <option key={id}><h2>{id}</h2></option>
})} */}
</select>

            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2"> menuName</label>
                <input type="text" className="form-control" onChange={handleInput} id='menuName'
                   />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1"> menuQty</label>
                <input type="text" className="form-control" onChange={handleInput} id='menuQty'
                   />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">menuImage</label>
                <input type="text" className="form-control" onChange={handleInput} id='menuImage'
                 />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">servingPerson</label>
                <input type="number" className="form-control" onChange={handleInput} id='servingPerson'
                 />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">price</label>
                <input type="text" className="form-control" onChange={handleInput} id='price'
               />
            </div>
        </div>
    </div>
</div>

<button type='submit' className='Tbtn'>Save</button>
</form>   




      {/* Example of posting data */}
      <button onClick={handlePostData}>Post Data</button>
      {postDataResponse && <p>Post Response: {postDataResponse}</p>}
    </div>
  );
};

export default ExampleComponent;
