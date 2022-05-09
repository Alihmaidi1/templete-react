import style from "styled-components";

export const PortfoliO=style.div`
    background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
`

export const PortfolioTitle=style.h2`
    text-align: center;
    font-size: 35px
    `

export const Span=style.span`
    font-weight: normal
`

export const PortfolioList=style.ul` 
    list-style: none;
    text-align: center;
    margin: 20px 0
`

export const PortfolioItem=style.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    background:${props=>props.active==1?"#eb5424":"inherit"};
    color:${props=>props.active==1?"#fff":"inherit"};

@media (max-width:575px) {
    display: block;
    margin: auto


}

    `


export const Boxdiv=style.div`
    width: 25%;
    float: left;
    font-size: 20px;
    position: relative;
    &:hover p {

        opacity:1;

    }

@media (max-width:575px) {

    width: 100%;

}

@media (min-width:576px) and (max-width : 768px ){
    width: 50%;


}
`

export const Boximg=style.img`
    width: 100%
`

export const Overlay=style.p`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0;
    transition:all 1s ease
`

export const OverlaySpan=style.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;

    `


