import React, { useState } from 'react';
import './dailyfeed.css';

const DailyFeed = () => {
  const contentStyle = {
   width:'500px'
  };
 
  return (
    <div class="ccontainer">
    <div class="ccard">
        <div class="ccard-content">
            <h2 class="ccard-number">01</h2>
            <h3 class="card-title">Natal Chart Readings</h3>
            <p class="ccard-description">
                We generate your natal chart and interpret the positions of the planets, signs, and houses to give you insights into your personality, strengths, weaknesses, and life path.
            </p>
        </div>
        <div class="ccard-image">
            <img style={contentStyle} src="https://firebasestorage.googleapis.com/v0/b/bhavatufinal.appspot.com/o/taurus.jpg?alt=media&token=1e5e1b8e-83eb-4611-b491-56920288ba91"/>
        </div>
    </div>

    <div class="cccard">
    <div class="cccard-image">
        <img src="https://hips.hearstapps.com/hmg-prod/images/aries-final-65c53a391c6ed.jpg?crop=1.00xw:1.00xh;0,0&resize=360:*" alt="Compatibility Readings"/>
    </div>
    <div class="cccard-content">
        <h2 class="cccard-number">02</h2>
        <h3 class="cccard-title">Compatibility Readings</h3>
        <p class="cccard-description">
            We can analyze the compatibility between two individuals by comparing their natal charts. This can help people understand their relationships with partners, friends, or family members better.
        </p>
    </div>
</div>
<div class="ccard">
        <div class="ccard-content">
            <h2 class="ccard-number">03</h2>
            <h3 class="card-title">Natal Chart Readings</h3>
            <p class="ccard-description">
                We generate your natal chart and interpret the positions of the planets, signs, and houses to give you insights into your personality, strengths, weaknesses, and life path.
            </p>
        </div>
        <div class="ccard-image">
            <img src="https://hips.hearstapps.com/hmg-prod/images/pisces-final-65c5440b949f5.jpg?crop=1.00xw:1.00xh;0,0&resize=360:*" alt="Natal Chart Readings"/>
        </div>
    </div>

    <div class="cccard">
    <div class="cccard-image">
        <img src="https://hips.hearstapps.com/hmg-prod/images/aquarius-final-65c5401965263.jpg?crop=1xw:1xh;center,top&resize=360:*" alt="Compatibility Readings"/>
    </div>
    <div class="cccard-content">
        <h2 class="cccard-number">04</h2>
        <h3 class="cccard-title">Compatibility Readings</h3>
        <p class="cccard-description">
            We can analyze the compatibility between two individuals by comparing their natal charts. This can help people understand their relationships with partners, friends, or family members better.
        </p>
    </div>
</div>
<div class="ccard">
        <div class="ccard-content">
            <h2 class="ccard-number">05</h2>
            <h3 class="card-title">Natal Chart Readings</h3>
            <p class="ccard-description">
                We generate your natal chart and interpret the positions of the planets, signs, and houses to give you insights into your personality, strengths, weaknesses, and life path.
            </p>
        </div>
        <div class="ccard-image">
            <img src="https://hips.hearstapps.com/hmg-prod/images/capricorn-final-65c53e7b70fb7.jpg?crop=1.00xw:1.00xh;0,0&resize=360:*" alt="Natal Chart Readings"/>
        </div>
    </div>

    <div class="cccard">
    <div class="cccard-image">
        <img src="https://hips.hearstapps.com/hmg-prod/images/virgo-final-65c53dd8e700a.jpg?crop=1.00xw:1.00xh;0,0&resize=360:*" alt="Compatibility Readings"/>
    </div>
    <div class="cccard-content">
        <h2 class="cccard-number">06</h2>
        <h3 class="cccard-title">Compatibility Readings</h3>
        <p class="cccard-description">
            We can analyze the compatibility between two individuals by comparing their natal charts. This can help people understand their relationships with partners, friends, or family members better.
        </p>
    </div>
</div>
<div class="ccard">
        <div class="ccard-content">
            <h2 class="ccard-number">07</h2>
            <h3 class="card-title">Natal Chart Readings</h3>
            <p class="ccard-description">
                We generate your natal chart and interpret the positions of the planets, signs, and houses to give you insights into your personality, strengths, weaknesses, and life path.
            </p>
        </div>
        <div class="ccard-image">
            <img src="https://hips.hearstapps.com/hmg-prod/images/sagittarius-final-65c53c344e35b.jpg?crop=1.00xw:1.00xh;0,0&resize=360:*" alt="Natal Chart Readings"/>
        </div>
    </div>

    <div class="cccard">
    <div class="cccard-image">
        <img src="https://hips.hearstapps.com/hmg-prod/images/gemini-final-65c53f0a53394.jpg?crop=1.00xw:1.00xh;0,0&resize=360:*" alt="Compatibility Readings"/>
    </div>
    <div class="cccard-content">
        <h2 class="cccard-number">08</h2>
        <h3 class="cccard-title">Compatibility Readings</h3>
        <p class="cccard-description">
            We can analyze the compatibility between two individuals by comparing their natal charts. This can help people understand their relationships with partners, friends, or family members better.
        </p>
    </div>
</div>
<div class="ccard">
        <div class="ccard-content">
            <h2 class="ccard-number">09</h2>
            <h3 class="card-title">Natal Chart Readings</h3>
            <p class="ccard-description">
                We generate your natal chart and interpret the positions of the planets, signs, and houses to give you insights into your personality, strengths, weaknesses, and life path.
            </p>
        </div>
        <div class="ccard-image">
            <img src="https://hips.hearstapps.com/hmg-prod/images/scoprio-final-65c54127a8712.jpg?crop=1.00xw:1.00xh;0,0&resize=360:*" alt="Natal Chart Readings"/>
        </div>
    </div>

    <div class="cccard">
    <div class="cccard-image">
        <img src="https://hips.hearstapps.com/hmg-prod/images/leo-final-65c53b0ab6f6f.jpg?crop=1.00xw:1.00xh;0,0&resize=360:*" alt="Compatibility Readings"/>
    </div>
    <div class="cccard-content">
        <h2 class="cccard-number">10</h2>
        <h3 class="cccard-title">Compatibility Readings</h3>
        <p class="cccard-description">
            We can analyze the compatibility between two individuals by comparing their natal charts. This can help people understand their relationships with partners, friends, or family members better.
        </p>
    </div>
</div>
<div class="ccard">
        <div class="ccard-content">
            <h2 class="ccard-number">11</h2>
            <h3 class="card-title">Natal Chart Readings</h3>
            <p class="ccard-description">
                We generate your natal chart and interpret the positions of the planets, signs, and houses to give you insights into your personality, strengths, weaknesses, and life path.
            </p>
        </div>
        <div class="ccard-image">
            <img src="https://hips.hearstapps.com/hmg-prod/images/cancer-final-65c540a4f3330.jpg?crop=1.00xw:1.00xh;0,0&resize=360:*" alt="Natal Chart Readings"/>
        </div>
    </div>

    <div class="cccard">
    <div class="cccard-image">
        <img src="https://hips.hearstapps.com/hmg-prod/images/libra-final-65c53f91cdeb0.jpg?crop=1.00xw:1.00xh;0,0&resize=360:*" alt="Compatibility Readings"/>
    </div>
    <div class="cccard-content">
        <h2 class="cccard-number">12</h2>
        <h3 class="cccard-title">Compatibility Readings</h3>
        <p class="cccard-description">
            We can analyze the compatibility between two individuals by comparing their natal charts. This can help people understand their relationships with partners, friends, or family members better.
        </p>
    </div>
</div>



    
</div>
  );
};

export default DailyFeed;
