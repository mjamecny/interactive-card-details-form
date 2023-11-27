import { useState } from "react"
import { isValid } from "creditcard.js"

export default function App() {
  const [name, setName] = useState("Jane Appleseed")
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000")
  const [month, setMonth] = useState("00")
  const [year, setYear] = useState("00")
  const [cvc, setCvc] = useState("000")
  const [errorName, setErrorName] = useState(false)
  const [errorCardNumber, setErrorCardNumber] = useState(false)
  const [errorMonth, setErrorMonth] = useState(false)
  const [errorYear, setErrorYear] = useState(false)
  const [errorCvc, setErrorCvc] = useState(false)
  const [completed, setCompleted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    setErrorName(false)
    setErrorCardNumber(false)
    setErrorMonth(false)
    setErrorYear(false)
    setErrorCvc(false)

    if (!name) {
      setErrorName(true)
    }

    if (!cardNumber) {
      setErrorCardNumber(true)
    }

    if (!month) {
      setErrorMonth(true)
    }

    if (!year) {
      setErrorYear(true)
    }

    if (!cvc) {
      setErrorCvc(true)
    }

    if (!isValid(cardNumber)) {
      setErrorCardNumber(true)
      return
    }

    setCompleted(true)
  }

  return (
    <div className="h-screen grid grid-rows-[240px_1fr] lg:grid-rows-1 lg:grid-cols-[483px_1fr]">
      <div className="bg-[url('../public/bg-main-mobile.png')] lg:bg-[url('../public/bg-main-desktop.png')] bg-cover relative z-10">
        <div className="absolute bottom-[-40px] lg:bottom-auto lg:top-[300px] left-1.6 lg:left-auto lg:right-[-100px] w-[300px] lg:w-full">
          <img src="bg-card-front.png" alt="card front" />
          <img
            className="absolute top-[0px] left-[0px] w-[30%] lg:w-[25%] p-1.6"
            src="card-logo.svg"
            alt="card logo"
          />
          <div className="w-full lg:w-[90%] absolute bottom-[0px] flex flex-col gap-1.2 text-white p-1.6 lg:p-2.4">
            <p className="tracking-widest lg:text-2.4">{cardNumber}</p>
            <div className="flex justify-between">
              <p className="uppercase text-1 lg:text-1.4 tracking-widest">
                {name}
              </p>
              <p className="text-1 lg:text-1.4 tracking-widest">
                {month}/{year}
              </p>
            </div>
          </div>
        </div>
        <div className="z-[-10] absolute top-[50px] lg:top-[570px] right-1.6 lg:right-[-30%] w-[300px] lg:w-full">
          <img src="bg-card-back.png" alt="card back" />
          <p className="tracking-widest absolute top-[70px] lg:top-[110px] right-[30px] lg:right-[80px] text-1.4 text-white">
            {cvc}
          </p>
        </div>
      </div>
      {completed ? (
        <div className="px-2.4 pt-8 flex flex-col gap-2.4 lg:justify-center lg:w-[60%] lg:justify-self-center">
          <div>
            <img
              className="mx-auto"
              src="icon-complete.svg"
              alt="complete icon"
            />
          </div>
          <div className="text-center flex flex-col gap-1.2">
            <p className="uppercase text-2.4">Thank you!</p>
            <p className="text-1.4 text-darkGrayishViolet">
              We 've added your card details
            </p>
          </div>
          <button className="bg-veryDarkViolet text-white rounded-lg py-1.6">
            Continue
          </button>
        </div>
      ) : (
        <form
          className="px-2.4 pt-8 flex flex-col gap-1.6 lg:justify-center lg:w-[60%] lg:justify-self-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-0.2">
            <label
              className="text-1.4 uppercase text-veryDarkViolet tracking-wider"
              htmlFor="name"
            >
              Cardholder name
            </label>
            <input
              className={`focus:border-purple outline-none p-0.8 text-1.8 w-full border ${
                errorName ? "border-red" : "border-lightGrayishViolet"
              } rounded-md`}
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Jane Appleseed"
            />
            {errorName && <p className="text-red text-1.2">Can't be blank</p>}
          </div>
          <div className="flex flex-col gap-0.2">
            <label
              className="text-1.4 uppercase text-veryDarkViolet tracking-wider"
              htmlFor="cardnumber"
            >
              Card number
            </label>
            <input
              className={`focus:border-purple outline-none p-0.8 text-1.8 w-full border ${
                errorCardNumber ? "border-red" : "border-lightGrayishViolet"
              } rounded-md`}
              type="text"
              name="cardnumber"
              id="cardnumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="e.g. 1234 5678 9123 0000"
            />
            {errorCardNumber && (
              <p className="text-red text-1.2">Wrong format, numbers only</p>
            )}
          </div>
          <div className="flex gap-0.8">
            <div className="flex flex-col gap-0.2 w-[50%]">
              <label
                className="text-1.4 uppercase text-veryDarkViolet tracking-wider"
                htmlFor="name"
              >
                Exp. Date (MM/YY)
              </label>
              <div className="flex gap-0.8">
                <input
                  className={`focus:border-purple outline-none p-0.8 text-1.8 w-full border ${
                    errorMonth ? "border-red" : "border-lightGrayishViolet"
                  } rounded-md`}
                  type="text"
                  name="month"
                  id="month"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  placeholder="MM"
                />
                <input
                  className={`focus:border-purple outline-none p-0.8 text-1.8 w-full border ${
                    errorMonth ? "border-red" : "border-lightGrayishViolet"
                  } rounded-md`}
                  type="text"
                  name="year"
                  id="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="YY"
                />
              </div>
              {errorMonth && (
                <p className="text-red text-1.2">Can't be blank</p>
              )}
            </div>
            <div className="flex flex-col gap-0.2 w-[50%]">
              <label
                className="text-1.4 uppercase text-veryDarkViolet tracking-wider"
                htmlFor="cvc"
              >
                CVC
              </label>
              <input
                className={`focus:border-purple outline-none p-0.8 text-1.8 w-full border ${
                  errorCvc ? "border-red" : "border-lightGrayishViolet"
                } rounded-md`}
                type="text"
                name="cvc"
                id="cvc"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="e.g. 123"
              />
              {errorCvc && <p className="text-red text-1.2">Can't be blank</p>}
            </div>
          </div>
          <button className="bg-veryDarkViolet text-white rounded-lg py-1.6">
            Confirm
          </button>
        </form>
      )}
    </div>
  )
}
