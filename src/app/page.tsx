"use client"

import Questionnaire from "@/components/ui/questionnaire";
import TwoByTwo from "@/components/ui/two-by-two";
import AnswersReadout from "@/components/ui/answers-readout";

import { updateValueAtIndex } from "@/lib/utils";

import { ModeToggle } from "@/components/ui/mode-toggle";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const questions = ["Think about a past experience you're blaming yourself for. What comes to mind?", "What part of this experience causes suffering? Especially salient is suffering that feels like it must be your own fault.", "Describe the suffering as succinctly as possible. Give it a name, or try to be as specific as possible about what component of the memory is causing you to ache."];

  const [isSplashPageComplete, setIsSplashPageComplete] = useState(false);
  const [isQuestionnaireComplete, setIsQuestionnaireComplete] = useState(false);
  const [isTwoByTwoComplete, setIsTwoByTwoComplete] = useState(false);
  const [questionnaireAnswers, setQuestionnaireAnswers] = useState<string[]>(questions);
  const [twoByTwoResponses, setTwoByTwoResponses] = useState<string[]>(["", "", "", ""]);

  return (
    <body>
      <div className="pl-4 pt-4">
        <ModeToggle/>
      </div>
      <div className="min-h-screen flex items-center justify-center">
        {
          isSplashPageComplete ? (
          isQuestionnaireComplete ? (
            isTwoByTwoComplete ? 
              <AnswersReadout description={questionnaireAnswers[questionnaireAnswers.length - 1]} answers={twoByTwoResponses}/> : 
              <TwoByTwo 
                description={questionnaireAnswers[questionnaireAnswers.length - 1]}
                responses={twoByTwoResponses}
                handleChange={(idx: number, e: any) => updateValueAtIndex(
                  twoByTwoResponses, setTwoByTwoResponses, idx, e.target.value
                )}
                onComplete={() => setIsTwoByTwoComplete(true)}
              />
           ) : 
            <div className='h-full flex flex-col justify-center'>
                <span className='title pb-4 text-center'>{"Let's focus on your suffering. Answer a few questions below."}</span>
                <div className="h-full flex justify-center">
                  <Questionnaire 
                    questions={questions} 
                    onAnswer={(idx: number, answer: string) => {updateValueAtIndex(questionnaireAnswers, setQuestionnaireAnswers, idx, answer)}}
                    onComplete={
                      () => setIsQuestionnaireComplete(true)
                    }
                  />
                </div>
            </div>) :
            <div className="h-full flex flex-col justify-center">
              <div className='rounded-md border border-input p-4 text-center'>
              <span className='title pb-4 text-center'>{"This is an introspection tool focused on "} <i>blame.</i><br/> {"When we think about past suffering, we often tend to blame ourselves."}<br/><br/>{"This blame can rely on a very "} <i>static conception</i>{" of the self."}<br/><br/>{"With this tool, you will examine some self-blame resulting from a past experience."} <br/> {"You will try to deconstruct this static conception by splitting the experience into several causes."}<br/><br/>{"This practice can help provide a new and freeing perspective on your experience!"}</span>
            </div>
            <Button onClick={() => setIsSplashPageComplete(true)}>Start</Button>
            </div>  
          }
          
      </div>
    </body>
  );
}
