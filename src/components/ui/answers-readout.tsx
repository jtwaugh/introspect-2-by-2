'use client'

import React, { useState } from 'react';

const AnswersReadout = (props: any) => {
    return (
        <div className="p-4">
            <div className='h-full flex justify-center'>
                <span className='title pb-4 text-center'>
                    About your suffering, you said: <br/><br/>
                    <i>{props.description}</i>
                    <br/><br/> 
                    About your past circumstances, you said:
                    <br/><br/>
                    <i>{props.answers[0]}</i>
                    <br/><br/> 
                    About your present circumstances, you said:
                    <br/><br/>
                    <i>{props.answers[1]}</i>
                    <br/><br/> 
                    About your past mental structures, you said:
                    <br/><br/>
                    <i>{props.answers[2]}</i>
                    <br/><br/> 
                    About your present mental structures, you said:
                    <br/><br/>
                    <i>{props.answers[3]}</i>
                    <br/><br/> 
                </span>
            </div>
        </div>
    );
}

export default AnswersReadout;