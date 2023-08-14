import {useNavigate} from "react-router-dom";

export const Profile = () => {
    const navigaet = useNavigate()
    const logOut = () => {
        localStorage.clear()
        navigaet("/")
    }
    return (
        <>
            <div className="container bootstrap snippet" style={{width: "90%", marginLeft: "30%"}}>
                <div className="row">
                    <div className="col-sm-10"><h1>User name</h1></div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="text-center">
                            <h6>Upload a different photo...</h6>
                            <input type="file" className="form-control text-center center-block file-upload"/>
                        </div>

                        <div className="col-sm-9">
                            <div className="tab-content">
                                <div className="tab-pane active" id="home">
                                    <form className="form" action="" method="post" id="registrationForm">
                                        <div className="form-group">

                                            <div className="col-xs-6">
                                                <label form="first_name"><h4>First name</h4></label>
                                                <input type="text" className="form-control" name="first_name"
                                                       id="first_name" placeholder="first name"
                                                       title="enter your first name if any."/>
                                            </div>
                                        </div>
                                        <div className="form-group">

                                            <div className="col-xs-6">
                                                <label form="last_name"><h4>Last name</h4></label>
                                                <input type="text" className="form-control" name="last_name"
                                                       id="last_name" placeholder="last name"
                                                       title="enter your last name if any."/>
                                            </div>
                                        </div>

                                        <div className="form-group">

                                            <div className="col-xs-6">
                                                <label form="phone"><h4>Phone</h4></label>
                                                <input type="text" className="form-control" name="phone" id="phone"
                                                       placeholder="enter phone"
                                                       title="enter your phone number if any."/>
                                            </div>
                                        </div>

                                        <div className="form-group">

                                            <div className="col-xs-6">
                                                <label form="password"><h4>Password</h4></label>
                                                <input type="password" className="form-control" name="password"
                                                       id="password" placeholder="password"
                                                       title="enter your password."/>
                                            </div>
                                        </div>
                                        <div className="form-group">

                                            <div className="col-xs-6">
                                                <label form="password2"><h4>Verify</h4></label>
                                                <input type="password" className="form-control" name="password2"
                                                       id="password2" placeholder="password2"
                                                       title="enter your password2."/>
                                            </div>
                                        </div>
                                        <div className="form-group m-2">
                                            <button className="btn btn-success m-2" type="submit">Save
                                            </button>
                                            <button className="btn btn-danger" onClick={()=>logOut()} type="button"> Reset
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}