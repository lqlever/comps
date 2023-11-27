import Accordion from '../components/Accordion';

function AccordionPage() {

  const items = [
    {
      id: 1,
      label: 'One',
      content: 'use react here',
    },
    {
      id: 2,
      label: 'Two',
      content: 'use react here again also',
    },
    {
      id: 3,
      label: 'Three',
      content: 'This is a space to use for content here for react reusable component',
    }
  ];

  return ( 
    <div>
     <Accordion items={items}/>
    </div>
  )
};

export default AccordionPage;

