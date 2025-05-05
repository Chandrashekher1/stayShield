import React from 'react';
import { MapPin, CheckCircle, Lock, Star } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-blue-700">{property.title}</h2>
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin size={14} className="mr-1" /> {property.location}
        </div>
        <div className="my-2 text-sm">
          <p><strong>Rent:</strong> ₹{property.price}/month</p>
          <p><strong>Deposit:</strong> ₹{property.deposit}</p>
          <p><strong>Type:</strong> {property.type}</p>
        </div>
        <div className="flex items-center gap-2 mt-3 text-sm">
          {property.aiVerified && (
            <span className="text-green-600 flex items-center gap-1">
              <CheckCircle size={16} /> AI Verified
            </span>
          )}
          {property.blockchainVerified ? (
            <span className="text-blue-600 flex items-center gap-1">
              <Lock size={16} /> Blockchain Verified
            </span>
          ) : (
            <span className="text-yellow-600 flex items-center gap-1">
              <Lock size={16} /> Pending Verification
            </span>
          )}
        </div>
        <div className="flex items-center text-yellow-500 mt-2">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < Math.floor(property.rating) ? 'currentColor' : 'none'}
            />
          ))}
          <span className="text-gray-500 text-xs ml-2">{property.rating} / 5</span>
        </div>
        <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
