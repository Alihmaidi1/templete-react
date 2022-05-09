import style from "styled-components";
export const Drop=style.div`
    padding: 50px 0;
    text-align: center
`

export const DropTitle=style.h2`
    font-size: 60px;
    margin-bottom: 30px;
@media (max-width:575px) {

    font-size: 40px

}
`

export const DropTitlespan=style.span`
    font-weight: normal
`

export const Form=style.form`
    width: 70%;
    margin: auto;
@media (max-width:575px) {

    width: 90%


}
`

export const Input=style.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px
`

export const FormInput=style.div`
    overflow: hidden;
`


export const FormInputtext=style(Input)`
    float: left;
    width: 49%;
    @media (max-width:575px) {
    
        width: 100%
    
    
    }
`

export const FormInputemail=style(Input)`
    float: right;
    width: 49%;
    @media (max-width:575px) {
    
        width: 100%
    
    
    }
`


export const  Textarea=style.textarea`
    width: 100%;
    outline: 0; 
    background: #ccc
`

export const Formsubmit=style(Input) `
    width: 300px;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    margin-top:20px;
    padding:10px;
    background:#247;
    border-radius:3px;
    color:#fff;
    cursor: pointer
`
export const Inputsubject=style.input`
width:100%;
margin-bottom:8px;
padding:5px;
`;


