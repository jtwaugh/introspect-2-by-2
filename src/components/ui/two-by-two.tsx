"use client"

import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from './button';

const TwoByTwo = (props: any) => {

    const onSubmit = () => {
        if (props.responses[0] !== "" && props.responses[1] !== "" && props.responses[2] !== "" && props.responses[3] !== "") {
            props.onComplete(); 
        }
    }

    return (
        <div className="p-4">
            <div className='h-full flex justify-center'>
                <span className='title pb-4 text-center'>About your suffering, you said: <br/><br/><i>{props.description}</i><br/><br/> {"Let's break down what factors led to this phenomenon."}<br/> {"Just write a few notes in each box and click Submit at the bottom when you're done"}.</span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                    <span className='text-title'>Outer, Past</span>
                    <Textarea
                        value={props.responses[0]}
                        onChange={(e: any) => props.handleChange(0, e)}
                        placeholder="What past circumstances contributed to your suffering?"
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows={4}
                    />
                </div>
                <div>
                    <span className='text-title'>Outer, Present</span>
                    <Textarea
                        value={props.responses[1]}
                        onChange={(e: any) => props.handleChange(1, e)}
                        placeholder="What present circumstances are contributing to your suffering?"
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows={4}
                    />
                </div>
                <div>
                    <span className='text-title'>Inner, Past</span>
                    <Textarea
                        value={props.responses[2]}
                        onChange={(e: any) => props.handleChange(2, e)}
                        placeholder="What past mental formations contributed to your suffering?"
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows={4}
                    />
                </div>
                <div>
                    <span className='text-title'>Inner, Present</span>
                    <Textarea
                        value={props.responses[3]}
                        onChange={(e: any) => props.handleChange(3, e)}
                        placeholder="What present mental formations are contributing to your suffering?"
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows={4}
                    />
                </div>
            </div>
            <div className='pt-6 h-full flex justify-center'>
                <Button className='border' onClick={() => onSubmit()}>Submit</Button>
            </div>
        </div>
    );
}

export default TwoByTwo;