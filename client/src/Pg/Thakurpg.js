import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Thakurpgreview from "../AccomodationReviews/Thakurpgreview";
import './Thakur.css'

const Thakurpg = () => {
  const [data, setData] = useState([]);

  const getFetchData = async () => {
    const data = await axios.get("/dataofthakurpg");

    console.log(data.data.data);
    if (data.data.success) {
      setData(data.data.data);
    }
  };
  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div>
      <Navbar />
      
      {data.map((e, i) => {
        return (
          <>
            {/* <p>Name of Accomodation : {e.accomodation}</p>
            <p>Total No of Rooms : {e.rooms}</p>
            <p>Rent of Boys : {e.rentB}</p>
            <p>Vacant Rooms: {e.vacant}</p> */}

            <div>
      <div className="Thakurcontainer">
        <div className="Thakursection">
          <div className="Thakurdescription">
            <h1>Thakur PG</h1>
          </div>
        </div>

        <div className="Thakursection">
          <div className="Thakurcard">
            <div className="Thakurcard-body">
              <div className="Thakurimage-container">
                <img src="/images/Thakur1.jpg" alt="PG Image" />
                <img src="/images/Thakur2.jpg" alt="PG Image" />
                <img src="/images/Thakur3.jpg" alt="PG Image" />
                
              </div>

              <div className="Thakurroom-description">
                <p>
                  The {e.accomodation} is a 4-storey building located near the ABVGIET
                  Campus. This PG provides all the necessary facilities and is
                  exclusively for GIRLS.
                </p>

                <h3>Rooms Description:</h3>

                <ul>
                  <li>
                    Single room with 2-3 beds, 2-3 Godrej Almirah, and an attached
                    washroom. 3 tables and 3 chairs.
                  </li>
                  <li>Total Number of Rooms : {e.rooms}</li>
                </ul>
              </div>

              <div className="Thakurfacilities">
                <h3>Facilities:</h3>
                <ul>
                  <li>Fans</li>
                  <li>Electricity bill (included in the rent)</li>
                  <li>24/7 water supply</li>
                  <li>
                    Beds provided (according to the number of room partners)
                  </li>
                  <li>Sun-facing rooms available</li>
                  <li>
                    Essential items provided ( mattress, bucket,
                    bathing jug, wiper, toilet brush, Harpic, Vim at mess)
                  </li>
                  <li>Cameras at each floor</li>
                  <li>Solar water system/ electric rod available</li>
                  <li>Washing machine available</li>
                 
                  {/* <li>Generator facility, especially during exam time</li> */}
                </ul>
                <br />
                <h3>Rules: </h3>
                <ul>
                  <li>
                    Smoking is usually prohibited within the premises of the
                    accommodation. This rule is in place to maintain a healthy
                    and smoke-free environment.
                  </li>
                  <li>
                    Consumption of alcohol is restricted or prohibited within
                    the PG facility. This is often done to maintain a safe and
                    peaceful living environment.
                  </li>
                  <li>
                    Establishing quiet hours ensures that all residents have the
                    opportunity to study and rest without disturbance during
                    specified times.
                  </li>
                  <li>
                    Rules regarding guests, especially overnight guests, may be
                    in place to ensure the safety and security of all residents.
                  </li>
                  <li>
                    Residents may be required to contribute to the cleanliness
                    and maintenance of common areas such as the kitchen, living
                    room, and bathrooms.
                  </li>
                  <li>
                    Rs. 5000 security deposit taken at admission and returned
                    upon leaving the PG
                  </li>
                  <li>
                    Gate Opening Time is 06:30 A.M. Gate Closing Time is 09:00
                    P.M.
                    <br />
                    After the gate is closed, no one will be allowed inside the
                    pg.
                  </li>
                </ul>
                <br />
                <p>
                  <strong>Number of Vacancies available: </strong> {e.vacant}
                </p>
                <p>
                  <strong>Rent Description:</strong> Rent for the building is
                  fixed at Rs. {e.rentB} (non-sharable between roommates)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Thakursection">
          <h2 style={{ textAlign: "center", paddingTop: "5px" }}>Mess Menu</h2>
          <table>
            <tr>
              <th>Day</th>
              <th>Breakfast (08:00 A.M. to 09:30 A.M.)</th>
              <th>Lunch (12:45 P.M. to 02:00 P.M.)</th>
              <th>Tea/Snacks (05:00 P.M. to 06:00 P.M.)</th>
              <th>Dinner (08:00 P.M. to 09:30 P.M.)</th>
            </tr>
            <tr>
              <td>Monday</td>
              <td>Aloo Zeera, Chapati, Dahi, Achaar, Tea</td>
              <td>Rajma, Rice</td>
              <td>Tea, Biscuit</td>
              <td>Mix Veg, Rice, Chapati, Dal, Milk</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>Aloo Parantha, Butter, Achaar, Tea</td>
              <td>White Chane, Rice</td>
              <td>Tea, Sandwich</td>
              <td>Rice, Sabzi, Chapati, Moong Dal, Sweet, Milk</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>Simple Parantha, Dahi, Achaar, Tea</td>
              <td>Black Chane, Rice</td>
              <td>Tea, Foolbadi</td>
              <td>Fried Rice, Sabzi, Gravy, Milk</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>Aloo Zeera, Chapati, Dahi, Achaar, Tea</td>
              <td>Kadi, Rice</td>
              <td>Tea, Biscuit</td>
              <td>Rice, Chapati, Chana Dal, Sabzi, Sweet, Milk</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>Aloo Parantha, Butter, Achaar, Tea</td>
              <td>Rajma, Rice</td>
              <td>Tea, Sandwich</td>
              <td>Chinese Bhel, Chapati, Manchurian Gravy, Sabzi, Milk</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>Mooli Parantha, Butter, Achaar, Tea</td>
              <td>Black Chane, Rice</td>
              <td>Tea, Biscuit</td>
              <td>Rice, dal, Chapati, paneer, Milk</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Chole Bhature, Tea</td>
              <td>Raita,Pulaw</td>
              <td>Tea, Maggi/Paasta/Macroni</td>
              <td>Rice, Moong Dal, aloo sabzi, Chapati</td>
            </tr>
          </table>
        </div>

        <div className="Thakursection">
        <Thakurpgreview />
        </div>

        <div className="Thakurfooter">
          <p>
            <h3>Contact Details</h3>
            Owner's Name: Mr.Baldev Singh
            <br />
            Owner's Number: 8679370576(Also available on WhatsApp)
            <br />
          </p>
          <p style={{ textAlign: "center" }}>
            &copy; 2023 Thakur PG. All rights reserved.
          </p>
        </div>
      </div>
    </div>
          </>
        );
      })}
      
    </div>
  );
};

export default Thakurpg;
