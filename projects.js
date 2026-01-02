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
    scores: { "OpenSim": 10, "MATLAB": 8, "Data Collection": 6 , "Prototyping":5 },
    achievements: [
      "Processed marker-based motion data from lifting activities to quantify joint kinematics and dynamics.",
      "Simulated the assistance of exoskeleton and analyzed muscle activation reduction.",
      "Researched and troubleshooted solutions to optimize exoskeleton for ergonomic performance."
    ]
  },
  {
    key: "scoliotic-model",
    title: "Scoliotic OpenSim Model Development",
    images: ["assets/scoliotic1.jpg"], 
    summary: "Developed scoliotic OpenSim model from X-ray scan to evaluate asymmetric muscle activation during different locomotion.",
    scores: { "OpenSim": 10, "MATLAB": 8, "Optimization": 9, "Data Collection": 7 },
    achievements: [
      "Created personalized scoliotic OpenSim models from medical imaging data, X-ray scans.",
      "Ran optimization algorithms to predict muscle activation patterns from EMG and kinematic data.",
      "Analyzed asymmetric muscle activation during various locomotion activities."
    ]
  },
  {
    key: "stroke-recovery",
    title: "Stroke Patient Motor Recovery Analysis",
    images: ["assets/stroke1.jpg"], 
    summary: "Collected and processed EMG and kinematic data from stroke patients to predict optimal therapy protocols.",
    scores: { "Data Collection": 8, "Clinical Assessment": 7 },
    achievements: [
      "Collected and processed EMG and kinematic data from stroke patients during therapy sessions.",
      "Performed comprehensive clinical assessments to evaluate patient motor function and recovery progress."
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
    scores: { "Circuit Design": 9, "Arduino": 8 , "Prototyping":5},
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
  }
];
