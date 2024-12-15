export interface PhysicalAttributes {
  height: number;
  weight: number;
  eyeColor?: string;
  hairColor?: string;
  skinTone?: string;
}

export interface StylePreferences {
  preferredColors: string[];
  preferredStyles: string[];
  favoriteMusic?: string[];
  interests?: string[];
}

export interface UserProfile extends PhysicalAttributes, StylePreferences {
  id: string;
  measurements?: {
    chest: number;
    waist: number;
    hips: number;
    inseam: number;
  };
}