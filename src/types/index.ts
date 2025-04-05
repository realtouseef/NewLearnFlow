
export type User = {
  id: string;
  name: string;
  email: string;
  subscription: SubscriptionTier;
};

export enum SubscriptionTier {
  FREE = 'free',
  PREMIUM = 'premium',
  ELITE = 'elite'
}

export type Note = {
  id: string;
  title: string;
  description: string;
  subject: string;
  fileUrl: string;
  previewUrl?: string;
  author: string;
  uploadDate: string;
  tier: SubscriptionTier;
  downloads: number;
  rating: number;
  fileType: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  iconName: string;
};
