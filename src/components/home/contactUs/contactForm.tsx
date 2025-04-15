"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className=" bg-white p-6 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4 px-6 pt-8">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full py-1.5 px-5  border border-[#1A97C7] rounded bg-white text-black"
            style={{ fontFamily: "Inter", fontWeight: 400 }}
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
            style={{ fontFamily: "Inter", fontWeight: 400 }}
            className="w-full py-1.5 px-5 border border-[#1A97C7] rounded bg-white text-black"
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
            style={{ fontFamily: "Inter", fontWeight: 400 }}
            className="w-full py-1.5 px-5 border border-[#1A97C7] rounded bg-white text-black"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            style={{ fontFamily: "Inter", fontWeight: 400 }}
            className="w-full p-2 px-5 border border-[#1A97C7] rounded bg-white text-black min-h-[120px] resize-none"
            required
          />
        </div>
        <div className="flex justify-center">
          <Button type="submit" className="bg-[#1A2730] hover:bg-[#263845] text-white w-65 py-5 rounded-lg ">
          Send Message
          </Button>
        </div>
      </form>
    </div>
  )
}

