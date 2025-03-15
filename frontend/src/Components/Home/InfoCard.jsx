const InfoCard = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-3xl mb-2">Introduction:</h2>
      <p className="">
        In today’s rapidly urbanizing world, ensuring road safety has become
        more critical than ever. Our cutting-edge platform integrates advanced
        AI models to monitor traffic in real time, detect violations, and
        seamlessly issue e-challans to offenders. This system revolutionizes
        traffic management by reducing human intervention, enhancing accuracy,
        and promoting a safer driving environment for everyone. Our system isn’t
        just about enforcement—it’s about education, deterrence, and creating a
        culture of responsibility on the roads. By automating the detection and
        penalization process, we aim to support law enforcement agencies, reduce
        road accidents, and ultimately save lives. With a focus on innovation,
        our platform harnesses the power of AI to make roads safer and drivers
        more accountable. Whether you a city official, a law enforcement agency,
        or a concerned citizen, our platform offers a robust solution for modern
        traffic management. Explore our website to learn more about each of the
        AI models we deploy and how they work together to create a safer world.
      </p>
      <div className="flex gap-4">
        <div>
          <h3 className="text-2xl mt-4 mb-2">Features:</h3>
          <p>
            <ul>
              <li>• Advanced AI models for real-time violation detection.</li>
              <li>
                • E-challan system for digital issuance and payment of fines.
              </li>
              <li>
                • Automatic Number Plate Recognition (ANPR) for vehicle
                identification
              </li>
              <li>
                • Web-based platform for convenient access and transparency
              </li>
              <li>
                • Comprehensive reporting and analytics for traffic authorities
              </li>
            </ul>
          </p>
        </div>
        <div>
          <h3 className="text-2xl mt-4 mb-2">Benefits:</h3>
          <p>
            <ul>
              <li>• Reduced human error and bias in enforcement</li>
              <li>
                • Increased efficiency in violation detection and fine
                processing
              </li>
              <li>
                • Enhanced transparency and accountability in traffic regulation
              </li>
              <li>
                • Deterrence against traffic offenses, leading to safer roads
              </li>
            </ul>
          </p>
        </div>
      </div>
      <h3 className="text-2xl my-4">Models</h3>
      <p>
        <span className="font-bold">Lane Line Violation Detection:</span> This
        module identifies vehicles that stray out of their designated lanes
        without proper signaling or in areas where lane changes are prohibited.
        It helps in reducing accidents caused by careless or reckless lane
        changes.
      </p>
      <p>
        <span className="font-bold">Speed Violation Detection:</span> By
        analyzing the movement of vehicles over time, this module accurately
        measures their speed and detects those exceeding the posted speed
        limits. This feature is crucial for deterring speeding and preventing
        potential accidents.
      </p>
      <p>
        <span className="font-bold">Parking Violation Detection:</span> This
        component monitors areas where parking is restricted, such as no-parking
        zones, bus stops, and fire hydrants. It detects illegally parked
        vehicles and logs violations to ensure that parking rules are followed.
      </p>
      <p>
        <span className="font-bold">Traffic Signal Violation Detection:</span>
        The system captures and analyzes real-time video footage at
        intersections to detect vehicles running red lights. This helps in
        minimizing the risks associated with signal violations, which are a
        major cause of urban traffic accidents.
      </p>
      <p>
        <span className="font-bold">Helmet Violation Detection:</span> Focused
        on the safety of two-wheeler riders, this module detects whether the
        rider and pillion are wearing helmets as mandated by traffic
        regulations. This feature promotes helmet usage, which significantly
        reduces the severity of injuries in accidents involving motorcycles.
        changes.
      </p>
    </div>
  );
};

export default InfoCard;
