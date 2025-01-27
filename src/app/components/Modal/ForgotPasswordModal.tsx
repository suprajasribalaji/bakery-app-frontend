import React, { useState } from "react";
import { Modal } from "antd";

interface ForgotPasswordModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = (props) => {
  const { isModalOpen, setIsModalOpen } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        open={isModalOpen}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <div className="flex flex-col items-center mt-[8%]">
          <div className="text-center mb-2">
            <span className="text-[300%] font-bold font-playfairDisplay">
              Reset password
            </span>
          </div>
          <div className="text-center mb-12">
            <span className="text-sm block mx-auto w-[64%] font-heebo">
              Enter your login email and we'll send you a link to reset your
              password.
            </span>
          </div>
          <div className="w-full flex justify-center">
            <form className="w-[62%]">
              <div className="relative z-0 mb-10 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div className="mb-16">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex items-center justify-center w-full border bg-oliveGreen text-white py-2 rounded hover:bg-white hover:text-oliveGreen px-4"
                >
                  <span className="text-center">Reset Password</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ForgotPasswordModal;
