import { useState, useEffect } from "react";


// helpers
import { useGenerateRandomColor } from '../../helpers/colors.js'


type input = {
    content: {
        type: string;
        url: string;
    };
    on_wrong_feedback: {
        type: string;
        url: string;
    };
    answers: [
        {
            answerNumber: number;
            text: string;
            correct: boolean;
        },
        {
            answerNumber: number;
            text: string;
            correct: boolean;
        }
    ];
}

function AnswerCards({ update: updateAnswers }) {


    const toggler = (index: number) => {
        const updatedAnswerCards = answerCards.map((answer, idx) => {
            if (idx === index) {
                answer.correct = !answer.correct
            }
            return answer
        });

        toggleList[index] = !toggleList[index];

        setAnswerCards(updatedAnswerCards);
        updateAnswers(updatedAnswerCards);

    }


    const [toggleList, setToggleList] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const [answerCards, setAnswerCards] = useState([{ text: "", correct: false }]);

    const handleAnswerCardAdd = () => {
        const withAddedAnswer = [...answerCards, { text: "", correct: false }];

        setAnswerCards(withAddedAnswer);
        updateAnswers(withAddedAnswer);

        console.log(answerCards);

    }

    const handleAnswerCardDelete = (index: any) => {

        const withOneLessAnswer = [...answerCards]
        withOneLessAnswer.splice(index, 1);

        setAnswerCards(withOneLessAnswer);
        updateAnswers(withOneLessAnswer);
    }

    const handleAnswerCardChange = (e: any, index: number) => {
        const { value } = e.target;

        const list = [...answerCards];
        list[index].text = value;

        setAnswerCards(list);
        updateAnswers(list);
    }


    return (
        <div className="flex justify-center py-8">
            <div className="flex justify-space-around ">
                <div className=" flex grid grid-cols-2 gap-5">
                    {answerCards.map((singleAnswer, index) => (
                        <div key={index} className="card w-64 h-64 bg-base-100 border hover:shadow-xl">
                            <div className="card-body">

                                <div className="card-actions flex justify-around ">

                                    {/* The edit button which enables if we can write or not */}
                                    {/* <button onClick={() => setIsDisabled(!isDisabled)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" width="20" className="text-blue-500 hover:text-blue-700"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg>
                                    </button> */}

                                    {/*Deletebutton  */}
                                    <button onClick={() => handleAnswerCardDelete(index)} className="btn btn-square btn-sm absolute top-2 right-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                        </svg>
                                    </button>
                                </div>



                                <textarea className="textarea textarea-success disabled:bg-white disabled:border-white h-full resize-none" placeholder="Bio"
                                    name="answer"
                                    id="answer"
                                    required value={singleAnswer.text}
                                    // disabled={isDisabled}
                                    onChange={(e) => handleAnswerCardChange(e, index)}
                                >
                                </textarea>

                                <div className="grid justify-items-center">
                                    {/*Toggle True or False  */}
                                    <input type="checkbox" className="toggle" onClick={() => toggler(index)} />
                                    {toggleList[index] ? <span>Correct</span> : <span>Incorrect</span>}

                                </div>



                            </div>
                        </div>
                    ))}


                    {answerCards.length < 4 &&
                        <div key={-1} onClick={handleAnswerCardAdd} className="card w-64 h-64 bg-none border border-dashed border-4 hover:shadow-xl">
                            <div className="card-body">
                                <div className="card-actions flex justify-around items-center h-full">
                                    <div className="flex flex-row space-x-4" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        Add Answer
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}






export default AnswerCards;