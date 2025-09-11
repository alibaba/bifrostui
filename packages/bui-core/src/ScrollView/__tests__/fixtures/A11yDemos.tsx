import React from 'react';
import ScrollView from '../../ScrollView';

// Basic ScrollView demo for testing
export const BasicScrollViewDemo: React.FC = () => {
  return (
    <ScrollView scrollY style={{ height: '300px', width: '100%' }}>
      {Array.from({ length: 50 }, (_, index) => (
        <div key={index} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
          Item {index + 1}
        </div>
      ))}
    </ScrollView>
  );
};

// Horizontal ScrollView demo
export const HorizontalScrollViewDemo: React.FC = () => {
  return (
    <ScrollView scrollX style={{ width: '300px' }}>
      <div style={{ display: 'flex', width: 'max-content' }}>
        {Array.from({ length: 20 }, (_, index) => (
          <div 
            key={index} 
            style={{ 
              minWidth: '100px', 
              height: '80px', 
              margin: '0 5px',
              padding: '10px',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Item {index + 1}
          </div>
        ))}
      </div>
    </ScrollView>
  );
};

// ScrollView with scroll events demo
export const ScrollEventsDemo: React.FC = () => {
  const [scrollInfo, setScrollInfo] = React.useState({
    scrollTop: 0,
    atTop: false,
    atBottom: false,
  });

  const handleScroll = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const event = e as React.SyntheticEvent<HTMLDivElement, Event> & {
      detail?: {
        scrollTop: number;
        scrollHeight: number;
        offsetHeight?: number;
      };
    };
    
    const scrollTop = event.detail?.scrollTop || 0;
    setScrollInfo(prev => ({
      ...prev,
      scrollTop,
    }));
  };

  const handleScrollToUpper = () => {
    setScrollInfo(prev => ({ ...prev, atTop: true, atBottom: false }));
  };

  const handleScrollToLower = () => {
    setScrollInfo(prev => ({ ...prev, atTop: false, atBottom: true }));
  };

  return (
    <div>
      <div data-testid="scroll-info" style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f9f9f9' }}>
        <p>Scroll Top: {scrollInfo.scrollTop}</p>
        <p>At Top: {scrollInfo.atTop ? 'Yes' : 'No'}</p>
        <p>At Bottom: {scrollInfo.atBottom ? 'Yes' : 'No'}</p>
      </div>
      <ScrollView 
        scrollY 
        style={{ height: '200px', width: '100%' }}
        onScroll={handleScroll}
        onScrollToUpper={handleScrollToUpper}
        onScrollToLower={handleScrollToLower}
        upperThreshold={30}
        lowerThreshold={30}
      >
        {Array.from({ length: 30 }, (_, index) => (
          <div key={index} style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
            Scroll Item {index + 1}
          </div>
        ))}
      </ScrollView>
    </div>
  );
};

// ScrollView with controlled scroll position
export const ControlledScrollDemo: React.FC = () => {
  const [scrollTop, setScrollTop] = React.useState(0);
  const [scrollIntoView, setScrollIntoView] = React.useState<string>('');

  const scrollToPosition = (position: number) => {
    setScrollIntoView('');
    setScrollTop(position);
  };

  const scrollToElement = (elementId: string) => {
    setScrollTop(0);
    setScrollIntoView(elementId);
  };

  return (
    <div>
      <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f5f5f5' }}>
        <button 
          type="button"
          onClick={() => scrollToPosition(0)}
          style={{ marginRight: '5px' }}
        >
          Top
        </button>
        <button 
          type="button"
          onClick={() => scrollToPosition(200)}
          style={{ marginRight: '5px' }}
        >
          200px
        </button>
        <button 
          type="button"
          onClick={() => scrollToElement('item-10')}
          style={{ marginRight: '5px' }}
        >
          Item 10
        </button>
        <button 
          type="button"
          onClick={() => scrollToElement('item-20')}
        >
          Item 20
        </button>
      </div>
      <ScrollView 
        scrollY 
        style={{ height: '250px', width: '100%' }}
        scrollTop={scrollTop}
        scrollIntoView={scrollIntoView}
        scrollWithAnimation
      >
        {Array.from({ length: 30 }, (_, index) => (
          <div 
            key={index} 
            id={`item-${index + 1}`}
            style={{ 
              padding: '20px', 
              borderBottom: '1px solid #ccc',
              backgroundColor: (index + 1) % 10 === 0 ? '#e6f3ff' : 'white'
            }}
          >
            Item {index + 1} {(index + 1) % 10 === 0 && '(Highlighted)'}
          </div>
        ))}
      </ScrollView>
    </div>
  );
};

// ScrollView with both directions
export const BidirectionalScrollDemo: React.FC = () => {
  return (
    <ScrollView 
      scrollX 
      scrollY 
      style={{ 
        width: '300px', 
        height: '200px', 
        border: '1px solid #ddd',
        borderRadius: '4px'
      }}
    >
      <div style={{ 
        width: '600px', 
        height: '400px',
        backgroundImage: 'linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          backgroundColor: 'white',
          border: '2px solid #007acc',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#007acc' }}>Scroll in both directions!</h3>
          <p style={{ margin: 0, color: '#666' }}>This content area is larger than the viewport</p>
        </div>
      </div>
    </ScrollView>
  );
};

// ScrollView with custom threshold testing
export const ThresholdTestDemo: React.FC = () => {
  const [thresholdEvents, setThresholdEvents] = React.useState<string[]>([]);

  const addEvent = (event: string) => {
    setThresholdEvents(prev => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${event}`]);
  };

  return (
    <div>
      <div data-testid="threshold-events" style={{ 
        marginBottom: '10px', 
        padding: '10px', 
        backgroundColor: '#f0f8ff',
        minHeight: '80px'
      }}>
        <strong>Threshold Events:</strong>
        {thresholdEvents.map((event, index) => (
          <div key={index} style={{ fontSize: '12px', color: '#666' }}>{event}</div>
        ))}
      </div>
      <ScrollView 
        scrollY 
        style={{ height: '150px', width: '100%' }}
        upperThreshold={20}
        lowerThreshold={20}
        onScrollToUpper={() => addEvent('Reached upper threshold (20px)')}
        onScrollToLower={() => addEvent('Reached lower threshold (20px)')}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <div key={index} style={{ 
            padding: '12px', 
            borderBottom: '1px solid #eee',
            backgroundColor: index === 0 || index === 19 ? '#fff3cd' : 'white'
          }}>
            {index === 0 && 'First Item (Top Threshold Test)'}
            {index === 19 && 'Last Item (Bottom Threshold Test)'}
            {index !== 0 && index !== 19 && `Item ${index + 1}`}
          </div>
        ))}
      </ScrollView>
    </div>
  );
};