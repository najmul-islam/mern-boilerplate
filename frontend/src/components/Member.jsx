import React, { useState } from "react";

const Member = () => {
  const [cost, setCost] = useState({
    anwar: 0,
    uthpol: 0,
    najmul: 0,
    forhad: 0,
    harun: 0,
    kayser: 0,
  });

  const [ancillary, setAncillary] = useState({
    grocer: 0,
    wifi: 0,
    electricity: 0,
    gas: 0,
    home: 0,
    cook: 0,
  });

  const [payable, setPayable] = useState({
    anwar: 0,
    uthpol: 0,
    najmul: 0,
    forhad: 0,
    harun: 0,
    kayser: 0,
  });

  const [totalCost, setTotalCost] = useState(0);
  const [totalAncillary, setTotalAncillary] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [avgAmount, setAvgAmount] = useState(0);

  const handleCostChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCost({ ...cost, [name]: value });
  };

  const handleAncillaryChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAncillary({ ...ancillary, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("cost", cost);
    console.log("ancillary", ancillary);
    const totalCost =
      +cost.anwar +
      +cost.uthpol +
      +cost.najmul +
      +cost.forhad +
      +cost.harun +
      +cost.kayser;

    const totalAncillary =
      +ancillary.grocer +
      +ancillary.wifi +
      +ancillary.electricity +
      +ancillary.gas +
      +ancillary.home +
      +ancillary.cook;

    setTotalCost(totalCost);
    setTotalAncillary(totalAncillary);

    const totalAmount = +totalCost + +totalAncillary;
    setTotalAmount(totalAmount);

    const avgAmount = +totalAmount / 6;
    setAvgAmount(avgAmount);

    setPayable({
      anwar: +avgAmount - +cost.anwar,
      uthpol: +avgAmount - +cost.uthpol,
      najmul: +avgAmount - +cost.najmul,
      forhad: +avgAmount - +cost.forhad,
      harun: +avgAmount - +cost.harun,
      kayser: +avgAmount - +cost.kayser,
    });
  };

  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col text-center">
            <h1>Member</h1>
            <div className="mb-3">
              <label className="form-label">Anwar bay</label>
              <input
                type="number"
                className="form-control"
                id="anwar"
                name="anwar"
                value={cost.anwar}
                onChange={handleCostChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Uthpol Dha</label>
              <input
                type="number"
                className="form-control"
                id="uthpol"
                name="uthpol"
                value={cost.uthpol}
                onChange={handleCostChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Najmul</label>
              <input
                type="number"
                className="form-control"
                id="najmul"
                name="najmul"
                value={cost.najmul}
                onChange={handleCostChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Forhad</label>
              <input
                type="number"
                className="form-control"
                id="forhad"
                name="forhad"
                value={cost.forhad}
                onChange={handleCostChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Harun</label>
              <input
                type="number"
                className="form-control"
                id="harun"
                name="harun"
                value={cost.harun}
                onChange={handleCostChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Kaysar</label>
              <input
                type="number"
                className="form-control"
                id="kayser"
                name="kayser"
                value={cost.kayser}
                onChange={handleCostChange}
              />
            </div>
          </div>

          <div className="col text-center">
            <h1>Ancillary</h1>

            <div className="mb-3">
              <label className="form-label">Grocery</label>
              <input
                type="number"
                className="form-control"
                id="grocer"
                name="grocer"
                value={ancillary.grocer}
                onChange={handleAncillaryChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Wifi</label>
              <input
                type="number"
                className="form-control"
                id="wifi"
                name="wifi"
                value={ancillary.wifi}
                onChange={handleAncillaryChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Electricity</label>
              <input
                type="number"
                className="form-control"
                id="electricity"
                name="electricity"
                value={ancillary.electricity}
                onChange={handleAncillaryChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Gas</label>
              <input
                type="number"
                className="form-control"
                id="gas"
                name="gas"
                value={ancillary.gas}
                onChange={handleAncillaryChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Home</label>
              <input
                type="number"
                className="form-control"
                id="home"
                name="home"
                value={ancillary.home}
                onChange={handleAncillaryChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Cook</label>
              <input
                type="number"
                className="form-control"
                id="cook"
                name="cook"
                value={ancillary.cook}
                onChange={handleAncillaryChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button
              type="submit"
              className="btn btn-primary w-100"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h3>Total Cost: {totalCost}</h3>
            <h3>Total Ancillary: {totalAncillary}</h3>
            <h3>Total Amount: {totalAmount}</h3>
            <h3>Average Amount: {avgAmount}</h3>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h1>Anwar: {payable.anwar}</h1>
            <h1>Uthpol: {payable.uthpol}</h1>
            <h1>Najmul: {payable.najmul}</h1>
            <h1>Forhad: {payable.forhad}</h1>
            <h1>kaysar: {payable.kayser}</h1>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Member;
