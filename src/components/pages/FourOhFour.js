import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-marquee-slider";
import errorJapanese from '../../images/error-images/error-japanese.svg';
import errorRussian from '../../images/error-images/error-russian.svg';
import errorHindi from '../../images/error-images/error-hindi.svg';
import errorChinese from '../../images/error-images/error-chinese.svg';
import errorKorean from '../../images/error-images/error-korean.svg';
import errorArabic from '../../images/error-images/error-arabic.svg';
import errorThai from '../../images/error-images/error-thai.svg';

function FourOhFour() {
    return (
       <main className='no-padding'>
         <section className='error-marquee-background'>
         <ul className='error-marquee error-korean'>
          <Marquee velocity={95}>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
          </Marquee>
          </ul>

         <ul className='error-marquee error-russian'>
          <Marquee velocity={65}>
            <li><img src={errorRussian} alt="vector graphic of the word error in russian" /></li>
            <li><img src={errorRussian} alt="vector graphic of the word error in russian" /></li>
            <li><img src={errorRussian} alt="vector graphic of the word error in russian" /></li>
            <li><img src={errorRussian} alt="vector graphic of the word error in russian" /></li>
            <li><img src={errorRussian} alt="vector graphic of the word error in russian" /></li>
            <li><img src={errorRussian} alt="vector graphic of the word error in russian" /></li>
            <li><img src={errorRussian} alt="vector graphic of the word error in russian" /></li>
            <li><img src={errorRussian} alt="vector graphic of the word error in russian" /></li>
          </Marquee>
          </ul>

          <ul className='error-marquee error-japanese'>
          <Marquee velocity={70}>
            <li><img src={errorJapanese} alt="vector graphic of the word error in japanese" /></li>
            <li><img src={errorJapanese} alt="vector graphic of the word error in japanese" /></li>
            <li><img src={errorJapanese} alt="vector graphic of the word error in japanese" /></li>
            <li><img src={errorJapanese} alt="vector graphic of the word error in japanese" /></li>
            <li><img src={errorJapanese} alt="vector graphic of the word error in japanese" /></li>
            <li><img src={errorJapanese} alt="vector graphic of the word error in japanese" /></li>
            <li><img src={errorJapanese} alt="vector graphic of the word error in japanese" /></li>
            <li><img src={errorJapanese} alt="vector graphic of the word error in japanese" /></li>
          </Marquee>
          </ul>

          <ul className='error-marquee error-english'>
          <Marquee velocity={75}>
            <li>error</li>
            <li>error</li>
            <li className='red-text'>error</li>
            <li>error</li>
          </Marquee>
          </ul>

          <ul className='error-marquee error-hindi'>
          <Marquee velocity={110}>
            <li><img src={errorHindi} alt="vector graphic of the word error in hindi" /></li>
            <li><img src={errorHindi} alt="vector graphic of the word error in hindi" /></li>
            <li><img src={errorHindi} alt="vector graphic of the word error in hindi" /></li>
            <li><img src={errorHindi} alt="vector graphic of the word error in hindi" /></li>
            <li><img src={errorHindi} alt="vector graphic of the word error in hindi" /></li>
            <li><img src={errorHindi} alt="vector graphic of the word error in hindi" /></li>
            <li><img src={errorHindi} alt="vector graphic of the word error in hindi" /></li>
            <li><img src={errorHindi} alt="vector graphic of the word error in hindi" /></li>
          </Marquee>
          </ul>

          <ul className='error-marquee error-chinese'>
          <Marquee velocity={120}>
            <li><img src={errorChinese} alt="vector graphic of the word error in chinese" /></li>
            <li><img src={errorChinese} alt="vector graphic of the word error in chinese" /></li>
            <li><img src={errorChinese} alt="vector graphic of the word error in chinese" /></li>
            <li><img src={errorChinese} alt="vector graphic of the word error in chinese" /></li>
          </Marquee>
          </ul>

          <ul className='error-marquee error-arabic'>
          <Marquee velocity={90} direction={"ltr"}>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
            <li><img src={errorArabic} alt="vector graphic of the word error in arabic" /></li>
          </Marquee>
          </ul>

          <ul className='error-marquee error-thai'>
          <Marquee velocity={90}>
            <li><img src={errorThai} alt="vector graphic of the word error in thai" /></li>
            <li><img src={errorThai} alt="vector graphic of the word error in thai" /></li>
            <li><img src={errorThai} alt="vector graphic of the word error in thai" /></li>
            <li><img src={errorThai} alt="vector graphic of the word error in thai" /></li>
            <li><img src={errorThai} alt="vector graphic of the word error in thai" /></li>
            <li><img src={errorThai} alt="vector graphic of the word error in thai" /></li>
          </Marquee>
          </ul>

          <ul className='error-marquee error-norwegian'>
          <Marquee velocity={65}>
            <li>feil</li>
            <li>feil</li>
            <li>feil</li>
            <li>feil</li>
            <li>feil</li>
            <li>feil</li>
            <li>feil</li>
            <li>feil</li>
            <li>feil</li>
            <li>feil</li>
            <li>feil</li>
            <li>feil</li>
          </Marquee>
          </ul>

          <ul className='error-marquee error-korean'>
          <Marquee velocity={95}>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
            <li><img src={errorKorean} alt="vector graphic of the word error in korean" /></li>
          </Marquee>
          </ul>

          <ul className='error-marquee error-russian'>
          <Marquee velocity={65}>
            <li><img src={errorRussian} alt="vector graphic of the word error in russian" /></li>
            <li><img src={errorRussian} alt="vector graphic of the word error in russian" /></li>
            <li><img src={errorRussian} alt="vector graphic of the word error in russian" /></li>
            <li><img src={errorRussian} alt="vector graphic of the word error in russian" /></li>
            <li><img src={errorRussian} alt="vector graphic of the word error in russian" /></li>
            <li><img src={errorRussian} alt="vector graphic of the word error in russian" /></li>
            <li><img src={errorRussian} alt="vector graphic of the word error in russian" /></li>
            <li><img src={errorRussian} alt="vector graphic of the word error in russian" /></li>
          </Marquee>
          </ul>     
         </section>

         <div className='error-message-container'>
            <p className='error-heading'>404</p>
            <p className='error-body'>The requested page is non-existent. At least not in this universe, my friend... but then again, what can be said to truly exist?</p>
            <Link className="back-to-home white" to="/"><p>back to home</p></Link>   
         </div>
       </main>
    );
}

export default FourOhFour;