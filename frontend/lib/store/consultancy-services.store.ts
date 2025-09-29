export type ConsultancyService = {
  id: string
  name: string
  description: string
  image: string
}

export type ConsultancyServiceCategory = {
  slug: string
  name: string
  description: string
  summary: string
  heroImage: string
  services: ConsultancyService[]
}

export const consultancyServiceCategories: ConsultancyServiceCategory[] = [
  {
    slug: "environmental",
    name: "Environmental Assessment",
    description:
      "Comprehensive environmental assessment services including impact studies, scenario planning, audits, and cumulative reviews to support project approvals and resilient delivery.",
    summary:
      "Independent impact studies that unlock approvals and guide resilient project delivery across Africa.",
    heroImage: "/services/research.png",
    services: [
      {
        id: "environmental-impact-assessment",
        name: "Environmental Impact Assessment (EIA)",
        description:
          "Baseline surveys, stakeholder engagement, and mitigation planning that satisfy national and international compliance frameworks.",
        image: "/services/research.png",
      },
      {
        id: "strategic-environmental-assessment",
        name: "Strategic Environmental Assessment (SEA)",
        description:
          "High-level scenario planning that evaluates policy, plan, or programme alternatives before capital is committed.",
        image: "/services/innovation.png",
      },
      {
        id: "health-safety-environment-audit",
        name: "Health, Safety & Environment Audits",
        description:
          "Integrated HSE audits that benchmark performance, expose hidden risks, and outline pragmatic corrective actions.",
        image: "/services/training.png",
      },
      {
        id: "cumulative-impact-review",
        name: "Cumulative Impact Review",
        description:
          "Forward-looking studies that quantify cumulative, transboundary, and long-term effects for complex investments.",
        image: "/services/mentor.png",
      },
    ],
  },
  {
    slug: "geospatial",
    name: "Geospatial Assessment & Earth Observation",
    description:
      "Advanced geospatial and earth observation services leveraging GIS, remote sensing, and spatial analytics to deliver actionable intelligence for diverse projects.",
    summary:
      "Advanced GIS, remote sensing, and spatial analytics that transform raw data into operational intelligence.",
    heroImage: "/services/technology.png",
    services: [
      {
        id: "remote-sensing-analysis",
        name: "Remote Sensing Analysis",
        description:
          "High-resolution satellite and drone analytics that monitor land use, vegetation, hydrology, and infrastructure change.",
        image: "/services/technology.png",
      },
      {
        id: "gis-application-development",
        name: "GIS Application Development",
        description:
          "Tailored GIS solutions, dashboards, and geoportals that connect teams with authoritative spatial information in real time.",
        image: "/services/research.png",
      },
      {
        id: "geodata-management",
        name: "Geodata Management & Integration",
        description:
          "Enterprise data governance, metadata cataloguing, and interoperability workflows for national and corporate spatial programs.",
        image: "/services/innovation.png",
      },
      {
        id: "3d-terrain-modelling",
        name: "3D Terrain & Asset Modelling",
        description:
          "LiDAR and photogrammetry deliverables that accelerate planning, construction monitoring, and asset lifecycle management.",
        image: "/services/training.png",
      },
    ],
  },
  {
    slug: "social",
    name: "Social Assessment & Development Planning",
    description:
      "Social impact, resettlement, stakeholder engagement, and sustainable development planning services to align investments with community needs and growth.",
    summary:
      "Human-centered insights that align investments with community priorities and inclusive growth goals.",
    heroImage: "/services/mentor.png",
    services: [
      {
        id: "social-impact-assessment",
        name: "Social Impact Assessment (SIA)",
        description:
          "Evidence-based studies that forecast socio-economic implications and map benefits to vulnerable groups.",
        image: "/services/mentor.png",
      },
      {
        id: "resettlement-action-plans",
        name: "Resettlement Action Planning",
        description:
          "Compliant RAP frameworks covering compensation, livelihood restoration, and grievance redress mechanisms.",
        image: "/services/research.png",
      },
      {
        id: "stakeholder-engagement",
        name: "Stakeholder Engagement Strategy",
        description:
          "Targeted communication roadmaps that keep host communities, regulators, and investors aligned throughout implementation.",
        image: "/services/innovation.png",
      },
      {
        id: "sustainable-development-plans",
        name: "Sustainable Development Planning",
        description:
          "Inclusive masterplans that integrate social infrastructure, ESG priorities, and measurable development outcomes.",
        image: "/services/training.png",
      },
    ],
  },
  {
    slug: "monitoring",
    name: "Environmental Monitoring",
    description:
      "Comprehensive monitoring services for regulatory compliance, biodiversity, water and air quality, and environmental performance reviews.",
    summary:
      "Continuous intelligence that keeps projects compliant, resilient, and responsive to emerging environmental signals.",
    heroImage: "/services/research.png",
    services: [
      {
        id: "compliance-monitoring",
        name: "Regulatory Compliance Monitoring",
        description:
          "End-to-end monitoring programs that capture statutory indicators and package timely submissions to authorities.",
        image: "/services/research.png",
      },
      {
        id: "biodiversity-monitoring",
        name: "Biodiversity Monitoring",
        description:
          "Field surveys, camera traps, and habitat health dashboards that safeguard biodiversity net gain commitments.",
        image: "/services/mentor.png",
      },
      {
        id: "water-air-quality",
        name: "Water & Air Quality Surveillance",
        description:
          "Mobile and fixed monitoring stations that deliver defensible data on ambient air, surface, and groundwater quality.",
        image: "/services/technology.png",
      },
      {
        id: "environmental-performance-reviews",
        name: "Environmental Performance Reviews",
        description:
          "Independent reviews that benchmark KPIs, verify mitigation effectiveness, and recommend adaptive management actions.",
        image: "/services/innovation.png",
      },
    ],
  },
  {
    slug: "planning",
    name: "Environmental Planning",
    description:
      "Strategic planning services for land use, urban resilience, emergency response, and long-term environmental roadmaps.",
    summary:
      "Strategic advisory that positions assets, cities, and landscapes for sustainable growth and investment resilience.",
    heroImage: "/services/innovation.png",
    services: [
      {
        id: "integrated-land-use-planning",
        name: "Integrated Land Use Planning",
        description:
          "Spatial strategies that balance conservation, livelihoods, and infrastructure expansion for inclusive development.",
        image: "/services/innovation.png",
      },
      {
        id: "urban-resilience-plans",
        name: "Urban Resilience Planning",
        description:
          "Climate-ready city blueprints covering mobility, utilities, and nature-positive infrastructure investments.",
        image: "/services/technology.png",
      },
      {
        id: "emergency-response-preparedness",
        name: "Emergency Response Preparedness",
        description:
          "Risk-led emergency response frameworks, drills, and decision-support tools for public and private assets.",
        image: "/services/training.png",
      },
      {
        id: "strategic-environmental-roadmaps",
        name: "Strategic Environmental Roadmaps",
        description:
          "Long-range environmental action plans that align capital projects with ESG and sustainability KPIs.",
        image: "/services/mentor.png",
      },
    ],
  },
  {
    slug: "modelling",
    name: "Environmental Modelling",
    description:
      "Predictive modelling services for climate risk, hydrology, emissions, and resource optimisation to support decision-making.",
    summary:
      "Predictive analytics that quantify risk, guide investments, and stress-test environmental performance.",
    heroImage: "/services/technology.png",
    services: [
      {
        id: "climate-risk-modelling",
        name: "Climate Risk Modelling",
        description:
          "Downscaled climate projections that translate hazards into asset-level risk profiles and adaptation actions.",
        image: "/services/technology.png",
      },
      {
        id: "hydrological-modelling",
        name: "Hydrological & Catchment Modelling",
        description:
          "Surface and groundwater simulations that optimise water allocation, flood mitigation, and ecosystem services.",
        image: "/services/research.png",
      },
      {
        id: "emissions-dispersion-modelling",
        name: "Emissions Dispersion Modelling",
        description:
          "Atmospheric models that evaluate emissions sources, transport, and compliance with air quality standards.",
        image: "/services/innovation.png",
      },
      {
        id: "resource-optimisation-analytics",
        name: "Resource Optimisation Analytics",
        description:
          "Systems models that minimise energy, water, and material footprints across complex operations.",
        image: "/services/training.png",
      },
    ],
  },
  {
    slug: "management",
    name: "Environmental Management",
    description:
      "Environmental management systems, waste and pollution programs, ESG tracking, and capacity building for continuous improvement.",
    summary:
      "Practical frameworks that maintain compliance, strengthen culture, and drive continuous environmental improvement.",
    heroImage: "/services/training.png",
    services: [
      {
        id: "environmental-management-systems",
        name: "Environmental Management Systems",
        description:
          "Full lifecycle EMS design, implementation, and optimisation aligned with ISO 14001 and sector regulations.",
        image: "/services/training.png",
      },
      {
        id: "waste-management-programs",
        name: "Waste & Pollution Management Programs",
        description:
          "Waste audits, segregation strategies, and pollution prevention plans tailored to industrial operations.",
        image: "/services/innovation.png",
      },
      {
        id: "esg-performance-tracking",
        name: "ESG Performance Tracking",
        description:
          "Dashboards, KPIs, and reporting toolkits that connect ESG performance with investor expectations.",
        image: "/services/research.png",
      },
      {
        id: "capacity-building-programs",
        name: "Capacity Building & Training",
        description:
          "Targeted training programs that empower teams to maintain compliance and embed sustainability culture.",
        image: "/services/mentor.png",
      },
    ],
  },
  {
    slug: "security",
    name: "Environment & Security",
    description:
      "Advisory services addressing environmental-security risks, critical infrastructure protection, intelligence briefings, and early warning systems.",
    summary:
      "Risk-sensitive advisory that protects assets and communities from environmental-security threats.",
    heroImage: "/services/mentor.png",
    services: [
      {
        id: "environmental-security-risk",
        name: "Environmental Security Risk Assessments",
        description:
          "Cross-disciplinary assessments linking environmental stressors, security issues, and operational continuity.",
        image: "/services/mentor.png",
      },
      {
        id: "critical-infrastructure-protection",
        name: "Critical Infrastructure Protection",
        description:
          "Resilience strategies that safeguard energy, water, and transport assets from environmental hazards and sabotage.",
        image: "/services/technology.png",
      },
      {
        id: "environmental-intelligence-briefings",
        name: "Environmental Intelligence Briefings",
        description:
          "Custom intelligence briefs that inform leadership decisions on emerging environmental-security hotspots.",
        image: "/services/innovation.png",
      },
      {
        id: "early-warning-systems",
        name: "Early Warning & Emergency Coordination",
        description:
          "Monitoring systems, SOPs, and training that improve preparedness for environmental-security incidents.",
        image: "/services/training.png",
      },
    ],
  },
  {
    slug: "consultancy",
    name: "Strategic Consultancy Services",
    description:
      "Strategic consultancy for sustainability, policy, capacity building, and reporting to align environmental ambition with business and finance.",
    summary:
      "Board-level advisory that aligns environmental ambition with business strategy, policy, and finance.",
    heroImage: "/services/innovation.png",
    services: [
      {
        id: "strategic-sustainability-advisory",
        name: "Strategic Sustainability Advisory",
        description:
          "Transformation roadmaps that integrate ESG, climate action, and operational excellence into corporate strategy.",
        image: "/services/innovation.png",
      },
      {
        id: "policy-and-regulatory-advisory",
        name: "Policy & Regulatory Advisory",
        description:
          "Navigation of environmental legislation, permitting, and incentive frameworks across African jurisdictions.",
        image: "/services/research.png",
      },
      {
        id: "capacity-building-workshops",
        name: "Capacity Building Workshops",
        description:
          "Executive and technical coaching that embeds best practice and accelerates programme adoption.",
        image: "/services/training.png",
      },
      {
        id: "sustainability-reporting",
        name: "Sustainability & Impact Reporting",
        description:
          "Double-materiality assessments and disclosures aligned with GRI, SASB, and African sustainability standards.",
        image: "/services/mentor.png",
      },
    ],
  },
  {
    slug: "climate",
    name: "Climate Change & Renewable Energy",
    description:
      "Climate change and renewable energy services including vulnerability assessment, feasibility studies, carbon accounting, and finance readiness.",
    summary:
      "Decarbonisation and resilience solutions that unlock green finance and protect assets from climate shocks.",
    heroImage: "/services/research.png",
    services: [
      {
        id: "climate-vulnerability-assessment",
        name: "Climate Vulnerability Assessment",
        description:
          "Risk-based assessments that prioritise adaptation investments for sectors, cities, and supply chains.",
        image: "/services/research.png",
      },
      {
        id: "renewable-energy-feasibility",
        name: "Renewable Energy Feasibility Studies",
        description:
          "Resource assessments, techno-economics, and grid integration plans for solar, wind, hydro, and hybrid systems.",
        image: "/services/technology.png",
      },
      {
        id: "carbon-footprint-accounting",
        name: "Carbon Footprint Accounting",
        description:
          "GHG inventories, science-based targets, and MRV frameworks that demonstrate credible decarbonisation progress.",
        image: "/services/innovation.png",
      },
      {
        id: "climate-finance-readiness",
        name: "Climate Finance Readiness",
        description:
          "Investment-grade proposals and impact measurement that meet donor, DFIs, and climate fund requirements.",
        image: "/services/training.png",
      },
    ],
  },
  {
    slug: "certifications",
    name: "Management Systems Certifications",
    description:
      "Support for ISO and integrated management systems certification, audit readiness, and continuous improvement for operational excellence.",
    summary:
      "Certification journeys that elevate governance, unlock market access, and sustain operational excellence.",
    heroImage: "/services/training.png",
    services: [
      {
        id: "iso-certification-support",
        name: "ISO Certification Support",
        description:
          "Gap assessments, implementation support, and readiness audits across ISO 9001, 14001, 45001, and 22301.",
        image: "/services/training.png",
      },
      {
        id: "integrated-management-systems",
        name: "Integrated Management Systems",
        description:
          "Frameworks that unify quality, environment, and safety standards for streamlined governance.",
        image: "/services/innovation.png",
      },
      {
        id: "audit-readiness-coaching",
        name: "Audit Readiness Coaching",
        description:
          "Hands-on coaching, internal audit simulations, and documentation reviews to secure certification confidence.",
        image: "/services/mentor.png",
      },
      {
        id: "continuous-improvement-roadmaps",
        name: "Continuous Improvement Roadmaps",
        description:
          "Post-certification support that embeds Kaizen practices, KPI tracking, and digital performance dashboards.",
        image: "/services/research.png",
      },
    ],
  },
]

export const getConsultancyServiceCategory = (slug: string) =>
  consultancyServiceCategories.find((category) => category.slug === slug)

export const getConsultancyServiceCategorySummaries = () =>
  consultancyServiceCategories.map((category) => ({
    slug: category.slug,
    name: category.name,
    description: category.description,
    summary: category.summary,
    heroImage: category.heroImage,
  }))
