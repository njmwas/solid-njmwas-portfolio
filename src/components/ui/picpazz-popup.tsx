"use client"
import { useState } from "react";
import { Button } from "./button";

function PlayPicpazzPopup() {

    const [picpazzed, setPicpazzed] = useState(false);
    return (<>

        <Button size={"lg"} variant={"link"} className="rounded-full text-xl p-6" onClick={() => setPicpazzed(!picpazzed)}>or enjoy Picpazz</Button>

        {picpazzed && <div className="fixed top-0 left-0 z-20 bg-black bg-opacity-80 h-dvh w-screen flex flex-col items-center justify-center">
            <div className="md:w-3/5 h-4/5 bg-white p-4 rounded">
                <div className="flex justify-between items-center">
                    <h5 className="text-2xl">Picpazz Game</h5>
                    <Button variant={"ghost"} className="" onClick={() => setPicpazzed(!picpazzed)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </Button>
                </div>
                <iframe src="https://picpazz.com/embeded?embed=true" className="w-full h-full"></iframe>
            </div>
        </div>}
    </>);
}

export default PlayPicpazzPopup;