"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { messaging } from "@/firebase";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Home() {
  useEffect(() => {
    const onMessageListener = (message) => {
        console.log("New message received:", message);
        toast.success(message.notification.title)
        toast(message.notification.body)
      };
      messaging.onMessage(onMessageListener);
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by Forking&nbsp;
          <code className={styles.code}>monu-shaw/nextpushnotification</code>
        </p>
        <div>
          <a
            href="https://monu-shaw.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <h2>Monu Shaw</h2>
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <h1 style={{marginLeft:'20px'}}>Push Notification</h1>
      </div>

      <div className={styles.grid}>
        <a
          href="https://blog.desidevs.site/how-to-send-push-notifications-with-nextjs-and-fcm"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Blog <span>-&gt;</span>
          </h2>
          <p>Find in-depth information how to set Firebase FCM</p>
        </a>
      
        <a
          href="https://github.com/monu-shaw/nextpushnotification"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Code <span>-&gt;</span>
          </h2>
          <p>Explore source code at github.</p>
        </a>

      </div>
    </main>
  );
}
