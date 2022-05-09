import axios from "axios";
import React, { Component }  from "react";
import "../../assets/fontawesome/css/all.min.css";
import {WorK,WorkTitle,Span,Part,Icon,PartTitle,Line,PartDesc} from "./style";
class Work extends Component{

    state={

        works:[]

    }


    componentDidMount(){

        axios.get('json.json').then((res)=>{

            this.setState({

                works:res.data.works
            })
            

        }).catch((err)=>{

            console.log("error")

        })
        
    }


    render(){


        let works=this.state.works.map((work,index)=>{
            console.log(index)
           return <Part key={index} first={(index==0)?1:0}>
                <Icon className={work.icon_name}></Icon>
                <PartTitle>{work.title}</PartTitle>
                <Line/>
                <PartDesc>
                {work.body}
                </PartDesc>
            </Part>

        });


        return (<WorK>
        <div className="container">
            <WorkTitle><Span>My</Span> Work</WorkTitle>
            {works}
        </div>
    </WorK>
    );
        
    }


}


export default Work;