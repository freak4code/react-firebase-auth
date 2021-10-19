import React from "react";
import AdviceHub from "../../../Components/AdviceHub/AdviceHub";
import useAdviceHub from "../../../Hooks/useAdviceHub";

const AdviceHubPage = () => {
  const [advices, setAdvice] = useAdviceHub();
  return (
    <div>
      <h3 className="text-3xl text-center font-black text-success mt-4">
        We are giving advices for following fields
      </h3>
      <div className="service-container">
        {advices.map((advice) => (
          <AdviceHub key={advice.title} title={advice.title}></AdviceHub>
        ))}
      </div>
    </div>
  );
};

export default AdviceHubPage;
