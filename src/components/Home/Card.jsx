// src/components/Card.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [jobOpenings, setJobOpenings] = useState([]);

  useEffect(() => {
    // Fetch job openings from the API
    axios
      .get("https://coursify-gql7.onrender.com/api/jobOpenings")
      .then((response) => {
        setJobOpenings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job openings:", error);
      });
  }, []);

  return (
    <>
      {jobOpenings.map((job) => (
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          key={job.id}
          className="card w-96 bg-white shadow-xl mx-auto my-16"
        >
          <figure>
            <img src={job.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {job.position}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{job.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{job.location}</div>
              <div className="badge badge-outline">Remote</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
