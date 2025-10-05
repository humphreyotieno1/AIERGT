export type TrainingDiscipline = {
  id: string
  name: string
  description: string
  icon: string
  courses: string[]
}

export type TrainingCategory = {
  slug: "courses" | "certificate" | "bachelor" | "master"
  title: string
  heading: string
  subtitle: string
  summary: string
  backgroundImages: string[]
  disciplines: TrainingDiscipline[]
}

export const trainingCategories: TrainingCategory[] = [
  {
    slug: "courses",
    title: "Online Professional Courses",
    heading: "Online Courses",
    subtitle: "Stay ahead with focused micro-learning modules",
    summary:
      "Live instructor-led and self-paced courses designed for practitioners who need tactical, job-ready skills in geospatial intelligence and environmental governance.",
    backgroundImages: ["/hero/lagos.jpg", "/hero/forest.jpg"],
    disciplines: [
      {
        id: "courses-geospatial",
        name: "Geospatial intelligence",
        description:
          "Core and advanced GIS, remote sensing, and spatial analysis tracks for teams mapping Africa's critical systems.",
        icon: "satellite",
        courses: [
          "Introduction to Earth Observation (Remote Sensing) / Digital Image",
          "Open-Source Tools / Data and Application",
          "Introduction to Digital Cartography and GIS Mapping",
          "Radar & Lidar Remote Sensing",
          "Applied Remote Sensing & GIS",
          "Global Positioning System and Mobile Mapping for General Applications",
          "GIS and Natural Resources Management",
          "Environmental Impact Assessment",
        ],
      },
      {
        id: "courses-environmental",
        name: "Environmental stewardship",
        description:
          "Foundational compliance and sustainability programmes for practitioners shaping resilient infrastructure portfolios.",
        icon: "leaf",
        courses: [
          "Environmental Impact Assessment",
          "Strategic Environmental Assessment",
          "Air Quality Monitoring",
          "Noise Monitoring",
          "Project Planning and Management",
          "Carbon Market and Trading",
          "Waste Management",
          "Water Resource Management",
          "Renewable Energy",
          "Sustainable Cities",
        ],
      },
    ],
  },
  {
    slug: "certificate",
    title: "Certificate & Diploma Pathways",
    heading: "Online Certificate and Diploma Courses",
    subtitle: "Earn industry-recognised credentials in under 12 months",
    summary:
      "Cohort-based programmes with mentoring and portfolio reviews for professionals accelerating into specialist and managerial roles.",
    backgroundImages: ["/hero/buildings.jpg", "/hero/lagos.jpg"],
    disciplines: [
      {
        id: "certificate-geospatial",
        name: "Geospatial diplomas",
        description:
          "Applied GIS and remote sensing diplomas curated with African infrastructure case studies and datasets.",
        icon: "globe",
        courses: [
          "Mobile GIS",
          "GIS and Remote Sensing",
          "Data Collection and Management",
          "GIS and Natural Resources Management",
          "GIS and Environmental Studies",
          "GIS and Agriculture",
          "Water Resources Management",
          "Environmental Impact Assessment",
          "Strategic Environmental Assessment (SEA)",
        ],
      },
      {
        id: "certificate-environmental",
        name: "Environmental governance",
        description:
          "Compliance-driven diplomas equipping officers to implement national and regional environmental safeguards.",
        icon: "scale",
        courses: [
          "Water Resources Management",
          "Environmental Impact Assessment",
          "Strategic Environmental Assessment",
        ],
      },
    ],
  },
  {
    slug: "bachelor",
    title: "Bachelor's Degrees",
    heading: "Online Bachelor's Degree Courses",
    subtitle: "Undergraduate degrees with African industry placements",
    summary:
      "Four-year degree pathways delivered with accredited university partners and experiential studio projects.",
    backgroundImages: ["/hero/forest.jpg", "/hero/lagos.jpg"],
    disciplines: [
      {
        id: "bachelor-geospatial",
        name: "Geospatial degrees",
        description:
          "Undergraduate majors covering geospatial engineering and remote sensing for national development programmes.",
        icon: "map",
        courses: [
          "Bachelor of Science in Geospatial Engineering",
          "Bachelor of Science in GIS and Remote Sensing",
          "Bachelor of Science in GIS and Remote Sensing",
        ],
      },
      {
        id: "bachelor-environmental",
        name: "Environmental degrees",
        description:
          "Degree programmes that blend ecological science with policy, planning, and water systems management.",
        icon: "treePine",
        courses: [
          "Bachelor of Science in Water Resources Management",
          "Bachelor of Science in Environmental Planning",
        ],
      },
    ],
  },
  {
    slug: "master",
    title: "Masters & PhD Programmes",
    heading: "Online Masters and PhD Courses",
    subtitle: "Advanced research pathways with practitioner supervision",
    summary:
      "Graduate degrees co-designed with ministries, private sector labs, and research institutes tackling Africa's grand challenges.",
    backgroundImages: ["/hero/buildings.jpg", "/hero/forest.jpg"],
    disciplines: [
      {
        id: "master-geospatial",
        name: "Geospatial graduate studies",
        description:
          "Masters and doctoral tracks in geospatial innovation, spatial analytics, and decision support systems.",
        icon: "compass",
        courses: [
          "Master of Science in Geospatial Engineering",
          "Master of Science in GIS and Remote Sensing",
          "PhD in Geospatial Engineering",
          "PhD in GIS and Remote Sensing",
        ],
      },
      {
        id: "master-environmental",
        name: "Environmental science",
        description:
          "Specialist climate and resource management degrees focused on mitigation, adaptation, and circular economy systems.",
        icon: "flaskRound",
        courses: [
          "Master of Science in Environmental Science",
          "Master of Science in Water Resources Management",
          "Master of Science in Climate Change and Food Security",
          "PhD in Environmental Science",
          "PhD in Water Resources Management",
          "PhD in Climate Change and Food Security",
        ],
      },
    ],
  },
]

export function getTrainingCategory(slug: TrainingCategory["slug"]) {
  return trainingCategories.find((category) => category.slug === slug)
}

export function getTrainingCategorySummaries() {
  return trainingCategories.map(({ slug, title, subtitle, summary, backgroundImages }) => ({
    slug,
    title,
    subtitle,
    summary,
    backgroundImages,
  }))
}

