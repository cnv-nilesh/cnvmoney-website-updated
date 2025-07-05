const LoanModel = ({ data, onCloseModel }) => {
  return (
    <>
      <dialog
        id="my_modal_4"
        className="modal mt-16"
        open
        onClick={onCloseModel}
      >
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="text-gray-700 text-lg">{data.modelHeader}</h3>
          {data.info.map((items, id) => (
            <div className="flex flex-col flex-wrap" key={id}>
              <p className="py-2 text-gray-700">
                {id + 1}.&nbsp;
                {items.header}
              </p>
              <p className="py-2 text-gray-500" style={{ fontSize: "14px" }}>
                {items.info}
              </p>
            </div>
          ))}

          <div className="modal-action absolute top-0 right-3">
            <button className="close_loan_btn" onClick={onCloseModel}>
              X
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default LoanModel;
