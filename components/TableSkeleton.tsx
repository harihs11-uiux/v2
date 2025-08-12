import React from 'react';

interface TableSkeletonProps {
  rows?: number;
}

export function TableSkeleton({ rows = 10 }: TableSkeletonProps) {
  return (
    <div 
      className="w-full h-full bg-white rounded shadow-[0px_0px_13px_1px_rgba(26,38,120,0.08)] overflow-hidden flex flex-col animate-pulse"
      style={{ 
        backgroundColor: 'white',
        willChange: 'transform'
      }}
    >
      
      {/* SKELETON TABLE WITH COMPREHENSIVE BACKGROUND COVERAGE */}
      <div 
        className="w-full h-full overflow-auto bg-white"
        style={{ 
          backgroundColor: 'white',
          willChange: 'scroll-position'
        }}
      >
        {/* FULL COVERAGE BACKGROUND DIV */}
        <div 
          className="absolute inset-0 bg-white -z-50" 
          style={{ 
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            minWidth: '1600px'
          }}
        ></div>
        
        <table 
          className="w-full border-collapse bg-white min-w-[1600px] relative"
          style={{ 
            backgroundColor: 'white',
            willChange: 'transform'
          }}
        >
          
          {/* SKELETON HEADER WITH ENHANCED BACKGROUND COVERAGE */}
          <thead 
            className="sticky top-0 z-50 bg-[#ebeef7]"
            style={{ 
              backgroundColor: '#ebeef7',
              willChange: 'transform'
            }}
          >
            <tr 
              className="bg-[#ebeef7]"
              style={{ 
                backgroundColor: '#ebeef7',
                willChange: 'transform'
              }}
            >
              {/* Left Frozen Columns with Enhanced Background Coverage */}
              <th 
                className="sticky left-0 z-60 bg-[#ebeef7] border-r border-b border-[#d0d5e3] px-2 py-1.5 w-[50px] shadow-[2px_0_4px_0_rgba(0,0,0,0.1)]"
                style={{ 
                  backgroundColor: '#ebeef7',
                  willChange: 'transform'
                }}
              >
                <div className="absolute inset-0 bg-[#ebeef7] -z-30" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="absolute inset-0 bg-[#ebeef7] -z-20" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="absolute inset-0 bg-[#ebeef7] -z-10" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
              </th>
              <th 
                className="sticky left-[50px] z-60 bg-[#ebeef7] border-r border-b border-[#d0d5e3] px-2 py-1.5 w-[80px] shadow-[2px_0_4px_0_rgba(0,0,0,0.1)]"
                style={{ 
                  backgroundColor: '#ebeef7',
                  willChange: 'transform'
                }}
              >
                <div className="absolute inset-0 bg-[#ebeef7] -z-30" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="absolute inset-0 bg-[#ebeef7] -z-20" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="absolute inset-0 bg-[#ebeef7] -z-10" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="w-12 h-4 bg-gray-300 rounded animate-pulse"></div>
              </th>
              <th 
                className="sticky left-[130px] z-60 bg-[#ebeef7] border-r border-b border-[#d0d5e3] px-2 py-1.5 w-[200px] shadow-[2px_0_4px_0_rgba(0,0,0,0.1)]"
                style={{ 
                  backgroundColor: '#ebeef7',
                  willChange: 'transform'
                }}
              >
                <div className="absolute inset-0 bg-[#ebeef7] -z-30" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="absolute inset-0 bg-[#ebeef7] -z-20" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="absolute inset-0 bg-[#ebeef7] -z-10" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
              </th>
              <th 
                className="sticky left-[330px] z-60 bg-[#ebeef7] border-r border-b border-[#d0d5e3] px-2 py-1.5 w-[200px] shadow-[2px_0_4px_0_rgba(0,0,0,0.1)]"
                style={{ 
                  backgroundColor: '#ebeef7',
                  willChange: 'transform'
                }}
              >
                <div className="absolute inset-0 bg-[#ebeef7] -z-30" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="absolute inset-0 bg-[#ebeef7] -z-20" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="absolute inset-0 bg-[#ebeef7] -z-10" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="w-20 h-4 bg-gray-300 rounded animate-pulse"></div>
              </th>
              
              {/* Scrollable Middle Columns with Enhanced Backgrounds */}
              <th 
                className="bg-[#ebeef7] border-r border-b border-[#d0d5e3] px-2 py-1.5 w-[120px]"
                style={{ 
                  backgroundColor: '#ebeef7',
                  willChange: 'transform'
                }}
              >
                <div className="absolute inset-0 bg-[#ebeef7] -z-10" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="w-20 h-4 bg-gray-300 rounded animate-pulse"></div>
              </th>
              <th 
                className="bg-[#ebeef7] border-r border-b border-[#d0d5e3] px-2 py-1.5 w-[120px]"
                style={{ 
                  backgroundColor: '#ebeef7',
                  willChange: 'transform'
                }}
              >
                <div className="absolute inset-0 bg-[#ebeef7] -z-10" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
              </th>
              <th 
                className="bg-[#ebeef7] border-r border-b border-[#d0d5e3] px-2 py-1.5 w-[180px]"
                style={{ 
                  backgroundColor: '#ebeef7',
                  willChange: 'transform'
                }}
              >
                <div className="absolute inset-0 bg-[#ebeef7] -z-10" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
              </th>
              <th 
                className="bg-[#ebeef7] border-r border-b border-[#d0d5e3] px-2 py-1.5 w-[300px]"
                style={{ 
                  backgroundColor: '#ebeef7',
                  willChange: 'transform'
                }}
              >
                <div className="absolute inset-0 bg-[#ebeef7] -z-10" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="w-32 h-4 bg-gray-300 rounded animate-pulse"></div>
              </th>
              <th 
                className="bg-[#ebeef7] border-r border-b border-[#d0d5e3] px-2 py-1.5 w-[80px]"
                style={{ 
                  backgroundColor: '#ebeef7',
                  willChange: 'transform'
                }}
              >
                <div className="absolute inset-0 bg-[#ebeef7] -z-10" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
              </th>
              <th 
                className="bg-[#ebeef7] border-r border-b border-[#d0d5e3] px-2 py-1.5 w-[150px]"
                style={{ 
                  backgroundColor: '#ebeef7',
                  willChange: 'transform'
                }}
              >
                <div className="absolute inset-0 bg-[#ebeef7] -z-10" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
              </th>
              <th 
                className="bg-[#ebeef7] border-r border-b border-[#d0d5e3] px-2 py-1.5 w-[350px]"
                style={{ 
                  backgroundColor: '#ebeef7',
                  willChange: 'transform'
                }}
              >
                <div className="absolute inset-0 bg-[#ebeef7] -z-10" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="w-20 h-4 bg-gray-300 rounded animate-pulse"></div>
              </th>
              
              {/* Right Frozen Columns with Enhanced Background Coverage */}
              <th 
                className="sticky right-[60px] z-60 bg-[#ebeef7] border-r border-b border-[#d0d5e3] px-2 py-1.5 w-[300px] shadow-[-2px_0_4px_0_rgba(0,0,0,0.1)]"
                style={{ 
                  backgroundColor: '#ebeef7',
                  willChange: 'transform'
                }}
              >
                <div className="absolute inset-0 bg-[#ebeef7] -z-30" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="absolute inset-0 bg-[#ebeef7] -z-20" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="absolute inset-0 bg-[#ebeef7] -z-10" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
              </th>
              <th 
                className="sticky right-0 z-60 bg-[#ebeef7] border-b border-[#d0d5e3] px-2 py-1.5 w-[60px] shadow-[-2px_0_4px_0_rgba(0,0,0,0.1)]"
                style={{ 
                  backgroundColor: '#ebeef7',
                  willChange: 'transform'
                }}
              >
                <div className="absolute inset-0 bg-[#ebeef7] -z-30" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="absolute inset-0 bg-[#ebeef7] -z-20" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="absolute inset-0 bg-[#ebeef7] -z-10" style={{ backgroundColor: '#ebeef7' }}></div>
                <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
              </th>
            </tr>
          </thead>
          
          {/* SKELETON BODY ROWS WITH ENHANCED BACKGROUND COVERAGE */}
          <tbody 
            className="bg-white"
            style={{ 
              backgroundColor: 'white',
              willChange: 'transform'
            }}
          >
            {Array.from({ length: rows }, (_, rowIndex) => (
              <tr 
                key={`skeleton-row-${rowIndex}`} 
                className="h-[40px] bg-white"
                style={{ 
                  backgroundColor: 'white',
                  willChange: 'transform'
                }}
              >
                {/* Left Frozen Columns with Enhanced Background Coverage */}
                <td 
                  className="sticky left-0 z-40 bg-white border-r border-b border-[#d0d5e3] px-2 py-1.5 relative shadow-[2px_0_4px_0_rgba(0,0,0,0.1)]"
                  style={{ 
                    backgroundColor: 'white',
                    willChange: 'transform'
                  }}
                >
                  <div className="absolute inset-0 bg-white -z-30" style={{ backgroundColor: 'white' }}></div>
                  <div className="absolute inset-0 bg-white -z-20" style={{ backgroundColor: 'white' }}></div>
                  <div className="absolute inset-0 bg-white -z-10" style={{ backgroundColor: 'white' }}></div>
                  <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td 
                  className="sticky left-[50px] z-40 bg-white border-r border-b border-[#d0d5e3] px-2 py-1.5 relative shadow-[2px_0_4px_0_rgba(0,0,0,0.1)]"
                  style={{ 
                    backgroundColor: 'white',
                    willChange: 'transform'
                  }}
                >
                  <div className="absolute inset-0 bg-white -z-30" style={{ backgroundColor: 'white' }}></div>
                  <div className="absolute inset-0 bg-white -z-20" style={{ backgroundColor: 'white' }}></div>
                  <div className="absolute inset-0 bg-white -z-10" style={{ backgroundColor: 'white' }}></div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-6 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </td>
                <td 
                  className="sticky left-[130px] z-40 bg-white border-r border-b border-[#d0d5e3] px-2 py-1.5 relative shadow-[2px_0_4px_0_rgba(0,0,0,0.1)]"
                  style={{ 
                    backgroundColor: 'white',
                    willChange: 'transform'
                  }}
                >
                  <div className="absolute inset-0 bg-white -z-30" style={{ backgroundColor: 'white' }}></div>
                  <div className="absolute inset-0 bg-white -z-20" style={{ backgroundColor: 'white' }}></div>
                  <div className="absolute inset-0 bg-white -z-10" style={{ backgroundColor: 'white' }}></div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </td>
                <td 
                  className="sticky left-[330px] z-40 bg-white border-r border-b border-[#d0d5e3] px-2 py-1.5 relative shadow-[2px_0_4px_0_rgba(0,0,0,0.1)]"
                  style={{ 
                    backgroundColor: 'white',
                    willChange: 'transform'
                  }}
                >
                  <div className="absolute inset-0 bg-white -z-30" style={{ backgroundColor: 'white' }}></div>
                  <div className="absolute inset-0 bg-white -z-20" style={{ backgroundColor: 'white' }}></div>
                  <div className="absolute inset-0 bg-white -z-10" style={{ backgroundColor: 'white' }}></div>
                  <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                </td>
                
                {/* Scrollable Middle Columns with Enhanced Backgrounds */}
                <td 
                  className="bg-white border-r border-b border-[#d0d5e3] px-2 py-1.5 relative"
                  style={{ 
                    backgroundColor: 'white',
                    willChange: 'transform'
                  }}
                >
                  <div className="absolute inset-0 bg-white -z-10" style={{ backgroundColor: 'white' }}></div>
                  <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td 
                  className="bg-white border-r border-b border-[#d0d5e3] px-2 py-1.5 relative"
                  style={{ 
                    backgroundColor: 'white',
                    willChange: 'transform'
                  }}
                >
                  <div className="absolute inset-0 bg-white -z-10" style={{ backgroundColor: 'white' }}></div>
                  <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td 
                  className="bg-white border-r border-b border-[#d0d5e3] px-2 py-1.5 relative"
                  style={{ 
                    backgroundColor: 'white',
                    willChange: 'transform'
                  }}
                >
                  <div className="absolute inset-0 bg-white -z-10" style={{ backgroundColor: 'white' }}></div>
                  <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td 
                  className="bg-white border-r border-b border-[#d0d5e3] px-2 py-1.5 relative"
                  style={{ 
                    backgroundColor: 'white',
                    willChange: 'transform'
                  }}
                >
                  <div className="absolute inset-0 bg-white -z-10" style={{ backgroundColor: 'white' }}></div>
                  <div className="w-40 h-4 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td 
                  className="bg-white border-r border-b border-[#d0d5e3] px-2 py-1.5 relative"
                  style={{ 
                    backgroundColor: 'white',
                    willChange: 'transform'
                  }}
                >
                  <div className="absolute inset-0 bg-white -z-10" style={{ backgroundColor: 'white' }}></div>
                  <div className="w-8 h-4 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td 
                  className="bg-white border-r border-b border-[#d0d5e3] px-2 py-1.5 relative"
                  style={{ 
                    backgroundColor: 'white',
                    willChange: 'transform'
                  }}
                >
                  <div className="absolute inset-0 bg-white -z-10" style={{ backgroundColor: 'white' }}></div>
                  <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td 
                  className="bg-white border-r border-b border-[#d0d5e3] px-2 py-1.5 relative"
                  style={{ 
                    backgroundColor: 'white',
                    willChange: 'transform'
                  }}
                >
                  <div className="absolute inset-0 bg-white -z-10" style={{ backgroundColor: 'white' }}></div>
                  <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                </td>
                
                {/* Right Frozen Columns with Enhanced Background Coverage */}
                <td 
                  className="sticky right-[60px] z-40 bg-white border-r border-b border-[#d0d5e3] px-2 py-1.5 relative shadow-[-2px_0_4px_0_rgba(0,0,0,0.1)]"
                  style={{ 
                    backgroundColor: 'white',
                    willChange: 'transform'
                  }}
                >
                  <div className="absolute inset-0 bg-white -z-30" style={{ backgroundColor: 'white' }}></div>
                  <div className="absolute inset-0 bg-white -z-20" style={{ backgroundColor: 'white' }}></div>
                  <div className="absolute inset-0 bg-white -z-10" style={{ backgroundColor: 'white' }}></div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </td>
                <td 
                  className="sticky right-0 z-40 bg-white border-b border-[#d0d5e3] px-2 py-1.5 relative shadow-[-2px_0_4px_0_rgba(0,0,0,0.1)]"
                  style={{ 
                    backgroundColor: 'white',
                    willChange: 'transform'
                  }}
                >
                  <div className="absolute inset-0 bg-white -z-30" style={{ backgroundColor: 'white' }}></div>
                  <div className="absolute inset-0 bg-white -z-20" style={{ backgroundColor: 'white' }}></div>
                  <div className="absolute inset-0 bg-white -z-10" style={{ backgroundColor: 'white' }}></div>
                  <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Loading Status Display with Enhanced Z-Index */}
      <div className="absolute top-4 right-4 bg-blue-900/90 text-white text-xs px-3 py-2 rounded-lg pointer-events-none z-[70]">
        <div className="font-bold text-blue-300 flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          LOADING DATA...
        </div>
        <div className="text-blue-200">
          Fetching {rows} rows • No white screens
        </div>
      </div>
    </div>
  );
}

export default TableSkeleton;