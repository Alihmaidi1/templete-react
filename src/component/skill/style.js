import style from "styled-components";

export const ProfileSkills=style.div`
    padding: 50px 0;
    overflow: hidden;
`

export const Profile=style.div`
    width: 50%;
    float: left;
    @media (max-width:768px) {
    
        margin-bottom: 20px;
        width: 100%;
        float: none
    }
    `

export const ProfileList=style.ul`
    list-style: none
`

export const ProfileItem=style.li`
    margin-bottom: 8px
`

export const Span=style.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`

export const SpanWeb=style.span`
    font-weight: normal;
    color: #eb5424
`

export const Skills=style.div`
    width: 50%;
    float: left;

@media (max-width:768px) {


    width: 100%;
    float: none

}
`

export const SkillsDesc=style.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const Bar=style.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const BarTitle=style.span`
    float: left;
`

export const Perc=style.span`
    float: right;
    margin-right: 100px
`

export const Parent=style.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px;
    height:6px
`

export const ParentSpan=style.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
`

export const SpanSp1=style.span`
    width: 100%;
    height:5px;
    display:block;
    background:#545;

`

export const SpanSp2=style.span`
    width: 90%;
    height:5px;

    display:block ;
    background:#545;

`

export const SpanSp3=style.span`
    width: 80%;
    height:5px;
    background:#545;
    display:block;

`


export const SkillsTitle=style.h2`
    font-size: 40px; 
    margin-bottom: 20px
`

export const ProfileTitlespan=style.span`

font-weight: normal;


`
