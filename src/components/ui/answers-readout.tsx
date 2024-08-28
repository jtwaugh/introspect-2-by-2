'use client'

import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Textarea } from './textarea';

const AnswersReadout = (props: any) => {
    return (
        <div className="p-4">
            <div className='h-full flex justify-center'>
                <span className='title pb-4 text-center'>
                    About your suffering, you said: <br/><br/>
                    <i>{props.description}</i><br/><br/> {"Let's arrange this again, and make some affirmations about the future."}<br/>{"Fill out how you'd like your enviroment to be, and how you'd like your mental structures to be."}
                </span>
            </div>
            <div className='flex items-center justify-center min-h-screen'>
                <div className="text-white flex flex-col items-center">
                    <div className="text-lg mb-2">Past</div>
                    <div className="border-2 border-white rounded-lg p-2">
                        <div className='text-center'>Outer<br/> {props.responses[0]}</div>
                        <div className="border-2 border-white rounded-lg p-6">
                            Inner <br/> {props.responses[2]}
                        </div>
                    </div>
                </div>

                <span className='text-gray-500'><FaArrowRight/></span>
                
                <div className="text-white flex flex-col items-center">
                    <div className="text-lg mb-2">Present</div>
                    <div className="border-2 border-white rounded-lg p-2">
                        <div className='text-center'>Outer<br/> {props.responses[1]}</div>
                        <div className="border-2 border-white rounded-lg p-6">
                            Inner<br/> {props.responses[3]}
                        </div>
                    </div>
                </div>
                
                <span className='text-gray-500'><FaArrowRight/></span>

                <div className="text-white flex flex-col items-center">
                    <div className="text-lg mb-2">Future</div>
                    <div className="border-2 border-white rounded-lg p-2">
                        <div className='text-center'>Outer<br/><Textarea/></div>
                        <div className="border-2 border-white rounded-lg p-6">
                            Inner<br/><Textarea/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnswersReadout;