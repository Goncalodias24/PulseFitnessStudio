// Schedule items array with categories for filtering
export const scheduleData = [
  {
    id: 1,
    time: "07:00",
    day: "Monday",
    title: "HIIT Core",
    coach: "Pedro Silva",
    category: "hiit",
    description: "High-intensity metabolic conditioning focusing on core stability and fat loss."
  },
  {
    id: 2,
    time: "07:00",
    day: "Tuesday",
    title: "Cross Training",
    coach: "Ana Rita",
    category: "strength",
    description: "Functional strength matrix using barbells, kettlebells, and bodyweight movements."
  },
  {
    id: 3,
    time: "07:00",
    day: "Saturday",
    title: "Run Club",
    coach: "Sérgio M.",
    category: "cardio",
    description: "Outdoor group conditioning session focused on endurance and pacing."
  },
  {
    id: 4,
    time: "12:30",
    day: "Monday",
    title: "Power Yoga",
    coach: "Marta Costa",
    category: "yoga",
    description: "Vinyasa flow designed for joint mobility, core balance, and athletic recovery."
  },
  {
    id: 5,
    time: "12:30",
    day: "Wednesday",
    title: "Tabata Express",
    coach: "Pedro Silva",
    category: "hiit",
    description: "20-second work / 10-second rest interval intensity training."
  },
  {
    id: 6,
    time: "12:30",
    day: "Saturday",
    title: "Heavy Lifting",
    coach: "Ana Rita",
    category: "strength",
    description: "Compound power movements focusing on squat, deadlift, and bench technique."
  },
  {
    id: 7,
    time: "18:30",
    day: "Monday",
    title: "Strength & Power",
    coach: "Ana Rita",
    category: "strength",
    description: "Hypertrophy and progressive overload training for peak physical strength."
  },
  {
    id: 8,
    time: "18:30",
    day: "Tuesday",
    title: "Spinning Zone",
    coach: "Sérgio M.",
    category: "cardio",
    description: "High-energy indoor cycling for high metabolic rate expansion."
  },
  {
    id: 9,
    time: "18:30",
    day: "Friday",
    title: "Pulse Challenge",
    coach: "Pedro Silva",
    category: "hiit",
    description: "Full-body endurance benchmark test combining cardio and functional lifts."
  }
];

// Trainer profiles pointing to local images in public/images/trainers/
export const trainerData = [
  {
    id: "ps",
    name: "Pedro Silva",
    role: "Head of Conditioning & HIIT",
    bio: "Specialist in metabolic conditioning and cardiovascular performance optimization with 8 years of experience.",
    skills: ["HIIT", "Conditioning", "Functional"],
    image: "/images/trainers/coach-pedro.jpg"
  },
  {
    id: "ar",
    name: "Ana Rita",
    role: "Strength & Powerlifting Specialist",
    bio: "Focused on biomechanics, hypertrophy, and safe overload progression for all athletic levels.",
    skills: ["Strength", "Powerlifting", "Barbell"],
    image: "/images/trainers/coach-ana.jpg"
  },
  {
    id: "mc",
    name: "Marta Costa",
    role: "Yoga & Mobility Instructor",
    bio: "Dedicated to injury prevention, expanding range of motion, and physical and mental recovery.",
    skills: ["Yoga", "Mobility", "Recovery"],
    image: "/images/trainers/coach-marta.jpg"
  },
  {
    id: "sm",
    name: "Sérgio M.",
    role: "Endurance & Cycling Coach",
    bio: "Endurance sports enthusiast specializing in metabolic pacing and high-energy sessions.",
    skills: ["Spinning", "Cardio", "Endurance"],
    image: "/images/trainers/coach-sergio.jpg"
  }
];