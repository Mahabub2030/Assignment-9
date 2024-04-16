import NavBar from "../Shrared/NavBar/NavBar";


const Login = () => {

        const HandelLogin = e  =>{
                e.preventDefault ();
                console.log(e.currentTarget)
                const form = new FormData(e.currentTarget);
                console.log(form.get('password'))
        }
        return (
                <div>
                        <NavBar></NavBar>
                        <h2 className="text-3xl text-center">Pleage Login </h2>
                        <form onSubmit={HandelLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                                                        <div className="form-control">
                                                                <label className="label">
                                                                        <span className="label-text">Email</span>
                                                                </label>
                                                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                                                        </div>
                                                        <div className="form-control">
                                                                <label className="label">
                                                                        <span className="label-text">Password</span>
                                                                </label>
                                                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                                                <label className="label">
                                                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                                </label>
                                                        </div>
                                                        <div className="form-control mt-6">
                                                                <button className="btn btn-primary">Login</button>
                                                        </div>
                                                </form>
                       
                </div>
        );
};

export default Login;