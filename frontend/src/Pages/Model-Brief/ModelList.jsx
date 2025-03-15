import { Link } from "react-router-dom";
const ModelList = () => {
  return (
    <div className="max-w-xl mx-auto mt-8 flex flex-col gap-4">
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" defaultChecked />

        <div className="collapse-title text-xl font-medium text-center">
          <h2>Speed Limit Violation Detection Model</h2>
        </div>
        <div className="collapse-content">
          <p className="mb-4">
            Safety is paramount, and our Speed Limit Violation Detection Model
            plays a critical role in maintaining it. By analyzing the time taken
            for vehicles to pass between reference lines, the model calculates
            their speed. If a vehicle exceeds the speed limit, the system flags
            it for an e-challan.
          </p>
          <div className="flex items-center justify-center">
            <Link to="/model1" className="btn mt-4 btn-primary">
              See Working
            </Link>
          </div>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium text-center">
          <h2>Illegal Parking Detection Model</h2>
        </div>
        <div className="collapse-content">
          <p className="mb-4">
            Illegal parking can cause congestion and accidents. Our Illegal
            Parking Detection Model identifies unauthorized parking on busy
            roads by comparing vehicles positions over time. If a vehicle
            remains stationary for a predetermined period in a no-parking zone,
            it is marked for enforcement.
          </p>
          <div className="flex items-center justify-center">
            <Link to="/model2" className="btn mt-4 btn-primary">
              See Working
            </Link>
          </div>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />

        <div className="collapse-title text-xl font-medium text-center">
          <h2>Traffic Signal Violation Detection Model</h2>

        </div>
        <div className="collapse-content">
          <p className="mb-4">
            Respecting traffic signals is crucial for road safety. Our Traffic
            Signal Violation Detection Model monitors intersections and detects
            vehicles that pass through red lights. By analyzing the intersection
            of vehicle bounding boxes with the region of interest, the system
            identifies violators and triggers an e-challan.
          </p>
          <div className="flex items-center justify-center">
            <Link to="/model3" className="btn mt-4 btn-primary">
              See Working
            </Link>
          </div>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />

        <div className="collapse-title text-xl font-medium text-center">
          <h2>Helmet Compliance Detection Model</h2>

        </div>
        <div className="collapse-content">
          <p className="mb-4">
            The Helmet Compliance Detection Model focuses on ensuring the safety
            of vehicle occupants by detecting whether drivers and passengers are
            wearing helmets or not. Using high-resolution cameras and AI
            algorithms, the model analyses the images to check for compliance.
            Non-compliance triggers the system to capture the vehicles license
            plate and issue a fine through the e-challan system. This model is
            key in promoting the use of safety gear, thereby reducing the
            severity of injuries in accidents.
          </p>
          <div className="flex items-center justify-center">
            <Link to="/model4" className="btn mt-4 btn-primary">
              See Working
            </Link>
          </div>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />

        <div className="collapse-title text-xl font-medium text-center">
          <h2>Lane Discipline Violation Detection Model</h2>

        </div>
        <div className="collapse-content">
          <p className="mb-4">
            Lane discipline is crucial for the smooth flow of traffic,
            especially on multi-lane roads and highways. Our Lane Discipline
            Violation Detection Model monitors lane markings and vehicle
            positions to detect lane indiscipline, such as improper lane changes
            or driving in the wrong lane. By analysing video feeds from road
            cameras, the model identifies violators and records the necessary
            evidence to issue an e-challan. This model plays a vital role in
            maintaining order on the roads and preventing accidents caused by
            erratic driving behaviour.
          </p>
          <div className="flex items-center justify-center">
            <Link to="/model5" className="btn mt-4 btn-primary">
              See Working
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelList;
