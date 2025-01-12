import { Doctor } from "@/types/types";
import { CheckCircleIcon, ClockIcon, XCircleIcon } from "lucide-react";

export const communitiesData = [
  {
    id: 1,
    name: "Mental Health Support",
    image: "/images/chat/mentalhealth.png",
    summary:
      "Recent discussions focused on stress management techniques, mindfulness practices, and building healthy coping mechanisms.",
    members: [
      {
        id: 1,
        name: "Dr. Sarah Johnson",
        role: "Admin",
        avatar: "/images/chat/femaledoctor.png",
      },
      {
        id: 2,
        name: "Dr. Michael Brown",
        role: "Moderator",
        avatar: "/images/chat/drbrown.png",
      },
      {
        id: 3,
        name: "Jane Smith",
        role: "Member",
        avatar: "/images/chat/femaledoctor.png",
      },
    ],
    messages: [
      {
        id: 1,
        userId: 1,
        userName: "Dr. Sarah Johnson",
        userAvatar: "/images/chat/femaledoctor.png",
        content:
          "Welcome to today's discussion on managing anxiety! Let's share some effective coping strategies 🌟",
        timestamp: "2024-01-06T09:00:00Z",
        isImage: false,
      },
      {
        id: 2,
        userId: 3,
        userName: "Jane Smith",
        userAvatar: "/images/chat/femaledoctor.png",
        content:
          "I've found meditation really helpful. 10 minutes every morning has made a huge difference!",
        timestamp: "2024-01-06T09:05:00Z",
        isImage: false,
      },
      {
        id: 3,
        userId: 2,
        userName: "Dr. Michael Brown",
        userAvatar: "/images/chat/drbrown.png",
        content:
          "Excellent point about meditation. Here's a guided meditation resource:",
        timestamp: "2024-01-06T09:10:00Z",
        isImage: false,
      },
      {
        id: 4,
        userId: 2,
        userName: "Dr. Michael Brown",
        userAvatar: "/images/chat/drbrown.png",
        content: "/images/meditation-guide.png",
        timestamp: "2024-01-06T09:11:00Z",
        isImage: true,
      },
      {
        id: 5,
        userId: 1,
        userName: "Dr. Sarah Johnson",
        userAvatar: "/images/chat/femaledoctor.png",
        content: "Remember, consistency is key in mental health practices! 🌈",
        timestamp: "2024-01-06T09:15:00Z",
        isImage: false,
      },
    ],
  },
  {
    id: 2,
    name: "Wellness & Exercise",
    image: "/images/chat/wellness.png",
    summary:
      "Group focused on physical wellness, exercise routines, and maintaining an active lifestyle.",
    members: [
      {
        id: 4,
        name: "Dr. Emily Davis",
        role: "Admin",
        avatar: "/images/chat/dremily.png",
      },
      {
        id: 5,
        name: "John Doe",
        role: "Member",
        avatar: "/images/patient.png",
      },
    ],
    messages: [
      {
        id: 1,
        userId: 4,
        userName: "Dr. Emily Davis",
        userAvatar: "/images/chat/dremily.png",
        content: "Today's focus: Home exercises for better posture! 💪",
        timestamp: "2024-01-06T10:00:00Z",
        isImage: false,
      },
      {
        id: 2,
        userId: 5,
        userName: "John Doe",
        userAvatar: "/images/patient.png",
        content: "My back pain has improved since starting these exercises!",
        timestamp: "2024-01-06T10:15:00Z",
        isImage: false,
      },
      {
        id: 3,
        userId: 4,
        userName: "Dr. Emily Davis",
        userAvatar: "/images/chat/dremily.png",
        content: "/images/posture-exercises.png",
        timestamp: "2024-01-06T10:20:00Z",
        isImage: true,
      },
      {
        id: 4,
        userId: 4,
        userName: "Dr. Emily Davis",
        userAvatar: "/images/chat/dremily.png",
        content: "Here's a visual guide for proper form during exercises",
        timestamp: "2024-01-06T10:21:00Z",
        isImage: false,
      },
    ],
  },
  {
    id: 3,
    name: "Nutrition & Diet Support",
    image: "/images/chat/wellness.png",
    summary:
      "Community focused on healthy eating habits and nutritional guidance.",
    members: [
      {
        id: 6,
        name: "Dr. Lisa Chen",
        role: "Admin",
        avatar: "/images/chat/femaledoctor.png",
      },
      {
        id: 7,
        name: "Mark Wilson",
        role: "Member",
        avatar: "/images/patient.png",
      },
    ],
    messages: [
      {
        id: 1,
        userId: 6,
        userName: "Dr. Lisa Chen",
        userAvatar: "/images/chat/femaledoctor.png",
        content:
          "Let's discuss balanced meal planning! Share your favorite healthy recipes 🥗",
        timestamp: "2024-01-06T11:00:00Z",
        isImage: false,
      },
      {
        id: 2,
        userId: 7,
        userName: "Mark Wilson",
        userAvatar: "/images/patient.png",
        content: "Here's my weekly meal prep plan:",
        timestamp: "2024-01-06T11:05:00Z",
        isImage: false,
      },
      {
        id: 3,
        userId: 7,
        userName: "Mark Wilson",
        userAvatar: "/images/patient.png",
        content: "/images/meal-plan.png",
        timestamp: "2024-01-06T11:06:00Z",
        isImage: true,
      },
    ],
  },
  {
    id: 4,
    name: "Sleep Health",
    image: "/images/chat/wellness.png",
    summary:
      "Discussion forum for sleep-related issues and healthy sleep habits.",
    members: [
      {
        id: 8,
        name: "Dr. Maria Garcia",
        role: "Admin",
        avatar: "/images/chat/femaledoctor.png",
      },
    ],
    messages: [
      {
        id: 1,
        userId: 8,
        userName: "Dr. Maria Garcia",
        userAvatar: "/images/chat/femaledoctor.png",
        content: "Today's topic: Creating the perfect bedtime routine 😴",
        timestamp: "2024-01-06T20:00:00Z",
        isImage: false,
      },
      {
        id: 2,
        userId: 8,
        userName: "Dr. Maria Garcia",
        userAvatar: "/images/chat/femaledoctor.png",
        content: "/images/sleep-tips.png",
        timestamp: "2024-01-06T20:01:00Z",
        isImage: true,
      },
    ],
  },
  {
    id: 5,
    name: "Chronic Pain Management",
    image: "/images/chat/mentalhealth.png",
    summary: "Support group for managing chronic pain conditions.",
    members: [
      {
        id: 9,
        name: "Dr. Robert Kim",
        role: "Admin",
        avatar: "/images/chat/drbrown.png",
      },
    ],
    messages: [
      {
        id: 1,
        userId: 9,
        userName: "Dr. Robert Kim",
        userAvatar: "/images/chat/drbrown.png",
        content: "Let's explore gentle stretching exercises for pain relief 🌟",
        timestamp: "2024-01-06T14:00:00Z",
        isImage: false,
      },
      {
        id: 2,
        userId: 9,
        userName: "Dr. Robert Kim",
        userAvatar: "/images/chat/drbrown.png",
        content: "/images/stretching-guide.png",
        timestamp: "2024-01-06T14:01:00Z",
        isImage: true,
      },
    ],
  },
  {
    id: 6,
    name: "Heart Health",
    image: "/images/chat/wellness.png",
    summary:
      "Discussion group for cardiovascular health and prevention strategies.",
    members: [
      {
        id: 10,
        name: "Dr. Susan White",
        role: "Admin",
        avatar: "/images/chat/femaledoctor.png",
      },
    ],
    messages: [
      {
        id: 1,
        userId: 10,
        userName: "Dr. Susan White",
        userAvatar: "/images/chat/femaledoctor.png",
        content: "Today's focus: Heart-healthy diet choices ❤️",
        timestamp: "2024-01-06T15:00:00Z",
        isImage: false,
      },
      {
        id: 2,
        userId: 10,
        userName: "Dr. Susan White",
        userAvatar: "/images/chat/femaledoctor.png",
        content: "/images/heart-healthy-foods.png",
        timestamp: "2024-01-06T15:01:00Z",
        isImage: true,
      },
    ],
  },
  {
    id: 7,
    name: "Diabetes Management",
    image: "/images/chat/mentalhealth.png",
    summary:
      "Support community for managing diabetes and lifestyle adjustments.",
    members: [
      {
        id: 11,
        name: "Dr. Thomas Brown",
        role: "Admin",
        avatar: "/images/chat/drbrown.png",
      },
    ],
    messages: [
      {
        id: 1,
        userId: 11,
        userName: "Dr. Thomas Brown",
        userAvatar: "/images/chat/drbrown.png",
        content: "Let's discuss blood sugar monitoring tips and tricks 📊",
        timestamp: "2024-01-06T16:00:00Z",
        isImage: false,
      },
      {
        id: 2,
        userId: 11,
        userName: "Dr. Thomas Brown",
        userAvatar: "/images/chat/drbrown.png",
        content: "/images/glucose-monitoring.png",
        timestamp: "2024-01-06T16:01:00Z",
        isImage: true,
      },
    ],
  },
];

