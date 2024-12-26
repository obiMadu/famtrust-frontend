import React from 'react';
import Button from '../../components/Button';
import { FaTimes } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import ModalConfirmTrans from './ModalConfirmTrans';

const ModalWithdraw = ({ setWithdrawModal }) => {
  const [confirm, setConfirm] = useState(false);
  const [allValues, setAllValues] = useState({
    amount: '',
    account: '',
    OTP: '',
    additional: '',
  });

  const handleClick = (e) => {
    e.preventDefault();
    setConfirm(true);
  };
  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
    // setSelected(e.target.value);
  };

  const delModal = () =>{
    setWithdrawModal(false)
  }
  return (
   
    <div className="bg-[rgba(18,18,18,0.50)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0 z-10">
      <div className="md:px-16 px-6 w-[60%] mx-auto bg-[#F9F8FF] py-3 border-[1px] border-[solid] border-[#E2E2E2] rounded my-10 text-base font-lato ">
        <div className="flex justify-between items-center">
          <h1 className="text-txtblue  font-lato text-3xl font-bold py-4">
            Withdraw To Bank Account
          </h1>
          <div onClick={delModal}>
            <FaTimes   />
          </div>
        </div>

        <form className="py-4">
          <div className=" py-2">
            <div>
              <label htmlFor="amount">Wallet Address</label>
              <input
                type="tel"
                value={100}
                readOnly
                className="w-[100%] py-2 rounded-xl border-[1px] border-slate-300 text-slate-500 px-4"
              />
            </div>
            <div>
              <label htmlFor="amount">Amount to Withdraw</label>
              <input
                type="tel"
                name="amount"
                id="amount"
                onChange={changeHandler}
                placeholder="Confirm Amount"
                className="w-[100%] py-2 rounded-xl border-[1px] border-slate-300"
              />
            </div>
            <div>
              <label htmlFor="amount">Account Number</label>
              <input
                type="tel"
                name="account"
                id="amount"
                onChange={changeHandler}
                placeholder="Confirm Amount"
                className="w-[100%] py-2 rounded-xl border-[1px] border-slate-300"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="OTP">OTP</label>
              <input
                type="tel"
                name="OTP"
                id="OTP"
                onChange={changeHandler}
                placeholder="Enter OTP"
                className="w-[100%] py-2 rounded-xl border-[1px] border-slate-300"
              />
            </div>
            <div>
              <label htmlFor="text">Note</label>
              <textarea
                className="w-[100%] py-2 rounded-xl border-[1px] border-slate-300"
                name="additional"
                onChange={changeHandler}
                id=""
              ></textarea>
            </div>
          </div>

          <button
            onClick={handleClick}
            className="bg-bluey w-full py-2 rounded-xl"
          >
            Confirm
          </button>
          {confirm ? (
            <ModalConfirmTrans allValues={allValues} removeModal={removeModal} />
          ) : (
            ''
          )}
        </form>
      </div>
    </div>
  );
};

export default ModalWithdraw;
