// Updated projects.js
const projects = [
  {
    key: "eeg-robot",
    title: "EEG Controlled Bipedal Robot",
    images: ["assets/eeg_robot1.jpg", "assets/eeg_robot2.jpg"],
    summary: "Integrating EEG signals with deep learning for movement classification and precise motor control.",
    scores: { "3D print": 8, "CAD": 9, "PCB design": 7, "Prototyping":5 },
    achievements: [
      "Optimized robot structure with CAD design through SolidWorks for enhanced stability and mobility.",
      "3D printed components for prototyping.",
      "PCB design for the overcurrent protection circuit, ensuring reliable power management."
    ]
  },
  {
    key: "exoskeleton-sim",
    title: "Exoskeleton Validation with Simulation",
    images: ["assets/exo1.jpg"],
    summary: "Validated exoskeleton assistance efficacy by analyzing biomechanical load reduction.",
    scores: { "OpenSim": 10, "MATLAB": 8, "Motion capture": 6, "EMG": 6, "Metabolic Cost": 6 , "Prototyping":5 },
    achievements: [
      "Processed marker-based motion data from lifting activities to quantify joint kinematics and dynamics.",
      "Simulated the assistance of exoskeleton and analyzed muscle activation reduction.",
      "Researched and troubleshooted solutions to optimize exoskeleton for ergonomic performance."
    ]
  },
  {
    key: "swing-footrest",
    title: "Adaptive Swing Footrest for Wheelchair",
    images: ["assets/footrest1.jpg", "assets/footrest2.jpg", "assets/footrest3.jpg"],
    summary: "Designed a footrest mechanism supporting natural leg motion and user comfort.",
    scores: { "3D print": 7, "CAD": 8 , "Prototyping":5 },
    achievements: [
      "Designed the footrest mechanism using SolidWorks and fabricated components through 3D printing.",
      "Conducted iterative testing and Failure Modes and Effects Analysis.",
      "Integrated material selection and cost analysis to enhance durability, recyclability, and affordability."
    ]
  }
  
];
