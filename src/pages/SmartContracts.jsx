import React from "react";

export default function SmartContractsTab() {
  return (
    <div className="space-y-8">
      {/* Existing Contract Card */}
      <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-100 p-2 rounded-full">
              📄
            </div>
            <div>
              <h2 className="text-xl font-semibold">Downtown Apartment Lease</h2>
              <p className="text-sm text-gray-500">Created on 6/15/2023</p>
            </div>
          </div>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Active</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500 font-medium">Contract ID</p>
            <p className="font-mono text-blue-700 break-all">
              0x7a58c0be72be218b41c608b7fe7c5bb630736c71
            </p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">Landlord</p>
            <p className="font-mono text-gray-700 break-all">
              0x8731D54E9D02c286767d56ac03e8037C07e01e98
            </p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">Deposit</p>
            <p className="text-gray-700 font-bold">$3,600</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">Tenant</p>
            <p className="font-mono text-gray-700 break-all">
              0x2b263f55Bf2125159Ce8Ec2Bb575C649f822ab46
            </p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">Duration</p>
            <p className="text-gray-700 flex items-center space-x-1">
              📅 7/1/2023 - 7/1/2024
            </p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">Last Updated</p>
            <p className="text-gray-700">6/20/2023</p>
          </div>
        </div>

        <div className="mt-4 flex items-center space-x-2 text-sm text-green-700">
          <span>🛡️</span>
          <p>This contract is secured with blockchain technology. All changes are recorded with timestamps.</p>
        </div>
      </div>

      {/* Create New Contract Section */}
      <div className="bg-white rounded-2xl shadow p-8 text-center border border-dashed border-gray-300">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-3xl">📄</div>
          <h3 className="text-lg font-semibold">Create New Contract</h3>
          <p className="text-sm text-gray-500">
            Generate a smart contract for your property rental agreement.
          </p>
          <button className="mt-4 bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-800">
            New Contract
          </button>
        </div>
      </div>
    </div>
  );
}
