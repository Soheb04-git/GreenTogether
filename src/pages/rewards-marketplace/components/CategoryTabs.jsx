import React from 'react';

import Button from '../../../components/ui/Button';

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', label: 'All Rewards', icon: 'Grid3X3' },
    { id: 'vouchers', label: 'E-Vouchers', icon: 'Gift' },
    { id: 'products', label: 'Eco Products', icon: 'Leaf' },
    { id: 'experiences', label: 'Experiences', icon: 'MapPin' },
    { id: 'charity', label: 'Donate', icon: 'Heart' },
    { id: 'society', label: 'Society Bulk', icon: 'Users' }
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        {categories?.map((category) => (
          <Button
            key={category?.id}
            variant={activeCategory === category?.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange(category?.id)}
            iconName={category?.icon}
            iconPosition="left"
            iconSize={16}
            className="flex-shrink-0"
          >
            {category?.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;