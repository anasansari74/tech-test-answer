import { useState } from "react";
import styled from "styled-components";

import { IoIosArrowForward } from "react-icons/io";

const FormDiv = styled.div`
  display: grid;
  place-items: center;

  width: 80%;

  margin: 3rem auto;
  padding: 1rem;

  background: linear-gradient(90deg, gainsboro, lightgrey);

  border-radius: 20px;

  position: relative;
  padding-bottom: 2rem;

  form {
    display: grid;
    grid-template-columns: 2fr 1fr;

    place-items: center;

    width: 100%;
  }

  .input-fields {
    display: grid;
    width: 100%;
    place-items: center;
    grid-auto-flow: rows;
  }

  .first-six {
    display: grid;
    grid-template-columns: repeat(2, auto);

    width: 100%;
  }
  .last-one {
    width: -webkit-fill-available;
  }

  .inputs {
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 5px;
    border: none;
  }

  button {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 0.5rem;

    font-size: small;

    place-items: center;

    padding: 1rem 2rem;
    border-radius: 10px;

    color: white;
    font-weight: bold;
    background-color: dodgerblue;

    position: absolute;

    bottom: -25.5px;

    border: none;
  }

  button: hover {
    box-shadow: 2px 1px 1px white;
    cursor: pointer;
  }

  .check-boxes-div p {
    margin: 1rem;
    font-weight: bold;
  }

  .check-boxes {
    margin: 1rem;
    display: grid;
    gap: 1rem;
  }

  @media screen and (max-width: 820px) {
    form {
      grid-template-columns: 1fr 1fr;
    }
    .first-six {
      grid-template-columns: auto;
    }
  }
`;

export default function Form() {
  // Saving the information entered by the user into the state
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState("");
  const [postCode, setPostCode] = useState("");
  const [education, setEducation] = useState("");
  const [subjects, setSubjects] = useState([
    { id: 1, value: "Accounting & Business", isChecked: false },
    { id: 2, value: "Healthcare Management", isChecked: false },
    { id: 3, value: "Psychology", isChecked: false },
    { id: 4, value: "Data Science", isChecked: false },
    { id: 5, value: "Digital Security", isChecked: false },
    { id: 6, value: "Other", isChecked: false },
  ]);

  //function to toggle if the "to study" checkboxes are selected or not
  const handleCheckboxChecked = e => {
    //Createing a new array called subject to avoid mutation
    let subject = subjects;
    subject.forEach(subj => {
      //Toggling the value of "isChecked" in the new array
      if (subj.value === e.target.value) subj.isChecked = e.target.checked;
    });
    // Replacing the old array with the new one
    setSubjects(subject);
  };
  return (
    <FormDiv>
      <h1>Tell Us More</h1>
      <form action="mailto:anas27ag74@gmail.com">
        <div className="input-fields">
          <div className="first-six">
            <input
              className="inputs"
              type="text"
              name="fname"
              placeholder="First Name"
              onChange={e => setFname(e.target.value)}
              required
            />
            <input
              className="inputs"
              type="text"
              name="lname"
              placeholder="Last Name"
              onChange={e => setLname(e.target.value)}
              required
            />
            <input
              className="inputs"
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              className="inputs"
              type="tel"
              name="number"
              placeholder="Phone Number"
              onChange={e => setNumber(e.target.value)}
              required
            />
            <select
              className="inputs"
              name="country"
              onChange={e => setCountry(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Country
              </option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
            </select>

            <input
              className="inputs"
              type="text"
              name="postCode"
              placeholder="Postal Code"
              onChange={e => setPostCode(e.target.value)}
              required
            />
          </div>

          <select
            className="inputs last-one"
            type="text"
            name="education"
            onChange={e => setEducation(e.target.value)}
            required
          >
            <option value="" disabled>
              Education Level
            </option>
            <option value="GCSE">GCSE</option>
            <option value="A-Level">A-Level</option>
            <option value="Degree">Degree</option>
          </select>
        </div>
        <div className="check-boxes-div">
          <p>I would like to study:</p>
          <div className="check-boxes">
            {subjects.map(subject => {
              return (
                <li type="none" key={subject.id}>
                  <input
                    type="checkbox"
                    name={subject.value}
                    value={subject.value}
                    onChange={e => {
                      handleCheckboxChecked(e);
                    }}
                  />
                  <label htmlFor={subject.value} className="ml-2">
                    {subject.value}
                  </label>
                </li>
              );
            })}
          </div>
        </div>
        <button type="submit">
          Submit <IoIosArrowForward />
        </button>
      </form>
    </FormDiv>
  );
}
