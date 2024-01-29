

const DeviceSpecs = ( detailSpecs: any ) => {
  return (
    <ul>
      {detailSpec.map((categorySpec, index) => (
        <li key={index}>
          <h3>{categorySpec.category}</h3>
          <ul>
            {categorySpec.specifications.map((spec, innerIndex) => (
              <li key={innerIndex}>
                <strong>{spec.name}:</strong> {spec.value}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default DeviceSpecs;
