"use client"

import Questionnaire from "@/components/ui/questionnaire";
import TwoByTwo from "@/components/ui/two-by-two";
import AnswersReadout from "@/components/ui/answers-readout";

import { updateValueAtIndex } from "@/lib/utils";

import { ModeToggle } from "@/components/ui/mode-toggle";

import { useState } from "react";

export default function Home() {
  const questions = ["What's on your mind?", "What part of this experience causes suffering?", "Describe the suffering as succinctly as possible. Let's give it a name."];

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
          isQuestionnaireComplete ? (
            isTwoByTwoComplete ? 
              <AnswersReadout description={questionnaireAnswers[questionnaireAnswers.length - 1]} responses={twoByTwoResponses}/> : 
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
            </div>
            
          }
          
      </div>
    </body>
  );
}
