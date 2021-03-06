import React, { useRef, useState, useEffect } from "react";

import MotionDetector from "./components/MotionDetector/MotionDetector";
import ActivityGraph from "./components/ActivityGraph/ActivityGraph";
import ActivityLog from "./components/ActivityLog/ActivityLog";
import ProductivityStats from "./components/ProductivityStats/ProductivityStats";
import TimeSchedule from "./components/TimeSchedule/TimeSchedule";
import DashboardElementHeader from "./components/DashboardElementHeader/DashboardElementHeader";
import styles from "./App.module.scss";

function get(name) {
  if (
    (name = new RegExp("[?&]" + encodeURIComponent(name) + "=([^&]*)").exec(
      window.location.search
    ))
  )
    return decodeURIComponent(name[1]);
}
export default function() {
  const video = useRef(undefined);
  const [currentState, setCurrentState] = useState("quiet");
  const [score, setScore] = useState(0);
  const [scoreLog, setScoreLog] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activityIndex, setActivityIndex] = useState(0);

  const brain_api = get("AI_URL") || "192.168.2.2";

  // connect the webcam with the video element
  useEffect(() => {
    var constraints = {
      audio: false,
      video: { width: 640, height: 480 }
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(success => {
        video.current.srcObject = success;
      })
      .catch(error => {
        console.log(error);
      });
  }, [video.current]);

  // analyze and summeraize the score
  useEffect(() => {
    // set the score
    setScoreLog(prev => {
      // make sure only the last 100 are saved
      if (prev.length === 100) {
        prev.shift();
      }
      // add latest
      prev.push(score);
      return prev;
    });

    // analyze Entries
    const overallScore = scoreLog.reduce((pv, cv) => pv + cv, 0);

    if (overallScore > 2000 && overallScore <= 4000) {
      if (currentState === "quiet") {
        setCurrentState("started");
        setMessages(prev => ["Meeting started", ...prev]);

        fetch(`http://${brain_api}:5000/blinds/meeting/start`)
          .then(() => {})
          .catch(error => {
            console.log(error);
          });
      }
    }

    if (overallScore > 4000 && overallScore <= 7000) {
      if (currentState === "started") {
        setCurrentState("normal");
        setMessages(prev => ["Formal meeting detected", ...prev]);

        fetch(`http://${brain_api}:5000/blinds/meeting/formal`)
          .then(() => {})
          .catch(error => {
            console.error(error);
          });
      }
    }
    if (overallScore > 15000) {
      if (currentState === "normal") {
        setCurrentState("active");
        setMessages(prev => ["Engaged meeting detected", ...prev]);

        fetch(`http://${brain_api}:5000/blinds/meeting/end`)
          .then(() => {})
          .catch(error => {
            console.error(error);
          });
      }
    }
    // activity index steps
    if (overallScore <= 50000) {
      setActivityIndex(parseFloat(overallScore / 6000).toFixed(2));
    }
    if (overallScore > 50000) {
      setActivityIndex(parseFloat(8 + Math.random()).toFixed(2));
    }
  }, [score]);

  return (
    <div className={styles.container}>
      <div className={styles.motioncharts}>
        <DashboardElementHeader title="Motion charts" info={score} />
        <ActivityGraph score={score} globalTrend={false} />
      </div>

      <div className={styles.videostream}>
        <DashboardElementHeader title="Video stream" info="live" />
        <div className={styles.videoContainer}>
          <video ref={video} autoPlay />
        </div>
      </div>

      <div className={styles.motionstream}>
        <DashboardElementHeader title="Motion detection" info="live" />
        <MotionDetector setScore={setScore} video={video} />
      </div>

      <div className={styles.productivity}>
        <ProductivityStats
          index={activityIndex}
          currentState={currentState}
          activityIndex={activityIndex}
        />
      </div>
      <div className={styles.timeschedule}>
        <h2>Timeschedule</h2>
        <TimeSchedule />
      </div>

      <div className={styles.activitylog}>
        <DashboardElementHeader title="Activity log" />
        <ActivityLog messages={messages} />
      </div>
    </div>
  );
}
