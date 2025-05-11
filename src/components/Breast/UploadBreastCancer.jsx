import React, { useState } from "react";
import { InboxOutlined, FireFilled } from "@ant-design/icons";
import { message, Upload, Progress } from "antd";
import { motion } from "framer-motion";
import Sparkle from 'react-sparkle'; // 👈 optional sparkle component

const { Dragger } = Upload;

const BreastCancerUpload = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const props = {
    name: "file",
    multiple: false,
    showUploadList: false,
    beforeUpload: (file) => {
      setFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      return false; // prevent auto upload
    },
  };

  const handlePredict = async () => {
    if (!file) {
      message.warning("Please upload a file first.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data?.result) {
        setPrediction(data);
        message.success("Prediction successful.");
      } else {
        message.error("Unexpected response from server.");
      }
    } catch (err) {
      message.error("Prediction failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const DiagnosingAnimation = () => (
    <motion.div
      className="text-center mt-8 space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h3
        className="text-2xl font-bold text-pink-600"
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
      >
        🤖 AI is Diagnosing...
      </motion.h3>
      <motion.div
        className="relative inline-block rounded-xl overflow-hidden border-4 border-pink-200 shadow-lg"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1.05 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2 }}
      >
        <img
          src={previewUrl}
          alt="Uploaded Preview"
          className="w-64 h-64 object-cover"
        />
        <Sparkle count={40} overflowPx={0} fadeOutSpeed={10} flicker={false} />
      </motion.div>
      <p className="text-gray-500 italic">Please wait, analyzing image...</p>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex items-center justify-center px-4 py-8">
      {prediction ? (
        <div className="mt-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-gray-700">Diagnosis Result</h3>

          <div className="flex flex-col items-center justify-center space-y-2">
            <Progress
              type="circle"
              percent={prediction.confidence}
              format={(percent) => `${percent}%`}
              strokeColor={
                prediction.confidence > 70
                  ? "#f5222d"
                  : prediction.confidence > 40
                  ? "#fa8c16"
                  : "#52c41a"
              }
            />
            <div className="text-lg font-semibold">
              <FireFilled
                style={{
                  color:
                    prediction.confidence > 70
                      ? "#f5222d"
                      : prediction.confidence > 40
                      ? "#fa8c16"
                      : "#52c41a",
                  fontSize: 24,
                  marginRight: 8,
                }}
              />
              {prediction.result}
            </div>
          </div>

          <div className="mt-4 px-6 py-4 bg-yellow-50 border border-yellow-200 rounded-md text-sm text-yellow-800">
            <strong className="block mb-2 text-yellow-700">
              Recommended Precautions:
            </strong>
            <p>{prediction.precaution}</p>
          </div>

          <button
            className="mt-4 px-4 py-2 text-sm bg-pink-500 text-white rounded hover:bg-pink-600"
            onClick={() => {
              setPrediction(null);
              setFile(null);
              setPreviewUrl(null);
            }}
          >
            Upload Another
          </button>
        </div>
      ) : loading ? (
        <DiagnosingAnimation />
      ) : (
        <div className="w-full max-w-3xl p-8 bg-white rounded-2xl shadow-xl border border-pink-100">
          <h2 className="text-3xl font-bold text-center text-pink-600 mb-4">
            Upload Your Mammogram Report
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Help us assist you better by uploading your latest breast cancer
            mammogram scan or report. Your data is safe and used only for
            diagnostic purposes.
          </p>

          <Dragger
            {...props}
            className="bg-pink-50 border-pink-300 hover:border-pink-500 transition-all"
          >
            <p className="ant-upload-drag-icon text-pink-500">
              <InboxOutlined style={{ fontSize: "36px" }} />
            </p>
            <p className="ant-upload-text font-semibold text-gray-700">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint text-gray-500 text-sm">
              Supports single file upload. We do not store any data.
            </p>
          </Dragger>

          {previewUrl && (
            <motion.div
              className="mt-6 flex justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={previewUrl}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-xl border-2 border-pink-200"
              />
            </motion.div>
          )}

          <div className="mt-4 flex justify-center">
            <button
              onClick={handlePredict}
              disabled={!file || loading}
              className={`px-4 py-2 text-sm bg-pink-500 text-white rounded hover:bg-pink-600 ${
                (!file || loading) && "opacity-50 cursor-not-allowed"
              }`}
            >
              {loading ? "Analyzing..." : "Predict"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BreastCancerUpload;
