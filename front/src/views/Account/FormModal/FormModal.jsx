import React from 'react';
import GeneralEntries from '../GeneralEntries/GeneralEntries';

const FormModal = () => {
    return (
        <>
          <div>
            <h1 className="text-center p-1 font-bold">BALANCE SHEET</h1>
            <form action="">
              <div className="bg-white">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                  <GeneralEntries />
                </div>
              </div>
            </form>
          </div>
        </>
      );
}

export default FormModal;

 