import { useEffect, useState } from 'react';

interface ElementData {
  position: string;
  sectionId: number;
  type: string;
  row: number;
  col: number;
  id: string;
  MASTER: {
    name: string;
    required?: boolean;
    x: number;
    y: number;
    canvasWidth: number;
    canvasHeight: number;
    width: number;
    height: number;
    id: string;
    type: string;
    placeholder?: string;
    columns?: number;
    gap?: number;
  };
  TABLET: {
    name: string;
    required?: boolean;
    x: number;
    y: number;
    canvasWidth: number;
    canvasHeight: number;
    width: number;
    height: number;
    id: string;
    type: string;
    placeholder?: string;
    columns?: number;
    gap?: number;
  };
  MOBILE: {
    name: string;
    required?: boolean;
    x: number;
    y: number;
    canvasWidth: number;
    canvasHeight: number;
    width: number;
    height: number;
    id: string;
    type: string;
    placeholder?: string;
    columns?: number;
    gap?: number;
  };
}

export default function JsonDesign() {
    const [viewportType, setViewportType] = useState<'MASTER' | 'TABLET' | 'MOBILE'>('MASTER');
    const [elements, setElements] = useState<ElementData[]>([]);

    useEffect(() => {
        // In a real app, this would come from your API or state management
        const designData = {
            elements: [ 
                {
                    "position": "absolute",
                    "sectionId": 1,
                    "type": "search",
                    "row": 1,
                    "col": 1,
                    "id": "search_001",
                    "MASTER": {
                      "name": "Property Search",
                      "required": true,
                      "x": 140,
                      "y": 20,
                      "canvasWidth": 1280,
                      "canvasHeight": 720,
                      "width": 1000,
                      "height": 60,
                      "id": "search_001",
                      "type": "search",
                      "placeholder": "Search by location, property type, or keywords"
                    },
                    "TABLET": {
                      "name": "Property Search",
                      "required": true,
                      "x": 60,
                      "y": 20,
                      "canvasWidth": 768,
                      "canvasHeight": 720,
                      "width": 648,
                      "height": 50,
                      "id": "search_001",
                      "type": "search",
                      "placeholder": "Search properties..."
                    },
                    "MOBILE": {
                      "name": "Property Search",
                      "required": true,
                      "x": 20,
                      "y": 20,
                      "canvasWidth": 360,
                      "canvasHeight": 720,
                      "width": 320,
                      "height": 40,
                      "id": "search_001",
                      "type": "search",
                      "placeholder": "Search..."
                    }
                  },
                  {
                    "position": "absolute",
                    "sectionId": 1,
                    "type": "filter",
                    "row": 1,
                    "col": 2,
                    "id": "filter_001",
                    "MASTER": {
                      "name": "Property Filters",
                      "x": 140,
                      "y": 100,
                      "canvasWidth": 1280,
                      "canvasHeight": 720,
                      "width": 1000,
                      "height": 80,
                      "id": "filter_001",
                      "type": "filter"
                    },
                    "TABLET": {
                      "name": "Property Filters",
                      "x": 60,
                      "y": 90,
                      "canvasWidth": 768,
                      "canvasHeight": 720,
                      "width": 648,
                      "height": 60,
                      "id": "filter_001",
                      "type": "filter"
                    },
                    "MOBILE": {
                      "name": "Property Filters",
                      "x": 20,
                      "y": 80,
                      "canvasWidth": 360,
                      "canvasHeight": 720,
                      "width": 320,
                      "height": 120,
                      "id": "filter_001",
                      "type": "filter"
                    }
                  },
                  {
                    "position": "absolute",
                    "sectionId": 2,
                    "type": "grid",
                    "row": 2,
                    "col": 1,
                    "id": "grid_001",
                    "MASTER": {
                      "name": "Featured Properties Grid",
                      "x": 140,
                      "y": 200,
                      "canvasWidth": 1280,
                      "canvasHeight": 720,
                      "width": 1000,
                      "height": 400,
                      "id": "grid_001",
                      "type": "grid",
                      "columns": 3,
                      "gap": 20
                    },
                    "TABLET": {
                      "name": "Featured Properties Grid",
                      "x": 60,
                      "y": 170,
                      "canvasWidth": 768,
                      "canvasHeight": 720,
                      "width": 648,
                      "height": 500,
                      "id": "grid_001",
                      "type": "grid",
                      "columns": 2,
                      "gap": 16
                    },
                    "MOBILE": {
                      "name": "Featured Properties Grid",
                      "x": 20,
                      "y": 220,
                      "canvasWidth": 360,
                      "canvasHeight": 720,
                      "width": 320,
                      "height": 600,
                      "id": "grid_001",
                      "type": "grid",
                      "columns": 1,
                      "gap": 16
                    }
                  },
                  {
                    "position": "absolute",
                    "sectionId": 3,
                    "type": "carousel",
                    "row": 3,
                    "col": 1,
                    "id": "carousel_001",
                    "MASTER": {
                      "name": "Popular Destinations",
                      "x": 0,
                      "y": 620,
                      "canvasWidth": 1280,
                      "canvasHeight": 720,
                      "width": 1280,
                      "height": 300,
                      "id": "carousel_001",
                      "type": "carousel"
                    },
                    "TABLET": {
                      "name": "Popular Destinations",
                      "x": 0,
                      "y": 690,
                      "canvasWidth": 768,
                      "canvasHeight": 720,
                      "width": 768,
                      "height": 250,
                      "id": "carousel_001",
                      "type": "carousel"
                    },
                    "MOBILE": {
                      "name": "Popular Destinations",
                      "x": 0,
                      "y": 840,
                      "canvasWidth": 360,
                      "canvasHeight": 720,
                      "width": 360,
                      "height": 200,
                      "id": "carousel_001",
                      "type": "carousel"
                    }
                  },
                  {
                    "position": "absolute",
                    "sectionId": 4,
                    "type": "calendar",
                    "row": 1,
                    "col": 3,
                    "id": "calendar_001",
                    "MASTER": {
                      "name": "Check-in/Check-out",
                      "required": true,
                      "x": 140,
                      "y": 100,
                      "canvasWidth": 1280,
                      "canvasHeight": 720,
                      "width": 300,
                      "height": 80,
                      "id": "calendar_001",
                      "type": "calendar"
                    },
                    "TABLET": {
                      "name": "Check-in/Check-out",
                      "required": true,
                      "x": 60,
                      "y": 90,
                      "canvasWidth": 768,
                      "canvasHeight": 720,
                      "width": 200,
                      "height": 60,
                      "id": "calendar_001",
                      "type": "calendar"
                    },
                    "MOBILE": {
                      "name": "Check-in/Check-out",
                      "required": true,
                      "x": 20,
                      "y": 140,
                      "canvasWidth": 360,
                      "canvasHeight": 720,
                      "width": 320,
                      "height": 40,
                      "id": "calendar_001",
                      "type": "calendar"
                    }
                  }
             ]
        };
        setElements(designData.elements);
    }, []);

    const renderElement = (element: ElementData) => {
        const viewportData = element[viewportType];
        
        const style = {
            position: element.position as 'absolute',
            left: viewportData.x,
            top: viewportData.y,
            width: viewportData.width,
            height: viewportData.height,
        };

        switch (element.type) {
            case 'search':
                return (
                    <input
                        key={element.id}
                        type="search"
                        placeholder={viewportData.placeholder}
                        style={style}
                        className="border rounded p-2"
                    />
                );
            case 'filter':
                return (
                    <div key={element.id} style={style} className="border rounded p-2">
                        {viewportData.name}
                    </div>
                );
            case 'grid':
                return (
                    <div 
                        key={element.id} 
                        style={{
                            ...style,
                            display: 'grid',
                            gridTemplateColumns: `repeat(${viewportData.columns}, 1fr)`,
                            gap: viewportData.gap
                        }}
                        className="border rounded"
                    >
                        {/* Grid items would go here */}
                    </div>
                );
            case 'carousel':
                return (
                    <div key={element.id} style={style} className="border rounded">
                        {viewportData.name}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative w-full h-screen">
            <div className="mb-4 flex gap-2">
                <button 
                    onClick={() => setViewportType('MASTER')}
                    className={`px-4 py-2 rounded ${viewportType === 'MASTER' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Desktop
                </button>
                <button 
                    onClick={() => setViewportType('TABLET')}
                    className={`px-4 py-2 rounded ${viewportType === 'TABLET' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Tablet
                </button>
                <button 
                    onClick={() => setViewportType('MOBILE')}
                    className={`px-4 py-2 rounded ${viewportType === 'MOBILE' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Mobile
                </button>
            </div>
            <div 
                className="relative border rounded mx-auto"
                style={{
                    width: viewportType === 'MASTER' ? 1280 : viewportType === 'TABLET' ? 768 : 360,
                    height: 720
                }}
            >
                {elements.map(renderElement)}
            </div>
        </div>
    );
}
