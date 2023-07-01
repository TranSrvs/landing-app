import React from "react";

export default function InstantQuoteForm() {
  return (
    <div>
      <div>
        <form>
          <div>
            <div>
              <label>From</label>
              <select></select>
            </div>
            <div>
              <label>To</label>
              <select></select>
            </div>
            <div>
              <label>Word Count</label>
              <input
                type="number"
                name="work_count"
                autoComplete="off"
                placeholder="1000"
                rows="1"
              />
            </div>
          </div>
          <div>
            <div>
              <label>Subject</label>
              <select></select>
            </div>
            <div>
              <label>Guaranteed delivery date</label>
              <select></select>
            </div>
            <button>Show prices</button>
          </div>
          <div>
            <span>Pay after delivery</span>
            <span>
              We trust you: feel free to pay within 5 days from delivery via
              bank transfer, credit card, or PayPal.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
