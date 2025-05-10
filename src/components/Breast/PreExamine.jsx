import React, { useState } from "react";
import {
  Card,
  Button,
  Input,
  Select,
  Typography,
  Space,
  Avatar,
  Divider,
} from "antd";
import { UserOutlined, RobotOutlined } from "@ant-design/icons";

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
  const [recommendation, setRecommendation] = useState("");

  const handleAnswer = (value) => {
    const q = questions[currentStep];

    // Save chat and answer
    const newChat = [
      ...chat,
      { sender: "bot", text: q.question },
      { sender: "user", text: value },
    ];

    setChat(newChat);
    setAnswers((prev) => ({ ...prev, [q.key]: value }));

    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      analyzeRisk({ ...answers, [q.key]: value }, newChat);
    }

    setInputValue("");
  };

  const analyzeRisk = (finalAnswers, newChat) => {
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

    setChat([...newChat, { sender: "bot", text: msg }]);
    setRecommendation(msg);
    setFinished(true);
  };

  const renderInput = () => {
    const q = questions[currentStep];
    if (q.type === "input") {
      return (
        <Input
          placeholder="Type your answer and press Enter"
          value={inputValue}
          type="number"
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={() => {
            if (inputValue) handleAnswer(inputValue);
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

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
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
          <Button type="primary" onClick={() => onFinish(answers)}>
            Proceed to Upload Image
          </Button>
        </div>
      )}
    </div>
  );
}
