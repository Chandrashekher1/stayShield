import React, { useState } from "react";

export default function LandlordDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Properties", "Smart Contracts", "AI Image Comparison", "Profile", "Services"];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex space-x-2">
          {/* <button className="px-4 py-2 bg-white border rounded-lg text-sm font-medium">Tenant</button> */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">Landlord</button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeTab === tab ? 'bg-blue-100 text-blue-700' : 'bg-white border text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Overview" && (
        <>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-white rounded-2xl shadow">
              <p className="text-sm text-gray-500">Active Contracts</p>
              <p className="text-2xl font-bold">3</p>
              <p className="text-xs text-green-500">+1 from last month</p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow">
              <p className="text-sm text-gray-500">Total Security Deposits</p>
              <p className="text-2xl font-bold">$7,200</p>
              <p className="text-xs text-gray-400">Locked in smart contracts</p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow">
              <p className="text-sm text-gray-500">Rental Score</p>
              <p className="text-2xl font-bold">92/100</p>
              <p className="text-xs text-green-500">+5 points from last rating</p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow">
              <p className="text-sm text-gray-500">Verification Status</p>
              <p className="text-2xl font-bold text-green-600">Verified</p>
              <p className="text-xs text-gray-400">All documents approved</p>
            </div>
          </div>

          {/* Properties and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-4">My Properties</h2>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1050&q=80"
                  alt="Property"
                  className="rounded-xl w-16 h-16 object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold">Modern Downtown Apartment</p>
                  <p className="text-sm text-gray-500">123 Main St, Downtown, City</p>
                </div>
                <button className="text-blue-600 font-medium text-sm">View</button>
              </div>
              <div className="mt-4">
                <button className="w-full text-center bg-gray-100 py-2 rounded-lg text-sm font-medium">View All Properties</button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-3 text-sm">
                <ActivityItem icon="✅" title="Deposit Released" desc="Deposit for Property #1234 has been released to landlord" time="Today at 2:30 PM" />
                <ActivityItem icon="📄" title="Contract Signed" desc="New rental agreement signed for Downtown Apartment" time="Yesterday at 10:15 AM" />
                <ActivityItem icon="🖼️" title="Images Uploaded" desc="Pre-rental condition images uploaded for verification" time="2 days ago" />
              </div>
              <div className="mt-4">
                <button className="w-full text-center bg-gray-100 py-2 rounded-lg text-sm font-medium">View All Activity</button>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === "Properties" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PropertyCard
            image="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
            title="Modern Downtown Apartment"
            location="123 Main St, Downtown, City"
            price="$1,800"
            beds={2}
            baths={2}
            area="85m²"
            rating={4.8}
            verified
            contract
          />
          <PropertyCard
            image="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
            title="Cozy Suburban House"
            location="456 Park Ave, Suburb, City"
            price="$2,200"
            beds={3}
            baths={2}
            area="120m²"
            contract
          />
          <div className="flex items-center justify-center p-6 border-2 border-dashed rounded-xl bg-white">
            <div className="text-center">
              <div className="text-4xl mb-2">🏠</div>
              <p className="text-lg font-semibold">Add New Property</p>
              <p className="text-sm text-gray-500 mb-4">List a new property with secure smart contract options.</p>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">Add Property</button>
            </div>
          </div>
        </div>
      )}

      {/* Add your other tabs here if needed */}
    </div>
  );
}

function ActivityItem({ icon, title, desc, time }) {
  return (
    <div className="flex items-start space-x-3">
      <div>{icon}</div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-gray-500">{desc}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
    </div>
  );
}

function PropertyCard({ image, title, location, price, beds, baths, area, rating, verified, contract }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        {contract && <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">Smart Contract</span>}
        {verified && <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">Verified</span>}
      </div>
      <div className="p-4">
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-sm text-gray-500 mb-2">{location}</p>
        <p className="text-xl font-bold">{price}<span className="text-sm font-normal text-gray-500"> /month</span></p>
        <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
          <span>🛏️ {beds}</span>
          <span>🛁 {baths}</span>
          <span>📏 {area}</span>
        </div>
        {rating && <div className="text-sm mt-1 text-yellow-500">⭐ {rating}</div>}
        <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded-lg text-sm">View Property</button>
      </div>
    </div>
  );
}
