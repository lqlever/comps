import Table from '../components/Table';

const data = [
  { name: 'Apple', color: 'bg-red-500', score: 5 },
  { name: 'Banana', color: 'bg-yellow-500', score: 3 },
  { name: 'Grape', color: 'bg-purple-500', score: 1 },
  { name: 'Orange', color: 'bg-orange-500', score: 4 },
  { name: 'Lime', color: 'bg-green-500', score: 2 }
];

const config = [
  { 
    label: 'Name',
    render: (fruit) => fruit.name,
  },
  { 
    label: 'Color',
    render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
  },
  { 
    label: 'Score',
    render: (fruit) => fruit.score
  } 
];

const keyFn = (fruit) => {
  return fruit.name;
};


function TablePage() {
  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn}  />
    </div>
  );
};

export default TablePage;