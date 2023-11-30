import Table from '../components/Table';

const data = [
  { name: 'Apple', color: 'bg-red-500', score: 5 },
  { name: 'Banana', color: 'bg-yellow-500', score: 3 },
  { name: 'Grape', color: 'bg-purple-500', score: 1 },
  { name: 'Orange', color: 'bg-orange-500', score: 4 }
];

function TablePage() {
  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default TablePage;