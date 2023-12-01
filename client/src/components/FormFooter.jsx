import React from "react";

const FormFooter = () => {
  return (
    <div className="border-t py-10 text-sm text-gray-700">
      <p>
        By signing in or creating an account, you agree with our{" "}
        <span>
          <a href="#" className="text-blue-500">
            Terms & Conditions
          </a>
        </span>{" "}
        and{" "}
        <span>
          <a href="#" className="text-blue-500">
            {" "}
            Privacy Statement
          </a>
        </span>
      </p>
    </div>
  );
};

export default FormFooter;
