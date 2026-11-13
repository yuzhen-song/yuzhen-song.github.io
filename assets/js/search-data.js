// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publication",
          title: "Publication",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/academic/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "My Robotics Projects！🤖",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-",
          title: '',
          description: "",
          section: "News",},{id: "projects-beat-posture-independent-wrist-blood-pressure-monitor",
          title: 'BEAT: Posture-Independent Wrist Blood Pressure Monitor',
          description: "A barometric-inertial sensing system for compensating hydrostatic errors in wrist blood pressure measurement.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-replicating-ddat-diffusion-policies-for-robot-trajectories",
          title: 'Replicating DDAT: Diffusion Policies for Robot Trajectories',
          description: "An independent reproduction of DDAT in MuJoCo, evaluating the necessity of projection operators across four underactuated robotic systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-underactuated-metamorphic-palm-simulation",
          title: 'Underactuated Metamorphic Palm Simulation',
          description: "Modeling a closed-loop, five-link palm for a three-fingered hand in Isaac Sim and Webots, with loop-closure constraints, mesh optimization, and reconfiguration stability analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-autonomous-rescue-vehicle",
          title: 'Autonomous Rescue Vehicle',
          description: "National Second Prize winner. Features YOLOv11 object detection and FSM control.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-6-dof-robotic-sketching-amp-3d-projection",
          title: '6-DOF Robotic Sketching &amp;amp; 3D Projection',
          description: "A complete closed-loop robotic drawing system integrating computer vision, analytical IK, and compliant hardware design.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-ros2-mobile-manipulator",
          title: 'ROS2 Mobile Manipulator',
          description: "A 4-DOF autonomous robot integrated with SLAM, Nav2, and Multimodal Human-Robot Interaction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-slope-com-assistance-system",
          title: 'Slope CoM Assistance System',
          description: "A system for human gait assistance on slopes using STM32 and motor-driven winch.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-splatslam",
          title: 'SplatSLAM',
          description: "Dense 3D Reconstruction from Monocular Video via Learning-based SLAM and Gaussian Splatting.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/splatslam/";
            },},{id: "projects-autonomous-uav-mission-navigation",
          title: 'Autonomous UAV Mission Navigation',
          description: "via Fast-Planner Framework. Real-time trajectory generation in randomized obstacle environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6D%79%73%6F%6E%67.%73%77%69%6D%6B%69%6D@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yuzhen-song", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },];
