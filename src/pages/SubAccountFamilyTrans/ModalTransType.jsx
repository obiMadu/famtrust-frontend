import Button from '../../components/Button';
import { FaTimes } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import ModalWithdraw from './ModalWithdraw';
import ModalFundWallet from './ModalFundWallet';
import ModalSubAcct from './ModalSubAcct';

const Transaction = [
  {
    id: 1,
    Name: 'Transfer to Sub Account',
  },
  {
    id: 2,
    Name: 'Fund Your Wallet',
  },
  {
    id: 3,
    Name: 'Withdraw To Bank',
  },
];

const ModalTransType = ({ setShow, setNextModal }) => {
  const [drop, setDrop] = useState(false);
  const [selected, setSelected] = useState('');

  const onClickHandler = (transaction) => {
    setDrop(true);
    setSelected(transaction.Name);
    setDrop(false);
  };
  // const onChangeHandler = (e) => {
  //   const value = e.target.value;
  //   setSelected(value)
  // };
  const Toggle = () => {
    setDrop((prev) => !prev);
  };
  const delModal = () => {
    setNextModal(false);
  };

  return (
    <div className="bg-[rgba(18,18,18,0.50)] fixed flex flex-col justify-center items-center top-[0] z-10 bottom-0 right-0 left-0 ">
      {setShow && (
        <div className="md:px-16 px-6 w-[50%] mx-auto bg-[#F9F8FF] py-8 border-[1px] border-[solid] border-[#E2E2E2] rounded my-28">
          <div className="flex justify-between items-center">
            <h1 className="text-txtblue  font-lato text-3xl font-bold py-8">
              Transaction Type
            </h1>
            <div onClick={delModal}>
              <FaTimes />
            </div>
          </div>
          <p>Select Transaction Type *</p>
          <div className="bg-white rounded py-2 flex justify-between items-center px-2 border-[1px]">
            <input
              className="rounded-2xl outline-none border-none w-full"
              type="text"
              name="question"
              id="question"
              onChange={(e) => setSelected(e.target.value)}
              onClick={Toggle}
              placeholder="Select Your Question"
              value={selected}
            />
            <div onClick={Toggle}>
              {drop ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>
          {drop && (
            <div>
              {Transaction.map((transaction) => (
                <div key={transaction.id}>
                  <p
                    onClick={() => onClickHandler(transaction)}
                    className="border-b-[1px] py-2 px-1 cursor-pointer bg-white"
                  >
                    {transaction.Name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {selected === 'Withdraw To Bank' ? (
        <ModalWithdraw delModal={delModal} />
      ) : selected === 'Fund Your Wallet' ? (
        <ModalFundWallet delModal={delModal} />
      ) : selected === 'Transfer to Sub Account' ? (
        <ModalSubAcct delModal={delModal} />
      ) : (
        ''
      )}
    </div>
  );
};
export default ModalTransType;
