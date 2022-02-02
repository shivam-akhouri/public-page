import React, { useState } from "react";
import { Modal } from "bootstrap";

export default function RegisterModal() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    dob: "",
    gender: "",
    language: "",
    state: "",
    area: "",
    residential_address: "",
    pincode: "",
    city: "",
  });
  const [isDelhi, setIsDelhi] = useState(true);
  const [err1, setErr1] = useState({
    valid: true,
    msg: "",
  });
  const [err2, setErr2] = useState({
    valid: true,
    msg: "",
  });
  const [err3, setErr3] = useState({
    valid: true,
    msg: "",
  });
  const [err4, setErr4] = useState({
    valid: true,
    msg: "",
  });
  const [err5, setErr5] = useState({
    valid: true,
    msg: "",
  });
  const [err6, setErr6] = useState({
    valid: true,
    msg: "",
  });
  const [err7, setErr7] = useState({
    valid: true,
    msg: "",
  });
  const [err8, setErr8] = useState({
    valid: true,
    msg: "",
  });
  const [err9, setErr9] = useState({
    valid: true,
    msg: "",
  });
  const [err10, setErr10] = useState({
    valid: true,
    msg: "",
  });
  const [err11, setErr11] = useState({
    valid: true,
    msg: "",
  });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value);
    if(name === "state" && value === 'Delhi'){
      setIsDelhi(false);
    }
    setRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  React.useEffect(() => {
    function minMaxFinder(){
      const thisYear = new Date();
      const endDate = thisYear.getFullYear()-18;
      const startDate = endDate - 17;
      setStartDate(startDate+"-01-01");
      setEndDate(endDate+"-12-31");
    }
    minMaxFinder()
  })
  

  async function sendSMS(data) {
    await fetch("https://pragyanpandey05.pythonanywhere.com/api/webmessage", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "message sent") {
          console.log("Succ");
        } else {
          console.log("Failed to send message");
        }
      })
      .catch((e) => console.log(e));
  }

  function validation() {
    let valid = true;

    //name
    if (!register.name.match(/^[a-zA-Z][A-Za-z\s]*$/)) {
      valid = false;
      if (register.name === "") {
        setErr1({ ...err1, valid: false });
        setErr1({ ...err1, msg: "Name cannot be empty!" });
      } else {
        setErr1({ ...err1, valid: false });
        setErr1({ ...err1, msg: "Invalid name!" });
      }
    }

    //email
    if (
      !register.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    ) {
      valid = false;
      if (register.email === "") {
        setErr2({ ...err2, valid: false });
        setErr2({ ...err2, msg: "Email cannot be empty!" });
      } else {
        setErr2({ ...err2, valid: false });
        setErr2({ ...err2, msg: "Invalid Email!" });
      }
    }

    //phone number
    if (
      !register.number.match(
        /\d{10}/
      )
    ) {
      valid = false;
      if (register.number === "") {
        setErr3({ ...err3, valid: false });
        setErr3({ ...err3, msg: "Phone number cannot be empty!" });
      } else {
        setErr3({ ...err3, valid: false });
        setErr3({ ...err3, msg: "Invalid Phone Number! Enter only 10 digit mobile number" });
      }
    }

    //password
    if (register.password.length < 8) {
      valid = false;
      setErr4({ ...err4, valid: false });
      setErr4({ ...err4, msg: "Passwords need to be at least 8 characters!" });
    }

    //gender
    if (register.gender === "") {
      valid = false;
      setErr5({ ...err5, valid: false });
      setErr5({ ...err5, msg: "Gender cannot be empty!" });
    }

    //language
    if (register.language === "") {
      valid = false;
      setErr6({ ...err6, valid: false });
      setErr6({ ...err6, msg: "Language cannot be empty!" });
    }

    //dob
    if (register.dob === "") {
      valid = false;
      setErr7({ ...err7, valid: false });
      setErr7({ ...err7, msg: "Date of Birth cannot be empty!" });
    }

    //City
    if (!register.city.match(/^[a-zA-Z][A-Za-z\s]*$/)) {
      valid = false;
      if (register.city === "") {
        setErr8({ ...err8, valid: false });
        setErr8({ ...err8, msg: "City cannot be empty!" });
      } else {
        setErr8({ ...err8, valid: false });
        setErr8({ ...err8, msg: "Invalid city!" });
      }
    }

    //address
    if (register.residential_address === "") {
      valid = false;
      setErr9({ ...err9, valid: false });
      setErr9({ ...err9, msg: "Residential Address cannot be empty!" });
    }

    //state
    if (register.state === "") {
      valid = false;
      setErr10({ ...err10, valid: false });
      setErr10({ ...err10, msg: "State cannot be empty!" });
    }

    //pincode
    if (register.pincode.length !== 6) {
      valid = false;
      setErr11({ ...err11, valid: false });
      setErr11({ ...err11, msg: "Invalid pincode!" });
    }

    return valid;
  }

  function dataFormatter() {
    let x =
      register.dob.substring(8, 10) +
      "/" +
      register.dob.substring(5, 7) +
      "/" +
      register.dob.substring(0, 4);
    console.log(x);
    return x;
  }

  async function userRegister() {
    setErr1({ ...err1, valid: true });
    setErr1({ ...err1, msg: "" });
    setErr2({ ...err2, valid: true });
    setErr2({ ...err2, msg: "" });
    setErr3({ ...err3, valid: true });
    setErr3({ ...err3, msg: "" });
    setErr4({ ...err4, valid: true });
    setErr4({ ...err4, msg: "" });
    setErr5({ ...err5, valid: true });
    setErr5({ ...err5, msg: "" });
    setErr6({ ...err6, valid: true });
    setErr6({ ...err6, msg: "" });
    setErr7({ ...err7, valid: true });
    setErr7({ ...err7, msg: "" });
    setErr8({ ...err8, valid: true });
    setErr8({ ...err8, msg: "" });
    setErr9({ ...err9, valid: true });
    setErr9({ ...err9, msg: "" });
    setErr10({ ...err10, valid: true });
    setErr10({ ...err10, msg: "" });
    setErr11({ ...err11, valid: true });
    setErr11({ ...err11, msg: "" });

    let item = {
      name: register.name,
      email: register.email,
      number: register.number,
      password: register.password,
      dob: dataFormatter(),
      gender: register.gender,
      language: register.language,
      state: register.state,
      area: register.area,
      residential_address: register.residential_address,
      pincode: register.pincode,
      city: register.city,
    };
    console.log(item);
    const result = validation();
    if (result) {
      await fetch("https://pragyanpandey05.pythonanywhere.com/api/register1", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.status === "entry not added") {
            alert("Please fill in all fields");
          }
          if (json.status === "user already exists") {
            alert("User already exists");
          }
          if (json.status === "entry added") {
            const data = {
              number: register.number,
            };
            setRegister({
              name: "",
              email: "",
              number: "",
              password: "",
              dob: "",
              gender: "",
              language: "",
              state: "",
              area: "",
              residential_address: "",
              pincode: "",
              city: "",
            });
            document.getElementById("registerModalDismiss").click();

            let successModal = new Modal(
              document.getElementById("successModal")
            );
            successModal.show();
            sendSMS(data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  return (
    <>
      <div
        className="modal fade"
        id="registmodal"
        tabIndex="-1"
        data-bs-backdrop="static"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <form
            className="modal-content shadow border-0 rounded-0 overflow-hidden modal-shape"
            autoComplete="off"
          >
            <img
              src={"images/shape/blue-circle.svg"}
              className="shape mdshape-1"
              alt="shape-5"
            />
            <img
              src={"images/shape/lightblue-diamond.svg"}
              className="shape mdshape-2"
              alt="shape-6"
            />
            <img
              src={"images/shape/yellow-circle.svg"}
              className="shape mdshape-3"
              alt="shape-5"
            />
            <img
              src={"images/shape/lightyellow-diamond.svg"}
              className="shape mdshape-4"
              alt="shape-6"
            />
            <div className="modal-header d-block position-relative">
              <h4 className="modal-title fw-bold text-blue">
                Registration form
              </h4>
              <div className="small d-block text-blue">
                Fill in your details
              </div>
              <button
                type="button"
                id="registerModalDismiss"
                className="btn-close top-0 end-0 mt-3 me-3 position-absolute"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row px-lg-5">
                <div className="col-lg-6 mb-3">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="m_fullname"
                      placeholder="Full Name"
                      name="name"
                      onChange={handleChange}
                      value={register.name}
                    />
                    <label htmlFor="m_fullname">Full Name</label>
                  </div>
                  <label htmlFor="m_fullname" style={{ color: "red" }}>
                    {err1.msg}
                  </label>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="m_email"
                      placeholder="Email ID"
                      name="email"
                      onChange={handleChange}
                      value={register.email}
                    />
                    <label htmlFor="m_email">Email ID</label>
                  </div>
                  <label htmlFor="m_fullname" style={{ color: "red" }}>
                    {err2.msg}
                  </label>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="m_phonenumber"
                      placeholder="Phone Number"
                      name="number"
                      onChange={handleChange}
                      value={register.number}
                    />
                    <label htmlFor="m_phonenumber">Phone Number</label>
                  </div>
                  <label htmlFor="m_fullname" style={{ color: "red" }}>
                    {err3.msg}
                  </label>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="m_password"
                      placeholder="Set Password"
                      autoComplete="new-password"
                      name="password"
                      onChange={handleChange}
                      value={register.password}
                    />
                    <label htmlFor="m_password">Set Password</label>
                  </div>
                  <label htmlFor="m_fullname" style={{ color: "red" }}>
                    {err4.msg}
                  </label>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="m_gender"
                      name="gender"
                      onChange={handleChange}
                      value={register.gender}
                    >
                      <option value="" disabled>
                        -
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <label htmlFor="m_gender">Gender</label>
                  </div>
                  <label htmlFor="m_fullname" style={{ color: "red" }}>
                    {err5.msg}
                  </label>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="m_language"
                      name="language"
                      onChange={handleChange}
                      value={register.language}
                    >
                      <option value="" disabled>
                        -
                      </option>
                      <option value="Hindi">Hindi</option>
                      <option value="English">English</option>
                      <option value="Punjabi">Punjabi</option>
                      <option value="urdu">Urdu</option>
                      <option value="others">others</option>
                    </select>
                    <label htmlFor="m_classname">Select Language</label>
                  </div>
                  <label htmlFor="m_fullname" style={{ color: "red" }}>
                    {err6.msg}
                  </label>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-floating">
                    <input
                      type="date"
                      className="form-control"
                      id="m_dob"
                      placeholder="Date of Birth"
                      name="dob"
                      onChange={handleChange}
                      value={register.dob}
                      min={startDate}
                      max={endDate}
                    />
                    <label htmlFor="m_dob">Date of Birth</label>
                  </div>
                  <label htmlFor="m_fullname" style={{ color: "red" }}>
                    {err7.msg}
                  </label>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="m_city"
                      placeholder="City"
                      name="city"
                      onChange={handleChange}
                      value={register.city}
                    />
                    <label htmlFor="m_city">City</label>
                  </div>
                  <label htmlFor="m_fullname" style={{ color: "red" }}>
                    {err8.msg}
                  </label>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="m_raddress"
                      placeholder="Residential Address"
                      name="residential_address"
                      onChange={handleChange}
                      value={register.residential_address}
                    />
                    <label htmlFor="m_raddress">Residential Address</label>
                  </div>
                  <label htmlFor="m_fullname" style={{ color: "red" }}>
                    {err9.msg}
                  </label>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="m_state"
                      name="state"
                      onChange={handleChange}
                      value={register.state}
                    >
                      <option value="" disabled>
                        -
                      </option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Andaman and Nicobar Islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Dadar and Nagar Haveli">
                        Dadar and Nagar Haveli
                      </option>
                      <option value="Daman and Diu">Daman and Diu</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Ladakh">Ladakh</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jammu and Kashmir">
                        Jammu and Kashmir
                      </option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                    </select>
                    <label htmlFor="m_state">State</label>
                  </div>
                  <label htmlFor="m_fullname" style={{ color: "red" }}>
                    {err10.msg}
                  </label>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="m_pincode"
                      placeholder="Pincode"
                      name="pincode"
                      onChange={handleChange}
                      value={register.pincode}
                      maxLength="6"
                      min="100000"
                      max="999999"
                      required
                    />
                    <label htmlFor="m_pincode">Pincode</label>
                  </div>
                  <label htmlFor="m_fullname" style={{ color: "red" }}>
                    {err11.msg}
                  </label>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="m_area"
                      name="area"
                      onChange={handleChange}
                      disabled={isDelhi}
                      value={register.area}
                    >
                      <option value="" disabled>
                        -
                      </option>
                      <option value="Nerela">Nerela</option>
                      <option value="Burari">Burari</option>
                      <option value="Timarpur">Timarpur</option>
                      <option value="Adarsh Nagar">Adarsh Nagar</option>
                      <option value="Badli">Badli</option>
                      <option value="Rithala">Rithala</option>
                      <option value="Bawana">Bawana</option>
                      <option value="Mundka">Mundka</option>
                      <option value="Kirari">Kirari</option>
                      <option value="Sultanpur Majra">Sultanpur Majra</option>
                      <option value="Nangloi Jat">Nangloi Jat</option>
                      <option value="Mangol Puri">Mangol Puri</option>
                      <option value="Rohini">Rohini</option>
                      <option value="Shalimar Bagh">Shalimar Bagh</option>
                      <option value="Shakur Basti">Shakur Basti</option>
                      <option value="Tri Nagar">Tri Nagar</option>
                      <option value="Wazirpur">Wazirpur</option>
                      <option value="Model Town">Model Town</option>
                      <option value="Sadar Bazar">Sadar Bazar</option>
                      <option value="Chandni Chowk">Chandni Chowk</option>
                      <option value="Matia Mahal">Matia Mahal</option>
                      <option value="Ballimaran">Ballimaran</option>
                      <option value="Karol Bagh">Karol Bagh</option>
                      <option value="Patel Nagar">Patel Nagar</option>
                      <option value="Moti Nagar">Moti Nagar</option>
                      <option value="Madipur">Madipur</option>
                      <option value="Rajouri Garden">Rajouri Garden</option>
                      <option value="Hari Nagar">Hari Nagar</option>
                      <option value="Tilak Nagar">Tilak Nagar</option>
                      <option value="Janakpuri">Janakpuri</option>
                      <option value="Vikaspuri">Vikaspuri</option>
                      <option value="Uttam Nagar">Uttam Nagar</option>
                      <option value="Dwarka">Dwarka</option>
                      <option value="Matiala">Matiala</option>
                      <option value="Najafgarh">Najafgarh</option>
                      <option value="Bijwasan">Bijwasan</option>
                      <option value="Palam">Palam</option>
                      <option value="Delhi Cantonment">Delhi Cantonment</option>
                      <option value="Rajinder Nagar">Rajinder Nagar</option>
                      <option value="New Delhi">New Delhi</option>
                      <option value="Jangpura">Jangpura</option>
                      <option value="Kasturba Nagar">Kasturba Nagar</option>
                      <option value="Malviya Nagar">Malviya Nagar</option>
                      <option value="R K Puram">R K Puram</option>
                      <option value="Mehrauli">Mehrauli</option>
                      <option value="Chhatarpur">Chhatarpur</option>
                      <option value="Deoli">Deoli</option>
                      <option value="Ambedkar Nagar">Ambedkar Nagar</option>
                      <option value="Sangam Vihar">Sangam Vihar</option>
                      <option value="Greater Kailash">Greater Kailash</option>
                      <option value="Kalkaji">Kalkaji</option>
                      <option value="Tughlkabad">Tughlkabad</option>
                      <option value="Badarpur">Badarpur</option>
                      <option value="Okhla">Okhla</option>
                      <option value="Trilokpuri">Trilokpuri</option>
                      <option value="Kondli">Kondli</option>
                      <option value="Patparganj">Patparganj</option>
                      <option value="Laxmi Nagar">Laxmi Nagar</option>
                      <option value="Vishwas Nagar">Vishwas Nagar</option>
                      <option value="Krishna Nagar">Krishna Nagar</option>
                      <option value="Gandhi Nagar">Gandhi Nagar</option>
                      <option value="Shahdara">Shahdara</option>
                      <option value="Seemapuri">Seemapuri</option>
                      <option value="Rohtas Nagar">Rohtas Nagar</option>
                      <option value="Seelampur">Seelampur</option>
                      <option value="Ghonda">Ghonda</option>
                      <option value="Babarpur">Babarpur</option>
                      <option value="Gokalpur">Gokalpur</option>
                      <option value="Mustafabad">Mustafabad</option>
                      <option value="Karawal Nagar">Karawal Nagar</option>
                    </select>
                    <label htmlFor="m_state">Area</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center border-0">
              <button
                type="button"
                className="btn btn-primary px-4 mb-4"
                onClick={userRegister}
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modale */}

      <div
        className="modal fade show1 d-block1"
        id="successModal"
        aria-hidden="true"
        tabIndex="-1"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div
            className="modal-content shadow border-0 rounded-0 pb-4 px-4 px-md-5 pb-md-5"
            style={{
              background: `url(${"images/success.jpg"})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
            }}
          >
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body text-center p-4 p-md-5 rounded-12"
              style={{
                border: "3px solid #eee",
              }}
            >
              <h2 className="display-4 fw-bold text-blue2">Congratulations</h2>
              <h2 className="display-5 fw-medium text-blue2">
                for registering as a mentor.
              </h2>
              <div className="pt-3 pt-md-4">
                <p className="h5 mb-3">Download the app to continue...</p>
                <a href="https://play.google.com/store/apps/details?id=com.basil.manishsisodiasmentorshipprogramme">
                  <img
                    src={"images/google-play.jpg"}
                    className="rounded-6 w-140px"
                    alt="google-play"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/desh-ke-mentor/id1583406462"
                  className="m-2"
                >
                  <img
                    src={"images/app-store.jpg"}
                    className="rounded-6 w-140px"
                    alt="app-store"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
