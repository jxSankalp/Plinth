import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ProgressBar = () => {

    useGSAP(() => {

        const tl = gsap.timeline();

        tl.to('#progress', {
            width: '33%',
            duration : 2,
        })

        tl.to('#progress', {
            width: '66%',
            duration : 2,
        })

        tl.to('#progress', {
            width: '100%',
            duration : 1.5,
        })
    }, [])

    return (
        <div className="relative w-[20rem] sm:w-[19rem] md:w-[27rem] lg:w-[40rem] bg-white h-[0.1rem] sm:h-[0.15rem] mt-12 mx-auto">

            <div
                className="absolute top-0 left-0 bg-neon h-[0.1rem] sm:h-[0.15rem]"
                style={{ width: '0%' }}
                id='progress'
            />
        </div>
    );
};

export default ProgressBar;
