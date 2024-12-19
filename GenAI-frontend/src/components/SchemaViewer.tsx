import { Copy } from 'lucide-react';

interface Schema {
  sql: {
    type: string;
    text: string;
  }[];
}

export default function SchemaViewer({ schema }: { schema: Schema | null }) {
  if (!schema) return null;

  const sqlContent = schema.sql[0].text
    .replace('```sql\n', '')
    .replace('\n```', '');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sqlContent);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Generated SQL Schema</h2>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          <Copy size={16} />
          Copy SQL
        </button>
      </div>
      <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto">
        <code className="text-sm text-gray-800 whitespace-pre">{sqlContent}</code>
      </pre>
    </div>
  );
}