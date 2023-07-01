import React from "react";

export default function ContactUsForm() {
  return (
    <div>
      <div>
        <form>
          <div>
            <label>
              <span>Email address</span>
              <span>&nbsp;</span>
              <span>*</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="E.g. example@domain.com"
              autoComplete="off"
            />
          </div>
          <div>
            <label>Enter your name</label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="E.g. John Doe"
              rows="1"
            />
          </div>
          <div>
            <label>Upload files</label>
            <div>
              <div>
                <svg />
              </div>
              <p>No file selected</p>
              <button type="button">
                <div>
                  <svg />
                </div>
                <span>Select files</span>
              </button>
            </div>
          </div>
          <div>
            <label>
              <span>Message</span>
              <span>&nbsp;</span>
              <span>*</span>
            </label>
            <textarea
              type="textarea"
              name="message"
              autoComplete="off"
              placeholder="Write a message..."
              rows="4"
            ></textarea>
          </div>
          {/*<div></div>*/}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
