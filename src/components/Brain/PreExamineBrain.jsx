import React, { useEffect, useState } from "react";
import { Card, Button, Input, Typography, Avatar } from "antd";
import { UserOutlined, RobotOutlined } from "@ant-design/icons";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const { Title, Text } = Typography;

const questions = [
  {
    key: "age",
    question: "What is your age?",
    type: "input",
  },
  {
    key: "headache",
    question: "Have you experienced persistent headaches recently?",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    key: "seizures",
    question: "Have you had any seizures or convulsions?",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    key: "vision",
    question: "Do you have any vision problems or blurry vision?",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    key: "balance",
    question: "Have you noticed difficulty in balance or coordination?",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    key: "nausea",
    question: "Are you experiencing nausea or vomiting without a clear cause?",
    type: "select",
    options: ["Yes", "No"],
  },
];

export default function BrainPreExaminationChat({ onFinish }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [chat, setChat] = useState([]);
  const [answers, setAnswers] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [finished, setFinished] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const q = questions[currentStep];
    if (q) {
      setTimeout(() => {
        setChat((prev) => [...prev, { sender: "bot", text: q.question }]);
      }, 500);
    }
  }, [currentStep]);

  const handleAnswer = (value) => {
    const q = questions[currentStep];
    const updatedAnswers = { ...answers, [q.key]: value };

    setChat((prev) => [
      ...prev,
      { sender: "user", text: value },
      { sender: "bot", text: getFollowUpResponse(q.key, value) },
    ]);
    setAnswers(updatedAnswers);
    setInputValue("");

    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 800);
    } else {
      setTimeout(() => analyzeRisk(updatedAnswers), 1000);
    }
  };

  const getFollowUpResponse = (key, value) => {
    if (value === "Yes") {
      switch (key) {
        case "headache":
          return "Persistent headaches should be evaluated seriously.";
        case "seizures":
          return "Seizures could be a symptom of something significant.";
        case "vision":
          return "Vision problems might indicate pressure or swelling.";
        case "balance":
          return "Difficulty with balance could relate to neurological issues.";
        case "nausea":
          return "Nausea without reason could be a symptom to watch.";
        default:
          return "Thanks for your response. Let’s continue.";
      }
    } else if (value === "No") {
      return "Okay, noted. Let's move on.";
    } else {
      return "Thanks for sharing.";
    }
  };

  const analyzeRisk = (finalAnswers) => {
    const yesCount = Object.values(finalAnswers).filter(
      (val) => val === "Yes"
    ).length;
    const age = parseInt(finalAnswers.age);
    let msg = "";

    if (yesCount >= 3 || age >= 50) {
      msg =
        "🟡 Based on your responses, we recommend proceeding with an image-based diagnosis.";
    } else {
      msg =
        "🟢 Your answers indicate a low immediate risk. However, you can still upload an image if concerned.";
    }

    setChat((prev) => [...prev, { sender: "bot", text: msg }]);
    setFinished(true);
  };

  const renderInput = () => {
    const q = questions[currentStep];
    if (!q) return null;

    if (q.type === "input") {
      return (
        <Input
          placeholder="Type your age and press Enter"
          value={inputValue}
          type="number"
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={() => {
            const ageValue = parseInt(inputValue);
            if (inputValue && !isNaN(ageValue) && ageValue > 0) {
              handleAnswer(ageValue.toString());
            }
          }}
        />
      );
    } else {
      return (
        <motion.div
          className="flex gap-4 flex-wrap mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {q.options.map((opt) => (
            <motion.div
              key={opt}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type={
                  opt === "Yes"
                    ? "primary"
                    : opt === "No"
                    ? "default"
                    : "dashed"
                }
                onClick={() => handleAnswer(opt)}
                style={{
                  minWidth: 100,
                  fontWeight: 500,
                }}
              >
                {opt}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      );
    }
  };

  const renderMessage = (msg, index) => {
    const isUser = msg.sender === "user";
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: isUser ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          display: "flex",
          justifyContent: isUser ? "flex-end" : "flex-start",
          marginBottom: 10,
        }}
      >
        {!isUser && (
          <Avatar icon={<RobotOutlined />} style={{ marginRight: 8 }} />
        )}
        <Card
          size="small"
          style={{
            maxWidth: "70%",
            background: isUser ? "#1890ff" : "#f5f5f5",
            color: isUser ? "#fff" : "#000",
            borderRadius: 12,
          }}
        >
          {msg.text}
        </Card>
        {isUser && <Avatar icon={<UserOutlined />} style={{ marginLeft: 8 }} />}
      </motion.div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-xl my-14 mx-auto px-4 mt-[20vh]">
        <Card>
          <Title level={4}>🧠 Brain Tumor Pre-Examination Chat</Title>
          <Text type="secondary">
            Answer a few questions to assess your risk before uploading an image.
          </Text>
        </Card>

        <div className="mt-6 space-y-4">
          <AnimatePresence initial={false}>
            {chat.map((msg, i) => renderMessage(msg, i))}
          </AnimatePresence>
        </div>

        {!finished && <div className="mt-6 ml-10">{renderInput()}</div>}

        {finished && (
          <div className="mt-6 ml-10">
            <Button
              type="primary"
              onClick={() => {
                navigate("/brain");
                onFinish(answers);
              }}
            >
              Proceed to diagnosis
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
