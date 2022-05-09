import style from "styled-components";

export const CreativE=style.div`
    height: 500px;
    background: url('images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
@media (max-width:991px) {

    height: auto


}
`

export const CreativeInfo=style.div`
    padding-top: 100px;
    width: 50%;
    float: right;
    @media (max-width:991px) {

        width: 100%;
        padding-top: 10px;
        float: none
    
    
    }

    `

export const InfoTitle=style.div`
    font-weight: bold;
    font-size: 50px;
    padding:0px;
    margin:0px;
    text-align:center
`

export const InfoTitlespan=style.span`
    font-weight: normal
`

export const InfoDir=style.h4`
    font-size: 40px;
    color: #eb5424;
    margin:0px;
    margin-bottom: 20px;
    text-align:center ;
@media (max-width:991px) {

    font-size: 30px


}
`

export const InfoDesc=style.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8
`

export const InfoDesca=style.a`
    text-decoration: none
`
