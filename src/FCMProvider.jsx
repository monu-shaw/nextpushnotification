"use client"
import React, { useEffect, useState } from "react";
import { messaging } from "./firebase";
import { ToastContainer, toast } from "react-toastify";

const FCMProvider=({children})=>{

    useEffect(() => {
        const requestPermission = async () => {
          const status = await Notification.requestPermission();
          if (status === "granted") {
            console.log("Notification permission granted");
            // Get the FCM token for this device
            const token = await messaging.getToken({
              vapidKey: process.env.NEXT_PUBLIC_VAPIDKEY,
            });
            console.log("Your token:", token);
            // Send this token to your server for further processing
          } else {
            console.log("Notification permission denied");
          }
        };
      
        requestPermission();

        const onMessageListener = (message) => {
            console.log("New message received:", message);
            toast.success(message)
        };
        
        messaging.onMessage(onMessageListener);
      }, []);

      return(
      <>
      
      {children}
      </>
      )
}

export default  FCMProvider