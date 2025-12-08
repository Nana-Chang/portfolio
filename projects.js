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
  },
  {
    key: "bracket-gen-design",
    title: "Generative Design of Bracket",
    images: ["assets/bracket1.jpg", "assets/bracket2.jpg", "assets/bracket3.jpg"],
    summary: "Redesigned an aircraft bracket for additive manufacturing to reduce weight and waste.",
    scores: { "CAD": 10, "3D print": 5 },
    achievements: [
      "Conducted generative design and stress analysis in Fusion 360 under defined load cases.",
      "Selected optimal design based on factor of safety and von Mises stress vs. mass.",
      "Improved printability and reduced waste by optimizing for 3D printing and high-volume production."
    ]
  },
  {
    key: "emg-processing",
    title: "EMG Processing & Circuit Simulation",
    images: ["assets/emg1.jpg", "assets/emg2.jpg"],
    summary: "Acquired and processed EMG signals for real-time device control.",
    scores: { "MATLAB": 9, "Arduino": 8, "Signal Processing": 8 },
    achievements: [
      "Acquired and processed EMG signals using MATLAB and Arduino for muscle activation control.",
      "Demonstrated real-time EMG-based device control of LEDs and servo motors.",
      "Designed and simulated an EMG processing circuit in LTSpice, optimizing signal clarity with amplifiers and filters."
    ]
  },
  {
    key: "sem-segmentation",
    title: "Deep Learning SEM Image Segmentation",
    images: ["assets/sem1.jpg", "assets/sem2.jpg"],
    summary: "Automated segmentation of types of lacunae in trabecular bone SEM images.",
    scores: { "Deep Learning": 10, "Python": 9, "MATLAB": 8 },
    achievements: [
      "Trained and optimized U-Net model in Dragonfly.",
      "Evaluated model performance in MATLAB, achieving 98% accuracy and 71% Dice coefficient.",
      "Presented findings to academic peers through meetings and poster sessions."
    ]
  },
  {
    key: "resin-bone",
    title: "3D Resin Printing of Bone Structures",
    images: ["assets/boneprint1.jpg", "assets/boneprint2.jpg"],
    summary: "Developed a reliable method to resin 3D print trabecular bone structures.",
    scores: { "3D Print": 9, "SolidWorks": 8 },
    achievements: [
      "Processed microCT data and created printable STL models using SolidWorks and AnyCubic software.",
      "Optimized resin print parameters to improve structural fidelity across bone types.",
      "Demonstrated high geometric fidelity through image registration and voxel-wise analysis."
    ]
  },
  {
    key: "cell-aspiration",
    title: "Automation of Cell Aspiration",
    images: ["assets/aspiration1.jpg", "assets/aspiration2.jpg"],
    summary: "Developed a high precision pressure control device for accurate cell aspiration.",
    scores: { "Circuit Design": 9, "Arduino": 8 , , "Prototyping":5},
    achievements: [
      "Designed sensing circuit using instrumentation amplifier and pressure sensor for accurate pressure readings.",
      "Verified and validated prototype through comprehensive mechanical, electrical, and code assessments.",
      "Assessed risk, failure modes, and conducted requirements testing to ensure system reliability."
    ]
  },
  {
    key: "motion-imu",
    title: "Motion Monitoring with IMU",
    images: ["assets/imu1.jpg", "assets/imu2.jpg"],
    summary: "Analyzed cycling motion consistency at different speeds and quantified performance.",
    scores: { "MATLAB": 8, "Data Analysis": 9 },
    achievements: [
      "Analyzed cycling motion consistency at various speeds using MATLAB.",
      "Quantified performance by filtering and standardizing data to calculate root mean square error.",
      "Collected body segment locomotion data with Inertial Measurement Units (IMUs) on smartphones."
    ]
  },
  {
    key: "deadlift-augmentation",
    title: "Deadlift Augmentation Device",
    images: ["assets/deadlift1.jpg", "assets/deadlift2.jpg"],
    summary: "Conducted a comprehensive joint moment analysis of deadlifts to improve posture and prevent injury.",
    scores: { "MATLAB": 9, "OpenPose": 8 },
    achievements: [
      "Directed joint moment analysis in MATLAB, using marker-less motion capture via OpenPose.",
      "Identified the hip joint as bearing the highest load, with a peak moment of 730 Nm when lifting 65lb.",
      "Engineered a wearable sensor vest for posture improvement and injury prevention data collection."
    ]
  },
  {
    key: "impact-detect",
    title: "Impact Detecting Device",
    images: ["assets/impact1.jpg"],
    summary: "Designed a sensor-based system to detect and understand whiplash injuries through head and neck kinetic impact data.",
    scores: { "Biomechanics": 8, "Sensor Design": 9 },
    achievements: [
      "Conducted in-depth research on biomechanics to inform system development.",
      "Designed sensor-based methods to collect head and neck kinetic impact data for injury analysis.",
      "Collaborated on the overall device design to detect and understand whiplash."
    ]
  },
  {
    key: "bike-lane",
    title: "Bike Lane Route",
    images: ["assets/bikelane1.jpg", "assets/bikelane2.jpg"],
    summary: "Evaluated and selected the optimal bike lane route in Vancouver based on stakeholder needs.",
    scores: { "Data Analysis": 7, "Stakeholder Engagement": 8 },
    achievements: [
      "Collaborated with a team to evaluate and select the best bike lane routes using data analysis and stakeholder engagement.",
      "Determined the optimal route by balancing the needs of the stakeholders, ensuring robust decision-making."
    ]
  },
  {
    key: "cardboard-chair",
    title: "Cardboard Chair Design",
    images: ["assets/cardboard1.jpg", "assets/cardboard2.jpg"],
    summary: "Designed a functional, minimalistic, and compact cardboard chair based on stakeholder needs.",
    scores: { "Design": 8, "Prototyping": 9 },
    achievements: [
      "Collaborated on the design of the cardboard chair, incorporating feedback and ideas from stakeholders.",
      "Analyzed stakeholder needs to generate prototype solutions that met design and usability criteria.",
      "Utilized prototyping techniques to create a physical model for evaluation and refinement."
    ]
  }
];
