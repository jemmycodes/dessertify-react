import sendmail from "../../assets/sendmail.svg";

const Modal = ({mail, handleModal}) => {
  return (
    <div className="w-full min-h-screen bg-black/70 flex justify-center items-center p-5 fixed z-50" onClick={handleModal}>
      <article className="bg-white p-6 w-[85%] max-w-xl flex-col gap-6    mx-auto rounded-lg flex justify-center items-center">
        <h2 className="font-bold text-2xl ">Sent!</h2>
        <p className="text-center max-w-md md:text-sm">A confirmation mail has been sent to <span className="font-medium text-orange underline">{mail}</span>. Check your email address and follow to instructions to complete your account creation</p>
        <img src={sendmail} alt="Confirmation Email sent" className="w-3/4 max-w-[200px]" height={70} width={70}/>
      <button className="px-7 py-2 bg-orange text-white rounded-lg" onClick={handleModal} >Close</button>
      </article>
    </div>
  );
};

export default Modal;