export const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    bio: "Experienced cardiologist with focus on preventive care and heart health management.",
    profilePhoto: "/images/doctors/doctor1.png",
    proficiencies: ["Cardiology", "Heart Surgery", "Vascular Medicine"],
    rating: 4.9,
    experience: 15,
    nextAvailable: "Tomorrow, 10:00 AM",
    consultationFee: 1500,
    location: "New Delhi",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    bio: "Specialized neurologist with expertise in treating complex neurological disorders.",
    profilePhoto: "/images/doctors/doctor2.png",
    proficiencies: ["Neurology", "Brain Surgery", "Stroke Care"],
    rating: 4.8,
    experience: 12,
    nextAvailable: "Today, 4:30 PM",
    consultationFee: 2000,
    location: "Mumbai",
  },
  {
    id: "3",
    name: "Dr. Emily Williams",
    bio: "Expert dermatologist specializing in advanced skin treatments and cosmetic procedures.",
    profilePhoto: "/images/doctors/doctor1.png",
    proficiencies: ["Dermatology", "Cosmetic Surgery", "Skin Care"],
    rating: 4.7,
    experience: 8,
    nextAvailable: "Tomorrow, 2:00 PM",
    consultationFee: 1800,
    location: "Bangalore",
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    bio: "Orthopedic surgeon with specialization in sports medicine and joint replacements.",
    profilePhoto: "/images/doctors/doctor2.png",
    proficiencies: ["Orthopedics", "Sports Medicine", "Joint Surgery"],
    rating: 4.9,
    experience: 14,
    nextAvailable: "Today, 6:00 PM",
    consultationFee: 2500,
    location: "Chennai",
  },
  {
    id: "5",
    name: "Dr. Lisa Anderson",
    bio: "Pediatric specialist with extensive experience in child healthcare and development.",
    profilePhoto: "/images/doctors/doctor1.png",
    proficiencies: ["Pediatrics", "Child Development", "Vaccination"],
    rating: 4.8,
    experience: 10,
    nextAvailable: "Tomorrow, 11:30 AM",
    consultationFee: 1700,
    location: "Hyderabad",
  },
];

