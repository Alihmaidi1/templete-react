import React from "react";
import {CreativE,CreativeInfo,InfoTitle,InfoTitlespan,InfoDir,InfoDesc,InfoDesca} from "./style"
const Creative=()=>{


        return (<CreativE>
                        <div className="container">
                            <CreativeInfo>
                                <InfoTitle><InfoTitlespan>This is</InfoTitlespan> Me</InfoTitle>
                                <InfoDir>Creative Director</InfoDir>
                                <InfoDesc>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoDesca href="#">explicabo</InfoDesca> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                                </InfoDesc>
                                <InfoDesc>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                                </InfoDesc>
                            </CreativeInfo>
                        </div>
    </CreativE>);

}

export default Creative;