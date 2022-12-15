import React, { useState } from "react";
const Form = () => {
    const [userRegistration, setUserRegistration] = useState({
        firstname: "",
        lastname: "",
        email: ""
    }
    )
    const [submitted, setsubmitted] = useState(false)
    const [valid, setvalid] = useState(false)
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(!userRegistration.firstname)
        // console.log(name, value)
        setUserRegistration({ ...userRegistration, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setsubmitted(true)
        if (Boolean(userRegistration.firstname) && Boolean(userRegistration.lastname) && Boolean(userRegistration.email)) {
            setvalid(true)
        }
        // setUserRegistration({ firstname: "", lastname: "", email: "" })

    }
    return (<>
        <div className="grandparent">
            <form action="" onSubmit={handleSubmit} className="parent">
                <div>
                    {submitted && valid ? <div className="success">Success! Thank you for registering</div> : null}
                </div>
                <div>

                    <input type="text" placeholder="First Name" name="firstname" id="firstname" value={userRegistration.firstname} onChange={handleInput} />
                    {submitted && (!userRegistration.firstname) ? <div className="error">Please enter a first name</div> : null}
                </div>
                <div>

                    <input type="text" placeholder="Last Name" name="lastname" id="lastname" value={userRegistration.lastname} onChange={handleInput} />
                    {submitted && (!userRegistration.lastname) ? <div className="error">Please enter a last name</div> : null}
                </div>
                <div>

                    <input type="text" placeholder="Email" name="email" id="email" value={userRegistration.email} onChange={handleInput} />
                    {submitted && (!userRegistration.email) ? <div className="error">Please enter a email address</div> : null}
                </div>
                <button>Register</button>
            </form>
        </div>
    </>)
}
export default Form


// Boolean("")
// false
// Boolean("vineet")
// true