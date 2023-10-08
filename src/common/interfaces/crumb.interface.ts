import React from 'react';

export interface ICrumb {
  label: string;
  code?: string;
  href: string;
  icon?: React.ReactNode;
}
