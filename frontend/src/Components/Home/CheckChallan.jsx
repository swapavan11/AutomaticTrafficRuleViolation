import { Link } from "react-router-dom";
const CheckChallan = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Check Challan</h2>
        <p>
          This feature allows users to quickly verify if their vehicle has any
          pending challans by entering their vehicle number. The system will
          display details such as the presence of a challan, the amount to be
          paid, and the specific traffic rule that was violated. This feature
          ensures users are well-informed about their traffic violations and
          fines.
        </p>
        <div className="card-actions justify-center mt-4">
          {/* <button className="btn btn-primary">Check Now</button> */}
          <Link to="/challan" className="btn btn-primary">
            Check Challan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckChallan;
