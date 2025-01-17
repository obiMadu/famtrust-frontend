import React from 'react';
import Button from '../../components/Button';
import { FaTimes } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';

const members = [
  {
    id: 1,
    Name: 'Ritji Ishaku',
  },
  {
    id: 2,
    Name: 'Shallom Kanu',
  },
  {
    id: 3,
    Name: 'Tina Onamusi',
  },
  {
    id: 4,
    Name: 'Temitayo Obasa',
  },
];

const ModalSubAcct = ({ delModal }) => {
  const [allValues, setAllValues] = useState({
    amount: '',
    select: '',
    endDate: '',
    pattern: '',
    date: '',
    sentDate: '',
  });
  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
    // setSelected(e.target.value);
  };
  console.log(allValues);
  const [drop, setDrop] = useState(false);
  const [selected, setSelected] = useState('');
  const onClickHandler = (members) => {
    setDrop(true);
    setSelected(members.Name);
    setDrop(false);
  };
  const Toggle = () => {
    setDrop((prev) => !prev);
  };
  return (
    <div className="bg-[rgba(18,18,18,0.50)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="md:px-16 px-6 w-[60%] mx-auto bg-[#F9F8FF] py-3 border-[1px] border-[solid] border-[#E2E2E2] rounded my-10 text-base font-lato ">
        <div className="flex justify-between items-center">
          <h1 className="text-txtblue  font-lato text-3xl font-bold py-4">
            Transfer To Sub-Account
          </h1>
          <div onClick={delModal}>
            <FaTimes />
          </div>
        </div>
        <p>Select family member to request funds from *</p>
        <div className="bg-white rounded py-2 flex justify-between items-center px-2 border-[1px] border-slate-300">
          <input
            className="rounded-2xl w-full border-none outline-none"
            type="text"
            name="select"
            value={selected}
            id=""
            onClick={Toggle}
            onChange={changeHandler}
            placeholder="Select  family member to request funds from"
          />
          <div onClick={Toggle}>
            {drop ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </div>
        {drop && (
          <div>
            {members.map((members) => (
              <div key={members.id}>
                <p
                  className="border-b-[1px] border-b-slate-300 py-2 cursor-pointer bg-white text-base font-lato text-[#14183B]"
                  onClick={() => onClickHandler(members)}
                >
                  {members.Name}
                </p>
              </div>
            ))}
          </div>
        )}

        <form className="py-4">
          <div className="flex justify-between py-2">
            <div>
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                name="amount"
                id="amount"
                onChange={changeHandler}
                className="w-[100%] py-2 rounded-xl border-[1px] border-slate-300"
              />
            </div>
            <div>
              <label htmlFor="date">Sent Date</label>
              <input
                type="date"
                name="sentDate"
                id="date"
                onChange={changeHandler}
                placeholder="enter amount"
                className="w-[100%] py-2 rounded-xl border-[1px] border-slate-300"
              />
            </div>
          </div>
          <div className="flex justify-between border-slate-300 py-2">
            <div className=" ">
              <label htmlFor="pattern">Recurrence Pattern</label>
              <div className="bg-white rounded-xl py-2 flex justify-between items-center px-2 border-[1px] border-slate-300">
                <input
                  className="rounded-2xl w-[100%]"
                  type="text"
                  name="pattern"
                  id="pattern"
                  onChange={changeHandler}
                  placeholder="Set Recurrence Pattern"
                />
                <div>
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="date">End Date</label>
              <input
                className="w-[100%] py-2 rounded-xl border-[1px]  border-slate-300"
                type="date"
                name="endDate"
                id="date"
                onChange={changeHandler}
                placeholder="enter date"
              />
            </div>
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ModalSubAcct;
