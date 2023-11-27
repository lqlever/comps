import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = <div>
    <Button onClick={handleClose} primary>I accept</Button>
  </div>

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Here is a user agreement that you should read carefully before clicking "agree"
    </p>
  </Modal>

  return (
    <div>
      <Button onClick={handleClick} primary>Open Modal</Button>
      {showModal && modal}
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis velit dui, at iaculis tellus luctus vitae. Donec nec elit at eros commodo egestas id at erat. Phasellus auctor, nisl id gravida maximus, lacus lorem pellentesque augue, nec vestibulum ex justo nec lorem. Integer pretium tellus tellus, et convallis dui congue quis. Suspendisse quis arcu at felis dapibus luctus. Quisque convallis ultrices gravida. Quisque a arcu eget diam maximus ornare non ut nisl. Suspendisse potenti. Vestibulum tempor sagittis augue, a pretium dui. Etiam sollicitudin leo eget tortor pretium pellentesque. Nullam dignissim, orci eu pretium efficitur, eros ipsum interdum urna, in ultrices orci arcu vitae ante. Morbi vel lacus lectus. Vivamus eu semper erat, vitae lobortis enim. Nulla sit amet nisl accumsan, pulvinar eros sodales, ullamcorper elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis velit dui, at iaculis tellus luctus vitae. Donec nec elit at eros commodo egestas id at erat. Phasellus auctor, nisl id gravida maximus, lacus lorem pellentesque augue, nec vestibulum ex justo nec lorem. Integer pretium tellus tellus, et convallis dui congue quis. Suspendisse quis arcu at felis dapibus luctus. Quisque convallis ultrices gravida. Quisque a arcu eget diam maximus ornare non ut nisl. Suspendisse potenti. Vestibulum tempor sagittis augue, a pretium dui. Etiam sollicitudin leo eget tortor pretium pellentesque. Nullam dignissim, orci eu pretium efficitur, eros ipsum interdum urna, in ultrices orci arcu vitae ante. Morbi vel lacus lectus. Vivamus eu semper erat, vitae lobortis enim. Nulla sit amet nisl accumsan, pulvinar eros sodales, ullamcorper elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis velit dui, at iaculis tellus luctus vitae. Donec nec elit at eros commodo egestas id at erat. Phasellus auctor, nisl id gravida maximus, lacus lorem pellentesque augue, nec vestibulum ex justo nec lorem. Integer pretium tellus tellus, et convallis dui congue quis. Suspendisse quis arcu at felis dapibus luctus. Quisque convallis ultrices gravida. Quisque a arcu eget diam maximus ornare non ut nisl. Suspendisse potenti. Vestibulum tempor sagittis augue, a pretium dui. Etiam sollicitudin leo eget tortor pretium pellentesque. Nullam dignissim, orci eu pretium efficitur, eros ipsum interdum urna, in ultrices orci arcu vitae ante. Morbi vel lacus lectus. Vivamus eu semper erat, vitae lobortis enim. Nulla sit amet nisl accumsan, pulvinar eros sodales, ullamcorper elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis velit dui, at iaculis tellus luctus vitae. Donec nec elit at eros commodo egestas id at erat. Phasellus auctor, nisl id gravida maximus, lacus lorem pellentesque augue, nec vestibulum ex justo nec lorem. Integer pretium tellus tellus, et convallis dui congue quis. Suspendisse quis arcu at felis dapibus luctus. Quisque convallis ultrices gravida. Quisque a arcu eget diam maximus ornare non ut nisl. Suspendisse potenti. Vestibulum tempor sagittis augue, a pretium dui. Etiam sollicitudin leo eget tortor pretium pellentesque. Nullam dignissim, orci eu pretium efficitur, eros ipsum interdum urna, in ultrices orci arcu vitae ante. Morbi vel lacus lectus. Vivamus eu semper erat, vitae lobortis enim. Nulla sit amet nisl accumsan, pulvinar eros sodales, ullamcorper elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis velit dui, at iaculis tellus luctus vitae. Donec nec elit at eros commodo egestas id at erat. Phasellus auctor, nisl id gravida maximus, lacus lorem pellentesque augue, nec vestibulum ex justo nec lorem. Integer pretium tellus tellus, et convallis dui congue quis. Suspendisse quis arcu at felis dapibus luctus. Quisque convallis ultrices gravida. Quisque a arcu eget diam maximus ornare non ut nisl. Suspendisse potenti. Vestibulum tempor sagittis augue, a pretium dui. Etiam sollicitudin leo eget tortor pretium pellentesque. Nullam dignissim, orci eu pretium efficitur, eros ipsum interdum urna, in ultrices orci arcu vitae ante. Morbi vel lacus lectus. Vivamus eu semper erat, vitae lobortis enim. Nulla sit amet nisl accumsan, pulvinar eros sodales, ullamcorper elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis velit dui, at iaculis tellus luctus vitae. Donec nec elit at eros commodo egestas id at erat. Phasellus auctor, nisl id gravida maximus, lacus lorem pellentesque augue, nec vestibulum ex justo nec lorem. Integer pretium tellus tellus, et convallis dui congue quis. Suspendisse quis arcu at felis dapibus luctus. Quisque convallis ultrices gravida. Quisque a arcu eget diam maximus ornare non ut nisl. Suspendisse potenti. Vestibulum tempor sagittis augue, a pretium dui. Etiam sollicitudin leo eget tortor pretium pellentesque. Nullam dignissim, orci eu pretium efficitur, eros ipsum interdum urna, in ultrices orci arcu vitae ante. Morbi vel lacus lectus. Vivamus eu semper erat, vitae lobortis enim. Nulla sit amet nisl accumsan, pulvinar eros sodales, ullamcorper elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis velit dui, at iaculis tellus luctus vitae. Donec nec elit at eros commodo egestas id at erat. Phasellus auctor, nisl id gravida maximus, lacus lorem pellentesque augue, nec vestibulum ex justo nec lorem. Integer pretium tellus tellus, et convallis dui congue quis. Suspendisse quis arcu at felis dapibus luctus. Quisque convallis ultrices gravida. Quisque a arcu eget diam maximus ornare non ut nisl. Suspendisse potenti. Vestibulum tempor sagittis augue, a pretium dui. Etiam sollicitudin leo eget tortor pretium pellentesque. Nullam dignissim, orci eu pretium efficitur, eros ipsum interdum urna, in ultrices orci arcu vitae ante. Morbi vel lacus lectus. Vivamus eu semper erat, vitae lobortis enim. Nulla sit amet nisl accumsan, pulvinar eros sodales, ullamcorper elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis velit dui, at iaculis tellus luctus vitae. Donec nec elit at eros commodo egestas id at erat. Phasellus auctor, nisl id gravida maximus, lacus lorem pellentesque augue, nec vestibulum ex justo nec lorem. Integer pretium tellus tellus, et convallis dui congue quis. Suspendisse quis arcu at felis dapibus luctus. Quisque convallis ultrices gravida. Quisque a arcu eget diam maximus ornare non ut nisl. Suspendisse potenti. Vestibulum tempor sagittis augue, a pretium dui. Etiam sollicitudin leo eget tortor pretium pellentesque. Nullam dignissim, orci eu pretium efficitur, eros ipsum interdum urna, in ultrices orci arcu vitae ante. Morbi vel lacus lectus. Vivamus eu semper erat, vitae lobortis enim. Nulla sit amet nisl accumsan, pulvinar eros sodales, ullamcorper elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis velit dui, at iaculis tellus luctus vitae. Donec nec elit at eros commodo egestas id at erat. Phasellus auctor, nisl id gravida maximus, lacus lorem pellentesque augue, nec vestibulum ex justo nec lorem. Integer pretium tellus tellus, et convallis dui congue quis. Suspendisse quis arcu at felis dapibus luctus. Quisque convallis ultrices gravida. Quisque a arcu eget diam maximus ornare non ut nisl. Suspendisse potenti. Vestibulum tempor sagittis augue, a pretium dui. Etiam sollicitudin leo eget tortor pretium pellentesque. Nullam dignissim, orci eu pretium efficitur, eros ipsum interdum urna, in ultrices orci arcu vitae ante. Morbi vel lacus lectus. Vivamus eu semper erat, vitae lobortis enim. Nulla sit amet nisl accumsan, pulvinar eros sodales, ullamcorper elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis velit dui, at iaculis tellus luctus vitae. Donec nec elit at eros commodo egestas id at erat. Phasellus auctor, nisl id gravida maximus, lacus lorem pellentesque augue, nec vestibulum ex justo nec lorem. Integer pretium tellus tellus, et convallis dui congue quis. Suspendisse quis arcu at felis dapibus luctus. Quisque convallis ultrices gravida. Quisque a arcu eget diam maximus ornare non ut nisl. Suspendisse potenti. Vestibulum tempor sagittis augue, a pretium dui. Etiam sollicitudin leo eget tortor pretium pellentesque. Nullam dignissim, orci eu pretium efficitur, eros ipsum interdum urna, in ultrices orci arcu vitae ante. Morbi vel lacus lectus. Vivamus eu semper erat, vitae lobortis enim. Nulla sit amet nisl accumsan, pulvinar eros sodales, ullamcorper elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis velit dui, at iaculis tellus luctus vitae. Donec nec elit at eros commodo egestas id at erat. Phasellus auctor, nisl id gravida maximus, lacus lorem pellentesque augue, nec vestibulum ex justo nec lorem. Integer pretium tellus tellus, et convallis dui congue quis. Suspendisse quis arcu at felis dapibus luctus. Quisque convallis ultrices gravida. Quisque a arcu eget diam maximus ornare non ut nisl. Suspendisse potenti. Vestibulum tempor sagittis augue, a pretium dui. Etiam sollicitudin leo eget tortor pretium pellentesque. Nullam dignissim, orci eu pretium efficitur, eros ipsum interdum urna, in ultrices orci arcu vitae ante. Morbi vel lacus lectus. Vivamus eu semper erat, vitae lobortis enim. Nulla sit amet nisl accumsan, pulvinar eros sodales, ullamcorper elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis velit dui, at iaculis tellus luctus vitae. Donec nec elit at eros commodo egestas id at erat. Phasellus auctor, nisl id gravida maximus, lacus lorem pellentesque augue, nec vestibulum ex justo nec lorem. Integer pretium tellus tellus, et convallis dui congue quis. Suspendisse quis arcu at felis dapibus luctus. Quisque convallis ultrices gravida. Quisque a arcu eget diam maximus ornare non ut nisl. Suspendisse potenti. Vestibulum tempor sagittis augue, a pretium dui. Etiam sollicitudin leo eget tortor pretium pellentesque. Nullam dignissim, orci eu pretium efficitur, eros ipsum interdum urna, in ultrices orci arcu vitae ante. Morbi vel lacus lectus. Vivamus eu semper erat, vitae lobortis enim. Nulla sit amet nisl accumsan, pulvinar eros sodales, ullamcorper elit.
      </p>
    </div>
  );
};

export default ModalPage;

