import React  from "react";
import {HOME,HomeInformation,HomeTitle,HomeInfo,HomeDesc,Span,HomeBtn} from "./style"
const Home=()=>{


    return (<HOME>
                    <div className="container">
                        <HomeInformation>
                            <HomeTitle>Ali Hmaidi</HomeTitle>
                            <HomeInfo>Creative Director</HomeInfo>
                            <HomeDesc>
                                Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                            </HomeDesc>
                            <HomeBtn>Let's Begin</HomeBtn>
                        </HomeInformation>
                    </div>
            </HOME>
);


}

export default Home;