export const stats = {
  pending: {
    count: 5,
    icon: ClockIcon,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    label: "Awaiting Response",
  },
  accepted: {
    count: 12,
    icon: CheckCircleIcon,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    label: "Consultations Approved",
  },
  rejected: {
    count: 3,
    icon: XCircleIcon,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    label: "Requests Declined",
  },
};

export const patientList = {
  showTo: "doctor",
  requests: [
    {
      id: "1",
      name: "James Anderson",
      profileImage: "/images/patient.png",
      requestDate: "2024-01-19",
      requestTime: "09:15",
      description:
        "Hello sir, I am experiencing severe pain in my lower back for the past 2 weeks.",
      status: "pending",
    },
    {
      id: "2",
      name: "Emma Thompson",
      profileImage: "/images/patient.png",
      requestDate: "2024-01-18",
      requestTime: "14:30",
      description: "Following up on my previous treatment.",
      status: "accepted",
    },
    {
      id: "3",
      name: "Michael Brown",
      profileImage: "/images/patient.png",
      requestDate: "2024-01-17",
      requestTime: "11:20",
      description: "Need urgent consultation regarding chest pain.",
      status: "rejected",
    },
  ],
};

export const doctorList = {
  showTo: "patient",
  requests: [
    {
      id: "2",
      name: "Dr. Sarah Wilson",
      profileImage: "/images/doctors/doctor1.png",
      requestDate: "2024-01-20",
      requestTime: "14:30",
      description:
        "Hello sir, I am experiencing severe pain in my lower back for the past 2 weeks. I would like to consult with you regarding this issue.",
      status: "pending",
    },
  ],
};
