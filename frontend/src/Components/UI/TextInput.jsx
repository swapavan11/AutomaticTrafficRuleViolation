const TextInput = ({ vehicleNo, handleChange }) => {
  return (
    <label className="form-control w-full ">
      <div className="label">
        <span className="label-text">Vehicle Number</span>
        {/* <span className="label-text-alt">Top Right label</span> */}
      </div>
      <input
        type="text"
        value={vehicleNo}
        placeholder="Vehicle Number"
        onChange={handleChange}
        className="input input-bordered w-full "
      />
      {/* <div className="label">
        <span className="label-text-alt">Bottom Left label</span>
        <span className="label-text-alt">Bottom Right label</span>
      </div> */}
    </label>
  );
};

export default TextInput;
