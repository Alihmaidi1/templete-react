import style from "styled-components";

export const NavBar=style.div`
    padding: 0px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`


export const Logo=style.div` 
    float: left;
    @media (max-width : 991px) {
            width: 100%;
            float: none;
        }
    
`

export const  LogoText=style.h1`
    font-size: 30px;
    font-weight: bold
    `


export const UlList=style.ul`
width: 50%;
float: left;
list-style: none;
@media (max-width : 991px) {
    width: 100%;
    float:  none;
    margin-top: 20px;
    display: none

}
`


export const ListItem=style.li` 
    display: inline-block;
@media (max-width : 991px) {

    display: block;
    text-align: center;


}
`

export const ALink=style.a` 
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{

        color: #eb5424

    }
`


