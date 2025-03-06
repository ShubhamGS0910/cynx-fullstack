import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";

// Validation Schema
const schema = yup.object().shape({
  fullName: yup.string().min(4, "Enter at least 2 words").required("Full name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup.string().matches(/^[0-9]+$/, "Phone must be numeric").min(10).max(15).optional(),
  company: yup.string().optional(),
  inquiryType: yup.string().required("Please select an inquiry type"),
  message: yup.string().max(500, "Message is too long").required("Message is required"),
  file: yup.mixed().test("fileSize", "File too large (max 5MB)", (file) => !file || (file.size <= 5 * 1024 * 1024)),
});

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState("");
  const [captcha, setCaptcha] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (!captcha) {
      setSubmitStatus("error");
      return;
    }
    setSubmitStatus("loading");
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => formData.append(key, data[key]));
      formData.append("captcha", captcha);
      await axios.post("https://your-backend-api.com/contact", formData);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  return (
    <div className="max-w-full px-20 mx-auto p-8 bg-white dark:bg-gray-700 shadow-xl ">  
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-green-400">Let's Connect</h2>
      <p className="text-center text-gray-600 dark:text-white mt-2">We'd love to hear from you!</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
        {/* Full Name & Email */}
        <div className="grid grid-cols-2 gap-6">
          <div className="relative">
            <input type="text" {...register("fullName")} className="input-field" />
            <label className="input-label">Full Name *</label>
            <p className="text-red-500 text-sm mt-1">{errors.fullName?.message}</p>
          </div>
          <div className="relative">
            <input type="email" {...register("email")} className="input-field" />
            <label className="input-label">Email Address *</label>
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          </div>
        </div>

        {/* Phone & Company */}
        <div className="grid grid-cols-2 gap-6">
          <div className="relative">
            <input type="text" {...register("phone")} className="input-field" />
            <label className="input-label">Phone (Optional)</label>
            <p className="text-red-500 text-sm mt-1">{errors.phone?.message}</p>
          </div>
          <div className="relative">
            <input type="text" {...register("company")} className="input-field" />
            <label className="input-label">Company (Optional)</label>
          </div>
        </div>

        {/* Inquiry Type */}
        <div className="relative">
          <select {...register("inquiryType")} className="input-field">
            <option value="">Select Inquiry Type</option>
            <option value="general">General Inquiry</option>
            <option value="business">Business Inquiry</option>
            <option value="support">Support/Technical Help</option>
            <option value="partnership">Partnership Request</option>
            <option value="career">Job/Career Inquiry</option>
          </select>
          <label className="input-label">Inquiry Type *</label>
          <p className="text-red-500 text-sm mt-1">{errors.inquiryType?.message}</p>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea {...register("message")} className="input-field h-28"></textarea>
          <label className="input-label">Message *</label>
          <p className="text-red-500 text-sm mt-1">{errors.message?.message}</p>
        </div>

        {/* File Upload */}
        <div className="relative border-1 p-1">
         <div className="relative w-80 hover hover:to-blue-800 bg-gray-600 ">
          <input type="file" {...register("file")} className="w-full pl-10 content-center justify-center " />
          <p className="text-red-500 text-sm mt-1">{errors.file?.message}</p>
          </div>
        </div>

        {/* reCAPTCHA */}
        <div className="flex justify-center">
          <ReCAPTCHA sitekey="your-google-recaptcha-key" onChange={setCaptcha} />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-lg transition-all hover:bg-blue-700 dark:hover:bg-blue-400"
        >
          {submitStatus === "loading" ? "Submitting..." : "Submit"}
        </motion.button>

        {submitStatus === "success" && <p className="text-green-500 text-center">Message Sent Successfully!</p>}
        {submitStatus === "error" && <p className="text-red-500 text-center">Error Sending Message. Try Again.</p>}
      </form>
    </div>
  );
}
