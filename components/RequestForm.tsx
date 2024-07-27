"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { requestAndTry } from "../lib/requestAndTry";

// Define the schema using yup
const schema = yup.object().shape({
  url: yup.string().url("Must be a valid URL").required("URL is required"),
  retry: yup
    .number()
    .min(1, "Must be at least 1")
    .required("Retry count is required"),
});

// Define the form data interface
interface FormData {
  url: string;
  retry: number;
}

// Define the result type
interface Result {
  try: number;
  status: boolean;
  timeSpent: number;
  statusCode?: number;
}

// Function to get the status color
const getStatusColor = (status: boolean) =>
  status ? "text-green-500" : "text-red-500";

// Function to get the time color based on response time
const getTimeColor = (timeSpent: number) => {
  if (timeSpent <= 200) return "text-green-500 opacity-100";
  if (timeSpent <= 300) return "text-green-500 opacity-75";
  if (timeSpent <= 400) return "text-yellow-500 opacity-50";
  return "text-red-500 opacity-75";
};

// Function to get error messages based on status code
const getErrorMessage = (statusCode: number) => {
  switch (statusCode) {
    case 404:
      return "404 -> Page not found. It means the page you requested no longer exists.";
    case 500:
      return "500 -> Internal Server Error. The server encountered an unexpected condition.";
    // Add more cases as needed
    default:
      return `${statusCode} -> An unknown error occurred.`;
  }
};

// Define the RequestForm component
export default function RequestForm() {
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // Define the form submit handler
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const result = await requestAndTry(data.url, data.retry);
      setResult(result);
    } catch (error: any) {
      setResult({
        try: error.try,
        status: false,
        timeSpent: error.timeSpent,
        statusCode: error.statusCode,
      });
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <h1 className="text-2xl font-bold mb-4">Request and Try</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 w-1/2"
      >
        <div>
          <input
            type="text"
            {...register("url")}
            placeholder="Enter URL"
            className="p-2 border border-gray-300 rounded w-full"
          />
          {errors.url && (
            <p className="text-red-500 text-sm">{errors.url.message}</p>
          )}
        </div>
        <div>
          <input
            type="number"
            {...register("retry")}
            placeholder="Number of retries"
            className="p-2 border border-gray-300 rounded w-full"
          />
          {errors.retry && (
            <p className="text-red-500 text-sm">{errors.retry.message}</p>
          )}
        </div>
        <button type="submit" className="p-2 bg-teal-500 text-white rounded">
          Submit
        </button>
      </form>
      {loading && <p className="mt-4">Loading...</p>}
      {result && !loading && (
        <div className="mt-4 p-4 border rounded w-1/2">
          <p
            className={`font-bold text-gray-900 ${getStatusColor(
              result.status
            )}`}
          >
            Try Number: {result.try}
          </p>
          <p className={`font-bold ${getStatusColor(result.status)}`}>
            Status: {result.status ? "Success" : "Failed"}
          </p>
          <p className={`font-bold ${getTimeColor(result.timeSpent)}`}>
            Time Spent: {result.timeSpent} ms
          </p>
          {result.statusCode && (
            <p className="text-red-500 mt-2">
              {getErrorMessage(result.statusCode)}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
