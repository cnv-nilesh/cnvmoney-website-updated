"use client";
import LoanModal from "./personalLoan/loanModel";
import React, { useState } from "react";
import LoanCard from "././personalLoan/LoanCard";
import "../../comingsoon.css";
import { loanData } from "./personalLoan/loanData";

function Loans() {
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container mx-auto py-12">
        <></>
        <LoanCard data={loanData} openModal={openModal}></LoanCard>
      </div>
      {showModal && <LoanModal data={modalData} onCloseModel={closeModal} />}
    </>
  );
}

export default Loans;
