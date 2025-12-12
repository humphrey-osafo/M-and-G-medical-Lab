"use client";

export default function TestImage() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Image Test</h2>
      <div style={{ margin: '20px 0' }}>
        <h3>Test 1: Direct img tag</h3>
        <img 
          src="/images/facility.jpeg" 
          alt="Test Image"
          style={{ maxWidth: '300px', border: '1px solid #ccc' }}
          onError={(e) => console.error('Failed to load test image 1')}
        />
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h3>Test 2: Absolute path</h3>
        <img 
          src="http://localhost:3000/images/facility.jpeg" 
          alt="Test Image 2"
          style={{ maxWidth: '300px', border: '1px solid #ccc' }}
          onError={(e) => console.error('Failed to load test image 2')}
        />
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h3>Test 3: Base64 embedded image</h3>
        <div style={{ 
          width: '300px', 
          height: '200px', 
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #ccc'
        }}>
          <p>This is a placeholder for the facility image</p>
        </div>
      </div>
    </div>
  );
}
