"use client";

import { useState } from "react";

export default function ContactPage() {
  const [result, setResult] = useState<"success" | "error" | "sending" | "">("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("sending");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "0fc189f0-15b4-4fed-8072-dc8307598a8e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data.success ? "success" : "error");

      if (data.success) {
        event.currentTarget.reset();
      }
    } catch {
      setResult("error");
    }
  };

  return (
    <section className="contact-section">
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="contact-row">
          <input
            type="text"
            name="First_Name"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="Last_Name"
            placeholder="Last Name"
            required
          />
        </div>

        <div className="contact-row">
          <input type="email" name="email" placeholder="Email" />
          <span className="contact-or">OR</span>
          <input type="tel" name="phone" placeholder="Phone #" />
        </div>

        <textarea
          name="message"
          placeholder="Questions, Conerns, Commission request...."
          required
        />

        <div className="button-container">
          <button
            type="submit"
            className="contact-submit"
            disabled={result === "sending"}
          >
            {result === "sending" ? "Sending..." : "Submit"}
          </button>
        </div>

        {/* Result Message */}
        {result === "success" && (
          <p className="contact-success">
            Thank you for reaching out! I’ll get back to you as soon as possible.
          </p>
        )}

        {result === "error" && (
          <p className="contact-error">
            Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </section>
  );
}
