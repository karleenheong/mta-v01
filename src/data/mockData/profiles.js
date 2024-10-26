const profiles = {
  "urban-minimalist": {
    id: "urban-minimalist",
    name: "Kai Park",
    description: "A minimalist programmer who prefers city centers, modern spaces, and optimal work setups. Values efficiency and clean design over social spaces.",
    workStyle: "Focused, long hours of deep work",
    socialStyle: "Introverted",
    stayDuration: "3-6 months",
    budget: {
      min: 100000,
      max: 180000,
      preferred: 140000
    },
    // Tags are weighted 1-10, with 10 being most important
    preferenceWeights: {
      // Must-haves (8-10)
      "style_minimalist": 10,
      "style_modern": 9,
      "workspace_dedicated_room": 9,
      "desk_width_1m_plus": 10,
      "chair_ergonomic": 10,
      "internet_fiber": 10,
      "internet_high_speed": 10,
      "noise_very_quiet": 9,
      "workspace_good_lighting": 8,
      "property_type_entire_apartment": 8,
      
      // Strong preferences (6-7)
      "size_50_75sqm": 7,
      "capacity_single_occupancy": 7,
      "building_high_rise": 7,
      "transport_subway_within_15min_walk": 7,
      "safety_safe_area": 7,
      "kitchen_full": 6,
      "climate_central_ac": 6,
      
      // Nice-to-haves (4-5)
      "atmosphere_modern": 5,
      "building_security_guard": 5,
      "building_keycard_access": 5,
      "services_coworking_spaces": 4,
      
      // Neutral (1-3)
      "community_expat_friendly": 3,
      "food_cafes_nearby": 2,
      "food_restaurants_nearby": 2,
      
      // Negatives (-5 to -1)
      "atmosphere_social": -3,
      "noise_lively": -4,
      "property_type_shared_room": -5,
      "kitchen_shared": -4,
      "bathroom_shared": -5
    }
  },

  "social-nomad": {
    id: "social-nomad",
    name: "Sofia Martinez",
    description: "An extroverted content creator who thrives in social environments and values community over perfect workspaces. Prefers coliving spaces and areas with strong digital nomad presence.",
    workStyle: "Flexible, mix of cafes and coworking",
    socialStyle: "Highly extroverted",
    stayDuration: "1-3 months",
    budget: {
      min: 70000,
      max: 150000,
      preferred: 100000
    },
    preferenceWeights: {
      // Must-haves (8-10)
      "community_digital_nomad_hub": 10,
      "community_expat_friendly": 10,
      "atmosphere_social": 9,
      "special_networking_events": 9,
      "internet_high_speed": 9,
      "services_coworking_spaces": 8,
      "food_cafes_nearby": 8,
      
      // Strong preferences (6-7)
      "property_type_private_room": 7,
      "workspace_coworking_area": 7,
      "building_common_area": 7,
      "food_restaurants_nearby": 7,
      "transport_subway_within_15min_walk": 6,
      "atmosphere_trendy": 6,
      
      // Nice-to-haves (4-5)
      "building_cafe": 5,
      "style_contemporary": 5,
      "kitchen_shared": 5,
      "food_delivery_services": 4,
      "safety_safe_area": 4,
      
      // Neutral (1-3)
      "size_under_30sqm": 3,
      "capacity_single_occupancy": 2,
      "climate_air_conditioning": 2,
      
      // Negatives (-5 to -1)
      "noise_very_quiet": -2,
      "atmosphere_quiet": -3,
      "workspace_dedicated_room": -2
    }
  },

  "zen-seeker": {
    id: "zen-seeker",
    name: "Maya Watanabe",
    description: "A wellness-focused freelancer who values traditional aesthetics, peaceful environments, and connection to nature. Prefers quieter areas with good access to parks or beaches.",
    workStyle: "Balanced, regular hours with breaks",
    socialStyle: "Selectively social",
    stayDuration: "2-4 months",
    budget: {
      min: 90000,
      max: 160000,
      preferred: 130000
    },
    preferenceWeights: {
      // Must-haves (8-10)
      "style_traditional": 10,
      "atmosphere_quiet": 10,
      "noise_very_quiet": 9,
      "outdoor_garden": 9,
      "outdoor_parks": 8,
      "workspace_natural_light": 8,
      "internet_high_speed": 8,
      
      // Strong preferences (6-7)
      "property_type_entire_apartment": 7,
      "atmosphere_peaceful": 7,
      "safety_safe_area": 7,
      "bathroom_private": 7,
      "special_cultural_experience": 6,
      "building_low_rise": 6,
      
      // Nice-to-haves (4-5)
      "kitchen_full": 5,
      "community_local_community": 5,
      "outdoor_beach_access": 5,
      "bed_traditional": 4,
      "workspace_garden_view": 4,
      
      // Neutral (1-3)
      "transport_subway_within_15min_walk": 3,
      "services_coworking_spaces": 2,
      "food_cafes_nearby": 2,
      
      // Negatives (-5 to -1)
      "building_high_rise": -3,
      "atmosphere_social": -2,
      "noise_lively": -4,
      "style_modern": -2
    }
  },

  "luxury-remote": {
    id: "luxury-remote",
    name: "James Wilson",
    description: "A high-earning tech executive who prioritizes comfort and convenience. Wants full amenities and services, preferring luxury apartments or high-end serviced residences.",
    workStyle: "Professional, regular video calls",
    socialStyle: "Moderately social",
    stayDuration: "1-2 months",
    budget: {
      min: 150000,
      max: 300000,
      preferred: 200000
    },
    preferenceWeights: {
      // Must-haves (8-10)
      "style_luxury": 10,
      "property_type_serviced_apartment": 10,
      "service_cleaning": 9,
      "internet_fiber": 9,
      "workspace_dedicated_room": 9,
      "desk_multiple_monitors": 8,
      "special_business_ready": 8,
      
      // Strong preferences (6-7)
      "size_75_100sqm": 7,
      "bed_king": 7,
      "kitchen_full": 7,
      "kitchen_dishwasher": 7,
      "building_security_guard": 7,
      "building_gym": 6,
      "service_reception": 6,
      
      // Nice-to-haves (4-5)
      "building_high_rise": 5,
      "climate_central_ac": 5,
      "special_enhanced_cleaning": 5,
      "food_delivery_services": 4,
      "transport_subway_within_15min_walk": 4,
      
      // Neutral (1-3)
      "community_expat_friendly": 3,
      "atmosphere_modern": 2,
      "food_restaurants_nearby": 2,
      
      // Negatives (-5 to -1)
      "property_type_shared_room": -5,
      "kitchen_shared": -4,
      "size_under_30sqm": -4,
      "style_minimalist": -2
    }
  },

  "beach-creative": {
    id: "beach-creative",
    name: "Luna Peterson",
    description: "A creative professional who loves coastal living and outdoor activities. Prefers locations with sea views and good natural light, balancing work with beach lifestyle.",
    workStyle: "Flexible, inspired by surroundings",
    socialStyle: "Moderately extroverted",
    stayDuration: "2-3 months",
    budget: {
      min: 110000,
      max: 170000,
      preferred: 150000
    },
    preferenceWeights: {
      // Must-haves (8-10)
      "outdoor_beach_access": 10,
      "workspace_sea_view": 10,
      "workspace_natural_light": 9,
      "internet_high_speed": 9,
      "special_sea_view": 8,
      "outdoor_terrace": 8,
      
      // Strong preferences (6-7)
      "property_type_entire_apartment": 7,
      "style_modern": 7,
      "atmosphere_modern": 7,
      "building_high_rise": 7,
      "desk_width_1m_plus": 6,
      "chair_ergonomic": 6,
      
      // Nice-to-haves (4-5)
      "kitchen_full": 5,
      "community_expat_friendly": 5,
      "food_cafes_nearby": 5,
      "services_coworking_spaces": 4,
      "climate_air_conditioning": 4,
      
      // Neutral (1-3)
      "transport_subway_within_15min_walk": 3,
      "noise_moderate": 3,
      "atmosphere_social": 2,
      
      // Negatives (-5 to -1)
      "style_traditional": -2,
      "building_historic": -2,
      "noise_very_quiet": -1,
      "atmosphere_quiet": -1
    }
  }
};

export default profiles;
