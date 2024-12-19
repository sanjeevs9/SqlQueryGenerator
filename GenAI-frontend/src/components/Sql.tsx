import { Database } from "lucide-react";
import React, { useState } from 'react';
import axios from 'axios';
import SchemaViewer from './SchemaViewer';

interface Text {
    type: string;
    text: string;
  }
  
  interface Schema {
    sql: Text[]
  }
  

export default function Sql() {
    const [inputText, setInputText] = useState('');
    const [schema, setSchema] = useState<Schema | null>(null);
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      
      try {
        const { data } = await axios.post<Schema>('https://sqlquery.sanjeevdev.in/api/generate-database', {
          description: inputText
        });
        console.log(data)
        
        if (!data.sql || !Array.isArray(data.sql)) {
          throw new Error('Invalid schema format received');
        }
        
        setSchema(data);
      } catch (error) {
        console.error('Error generating schema:', error);
        // Add error handling UI here if needed
      } finally {
        setLoading(false);
      }
    };

    
  return(
    <>
        <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Database className="h-12 w-12 text-blue-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            SQL Schema Generator
          </h1>
          <p className="text-gray-600">
            Enter your requirements and get a complete SQL schema instantly
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
              Project Requirements
            </label>
            <textarea
              id="requirements"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your project requirements..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading || !inputText.trim()}
              className={`mt-4 w-full py-2 px-4 rounded-md text-white font-medium
                ${loading || !inputText.trim()
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'
                } transition-colors`}
            >
              {loading ? 'Generating Schema...' : 'Generate SQL Schema'}
            </button>
          </div>
        </form>

        {schema && <SchemaViewer schema={schema} />}
      </div>
    </div>
    </>
  )
}
