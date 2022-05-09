import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../assets/fontawesome/css/all.min.css";
import {SocialMedia,SociaL,Icon,Socialp,Socialpspan,SpanInfo2} from "./style"
const Social=()=>{

    let [state,setstate]=useState({socials:[]})
    
    useEffect(()=>{

        axios.get("json.json").then((res)=>{

            setstate({socials:res.data.social})

        }).catch((err)=>{

            console.log("Error")

        });

    },[]);

    let socials=state.socials.map((socail,index)=>{

        return   <SociaL type={socail.id}>
                        <Icon className={"fab fa-facebook"+socail.icon}></Icon>
                        <Socialp>
                            <Socialpspan >{socail.title}</Socialpspan>
                            <SpanInfo2>{socail.body}</SpanInfo2>
                        </Socialp>
                </SociaL>


    })

    return ( <SocialMedia>
            

                {socials}           
                            
                            
            </SocialMedia>);

}


export default Social;