import sendmail from "../../assets/sendmail.svg";

const Modal = ({ mail, showModal, handleModal }) => {
  return (
    showModal && (
      <div
        className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-black/70"
        onClick={handleModal}>
        <article className="bg-white p-6 w-[85%] max-w-xl flex-col gap-6    mx-auto rounded-lg flex justify-center items-center">
          <h2 className="text-2xl font-bold ">Sent!</h2>
          <p className="max-w-md text-center md:text-sm">
            A confirmation mail has been sent to{" "}
            <span className="font-medium underline text-orange">{mail}</span>.
            Check your email address and follow to instructions to complete your
            account creation
          </p>
          <img
            src={sendmail}
            alt="Confirmation Email sent"
            className="w-3/4 max-w-[200px]"
            height={70}
            width={70}
          />
          <button
            className="py-2 text-white rounded-lg px-7 bg-orange"
            onClick={handleModal}>
            Close
          </button>
        </article>
      </div>
    )
  );
};

export default Modal;
