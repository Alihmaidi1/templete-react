import style from "styled-components";

export const SocialMedia=style.div`
    height: auto;
    overflow: hidden
`

export const SociaL=style.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background:${props=> (props.type=="1")?"#3b5998":(props.type=="2")?"#498cbf":(props.type=="3")?"#cc2127":"inherit"};
@media (max-width:991px) {

    width: 100%;
    float: none;


}
`


export const Icon=style.i`
    width: 60px;
    height: 60px;
    background: #fff;
    color: #888;
    float: left;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right: 10px
`

export const Socialp=style.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    margin:0px;
    color: #fff
`

export const Socialpspan=style.span`
    display: block;
    margin-bottom: 8px
`

export const SpanInfo2=style.span`
    font-weight: normal
`
