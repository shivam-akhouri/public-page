import React, {useState, useEffect} from "react";


export default function Register(props){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    

    // to remove 
    const [register, setRegister] = useState({
        name: "",
        email: "",
        number: "",
        role: "",
        organization: "",
        contribution: "",
        organizationName: '',
      });
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


      const [entered, setEntered] = useState(0);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name,value);
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
          // setStartDate(startDate+"-01-01");
          // setEndDate(endDate+"-12-31");
        }
        minMaxFinder()
      })
    
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
        }else{
          setErr1({msg: "", valid: true});
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
        }else{
          setErr2({msg: "", valid: true});
        }
    
        //phone number
        if (
          !register.number.match(
            /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
          )
        ) {
          valid = false;
          if (register.number === "") {
            setErr3({ ...err3, valid: false });
            setErr3({ ...err3, msg: "Phone number cannot be empty!" });
          } else {
            setErr3({ ...err3, valid: false });
            setErr3({ ...err3, msg: "Invalid Phone Number!" });
          }
        }else{
          setErr3({msg: "", valid: true});
        }

        //Organization
        if (register.organization === "") {
          valid = false;
          setErr4({ ...err4, valid: false });
          setErr4({ ...err4, msg: "Organization cannot be empty!" });
        }else{
          setErr4({msg: "", valid: true});
        }

        //Organization Name
        if (!register.organizationName.match(/[A-Za-z]+/)) {
          valid = false;
          console.log("didnot match");
          if (register.organizationName === "") {
            setErr5({ ...err5, valid: false });
            setErr5({ ...err5, msg: "Organization Name cannot be empty!" });
          }
        }else{
          setErr5({msg: "", valid: true});
        }

        //contribution
        if (!register.contribution.match(/[A-Za-z]*/)) {
          valid = false;
          console.log("didnot match");
          if (register.contribution === "") {
            setErr6({ ...err6, valid: false });
            setErr6({ ...err6, msg: "Contribution cannot be empty!" });
          }
        }else{
          setErr6({msg: "", valid: true});
        }

        //role
        if (register.role === "") {
          valid = false;
          setErr7({ ...err7, valid: false });
          setErr7({ ...err7, msg: "Role cannot be empty!" });
        }else{
          setErr7({msg: "", valid: true});
        }

        return valid;
      }
    
      // function dataFormatter() {
      //   let x =
      //     register.dob.substring(8, 10) +
      //     "/" +
      //     register.dob.substring(5, 7) +
      //     "/" +
      //     register.dob.substring(0, 4);
      //   console.log(x);
      //   return x;
      // }
    
      async function teamRegister() {
        console.log(register.name);
        console.log(register.email);
        console.log(register.role);
        console.log(register.organization);
        console.log(register.number);
        console.log(register.contribution); 
        console.log(register.organizationName); 
        const result = validation();
        if(result){
          await fetch("https://pragyanpandey05.pythonanywhere.com/api/publicteamform", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({"org_type":register.organization,
            "support_type":register.role,
            "name":register.name,
            "org_name":register.organizationName,
            "email":register.email,
            "number":register.number,
            "description":register.contribution}),
          }).then(res=>res.json())
          .then(json=>{
            if(json.status ==='entry added'){
              setEntered(1);
            }
          }).catch(err=>setEntered(2));
        }
      }

      //to remove
    return (
        <>
        {entered == 1 &&
          <div class="alert alert-success" role="alert">
            Entry added Successfully!
          </div>
        }
        {
          entered == 2 &&
          <div class="alert alert-danger" role="alert">
            Some Error Occured :(
          </div>
        }
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
                Join As Team
              </h4>
              <div className="small d-block text-blue">
                Fill in your details
              </div>
            </div>
            {/* what are you section */}
            <div className="modal-body">
              <div className="row px-lg-5">
                <div className="col-lg-6 mb-3">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="organization"
                      name="organization"
                      onChange={handleChange}
                      value={register.organization}
                    >
                      <option value="" disabled>
                        -
                      </option>
                      <option value="NGO">NGO</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Higher Educational Institution">Higher Educational Institution</option>
                    </select>
                    <label htmlFor="organization">What are you?</label>
                  </div>
                  <label htmlFor="organization" style={{ color: "red" }}>
                    {err4.msg}
                  </label>
                </div>
            {/* what are you looking to join us as  */}
                <div className="col-lg-6 mb-3">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="role"
                      name="role"
                      onChange={handleChange}
                      value={register.role}
                    >
                      <option value="" disabled>
                        -
                      </option>
                      <option value="Mobilizer">Mobilizer</option>
                      <option value="Coordinator">Coordinator</option>
                      <option value="Alumni">Alumni</option>
                    </select>
                    <label htmlFor="role">How are you looking to join us as?</label>
                  </div>
                  <label htmlFor="role" style={{ color: "red" }}>
                    {err7.msg}
                  </label>
                </div>

            {/* Fullname  */}
                 <div className="col-lg-12 mb-3">
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

            {/* Name of the institution/org  */}
                <div className="col-lg-12 mb-3">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="organizationName"
                      placeholder="Full Name"
                      name="organizationName"
                      onChange={handleChange}
                      value={register.organizationName}
                    />
                    <label htmlFor="organizationName">Name of the Institution/Organization</label>
                  </div>
                  <label htmlFor="organizationName" style={{ color: "red" }}>
                    {err5.msg}
                  </label>
                </div>
             {/* email  */}
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

                {/* phonenumber  */}
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

                <div className="col-lg-12 mb-3">
                  <div className="form-floating">
                  <div class="form-group">
                    <label for="contribution">How would you like to contribute?</label>
                    <textarea class="form-control" id="contribution" name="contribution" rows="3" value={register.contribution} onChange={handleChange}></textarea>
                </div>
                  </div>
                  <label htmlFor="m_fullname" style={{ color: "red" }}>
                    {err6.msg}
                  </label>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center border-0">
              <button
                type="button"
                className="btn btn-primary px-4 mb-4"
                onClick={teamRegister}
              >
                Register Now
              </button>
            </div>
          </form>

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