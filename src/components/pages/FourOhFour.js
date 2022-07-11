import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import errorEnglish from '../../images/error-images/error-english.svg';
import errorJapanese from '../../images/error-images/error-japanese.svg';
import errorRussian from '../../images/error-images/error-russian.svg';
import errorHindi from '../../images/error-images/error-hindi.svg';
import errorChinese from '../../images/error-images/error-chinese.svg';
import errorKorean from '../../images/error-images/error-korean.svg';
import errorArabic from '../../images/error-images/error-arabic.svg';
import errorThai from '../../images/error-images/error-thai.svg';
import errorNorwegian from '../../images/error-images/error-norwegian.svg';


function FourOhFour() {
    return (
       <main className='no-padding'>
         <section className='error-marquee-background'>
         <ul className='error-marquee error-korean'>
          <Marquee gradient={false} speed={80}>
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
          <Marquee gradient={false} speed={100}>
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
          <Marquee gradient={false} speed={70}>
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
          <Marquee gradient={false} speed={50}>
            <li><img src={errorEnglish} alt="vector graphic of the word error in english" /></li>
            <li><img src={errorEnglish} alt="vector graphic of the word error in english" /></li>
            <li><img className='red-fill' src={errorEnglish} alt="vector graphic of the word error in english" /></li>
            <li><img src={errorEnglish} alt="vector graphic of the word error in english" /></li>
          </Marquee>
          </ul>

          <ul className='error-marquee error-hindi'>
          <Marquee gradient={false} speed={90}>
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
          <Marquee gradient={false} speed={60}>
            <li><img src={errorChinese} alt="vector graphic of the word error in chinese" /></li>
            <li><img src={errorChinese} alt="vector graphic of the word error in chinese" /></li>
            <li><img src={errorChinese} alt="vector graphic of the word error in chinese" /></li>
            <li><img src={errorChinese} alt="vector graphic of the word error in chinese" /></li>
          </Marquee>
          </ul>

          <ul className='error-marquee error-arabic'>
          <Marquee gradient={false} direction={"right"} speed={80}>
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
          <Marquee gradient={false} speed={80}>
            <li><img src={errorThai} alt="vector graphic of the word error in thai" /></li>
            <li><img src={errorThai} alt="vector graphic of the word error in thai" /></li>
            <li><img src={errorThai} alt="vector graphic of the word error in thai" /></li>
            <li><img src={errorThai} alt="vector graphic of the word error in thai" /></li>
            <li><img src={errorThai} alt="vector graphic of the word error in thai" /></li>
            <li><img src={errorThai} alt="vector graphic of the word error in thai" /></li>
          </Marquee>
          </ul>

          <ul className='error-marquee error-norwegian'>
          <Marquee gradient={false} speed={70}>
            <li><img src={errorNorwegian} alt="vector graphic of the word error in norwegian" /></li>
            <li><img src={errorNorwegian} alt="vector graphic of the word error in norwegian" /></li>
            <li><img src={errorNorwegian} alt="vector graphic of the word error in norwegian" /></li>
            <li><img src={errorNorwegian} alt="vector graphic of the word error in norwegian" /></li>
            <li><img src={errorNorwegian} alt="vector graphic of the word error in norwegian" /></li>
            <li><img src={errorNorwegian} alt="vector graphic of the word error in norwegian" /></li>
            <li><img src={errorNorwegian} alt="vector graphic of the word error in norwegian" /></li>
            <li><img src={errorNorwegian} alt="vector graphic of the word error in norwegian" /></li>
            <li><img src={errorNorwegian} alt="vector graphic of the word error in norwegian" /></li>
            <li><img src={errorNorwegian} alt="vector graphic of the word error in norwegian" /></li>
            <li><img src={errorNorwegian} alt="vector graphic of the word error in norwegian" /></li>
            <li><img src={errorNorwegian} alt="vector graphic of the word error in norwegian" /></li>
          </Marquee>
          </ul>

          <ul className='error-marquee error-korean'>
          <Marquee gradient={false} speed={80}>
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
          <Marquee gradient={false} speed={100}>
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