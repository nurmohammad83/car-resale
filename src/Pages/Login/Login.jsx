import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
  const{user,createUserGoogle,logIn}=useContext(AuthContext)
  const [error,setError]=useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const handelEmailBlur=()=>{

      }
      const handelLogin =(data)=>{
        logIn(data.email,data.password)
        .then(res=>{
          const user=res.user
          setError('')
          console.log(user)
        })
        .catch(err=>{
          setError(err.message)
        })
      }
  const   handelGoogleIn =()=>{
    createUserGoogle()
    .then(()=>{})
    }
    return (
        <section 
        style={{
            background: `url('https://i.ibb.co/D5Jyyzd/Pngtree-texture-geometric-black-background-930090.jpg')`,
            backgroundSize: "cover",
          }}
        >
            <div className="h-[600px] flex  justify-center items-center ">
      <div className="w-96 p-7 rounded-xl shadow-xl bg-white">
        <h3 className="text-xl text-center py-5">Log in</h3>
        <form onSubmit={handleSubmit(handelLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            onBlur={handelEmailBlur}
            name='email'
              type="text"
              {...register("email",{required:"Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
              />
              {errors.email && <p className="text-red-400 py-2" role="alert">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password",
              {required:'Password is required',
            minLength:{value:6,message:'Password must be 6 charectear or longer'}
            })
            }
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <p className="text-red-400 py-2" role="alert">{errors.password?.message}</p>}
            <label className="label mb-2">
              <button>Forget Password</button>
            </label>
          </div>
          <input
            className="btn py-4 btn-accent w-full"
            value="Log In"
            type="submit"
          />
        </form>
        <p>{error && <p className="text-red-500">{error}</p>}</p>
        <p className="py-5">
          New to Car Sealer?
          <Link className="text-primary" to="/signup">
            Create an Account
          </Link>
        </p>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
        </div>
        <button onClick={handelGoogleIn} className="btn btn-outline w-full py-5">Google With Connected</button>
      </div>
    </div>
        </section>
    );
};

export default Login;