import React from 'react';
import ModalCreateNewSub from '../pages/SubAcctCreation/ModalCreateNewSub';
import { useState } from 'react';
import SubAcctCreation from '../pages/SubAcctCreation/SuBAcctCreation';
import Created from '../pages/SubAcctCreation/created';

const AccountsOverview = ({ CreateSubAccount }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const [nextModal, setNextModal] = useState(null);
  // const [show, setShow] = useState(false);
  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   setNextModal((prev) => prev + 1);
  //   setShow(true);
  //   console.log('submitted');
  // };
  return (
    <div className=" w-full flex justify-between items-center border-slate-200 bg-purple-50 p-8 -mt-8 mb-4">
      {/* Display total number of accounts */}
      <div>
        <h3 className="font-semibold text-darkestGrey">All Accounts</h3>
        <p className="text-medium text-lightBlue">2 accounts</p>
      </div>
      <div className="font-medium ">
        {CreateSubAccount ? (
          <div>
            <button
              // onClick={() => setIsModalOpen(true)}
              className="bg-sb-hover-text text-white mr-12 px-4 py-2 rounded-lg hover:bg-blue-800"
              // onClick={onSubmitHandler}
              onClick={() => setIsModalOpen(true)}
            >
              {CreateSubAccount}
            </button>
            <div>
              {/* Pass in modals for Sub Account Creation*/}
              <ModalCreateNewSub
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
              {/* {nextModal === 2 && <SubAcctCreation setShow={setShow} />}
              {nextModal === 3 && <Created setShow={setShow} />} */}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default AccountsOverview;
