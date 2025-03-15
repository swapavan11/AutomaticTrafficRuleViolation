const ChallanTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Date</th>
            <th>Vehicle No.</th>
            <th>Challan Category</th>
            <th>Vehicle Category</th>
            <th>Amount</th>
            <th>Location</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((challan) => (
            <tr className="hover" key={challan._id}>
              <td>{challan.date.toLocaleString()}</td>
              <td>{challan.vehicleNo}</td>
              <td>{challan.challanCategory}</td>
              <td>{challan.vehicleCategory}</td>
              <td>{challan.amount}</td>
              <td>{challan.location}</td>
              <td>{challan.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChallanTable;
