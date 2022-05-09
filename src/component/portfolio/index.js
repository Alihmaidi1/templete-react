import axios from "axios";
import React, { useEffect, useState } from "react";
import {PortfoliO,PortfolioTitle,Span,PortfolioList,PortfolioItem,Boxdiv,Boximg,Overlay,OverlaySpan} from "./style"

const Portfolio=()=>{


    let[images,setimages]=useState({portfolios:[]})

    useEffect(()=>{

        axios.get('json.json').then((res)=>{

            setimages({portfolios:res.data.portfolio})

        }).catch((err)=>{

            console.log(err)

        })


    },[]);



    let portfolios=images.portfolios.map((portfolio,index)=>{

        return   <Boxdiv key={index}>
        <div>
            <Boximg src={portfolio.image} alt=""/>
            <Overlay>
                <OverlaySpan>
                    Show Image
                </OverlaySpan>
            </Overlay>
        </div>
        
    </Boxdiv>;
    })  




    return (<PortfoliO>
    <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
    <PortfolioList>
        <PortfolioItem  active="1">All</PortfolioItem>
        <PortfolioItem >HTML</PortfolioItem>
        <PortfolioItem >Photoshop</PortfolioItem>
        <PortfolioItem >Wordpress</PortfolioItem>
        <PortfolioItem >Mobile</PortfolioItem>
    </PortfolioList>
    
        {portfolios}
    
</PortfoliO>);

}

export default Portfolio;

