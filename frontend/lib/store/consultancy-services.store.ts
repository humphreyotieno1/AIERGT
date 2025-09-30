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
          "It is an integral part of planning and development. It is a process used to assess the impact of planned activities on the environment, including impacts on biodiversity, vegetation and ecology, water, and air. An EIA identifies and evaluates the potential impacts of a proposed project, adopts measures to reduce or remove any negative effects and provides to optimize the beneficial effects.",
        image: "/services/research.png",
      },
      {
        id: "strategic-environmental-assessment",
        name: "Strategic Environmental Assessment (SEA)",
        description:
          "Strategic Environmental Assessment(SEA) refers to a range of analytical and participatory approaches that aim to integrate environmental consideration into policies, plans and programmes and evaluate the interlinkages with economic and social considerations. It provides means for looking at cumulative effects and appropriately address them at the earliest stage of decision making, We carry out Strategic Environmental Assessments(SEA) for both private and public development projects, Working in conjuction with various planners and relevant authorities we ensure that a strategic approach to development is incorporated in each project we undertake.",
        image: "/services/innovation.png",
      },
      {
        id: "health-safety-environment-audit",
        name: "Health, Safety & Environment Audits",
        description:
        "We offer Health, Safety and Environmental services tailored to meet your organizational Health, Safety and Environmental management requirements. Our health, safety and environmental consultancy services help organizations create and maintain safe and healthy workplaces and ensure the protection of the environment by preventing and mitigating adverse environmental impacts. Our services include: Environmental Audit, Waste Audit, Health and Safety Audit, Risk Assessment, Fire Safety Audit",
        image: "/services/training.png",
      },
      {
        id: "feasibility-studies",
        name: "Feasibility Studies",
        description:
          "It analyses spatial location and organizes layers of information into visualizations using maps. With this unique capability, GIS reveals deeper insights into data, such as patterns, relationships, and situations helping users make smarter decisions. We apply geospatial information and Earth observation data combined with environmental, socio-economic and other statistical data to provide unique inputs and solutions to our clients in their policy preparation, monitoring and evaluation in several areas: Agriculture. We develop integrative mapping and spatial solutions that help analyse and improve agriculture value chains.",
        image: "/services/mentor.png",
      },
      {
        id: "natural-resources-assessment",
        name: "Natural Resources Assessment",
        description:
          "We assess the natural resources such as land, water, soil, plants and animals, with a particular focus on how they affect the quality of life for both present and future generations. We specifically focus on a scientific and technical understanding of resources and ecology and the life-supporting capacity of those resources. We review the way in which people and natural landscapes interact.",
        image: "/services/research.png",
      },
      {
        id: "biodiversity-and-conservation-survey-and-mapping",
        name: "Biodiversity and Conservation Survey and Mapping",
        description:
          "Biodiversity is the variety of living things on Earth. This encompasses differences within species, between species, and within and between ecosystems. There are four levels of diversity: Genetic (the variety expressed within a species) Species (or the range of living things in a community) Functional (the actions of species with tit hin a community) Ecosystem (how living things interact whieir environments, such as oceans or forests).",
        image: "/services/innovation.png",
      }
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
        id: "geospatial-information-and-location-services",
        name: "Geospatial Information and Location Services",
        description:
          "Geospatial information and Earth observation data combined with environmental, socio-economic and other statistical data provide a unique input to governments in their policy preparation, monitoring and evaluation that enable timely, more accurate and trustworthy information to be made available to inform decisions, monitor progress and assess the impact of interventions as well as for future planning. We employ cutting edge geospatial technology and analytical methods that have the potential to reduce the geospatial digital divide in Africa, and unlock the opportunities for governments, organizations and businesses to leapfrog into the future and make rapid progress.",
        image: "/services/research.png",
      },
      {
        id: "remote-sensing-and-earth-observation",
        name: "Remote Sensing and Earth observation",
        description:
          "Currently, most of the demand for AI-powered earth observation comes from defense, government and humanitarian organizations. Profusion in the availability of EO data has led to better insights, improvement in data analytics, and service delivery, opening up a whole new set of application areas. We develop solutions for areas such as forestry, agriculture, energy, finance and insurance, cartography and critical infrastructure, among others. High-resolution and high-frequency satellite data can be used to map land use and monitor infrastructure, track agricultural development and respond quickly to natural disasters, monitor borders and coastal waters, evaluate the health of crops and natural resource production, track economic activity like transportation and factories, observe and protect the environment, and describe and predict the impact of natural phenomena or provide insights into environmental health and protection of natural habitats.",
        image: "/services/innovation.png",
      },
      {
        id: "geospatial-information-systems",
        name: "Geospatial Information Systems (GIS)",
        description:
          "A geographic information system (GIS) is a framework for gathering, managing, and analysing data. Rooted in the science of geography, GIS integrates many types of data. It analyses spatial location and organizes layers of information into visualizations using maps. With this unique capability, GIS reveals deeper insights into data, such as patterns, relationships, and situations helping users make smarter decisions. We apply Geospatial information and Earth observation data combined with environmental, socio-economic and other statistical data to provide unique inputs and solutions to our clients in their policy preparation, monitoring and evaluation in several areas: Agriculture. We develop integrative mapping and spatial solutions that help analyse and improve agriculture value chains.",
        image: "/services/training.png",
      },
      {
        id: "geospatial-artificial-intelligence",
        name: "Geospatial Artificial Intelligence (GeoAI)",
        description:
          "One of the biggest opportunities for geospatial information management in the near future is Artificial Intelligence - particularly, image analysis and information extraction. Geospatial Artificial Intelligence (GeoAI) is a sub-discipline of Artificial Intelligence that uses machine learning to extract knowledge from spatial data. With an exponentially increasing volume of remote and Internet of Things sensed data, automation is pivotal in enabling the effective processing of more and more data and achieving the goal of real-time data. Over the long-term, machine learning will be essential to deal with the growing requirements of an interconnected world. Automation is one of the initial steps in implementing Artificial Intelligence solutions. Geospatial Development/GIT (Development of GeoApps, Spatial Data Infrastructure, web and DSS service developments, workflow automation.)",
        image: "/services/innovation.png",
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
        name: "Social Impact Assessment",
        description: "Social Impact Assessment includes the processes of analysing, monitoring and managing the intended and unintended social consequences, both positive and negative, of planned interventions (policies, programs, plans, projects) and any social change processes invoked by those interventions. Its primary purpose is to bring about a more sustainable and equitable biophysical and human environment. SIA is best understood as an umbrella or overarching framework that embodies the evaluation of all impacts on humans and on all the ways in which people and communities interact with their socio-cultural, economic and biophysical surroundings. SIA thus has strong links with a wide range of specialist sub-fields involved in the assessment of areas such as: aesthetic impacts (landscape analysis); archaeological and cultural heritage impacts (both tangible and non-tangible); community impacts: cultural impacts: demographic impacts: development impacts: economic and fiscal impacts: gender impacts: health and mental health impacts: impacts on indigenous peoples rights: infrastructural impacts; institutional impacts; leisure and tourism impacts; political impacts (human rights, governance, democratization etc.): poverty: psychological impacts: resource issues (access and ownership of resources): impacts on social and human capital; and other impacts on societies. As such, comprehensive SIA cannot normally be undertaken by a single person, but requires a team approach (source: IAIA).",
        image: "/services/mentor.png",
      },
      {
        id: "health-impact-assessment",
        name: "Health Impact Assessment",
        description: "Health Impact Assessment (HIA) is a practical approach used to judge the potential health effects of a policy, programme or project on a population, particularly on vulnerable or disadvantaged groups. Recommendations are produced for decision-makers and stakeholders, with the aim of maximising the proposal’s positive health effects and minimising its negative health effects. The approach can be applied in diverse economic sectors and uses quantitative, qualitative and participatory techniques. HIA provides a way to engage with members of the public affected by a particular proposal. It also helps decision-makers make choices about actions and improvements to prevent disease or injury and to actively promote health. It is based on the four interlinked values of democracy (promoting stakeholder participation), equity (considering the impact on the whole population), sustainable development and the ethical use of evidence. (source: WHO)",
        image: "/services/innovation.png",
      },
      {
        id: "gender-assessment-and-planning",
        name: "Gender Assessment and Planning",
        description: "Gender impact assessment is the process of comparing and assessing according to gender relevant criteria, the current situation and trend with the expected development resulting from the introduction of proposed policy. Gender impact assessment is the estimation of the different effects (positive, negative or neutral) of any policy or activity implemented to specific items of gender equality.",
        image: "/services/training.png",
      },
      {
        id: "socio-economic-survey",
        name: "Socio-Economic Survey",
        description: "Socio-economic impact assessment (SEIA) is a useful tool to help understand the potential range of impacts of a proposed change, and the likely responses of those impacted if the change occurs. It can be used to assess impacts of a wide range of types of change, from a proposal to build a new freeway to a proposal to change access to a natural resource such as a forest or the ocean. This understanding can help design impact mitigation strategies to minimise negative and maximise positive impacts of any change. It is important to determine not only the full range of impact, such as changes to levels of income and employment, access to services, quality of life, but also the implications of each particular change. Impacts of a certain proposal of policy are also distinct from though influenced by, other activities which may be occurring. It is important therefore to identify the key source of impact and to separately identify impacts arising from other sources.",
        image: "/services/research.png",
      },
      {
        id: "resettlement-action-planning",
        name: "Resettlement Action Planning",
        description: "The purpose of the Resettlement Action Plan (RAP) Framework Study is to prepare a policy framework for land acquisition and resettlement by taking into account social considerations as a basis for detailed study of land acquisition and settlement to be conducted in the next stage, namely, the Basic Design stage. In order to achieve this purpose, the RAP Framework is prepared by reflecting regional conditions, which are studied through site reconnaissance and a socio-economic interview survey, and by considering donor policies and national regulations.",
        image: "/services/technology.png",
      },
      {
        id: "participatory-rural-appraisals",
        name: "Participatory Rural Appraisals",
        description: "PRA is an approach used by organizations and other agencies involved in international development. The approach aims to incorporate the knowledge and opinions of rural people in the planning and management of development projects and programs. Participatory Rural Appraisal (PRA) is a methodology used for interactive processes of social development: it is a way of learning from people, with the people and by the people. It is, therefore, a methodology for analyses, planning, monitoring and evaluation.",
        image: "/services/mentor.png",
      },
      {
        id: "community-development-planning",
        name: "Community Development Planning",
        description: "Community development planning consists of a public participatory and usually interactive form of town or neighborhood planning and design in which diverse community members contribute toward formulation of the goals, objectives, planning, fund/resource identification and direction, planned project implementations and reevaluation of documented local planning policy. It is a logical \"bottom-up\" evolution of (formerly \"top-down\") regional, city and urban planning in an era of plateaued or diminishing public resources, increasing local burdens and responsibilities and public activism. It often promotes public/private partnership as a means to harness physical development activities in support of community-defined goals. At a minimum, it seeks community consensus for proposed allocations of scarce resources among competing demands. In more vigorous application, community members access a full gamut of planning tools, shaping and being shaped by shared understanding of a complex community information base, directly informing and guiding local plan content, influencing resulting development budgets, projects and thus future infrastructure and land uses, as well as helping coordinate the work of overlapping jurisdictions, levels of government, internal and adjacent communities and various providers, such as business associations, utilities and schools.",
        image: "/services/innovation.png",
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
        id: "air-quality-monitoring-and-mapping",
        name: "Air Quality Monitoring and Mapping",
        description: "Air Quality monitoring is the systematic, long-term assessment of pollutant levels by measuring the quantity and types of certain pollutants in the surrounding, outdoor air. Some of the pollutants considered include carbon monoxide, benzene, butadiene, lead, sulphur dioxide, nitrogen dioxide, and particulates. Reasons to collect such data include to: assess the extent of pollution; provide air pollution data to the general public in a timely manner; support implementation of air quality goals or standards; evaluate the effectiveness of emissions control strategies; provide information on air quality trends; provide data for the evaluation of air quality models; and support research (e.g., long-term studies of the health effects of pollution).",
        image: "/services/research.png",
      },
      {
        id: "noise-and-vibration-monitoring-and-mapping",
        name: "Noise and Vibration Monitoring and Mapping",
        description: "Noise is typically defined as unwanted or undesirable sound. The basic parameters of environmental noise that affect human subjective response are intensity or level, frequency and variation with time. Vibration in buildings can be caused by many different external sources, including industrial, construction and transportation activities. Vibration in buildings may also occur from internal sources (within a building structure), such as mechanical vibration sources in buildings, human activity or adjoining structures. Noise and vibration monitoring is typically a component of all of the acoustic projects we complete. Noise and vibration monitoring compliance monitoring may be necessary for a range of reasons, including complaint investigation and assessment against license conditions. Baseline ambient monitoring is usually necessary to define criteria and goals, and noise monitoring is also commonly completed to assess the influence of specific noise sources such as transportation, industry and commerce.",
        image: "/services/innovation.png",
      },
      {
        id: "soil-sampling-and-analysis",
        name: "Soil Sampling and Analysis",
        description: "Soils are sampled to determine physical conditions, fertility (nutrient) status, and chemical properties that may be affected by a project or to establish a baseline or to determine the impact from pollution sources.",
        image: "/services/training.png",
      },
      {
        id: "water-sampling-and-analysis",
        name: "Water Sampling and Analysis",
        description: "Water sampling is done to characterize the chemical, thermal, or hydrological properties of a surface or subsurface aqueous system. Water sampling intends to provide information on water quality and quantity, and on hydrodynamic properties of systems under observation.",
        image: "/services/mentor.png",
      },
      {
        id: "hydrogeological-survey-and-mapping",
        name: "Hydrogeological Survey and Mapping",
        description: "Hydrogeological assessments consider how proposed developments may be affected by groundwater and nearby surface water, in terms of potential flood risk and impact on structural foundations. This type of assessment is required if there is a risk that the proposed development may alter groundwater flow and potentially cause settlement, ground movement or local flooding. Hydrological assessments and monitoring services include: Water Resources Management; Well Design and Construction Services: Baseline Monitoring for Coal Bed Methane Production and Hydraulic Fracturing associated with Petroleum Hydrocarbon Extraction; Environmental Water Investigations: Chemical and Statistical Analysis of Groundwater Chemical Parameters Well field calculations to determine the optimum number and spacing limits to provide the desired long-term yield for a water supply system; Tier II Groundwater Guideline Modification, Groundwater Remediation Techniques: Water Balance Modelling Studies.",
        image: "/services/innovation.png",
      },
      {
        id: "geotechnical-survey-and-mapping",
        name: "Geotechnical Survey and Mapping",
        description: "Geotechnical surveys are done by engineers who have expertise in the area of geography and soil. In a geotechnical investigation, the physical characteristics of the land and soil surrounding and laid in the foundation of the project are examined. With many areas prone to earthquakes, it becomes crucial that the infrastructure being built in such areas must have a strong footing. For this the soil that the construction is going to take place upon first needs to be examined for its properties. Lab testing is done and advanced technologies like ground-penetrating radar are used to get good samples of the soil. The structure erected, thus, will be more viable and secure from earthquakes. This survey can also be done post-construction after several years to understand long-term environmental changes in the soil due to the presence of a new building.",
        image: "/services/training.png",
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
        id: "urban-and-rural-planning",
        name: "Urban and Rural Planning",
        description: "The main motto of planning something is to create availability, accessibility, and affordability of all the resources to everyone. Urban and rural planning completes this goal as it helps in formulating a blueprint for the development of a new settlement on any land. By utilizing various engineers and experts, who come up with how air, water, and forest will be handled, how the inclusion of transportation, distribution of networks, and communication will be divided in a centralized manner, everything gets covered under this planning system. Urban and rural planning, both have public welfare, sanitation, and environment as the priority. Where urban planning deals with creating a framework for a huge settlement, rural planning is for areas with less population but extensive natural resources like dairy, wood, etc. The planning is done by developing a synergy between social, economic, and sustainable causes.",
        image: "/services/training.png",
      },
      {
        id: "sustainable-cities",
        name: "Sustainable Cities",
        description: "When the economic, social, and environmental sustainability goals of a city are enhanced and implemented to tackle new challenges that arise due to various natural and man-made factors, a sustainable city is born. Creating a sustainable city is a process through which the policies are fine-tuned with the current problems faced by a particular area. From energy efficiency to climate change, solid waste management, water conservation, each and every policy related to sustainability is revisited and reevaluated according to the current circumstances. If any discrepancies are found, new ways are amended into the system to make it fully functional with more productivity again.",
        image: "/services/innovation.png",
      },
      {
        id: "future-cities",
        name: "Future Cities",
        description: "From sky gardens to smart streets, everything sustainable and renewable, clean and green, is what we imagine our future cities to be like. But understanding how much of it is practical is also crucial. While we can develop a lot of goals, the steering wheels are in our hands towards the course of development we chose in order to reach them. If we go by the definition of future cities or smart cities given by The World Bank, \"they are technology-intensive settlements with sensors everywhere and highly efficient public services. All buildings are 'intelligent' with smart meters and energy-saving systems, and transport is painless. The debate and research questioning as to how these future cities can be built in an optimal manner are still out there.",
        image: "/services/technology.png",
      },
      {
        id: "future-agriculture",
        name: "Future Agriculture",
        description: "As said by many renowned agronomists, future agriculture will be led by innovations. Using modern tools and technologies to curb problems like water shortages, nutritional losses in soil values, etc., are problems that need to be addressed with robust assessments and efficient creations. With soil testing and understanding the reason behind water depletion, such problems can be solved in a better manner. With temperature sensors, aerial imaging, and other advanced tech, a more proficient farming system can be developed.",
        image: "/services/training.png",
      },
      {
        id: "master-plan-design-and-development",
        name: "Master Plan Design and Development",
        description: "Master planning is a rigorous practice used to establish dynamic settlement projects. As per its definition on The World Bank official site: \"A master plan is a dynamic long-term planning document that provides a conceptual layout to guide future growth and development. Master planning is about making the connection between buildings, social settings, and their surrounding environments.\" A master plan includes analysis, recommendations, and proposals for a site's population, economy, housing, transportation, community facilities, and land use. It is based on public input, surveys, planning initiatives, existing development, physical characteristics, and social and economic conditions. \"This acts as a convention through which private investments can be sought. Through this phased implementation of the construction, support from the locals, and division of public and private amenities becomes easier.",
        image: "/services/innovation.png",
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
        id: "climate-and-weather-modeling",
        name: "Climate and Weather Modeling",
        description: "Due to the rapid increase of global temperature, it has become rather hard to predict how the weather might change, due to which a lot of people in different industries can't make plans due to uncertainties. Even though we have satellites for climate and weather forecasting, predicting for particular areas is a daunting task. Hence, with the help of software and other tools, climate and weather modeling for specific regions can be done. As these will be computer-based, thus, their efficiency will be self-evident, and with 3D viewing provided, a vivid picture of all the happenings and changes in the climate and weather can be calculated.",
        image: "/services/technology.png",
      },
      {
        id: "land-degradation-modeling",
        name: "Land Degradation Modeling",
        description: "In areas that have low to no rainfall, land degradation is a common problem. When soil erosion happens at a very extended rate it leads to land degradation and causes environmental problems in the surrounding ecology. Hence, soil testing and assessment on a timely basis act as a pivotal way in curbing this issue. Through techniques like land degradation mapping, landscape changes, an extrapolated imagery can be devised and the necessary steps needed to be taken in order to reduce it should be implemented in the susceptible areas.",
        image: "/services/research.png",
      },
      {
        id: "hydrological-and-hydrogeological-modeling",
        name: "Hydrological and Hydrogeological Modeling",
        description: "A hydrologic model is a simplification of a real-world system (e.g., surface water, soil water, wetland, groundwater, estuary) that aids in understanding, predicting, and managing water resources. Both the flow and quality of water are commonly studied using hydrologic models. Such hydrological models are very useful for areas that are facing water shortages or nearing a water crisis. Hydrogeological modeling is used for understanding the type of soil division particular areas have. By using analytical and numerical approaches, a model is created for generating a better understanding of the water and soil ecology of an area.",
        image: "/services/training.png",
      },
      {
        id: "contaminant-pollution-modeling",
        name: "Contaminant/Pollution Modeling",
        description: "We all are familiar with the various types of contaminations that are affecting some of the most basic natural resources that we use on a daily basis. Some of the most prominent ones brings: 1. Water Pollution 2. Air Pollution 3. Noise Pollution 4. Land Pollution. While due to water pollution the marine life and our drinking water gets affected, air pollution leads to breathing problems, land pollution leads to groundwater contamination, and much more. With a model that can easily monitor all these shortcomings, the best way forward can be put to use while dealing with it. When we have accurate data about how much restoration work we have to do in order to make the situations more balanced, better policies can be formulated.",
        image: "/services/innovation.png",
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
        id: "natural-resources-management",
        name: "Natural Resources Management",
        description: "Environmental management or also called natural resource management works on using technically and scientifically sound tactics to understand and manage the ecosystem. Natural resource management deals with managing the way in which people and natural landscapes interact. It brings together natural heritage management, land use planning, water management, biodiversity conservation, and the future sustainability of industries like agriculture, mining, tourism, fisheries, and forestry. It recognizes that people and their livelihoods rely on the health and productivity of our landscapes, and their actions as stewards of the land play a critical role in maintaining this health and productivity. The way our natural surroundings and changes in them are affecting our lives and will be affecting our future generations is studied through this management program.",
        image: "/services/training.png",
      },
      {
        id: "water-resources-management",
        name: "Water Resources Management",
        description: "As reported by The World Bank, due to current practices, the world will face a 40% shortfall between forecast demand and available supply of water by 2030. To mitigate this problem, water resources management is the best option. With the help of such a system the policy management, regulations, monitoring, prompt decision making, all will become a lot easier. Investments in creative projects such as software that can make water resource management more viable will prove to be proactive steps in taking care of this situation. From recycling rainwater, greywater, and staying aware of water wastage, water resource management can be implemented with the help of local communities and the latest technologies.",
        image: "/services/innovation.png",
      },
      {
        id: "solid-waste-management",
        name: "Solid Waste Management",
        description: "With the rapid growth in population, solid waste has been burgeoning at an excruciating rate. Without proper management, it will soon penetrate in destroying other natural resources as well. Solid waste management can be divided into three categories: Infrastructure and Industries Most of the solid waste generated comes either from the infrastructure or industries. Therefore, solid waste management is a must in these sectors, through innovation and technology. Local Awareness Locals are not aware of how to dispose of their waste, leading to heaps of garbage lying at the side of the roads leading to an unhygienic environment. Drives making these people understand the importance of solid waste management are crucial. By social inclusion, using proper recycling processes and tools, solid waste management can be implemented with ease.",
        image: "/services/training.png",
      },
      {
        id: "environmental-hazardous-waste-management",
        name: "Environmental/Hazardous Waste Management",
        description: "As per the definition in a published paper by The World Bank: \"Hazardous materials (Hazmats) are those materials that represent an excessive risk to property, the environment, or human health because of their physical and/or chemical characteristics.\" Following is the official procedure to be followed when doing hazardous waste management., as recommended by The World Bank. Screening: Determine the characteristics and threshold quantities of each material and separate according to the categories specified by The World Bank. Hazardous Materials Management: Manage the risks associated with all Hazmat facilities and activities through: - Management Actions: training, worker health and safety, record keeping, and reporting. - Preventive Plans: for transportation, processes and operations, and hazardous wastes. - Emergency Preparedness and Response Plans: response activities, medical assistance, communications, and incident reporting. Community Involvement and Awareness: Inform the potentially affected community and provide public feedback.",
        image: "/services/innovation.png",
      },
     
      {
        id: "forestry-and-agroforestry-management",
        name: "Forestry and Agroforestry Management",
        description: "This management system works on the idea of creating land in which forest and agriculture can both exist together. Apart from the monetary benefits gained by agriculture, the forest can provide for some marketable products like wood, nuts, medicinal extracts, etc. Apart from introducing a new set of the ecosystem, agroforestry is an arrangement that is favorable to all its surroundings as it not only helps in increasing the farmer's income but also mitigates problems like soil erosion, plant growth, maintenance of wildlife, and much more. Some traditional practices that are followed in agroforestry management are crop diversification, tree-crop interaction, an arrangement of all the plantations that lead to soil and water conservation, and much more. These days many of these things can be done through various modeling software and other modern tools, which makes the generation and implementation of such management processes easier.",
        image: "/services/training.png",
      },
      {
        id: "environmental-economics-and-policy-support",
        name: "Environmental Economics and Policy Support",
        description: "Environmental Economics is a discipline that studies the relation between the environment and economics. Over the years we have seen that many reforms and policies have always been inclined towards economic welfare, ignoring its environmental impact. After the onslaught of climate change, a consciousness about such malice needed to be generated, and a balance between both the subjects involved needed to be established. Hence Environmental Economics was born that tries to define the financial aftermath of environmental degradation. Pollution and exploitation can lead to a lot of ecological damage, to reverse such effects, some financial input needs to be given. With the help of experts, such environment-related economic policies can be checked through theoretical modeling and studies.",
        image: "/services/innovation.png",
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
        id: "emergency-management-and-recovery",
        name: "Emergency Management and Recovery",
        description: "As the number of natural disasters is increasing, it is crucial to have emergency management and recovery SOPs (Standard Operating Procedures) to tackle such situations. Problems caused by environmental calamities can be mitigated with a proactive approach, in-action planning, and after-effects support can lead to saving the lives of a lot of people. Proper monitoring of the earth's geography and climatic changes to tackle disasters like cyclones and earthquakes can help us in being prepared. For such situations, efficient protocols need to be formed along with proper dissemination of information.",
        image: "/services/training.png",
      },
      {
        id: "flood-risk-mapping-and-management",
        name: "Flood Risk Mapping and Management",
        description: "Flood risk plans are the easiest way to lower the impact of such high-risk adversity. Maps help in projecting a clear picture of which areas are high, medium, or lightly prone. Hence, management can be done accordingly. From alleviation to risk-reduction to recovery from the damage, through flood risk mapping a fuller approach can be formed. Studies on the behavior of the oceans and rivers after climatic impacts and incoming rainfall along with extrapolation of earlier such incidents can help us in coming up with better ideas and innovation for the management of flood damage.",
        image: "/services/innovation.png",
      },
      {
        id: "natural-resources-damage-assessment",
        name: "Natural Resources Damage Assessment",
        description: "This assessment deals with the evaluation of all the aspects of restoration that need to be done after hazardous activities have happened near ecological areas, for example, oil spills in the ocean that can affect the marine habitat. To recover from such situations is done in a three-step process: Assessment: The site at which the incident has happened is examined by scientists for the collection of data and samples for predicting its effects. Planning: How the effects will be minimized in an organized manner and tools to be used for that purpose are laid down here. Restoration: The plan is put into action here.",
        image: "/services/research.png",
      },
      {
        id: "hazard-identification-and-mapping",
        name: "Hazard Identification and Mapping",
        description: "This is one of the most decisive aspects of forming policies that envelope emergency policy formation and other procedures relating to it. By formulating a detailed hazard profile and then mapping it for its impacts and after-effects provides a vivid picture to the researchers and policy builders for developing a more accurate and assertive strategy. Potential threats that get mapped can be categorized according to their risk intensity. Every now and then this map should be referred to for checking whether the resources that were allotted for such situations are being handled properly or not.",
        image: "/services/innovation.png",
      },
      {
        id: "disaster-mitigation-designing-and-planning",
        name: "Disaster Mitigation Designing and Planning",
        description: "According to the World Bank: \"Mainstreaming disaster risk management into development planning can reverse the current trend of rising disaster impact. Furthermore, when countries rebuild stronger, faster, and more inclusively after disasters, they can reduce the impact on people's livelihoods and well-being by as much as 31%, potentially cutting global average losses.\" With the help of disaster mitigation designing and planning a proactive approach can be followed for such catastrophes. They help in developing frameworks and build cities that are more resilient to such accidents. Through the strengthening of warning systems and fabricating proficient preparedness with mitigation designing we can create a safer future.",
        image: "/services/training.png",
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
        id: "cap-and-trade-schemes",
        name: "Cap and Trade Schemes",
        description: "Caps and Trade or Emission trading is a market-based approach to control pollution by providing economic incentives for reducing the emissions of the pollutants.In this, a limit is set on each party that emits such harmful toxins in the environment and a permit needs to be bought that specifies that limit. If in any case, the limit needs to be increased then the owner-party of the permit has to pay extra. Through such capping, a way can be found to best meet the environmental and economic policy targets. Through better regulation and book-keeping of the bigger industries can be done, who is one of the prime suspects in causing pollution. Green House Gas Inventory: In this, the annual calculation of greenhouse gas emissions is done and then its compliance is checked with national and international policies. Be it production-based consumption-based, each category of emission is checked and reported. The most stubborn greenhouse gases include Carbon dioxide, Methane, Nitrous Oxide, and Fluorinated gases. This helps in understanding the best direction in which mitigation efforts, strategies, further progression in controlling the greenhouse gases should be evolving. Through this local and national level plans can be set up that point towards more efficient use of energy technologies and increase awareness among the communities about the risks of climate change.",
        image: "/services/innovation.png",
      },
      {
        id: "green-house-gas-inventory",
        name: "Green House Gas Inventory",
        description: "In this, the annual calculation of greenhouse gas emissions is done and then its compliance is checked with national and international policies. Be it production-based consumption-based, each category of emission is checked and reported. The most stubborn greenhouse gases include Carbon dioxide, Methane, Nitrous Oxide, and Fluorinated gases. This helps in understanding the best direction in which mitigation efforts, strategies, further progression in controlling the greenhouse gases should be evolving. Through this local and national level plans can be set up that point towards more efficient use of energy technologies and increase awareness among the communities about the risks of climate change.",
        image: "/services/training.png",
      },
      {
        id: "climate-modeling",
        name: "Climate Modeling",
        description: "Climate modeling helps in predicting how average conditions will change in an area over a long period of time. Such models follow a qualitative approach and use the software in which oceans, lands, and atmospheric conditions and interactions can be created to predict those coming changes. Through these research works, hypotheses, thesis, can get the edge they need in proving their point and also helping information on basic structures if any drastic conversion were going to occur. Through such high-end research work, not only future conditions but past scenarios of the earth's climate can also be understood. By using mathematical models for such modeling, the accuracy for it increases tons, thus making this process more reliable.",
        image: "/services/research.png",
      },
      {
        id: "crop-modeling",
        name: "Crop Modeling",
        description: "Just like climate modeling, crop models are also a mathematical way of representing how a plant grows and interacts with its surroundings. By simulating seasons, soil nourishment, pest attacks, watering, the needs of a particular plant can be understood. Such models can easily cause variations in all such conditions that are required by the crop to grow healthy and see the effects that it goes through under different circumstances. Such models are beneficial for agriculture as they help in exploring the inter-relations between the crop, weather, surrounding resources, and much more and understand the current and future impact of climate change on them.",
        image: "/services/innovation.png",
      },
      {
        id: "renewable-energy",
        name: "Renewable Energy",
        description: "Renewable energy comes from naturally renewing but flow-limited sources; renewable resources are nearly limitless in terms of length but have a finite amount of energy per unit of time. A renewable energy source is one that may be used indefinitely and does not deplete the environment. Additionally, when the word 'green energy' is used, it typically refers to renewable energy sources as well. It refers to energy sources that are not as harmful to the environment as the most regularly utilized non-sustainable ones. Some of the examples of renewable energy are Biomass, Woods, Wind, Geothermal, Solar, Ethanol, Biodiesel and Hydropower.",
        image: "/services/technology.png",
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
        id: "africa",
        name: "Africa Information",
        description: "Africa is the world's second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km² (11.7 million square miles) including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area,[7] With 1.3 billion people[1][2] as of 2018, it accounts for about 16% of the world's human population. Africa's population is the youngest amongst all the continents;[8][9] the median age in 2012 was 19.7, when the worldwide median age was 30.4.[10] Despite a wide range of natural resources, Africa is the least wealthy continent per capita. In part due to geographic impediments,[11] legacies of European colonization in Africa and the Cold War,[12][13][14] [15][16] predatory/neo-colonialistic activities by Western nations and China, and undemocratic rule and deleterious policies,[11] Despite this low concentration of wealth, recent economic expansion and the large and young population make Africa an important economic market in the broader global context.",
        image: "/services/training.png",
      },
      {
        id: "management",
        name: "Management",
        description: "Meanwhile, East Africa saw a rise of Islamic influence and prosperity from Indian Ocean trade as ships from Arabia, Persia, India, and as far as Southeast Asia dropped anchor in major ports from Somalia down to Mozambique bringing spices and in return for slaves and ivory. Between the 7th and 19th centuries, over 18 million people were taken from the region as part of the Arab slave trade—roughly twice as many as the Atlantic slave trade would take to the Americas. Today, that influence remains in the culture and gastronomy of many places, most notably on the Indian Ocean islands such as Zanzibar, Comoros, the Seychelles, and Mauritius.",
        image: "/services/innovation.png",
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
