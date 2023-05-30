import { useEffect, useState } from "react";
import styles from "./header/nav/Nav.module.css";

const Call = () => {
  const [call, setCall] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const body = document.querySelector("body");
    call ? (body.style.overflowY = "hidden") : (body.style.overflowY = "auto");
  }, [call]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (call) {
      const dataFromForm = {
        name: e.target.name.value,
        email: e.target.email.value,
        tel: e.target.tel.value,
      };

      try {
        const data = await ShopService.sendForm(dataFromForm);
        setSuccess(true);
        console.log("result: ", ...data);
      } catch (error) {
        console.log("error: ", error);
      }

      setTimeout(() => {
        setCall(false);
      }, 5000);
      setTimeout(() => {
        document.querySelector("form").reset();
      }, 1000);
    }
  };
  return (
    <>
      <button onClick={() => setCall(true)} className={styles.number}>
        <span className="py-[10px] px-[20px] mx-[2px] flex items-center rounded-lg">
          +7 (495) 823-54-12
        </span>
      </button>
      <div
        onClick={(e) => {
          if (e.target.tagName === "DIV") {
            setSuccess(false);
            setCall(false);
          }
        }}
        className={`${
          call
            ? "opacity-100 pointer-events-auto"
            : "pointer-events-none opacity-0"
        } fixed pb-[100px] z-50 w-[100vw] h-[100vh] top-0 left-0 transition-all flex items-center justify-center bg-red-200/95`}
      >
        <form
          onSubmit={handleSubmit}
          className={`${
            success
              ? "pointer-events-none opacity-0"
              : "opacity-100 pointer-events-auto"
              ? !call
              : "pointer-events-none opacity-0"
          } flex flex-col gap-2 items-center bg-red-100 transition-all p-12 rounded-xl`}
        >
          <p className="text-xl font-semibold mb-[10px]">
            Замовити зворотній дзвінок
          </p>
          <input
            className="px-[20px] py-[7px] w-full rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
            type="text"
            id="name"
            name="name"
            maxLength="20"
            minLength="3"
            placeholder="Name"
            required
          />
          <input
            className="px-[20px] py-[7px] w-full rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
            type="email"
            id="email"
            name="email"
            maxLength="20"
            minLength="3"
            placeholder="E-mail"
            required
          />
          <input
            className="px-[20px] py-[7px] w-full rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
            type="tel"
            id="tel"
            name="tel"
            maxLength="20"
            minLength="3"
            placeholder="Phone"
            required
          />
          <button className="mt-[15px] px-[20px] py-[7px] w-[75%] rounded-md text-white font-medium bg-red-400 hover:bg-red-500 transition-all flex items-center justify-center">
            Замовити дзвінок
          </button>
        </form>
        <div
          className={`${
            success
              ? "opacity-100 pointer-events-auto"
              : "pointer-events-none opacity-0"
          } absolute text-xl font-semibold transition-all bg-red-100 p-12 rounded-xl`}
        >
          Чудово! Скоро ми вам передзвонимо
        </div>
      </div>
    </>
  );
};
export default Call;
