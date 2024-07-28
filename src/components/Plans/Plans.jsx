import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
const Plans = () => {
  return (
    <div className="plans-container">
      <div
        className="programs-header"
        style={{
          gap: "2rem",
        }}
      >
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, idx) => (
          <div key={idx} className="plan">
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
                {plan.features.map((feature, idx) => (
                    <div className="feature">
                        <img src="" alt="" />
                    </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;