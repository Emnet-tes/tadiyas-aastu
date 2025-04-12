"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";

import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-email";


export type FormData = {
    name: string;
    email: string;
    message: string;
}
const Contact = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(data: FormData) {
    setIsSubmitting(true); 
    try {
      await sendEmail(data); 
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setIsSubmitting(false); 
    }
  }

  return (
    <div className="pt-24 pb-16 bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Have questions about our magazines or want to collaborate? We&apos;d
            love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@domain.com"
                  {...register("email", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  {...register("message", { required: true })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors inline-flex items-center justify-center group cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <FaArrowRight className="ml-2" />}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <button className="text-xl mt-1 mr-4">
                    <FaEnvelope />
                  </button>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">aastutadiyas@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <button className="text-xl mt-1 mr-4">
                    <FaMapMarkerAlt />
                  </button>
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-gray-600 space-y-2">
                      Tulu Dimtu
                      <br />
                      Akaki Kaliti
                      <br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
              </div>

              {/* Be Member Button */}
              <div className="mt-6 flex flex-row justify-around">
                <Link href="http://bit.ly/3QZwBpD" passHref target="_blank">
                  <button className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                    Be a Member
                  </button>
                </Link>
                <Link
                  href="https://t.me/tadiyasAASTUmagazine_bot"
                  passHref
                  target="_blank"
                >
                  <button className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                    Submit Work
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

