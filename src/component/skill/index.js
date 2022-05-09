import React from "react";
import {ProfileSkills,Profile,ProfileList,ProfileItem,Span,SpanWeb,Skills,SkillsDesc,Bar,BarTitle,Perc,Parent,SpanSp1,SpanSp2,SpanSp3,SkillsTitle,ProfileTitlespan,ParentSpan} from "./style"
const Skill=()=>{


    return (<ProfileSkills>
                <div className="container">
                    <Profile>
                        <h1><span>My </span>Profile</h1>
                        <ProfileList>
                            <ProfileItem>
                                <Span>Name</Span>
                                Hamza Nabil
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Birthday</Span>
                                21/1/1996
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Address</Span>
                                Ain shams
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Phone</Span>
                                4444 5555 6666
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Email</Span>
                                hamza@hamza.com
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Website</Span>
                                <SpanWeb>www.google.com</SpanWeb>
                            </ProfileItem>
                        </ProfileList>
                    </Profile>
                    
                    <Skills>
                        <SkillsTitle>Some <ProfileTitlespan>skills</ProfileTitlespan></SkillsTitle>
                        <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                        </SkillsDesc>
                        <Bar>
                            <BarTitle>Bootstrap</BarTitle>
                            <Perc>100%</Perc>
                            <Parent>
                                <SpanSp1></SpanSp1>
                            </Parent>
                        </Bar>
                        
                        <Bar>
                            <BarTitle>CSS3</BarTitle>
                            <Perc>90%</Perc>
                            <Parent>
                                <SpanSp2></SpanSp2>
                            </Parent>
                        </Bar>
                        
                        <Bar>
                            <BarTitle>Photoshop</BarTitle>
                            <Perc>80%</Perc>
                            <Parent>
                                <SpanSp3></SpanSp3>
                            </Parent>
                        </Bar>
                    </Skills>
                    
                </div>
</ProfileSkills>
);



}


export default Skill;