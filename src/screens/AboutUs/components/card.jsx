import React from 'react'
import { IMAGES } from '../../../utils/Images'
import { AboutCardData } from '../../../utils/DummyData';

const Card = () => {
    return (
        <div>
            {
                AboutCardData.map((item, ind) => {
                    return (
                        <div className=' w-full mx-auto flex justify-center' >
                            <div
                                key={ind}
                                className={`flex w-[70%] my-10 gap-10  ${ind % 2 === 1 ? "flex-row-reverse" : "flex-row"}`}
                            >
                                <div className="bg w-[60%] flex flex-col gap-20 justify-center px-2">
                                    <p className="text-textColor4  text-[50px] font-semibold">
                                        {item.heading}
                                    </p>
                                    <p className="text-start text-[23px] text-textColor2 ">{item.text}</p>
                                </div>
                                <div>
                                    <img
                                        src={item.image} // Correctly use the `item.image` property
                                        className="w-[548px] h-[669px] object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })
            }



            {/* Card  Need Start */}

            <div className=' w-full mx-auto flex items-center justify-center flex-col' >
                <p className="text-teal-400 text-[80px] mb-6">
                    NEED TO CANCEL
                </p>
                <div>
                    <img
                        src={IMAGES.ABOUT4}
                        className="w-[401px] h-[570px] object-contain border-2 border-textColor4 boxBorder"
                    />
                </div>
                <div className={`flex w-[70%] items-center justify-center my-10 gap-10 mx-auto`} >
                    <div className="w-[60%] flex flex-col items-center justify-center px-2">

                        <p className="text-center text-textColor2 leading-6"> <p>We are aware that life occasionally interferes. We make an effort to be as</p>
                            accommodating as we can when it comes to cancelling appointments because
                            of this. We will make every effort to find you a better slot if you cancel more than
                            24 hours before your scheduled appointment, no questions asked. We will have to
                            levy an administration fee if you cancel with less than 24 hours to go</p>
                    </div>

                </div>
            </div>

            {/* Card Need End */}


        </div>
    )
}






























export default Card





/* .mainheadung
subheading
paragragl
text
heading  */



// @layer base {
//     heading {
//       @apply text-2xl;
//     }
//     h2 {
//       @apply text-xl;
//     }
//   } 