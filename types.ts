
import React from 'react';

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Advantage {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Testimonial {
  logoUrl: string;
  quote: string;
  author: string;
  company: string;
}

export interface BlogPost {
  imageUrl: string;
  title: string;
  date: string;
  excerpt: string;
}

export interface NavLink {
    name: string;
    href: string;
}
