import React from 'react';
import PropTypes from 'prop-types';


const Profile = ({info,hello}) => {

    return (
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div className="card p-4 shadow-lg p-3 mb-5 bg-white rounded">
            <div className=" image d-flex flex-column justify-content-center align-items-center ">
                <button className="btn btn-secondary"> 
                <img src={info.img} style={{ height:100 , width:100}} alt=""/>
                </button>
                <span className="name mt-3">{info.fullname}</span> <span className="idd">@Bouyahi</span>
                <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                    <span className="idd1">{info.profession}</span> 
                </div>
                <button className="btn btn-primary al" onClick={()=>hello({hello})} >follow Me!</button>
                <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                    <span className="number">1069 <span className="follow">Followers</span></span>

                </div>
                <div className="text mt-3">
                    <span>{info.bio}</span>
                </div>
                
                <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                    <a href='#'><i className="fa fa-twitter"></i></a > 
                    <a href='#'><i className="fa fa-facebook-f"></i></a >
                    <a href='#'><i className="fa fa-instagram"></i></a > 
                </div>
            
            </div>
        </div>
        
       
    </div>
    )
}
Profile.defaultProps=
{fullname:'Bouyahi Ali' ,
bio:'I’m a freelance Tunisien web designer and developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript' ,
profession:' Web Developer & Designer' ,
img:'/avatar.png' }

Profile.propTypes={
    products:PropTypes.array
    }
export default Profile
