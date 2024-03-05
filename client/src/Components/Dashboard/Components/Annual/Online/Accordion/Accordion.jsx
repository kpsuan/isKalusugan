import React from 'react';
import MultipleAccordions from './MultipleAccordions';
import './accordion.css'
function App() {
    const accordionData = [
        { title: 'Pre-Enlistment Period', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl quis risus eleifend venenatis. Mauris nec justo nec ligula suscipit consequat. Donec rutrum nisi nec faucibus euismod. Sed sit amet vestibulum metus. ' },
        { title: 'Accordion 2', content: 'Content for Accordion 2' },
        { title: 'Accordion 3', content: 'Content for Accordion 3' }
    ];

    return (
        <div className='accordion-div'>
            <p>Below is the process for the Online Physical Exam, Click the Get Started button to get started</p>
            <div className="acc">
                <MultipleAccordions data={accordionData} />
            </div>
        </div>
    );
}

export default App;
