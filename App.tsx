import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AQICard } from './components/AQICard';
import { DetailedView } from './components/DetailedView';
import { AQILegend } from './components/AQILegend';
import { SAMPLE_AQI_DATA } from './data/sampleData';
import { AQIData } from './types/aqi';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<AQIData | null>(null);
  const [aqiData, setAqiData] = useState<AQIData[]>(SAMPLE_AQI_DATA);
  const [filteredData, setFilteredData] = useState<AQIData[]>(SAMPLE_AQI_DATA);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredData(aqiData);
    } else {
      const filtered = aqiData.filter(data =>
        data.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, aqiData]);

  const handleSearch = () => {
    // In a real app, this would trigger an API call
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Current Air Quality
          </h2>
          <p className="text-gray-600">
            Real-time air quality data from monitoring stations worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {filteredData.map((data, index) => (
                <AQICard
                  key={index}
                  data={data}
                  onClick={() => setSelectedLocation(data)}
                />
              ))}
            </div>
            
            {filteredData.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-2">No locations found</div>
                <div className="text-gray-600">
                  Try searching for a different city or location
                </div>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-1">
            <AQILegend />
          </div>
        </div>
      </main>

      {selectedLocation && (
        <DetailedView
          data={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
}

export default App;