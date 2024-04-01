import { useContext } from "react";
import { EmailContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate()

const {logInOparation} = useContext(EmailContext)
    const foromHandle = e => {
e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        logInOparation(email, password)
        .then(result => {

          console.log(result.user)
        
          alert('sucess')
          e.target.reset()
          navigate('/')
    
        })
        .catch(error => {

          alert(error.message)
        })
    

    }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">



        {/* form */}

      <form  onSubmit={foromHandle} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Login;