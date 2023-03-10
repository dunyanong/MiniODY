import React, { useRef, useState, useEffect } from "react";
// 1. TODO - Import required model here
// e.g. import * as tfmodel from "@tensorflow-models/tfmodel";
import * as cocossd from '@tensorflow-models/coco-ssd';
import Webcam from "react-webcam";
import Head from "next/head";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
// 2. TODO - Import drawing utility here
// e.g. import { drawRect } from "./utilities";

const Demo = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function runCoco() {
        // 3. TODO - Load network 
        const net = await cocossd.load();
        setLoading(false);
        //  Loop and detect hands
        setInterval(() => {
          detect(net);
        }, 100);
      }
      runCoco();
    }, []);

    const drawSomething = (detections, ctx) =>{
      // Loop through each prediction
      detections.forEach(prediction => {
    
        // Extract boxes and classes
        const [x, y, width, height] = prediction['bbox']; 
        const text = prediction['class']; 
    
        // Set styling
        const color = Math.floor(Math.random()*16777215).toString(16);
        ctx.strokeStyle = '#' + color
        ctx.font = '18px Arial';
    
        // Draw rectangles and text
        ctx.beginPath();   
        ctx.fillStyle = '#' + color
        ctx.fillText(text, x, y);
        ctx.rect(x, y, width, height); 
        ctx.stroke();
      });
    }
  
    const detect = async (net) => {
      // Check data is available
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {
        // Get Video Properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;
  
        // Set video width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
  
        // Set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
  
        // 4. TODO - Make Detections
        const obj = await net.detect(video);
        console.log(obj);
  
        // Draw mesh
        const ctx = canvasRef.current.getContext("2d");
  
        // 5. TODO - Update drawing utility
        drawSomething(obj, ctx)  
      }
    };
  
    return (
      <div>
        <Head>
          <title>MiniODY</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='min-h-screen flex flex-col'>
          <Navbar />
          <h1 className="text-3xl mx-auto font-extrabold tracking-tight text-white sm:text-4xl pb-4 sm:pb-4">Object Detector</h1>
          <div className="relative my-10 mx-5">
            
          {loading ? (
            <div className="text-white text-center">Loading...</div>
          ) : (
            <div className="relative my-10 mx-5">
              <Webcam ref={webcamRef} muted={true} className="rounded" />
              <canvas ref={canvasRef} className="absolute top-0 left-0 h-full w-full object-cover" />
            </div>
          )}
          </div>
          <Footer />
        </div>
      </div>
    );  
}

export default Demo;