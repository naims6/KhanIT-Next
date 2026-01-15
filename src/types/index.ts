export interface ServiceCategory {
  title: string;
  items: string[];
}

export interface Service {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  active?: boolean;
}

export interface WhyChooseUs {
  title: string;
  description: string;
  image: string;
  iconBg: string;
  number: string;
  active?: boolean;
}

export interface Stat {
  value: string;
  label: string;
  image: string;
  color: string;
  bgColor: string;
  description: string;
}
