import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
// import HeroImg from '../../images/HeroImage.jpg'
// import HeroImg from '../../images/img.webp'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer  id="Left">
                        <Title style={{color:"#C2E9FB"}}>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop style={{color:"#C2E9FB"}}>
                            I am a
                            <Span style={{color:"white"}}>
                                <Typewriter 
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle style={{color:"#888888"}}>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        {/* <Img src={HeroImg} alt="hero-image" /> */}
                        <Img className='border-0' src={'./img.png'} alt="Swastic avatar-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection