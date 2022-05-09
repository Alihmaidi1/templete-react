import style from "styled-components";

export const WorK=style.div`
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff
`

export const WorkTitle=style.h2`
    font-size: 60px; 
`

export const Span=style.span` 
    font-weight: normal
`

export const Part=style.div` 
    margin-top: 20px;
    width: 30%;
    float: left;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left:5%;
    margin-left: ${props=>props.first==1?"0px":"5%"};
@media (max-width: 575px) {

    width: 100%;
    float: none;
    margin-left: 0
}

@media (min-width: 576px )and (max-width:768px) {
    width: 47%;


}
`


export const Icon=style.i`
    color: #888;
    margin-bottom: 20px
`

export const PartTitle=style.h4` 
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px
`

export const Line=style.hr` 
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`

export const PartDesc=style.p`
    font-size: 14px;
    color: #888;
    padding: 20px
`


