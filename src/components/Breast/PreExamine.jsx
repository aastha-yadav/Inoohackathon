import React, { useEffect, useState } from "react";
import { Card, Button, Input, Select, Typography, Avatar } from "antd";
import { UserOutlined, RobotOutlined } from "@ant-design/icons";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
const { Option } = Select;

const questions = [
  {
    key: "age",
    question: "What is your age?",
    type: "input",
  },
  {
    key: "lump",
    question: "Have you noticed any lump in your breast?",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    key: "pain",
    question: "Do you feel any pain in the breast area?",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    key: "discharge",
    question: "Is there any nipple discharge?",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    key: "familyHistory",
    question: "Any history of breast cancer in the family?",
    type: "select",
    options: ["Yes", "No", "Don't Know"],
  },
  {
    key: "skinChanges",
    question: "Do you notice skin changes or dimpling on your breast?",
    type: "select",
    options: ["Yes", "No"],
  },
];

export default function PreExaminationChat({ onFinish }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [chat, setChat] = useState([]);
  const [answers, setAnswers] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [finished, setFinished] = useState(false);

  // Show the current question
  useEffect(() => {
    const q = questions[currentStep];
    if (q) {
      setTimeout(() => {
        setChat((prev) => [...prev, { sender: "bot", text: q.question }]);
      }, 500); // Add delay to simulate typing
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
        case "lump":
          return "A lump should always be checked further by a doctor.";
        case "pain":
          return "Persistent pain could indicate an underlying issue.";
        case "discharge":
          return "Discharge is a sign that should not be ignored.";
        case "familyHistory":
          return "Family history increases the importance of early detection.";
        case "skinChanges":
          return "Skin changes might be a sign of something concerning.";
        default:
          return "Got it. Let's continue.";
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

    if (yesCount >= 3 || age >= 40) {
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
          placeholder="Type your answer and press Enter"
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
        <Select
          style={{ width: 220 }}
          onChange={(value) => handleAnswer(value)}
          placeholder="Select an answer"
        >
          {q.options.map((opt) => (
            <Option key={opt} value={opt}>
              {opt}
            </Option>
          ))}
        </Select>
      );
    }
  };

  const renderMessage = (msg, index) => {
    const isUser = msg.sender === "user";
    return (
      <div
        key={index}
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
      </div>
    );
  };
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="max-w-xl my-14 mx-auto px-4 mt-[20vh]">
        <Card>
          <Title level={4}>🩺 Breast Health Pre-Examination Chat</Title>
          <Text type="secondary">
            Chat with our virtual assistant to assess your risk before uploading
            an image.
          </Text>
        </Card>

        <div className="mt-6 space-y-4">
          {chat.map((msg, i) => renderMessage(msg, i))}
        </div>

        {!finished && <div className="mt-6">{renderInput()}</div>}

        {finished && (
          <div className="mt-6">
            <Button type="primary" onClick={() => {
                navigate("/breast")
                onFinish(answers)}}>
              Proceed to diagnosis
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
