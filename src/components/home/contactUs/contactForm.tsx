"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import axios from 'axios' // Make sure you have axios installed: npm install axios

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)  // Start loading state
    setError("")  // Reset previous errors

    try {
      // Send form data to your API Gateway endpoint (AWS Lambda)
      const response = await axios.post(
        'https://dcwiyx9x8g.execute-api.us-east-1.amazonaws.com/prod/contact', // Replace with your API Gateway URL
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      // Handle success
      setFormData({ name: "", email: "", subject: "", message: "" })  // Reset form
    } catch (err: any) {
      // Handle error
      setError(err.response?.data?.error || 'An error occurred while sending the email.')
    } finally {
      setLoading(false)  // End loading state
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg">
      <form onSubmit={handleSubmit} className="lg:space-y-4 md:space-y-3 space-y-7 lg:px-6 md:px-2 lg:pt-8 md:pt-3 px-4 py-3" >
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full md:py-1.5 py-1 px-3 md:text-[18px] text-[12px] md:px-5 border border-[#1A97C7] rounded bg-white text-black "
            style={{ fontFamily: "Inter" }}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full md:py-1.5 md:px-5 py-1 px-3 md:text-[18px] text-[12px] border border-[#1A97C7] rounded bg-white text-black"
            style={{ fontFamily: "Inter" }}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full md:py-1.5 md:px-5 py-1 px-3 md:text-[18px] text-[12px] border border-[#1A97C7] rounded bg-white text-black"
            style={{ fontFamily: "Inter" }}
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full md:p-2 p-1 md:px-5 py-1 px-3 md:text-[18px] text-[12px] border border-[#1A97C7] rounded bg-white text-black md:min-h-[120px]  min-h-[82px] resize-none"
            style={{ fontFamily: "Inter" }}
            required
          />
        </div>

        {/* Show error messages */}
        {error && <div className="text-red-500 text-center">{error}</div>}

        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-[#1A2730] hover:bg-[#263845] text-white md:w-65 md:py-5 rounded-lg font-[400] text-[12px] md:text-[18px] px-10 "
            disabled={loading} // Disable button while loading
            style={{ fontFamily: "Inter" }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  )
}
